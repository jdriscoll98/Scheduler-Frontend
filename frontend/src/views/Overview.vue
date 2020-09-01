<template>
  <div class="main">
    <SemesterCard v-for="semester in semesters" :key="semester.id" :semester="semester"></SemesterCard>
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
import SemesterCard from "../components/SemesterCard";
export default {
  name: "Overview",
  components: {
    SemesterCard,
  },
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
  },
  created() {},
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
</style>
