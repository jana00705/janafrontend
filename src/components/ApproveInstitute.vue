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
    <div class="mt-5 mb-5"><h1>Approve Institute</h1></div>

    <b-container>
      <div >
        <b-table-simple class="table table-striped table-bordered mb-5">
          <b-thead>
            <b-tr variant="primary">
              <b-th >College Id</b-th>
              <b-th>College Name</b-th>
              <b-th >User Name</b-th>
              <b-th>Phone Number</b-th>
              <b-th >Postal Address</b-th>
              
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="s in colleges" :key="s.id">
              <b-td>{{ s.id }}</b-td>
              <b-td>{{ s.collegename }}</b-td>
              <b-td>{{ s.username }}</b-td>
              <b-td>{{ s.phone }}</b-td>
              <b-td>{{ s.address }}</b-td>
              
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
    // this.role();
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
    // getIn: function(){
    //   localStorage.setItem('status','verified') 
    //  },
    //  role: function(){
    //    localStorage.setItem('role','Admin')
    //  },
      
   
  },
};
</script>
