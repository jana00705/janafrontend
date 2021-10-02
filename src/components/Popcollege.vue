<template>
    <div>
        <b-modal id="modal-3" scrollable title="COLLEGE REGISTRATION" ref="modal" hide-footer>
  <div>
        <b-form-group id="clg-grp-1" label="College Name" >
          <b-form-input  v-model="college.CollegeName">
          </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-2" label="User Name" >
          <b-form-input  v-model="college.UserName">
          </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-3" label="Password" >
          <b-form-input  v-model="college.Password">
          </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-1" label="phone Number">
          <b-form-input  v-model="college.Phone" type="number">

          </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-1" label="Postal Address" >
          <b-form-input  v-model="college.Address">
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
      colleges:null,
      college: {
       CollegeName:'',
       UserName:'',
       Password:'',
       phone:'',
       Address:'',
      },
    };
  },
  
  methods: {

    putCollege: function() {
      return new Promise((resolve, reject) => {
        CollegeService.putCollege(this.college)
          .then((response) => {
            
           this.college.CollegeName = "";
           this.college.UserName = "";
           this.college.Password= "";
           this.college.Phone = "";
           this.college.Address = "";
         

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