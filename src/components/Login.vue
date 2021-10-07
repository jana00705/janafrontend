<template>
    <div>
        <b-modal id="modal-1" title="LOGIN" ref="modal" hide-footer>
  
      <!-- <div>
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
   
  </div> -->
       <b-form-group id="log-grp-1" label="User Name" >
          <b-form-input  v-model="clg.username"
         >
           </b-form-input>
         
       </b-form-group>

          <b-form-group id="log-grp-2" label="Password" >
          <b-form-input v-model="clg.password"
          type="password"
          >
           </b-form-input>
         
       </b-form-group>

          <div class="text-center mt-5 ">
           <b-button  size="sm" id="submit"  variant="outline-success" @click="loginCollege()">Submit</b-button>
          <b-button class="mx-3" size="sm" id="cancel" variant="outline-danger">Reset</b-button>
          </div>
  </b-modal>
    </div>
</template>

<script>
// import CollegeService from "../service/CollegeService";
import LoginService from "../service/CollegeService";
export default {
  name: 'Login',

  data() {
      return {
          // selected: '1',
          clg:{
            username:'',
            password:''
          },
          
          
      };
      
    },
     methods: {

     loginCollege: function(){
        return new Promise((resolve, reject) => {
            LoginService.loginCollege(this.clg)
                .then(response => {
                  alert("login successfully")
                  this.clg.username="",
                 this.clg.password=""
                    resolve(response);
                })
                .catch(err => {
                   alert("login failed")
                    reject(err);
                });
        }); 
     }
     }
}
</script>