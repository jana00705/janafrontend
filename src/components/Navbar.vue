<template>
  <div class="">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="primary" class="fixed-top">
        <b-container fluid>
          <b-navbar-brand href="#" class="mx-5">
            <img
              class="d-inline-block align-top mx-2"
              src="https://icon-library.com/images/graduation-icon-png/graduation-icon-png-28.jpg"
              width="30"
              height="30"
              alt=""
              loading="lazy"
            />
            𝙹𝙸</b-navbar-brand
          >

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ms-auto">
              <b-navbar-nav>
                <b-nav-item href="/">Home</b-nav-item>
                <b-nav-item href="#" v-b-modal.modal-1>Login</b-nav-item>
              </b-navbar-nav>

              <b-nav-item-dropdown text="Registration" right>
                <b-dropdown-item href="#" v-b-modal.modal-2
                  >Student Registration</b-dropdown-item
                >
                <b-dropdown-item href="#" v-b-modal.modal-3
                  >College Registration</b-dropdown-item
                >
              </b-nav-item-dropdown>
              <b-navbar-nav>
                <b-nav-item href="#" disabled> About</b-nav-item>
                <b-nav-item href="Contact"> contact</b-nav-item>
              </b-navbar-nav>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
    <div class="ji">
      <div class="mb-2 mt-5 ji">
        <h1>Jana Institute</h1>
        <h6 class="text-secondary">
          (Afflicated to Madurai Kamaraj University,Madurai)
        </h6>
      </div>
    </div>
    <div id="nav2">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-container fluid>
          <img
            class="d-inline-block align-top mx-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
            width="25"
            height="25"
            alt=""
            loading="lazy"
          />

          <img
            class="d-inline-block align-top mx-4"
            src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
            width="25"
            height="25"
            alt=""
            loading="lazy"
          />

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ms-auto">
            <b-navbar-nav>
              <b-nav-item href="#" active
                ><small
                  ><span
                    >Call Us Today!
                    <span class="text-secondary"> +91- 9487487825</span></span
                  >
                  <span class="mx-2">|</span
                  ><span class="text-warning"
                    >officialji007@gmail.com</span
                  ></small
                >
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-container>
      </b-navbar>
    </div>

    <!-- LOGIN START-->

    <!-- LOGIN END-->

    <!-- STUDENT REGISTRATION START-->
    <div>
      <PopStudent />
    </div>
    <!-- STUDENT REGISTRATION END-->
    <Login />
    <!-- COLLEGE REGISTRATION START-->
    <div>
      <PopCollege />
    </div>
    <!-- COLLEGE REGISTRATION END-->
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@600&family=Monoton&family=Rampart+One&display=swap");
#nav2 .navbar {
  padding-top: 0rem;
  padding-bottom: 0rem;
}
/* .nav1{
  position:fixed top;
 
} */
.ji {
  margin-top: 90px;
}
h1 {
  font-family: "dosis";
  background: -webkit-linear-gradient(rgb(1, 111, 255), rgb(32, 32, 32));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 50px;
}
</style>



<script>
import PopStudent from "./Popstudent.vue";
import Login from "./Login.vue";
import PopCollege from "./Popcollege.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    PopCollege,
    PopStudent,
    Login,
  },
};
</script>