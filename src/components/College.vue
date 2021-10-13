<template>
  <div class="">
    <div class="College">
      <NavBar />
    </div>
    <div class="mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
      <b-button href="/" variant="outline-primary" @click="logOut()"
        ><b-icon title="logout" icon="box-arrow-left"></b-icon>LOGOUT</b-button
      >
    </div>
    <b-container class="bv-example-row mt-5">
      <b-row class="text-center">
        <h2 class="mt-4">College Login</h2>
      </b-row>

      <b-row>
        <b-col>
          <div class="crd">
            <b-card
              bg-variant="dark"
              text-variant="white"
              title="Upload Articles"
            >
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
              <b-button
                href="/College/Uploadarticle"
                variant="outline-warning"
                pill
                >View This Page</b-button
              >
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="crd">
            <b-card
              bg-variant="dark"
              text-variant="white"
              title="Update Profile"
            >
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
              <b-button href="#" variant="outline-warning" v-b-modal.upclg pill
                @click="getId()">View This Page</b-button
              >
            </b-card>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="crd">
            <b-card
              bg-variant="dark"
              text-variant="white"
              title="Faculty Management"
            >
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
              <b-button
                href="College/Facultymanagement"
                variant="outline-warning"
                pill
                >View This Page</b-button
              >
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="crd">
            <b-card
              bg-variant="dark"
              text-variant="white"
              title="View Student Request"
            >
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
              <b-button
                href="/College/Viewrequest"
                variant="outline-warning"
                pill
                >View This Page</b-button
              >
            </b-card>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="crd">
            <b-card
              bg-variant="dark"
              text-variant="white"
              title="Send Feedback"
            >
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
              <b-button href="/College/Feedback" variant="outline-warning" pill
                >View This Page</b-button
              >
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="footer">
      <FooTer />
    </div>
    <Updateclg />
     <div>
    <b-modal
      id="upclg"
      scrollable
      title="Update College Profile"
      ref="modal"
      hide-footer
    >
      <div>
        <b-form-group id="clg-grp-1" label="College Name">
          <b-form-input v-model="college.collegename"> </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-2" label="User Name">
          <b-form-input v-model="college.username"> </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-3" label="Password">
          <b-form-input type="password" v-model="college.password">
          </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-1" label="phone Number">
          <b-form-input type="number" v-model="college.phone"> </b-form-input>
        </b-form-group>

        <b-form-group id="clg-grp-1" label="Postal Address">
          <b-form-input v-model="college.address"> </b-form-input>
        </b-form-group>

        <div class="text-center mt-5">
          <b-button size="sm" id="update" variant="outline-success"
            @click="updateCollege()">Update</b-button
          >
        </div>
      </div>
    </b-modal>
  </div>
  </div>
</template>

<script>
import CollegeService from "../service/CollegeService";
import NavBar from "./Navbar";
import FooTer from "./Footer";
// import Updateclg from "./Updateclg";
export default {
  name: "College",

  components: {
    NavBar,
    FooTer,
    // Updateclg,
  },
   data() {
    return {
      college: {
        collegename: "",
        username: "",
        password: "",
        phone: "",
        address: "",
      },
    };
  },
  mounted() {
    // this.role();
  },
  methods: {
    getId : function(){
            var id = localStorage.getItem('collegeId')
            this.getCollege(id);
        },
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
               this.college.id = '',
                    this.college.collegename =  '',
                    this.college.username =  '',
                    this.college.password = '',
                    this.college.phoneNumber = '',
                    this.college.address = ''
               alert(response.data);
              resolve(response);
            })
            .catch((err) => {
              reject(err);
            });
        });
      },
    logOut: function () {
      localStorage.setItem("status", "unverified");
    },

    //  role: function(){
    //    localStorage.setItem('role','Admin')
    //  },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card1 {
  padding-left: 20%;
  padding-right: 20%;
}
.crd {
  margin-top: 5%;
  padding: 5% 1% 5% 1%;
}
h2 {
  font-weight: bold;
}
</style>