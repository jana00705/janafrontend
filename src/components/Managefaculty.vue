<template>
  <div>
    <div>
      <NavBar />
    </div>
     <div class=" mt-5 d-grid gap-2 d-md-flex justify-content-md-end"> 
           <b-button href="/College/Facultymanagement" variant="outline-primary" @click="getIn()"><b-icon
                title="back"
                  icon="chevron-double-left"></b-icon>Back</b-button>    
</div>
    <div class="mt-5 mb-5"><h1>Manage Faculty</h1></div>

    <b-container>
      <div>
        <b-table-simple class="table table-striped table-bordered mb-5">
          <b-thead>
            <b-tr variant="primary">
              <b-th >Faculty Id</b-th>
              <b-th>Faculty Name</b-th>
              <b-th >Qualification</b-th>
              <b-th>Experience</b-th>
               <b-th>Skill Set</b-th>
              <b-th>Action</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="s in faculties" :key="s.id">
              <b-td>{{ s.id }}</b-td>
              <b-td>{{ s.facultyname }}</b-td>
              <b-td>{{ s.qualification }}</b-td>
              <b-td>{{ s.experience }}</b-td>
              <b-td>{{ s.skillset }}</b-td>
             
              <b-td
                ><b-icon
                title="delete"
                  icon="trash-fill"
                  aria-hidden="true"
                  @click="deleteFaculty(s.id)"
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

   
  
  </div>
</template>

<script>
import NavBar from "./Navbar";
import Footer from "./Footer";
import FacultyService from "../service/FacultyService";
export default {
  name: "Managefaculty",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      faculties: null,
      faculty: {
        id: "",
        facultyname: "",
        qualification: "",
        experience: "",
        skillset: "",
      },
    };
  },
  mounted() {
    this.getAllFaculty();
    this.logOut();
  },
  methods: {
    getAllFaculty: function () {
      return new Promise((resolve, reject) => {
       FacultyService.getAllFaculty()
          .then((response) => {
            this.faculties = response.data;
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    deleteFaculty: function (id) {
      return new Promise((resolve, reject) => {
       FacultyService.deleteFaculty(id)
          .then((response) => {
            this.faculties = response.data;
            this.getAllFaculty();
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getFaculty: function (id) {
      return new Promise((resolve, reject) => {
        FacultyService.getFaculty(id)
          .then((response) => {
            this.faculty = response.data;
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getIn: function(){
      localStorage.setItem('status','verified') 
     },
     logOut: function(){
       localStorage.setItem('status','unverified')
     }
  },
};
</script>
