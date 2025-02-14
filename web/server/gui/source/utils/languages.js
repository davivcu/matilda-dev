/************************************
* Language Config file
*************************************/

guiMessages = {
    en: {
        admin: {
            title:"Conflicts Resover",
            titlePanel:"Administration Panel",
            interAnno:"Interannotator Resolution",
            dataItems: "Dialogues",
            dataManagement: "Data Management",
            visited: "Visited",
            visited_dialogues: "Visited Dialogues",
            supervision:"Annotation Supervision",
            notVisited: "Not visited",
            button_downloadAll:"Download Data",
            button_interAgreement:"Inter-annotator Agreement",
            to:"to",
            assignedTo:"Assigned to",
            annotator:"Annotator",
            annotators:"Annotators",
            actualAnnotators:"Sources",
            button_upload:"Upload File",
            button_admin:"Admin Panel",
            dropAnywhere: "Drop Files Anywhere to Upload!",
            uploaded: "Uploaded file",
            annotatedTitle: "Annotated Collection Upload",
            userButton: "Users Management",
            users:"Users",
            createButton: "Add",
            addDialogue: "Add a dialogue",
            createAnno:"Create new annotation style",
            newAnnotations: "Import annotations from a file",
            editButton:"Edit",
            hideButton:"Hide",
            showButton:"Show",
            fileName:"File Name",
            createUserButton: "Add a new user",
            deleteConfirm:"Are you sure you want to permanently delete this entry? This cannot be undone!",
            deleteConfirm2:"Are you sure you want to permanently delete this entry? If you delete it and proceed to save, the file on the server will be removed!",
            wipeConfirm:"Are you sure to clean the dialogue list? Actual dialogues' files won't be deleted",
            button_wipeView:"Clean dialogues view",
            annotation:"Annotation",
            goToAnnotation: "Annotation View",
            backToColl:"Back",
            backFromEditor:"Close editor",
            importConflictsResult:"Nothing to import, no annotated versions have been produced yet",
            cantDeleteAdmin:"Sorry, default admin account can't be deleted",
            annotationInProgress:"Annotations in progress for collection",
            button_freeze: "Freeze",
            button_unfreeze: "Unfreeze",
            button_abort: "Cancel",
            userCreation: "User Creation",
            button_downloadGold:"Download Gold",
            button_wipeCache:"Check again for errors",
            wipeCacheConfirm: "This will delete the conflicts' file allowing to start resolving from scratch.",
            confirmOverwriteUser: "Username already exists, please specify another username or confirm to overwrite existing user",
            role:"Role",
            configPage: "Configuration",
            othersOn: "Others on same location",
            showLogs: "Show Logs",
            size: "Size",
            loadedAnno: "Loaded annotation models",
            confirmSave: "Do you want to save the new configuration?",
            confGuide: "Configuration Guide",
            noAnnotations: "No users started to annotate this collection yet.",
            newDialogueNameInput: "Insert the name of the new dialogue. The name must be unique in the selected collection and must not contain dots nor be longer than 20 chars. The dialogue will be empty unless you enter it and edit its turns.",
            cancelledDialogueNameInput: "Not a valid name. Operation cancelled."
        },
        lida: {
            button_fileFormatInfo: "Format Info",
            button_delete: "Delete",
            button_switch: "Switch view",
            turns: "Turns",
            button_newDialogue: "Add a New Dialogue",
            button_wipeDialogues: "Delete dialogues",
            interfaceLanguage: "Interface Language:",
            confirmWipe:"Do you wish to wipe your current list? The active collection will be deactivated but it stays available in the database",
            drop:"Drop Files Anywhere to Upload!",
            buttonCollections:"Collections",
            connectionError: "Couldn't connect to server, check that it's running or the address in backend_config",
            genericError: "Server Error. Something went wrong.",
            serverError: "Server Error. The server received your request but couldn't process it correctly.",
            backupDone:"Backup done.",
            backupPost:"Backup postponed: nothing to save.",
            backupFailed:"Backup failed.",
            backupNext:"Next scheduled in two mintues...",
            annotated: "Annotated",
            annotatedBy: "by",
            logOut:"logout",
            confirmLogout: "Do you want to log out?",
            load:"Load collection",
            assignedColl:"Assigned collections",
            activeColl:"Active collection",
            alert:"Alert",
            welcome:"Welcome",
            exiting:"You are leaving Matilda's session. Are you sure?",
        },
        collection: {
            name: "Collection",
            title: "Collections Management",
            create: "Create collection",
            update: "Update annotations manually",
            updateConfirm1: "You are updating Collection",
            updateConfirm2: "with your annotations. This will edit the database document.",
            noCollection: "You have no active collection now. Your editings are only saved in your workspace",
            noAssignement: "You can't update this collection. It's not assigned to you",
            add: "Add from those users",
            nothing: "Default action: overwrite",
            keep: "Dialogue ID Conflit in your workspace. Please choose which dialogues to keep",
            addToColl: "Add to your collection one or more document",
            editColl:"Edit a collection",
            importColl: "Import this collection",
            importCollfromView: "Add from dialogues list",
            importCollfromFile: "Add from file",
            importCollfromUser: "Add from users' list",
            inspecting:"Inspecting a collection",
            importResult: "Import",
            importSuccess: "Success! Dialogues correctly loaded in your list.",
            importSuccessAddendum: "They are available in your dialogue list.",
            confirmImport: "This will load the selected collection and make it the active collection",
            confirmRevision: "This will load the selected collection in the Interannotator conflict resolver list, adding it to the current dialogues",
            confirmChangesLost: "There are unsaved changes to collections. Do you want to proceed without saving them?",
            confirmDeleteDialogue: "This will immediately delete the selected dialogue from the collection. This cannot be undone.",
            collTitle: "Title",
            collDesc: "Description",
            collAnnot: "Annotation Style",
            collAssi: "Assigned to",
            collUpda: "Last update",
            collStatus: "Status",
            new: "Imported",
            old: "Previous",
            save: "Save and Update Collection",
            done: "Report as Annotations completed",
            freeze: "This operation will freeze the collection and notify your work is done and can be reviewed. Do it only when you finished",
            freezed: "These annotations are freezed and can not be edited until reviewed and unlocked by an administrator",
            empty:"Empty",
            dataManagementTitle:"Select a user or a collection",
            collectionToAnnotator:"Assign collections to selected user",
            annotatorToCollection:"Assign annotators to selected collection"
        },
        annotation_app: {
            turnId: "Turn Id",
            enter: "Enter",
            save: "Save",
            saveAssignement: "Save new assignement and info",
            enterQuery:"Enter New Query",
            allSaved: "All Changes Saved",
            unsaved: "Unsaved Changes",
            backToAll: "Back",
            close: "Close",
            select: "Select or write text from turn",
            expand: "Click to Expand",
            noTurn: "No turn selected. Please select one to annotate",
            rate: "Annotation rate",
            switchAnnotationView: "Expanded Slots View",
            annotationPref:"Annotation Preferences",
            turnWidth:"Turn Width",
            scrollAfter:"Scroll-bar with sentence longer than",
            chars:"characters",
            autoSave:"Auto-save on turn changed",
            doneSelection:"Selection done",
            doneEditing: "Turn editing done",
            sendEmptyTurn: "Add a new empty turn",
            deleteTurn: "Delete turn",
            confirmEditing: "This will change the turn content of this collection for every annotator. The annotation associated to this turn will not be affected.",
            lastTurn: "The last turn of the dialogue can't be deleted. Please go back to the dialogue list and delete the dialogue instead.",
            alsoAssignedTo: "Also assigned to",
            done: "Done",
        },
        resolution_app: {
            errorId: "Error Id:",
            name: "Name:",
            accepted: "Accepted",
            review: "Review",
            fail: "FAIL!",
            accept:"Accept",
            noConflicts:"No annotation conflicts found in this dialogue",
            updateAccepted:"Value updated",
            option: "Fill with option",
            optionMin: "Option",
            prediction: "Prediction",
            instructions: "Compare the different options provided by the system and the annotators to produce a definitive version for the gold collection.",
            buttonWipeCache: "This will check all your collection dialogues for errors. After the end of this process you will be returned to the collections list."
        },
        admin_panel: [
            "Compare annotations on the same collection and resolve its conflicts",
            "Add, remove and edit annotator and administrator accounts",
            "Create, edit and assign dialogues collections",
            "Inspect how annotations are progressing",
            "Annotate collections assigned to you",
            "Configure annotation models, database connection, app environment"
        ],
        modal_formatInfo:
        [
            `
            Dialoque File Format
            `,
            `
            Files can be uploaded to the annotation system in one of two
            formats: either as a raw .txt file or as a JSON file in the
            correct format.
            `,
            `
            If you upload a .txt file, there are no format restrictions and
            you will be taken to a screen to process it into a dialogue.
            `,
            `
            If you upload a JSON file, it must be in the correct format. This
            format is as follows:
            `
        ],
        modal_formatInfo_list:
        [
            `
            File is a dict with keys as the names of each dialogue
            and values as lists.
            `,
            `
            Each value is a list of dictionaries, where each
            dictionary contains a number of key-value pairs which
            are used to display the dialogue data for annotation.
            `,
            `
            Some key-value pairs are compulsory in order to correctly
            display the dialogue.
            `,
            `
            The key-value pairs which are compulsory are defined in
            the annotator_config.py file in the "server" folder.
            `,
            `
            By default, the only two required key-value pairs in each turn
            are called "usr" and "sys". 
            They should be the user's and system's query as a string.
            `
        ],
        modal_agreementScores:
        [
            "Inter-annotator Agreement Scores",
            "This represents a report for your data.",
            "Available Annotations:",
            "Overall"
        ],
        modal_document:
        [
            "Document",
            "Tags",
            "JSON",
            "lastUpdate"
        ],
        coll_creation:
        [
            "Insert an unique id for the collection or MATILDA will generate one",
            "Insert a title",
            "Insert a short description of the content",
            "If not provided the default one will be used.",
            "You can assign this dialogues to an user, only them will be able to update it",
            "You can note down here the progress of the annotation work",
        ],
        modal_collectionInfo:
        [
            "Collections",
            "Collections are group of dialogues linked for easy handling and assignment.",
            "To preserve them and avoid mixtures you can work on one collection at a time.",
            "A backup of in-use collections is performed automatically every two minutes.",
            "When an annotator is satisfied with their work is able to send the annotations and update the collection document",
            "stored in the database. Anyway, the editings performed on collections are saved periodically even without pressing that button.",
        ],
        modal_collectionButtons:
        [
            "This button allows to create a collection from one or more json files.",
            "With this function you can edit the information associated to a collection and remove one or more dialogues from it",
            "This button permanently delete the collection from the database",
        ],
        modal_annotationStyle:
        [
            `String usually are used to represent the utterances in the dialogue. There should be two for turn and their names should be "usr" and "sys".
            The String category is shown in interface as a read-only text-area.`,
            `Multilabel Classification are used to identify if a certain characteristic is present on the selected turn or not. 
            The labels you may insert in this category don't have a value, they are just selected or unselected. In interface Multilabel Classification
            is shown as a group of checkboxes the annotators can mark.`,
            `Multilabel Classification String are used in few ways: one is to comment the selected turn with the provided field to fill with a string. 
            Another way to use them is to reference part of the text in the turn in order to highlight the information provided in that portion. 
            In the interface Multilabel Classification String are shown as a group of string fields the annotator can write into. Each string field
            must have a unique name (label).`,
            `Global slots are just like Multilabel Classification Strings but they are not related to the turn, they are related to the entire dialogue.
            This category is memorized in the first turn of every dialogue and it should be use to provide information about the content of the dialogue.
            In the interface they are shown as a group of text fields the annotators can fill. Global slots' group name 'globa_slot' is not editable.`,
        ],
        modal_examples:
        [
            `"usr":"Hello I'm looking for a job",`,
            `"Dialogue_act": [
                "sys_greet",
                "usr_greet"
            ],`,
            `"sys_inform_basic": [
                [
                    "job_description",
                    "none"
                ],
                [
                    "skill",
                    "usr[3,5][I know English]"
                ]
            ]`,
            `"global_slot": {
                "result": "positive",
                "recorded": true
            },`,
        ],
        modal_examples_img:
        [
            "assets/images/string_exa.png",
            "assets/images/multiclass_exa.png",
            "assets/images/multistring_exa.png",
            "assets/images/global_exa.png",
        ],
        exception_create_annotations:
        [
            "You didn't upload anything. Please upload a json file to load.",
            "An annotated collection is always related to an annotator. Please select the annotator to assign it.",
            "Your json file format is wrong. Please, check your json file for format errors and invalid data types.",
            "You uploaded a list of collection, not a single collection. Please re-format your json file to only include one collection.",
            "It seems you uploaded a complete collection document. Only the document data (attribute 'document' in the file) will be uploaded. Info such as annotation rate, freezed status, previous id and previous annotator will be ignored.",
        ],
        configuration_info_matilda:
        [
            "Address and Port", 
            "It shows the address of the main app",
            "Docker",
            "If you are running the Docker version or not.",
            "Session Guard",
            "With this option you can turn off or on the route protection from unauthorized access. Any user, in order to access a route must be logged in and have an active session. If the server reboots or crashes Matilda enforces log-out in order to avoid syncronization issues.",
            "Full Server log",
            "Matilda will record any route requested with this option active. Otherwise Matilda will only record errors and warning message.",
            "Show Logs",
            "This button allows to view the last 50 recorded logs or to download the full log file.",
        ],
        configuration_info_database:
        [
            "Address and Port", 
            "It shows the address and the port of the currently connected database",
            "Username and Password",
            "It show the current username and password configured for the currently connected database",
            "Name",
            "This displays the currently database name used by Matilda. This is created from Matilda and can be changed in the configuration file. If the name is changed Matilda will use the new name when rebooted. Note that the collections and user accounts of your current database won't automatically be exported in the new one.",
            "Size",
            "It shows the currenctly connected database size. ",
            "Download Database Dump",
            "This function exports a database dump in json format. The file exported is not a mongodump file and is intended to be used to retrieve and later upload your current collections using Matilda's functions.",
            "Others on same location",
            "This list displays the other databases' names found at the current database address and port. This can be useful to retrieve older Matilda's database names."
        ],
        configuration_info_annotation_models:
        [
            "The Annotation section of the Configuration page lists all annotation models loaded in Matilda.",
            "Annotation models configure how your dialogue collections can be annotated.",
            "From this page you can edit your annotation models, delete them or add new ones.",
            "In order to add a new annotation model you can use the button 'Create new annotation model' or upload it manually in your server /Configuration folder. If you choose to do so you will also have to update accordingly the Configuration/conf.json file adding your new model to the loading list. With the manual procedure Matilda must be rebooted."
        ],
        database: {
            title: "Workspaces Management",
            location:"Database Location",
            port:"Port",
            saved: "Database updated",
            update: "Update database",
            importDb: "Synchronize from Database",
            confirmImport:"This will wipe your dialogue list and load the dialogues that are in your database document",
            confirmUpdate:"This will update your user-backup in the database",
            importDoc: "Import this document",
            showHelp: "Help"
        },
        login: {
            welcome: "Welcome",
            send: "Log in",
            warning:"A username and a password are required!",
            fail:"Username and password combinatio invalid"
        }
    },
    it: {
        admin: {
            title:"Conflitti Annotazione",
            titlePanel:"Pannello di Amministrazione",
            interAnno:"Interannotator Resolution",
            dataItems: "Dialoghi",
            dataManagement: "Gestione Collezioni",
            visited_dialogues: "Dialoghi visitati",
            visited: "Visitato",
            notVisited: "Non visitato",
            button_downloadAll:"Scarica annotazioni",
            button_interAgreement:"Statistiche",
            annotator:"Annotatore",
            annotators:"Annotatori",
            fileName:"File Name",
            to:"a",
            assignedTo: "Assegnato a",
            actualAnnotators:"Fonti",
            button_upload:"Carica un file",
            uploaded: "File caricato",
            annotatedTitle: "Carica una collezione annotata",
            button_admin:"Pannello Admin",
            dropAnywhere: "Rilascia il file per caricarlo!",
            userButton: "Gestione Utenti",
            users:"Utenti",
            createButton: "Crea",
            addDialogue: "Aggiungi un dialogo",
            createAnno:"Crea modello di annotazione",
            editButton:"Modifica",
            hideButton:"Nascondi",
            showButton:"Mostra",
            createUserButton: "Crea nuovo utente",
            deleteConfirm:"Si è sicuri di voler eliminare questo documento? Non sarà recuperabile!",
            deleteConfirm2:"Si è sicuri di voler eliminare questo documento? Se confermate e poi salvate le modifiche, il file verrà rimosso dal server!",
            wipeConfirm:"Si è sicuri di voler azzerare la lista dei dialoghi? I dialoghi non saranno eliminati dai loro file",
            button_wipeView:"Pulisci la lista",
            supervision:"Supervisione annotazioni",
            annotation:"Annotazione",
            goToAnnotation: "Vai alla vista Annotazione",
            backToColl: "Indietro",
            backFromEditor: "Chiudi editor",
            newAnnotations: "Carica annotazioni da file",
            importConflictsResult:"Non è stato trovato niente da importare, nessuna versione annotata è stata ancora prodotta.",
            cantDeleteAdmin:"L'account speciale 'admin' non può essere eliminato",
            annotationInProgress:"Annotazioni in corso per la collezione",
            button_freeze:"Blocca",
            button_unfreeze:"Sblocca",
            button_abort:"Annulla",
            button_downloadGold:"Scarica versione Gold",
            button_wipeCache:"Ripeti il controllo degli errori",
            userCreation:"Creazione Utente",
            confirmOverwriteUser: "L'username scelto esiste già, vuoi sovrascrivere l'utente già esistente?",
            wipeCacheConfirm: "Questo cancellerà la lista dei conflitti e permetterà di ricominciare la risoluzione da capo",
            role:"Ruolo",
            configPage: "Configurazione",
            othersOn: "Altri database presenti",
            showLogs: "Mostra i Log",
            size: "Dimensione",
            loadedAnno: "Modelli di annotazione caricati",
            confirmSave: "Vuoi salvare la nuova configurazione?",
            confGuide: "Guida alla Configurazione",
            noAnnotations: "Nessun utente ha iniziato ad annotare questa collezione.",
            newDialogueNameInput: "Inserisci un nome per il nuovo dialogo. Il nome deve essere univoco nella collezione selezionata e non può contenere punti o essere più lungo di 20 caratteri. Il nuovo dialogo sarà vuoto, una volta inserito potrai modificarlo come avviene per gli altri dialoghi.",
            cancelledDialogueNameInput: "Il nome inserito non è valido. Operazione cancellata."
        },
        lida: {
            button_fileFormatInfo: "Info sui formati",
            button_delete: "Elimina",
            button_switch: "Cambia interfaccia",
            turns: "Turni",
            button_newDialogue: "Aggiungi un nuovo Dialogo",
            button_wipeDialogues: "Elimina tutto",
            interfaceLanguage: "Lingua Interfaccia:",
            confirmWipe:"Si è sicuri di voler eliminare tutti i dialoghi nella lista? La collezione verrà disattivata ma rimarrà disponibile all'interno del database.",
            drop:"Rilascia i file per caricarli!",
            buttonCollections: "Collezioni",
            button_downloadAll: "Scarica i dati",
            connectionError:"Impossibile connettersi al server, controlla che sia in funzione o verificane l'indirizzo.",
            serverError:"Server Error. Il server ha ricevuto la tua richiesta ma non ha potuto processarla correttamente.",
            genericError: "Server Error. Qualcosa è andato storto.",
            backupDone:"Backup completato.",
            backupPost:"Backup postposto: niente da salvare.",
            backupFailed:"Backup fallito.",
            backupNext:"Prossimo tra due minuti...",
            annotated:"Annotato",
            annotatedBy:"da",
            logOut:"logout",
            confirmLogout:"Vuoi eseguire il logout?",
            load:"Carica collezione",
            activeColl:"Collezione attiva",
            assignedColl:"Collezioni assegnate",
            alert:"Attenzione",
            welcome:"Benvenuto",
            exiting:"Stai per uscire dalla sessione di MATILDA. Sei sicuro?",
        },
        collection: {
            name: "Collection",
            title: "Gestione Collezioni",
            create: "Crea collezione",
            update: "Aggiorna annotazioni manualmente",
            updateConfirm1: "Stai per aggiornare la Collezione",
            updateConfirm2: "con le tue annotazioni. Questo modificherà il documento nel database.",
            noCollection: "Al momento non hai una collezione attiva, le tue modifiche vengono salvate solo nel tuo workspace.",
            noAssignement: "Non puoi aggiornare questa collezione, non è assegnata a te",
            add: "Aggiungi da questi utenti",
            addToColl: "Aggiungi uno o più documenti alla collezione",
            keep: "Conflitto di ID nel tuo workspace. Quale dialogo vuoi tenere?",
            nothing: "Azione predefinita: sovrascrittura",
            editColl:"Modifica una collezione",
            importColl: "Importa questa collezione",
            importCollfromView: "Aggiungi dalla lista dialoghi",
            importCollfromFile: "Aggiungi da file",
            importCollfromUser: "Aggiungi da un utente",
            importResult: "Importazione",
            importSuccess: "Successo! I dialoghi sono stati importati correttamente.",
            importSuccessAddendum: "Sono disponibili nella tua lista dei dialoghi.",
            inspecting:"Visionare una collezione",
            collTitle: "Titolo",
            collDesc: "Descrizione",
            collAnnot: "Modello di annotazione (annotation_style)",
            collAssi: "Assegnata a",
            collUpda: "Ultimo aggiornamento",
            collStatus: "Stato di avanzamento",
            new: "Importato",
            old: "Precedente",
            confirmImport: "Importare la collezione cancellerà tutti i dialoghi attivi e cambierà la collezione attiva.",
            confirmRevision: "Questa operazione aggiungerà la collezione nella lista di revisione, confrontandola con eventuali collezioni già presenti",
            confirmChangesLost: "Ci sono cambiamenti non salvati alle collezioni. Vuoi precedere senza salvarli?",
            confirmDeleteDialogue: "Questo eliminerà immediatamente e irreversibilmente il seguente dialogo dalla collezione. Confermi?",
            save: "Save and Update Collection",
            done: "Segnala annotazione completata",
            freeze: "Questa operazione bloccherà la collezione e notificherà che hai finito e che le annotazioni sono pronte per la revisione",
            freezed: "L'annotazione è stata segnalata come completata e quindi non potrà essere modificata fino alla revisione e allo sblocco da parte di un amministratore.",
            empty:"Vuoto",
            dataManagementTitle:"Seleziona un utente o una collezione",
            collectionToAnnotator:"Assegna collezioni all'utente selezionato",
            annotatorToCollection:"Assegna utenti alla collezione selezionata"
        },
        annotation_app: {
            turnId: "Id Turno",
            enter: "Invia",
            save: "Salva",
            saveAssignement: "Salva nuovi assegnamenti e informazioni",
            enterQuery: "Nuova richiesta",
            allSaved: "Modifiche salvate",
            unsaved: "Cambiamenti non salvati",
            backToAll: "Indietro",
            close: "Chiudi",
            select: "Seleziona o scrivi dal turno",
            expand: "Clicca per espandere",
            noTurn: "Nessun turno selezionato, nessuna modifica effettuata.",
            rate: "Stima annotazione",
            switchAnnotationView: "Visuale Slot-Espansi",
            annotationPref:"Preferenze di Annotazione",
            turnWidth:"Larghezza finestra turni",
            scrollAfter:"Scroll-bar con frasi più lunghe di",
            chars:"caratteri",
            autoSave:"Auto-save al cambio di turno",
            doneSelection: "Selezione completata",
            doneEditing: "Modifica turno completata",
            sendEmptyTurn: "Aggiungi un nuovo turno vuoto",
            sendDeleteTurn: "Elimina turno",
            confirmEditing: "Questa operazione cambierà il contenuto del turno selezionato per tutti gli annotatori. Non influirà su eventuali annotazioni associate.",
            lastTurn: "L'ultimo turno di un dialogo non può essere eliminato. Puoi tornare indietro alla lista dei dialoghi ed eliminare l'intero dialogo.",
            alsoAssignedTo: "Assegnato anche a",
            done: "Completato",
        },
        resolution_app: {
            errorId: "Id Conflitto:",
            name: "Nome:",
            accepted: "Accettato",
            review: "Revisiona",
            fail: "ERRORE!",
            accept:"Accetta",
            noConflicts:"Nessun conflitto di annotazione trovato in questo dialogo",
            updateAccepted:"Annotazione aggiornata",
            option: "Riempi da opzione",
            optionMin: "Opzione",
            prediction: "Predizione",
            instructions: "Confronta le diverse annotazioni generate dal sistema e dagli annatotatori così da produrre una versione definitiva per la collezione gold",
            buttonWipeCache: "Questo processo analizzerà nuovamente tutti i dialoghi della tua collezione. Una volta completato sarai riportato nella lista delle collezioni e potrai rientrare."
        },
        admin_panel: [
            "Confronta le annotazioni fatte sulla stessa collezione e risolvine i conflitti",
            "Aggiungi, rimuovi o modifica account di tipo amministratore o annotatore",
            "Crea, modifica e assegna le collezioni di dialoghi",
            "Controlla come sta procedendo il lavoro di annotazione",
            "Annota le collezioni assegnate a te",
            "Configura i modelli di annotazione, la connessione al database, l'ambiente dell'app"
        ],
        modal_formatInfo:
        [
            `
            Formato dei File Dialogo
            `,
            `
            I file possono essere caricati nel sistema in uno dei due formati:
            un file grezzo .txt oppure un file JSON nel formato richiesto.
            `,
            `
            Se viene caricato un file .txt, non ci sono restrizioni di formato
            e si aprirà una schermata per processarlo in un dialogo.
            `,
            `
            Se carichi un file JSON, deve essere nel formato corretto.
            Il formato richiesto è il seguente:
            `
        ],
        configuration_info_matilda:
        [
            "Indirizzo e Porta",
            "Mostra l'indirizzo del database a cui Matilda è connessa.",
            "Docker", 
            "Indica se stai utilizzando la versione Docker di Matilda.",
            "Session Guard",
            "Con questa opzione attiva Matilda protegge le route da accessi non autorizzati. Ogni utente, per poter inviare richieste a Matilda dal proprio browser deve essere loggato e avere una sessione attiva. Se il server si riavvia o un utente si logga con le stesse credenziali, Matilda forza il log-out dell'utente per prevenire problemi di sincronizzazione.",
            "Full Server log",
            "Matilda registra soltanto gli errori e i messaggi di tipo 'warning'. Con questa opzione attiva Matilda registrerà ogni richiesta ricevuta.",
            "Mostra i Logs",
            "Questo pulsante permette di visionare gli ultimi 50 eventi registrati e di scaricare il file completo di log.",
        ],
        configuration_info_database:
        [
            "Indirizzo e Porta", 
            "Questa sezione mostra l'indirizzo e la porta del database a cui è connessa al momento Matilda.",
            "Username e Password",
            "Sono le credenziali con cui Matilda è connessa al database menzionato sopra.",
            "Name",
            "Questo è il Database Name che Matilda sta utilizzando. Si tratta di una sezione all'interno del Database e, se già non esiste, verrà creata da Matilda al primo utilizzo. Se viene cambiato tramite il file configuration/conf.json Matilda creerà un nuovo database name e inizierà ad utilizzare il nuovo. Da tenere in considerazione che Matilda non riverserà automaticamente le collezioni presenti nell'attuale database name nel nuovo ma anzi questo risulterà vuoto al primo utilizzo.",
            "Dimensioni",
            "Mostra le dimensioni del Database name attualmente in uso. ",
            "Download Database Dump",
            "Questa funzione esporta tutto il contenuto del database a cui Matilda è attualmente connessa. Il file esportato non è un file mongodump nativo ed è inteso come file da segmentare manualmente per esportare i dati d'interesse ed eventualmente ricaricarli tramite le funzioni native di Matilda.",
            "Altri database",
            "Questa lista è costituita dagli altri database name presenti all'indirizzo e alla porta del database a cui Matilda è attualmente connessa."
        ],
        configuration_info_annotation_models:
        [
            "La sezione Annotazione della pagina di Configurazione mostra la lista dei modelli di annotazione caricati in Matilda.",
            "I modelli di annotazione configurano le categorie di annotazione che gli annotatori possono usare.",
            "Da questa pagina puoi modificare i modelli di annotazione, cancellarli o aggiungerne di nuovi.",
            "Per aggiungere un nuovo modello di annotazione usa il pulsante 'Crea nuovo modello di annotazione' o caricalo manualmente nella cartella /Configuration del server. Se scegli di procedere manualmente dovrai anche aggiornare di conseguenza il file Configuration/conf.json aggiungendo il nome del nuovo file alla lista dei modelli di annotazione. Con la procedura manuale vedrai il nuovo modello di annotazione al riavvio di Matilda."
        ],
        exception_create_annotations:
        [
            "Non hai caricato alcun file. Carica un file json dal tuo computer per proseguire.",
            "Le annotazioni sono sempre riferite ad un utente. Seleziona l'annotatore a cui riferirle per continuare.",
            "Il formato del tuo file json è incorretto. Controlla il formato del file che vuoi caricare per errori di struttura, caratteri speciali o tipi di dato.",
            "Hai caricato una lista di collezioni, non una singola collezione. Riformatta il tuo file per includere solo una collezione.",
            "Sembra che tu abbia caricato una collezione completa di tutti i meta-dati. Solo la lista dei dialoghi (racchiuse nel campo 'document') verrà caricata. Altre informazioni nel tuo file come la percentuale di annotazione, lo stato di completamento, l'id del documento e l'annotatore precedente saranno ignorate.",
        ],
        modal_formatInfo_list:
        [
            `
            Un file dizionario con nomi dei dialoghi per chiavi
            e liste di turni per valore.
            `,
            `
            Ogni valore è una lista di dizionari, dove ogni
            dizionario contiene un numero di coppie chiave-valore
            usate per mostrare i dati del dialogo da annotare.
            `,
            `
            Alcune coppie chiave-valore sono obbligatorie per
            mostrare correttamente il dialogo.
            `,
            `
            Le coppie obbligatorie sono definite nel file
            annotator_config.py nella cartella "server".
            `,
            `
            Di default, l'unica coppia chiave-valore obbligatoria è
            chiamata "usr" e dovrebbe essere la stringa contenente
            la richiesta dell'utente.
            `
        ],
        modal_agreementScores:
        [
            "Indice di Concordanza tra gli annotatori",
            "Questo è un rapporto sui tuoi dati.",
            "Annotazioni disponibili:",
            "Riepilogo"
        ],
        modal_document:
        [
            "Documento",
            "Tags",
            "JSON",
            "lastUpdate"
        ],
        coll_creation:
        [
            "Inserisci un ID univoco per la Collezione o MATILDA ne genererà uno automaticamente",
            "Inserisci un titolo",
            "Inserisci una breve descrizione",
            "Se non viene fornito verrà usato quello predefinito",
            "Puoi assegnare la collezione ad un utente, solo lui potrà modificarla e annotarla",
            "Puoi scrivere qui i progressi nel lavoro di annotazione",
        ],
        modal_collectionInfo:
        [
            "Collezioni",
            "Le collezioni sono gruppi di dialoghi uniti insieme per essere facilmente gestiti e assegnati.",
            "Gli amministratori creano le collezioni e le assegnano agli utenti perché le annotino.",
            "MATILDA crea un backup di ogni collezione in uso da almeno un utente, ogni due minuti.",
            "Quando un annotatore è soddisfatto del proprio lavoro può segnalarlo come completato così che venga revisionato",
            "e gli siano assegnati nuovi compiti da svolgere.",
        ],
        modal_collectionButtons:
        [
            "Questo pulsante permette di creare una collezione a partire da uno o più file json.",
            "Da questo pulsante accedi alla modifica della collezione. Puoi modificare le informazioni associate ad essa e rimuovere uno o più dialoghi singolarmente.",
            "Questo pulsante elimina permantentemente la collezione dal database",
        ],
        modal_annotationStyle:
        [
            `String usually are used to represent the utterances in the dialogue. There should be at least one for turn, so the default value for
            required field in this category is set to true. The String category is shown in interface as a read-only text-area.`,
            `Multilabel Classification are used to identify if a certain characteristic is present on the selected turn or not. 
            The labels you may insert in this category don't have a value, they are just selected or unselected. In interface Multilabel Classification
            is shown as a group of checkboxes the annotators can mark.`,
            `Multilabel Classification String are used in few ways: one is to comment the selected turn with the provided field to fill with a string. 
            Another way to use them is to reference part of the text in the turn in order to highlight the information provided in that portion. 
            In the interface Multilabel Classification String are shown as a group of string fields the annotator can write into. Each string field
            must have a unique name (label).`,
            `Global slots are just like Multilabel Classification Strings but they are not related to the turn, they are related to the entire dialogue.
            This category is memorized in the first turn of every dialogue and it should be use to provide information about the content of the dialogue.
            In the interface they are shown as a group of text fields the annotators can fill. Global slots' group name 'globa_slot' is not editable.`,
        ],
        database: {
            title: "Gestione Workspaces",
            location: "Indirizzo",
            port: "Porta",
            saved: "Database aggiornato",
            update: "Aggiorna il database",
            importDb: "Sincronizza dal database",
            confirmImport:"L'operazione cancellerà la tua lista dialoghi e importerà i dialoghi dal tuo documento nel database.",
            confirmUpdate:"L'operazione aggiornerà il backup dell'utente nel database",
            importDoc: "Importa questo documento",
            showHelp: "Aiuto",
        },
        login: {
            welcome:"Benvenuto",
            send:"Accedi",
            warning:"Sono richiesti sia un username sia una password!",
            fail:"Combinazione di nome utente e password non valida",
        }
    },
    de: {
        admin: {
            title: "Konflikt Löser",
            titlePanel: "Administrationsbereich",
            interAnno: "Interannotator Resolution",
            dataItems: "Dialoge",
            dataManagement: "Datenverwaltung",
            visited: "Besucht",
            visited_dialogues: "Besuchte Dialoge",
            supervision: "Aufsicht",
            notVisited: "Nicht besucht",
            button_downloadAll: "Daten herunterladen",
            button_interAgreement: "Inter-Annotator-Vereinbarung",
            to:"an",
            assignedTo: "Zugewiesen an",
            annotator: "Annotator",
            annotators: "Annotatoren",
            actualAnnotators: "Sources",
            button_upload: "Datei hochladen",
            uploaded: "Uploaded file",
            annotatedTitle: "Annotated Collection Upload",
            button_admin: "Admin Panel",
            dropAnywhere: "Dateien überall zum Hochladen ablegen!",
            userButton: "Benutzerverwaltung",
            users: "Benutzer",
            fileName:"File Name",
            createButton: "Hinzufügen",
            addDialogue: "Add a dialogue",
            createAnno:"Create new annotation style",
            editButton: "Bearbeiten",
            hideButton:"Hide",
            showButton:"Show",
            newAnnotations: "Import annotations from a file",
            createUserButton: "Neuen Benutzer hinzufügen",
            deleteConfirm: "Möchten Sie diesen Eintrag wirklich dauerhaft löschen? Dies kann nicht rückgängig gemacht werden!",
            deleteConfirm2:"Si è sicuri di voler eliminare questo documento? Non sarà recuperabile!",
            wipeConfirm: "Sind Sie sicher, die Dialogliste zu bereinigen? Die tatsächlichen Dialogdateien werden nicht gelöscht",
            button_wipeView: "Dialogansicht bereinigen",
            annotation: "Annotation",
            goToAnnotation: "Annotation View",
            backToColl: "Zurück",
            backFromEditor: "Close editor",
            importConflictsResult: "Es wurde nichts importiert, es wurden noch keine kommentierten Versionen erstellt",
            cantDeleteAdmin: "Das Standard-Administratorkonto kann leider nicht gelöscht werden",
            annotationInProgress: "Anmerkungen zur Sammlung werden ausgeführt",
            button_freeze: "Einfrieren",
            button_unfreeze: "Unfreeze",
            button_abort: "Abbrechen",
            userCreation: "Benutzererstellung",
            button_downloadGold: "Gold herunterladen",
            button_wipeCache: "Fehlercache löschen",
            wipeCacheConfirm: "Dadurch wird die Konfliktdatei gelöscht, sodass die Konfliktlösung erneut gestartet werden kann.",
            confirmOverwriteUser: "Benutzername existiert bereits, bitte geben Sie einen anderen Benutzernamen an oder bestätigen Sie, um den vorhandenen Benutzer zu überschreiben",
            role:"Role",
            configPage: "Configuration",
            size: "Size",
            othersOn: "Others on same location",
            showLogs: "Show Logs",
            loadedAnno: "Loaded annotation models",
            confirmSave: "Do you want to save the new configuration?",
            confGuide: "Configuration Guide",
            noAnnotations: "No users started to annotate this collection yet.",
            newDialogueNameInput: "Insert the name of the new dialogue. The name must be unique in the selected collection and must not contain dots. The dialogue will be empty unless you enter it and edit its turns.",
            cancelledDialogueNameInput: "Not a valid name. Operation cancelled."
        },
        lida: {
            button_fileFormatInfo: "Info formatieren",
            button_delete: "Löschen",
            button_switch: "Ansicht wechseln",
            turns: "dreht",
            button_newDialogue: "Neuen Dialog hinzufügen",
            button_wipeDialogues: "Dialoge löschen",
            interfaceLanguage: "System Sprache:",
            confirmWipe: "Möchten Sie Ihre aktuelle Liste löschen? Die aktive Sammlung wird deaktiviert, bleibt jedoch in der Datenbank verfügbar.",
            drop: "Dateien überall zum Hochladen ablegen!",
            button_downloadAll: "Daten herunterladen",
            buttonCollections: "Sammlungen",
            connectionError: "Es konnte keine Verbindung zum Server hergestellt werden. Überprüfen Sie, ob der Server ausgeführt wird, oder die Adresse in backend_config.",
            serverError: "Server Error. The server received your request but couldn't process it correctly.",
            genericError: "Server Error. Something went wrong.",
            backupDone: "Sicherung abgeschlossen.",
            backupPost: "Backup verschoben: nichts zu speichern.",
            backupFailed: "Sicherung fehlgeschlagen.",
            backupNext: "Nächster Termin in zwei Minuten ...",
            annotated: "annotiert",
            annotatedBy: "bei",
            logOut: "logout",
            confirmLogout: "Möchten Sie sich abmelden?",
            load: "Sammlung laden",
            assignedColl: "Zugewiesene Sammlungen",
            activeColl: "Aktive Sammlung",
            alert: "Warnung",
            welcome: "wilkommen",
            exiting: "Sie verlassen MATILDAs Sitzung. Sind Sie sicher?",
        },
        collection: {
            name: "Collection",
            title: "Sammlungsverwaltung",
            create: "Sammlung erstellen",
            update: "Anmerkungen manuell aktualisieren",
            updateConfirm1: "Sie aktualisieren die Sammlung",
            updateConfirm2: "mit Ihren Anmerkungen. Dadurch wird das Datenbankdokument bearbeitet.",
            noCollection: "Sie haben jetzt keine aktive Sammlung. Ihre Bearbeitungen werden nur in Ihrem Arbeitsbereich gespeichert",
            noAssignement: "Sie können diese Sammlung nicht aktualisieren. Sie ist Ihnen nicht zugewiesen",
            add: "Von diesen Benutzern hinzufügen",
            nothing: "Standardaktion: überschreiben",
            keep: "Dialog-ID-Konflikt in Ihrem Arbeitsbereich. Bitte wählen Sie aus, welche Dialoge beibehalten werden sollen",
            addToColl: "Fügen Sie Ihrer Sammlung ein oder mehrere Dokumente hinzu",
            editColl: "Sammlung bearbeiten",
            importColl: "Diese Sammlung importieren",
            importCollfromView: "Aus Dialogliste hinzufügen",
            importCollfromFile: "Aus Datei hinzufügen",
            importCollfromUser: "Aus Benutzerliste hinzufügen",
            inspecting: "Inspektion einer Sammlung",
            importResult: "Importieren",
            importSuccess: "Erfolg! Dialoge korrekt in Ihre Liste geladen.",
            importSuccessAddendum: "Sie sind in Ihrer Dialogliste verfügbar.",
            confirmImport: "Dadurch wird die ausgewählte Sammlung geladen und zur aktiven Sammlung",
            confirmRevision: "Dadurch wird die ausgewählte Sammlung in die Interannotator-Konfliktlösungsliste geladen und zu den aktuellen Dialogen hinzugefügt.",
            confirmChangesLost: "Es gibt nicht gespeicherte Änderungen an Sammlungen. Möchten Sie fortfahren, ohne sie zu speichern?",
            confirmDeleteDialogue: "Dadurch wird der ausgewählte Dialog sofort aus der Sammlung gelöscht. Dies kann nicht rückgängig gemacht werden.",
            collTitle: "Titel",
            collDesc: "Beschreibung",
            collAnnot: "Annotation Style",
            collAssi: "Zugewiesen an",
            collUpda: "Letztes Update",
            collStatus: "Status",
            new: "Importiert",
            old: "Zurück",
            save: "Sammlung speichern und aktualisieren",
            done: "Anmerkungen abgeschlossen",
            freeze: "Dieser Vorgang friert die Sammlung ein und benachrichtigt Sie, dass Ihre Arbeit erledigt ist und überprüft werden kann. Führen Sie sie erst aus, wenn Sie fertig sind.",
            freezed: "Diese Anmerkungen sind eingefroren und können erst bearbeitet werden, wenn sie von einem Administrator überprüft und entsperrt wurden",
            empty: "leer",
            dataManagementTitle:"Select a user or a collection",
            collectionToAnnotator:"Assign collections to selected annotator",
            annotatorToCollection:"Assign users to selected collection"

        },
        annotation_app: {
            turnId: "Dialogueschritt",
            enter: "Eintretten",
            save: "Speichern",
            saveAssignement: "Save new assignement and info",
            enterQuery: "Neue Abfrage eingeben",
            allSaved: "Alle Änderungen gespeichert",
            unsaved: "Nicht gespeicherte Änderungen",
            backToAll: "Zurück",
            close: "Schließen",
            select: "Text aus der Runde auswählen oder schreiben",
            expand: "Klicken zum Erweitern",
            noTurn: "Keine Runde ausgewählt. Bitte wählen Sie eine zum Kommentieren aus",
            rate: "Annotation Rate",
            switchAnnotationView: "Expanded Slots View",
            annotationPref:"Annotation Preferences",
            turnWidth:"Turn Width",
            scrollAfter:"Scroll-bar after",
            chars:"characters",
            autoSave:"Auto-save on turn changed",
            doneSelection: "Selction done",
            doneEditing: "Turn editing done",
            sendEmptyTurn: "Add a new empty turn",
            sendDeleteTurn: "Delete turn",
            confirmEditing: "This will change the turn content of this collection for every annotator. The annotation associated to this turn will not be affected.",
            lastTurn: "The last turn of the dialogue can't be deleted. Please go back to the dialogue list and delete the dialogue instead.",
            alsoAssignedTo: "Also assigned to",
            done:"Done",
        },
        resolution_app: {
            errorId: "Error Id:",
            name: "Name:",
            accepted: "Akkzeptiert",
            review: "Revision",
            fail: "Gescheitert!",
            accept:"Akkzeptieren",
            noConflicts:"In diesem Dialog wurden keine Anmerkungskonflikte gefunden",
            updateAccepted:"Wert aktualisiert",
            option: "Fill with option",
            optionMin: "Option",
            prediction: "Prediction",
            instructions: "Compare the different options provided by the system and the annotators to produce a definitive version for the gold collection.",
            buttonWipeCache: "This will check all your collection dialogues for errors. After the end of this process you will be returned to the collections list."
        },
        admin_panel: [
            "Konfrontieren Sie Anmerkungen zu denselben Sammlungen und lösen Sie deren Konflikte",
            "Hinzufügen, Entfernen und Bearbeiten von Annotator- und Administratorkonten",
            "Dialogsammlungen erstellen, bearbeiten und zuweisen",
            "Überprüfen Sie, wie die Anmerkungen fortschreiten",
            "Ihnen zugewiesene Sammlungen kommentieren",
            "Configure annotation models, database connection, app environment"
        ],        
        exception_create_annotations:
        [
            "You didn't upload anything. Please upload a json file to load.",
            "An annotated collection is always related to an annotator. Please select the annotator to assign it.",
            "Your json file format is wrong. Please, check your json file for format errors and invalid data types.",
            "You uploaded a list of collection, not a single collection. Please re-format your json file to only include one collection.",
            "It seems you uploaded a complete collection document. Only the document data (attribute 'document' in the file) will be uploaded. Info such as annotation rate, freezed status, previous id and previous annotator will be ignored.",
        ],
        modal_formatInfo:
        [
            `
            Dialoque-Dateiformat
            `,
            `
            Dateien können in einer von zwei Schritten in das Anmerkungssystem hochgeladen werden
            Formate: entweder als rohe TXT-Datei oder als JSON-Datei in der
            korrektes Format.
            `,
            `
            Wenn Sie eine TXT-Datei hochladen, gibt es keine Formatbeschränkungen und
            Sie werden zu einem Bildschirm weitergeleitet, um ihn zu einem Dialog zu verarbeiten.
            `,
            `
            Wenn Sie eine JSON-Datei hochladen, muss diese im richtigen Format vorliegen. Dies
            Format ist wie folgt:
            `
        ],
        configuration_info_matilda:
        [
            "Address and Port", 
            "It shows the address of the main app",
            "Docker",
            "If you are running the Docker version or not.",
            "Session Guard",
            "With this option you can turn off or on the route protection from unauthorized access. Any user, in order to access a route must be logged in and have an active session. If the server reboots or crashes Matilda enforces log-out in order to avoid syncronization issues.",
            "Full Server log",
            "Matilda will record any route requested with this option active. Otherwise Matilda will only record errors and warning message.",
            "Show Logs",
            "This button allows to view the last 50 recorded logs or to download the full log file.",
        ],
        configuration_info_database:
        [
            "Address and Port", 
            "It shows the address and the port of the currently connected database",
            "Username and Password",
            "It show the current username and password configured for the currently connected database",
            "Name",
            "This displays the currently database name used by Matilda. This is created from Matilda and can be changed in the configuration file. If the name is changed Matilda will use the new name when rebooted. Note that the collections and user accounts of your current database won't automatically be exported in the new one.",
            "Size",
            "It shows the currenctly connected database size. ",
            "Download Database Dump",
            "This function exports a database dump in json format. The file exported is not a mongodump file and is intended to be used to retrieve and later upload your current collections using Matilda's functions.",
            "Others on same location",
            "This list displays the other databases' names found at the current database address and port. This can be useful to retrieve older Matilda's database names."
        ],
        configuration_info_annotation_models:
        [
            "The Annotation section of the Configuration page lists all annotation models loaded in Matilda.",
            "Annotation models configure how your dialogue collections can be annotated.",
            "From this page you can edit your annotation models, delete them or add new ones.",
            "In order to add a new annotation model you can use the button 'Create new annotation model' or upload it manually in your server /Configuration folder. If you choose to do so you will also have to update accordingly the Configuration/conf.json file adding your new model to the loading list. With the manual procedure Matilda must be rebooted."
        ],
        modal_formatInfo_list:
        [
            `
            Datei ist ein Diktat mit Schlüsseln als Namen für jeden Dialog
            und Werte als Listen.
            `,
            `
            Jeder Wert ist eine Liste von Wörterbüchern, wobei jedes
            Wörterbuch enthält eine Reihe von Schlüssel-Wert-Paaren, die
            werden verwendet, um die Dialogdaten für Anmerkungen anzuzeigen.
            `,
            `
            Einige Schlüssel-Wert-Paare sind obligatorisch, um korrekt zu sein
            Zeigen Sie den Dialog an.
            `,
            `
            Die obligatorischen Schlüssel-Wert-Paare sind in definiert
            die Datei annotator_config.py im Ordner "server".
            `,
            `
            Standardmäßig das einzige erforderliche Schlüssel-Wert-Paar in jeder Runde
            heißt "usr" und sollte die Abfrage des Benutzers sein als
            ein Faden.
            `
        ],
        modal_agreementScores:
        [
            "Inter-Annotator Agreement Scores",
            "Dies ist ein Bericht für Ihre Daten.",
            "Verfügbare Anmerkungen:",
            "Insgesamt"
        ],
        modal_document:
        [
            "Dokument",
            "Tag",
            "JSON",
            "lastUpdate"
        ],
        coll_creation:
        [
            "Geben Sie eine eindeutige ID für die Sammlung ein, oder MATILDA generiert eine",
            "Titel einfügen",
            "Fügen Sie eine kurze Beschreibung des Inhalts ein",
            "Name des Anmerkungsstils",
            "Sie können diese Dialoge einem Benutzer zuweisen, nur dieser kann sie aktualisieren",
            "Hier können Sie den Fortschritt der Anmerkungsarbeit notieren",
        ],
        modal_collectionInfo:
        [
            "Sammlungen",
            "Sammlungen sind eine Gruppe von Dialogen, die zur einfachen Handhabung und Zuordnung verknüpft sind.",
            "Um sie zu konservieren und Mischungen zu vermeiden, können Sie jeweils an einer Sammlung arbeiten.",
            "Eine Sicherung der verwendeten Sammlungen wird automatisch alle zwei Minuten durchgeführt.",
            "Wenn ein Annotator mit seiner Arbeit zufrieden ist, kann er die Annotationen senden und das Sammlungsdokument aktualisieren",
            "in der Datenbank gespeichert. Wie auch immer, die an Sammlungen vorgenommenen Änderungen werden regelmäßig gespeichert, auch ohne diese Taste zu drücken.",
        ],
        modal_collectionButtons:
        [
            "Mit dieser Schaltfläche können Sie eine Sammlung aus einer oder mehreren JSON-Dateien erstellen.",
            "Mit dieser Funktion können Sie die einer Sammlung zugeordneten Informationen bearbeiten und einen oder mehrere Dialoge daraus entfernen",
            "Diese Schaltfläche löscht die Sammlung dauerhaft aus der Datenbank",
        ],
        modal_annotationStyle:
        [
            `String usually are used to represent the utterances in the dialogue. There should be at least one for turn, so the default value for
            required field in this category is set to true. The String category is shown in interface as a read-only text-area.`,
            `Multilabel Classification are used to identify if a certain characteristic is present on the selected turn or not. 
            The labels you may insert in this category don't have a value, they are just selected or unselected. In interface Multilabel Classification
            is shown as a group of checkboxes the annotators can mark.`,
            `Multilabel Classification String are used in few ways: one is to comment the selected turn with the provided field to fill with a string. 
            Another way to use them is to reference part of the text in the turn in order to highlight the information provided in that portion. 
            In the interface Multilabel Classification String are shown as a group of string fields the annotator can write into. Each string field
            must have a unique name (label).`,
            `Global slots are just like Multilabel Classification Strings but they are not related to the turn, they are related to the entire dialogue.
            This category is memorized in the first turn of every dialogue and it should be use to provide information about the content of the dialogue.
            In the interface they are shown as a group of text fields the annotators can fill. Global slots' group name 'globa_slot' is not editable.`,
        ],
        database: {
            title: "Workspaces Management",
            location: "Datenbankspeicherort",
            port: "Port",
            saved: "Datenbank aktualisiert",
            update: "Datenbank aktualisieren",
            importDb: "Aus Datenbank synchronisieren",
            confirmImport: "Dadurch wird Ihre Dialogliste gelöscht und die in Ihrem Datenbankdokument enthaltenen Dialoge geladen.",
            confirmUpdate: "Dadurch wird Ihre Benutzersicherung in der Datenbank aktualisiert",
            importDoc: "Dieses Dokument importieren",
            showHelp: "Hilfe"
        },
        login: {
            welcome: "Wilkommen",
            send: "Anmelden",
            warning: "Ein Benutzername und ein Passwort sind erforderlich!",
            fail: "Kombination aus Benutzername und Passwort ungültig"
        }
    },
}
