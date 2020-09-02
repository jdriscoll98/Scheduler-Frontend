<template>
  <div class="program">
    <div class="headings">
      <h3 class="college">{{ programGroup.label }}</h3>
    </div>
    <div
      @click="toggleCollapse($event)"
      v-for="category in programGroup.categories"
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
            <th class="desktop-only">Name</th>
            <th class="desktop-only">Credits Required</th>
            <th class="desktop-only">Credits Taken or In Progress</th>
            <th>Status</th>
            <th class="desktop-only">Description</th>
          </tr>
          <tr class="tooltip" v-for="course in category.courses" :key="course.code">
            <td>{{ course.code }}</td>
            <td class="desktop-only">{{ course.name }}</td>
            <td class="desktop-only">{{ course.credits_required }}</td>
            <td class="desktop-only">{{ course.credits }}</td>
            <td class="met" v-if="course.passed || course.inProgress">MET</td>
            <td class="not-met" v-else>NOT MET</td>
            <td class="desktop-only" v-if="course.description">{{ course.description }}</td>
            <td class="desktop-only" v-else>N/A</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Program",
  props: {
    programGroup: Object,
  },
  methods: {
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

<style>
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
  padding: 10px;
  box-shadow: 0 5px 5px #888888;
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
  font-size: 1.2rem;
}

.category-content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-out;
  font-size: 1rem;
}

.college,
.major {
  font-size: 1.4rem;
  margin: 0 0 10px 0;
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
@media only screen and (max-width: 415px) {
  .desktop-only {
    display: none;
  }
  .college {
    font-size: 16px;
  }
  .category-section {
    padding: 2px;
    width: 100%;
  }
  .category-title {
    font-size: 16px;
    padding: 20px;
    bottom: 0;
  }
  .progress-ring {
    display: none;
  }
  .arrow {
    display: none;
  }
}
</style>