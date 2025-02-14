Vue.component("supervision-view", {

   props: [
      "alreadyVisited", "userName"
   ],

   data () {
      return {
         allCollectionsMetadata: [],
         showAnnotatorNamesForIds: [],
         guiMessages,
         selectedCollection:'',
         selectedAnnotator:'',
         selectedAnnotationStyle:'',
         selectedAnnotationRate:'',
         allAnnotators:[],
         mode:'supervision-collections-list',
         editorMode:false,
      }
   },

   mounted () {
      this.getAllCollectionIdsFromServer();
   },

   created () {
      adminEventBus.$on("annotator_selected", this.clicked_annotator);
      adminEventBus.$on("dialogue_su_selected", this.load_in_dialogue_in_supervision);
      adminEventBus.$on("supervision_go_back_to_dialogues", this.clear_view);
      annotationAppEventBus.$on("go_back", this.clear_view );
   },

   methods: {        

      go_back : function(){
         console.log("==================================");
         if (this.mode == "supervision-annotating") {
            //manually resetting event listener
            annotationAppEventBus._events["new_empty_turn"] = null;
            annotationAppEventBus._events["selected_text"] = null;
            annotationAppEventBus._events["turn_updated_string"] = null;
            annotationAppEventBus._events["update_turn_id"] = null;
            annotationAppEventBus._events["delete_turn"] = null;
            this.mode = "supervision-dialogues-list";
         } else if (this.mode == "supervision-dialogues-list") {
            this.mode = "supervision-annotators-list";
            this.selectedAnnotator = "";
         } else if (this.mode == "supervision-annotators-list") {
            this.mode = "supervision-collections-list";
            this.selectedCollection = "";
         } else {
            adminEventBus.$off("annotator_selected", this.clicked_annotator);
            adminEventBus.$off("dialogue_su_selected", this.load_in_dialogue_in_supervision);
            adminEventBus.$off("supervision_go_back_to_dialogues", this.clear_view);
            annotationAppEventBus.$off("go_back", this.clear_view );
            adminEventBus.$emit("go_back");
         }
      },

      clicked_collection(id, assignedTo, index) {
         console.log(index);
         this.selectedAnnotationStyle = this.allCollectionsMetadata[index].annotationStyle;
         this.selectedCollection = id;
         this.allAnnotators = assignedTo;
         this.mode = "supervision-annotators-list";
      },

      clicked_annotator(annotator, status) {
         console.log(annotator);
         this.selectedAnnotationRate = status;
         this.selectedAnnotator = annotator;
         this.mode = "supervision-dialogues-list";
      },

      load_in_dialogue_in_supervision: function (event) {
        this.displayingDialogue = event;
        this.mode = 'supervision-annotating';
      },

      clear_view: function() {
         try {
			 event.stopPropagation();
	     } catch {
			console.log("no event that can propagates");
		 } 
         this.mode = "supervision-collections-list";
      },

      getAllCollectionIdsFromServer() {
         document.body.style.cursor = "progress";
         backend.get_collections_and_annotations_meta()
            .then( (response) => {
               console.log(response);
               this.allCollectionsMetadata = response;
               document.body.style.cursor = null;
         });
      },

      gridStyle(columnNum) {
         return {
            gridTemplateColumns: `repeat(${columnNum}, minmax(0px, 1fr))`,
            display: 'grid'
         }
      },

      annotatorRate(status) {
         if (status == undefined) {
            return {
               width: `0%`
            }
         } else {
            return {
               width: `${status}`
            }
         }
      },

      toggle_show_annotators(dialogueName){
         if (this.show_annotators(dialogueName)) {
            index = this.showAnnotatorNamesForIds.indexOf(dialogueName)
            this.showAnnotatorNamesForIds.splice(index, 1)
         } else {
            this.showAnnotatorNamesForIds.push(dialogueName)
         }
      },

      show_annotators(dialogueName){
         return this.showAnnotatorNamesForIds.includes(dialogueName)
      }

   },
   template:
   `
<div id="supervision-container">
   <div class="dialogue-list-title-container">
      <div class="all-dialogues-list-title">
            <h2>{{guiMessages.selected.admin.supervision}}</h2>
      </div>
      <user-bar v-bind:userName="userName"></user-bar>
      <div class="help-button-container">
            <button v-on:click="go_back($event)" class="back-button btn btn-sm">{{guiMessages.selected.annotation_app.backToAll}}</button>
      </div>
   </div>
   
   <div v-if="mode == 'supervision-collections-list'" class="inner-wrap">

      <h2 class="list-title">{{guiMessages.selected.lida.buttonCollections}}</h2>
      <ul class="dialogue-list">
          <li class="listed-dialogue" v-for="(name, index) in allCollectionsMetadata">
            <div class="int-coll-list-single-item-container">
               <div class="int-coll-info">
                  <div class="int-coll-id" v-on:click="clicked_collection(name.id, name.assignedTo, index)">
                     {{name.id}}
                  </div>

                  <div class="errors-space" v-on:click="clicked_collection(name.id, name.assignedTo, index)">
                     {{guiMessages.selected.admin.dataItems}}:<span class="gold-false">{{name.documentLength}}</span>
                  </div>

                  <div class="gold-space" v-on:click="clicked_collection(name.id, name.assignedTo, index)">
                     Gold: <span v-if="name.gold" class="gold-true">True</span>
                     <span v-else>False</span>
                  </div>

				<template v-if="name.assignedTo.length != 1">
                  <div v-if="show_annotators(name.id)"
                     class="int-coll-num-turns-clicked"
                     v-on:click="toggle_show_annotators(name.id)">
                    {{ guiMessages.selected.admin.annotators }}: {{ name.assignedTo }}
                  </div>
                  <div v-else
                     class="int-coll-num-turns"
                     v-on:click="toggle_show_annotators(name.id)">
                    {{ guiMessages.selected.admin.annotators }}: {{ name.assignedTo.length }}
                  </div>
				</template>
				<template v-else>
				  <div class="int-coll-num-turns static-num-turns" style="letter-spacing:0.5px; font-size:10.5px;">
                    {{ guiMessages.selected.admin.annotator }}: {{ name.assignedTo[0] }}
                  </div>
				</template>
               </div>
               <div class="container-bar" :style="gridStyle(name.assignedTo.length)">
                  <div v-for="annotator in name.assignedTo" class="annotated-bar">
                     <div class="annotated-fill light-fill" :style="annotatorRate(name.rates[annotator])" v-bind:id="annotator+'_status'"></div>
                  </div">
               </div>
            </div>
         </li>
      </ul>
   </div>

   <supervision-collection v-else-if="mode == 'supervision-annotators-list' "
      v-bind:selectedCollection="selectedCollection"
      v-bind:allAnnotators="allAnnotators"
      v-bind:selectedAnnotationStyle="selectedAnnotationStyle">
   </supervision-collection>
   
   <supervision-dialogues v-else-if="mode == 'supervision-dialogues-list' "
       v-bind:Su_activeCollection="selectedCollection"
       v-bind:selectedAnnotator="selectedAnnotator"
       v-bind:savedAnnotationRate="selectedAnnotationRate">
   </supervision-dialogues>

   <supervision-annotation-app v-else-if="mode == 'supervision-annotating'"
      v-bind:selectedCollection="selectedCollection"
      v-bind:selectedAnnotator="selectedAnnotator"
      v-bind:dialogueId="displayingDialogue"
      v-bind:editorMode="editorMode">
   </supervision-annotation-app>
</div>
  `
});

Vue.component("supervision-collection", {

   props: ["selectedCollection", "allAnnotators", "selectedAnnotationStyle"],

   data() {
      return {
         annotatedCollections: [],
         guiMessages,
         uploading:false,
         missingAnnotations:[]
      }
   },

   mounted () {
      this.get_all_annotated_collections(this.selectedCollection);
   },

   created () {
      adminEventBus.$on("refresh_list", this.get_all_annotated_collections);
   },

   beforeDestroyed () {
      adminEventBus.$off("refresh_list", this.get_all_annotated_collections);
   },

   methods: {
      get_all_annotated_collections: function(id) {
         document.body.style.cursor = "progress";
         backend.get_specific_collections("annotated_collections",{"id":id}, {"annotator":1,"done":1,"status":1,"lastUpdate":1})
            .then( (response) => {
               console.log("==== ANNOTATED VERSIONS FOR",id,"====");
               this.annotatedCollections = response;
               console.log(this.annotatedCollections);
               //check for missing documents
               for (annotatorIndex in this.allAnnotators) {
                  let found = false;
                  for (documentIndex in this.annotatedCollections) {
                     if (this.annotatedCollections[documentIndex]["annotator"] == this.allAnnotators[annotatorIndex]) {
                        found = true;
                        break;
                     }
                  }
                  if (!found) {
                     this.missingAnnotations.push(this.allAnnotators[annotatorIndex]);
                  }
               }
               console.log(this.missingAnnotations);
               document.body.style.cursor = null;
               if (this.annotatedCollections.length == 0) {
                  document.getElementById("annotated_list").innerHTML = "<h2 style='color:rgb(0 0 0 /58%);text-align:center;margin-top:5%;'>"+guiMessages.selected.admin.noAnnotations+"</h2>"
               }
            }  
         );
        console.log(this.allAnnotators);
        // TODO:
        // distinguish between produced annotations, 
        // annotations from dis-assigned annotators,
        // annotations not yet produced.
      },

      clicked_annotated: function(clickedAnnotator, status) {
         backend.supervision(clickedAnnotator,this.selectedCollection, status) 
            .then( (response) => {
               console.log("==== LOADING ANNOTATIONS FOR SELECTED USER ====");
               adminEventBus.$emit("annotator_selected",clickedAnnotator, status);
            }
         );
      },

      delete_annotated: function(id, annotator) {
         if (confirm(guiMessages.selected.admin.deleteConfirm)) {
            backend.del_db_entry_async({"_id":id, "annotator":annotator}, "annotated_collections")
               .then((response) => {
                  console.log(response);
                  console.log("==== REFRESHING LIST ====");
                  this.get_all_annotated_collections(this.selectedCollection);
               }
            );
         }
      },

      freeze(clicked, doneValue) {
         if (confirm(guiMessages.selected.collection.freeze)) {
            var done = (doneValue != true) ? true : false;
            backend.update_collection_fields(this.selectedCollection, {"done":done}, clicked)
               .then((response) => {
                  console.log("=== NEW ANNOTATION LOADED CORRECTLY ==== ")
                  this.get_all_annotated_collections(this.selectedCollection);
            });
         }
      }

   },

   template:
   `  <div id="annotated_wrap" class="inner-wrap">

      <h2 class="list-title-left" style="margin-top:3%;">
         <span class="list-title-left">{{guiMessages.selected.admin.annotationInProgress}} {{selectedCollection}}</span>
         <span class="button-title" style="margin-top:0;">Annotation style: {{selectedAnnotationStyle.split(".")[0]}}</span>
      </h2>

         <ul class="dialogue-list">
            <li id="annotated_list">
               <div class="entry-list-single-item-container" v-for="(name, index) in annotatedCollections">

               <div class="supervisor-btn-container">
                  <div v-if="name.done" class="del-dialogue-button" v-on:click="freeze(name.annotator, name.done)">
                     {{guiMessages.selected.admin.button_unfreeze}}
                  </div>
                  <div v-else class="del-dialogue-button" v-on:click="freeze(name.annotator, name.done)">
                     {{guiMessages.selected.admin.button_freeze}}
                  </div>
                  <div class="del-dialogue-button" v-on:click="delete_annotated(name._id, name.annotator)">
                     {{guiMessages.selected.lida.button_delete}}
                 </div>
               </div>

                  <div class="entry-info" v-on:click="clicked_annotated(name.annotator, name.status)">
                     <div class="entry-id">
                        <span>{{guiMessages.selected.admin.annotator}}:</span> {{name.annotator}}
                     </div>
                     <div class="entry-annotated">
                        <span>Status: {{name.status}}</span>
                        <div class="annotated-bar">
                           <div class="annotated-fill" v-bind:style="{ width: name.status }"></div>
                        </div>
                     </div>
                     <div class="entry-assigned">
                        {{guiMessages.selected.annotation_app.done}}: <span v-if="name.done" class="gold-true">{{name.done}}</span>
                              <span v-else class="gold-false">{{name.done}}</span>
                     </div>
                     <div class="entry-date">
                        {{name.lastUpdate}}
                     </div>
                  </div>
               </div>
            </li>
         </ul>
         <h3 v-if="this.missingAnnotations.length > 0" style="color: rgba(0,0,0,0.62);">{{guiMessages.selected.annotation_app.alsoAssignedTo}}: {{this.missingAnnotations.join(", ")}}</h3>
         <button type="button" class="btn btn-sm btn-primary button-title" v-on:click="uploading = true" style="margin-top:-3.5em;">{{guiMessages.selected.admin.newAnnotations}}</button>
         <supervisor-upload-modal v-if="uploading" v-bind:selectedCollection="selectedCollection"  @close="uploading = false"></supervisor-upload-modal>
      </div>
   `
});

Vue.component('supervisor-upload-modal', {

   props: ["selectedCollection"],

   data() { 
       return {
           guiMessages,
           assignedTo:"",
           allUsers:[],
           newDocument: {},
           newDocumentName: "",
        }
   },

   mounted () {
       this.init()
   },
   methods:{
       init : function() {
         this.get_all_users();
       },

       get_all_users() {
         backend.get_all_users()
             .then( (response) => {
                 console.log();
                 this.allUsers = response;
                 console.log(this.allUsers);
         });
      },

      close() {
         this.$emit('close');
      },

      open_file(event){
         let file = event.target.files[0];
         this.handle_file(file);
     },

     handle_file(file) {
         let jsonType = /application.json/;
         if (file.type.match(jsonType)) {
            console.log('---- HANDLING LOADED JSON FILE ----');
            let reader = new FileReader();
            reader.onload = (event) => {
               console.log('THE READER VALUE', reader);
               this.newDocument = reader.result;
               this.newDocumentName = file.name;
            }
            reader.readAsText(file);
         } else {
            alert('Only .json files are supported.')
         }
      },
      
      add_annotated: function() {
         //check for empty fields
         if (this.newDocument == {}) {
            alert(guiMessages.selected.exception_create_annotations[0]);
            return;
         } else if (this.assignedTo == "") {
            alert(guiMessages.selected.exception_create_annotations[1]);
            return;
         }
         //check for format errors
         try {
            var check = JSON.parse(this.newDocument);
         } catch (e) {
            alert(e, guiMessages.selected.exception_create_annotations[2]);
            return;
         }
         if (check.length > 1) {
            alert(guiMessages.selected.exception_create_annotations[3]);
            return;
         } else if (check["document"] != undefined) {
            console.log("Collection document found in your json file. Other data but 'document' field will be ignored.");
            alert(guiMessages.selected.exception_create_annotations[4]);
            this.newDocument = JSON.stringify(check["document"]);
         }
         backend.new_annotated_collection_async(this.selectedCollection, {"annotator":this.assignedTo}, this.newDocument)
            .then( (response) => {
               console.log(response);
               if (response["data"]["error"] != undefined) {
                  alert("Upload OK");
                  console.log("==== REFRESHING LIST ====");
               } else {
                  adminEventBus.$emit("refresh_list", this.selectedCollection);
                  this.$emit('close');
                  return;
               }   
            }
         );
      },

   },  
   template:
`
 <transition name="modal">
   <div class="modal-mask">
     <div class="modal-wrapper">
       <div class="modal-container modal-user-creation">

         <div class="modal-header">
           <slot name="header">
             <strong>Annotated Collection Upload</strong>
           </slot>
         </div>

         <hr>

         <div class="modal-body">
           <slot name="body">
               <div class="inner-form">
                   <label for="id">ID:</label>
                   <input class="user-creation" id="annotation_id" type="text" v-bind:value="selectedCollection" readonly>
                   <br>
                   <label for="select_annotator">{{guiMessages.selected.admin.annotator}}:</label>
                   <select class="modal-select" id="annotation_annotator" v-model="assignedTo">
                        <option disabled value=""></option>
                        <template v-for="user in allUsers">
                          <option v-bind:value="user.id">{{user.id}}</option>
                        </template>
                   </select>
                   <br>
                   <div v-if="newDocumentName != ''" style="margin-top: 10px;">
                     <label for="annotation_name">{{guiMessages.selected.admin.uploaded}}:</label>
                     <input class="modal-select" type="text" v-bind:value="newDocumentName" readonly/>
                   </div>
                   <br><br>

                   <input type="file"
                     id="fileInput"
                     name="fileInput"
                     accept=".txt, .json"
                     v-on:change="open_file($event)">
                  <label for="fileInput"
                     id="fileInputLabel"
                     class="btn btn-sm btn-primary">
                     {{guiMessages.selected.admin.button_upload}}
                  </label>
                   
                  <button id="upload_collection" v-on:click="add_annotated()" class="help-button btn btn-sm btn-primary">{{guiMessages.selected.admin.createButton}}</button>
               </div>
           </slot>
         </div>

         <hr>

         <div class="modal-footer">
           <slot name="footer">
             MATILDA
             <button class="modal-default-button" @click="close()">
               {{guiMessages.selected.annotation_app.close}}
             </button>
           </slot>
         </div>
       </div>
     </div>
   </div>
 </transition>
 `
});


Vue.component("supervision-dialogues", {

   props: [
      "Su_activeCollection", "selectedAnnotator", "savedAnnotationRate"
   ],

   data () {
      return {
         supervisionAlreadyVisited: [],
         supervisionDialogueMetadata: [],
         // Reference to the language item
         guiMessages,
         supervisionUserName: "Su_"+mainApp.userName,
         collectionRate: ""
      }
   },
  created() {
      //allDialoguesEventBus.$on( "refresh_dialogue_list", this.getAllDialogueIdsFromServer )
  },
  mounted () {
      this.init();
  },

  methods: {

      init : function(){
         // Step ONE: Get FILE NAME
         this.getAllDialogueIdsFromServer();
      },

      getAllDialogueIdsFromServer() {
         backend.get_all_dialogue_ids_async("supervision")
            .then( (response) => {
               this.supervisionDialogueMetadata = response;
               this.collectionRate = response[0].status;
               console.log(response);
               this.collectionAnnotationRate(response);
         });
      },

      collectionAnnotationRate(allDialogueMetadata) {
          let summatory = 0; 
          total_turns = 0;
          for (i=0; i < allDialogueMetadata.length; i++) {
              total_turns += Number(allDialogueMetadata[i]["num_turns"]-1);
              summatory += Number(allDialogueMetadata[i]["status"].slice(0,-1) * allDialogueMetadata[i]["num_turns"]-1)
          }
          this.collectionRate = Number( summatory / total_turns).toFixed(1);
          if ((this.collectionRate <= 0) || (this.collectionRate == NaN)) {
            this.collectionRate = 0;
          } else if (this.collectionRate >= 99) {
            this.collectionRate = 100;
          }
          this.collectionRate = this.collectionRate+"%";
          if (this.collectionRate == "NaN%") {
              this.collectionRate = "0%";
              this.collectionRate = "0%"
          }
          if (this.collectionRate != this.savedAnnotationRate) {
            backend.update_collection_fields(this.Su_activeCollection, {"status":this.collectionRate}, this.selectedAnnotator)
               .then( (response) => {
                  console.log("annotation rate silently updated from saved "+this.savedAnnotationRate+" to calculated "+this.collectionRate);
            });
          }
      },

      dialogue_already_visited(id) {
         return this.supervisionAlreadyVisited.includes(id)
      },

      clicked_dialogue(clickedDialogue) {
         adminEventBus.$emit("dialogue_su_selected", this.supervisionDialogueMetadata[clickedDialogue].id)
      }, 

      download_all_dialogues_from_server(event) {
         backend.get_all_dialogues_async()
            .then( (response) => {
               let blob = new Blob([JSON.stringify(response, null, 4)], {type: 'application/json'});
               const url = window.URL.createObjectURL(blob)
               const link = document.createElement('a')
               link.href = url
               fileName = "USER_" + supervisionUserName + "_"+utils.create_date()+".json"
               link.setAttribute('download', fileName )
               document.body.appendChild(link)
               link.click();
         });
      },

      add_dialogue(){
         let new_dialogue_name = prompt(guiMessages.selected.admin.newDialogueNameInput);
         if ((new_dialogue_name == "") || (new_dialogue_name == null) || (new_dialogue_name == undefined) 
            || (new_dialogue_name.includes(".",0)) || (new_dialogue_name.length > 20)) {
             alert(guiMessages.selected.admin.cancelledDialogueNameInput);
             return;
         }
         let params = {
            "new_dialogue_name":new_dialogue_name, 
            "selected_annotator":this.selectedAnnotator
         }
         backend.admin_change_dialogue_content(this.Su_activeCollection, params, "new_dialogue", this.editorMode)
            .then((response) => {
               this.getAllDialogueIdsFromServer();
            }
         );
      }

  },

  template:

  `
    <div class="inner-wrap">

      <h2 class="list-title-left">
         <span>{{Su_activeCollection}}:</span> {{ supervisionDialogueMetadata.length }} {{ guiMessages.selected.admin.dataItems }} 
         <span class="button-title" style="margin-top:0;">{{collectionRate}} {{guiMessages.selected.lida.annotated}} {{guiMessages.selected.lida.annotatedBy}} {{selectedAnnotator}}</span>
      </h2>

      <ul class="dialogue-list" style="padding:0;">

        <li class="listed-dialogue"
            v-for="(dat, index) in supervisionDialogueMetadata"
            v-bind:id="index">

            <div class="dialogue-list-single-item-container">

                <div v-if="dialogue_already_visited(dat.id)"
                       class="visited-indicator">
                       {{ guiMessages.selected.admin.visited }}
                </div>
                <div v-else
                       class="visited-indicator not-visited">
                       {{ guiMessages.selected.admin.notVisited }}
                </div>

              <div class="dialouge-info" v-on:click="clicked_dialogue(index)">
                  <div class="dialogue-id">
                    {{dat.id}}
                  </div>

                  <div class="dialogue-num-turns" >{{dat.num_turns-1}} {{ guiMessages.selected.lida.turns }}</div>

                  <div class="dialogue-annotated">
                    <span>Annotation: {{dat.status}}</span>
                    <div class="annotated-bar">
                        <div class="annotated-fill" v-bind:style="{ width: dat.status }"></div>
                    </div>
                  </div>
              </div>
            </div>
        </li>
      </ul>
      <button id="add_new_dialogue" v-on:click="add_dialogue()" class="help-button btn btn-sm btn-primary" style="margin-bottom:4%">{{guiMessages.selected.admin.addDialogue}}</button>
    </div>
  </div>
  `
});

Vue.component("supervision-annotation-app", {

    props: ["dialogueId","selectedCollection","selectedAnnotator","editorMode"],

    data () {
        return {
            guiMessages,
            dCurrentId: data.currentTurnId,
            dTurns: [],
            validAnnotations: data.validAnnotations,
            annotationFormat: {},
            allDataSaved: true,
            primaryElementClassName: "primary-turn-input",
            globalSlotNonEmpty: 0,
            metaTags: [],
            annotatedTurns: [],
            annotationRate: '0%',
            readOnly: true
        }
    },

    // COMPUTED properties
    computed:{
        dIds: function() {
            temp = utils.range(1, this.dTurns.length);
            return temp;
        },

        dCurrentTurn: function() {
            temp = utils.get_turn_data(this.dTurns[ this.dCurrentId], this.validAnnotations, this.annotationFormat);
            return temp;
        },

        dTransformedTurns: function(){
            temp = utils.get_all_turns_data(this.dTurns, this.validAnnotations, this.annotationFormat);
            return temp;
        },

        dialogueNonEmpty: function() {
            return this.dTurns.length > 0
        },
    },

    mounted () {
        this.init();
        this.focus_on_new_query_box();
    },

    beforeDestroyed() {
        console.log("==================================");
        console.log("I am being destroyed");
        console.log(this.dialogueId);
        databaseEventBus.$off("load_dialogue_editor", this.init );
    },

    created () {
         databaseEventBus.$on("load_dialogue_editor", this.init);
         annotationAppEventBus.$on("update_turn_id", this.id_updated_from_ids_list);
         annotationAppEventBus.$on("turn_updated_string", this.content_update);
         annotationAppEventBus.$on("new_empty_turn", this.send_new_empty_turn);
         annotationAppEventBus.$on("delete_turn", this.send_delete_turn);
    },

    // METHODS
    methods:{

        init: function() {
            // Step One :: Download a Single Dialogue
            backend.get_single_dialogue_async(this.dialogueId, this.selectedCollection, "supervision", this.editorMode)
                .then( (response) => {
                    console.log('---- RECEIVED DATA FROM THE SERVER ----')
                    console.log(response);
                    this.metaTags = response[0];
                    console.log('---- END ----')
                    this.dTurns = response;
                    //format collection meta-tag
                    if ((this.metaTags["collection"] == null) || (this.metaTags["collection"] == undefined)) {
                        this.metaTags["collection"] = "";
                    }
                    this.annotationRate = this.metaTags["status"];
                })

          // Step Two :: Get the Annotation Styles
          backend.get_annotation_style_async(this.selectedCollection, this.dialogueId, "supervision", this.editorMode)
              .then( (response) => {
                  this.annotationFormat = response;
                  if (this.annotationFormat.global_slot != undefined) {
                    this.globalSlotNonEmpty = this.annotationFormat.global_slot.labels.length;
                  }
              });

        },

        editorModeWidth: function() {
            if (this.editorMode == 'true') {
               return "grid-column-end: 1; padding:0;"
            }
        },

        remove_turn: function(event) {
        },

        change_turn: function(event) {
            console.log(" ************ DTURNS ************ ")
            console.log(this.dCurrentId)
            console.log(event)
            if (event.key=="Enter"){
                temp=1;
            } else {
              return;
            }

            if ( !( this.dCurrentId==this.dTurns.length ) ){
                if ( !( this.dCurrentId==1 ) ){
                    this.dCurrentId += temp;
                }
                else if (temp==1){
                    this.dCurrentId += temp;
                }
            }
            else if (temp==-1){
                this.dCurrentId += temp;
            }

            this.change_focus_based_on_current_turn_id();

        },

        change_focus_based_on_current_turn_id : function () {
            // Changes the focus of the current text field to be the first input
            // field in the turn which has the current ID.
            console.log("Changing focus");
            turnInputElements = document.querySelectorAll('.' + this.primaryElementClassName)

            for (var i = 0; i < turnInputElements.length; i++) {
                elementId = turnInputElements[i].id;
                if (elementId[0] == this.dCurrentId) {
                    const element = document.getElementById(elementId);
                    element.focus();
                    break;
                }
            }
        },

        id_updated_from_ids_list: function(event) {
            console.log("-----> Updating TurnId:")
            console.log(event);
            this.dCurrentId = event;
            this.resume_annotation_tools();
        },

        content_update: function(){
            this.allDataSaved = false;
            let out = {
               //.textContent apparently retrieves the old string instead
               sys: document.getElementById("sys_editable").value,
               usr: document.getElementById("usr_editable").value,
               dialogue: this.dialogueId,
               turn: this.dCurrentId,
               selected_annotator: this.selectedAnnotator
            };
            backend.admin_change_dialogue_content(this.selectedCollection, out, "content", this.editorMode) 
               .then((response) => {
                  this.allDataSaved = true;
                  //reload dialogue
                  this.dTurns = response.data.dialogue;
                  this.metaTags = response.data.dialogue[0];
                  this.$forceUpdate();
                  console.log(this.dTurns);
               }
            );
        },

        turn_is_annotated: function(event) {
            if (this.annotatedTurns[event] == undefined)
                this.annotatedTurns[event] = "annotated";
        },

        update_annotation_rate: function(annotations, turnTot) {
        },

        send_new_empty_turn: function(){
            this.allDataSaved = false;
            let params = {
               dialogue:this.dialogueId,
               turn:this.dCurrentId,
               selected_annotator: this.selectedAnnotator
            }
            backend.admin_change_dialogue_content(this.selectedCollection, params, "new_turn", this.editorMode) 
               .then((response) => {
                  this.allDataSaved = true;
                  //reload dialogue
                  this.dTurns = response.data.dialogue;
                  this.$forceUpdate();
                  console.log(this.dTurns);
               }
            );
        },

        send_delete_turn: function(event){
           if ((event== 1) && (this.dTurns.length <= 2)) {
               alert(guiMessages.selected.admin.lastTurn)
               return;
           }
            this.allDataSaved = false;
            let params = {
               dialogue:this.dialogueId,
               turn:event,
               selected_annotator: this.selectedAnnotator
            }
            backend.admin_change_dialogue_content(this.selectedCollection, params, "remove_turn", this.editorMode) 
               .then((response) => {
                  this.allDataSaved = true;
                  //reload dialogue
                  this.dTurns = response.data.dialogue;
                  this.$forceUpdate();
                  console.log(this.dTurns);
               }
            );
        },

        focus_on_new_query_box: function() {
            console.log('FOCUSING ON THE INPUT BOX')
            const toFocus = document.getElementById('new-query-entry-box');
            if (toFocus != null) toFocus.focus();
        },

        save_dialogue: function(event) {
        },

        resume_annotation_tools: function(event) {
        },

    },

    template:
    `
    <div id="supervision" ref="supervision_single_dialogue_view">
      <div v-on:keyup.enter="change_turn(1)" id="annotation-app">

         <dialogue-menu v-bind:changesSaved="allDataSaved"
                        v-bind:dialogueTitle="dialogueId"
                        v-bind:annotationRate="annotationRate">
         </dialogue-menu>

         <dialogue-turns v-bind:primaryElementClass="primaryElementClassName"
                           v-bind:turns="dTransformedTurns"
                           v-bind:currentId="dCurrentId"
                           v-bind:metaTags="metaTags"
                           v-bind:readOnly="readOnly"
                           :style="editorModeWidth()">
         </dialogue-turns>

         <annotations v-if="editorMode != 'true'" 
                        v-bind:globalSlot="annotationFormat.global_slot"
                        v-bind:globalSlotNonEmpty="globalSlotNonEmpty"
                        v-bind:classifications="dCurrentTurn.multilabel_classification"
                        v-bind:classifications_strings="dCurrentTurn.multilabel_classification_string"
                        v-bind:currentId="dCurrentId"
                        v-bind:dialogueNonEmpty="dialogueNonEmpty"
                        v-bind:dTurns="dTurns"
                        v-bind:dialogueId="dialogueId"
                        v-bind:readOnly="readOnly">
         </annotations>

         <input-box>
         </input-box>

         </div>
      </div>
    </div>
    `
});
