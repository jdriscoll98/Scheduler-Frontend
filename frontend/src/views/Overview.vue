<template>
  <div class="main">
    <div>
      <div v-for="semester in semesters" :key="semester.id" class="card">
        <div class="card-header">
          <h1
            class="semester-number"
          >Semester {{ semester.number }} - {{ semester.term }} {{ semester.year }}</h1>
          <button class="edit-btn">
            <img
              @click="editSemester(semester)"
              class="edit"
              src="../assets/images/edit-regular.svg"
            />
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
              <tr v-for="course in semester.courses" :key="course.code">
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
    </div>
    <div v-if="semesters.length == 0" class="empty">
      <h3 class="heading">No Semesters Added Yet!</h3>
    </div>
    <button @click="newSemester" class="add-btn">
      <img class="add" src="../assets/images/plus-solid.svg" />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Overview",
  computed: {
    semesters: function () {
      return this.$store.state.semesters;
    },
    programs: function () {
      return this.$store.state.programs;
    },
  },
  methods: {
    ...mapActions(["getSemesters", "getPrograms"]),
    getTotal: (semester) => {
      let total = 0;
      semester.courses.forEach((course) => {
        total += +course.credits;
      });
      return total;
    },
    newSemester: function () {
      this.$store.state.semesterID = null;
      this.$store.state.semesterForm = {
        number: "",
        term: "Fall",
        year: "2020",
        courses: [],
        notes: "",
      };
      this.$router.push("form");
    },
    editSemester: function (semester) {
      this.$store.state.semesterID = semester.id;
      this.$store.state.semesterForm = semester;
      semester.courses.forEach((course) => {
        console.log(course);
      });
      this.$router.push("form");
    },
  },
  created() {
    if (!(this.semesters && this.semesters.length > 0)) {
      this.getSemesters();
    }
    if (!(this.programs && this.programs.length > 0)) {
      this.getPrograms();
    }
  },
};
</script>

<style scoped>
.empty {
  position: relative;
  top: 135px;
}
.heading {
  font-size: 24px;
  font-weight: 800;
}
.add-btn {
  display: inline-block;
  height: 50px;
  width: 50px;
  position: relative;
  top: 150px;
  margin: 20px;
  border-radius: 30px;
  background-color: green;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.add {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.add-btn:hover {
  transform: scale(1.1);
}
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
</style>
