<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class=" mt-5 d-grid gap-2 d-md-flex justify-content-md-end"> 
           <b-button href="/Admin" variant="outline-primary" ><b-icon
                title="back"
                  icon="chevron-double-left"></b-icon>Back</b-button>    
</div>
    <div class="mt-5 mb-5"><h1>View Student</h1></div>

    <b-container>

      <div>
        <b-table-simple class="table table-striped table-bordered mb-5">
          <b-thead>
            <b-tr>
              <b-th>Student Name</b-th>
              <b-th>Mobile</b-th>
              <b-th>Email</b-th>
              <b-th>Address</b-th>
              <b-th>College</b-th>
              <b-th>Action</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="s in students" :key="s.id">
              <b-td>{{ s.firstname }}{{ s.lastname }}</b-td>
              <b-td>{{ s.phone }}</b-td>
              <b-td>{{ s.email }}</b-td>
              <b-td>{{ s.address }}</b-td>
              <b-td>{{ s.college }}</b-td>
             <b-td>
                <b-icon
                title="delete"
                  icon="trash-fill"
                  aria-hidden="true"
                  @click="deleteStudent(s.id)">
                  </b-icon>
               
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
import StudentService from "../service/StudentService";
export default {
  name: "Viewstudent",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      students: null,

    };
  },
  mounted() {
    this.getAllStudents();
    // this.logOut();
  
  },
  methods: {

      getAllStudents: function() {
      return new Promise((resolve, reject) => {
        StudentService.getAllStudents()
          .then((response) => {
            this.students = response.data;
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    deleteStudent: function (id) {
      return new Promise((resolve, reject) => {
        StudentService.deleteStudent(id)
          .then((response) => {
            this.students = response.data;
            this.getAllStudents();
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
//  getIn: function(){
//       localStorage.setItem('status','verified') 
//      },
//      logOut: function(){
//        localStorage.setItem('status','unverified')
//      }
  }
}
</script>
