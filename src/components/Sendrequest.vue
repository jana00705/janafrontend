<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class=" mt-5 d-grid gap-2 d-md-flex justify-content-md-end"> 
           <b-button href="/Student" variant="outline-primary"><b-icon
                title="back"
                  icon="chevron-double-left"></b-icon>Back</b-button>    
</div>
    <div class="mt-5 mb-5"><h1>Send Request</h1></div>

    <b-container>
      <div>
            <b-form-group  label="Student Name" >
        <b-form-input
    
          v-model="sendrequest.student">
          </b-form-input>
      </b-form-group>
        </div>
        <div>
            <b-form-group  label="College" >
        <b-form-select
        class="form-control"
          v-model="sendrequest.college"
          :options="colleges">
          </b-form-select>
      </b-form-group>
        </div>
<div>
     <b-row class="mt-5">
    <b-col sm="2" class="mt-3">
      <label for="textarea-large"><h4>Request For :</h4> </label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        size="lg"
        placeholder="Enter Your Request"
        v-model="sendrequest.request"
      ></b-form-textarea>
    </b-col>
  </b-row>
      </div>
     <div class="text-center mt-5 ">
          <b-button
            size="md"
            id="submit"
            variant="outline-success"
            @click="putSendRequest()"
            >Submit</b-button>
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
      sendrequest: {
       student:'',
       college:'',
       request:'',

      },
    };
  },

  methods: {
  putSendRequest: function() {
      return new Promise((resolve, reject) => {
        FeedbackService.putSendRequest(this.sendrequest)
          .then((response) => {
            this.sendrequest.student= "";
            this.sendrequest.college= "";
            this.sendrequest.request= "";
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
