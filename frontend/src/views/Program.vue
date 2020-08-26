<template>
  <div class="main">
    <div v-for="program in programs" :key="program.id" class="programs">
      <div class="program">
        <div class="headings">
          <h3 class="college">{{ program.label }}</h3>
        </div>
        <div class="overall-progress">
          <div :style="{ width: program.overall_progress + '%'}" class="progress-bar">
            <p
              class="inner-text"
            >{{ program.met_groups }} / {{ program.num_of_requirements }} Requirements Met</p>
          </div>
        </div>
        <div v-for="category in program.categories" :key="category.name" class="category">
          <h3
            @click="toggleCollapse($event)"
            :style="{width: category.percent_complete + '%'}"
            class="category-title"
          >{{category.name }}</h3>

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
                <td>{{ course.credits_towards }}</td>
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
export default {
  name: "Program",
  data: function () {
    return {
      programs: [],
    };
  },
  methods: {
    toggleCollapse: function (e) {
      e.target.classList.toggle("active");
      console.log(e.target);
      var content = e.target.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    },
  },
};
</script>

<style scoped>
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
  font-size: 1.5rem;
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
  width: 90vw;
  position: relative;
  top: 100px;
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 10px;
}
.category {
  text-align: left;
  position: relative;
  border: 1px solid black;
  cursor: pointer;
  margin: 10px;
  width: 90%;
}
.category-title {
  padding: 10px 0 10px 0;
  white-space: nowrap;
  background-color: lightgreen;
  color: black;
}
.category-title:hover {
  background-color: white;
}
.category-content {
  padding: 0 18px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-out;
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
