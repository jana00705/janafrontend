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
    <div class="mt-5 mb-5"><h1>Delete Institute</h1></div>

    <b-container>
      <div>
        <b-table-simple
          hover
          responsive
          class="table table-striped table-bordered mb-5"
        >
          <b-thead>
            <b-tr variant="primary">
              <b-th>College Id</b-th>
              <b-th>College Name</b-th>
              <b-th>Action</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="s in colleges" :key="s.id">
              <b-td>{{ s.id }}</b-td>
              <b-td>{{ s.collegename }}</b-td>
              <b-td
                ><b-icon
                  title="delete"
                  icon="trash-fill"
                  aria-hidden="true"
                  @click="deleteCollege(s.id)"
                ></b-icon>
                <span class="mx-1"> / </span>
                <b-icon
                  title="view"
                  icon="eye-fill"
                  aria-hidden="true"
                  v-b-modal.viewins
                  @click="getCollege(s.id)"
                ></b-icon>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </b-container>
    <div>
      <Footer />
    </div>

    <!-- View College Popup -->
    <div>
      <b-modal
        id="viewins"
        scrollable
        title="View Institute"
        ref="modal"
        hide-footer
      >
        <div>
          <b-table-simple
            hover
            responsive
            class="table table-striped table-bordered mb-5"
          >
            <b-tbody>
              <b-tr>
                <b-th>College Id</b-th>
                <b-td>{{ college.id }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>College Name</b-th>
                <b-td>{{ college.collegename }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>UserName</b-th>
                <b-td>{{ college.username }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>Phone Number</b-th>
                <b-td>{{ college.phone }}</b-td>
              </b-tr>

              <b-tr>
                <b-th>College Address</b-th>
                <b-td>{{ college.address }}</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import NavBar from "./Navbar";
import Footer from "./Footer";
import CollegeService from "../service/CollegeService";
export default {
  name: "DeleteInstitute",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      colleges: null,
      college: {
        id: "",
        collegename: "",
        username: "",
        phone: "",
        address: "",
      },
    };
  },
  mounted() {
    this.getAllColleges();
    // this.logOut();
  },
  methods: {
    getAllColleges: function () {
      return new Promise((resolve, reject) => {
        CollegeService.getAllColleges()
          .then((response) => {
            this.colleges = response.data;
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    deleteCollege: function (id) {
      return new Promise((resolve, reject) => {
        CollegeService.deleteCollege(id)
          .then((response) => {
            this.colleges = response.data;
            this.getAllColleges();
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getCollege: function (id) {
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
    // getIn: function(){
    //   localStorage.setItem('status','verified')
    //  },
    //  logOut: function(){
    //    localStorage.setItem('status','unverified')
    //  },
  },
};
</script>
