##############################################
#  IMPORT STATEMENTS
##############################################

# == Native ==
import os
import sys
import json
import copy
import json
import datetime
from typing import Dict, List, Any, Tuple, Hashable, Iterable, Union
import functools
import ast

# == Flask ==
from flask import Flask, jsonify
from flask_cors import CORS

# == Pymongo ==
from pymongo import MongoClient
from bson.objectid import ObjectId

# == Local ==
from utils import load_json_file, save_json_file
from database_config import DatabaseConfiguration
from annotator_config import Configuration
from annotator import DialogueAnnotator

class DatabaseManagement(object):

	__DEFAULT_PATH = "LIDA_ANNOTATIONS"

	def selected(collection):
		if collection == "dialogues_collections":
			return DatabaseConfiguration.dialogueCollections
		elif collection == "annotated_collections":
			return DatabaseConfiguration.annotatedCollections
		else:
			return DatabaseConfiguration.users
	
	def readDatabase(coll,pairs=None, projection=None):
		# if field parameter is provided the search will be a projection of the id
		# and the requested field only.
		# if string is provided the search will be restricted to the string match
		# last parameter allows to restrict response to desired fields

		responseObject = []

		selected_collection = DatabaseManagement.selected(coll)

		print(" * Searching in:",coll,"for key '",pairs)

		entries = {}

		#adds restrictions to the search
		if pairs is None:
			pairs = {}
		
		#search with projection of interested fields or simple search
		if projection is not None:
			query = selected_collection.find(pairs,projection)
		else:
			query = selected_collection.find(pairs)

		#convert objectId into string and gold in true or false
		#calculate document length which also is dialogues total number
		for line in query:
			if line.get("_id") is not None:
				line["_id"] = str(line["_id"])
			if line.get("document") is not None:
				line["documentLength"] = len(line["document"])
			responseObject.append(line)

		print(responseObject);

		return responseObject

	def deleteDoc(collection, id):

		#delete a database document by id

		DatabaseManagement.selected(collection).delete_one({"id":id})

		responseObject = { "status":"success" }
		return responseObject

	def createDoc(document_id, collection, values):
		
		print(" * Creating document", document_id, "in",collection)
		DatabaseManagement.selected(collection).save(values)
		
		response = {"staus":"success"}
		return response 

	def updateDoc(doc_id, collection, fields):

		DatabaseManagement.selected(collection).update({ "id":doc_id }, { "$set": fields })

	def pullFromDoc(doc_id, collection, field):

		value = field["dialogue"]

		mainDocument = (DatabaseManagement.readDatabase("dialogues_collections", {"id":doc_id}, {"document":1}))
		annotatedDocuments = (DatabaseManagement.readDatabase("annotated_collections", {"id":doc_id}, {"document":1}))

		for i in range(len(annotatedDocuments)):
			del annotatedDocuments[i]["document"][value]
			DatabaseManagement.selected("annotated_collections").update(
				{"_id":ObjectId(annotatedDocuments[i]["_id"])}, 
				{ "$set": {
					"document":annotatedDocuments[i]["document"], 
					"documentLength":len(annotatedDocuments[i]["document"])
				}
			})

		del mainDocument[0]["document"][value]
		DatabaseManagement.selected("dialogues_collections").update(
			{ "id":doc_id }, 
			{ "$set": {
				"document":mainDocument[0]["document"], 
				"documentLength":len(mainDocument[0]["document"])
				} 
			})

		return {"status":"success"}


###############################################
# ANNOTATIONS AND DIALOGUE-COLLECTIONS UPDATE
################################################

	def storeAnnotations(username, destination, fields, backup=None):
		#update the database user's document
		annotations = DialogueAnnotator.get_dialogues(DialogueAnnotator,username)

		#if back up mode then saves with a different id and 
		# checks if document will be empty before saving
		if backup:
			if annotations == {}:
				responseObject = {"status":"empty"}
				return responseObject

		#saving or updating
		if len(DatabaseManagement.readDatabase("annotated_collections",{"id":destination, "annotator":username})) == 0:
			values = {
				"id":destination, 
				"fromCollection":destination, 
				"annotator":username, 
				"done":False, 
				"status":fields["status"],
				"document":annotations,
				"lastUpdate":datetime.datetime.utcnow()
			}
			print(" * Creating document", destination, "in annotated_collections")
			DatabaseManagement.createDoc(destination, "annotated_collections", values)
		else:
			print(" * Updating document", destination, "in annotated_collections")
			values = { "status":fields["status"], "document":annotations, "lastUpdate":datetime.datetime.utcnow() }
			DatabaseManagement.updateAnnotations(username, destination, values)
		
		responseObject = {"status":"success"}
		return responseObject	

	def updateAnnotations(username, destination, fields):
		DatabaseManagement.selected("annotated_collections").update(
			{ "id":destination, "annotator":username }, { "$set": fields })


class LoginFuncs(object):
	"""
	Login function and admin account restoring
	"""

	administratorDefault = {
		"id":"admin",
		"userName":"admin",
		"password":"admin",
		"email":"",
		"role":"administrator"
	}

	if DatabaseConfiguration.users.count_documents({"id":"admin"}) == 0:
		DatabaseConfiguration.users.insert_one(administratorDefault)
		print(" * Default admin account created: please log-in with username 'admin' and password 'admin'")


	def logIn(userID, userPass):

		response = { "status":"fail" }

		query = {"userName":userID,"password":userPass}

		userDetails = DatabaseConfiguration.users.find_one(query)

		if userDetails != None:
			if userDetails["userName"] == userID:
				if userDetails["password"] == userPass:
					response = { "status":"success", "role":userDetails["role"] }

		return response
