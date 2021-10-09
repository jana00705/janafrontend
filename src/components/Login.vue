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
       <b-form-group id="log-grp-1" label="User Name" >
          <b-form-input  v-model="log.username"
         >
           </b-form-input>
         
       </b-form-group>

          <b-form-group id="log-grp-2" label="Password" >
          <b-form-input v-model="log.password"
          type="password"
          >
           </b-form-input>
         
       </b-form-group>

          <div class="text-center mt-5 ">
           <b-button  size="sm" id="submit"  variant="outline-success" @click="login()">Submit</b-button>
          <b-button class="mx-3" size="sm" id="cancel" variant="outline-danger">Reset</b-button>
          </div>
  </b-modal>
    </div>
</template>

<script>
// import CollegeService from "../service/CollegeService";
// import VueCookies from 'vue-cookies'
import LoginService from "../service/LoginService";

export default {
  name: 'Login',

  data() {
      return {
          // selected: '1',
          log:{
            username:'',
            password:''
          },
       
          selected:'1',
          
      };
      
    },
     methods: {
login:function(){
  if(this.selected==1){
        return new Promise((resolve, reject) => {
            LoginService.loginAdmin(this.log)
                .then(response => {
                  alert("login successfully")
                 localStorage.setItem('name', this.log.username)
                 localStorage.setItem('status','verified')
                 this.$router.push({name:'Admin'})
                  this.log.username="",
                 this.log.password=""
                  
                    resolve(response);
                })
                .catch(err => {
                   alert("Admin login failed")
                    localStorage.setItem('status','unverified')
                    reject(err);
                });
        }); 
     }
 else if(this.selected==2){
        return new Promise((resolve, reject) => {
            LoginService.loginCollege(this.log)
                .then(response => {
                  alert("College login successfully")
                 localStorage.setItem('name', this.log.username)
                 localStorage.setItem('status','verified')
                 this.$router.push({name:'College'})
                  this.log.username="",
                 this.log.password=""
                  
                    resolve(response);
                })
                .catch(err => {
                   alert("login failed")
                    localStorage.setItem('status','unverified')
                    reject(err);
                });
        }); 
     }
      else if(this.selected==3){
        return new Promise((resolve, reject) => {
            LoginService.loginStudent(this.log)
                .then(response => {
                  alert("Student login successfully")
                 localStorage.setItem('name', this.log.username)
                 localStorage.setItem('status','verified')
                 this.$router.push({name:'Student'})
                  this.log.username="",
                 this.log.password=""
                  
                    resolve(response);
                })
                .catch(err => {
                   alert("login failed")
                    localStorage.setItem('status','unverified')
                    reject(err);
                });
        }); 
     }
    
  }
}
}
</script>