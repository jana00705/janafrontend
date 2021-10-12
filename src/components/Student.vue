<template>
  <div class="">
    <div class="Student">
      <NavBar />
    </div>
    <div class="mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
      <b-button href="/" variant="outline-primary" @click="logOut()"
        ><b-icon title="logout" icon="box-arrow-left"></b-icon>LOGOUT</b-button
      >
    </div>
    <b-container class="bv-example-row mt-5">
      <b-row class="text-center">
        <h2 class="mt-4">Student Login</h2>
      </b-row>

      <b-row>
        <b-col>
          <div class="crd">
            <b-card
              bg-variant="dark"
              text-variant="white"
              title="Download Articles"
            >
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
              <b-button
                href="/Student/Downloadarticles"
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
              <b-button href="#" variant="outline-warning" v-b-modal.upstu pill
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
              <b-button
                href="/Student/Studentfeedback"
                variant="outline-warning"
                pill
                >View This Page</b-button
              >
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="crd">
            <b-card bg-variant="dark" text-variant="white" title="Send Request">
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
              <b-button
                href="/Student/Sendrequest"
                variant="outline-warning"
                pill
                >View This Page</b-button
              >
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="Home">
      <FooTer />
    </div>
    <Updatestu />
  </div>
</template>

<script>
import NavBar from "./Navbar";
import FooTer from "./Footer";
import Updatestu from "./Updatestu.vue";
export default {
  name: "Home1",

  components: {
    NavBar,
    FooTer,
    Updatestu,
  },

  methods: {
    logOut: function () {
      localStorage.setItem("status", "unverified");
    },
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