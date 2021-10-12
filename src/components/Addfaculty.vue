<template>
  <div>
    <b-modal id="addfac" scrollable title="ADD FACULTY" ref="modal" hide-footer>
      <div>
        <b-form-group label="Faculty Name">
          <b-form-input v-model="faculty.facultyname"> </b-form-input>
        </b-form-group>

        <b-form-group label="Qualification">
          <b-form-input v-model="faculty.qualification"> </b-form-input>
        </b-form-group>

        <b-form-group label="Experience">
          <b-form-select
            class="form-control"
            v-model="faculty.experience"
            :options="exp"
          >
          </b-form-select>
        </b-form-group>

        <b-form-group label="Skill Set">
          <b-form-input v-model="faculty.skillset"> </b-form-input>
        </b-form-group>

        <div class="text-center mt-5">
          <b-button
            size="sm"
            id="submit"
            variant="outline-success"
            @click="putFaculty()"
            >Submit</b-button
          >
        </div>
      </div>
    </b-modal>
  </div>
</template>

<style scoped>
</style>

<script>
import FacultyService from "../service/FacultyService";
export default {
  name: "Addfaculty",
  components: {},
  data() {
    return {
      exp: [
        { value: null, text: "Choose...", disabled: true },
        { value: "1", text: "1" },
        { value: "2", text: "2" },
        { value: "3", text: "3" },
        { value: "4", text: "4" },
        { value: "5", text: "5" },
        { value: "6", text: "6" },
        { value: "7", text: "7" },
        { value: "8", text: "8" },
      ],
      faculty: {
        facultyname: "",
        qualification: "",
        skillset: "",
        experience: "",
      },
    };
  },

  methods: {
    putFaculty: function () {
      return new Promise((resolve, reject) => {
        FacultyService.putFaculty(this.faculty)
          .then((response) => {
            this.faculty.facname = "";
            this.faculty.qualification = "";
            this.faculty.skill = "";
            this.faculty.exp = "";

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