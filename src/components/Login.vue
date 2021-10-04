<template>
    <div>
        <b-modal id="modal-1" title="LOGIN" ref="modal" hide-footer>
  
      <div>
    <b-form-group>
               <b-form-radio-group  v-model="selected"
        >
                 <b-container>
                   <b-row>
                     <b-col>
                       <b-form-radio  id="admr" v-model="selected" v-bind:value="1" >Admin</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio  id="clgr" v-model="selected" v-bind:value="2" >College</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio id="stur" v-model="selected" v-bind:value="3" >Student</b-form-radio>
                     </b-col>
                   </b-row>
                </b-container>
               </b-form-radio-group>
              </b-form-group>
   
  </div>
       <b-form-group id="log-grp-2" label="User Name" label-for="un">
          <b-form-input id="un"
          name="un"
         >
           </b-form-input>
         
       </b-form-group>

          <b-form-group id="log-grp-2" label="Password" label-for="pw">
          <b-form-input id="pw"
          name="pw"
         
          >
           </b-form-input>
         
       </b-form-group>

          <div class="text-center mt-5 ">
           <b-button  size="sm" id="submit" type="submit" variant="outline-success">Submit</b-button>
          <b-button class="mx-3" size="sm" id="cancel" @click="resetForm()"  variant="outline-danger">Reset</b-button>
          </div>
     
  </b-modal>
    </div>
</template>

<script>

export default {
  name: 'Login',

  data() {
      return {
          selected: '1',
          
      };
    },
}
</script>