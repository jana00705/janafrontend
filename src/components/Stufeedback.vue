<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="mt-5 mb-5"><h1>Student Feedback</h1></div>

    <b-container>
        <div>
            <b-form-group  label="College" >
        <b-form-select
        class="form-control"
          v-model="studenfb.college"
          :options="colleges">
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
        v-model="studentfb.feedback"
      ></b-form-textarea>
    </b-col>
  </b-row>
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
  name: "Stufeedback",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      colleges: [
        { value: null, text: "Choose..." , disabled: true},
        { value: "ANJAC", text: "ANJAC" },
        { value: "MEPCO", text: "MEPCO" },
        { value: "AAA", text: "AAA" },
        { value: "FATIMA", text: "FATIMA" },
      ],
      studentfb: {
        studentname:'',
       college:'',
       feedback:'',

      },
    };
  },
 
  methods: {
  putStudentfb: function() {
      return new Promise((resolve, reject) => {
        FeedbackService.putStudentfb(this.studentfb)
          .then((response) => {
            
           this.studentfb.studentname = "";
           this.student.college = "";
           this.student.feedback= "";
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
     
    }
 
}
</script>
