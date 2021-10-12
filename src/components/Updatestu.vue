<template>
  <div class="form-control">
    <b-modal
      id="upstu"
      scrollable
      title="UPDATE STUDENT DETAILS"
      ref="modal"
      hide-footer
    >
      <div>
        <b-form-group label="First Name" label-for="firstname">
          <b-form-input
            id="firstname"
            name="firstname"
            v-model.trim="$v.student.firstname.$model"
            :class="{
              'is-invalid': $v.student.firstname.$error,
              'is-valid': !$v.student.firstname.$invalid,
            }"
          >
          </b-form-input>
          <div class="valid-feedback">Your First Name is Valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.student.firstname.required"
              >First Name is required</span
            >
          </div>
        </b-form-group>
        <b-form-group label="Last Name" label-for="lastname">
          <b-form-input
            id="lastname"
            name="lastname"
            v-model.trim="$v.student.lastname.$model"
            :class="{
              'is-invalid': $v.student.lastname.$error,
              'is-valid': !$v.student.lastname.$invalid,
            }"
          >
          </b-form-input>
          <div class="valid-feedback">Your First Name is Valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.student.lastname.required"
              >First Name is required</span
            >
          </div>
        </b-form-group>

        <b-form-group label="User Name" label-for="username">
          <b-form-input
            id="username"
            name="user"
            v-model.trim="$v.student.username.$model"
            :class="{
              'is-invalid': $v.student.username.$error,
              'is-valid': !$v.student.username.$invalid,
            }"
          >
          </b-form-input>
          <div class="valid-feedback">Your User name is valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.student.username.required"
              >User Name is required</span
            >
          </div>
        </b-form-group>

        <b-form-group label="Password" label-for="password">
          <b-form-input
            id="password"
            name="password"
            type="password"
            v-model.trim="$v.student.password.$model"
            :class="{
              'is-invalid': $v.student.password.$error,
              'is-valid': !$v.student.password.$invalid,
            }"
          >
          </b-form-input>
          <div class="valid-feedback">Your Password is valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.student.password.required"
              >Password is required</span
            >
          </div>
        </b-form-group>

        <b-form-group label="Phone Number" label-for="studentnumber">
          <b-form-input
            id="studentnumber"
            name="studentnumber"
            type="number"
            v-model.trim="$v.student.phone.$model"
            :class="{
              'is-invalid': $v.student.phone.$error,
              'is-valid': !$v.student.phone.$invalid,
            }"
          >
          </b-form-input>
          <div class="valid-feedback">Your number is valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.student.phone.required"
              >Phone number is required</span
            >
          </div>
        </b-form-group>
        <b-form-group label="Email" label-for="email">
          <b-form-input
            id="email"
            name="email"
            v-model.trim="$v.student.email.$model"
            :class="{
              'is-invalid': $v.student.email.$error,
              'is-valid': !$v.student.email.$invalid,
            }"
          >
          </b-form-input>
          <div class="valid-feedback">Your Email is valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.student.address.required">Email is required</span>
          </div>
        </b-form-group>

        <b-form-group label="Address" label-for="address">
          <b-form-input
            id="address"
            name="address"
            v-model.trim="$v.student.address.$model"
            :class="{
              'is-invalid': $v.student.address.$error,
              'is-valid': !$v.student.address.$invalid,
            }"
          >
          </b-form-input>
          <div class="valid-feedback">Your address is valid!</div>
          <div class="invalid-feedback">
            <span v-if="!$v.student.address.required">Address is required</span>
          </div>
        </b-form-group>

        <b-form-group label="College:">
          <b-form-select
            class="form-control"
            v-model.trim="$v.student.college.$model"
            :class="{
              'is-invalid': $v.student.college.$error,
              'is-valid': !$v.student.college.$invalid,
            }"
            :options="colleges"
          ></b-form-select>
        </b-form-group>
        <div class="valid-feedback">Your College is valid!</div>
        <div class="invalid-feedback">
          <span v-if="!$v.student.college.required">College is required</span>
        </div>
        <br />

        <div class="text-center mt-5">
          <b-button
            size="sm"
            id="submit"
            variant="outline-success"
            @click="putStudent()"
            >Update</b-button
          >
        </div>
      </div>
    </b-modal>
  </div>
</template>

<style scoped>
</style>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
import StudentService from "../service/StudentService";
export default {
  name: "studentPage",
  components: {},
  data() {
    return {
      student: {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        phone: "",
        email: "",
        address: "",
        college: "",
      },

      colleges: [
        { value: null, text: "Choose...", disabled: true },
        { value: "ANJAC", text: "ANJAC" },
        { value: "MEPCO", text: "MEPCO" },
        { value: "AAA", text: "AAA" },
        { value: "FATIMA", text: "FATIMA" },
      ],
    };
  },
  validations: {
    student: {
      firstname: {
        required,
        minLength: minLength(3),
      },
      lastname: {
        required,
        minLength: minLength(3),
      },
      username: {
        required,
        minLength: minLength(3),
      },
      password: {
        required,
        minLength: minLength(3),
      },
      address: {
        required,
        minLength: minLength(8),
      },
      phone: {
        required,
        maxLength: maxLength(10),
        minLength: minLength(10),
      },
      email: {
        required,
        email,
      },
      college: {
        required,
      },
    },
  },

  methods: {
    putStudent: function () {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitstatus = "FAIL";
      } else {
        this.submitstatus = "SUCCESS";
        return new Promise((resolve, reject) => {
          StudentService.putStudent(this.student)
            .then((response) => {
              this.student.firstname = "";
              this.student.lastname = "";
              this.student.username = "";
              this.student.password = "";
              this.student.phone = "";
              this.student.email = "";
              this.student.address = "";
              this.student.college = "";
              alert("Form submitted!");
              location.reload();
              resolve(response);
            })
            .catch((err) => {
              reject(err);
            });
        });
      }
    },
  },
};
</script>