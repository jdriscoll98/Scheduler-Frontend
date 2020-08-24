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
                <th>Class</th>
                <th>Name</th>
                <th>Credits Required</th>
                <th>Credits Taken or In Progress</th>
                <th>Status</th>
              </tr>
              <tr v-for="course in category.courses" :key="course.code">
                <td>{{ course.code }}</td>
                <td>{{ course.name }}</td>
                <td>{{ course.credits_required }}</td>
                <td>{{ course.credits_towards }}</td>
                <td class="met" v-if="course.passed || course.inProgress">MET</td>
                <td class="not-met" v-else>NOT MET</td>
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
      programs: [
        {
          label:
            "BACHELOR OF SCIENCE WITH A MAJOR IN COMPUTER SCIENCE  - COLLEGE OF ENGINEERING",
          overall_progress: 70.0,
          met_groups: 7,
          num_of_requirements: 10,
          categories: [
            {
              name: "Critical Tracking Courses",
              courses: [
                {
                  name: "CHM2045 ",
                  code: "CHM2045",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: false,
                  group: 503572,
                },
                {
                  name: "MAC2311 ",
                  code: "MAC2311",
                  credits_required: "3.00",
                  credits_towards: "4.00",
                  passed: true,
                  inProgress: false,
                  group: 503572,
                },
                {
                  name: "MAC2312 ",
                  code: "MAC2312",
                  credits_required: "3.00",
                  credits_towards: "4.00",
                  passed: true,
                  inProgress: false,
                  group: 503572,
                },
                {
                  name: "MAC2313 ",
                  code: "MAC2313",
                  credits_required: "3.00",
                  credits_towards: "4.00",
                  passed: true,
                  inProgress: false,
                  group: 503572,
                },
                {
                  name: "COP3502 ",
                  code: "COP3502",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: false,
                  group: 503572,
                },
                {
                  name: "PHY2048 ",
                  code: "PHY2048",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: false,
                  group: 503572,
                },
                {
                  name: "PHY2049 ",
                  code: "PHY2049",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: false,
                  group: 503572,
                },
              ],
              completed: 7,
              percent_complete: 100.0,
            },
            {
              name: "Computer Science - Core",
              courses: [
                {
                  name: "COP3503 ",
                  code: "COP3503",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "CDA 3101",
                  code: "CDA 310",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: true,
                  group: 503571,
                },
                {
                  name: "COT3100 ",
                  code: "COT3100",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "COP3530 ",
                  code: "COP3530",
                  credits_required: "4.00",
                  credits_towards: "4.00",
                  passed: true,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "COT4501 ",
                  code: "COT4501",
                  credits_required: "3.00",
                  credits_towards: "0.00",
                  passed: false,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "EEL3701C",
                  code: "EEL3701",
                  credits_required: "4.00",
                  credits_towards: "4.00",
                  passed: true,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "CIS4301 ",
                  code: "CIS4301",
                  credits_required: "3.00",
                  credits_towards: "0.00",
                  passed: false,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "COP4600 ",
                  code: "COP4600",
                  credits_required: "3.00",
                  credits_towards: "0.00",
                  passed: false,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "CEN3031 ",
                  code: "CEN3031",
                  credits_required: "3.00",
                  credits_towards: "0.00",
                  passed: false,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "CNT4007C",
                  code: "CNT4007",
                  credits_required: "4.00",
                  credits_towards: "0.00",
                  passed: false,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "CIS4914 ",
                  code: "CIS4914",
                  credits_required: "3.00",
                  credits_towards: "0.00",
                  passed: false,
                  inProgress: false,
                  group: 503571,
                },
              ],
              completed: 5,
              percent_complete: 45.45454545454545,
            },
            {
              name: "Pre-professional Labs",
              courses: [
                {
                  name: "CHM2045L",
                  code: "CHM2045",
                  credits_required: "1.00",
                  credits_towards: "1.00",
                  passed: true,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "PHY2048L",
                  code: "PHY2048",
                  credits_required: "1.00",
                  credits_towards: "1.00",
                  passed: true,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "PHY2049L",
                  code: "PHY2049",
                  credits_required: "1.00",
                  credits_towards: "0.00",
                  passed: false,
                  inProgress: false,
                  group: 503571,
                },
              ],
              completed: 2,
              percent_complete: 66.66666666666666,
            },
            {
              name: "Summary of Major Coursework",
              courses: [
                {
                  name: "ENC3246 ",
                  code: "ENC3246",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: true,
                  group: 503571,
                },
                {
                  name: "MAS3114 ",
                  code: "MAS3114",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "STA3032 ",
                  code: "STA3032",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: false,
                  group: 503571,
                },
                {
                  name: "EGS4034 ",
                  code: "EGS4034",
                  credits_required: "1.00",
                  credits_towards: "1.00",
                  passed: true,
                  inProgress: false,
                  group: 503571,
                },
              ],
              completed: 4,
              percent_complete: 100.0,
            },
            {
              name: "Computer Science - Communications (3 Credits)",
              courses: [
                {
                  name:
                    "Approved Writing or Public Speaking Courses.  – (3 Credits)",
                  code: "Elective(s)",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  group: 503571,
                  passed: true,
                },
              ],
              completed: 0,
              percent_complete: 100.0,
            },
            {
              name:
                "Computer Science - Interdisciplnary Electives (14 Credits)",
              courses: [
                {
                  name: "Option A:  3000 Level or Above",
                  code: "Elective(s)",
                  credits_required: "14.00",
                  credits_towards: "0.00",
                  group: 503571,
                  passed: false,
                },
                {
                  name: "Option B: Minor",
                  code: "Elective(s)",
                  credits_required: "14.00",
                  credits_towards: "0.00",
                  group: 503571,
                  passed: false,
                },
              ],
              completed: 0,
              percent_complete: 0.0,
            },
            {
              name: "Computer Science - Technical Electives (15 Credits)",
              courses: [
                {
                  name: "Technical Electives and Co-Op/Internship Courses",
                  code: "Elective(s)",
                  credits_required: "15.00",
                  credits_towards: "9.00",
                  group: 503571,
                  passed: false,
                },
              ],
              completed: 0,
              percent_complete: 60.0,
            },
            {
              name: "University Required Course",
              courses: [
                {
                  name: "IUF1000 ",
                  code: "IUF1000",
                  credits_required: "0.00",
                  credits_towards: "2.00",
                  passed: true,
                  inProgress: false,
                  group: 502147,
                },
              ],
              completed: 1,
              percent_complete: 100.0,
            },
            {
              name: "State General Education Requirement",
              courses: [
                {
                  name: "Composition",
                  code: "Elective(s)",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  group: 502147,
                  passed: true,
                },
                {
                  name: "Humanities",
                  code: "Elective(s)",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  group: 502147,
                  passed: true,
                },
                {
                  name: "Social and Behavioral Science",
                  code: "Elective(s)",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  group: 502147,
                  passed: true,
                },
                {
                  name: "Mathematics",
                  code: "Elective(s)",
                  credits_required: "3.00",
                  credits_towards: "4.00",
                  group: 502147,
                  passed: true,
                },
                {
                  name: "Biological and Physical Sciences",
                  code: "Elective(s)",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  group: 502147,
                  passed: true,
                },
              ],
              completed: 0,
              percent_complete: 100.0,
            },
            {
              name: "Composition (6 Credits)",
              courses: [
                {
                  name: "Composition",
                  code: "Elective(s)",
                  credits_required: "6.00",
                  credits_towards: "6.00",
                  group: 503650,
                  passed: true,
                },
              ],
              completed: 0,
              percent_complete: 100.0,
            },
            {
              name: "Humanities (6 Credits)",
              courses: [
                {
                  name: "Humanities Courses",
                  code: "Elective(s)",
                  credits_required: "6.00",
                  credits_towards: "6.00",
                  group: 503650,
                  passed: true,
                },
              ],
              completed: 0,
              percent_complete: 100.0,
            },
            {
              name: "Social & Behavioral Science Courses (6 Credits)",
              courses: [
                {
                  name: "Social Science Courses",
                  code: "Elective(s)",
                  credits_required: "6.00",
                  credits_towards: "6.00",
                  group: 503650,
                  passed: true,
                },
              ],
              completed: 0,
              percent_complete: 100.0,
            },
            {
              name: "Mathematics (6 Credits)",
              courses: [
                {
                  name: "MAC2311 ",
                  code: "MAC2311",
                  credits_required: "3.00",
                  credits_towards: "4.00",
                  passed: true,
                  inProgress: false,
                  group: 503650,
                },
                {
                  name: "MAC2312 ",
                  code: "MAC2312",
                  credits_required: "3.00",
                  credits_towards: "4.00",
                  passed: true,
                  inProgress: false,
                  group: 503650,
                },
              ],
              completed: 2,
              percent_complete: 100.0,
            },
            {
              name: "Physical/Biological Sciences (12 Credits)",
              courses: [
                {
                  name: "CHM2045 ",
                  code: "CHM2045",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: false,
                  group: 503650,
                },
                {
                  name: "CHM2045l - General Chemistry 1 Laboratory",
                  code: "Elective(s)",
                  credits_required: "1.00",
                  credits_towards: "1.00",
                  group: 503650,
                  passed: true,
                },
                {
                  name: "PHY2048 ",
                  code: "PHY2048",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: false,
                  group: 503650,
                },
                {
                  name: "PHY2048L",
                  code: "PHY2048",
                  credits_required: "1.00",
                  credits_towards: "1.00",
                  passed: true,
                  inProgress: false,
                  group: 503650,
                },
                {
                  name: "PHY2049 ",
                  code: "PHY2049",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  passed: true,
                  inProgress: false,
                  group: 503650,
                },
                {
                  name: "PHY2049L",
                  code: "PHY2049",
                  credits_required: "1.00",
                  credits_towards: "0.00",
                  passed: false,
                  inProgress: false,
                  group: 503650,
                },
              ],
              completed: 4,
              percent_complete: 100.0,
            },
            {
              name: "International/Diversity Requirement",
              courses: [
                {
                  name: "International Focus - 3 Credits",
                  code: "Elective(s)",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  group: 502146,
                  passed: true,
                },
                {
                  name: "Diversity Focus - 3 Credits",
                  code: "Elective(s)",
                  credits_required: "3.00",
                  credits_towards: "3.00",
                  group: 502146,
                  passed: true,
                },
              ],
              completed: 0,
              percent_complete: 100.0,
            },
            {
              name: "Summer Enrollment",
              courses: [
                {
                  name: "OPTION 1: UF Summer Courses (9 Credits)",
                  code: "Elective(s)",
                  credits_required: "9.00",
                  credits_towards: "48.00",
                  group: 502149,
                  passed: true,
                },
              ],
              completed: 0,
              percent_complete: 100,
            },
          ],
        },
      ],
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
