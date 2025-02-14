/*************************************
* MODAL COMPONENT
*************************************/
Vue.component('modal', {
  data() { 
    return {
      guiMessages
    }
  },
  template:
  `
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              {{guiMessages.selected.modal_formatInfo[0]}}
            </slot>
          </div>

          <hr>

          <div class="modal-body">
            <slot name="body">
            {{guiMessages.selected.modal_formatInfo[1]}}
            <br><br>
            {{guiMessages.selected.modal_formatInfo[2]}}
            <br><br>
            {{guiMessages.selected.modal_formatInfo[3]}}
              <ul>
                <li v-for="segment in guiMessages.selected.modal_formatInfo_list" :key="segment">
                  {{ segment }}
                </li>
              </ul>

            </slot>
          </div>

          <hr>

          <div class="modal-footer">
            <slot name="footer">
              MATILDA
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  `
})





/*************************************
* MODAL COMPONENT
*************************************/
Vue.component('agreement-modal', {
    
    props: ["selectedCollection"],
    
    data () {
        return {
            scores : {},
            guiMessages,
        }
    },
    mounted () {
        this.init();
    },

    methods: {

          init : function(){
              // to do:
              // the prop like this doesnt work
              let selectedCollection = document.getElementById("displaying-collection").textContent;
              // Step ONE: Get FILE NAME
              backend.get_scores_async(selectedCollection)
                  .then( (response) => {
                      console.log();
                      this.scores = response;

                  });

          },
  },
  template:
  `
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <strong>{{guiMessages.selected.modal_agreementScores[0]}}</strong>
            </slot>
          </div>

          <hr>

          <div class="modal-body">
              <slot name="body">
                  {{guiMessages.selected.modal_agreementScores[1]}}
                  <br><br>
                  <strong>
                    {{guiMessages.selected.modal_agreementScores[3]}}
                  </strong>
                  <ul>
                      <li v-for="(item, key, index) in scores">
                        {{key}} : {{item}}
                      </li>
                  </ul>

              </slot>
          </div>

          <hr>

          <div class="modal-footer">
            <slot name="footer">
              MATILDA
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  `
})

Vue.component('help-database-modal', {
  data() { 
    return {
      guiMessages
    }
  },
  template:
  `
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <strong>{{guiMessages.selected.modal_databaseInfo[0]}}</strong>
            </slot>
          </div>

          <hr>

          <div class="modal-body">
            <slot name="body">
            {{guiMessages.selected.modal_databaseInfo[1]}}
            <br><br>
            {{guiMessages.selected.modal_databaseInfo[2]}}
            <br><br>
            {{guiMessages.selected.modal_databaseInfo[3]}}
            <br>
              <ul>
                <li> 
                  <strong>{{guiMessages.selected.database.update}}:</strong><br>{{guiMessages.selected.modal_databaseButtons[0]}}
                </li>
                <li> 
                  <strong>{{guiMessages.selected.database.importDb}}:</strong><br>{{guiMessages.selected.modal_databaseButtons[1]}}
                </li>
              </ul>
            </slot>
          </div>

          <hr>

          <div class="modal-footer">
            <slot name="footer">
              MATILDA
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  `
})

Vue.component('help-collection-modal', {

  data() { 
    return {
      guiMessages,
      role:''
    }
  },

  mounted() {
    this.role = mainApp.role;
  },

  template:
  `
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <strong>{{guiMessages.selected.modal_collectionInfo[0]}}</strong>
            </slot>
          </div>

          <hr>

          <div class="modal-body">
            <slot name="body">
            {{guiMessages.selected.modal_collectionInfo[1]}}
            <br><br>
            {{guiMessages.selected.modal_collectionInfo[2]}}
            <br><br>
            {{guiMessages.selected.modal_collectionInfo[3]}}
            <br><br>
            {{guiMessages.selected.modal_collectionInfo[4]}}
            {{guiMessages.selected.modal_collectionInfo[5]}}
              <ul>
                <li> 
                  <strong>{{guiMessages.selected.collection.create}}:</strong><br> 
                  {{guiMessages.selected.modal_collectionButtons[0]}}
                </li>
                <li>
                  <strong>{{guiMessages.selected.collection.editColl}}:</strong><br>
                  {{guiMessages.selected.modal_collectionButtons[1]}}
                </li>
                <li>
                  <strong>{{guiMessages.selected.lida.button_delete}}:</strong><br>
                  {{guiMessages.selected.modal_collectionButtons[2]}}
                </li>
              </ul>
            </slot>
          </div>

          <hr>

          <div class="modal-footer">
            <slot name="footer">
              MATILDA
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  `
})

Vue.component('message-modal', {
  
  data() { 
    return {
      guiMessages,
      message:mainApp.showMessage
    }
  },

  methods: {
    close_message: function() {
        allDialoguesEventBus.$emit("show_message",false);
    }
  },
  template:
  `
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              {{guiMessages.selected.lida.alert}}
            </slot>
          </div>

          <hr>

          <div class="modal-body">
            <slot name="body">
            {{message}}
            </slot>
          </div>

          <hr>

          <div class="modal-footer">
            <slot name="footer">
              MATILDA
              <button class="modal-default-button" @click="close_message">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  `
});

Vue.component('help-config-modal', {

  props:[
    "showHelpConfig"
  ],
  
  data() { 
    return {
      guiMessages,
      stringType:guiMessages.selected.modal_annotationStyle[0],
      multiClassType:guiMessages.selected.modal_annotationStyle[1],
      multiStringType:guiMessages.selected.modal_annotationStyle[2],
      globalType:guiMessages.selected.modal_annotationStyle[3],
      
      stringExample:guiMessages.en.modal_examples[0],
      multiClassExample:guiMessages.en.modal_examples[1],
      multiStringExample:guiMessages.en.modal_examples[2],
      globalExample:guiMessages.en.modal_examples[3],

      stringImg:guiMessages.en.modal_examples_img[0],
      multiClassImg:guiMessages.en.modal_examples_img[1],
      multiStringImg:guiMessages.en.modal_examples_img[2],
      globalImg:guiMessages.en.modal_examples_img[3],
    }
  },

  template:
  `
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              Info about Classification Labels
            </slot>
          </div>

          <hr>

          <div class="modal-body">
            <slot name="body">

              <div id="all-types" v-if="showHelpConfig == 'true'">

              </div>

               <div id="use">
                 <h3>Use</h3>
                 <p v-if="showHelpConfig == 'stringType'">{{stringType}}</p>
                 <p v-else-if="showHelpConfig == 'multiClassType'">{{multiClassType}}</p>
                 <p v-else-if="showHelpConfig == 'multiStringType'">{{multiStringType}}</p>
                 <p v-else-if="showHelpConfig == 'globalType'">{{globalType}}</p>
               </div>

               <div id="interface">
                 <h3>Interface</h3>
                 <p v-if="showHelpConfig == 'stringType'"><img :src="stringImg" class="annotation-img-example"/></p>
                 <p v-else-if="showHelpConfig == 'multiClassType'"><img :src="multiClassImg" class="annotation-img-example"/></p>
                 <p v-else-if="showHelpConfig == 'multiStringType'"><img :src="multiStringImg" class="annotation-img-example"/></p>
                 <p v-else-if="showHelpConfig == 'globalType'"><img :src="globalImg" class="annotation-img-example"/></p>
               </div>

               <div id="output">
                 <h3>Output</h3>
                 <p v-if="showHelpConfig == 'stringType'">{{stringExample}}</p>
                 <p v-else-if="showHelpConfig == 'multiClassType'">{{multiClassExample}}</p>
                 <p v-else-if="showHelpConfig == 'multiStringType'">{{multiStringExample}}</p>
                 <p v-else-if="showHelpConfig == 'globalType'">{{globalExample}}</p>
               </div>

            </slot>
          </div>

          <hr>

          <div class="modal-footer">
            <slot name="footer">
              MATILDA
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  `
});


Vue.component('help-general-config-modal', {

  props:[
    "showHelpGeneral"
  ],
  
  data() { 
    return {
      guiMessages
    }
  },

  template:
  `
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              {{guiMessages.selected.admin.confGuide}}
            </slot>
          </div>

          <hr>

          <div class="modal-body" style="margin:0 0 20px 0;">
            <slot name="body">

               <div id="annotation-info" style="font-size:14px;">
                 <h4>{{guiMessages.selected.admin.annotation}}</h4>
                 {{guiMessages.selected.configuration_info_annotation_models[0]}}<br>
                 {{guiMessages.selected.configuration_info_annotation_models[1]}}<br>
                 {{guiMessages.selected.configuration_info_annotation_models[2]}}<br>
                 {{guiMessages.selected.configuration_info_annotation_models[3]}}
               </div>

               <div id="database-info" style="font-size:14px;">
                 <h4>Database</h4>
                 <strong>{{guiMessages.selected.configuration_info_database[0]}}.</strong> {{guiMessages.selected.configuration_info_database[1]}} <br>
                 <strong>{{guiMessages.selected.configuration_info_database[2]}}.</strong> {{guiMessages.selected.configuration_info_database[3]}} <br>
                 <strong>{{guiMessages.selected.configuration_info_database[4]}}.</strong> {{guiMessages.selected.configuration_info_database[5]}} <br>
                 <strong>{{guiMessages.selected.configuration_info_database[6]}}.</strong> {{guiMessages.selected.configuration_info_database[7]}} <br>
                 <strong>{{guiMessages.selected.configuration_info_database[8]}}.</strong> {{guiMessages.selected.configuration_info_database[9]}} <br>
               </div>

               <div id="matilda-info" style="font-size:14px;">
                 <h4>Matilda</h4>
                 <strong>{{guiMessages.selected.configuration_info_matilda[0]}}.</strong> {{guiMessages.selected.configuration_info_matilda[1]}}<br>
                 <strong>{{guiMessages.selected.configuration_info_matilda[2]}}.</strong> {{guiMessages.selected.configuration_info_matilda[3]}}<br>
                 <strong>{{guiMessages.selected.configuration_info_matilda[4]}}.</strong> {{guiMessages.selected.configuration_info_matilda[5]}}<br>
                 <strong>{{guiMessages.selected.configuration_info_matilda[6]}}.</strong> {{guiMessages.selected.configuration_info_matilda[7]}}<br>
                 <strong>{{guiMessages.selected.configuration_info_matilda[8]}}.</strong> {{guiMessages.selected.configuration_info_matilda[9]}}
               </div>

            </slot>
          </div>

          <hr>

          <div class="modal-footer">
            <slot name="footer">
              MATILDA
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  `
});