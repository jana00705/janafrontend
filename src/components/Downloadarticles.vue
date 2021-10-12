<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
      <b-button href="/Student" variant="outline-primary"
        ><b-icon title="back" icon="chevron-double-left"></b-icon>Back</b-button
      >
    </div>
    <div class="mt-5 mb-5"><h1>Download Articles</h1></div>

    <b-container>
      <b-table-simple
        hover
        responsive
        class="table table-striped table-bordered pt-5"
      >
        <b-tr>
          <b-th>#</b-th>
          <b-th>Filename</b-th>
          <b-th>Download</b-th>
        </b-tr>
        <b-tr>
          <b-td>1</b-td>
          <b-td>java.txt</b-td>
          <b-td><a href="">Download</a></b-td>
        </b-tr>
      </b-table-simple>
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
  name: "Viewstudent",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>
