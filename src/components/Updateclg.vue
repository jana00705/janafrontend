<template>
    <div>
        <b-modal id="upclg" scrollable title="Update College Profile" ref="modal" hide-footer>
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
          <b-form-input type="password" v-model="college.password">
          </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-1" label="phone Number">
          <b-form-input type="number" v-model="college.phone" >

          </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-1" label="Postal Address" >
          <b-form-input  v-model="college.address">
          </b-form-input>
        </b-form-group>

        <div class="text-center mt-5 ">
          <b-button
            size="sm"
            id="update"
            variant="outline-success"
            @click="updateCollege()"
            >Update</b-button>
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
  name: "Updateclg",
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

   
    getCollege: function(id) {
      return new Promise((resolve, reject) => {
        CollegeService.getCollege(id)
          .then((response) => {
            this.college = response.data;
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    updateCollege: function() {
      return new Promise((resolve, reject) => {
        CollegeService.updateCollege(this.college)
          .then((response) => {
            this.getAllColleges();
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