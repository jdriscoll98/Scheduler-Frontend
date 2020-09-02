<template>
  <div class="card">
    <div class="card-header">
      <h1
        class="semester-number"
      >Semester {{ semester.number }} - {{ semester.term }} {{ semester.year }}</h1>
      <button class="edit-btn">
        <img @click="editSemester(semester)" class="edit" src="../assets/images/edit-regular.svg" />
      </button>
    </div>
    <div class="card-body">
      <div class="card-table">
        <table>
          <tr>
            <th>Class</th>
            <th>Name</th>
            <th>Credits</th>
          </tr>
          <tr v-for="course in filteredCourses(semester.courses)" :key="course.code">
            <td>{{ course.code }}</td>
            <td>{{ course.name }}</td>
            <td>{{ course.credits }}</td>
          </tr>
          <tfoot>
            <tr>
              <td colspan="2" style="text-align: right; font-weight: 800">Total:</td>
              <td style="font-weight: 800">{{ getTotal(semester) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  name: "SemesterCard",
  props: {
    semester: Object,
  },
  methods: {
    getTotal: (semester) => {
      let total = 0;
      semester.courses.forEach((course) => {
        total += +course.credits;
      });
      return total;
    },
    editSemester: function (semester) {
      this.$store.state.semesterID = semester.id;
      this.$store.state.semesterForm = semester;
      this.$router.push("form");
    },
    filteredCourses: function (courses) {
      let courseMap = {};
      return courses.filter((course) => {
        if (course.code === "User-Added") {
          return course;
        } else {
          if (!(course.code in courseMap)) {
            courseMap[course.code] = true;
            return course;
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.edit-btn {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  border: none;
  background-color: #285797;
  cursor: pointer;
  outline: none;
}
.edit {
  height: 30px;
  width: 30px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  padding: 8px;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.semester-number {
  font-size: 22px;
  text-align: left;
  margin: 0 10px 10px 10px;
  padding-top: 10px;
}
.card-header {
  border-bottom: 1px solid black;
  background-color: #285797;
  color: white;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.card {
  display: inline-block;
  height: 100%;
  border-radius: 5px;
  width: 400px;
  margin: 25px;
  box-shadow: 0 5px 25px #888888;
  padding: 0 0 5px 0;
  background-color: white;
  position: relative;
  left: 0;
  top: 75px;
}

@media only screen and (max-width: 415px) {
  .card {
    width: 90vw;
    margin: 25px auto 25px auto;
  }
}
</style>
