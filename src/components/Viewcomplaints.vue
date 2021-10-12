<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
      <b-button href="/Admin" variant="outline-primary"
        ><b-icon title="back" icon="chevron-double-left"></b-icon>Back</b-button
      >
    </div>
    <div class="mt-5 mb-5"><h1>View Complaints</h1></div>

    <b-container>
      <div class="mt-3 mb-3"><h4>Student Feedback</h4></div>
      <div>
        <b-table-simple
          hover
          responsive
          class="table table-striped table-bordered mb-5"
        >
          <b-thead>
            <b-tr>
              <b-th>Student Name</b-th>
              <b-th>College</b-th>
              <b-th>Feedback</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="f in feedbacks" :key="f.id">
              <b-td>{{ f.student }}</b-td>
              <b-td>{{ f.college }}</b-td>
              <b-td>{{ f.feedback }}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
      <div class="mt-3 mb-3"><h4>College Feedback</h4></div>
      <div>
        <b-table-simple
          hover
          responsive
          class="table table-striped table-bordered mb-5"
        >
          <b-thead>
            <b-tr>
              <b-th>College</b-th>
              <b-th>Feedback</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="s in cfeedbacks" :key="s.id">
              <b-td>{{ s.college }}</b-td>
              <b-td>{{ s.feedback }}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </b-container>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "./Navbar";
import Footer from "./Footer";
import FeedbackService from "../service/FeedbackService";
export default {
  name: "ViewComplaints",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      feedbacks: null,
      cfeedbacks: null,
    };
  },
  mounted() {
    this.getAllFeedbacks();
    this.getAllCfeedbacks();
    // this.logOut();
  },
  methods: {
    getAllFeedbacks: function () {
      return new Promise((resolve, reject) => {
        FeedbackService.getAllFeedbacks()
          .then((response) => {
            this.feedbacks = response.data;
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getAllCfeedbacks: function () {
      return new Promise((resolve, reject) => {
        FeedbackService.getAllCfeedbacks()
          .then((response) => {
            this.cfeedbacks = response.data;
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // getIn: function(){
    //   localStorage.setItem('status','verified')
    //  },
    //  logOut: function(){
    //    localStorage.setItem('status','unverified')
    //  },
  },
};
</script>
