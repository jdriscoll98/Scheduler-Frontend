<template>
  <div class="main">
    <Program v-for="program in programs" :key="program.label" :programGroup="program"></Program>

    <div class="empty" v-if="programs.length == 0">
      <h3>No Programs Available</h3>
      <h6>
        Upload one
        <a @click="$router.push('/upload')" href="#">here</a>
      </h6>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Program from "../components/Program.vue";
export default {
  name: "ProgramView",
  components: {
    Program,
  },
  computed: {
    programs: function () {
      return this.$store.state.programs;
    },
  },
  mounted() {
    var categories = document.getElementsByClassName("category-section");
    this.programs.forEach((program) => {
      program.categories.forEach((category) => {
        categories.forEach((currentCategory) => {
          let currentCategoryName = currentCategory.getElementsByClassName(
            "category-title"
          )[0].innerHTML;
          if (category.name === currentCategoryName) {
            let offset =
              138.16 - (this.getPercentComplete(category) / 100) * 138.16;
            let circle = currentCategory.getElementsByClassName(
              "progress-ring__circle"
            )[0];
            circle.style.strokeDashoffset = offset;
          }
        });
      });
    });
  },
  methods: {
    ...mapActions(["getSemesters", "getPrograms"]),

    getPercentComplete(category) {
      let credits_required = 0,
        credits_towards = 0;

      category.courses.forEach((course) => {
        credits_required += course.credits_required;
        credits_towards += course.credits;
      });
      return Math.min((credits_towards / credits_required) * 100, 100);
    },
    toggleCollapse: function (e) {
      let target;
      if (e.target.tagName === "DIV") {
        target = e.target.getElementsByClassName("category-content")[0];
      } else {
        target = e.target.nextElementSibling.nextElementSibling;
      }
      if (target.style.maxHeight) {
        target.style.maxHeight = null;
      } else {
        target.style.maxHeight = target.scrollHeight + "px";
      }
    },
  },
};
</script>

<style scoped>
</style>
