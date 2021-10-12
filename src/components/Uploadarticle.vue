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
    <div class="mt-5 mb-5"><h1>Upload Article</h1></div>

    <b-container>
      <div>
        <b-form-file
          v-model="file1"
          :state="Boolean(file1)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        >
        </b-form-file>
        <div class="mt-3">Selected file: {{ file1 ? file1.name : "" }}</div>
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
export default {
  name: "Uploadarticle",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      students: null,
      file1: null,
    };
  },

  methods: {},
};
</script>
