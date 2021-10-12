<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
      <b-button href="/College" variant="outline-primary"
        ><b-icon title="back" icon="chevron-double-left"></b-icon>Back</b-button
      >
    </div>
    <div class="mt-5 mb-5"><h1>View Request</h1></div>

    <b-container>
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
              <b-th>Request</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="f in requests" :key="f.id">
              <b-td>{{ f.student }}</b-td>
              <b-td>{{ f.college }}</b-td>
              <b-td>{{ f.request }}</b-td>
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
import CollegeService from "../service/CollegeService";
export default {
  name: "Viewstudent",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      requests: null,
    };
  },
  mounted() {
    this.getAllRequests();
  },
  methods: {
    getAllRequests: function () {
      return new Promise((resolve, reject) => {
        CollegeService.getAllRequests()
          .then((response) => {
            this.requests = response.data;
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
</script>
