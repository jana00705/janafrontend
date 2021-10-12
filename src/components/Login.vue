<template>
  <div class="form-control">
    <b-modal id="modal-1" title="LOGIN" ref="modal" hide-footer>
      <div>
        <b-form-group>
          <b-form-radio-group v-model="selected">
            <b-container>
              <b-row>
                <b-col>
                  <b-form-radio id="admr" v-model="selected" v-bind:value="1"
                    >Admin</b-form-radio
                  >
                </b-col>
                <b-col>
                  <b-form-radio id="clgr" v-model="selected" v-bind:value="2"
                    >College</b-form-radio
                  >
                </b-col>
                <b-col>
                  <b-form-radio id="stur" v-model="selected" v-bind:value="3"
                    >Student</b-form-radio
                  >
                </b-col>
              </b-row>
            </b-container>
          </b-form-radio-group>
        </b-form-group>
      </div>
      <b-form-group label="User Name" label-for="username">
        <b-form-input
          id="username"
          name="user"
          v-model.trim="$v.log.username.$model"
          :class="{
            'is-invalid': $v.log.username.$error,
            'is-valid': !$v.log.username.$invalid,
          }"
        >
        </b-form-input>

        <div class="invalid-feedback">
          <span v-if="!$v.log.username.required">User Name is required</span>
        </div>
      </b-form-group>

      <b-form-group label="Password" label-for="password">
        <b-form-input
          id="password"
          name="password"
          type="password"
          v-model.trim="$v.log.password.$model"
          :class="{
            'is-invalid': $v.log.password.$error,
            'is-valid': !$v.log.password.$invalid,
          }"
        >
        </b-form-input>

        <div class="invalid-feedback">
          <span v-if="!$v.log.password.required">Password is required</span>
        </div>
      </b-form-group>
      <div class="text-center mt-5">
        <b-button
          size="sm"
          id="submit"
          variant="outline-success"
          @click="login()"
          >Submit</b-button
        >
        <b-button
          class="mx-3"
          type="reset"
          size="sm"
          id="cancel"
          variant="outline-danger"
          >Reset</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
// import CollegeService from "../service/CollegeService";
// import VueCookies from 'vue-cookies'
import LoginService from "../service/LoginService";
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",

  data() {
    return {
      // selected: '1',
      log: {
        username: "",
        password: "",
      },

      selected: "1",
    };
  },

  validations: {
    log: {
      username: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    login: function () {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitstatus = "FAIL";
      } else {
        this.submitstatus = "SUCCESS";
        if (this.selected == 1) {
          return new Promise((resolve, reject) => {
            LoginService.loginAdmin(this.log)
              .then((response) => {
                localStorage.setItem("name", this.log.username);
                localStorage.setItem("role", "Admin");
                localStorage.setItem("status", "verified");
                alert("login successfully");
                this.$router.push({ name: "Admin" });
                (this.log.username = ""), (this.log.password = "");

                resolve(response);
              })
              .catch((err) => {
                localStorage.setItem("status", "unverified");
                alert("Admin login failed");
                reject(err);
              });
          });
        } else if (this.selected == 2) {
          return new Promise((resolve, reject) => {
            LoginService.loginCollege(this.log)
              .then((response) => {
                localStorage.setItem("name", this.log.username);
                localStorage.setItem("role", "College");
                localStorage.setItem("status", "verified");
                alert("College login successfully");
                this.$router.push({ name: "College" });
                (this.log.username = ""), (this.log.password = "");

                resolve(response);
              })
              .catch((err) => {
                alert("login failed");
                localStorage.setItem("status", "unverified");
                reject(err);
              });
          });
        } else if (this.selected == 3) {
          return new Promise((resolve, reject) => {
            LoginService.loginStudent(this.log)
              .then((response) => {
                localStorage.setItem("name", this.log.username);
                localStorage.setItem("role", "Student");
                localStorage.setItem("status", "verified");
                alert("Student login successfully");
                this.$router.push({ name: "Student" });
                (this.log.username = ""), (this.log.password = "");

                resolve(response);
              })
              .catch((err) => {
                alert("login failed");
                localStorage.setItem("status", "unverified");
                reject(err);
              });
          });
        }
      }
    },
  },
};
</script>