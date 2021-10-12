<template>
  <div class="">
    <div class="College">
      <NavBar />
    </div>
    <div class="mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
      <b-button href="/College" variant="outline-primary" @click="getIn()"
        ><b-icon title="back" icon="chevron-double-left"></b-icon>Back</b-button
      >
    </div>
    <b-container class="bv-example-row mt-5">
      <b-row class="text-center">
        <h2 class="mt-4">Faculty Management</h2>
      </b-row>

      <b-row>
        <b-col>
          <div class="crd">
            <b-card bg-variant="dark" text-variant="white" title="Add Faculty">
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
              <b-button
                href="#"
                variant="outline-warning"
                v-b-modal.addfac
                pill
                @click="getIn()"
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
              title="Manage Faculty"
            >
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
              <b-button
                href="/College/Managefaculty"
                variant="outline-warning"
                pill
                @click="getIn()"
                >View This Page</b-button
              >
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="footer">
      <FooTer />
      <Addfaculty />
    </div>
  </div>
</template>

<script>
import NavBar from "./Navbar";
import FooTer from "./Footer";
import Addfaculty from "./Addfaculty";
export default {
  name: "College",

  components: {
    NavBar,
    FooTer,
    Addfaculty,
  },
  mounted() {
    this.logOut();
  },
  methods: {
    getIn: function () {
      localStorage.setItem("status", "verified");
    },
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