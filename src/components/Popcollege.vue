<template>
    <div>
        <b-modal id="modal-3" scrollable title="COLLEGE REGISTRATION" ref="modal" hide-footer>
  <div class="form-control">
       <b-form-group  label="Collegename" label-for="collegename">
          <b-form-input id="name" name="collegename"
          v-model.trim="$v.college.collegename.$model" 
          :class="{'is-invalid':$v.college.collegename.$error, 
          'is-valid':!$v.college.collegename.$invalid}"
         > </b-form-input>
         <div class="valid-feedback">Your college name is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.college.collegename.required">College Name is required</span>
            </div>
         </b-form-group>

           <b-form-group label="User Name" label-for="username">
          <b-form-input id="username"
          name="user"
           v-model.trim="$v.college.username.$model" :class="{'is-invalid':$v.college.username.$error, 'is-valid':!$v.college.username.$invalid}"
         > </b-form-input>
          <div class="valid-feedback">Your User name is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.college.username.required">User Name is required</span>
            </div>
         </b-form-group>
          <b-form-group  label="Password" label-for="password">
          <b-form-input id="password"
          name="password"
          type="password"
          v-model.trim="$v.college.password.$model" :class="{'is-invalid':$v.college.password.$error, 'is-valid':!$v.college.password.$invalid}"
         > </b-form-input>
         <div class="valid-feedback">Your Password is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.college.password.required">Password is required</span>
            </div>
         </b-form-group>
 <b-form-group label="Phone Number" label-for="collegenumber">
          <b-form-input id="collegenumber"
          name="collegenumber"
          type="number"
          v-model.trim="$v.college.phone.$model" :class="{'is-invalid':$v.college.phone.$error, 'is-valid':!$v.college.phone.$invalid}"
         > </b-form-input>
         <div class="valid-feedback">Your Collegenumber is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.college.phone.required">Phone number is required</span>
            </div>
         </b-form-group>
      <b-form-group label="Collegeaddress" label-for="collegeaddress">
          <b-form-input id="collegeaddress"
          name="address"
          v-model.trim="$v.college.address.$model" :class="{'is-invalid':$v.college.address.$error, 'is-valid':!$v.college.address.$invalid}"
         > </b-form-input>
         <div class="valid-feedback">Your college address is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.college.address.required">College address is required</span>
            </div>
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

<script>
import { required, minLength,maxLength,numeric} from "vuelidate/lib/validators";
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
    }
  },
  validations: {
        college: {
            collegename: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(10)
            },
              username: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(25)
            },
            password: {
                required,
                minLength: minLength(3)
            },
            phone: {
                required,
              numeric,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },
            address: {
                required,
                minLength: minLength(10)
            },
        }
  },
  methods: {

    putCollege: function() {
      this.$v.$touch()
                if(this.$v.$invalid){
                    this.submitstatus = "FAIL"
                }
                else {
                    this.submitstatus = "SUCCESS"
      return new Promise((resolve, reject) => {
        CollegeService.putCollege(this.college)
          .then((response) => {
           alert("College Registration Successfully")
           this.college.collegename = "";
           this.college.username = "";
           this.college.password= "";
           this.college.phone = "";
           this.college.address = "";
            alert("Form submitted!");
             location.reload();
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  }
}
};
</script>