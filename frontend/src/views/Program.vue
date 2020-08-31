<template>
  <div class="main">
    <div v-for="program in programs" :key="program.id" class="programs">
      <div class="program">
        <div class="headings">
          <h3 class="college">{{ program.label }}</h3>
        </div>
        <div
          @click="toggleCollapse($event)"
          v-for="category in program.categories"
          :key="category.name"
          class="category-section"
        >
          <svg class="progress-ring" height="60" width="60">
            <circle
              class="progress-ring__circle"
              stroke="#285797"
              stroke-width="4"
              fill="transparent"
              r="22"
              cx="30"
              cy="30"
            />
          </svg>
          <h3 class="category-title">{{category.name }}</h3>
          <i class="arrow down"></i>
          <div class="category-content">
            <table>
              <tr>
                <td v-if="category.description" colspan="5">{{ category.description }}</td>
              </tr>
              <tr>
                <th>Class</th>
                <th>Name</th>
                <th>Credits Required</th>
                <th>Credits Taken or In Progress</th>
                <th>Status</th>
                <th>Description</th>
              </tr>
              <tr class="tooltip" v-for="course in category.courses" :key="course.code">
                <td>{{ course.code }}</td>
                <td>{{ course.name }}</td>
                <td>{{ course.credits_required }}</td>
                <td>{{ course.credits }}</td>
                <td class="met" v-if="course.passed || course.inProgress">MET</td>
                <td class="not-met" v-else>NOT MET</td>
                <td v-if="course.description">{{ course.description }}</td>
                <td v-else>N/A</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
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

export default {
  name: "Program",
  computed: {
    programs: function () {
      return this.$store.state.programs;
    },
  },
  created() {
    if (!(this.programs && this.programs.length > 0)) {
      this.getPrograms();
    }
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
.arrow {
  border: solid black;
  border-width: 0 5px 5px 0;
  padding: 5px;
  margin: 25px;
  float: right;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.progress-ring__circle {
  stroke-dasharray: 138.16 138.16;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 0.35s;
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
.inner-text {
  padding-left: 10px;
}
.progress-bar {
  background-color: lightgreen;
}
.overall-progress {
  height: 30px;
  font-size: 25vw;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  border: 1px solid black;
  width: 25%;
  margin: auto;
  padding-bottom: 3px;
  white-space: nowrap;
}
.visible {
  background-color: white;
}

.met {
  background-color: lightgreen;
  color: white;
  font-weight: 700;
}
.not-met {
  background-color: lightcoral;
  color: white;
  font-weight: 700;
}
.course-label,
.course-value {
  display: inline-block;
}

.empty {
  position: relative;
  top: 135px;
  font-size: 24px;
}

.program {
  width: 80vw;
  position: relative;
  top: 100px;
  background-color: white;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 10px;
  padding: 20px;
  box-shadow: 0 5px 25px #888888;
}
.category-section {
  text-align: left;
  position: relative;
  cursor: pointer;
  margin: 20px;
  padding: 10px;
  height: 75px;
  box-shadow: 0 5px 15px #888888;
  width: 80%;
  font-size: 1.5rem;
  display: inline-block;
  border-radius: 5px;
}
.category-title {
  margin-left: 20px;
  display: inline-block;
  position: relative;
  bottom: 15px;
  font-size: 1.5rem;
}

.category-content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-out;
  font-size: 1rem;
  margin-top: 50px;
}

.college,
.major {
  font-size: 24px;
  font-weight: 800;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
