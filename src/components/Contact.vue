<template>
  <div>
    <div>
      <NavBar />
    </div>
    <h1 class="mt-5">CONTACT US</h1>
    <b-container fluid>
      <div>
        <iframe
          class="map mt-4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7870.05275981194!2d77.82563803488769!3d9.506434899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06ce02315ce3c1%3A0xcee514e903fa14ec!2sSri%20Kaliswari%20College%20(Autonomous)!5e0!3m2!1sen!2sin!4v1632483140119!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div class="mt-5">
        <b-row>
          <b-col>
            <h3>Address</h3>
            <p>
              Jana Institute Of Technology,<br />
              Anaiyur Main Street,<br />
              Anaiyur,<br />
              Madurai-17.
            </p>
          </b-col>
          <b-col>
            <h3>Contact No's</h3>
            <p>
              (23487) 728372,<br />
              (76456) 747324,<br />
              (+91) 9487487825 <br />
              (+91) 9487487825
            </p>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col>
            <h3>Fax</h3>
            <p>(76456) 747324</p>
          </b-col>
          <b-col>
            <h3>E-Mail</h3>
            <p>janaoffial123@gmail.com</p>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <div>
      <FooTer />
    </div>
  </div>
</template>

<style scoped>
.map {
  width: 100%;
}
</style>

<script>
import NavBar from "./Navbar";
import FooTer from "./Footer";
export default {
  name: "Home",

  components: {
    NavBar,
    FooTer,
  },
};
</script>