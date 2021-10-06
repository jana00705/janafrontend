<template>
    <div>
        <b-modal id="modal-2" scrollable title="STUDENT REGISTRATION" ref="modal" hide-footer>
  <div>
        <b-form-group  label="First Name" >
          <b-form-input  v-model="student.firstname">
          </b-form-input>
        </b-form-group>

        <b-form-group  label="Last Name" >
          <b-form-input  v-model="student.lastname">
          </b-form-input>
        </b-form-group>

        <b-form-group  label="User Name" >
          <b-form-input  v-model="student.username">
          </b-form-input>
        </b-form-group>

       <b-form-group  label="Password" >
          <b-form-input  v-model="student.password" type="password">
          </b-form-input>
        </b-form-group>

        <b-form-group  label="Mobile Number" >
          <b-form-input  v-model="student.phone" type="number">
          </b-form-input>
        </b-form-group>

        <b-form-group  label="Email ID" >
          <b-form-input  v-model="student.email">
          </b-form-input>
        </b-form-group>
        
        <b-form-group  label="Address" >
          <b-form-input  v-model="student.address">
          </b-form-input>
        </b-form-group>

        <b-form-group  label="College" label-for="collegedd">
        <b-form-select
        class="form-control"
          id="collegedd"
          name="collegedd"
          v-model="student.college"
          :options="colleges">
          </b-form-select>
      </b-form-group>

        <div class="text-center mt-5 ">
          <b-button
            size="sm"
            id="submit"
            variant="outline-success"
            @click="putStudent()"
            >Submit</b-button>
        </div>
        </div>
  </b-modal>
    </div>
    
</template>

<style scoped>

</style>

<script>

import StudentService from "../service/StudentService";
export default {
  name: "studentPage",
  components: {
    
  },
  data() {
    return {
      colleges: [
        { value: null, text: "Choose..." , disabled: true},
        { value: "ANJAC", text: "ANJAC" },
        { value: "MEPCO", text: "MEPCO" },
        { value: "AAA", text: "AAA" },
        { value: "FATIMA", text: "FATIMA" },
      ],
      student: {
       firstname:'',
       lastname:'',
       username:'',
       password:'',
       phone:'',
       email:'',
       address:'',
       college:'',
      },
    };
  },
  
  methods: {

    putStudent: function() {
      return new Promise((resolve, reject) => {
        StudentService.putStudent(this.student)
          .then((response) => {
            
           this.student.firstname = "";
           this.student.lastname = "";
           this.student.username = "";
           this.student.password = "";
           this.student.phone= "";
           this.student.email = "";
           this.student.address = "";
         

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