<template>
  <div class="">
    <div class="College">
   <NavBar />
  </div>
 <div class=" mt-5 d-grid gap-2 d-md-flex justify-content-md-end"> 
           <b-button href="/" variant="outline-primary" @click="logOut()" ><b-icon
                title="logout"
                  icon="box-arrow-left" ></b-icon>LOGOUT</b-button>    
</div>
<b-container class="bv-example-row mt-5">
  
  <b-row class="text-center">
    <h2 class="mt-4" >College Login</h2>
  </b-row>
  
  <b-row>
    <b-col>
  <div class="crd">
  <b-card bg-variant="dark" text-variant="white" title="Upload Articles">
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="/College/Uploadarticle" variant="outline-warning" pill>View This Page</b-button>
</b-card>
</div>
</b-col>
<b-col>
<div class="crd">
  <b-card bg-variant="dark" text-variant="white" title="Update Profile">
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="#" variant="outline-warning"  v-b-modal.upclg pill>View This Page</b-button>
</b-card>
</div>
</b-col>
</b-row>
 <b-row>
    <b-col>
  <div class="crd">
  <b-card bg-variant="dark" text-variant="white" title="Faculty Management">
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="College/Facultymanagement" variant="outline-warning" pill>View This Page</b-button>
</b-card>
</div>
</b-col>
<b-col>
<div class="crd">
  <b-card bg-variant="dark" text-variant="white" title="View Student Request" >
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="/College/Viewrequest" variant="outline-warning"  pill>View This Page</b-button>
</b-card>
</div>
</b-col>
</b-row>
<b-row>

<b-col>
<div class="crd">
  <b-card bg-variant="dark" text-variant="white" title="Send Feedback" >
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="#" variant="outline-warning"  pill>View This Page</b-button>
</b-card>
</div>
</b-col>
</b-row>

</b-container>
 <div class="footer">
   <FooTer />
  </div>
   <Updateclg />
  </div>
</template>

<script>
import CollegeService from "../service/CollegeService";
import NavBar from './Navbar'
import FooTer from './Footer'
import Updateclg from './Updateclg'
export default {
  name: 'College',
 
  components:{
        
        NavBar,FooTer,Updateclg
  },
   mounted(){
    // this.role();
  },
  methods: {

   
    getCollege: function(id) {
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
     logOut: function(){
       localStorage.setItem('status','unverified')
     },
    //  role: function(){
    //    localStorage.setItem('role','Admin')
    //  },
    
  } 
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card1{
  padding-left: 20%;
   padding-right: 20%;
}
.crd{
  margin-top: 5%;
  padding: 5% 1% 5% 1%;
}
h2{
  font-weight:bold;

}
</style>