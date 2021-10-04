<template>
    <div>
        <b-modal id="modal-3" scrollable title="COLLEGE REGISTRATION" ref="modal" hide-footer>
  <div>
        <b-form-group id="clg-grp-1" label="College Name" >
          <b-form-input  v-model="college.collegename">
          </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-2" label="User Name" >
          <b-form-input  v-model="college.username">
          </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-3" label="Password" >
          <b-form-input  v-model="college.password">
          </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-1" label="phone Number">
          <b-form-input  v-model="college.phone" >

          </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-1" label="Postal Address" >
          <b-form-input  v-model="college.address">
          </b-form-input>
        </b-form-group>

        <div class="text-center mt-5 ">
          <b-button
            size="sm"
            id="submit"
            variant="outline-success"
            @click="putCollege()"
            >Submit</b-button>
        </div>
        </div>
  </b-modal>
    </div>
    
</template>

<style scoped>

</style>

<script>

import CollegeService from "../service/CollegeService";
export default {
  name: "collegePage",
  components: {
    
  },
  data() {
    return {
      
      college: {
       collegename:'',
       username:'',
       password:'',
       phone:'',
       address:'',
      },
    };
  },
  
  methods: {

    putCollege: function() {
      return new Promise((resolve, reject) => {
        CollegeService.putCollege(this.college)
          .then((response) => {
            
           this.college.collegename = "";
           this.college.username = "";
           this.college.password= "";
           this.college.phone = "";
           this.college.address = "";
         

            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  }
};
</script>