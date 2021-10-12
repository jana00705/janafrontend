<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
      <b-button href="/College" variant="outline-primary" @click="getIn()"
        ><b-icon title="back" icon="chevron-double-left"></b-icon>Back</b-button
      >
    </div>
    <div class="mt-5 mb-5"><h1>College Feedback</h1></div>

    <b-container>
      <div>
        <b-form-group label="College">
          <b-form-select
            class="form-control"
            v-model="collegefeedback.college"
            :options="colleges"
          >
          </b-form-select>
        </b-form-group>
      </div>
      <div>
        <b-row class="mt-5">
          <b-col sm="2" class="mt-3">
            <label for="textarea-large"><h3>Feed Back :</h3> </label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea
              size="lg"
              placeholder="Enter Feed Back"
              v-model="collegefeedback.feedback"
            ></b-form-textarea>
          </b-col>
        </b-row>
      </div>
      <div class="text-center mt-5">
        <b-button
          size="md"
          id="submit"
          variant="outline-success"
          @click="putFeedback()"
          >Submit</b-button
        >
      </div>
    </b-container>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import FeedbackService from "../service/FeedbackService";
import NavBar from "./Navbar";
import Footer from "./Footer";
export default {
  name: "Feedback",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      colleges: [
        { value: null, text: "Choose...", disabled: true },
        { value: "ANJAC", text: "ANJAC" },
        { value: "MEPCO", text: "MEPCO" },
        { value: "AAA", text: "AAA" },
        { value: "FATIMA", text: "FATIMA" },
      ],
      collegefeedback: {
        college: "",
        feedback: "",
      },
    };
  },
  mounted() {
    this.logOut();
  },
  methods: {
    putFeedback: function () {
      return new Promise((resolve, reject) => {
        FeedbackService.putFeedback(this.collegefeedback)
          .then((response) => {
            this.collegefeedback.college = "";
            this.collegefeedback.feedback = "";
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    getIn: function () {
      localStorage.setItem("status", "verified");
    },
    logOut: function () {
      localStorage.setItem("status", "unverified");
    },
  },
};
</script>
