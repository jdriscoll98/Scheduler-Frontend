<template>
  <div class="main">
    <div v-for="program in programs" :key="program.id" class="programs">
      <div class="program">
        <div class="headings">
          <h3 class="college">{{ program.label }}</h3>
        </div>
        <div v-for="category in program.categories" :key="category.name" class="category">
          <h3 @click="toggleCollapse($event)" class="category-title">{{ category.name }}</h3>
          <div class="category-content">
            <table>
              <tr>
                <th>Class</th>
                <th>Name</th>
                <th>Credits</th>
              </tr>
              <tr v-for="course in category.courses" :key="course.code">
                <td>{{ course.code }}</td>
                <td>{{ course.name }}</td>
                <td>{{ course.credits }}</td>
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
          categories: [
            {
              name: "Critical Tracking Courses",
              courses: [
                {
                  name: "General Chemistry or CHM2095 ",
                  code: "CHM2045",
                  credits: "3.00",
                  group: 503572,
                },
                {
                  name: "Analyt Geom and Calc 1",
                  code: "MAC2311",
                  credits: "3.00",
                  group: 503572,
                },
                {
                  name: "Analyt Geom and Calc 2",
                  code: "MAC2312",
                  credits: "3.00",
                  group: 503572,
                },
                {
                  name: "Analyt Geom and Calc 3",
                  code: "MAC2313",
                  credits: "3.00",
                  group: 503572,
                },
                {
                  name: "Programming Fundamentals 1",
                  code: "COP3502",
                  credits: "3.00",
                  group: 503572,
                },
                {
                  name: "Physics with Calculus 1",
                  code: "PHY2048",
                  credits: "3.00",
                  group: 503572,
                },
                {
                  name: "Physics with Calculus 2",
                  code: "PHY2049",
                  credits: "3.00",
                  group: 503572,
                },
              ],
            },
            {
              name: "Computer Science - Core",
              courses: [
                {
                  name: "Programming Fundamentals 2",
                  code: "COP3503",
                  credits: "3.00",
                  group: 503571,
                },
                {
                  name: "Introduction to Computer Organization",
                  code: "CDA 310",
                  credits: "3.00",
                  group: 503571,
                },
                {
                  name: "Applications of Discrete Structures",
                  code: "COT3100",
                  credits: "3.00",
                  group: 503571,
                },
                {
                  name: "Data Structures and Algorithm",
                  code: "COP3530",
                  credits: "4.00",
                  group: 503571,
                },
                {
                  name: "Numerical Analysis",
                  code: "COT4501",
                  credits: "3.00",
                  group: 503571,
                },
                {
                  name: "Digital Logic and Computer Systems",
                  code: "EEL3701",
                  credits: "4.00",
                  group: 503571,
                },
                {
                  name: "Information and Database Systems 1",
                  code: "CIS4301",
                  credits: "3.00",
                  group: 503571,
                },
                {
                  name: "Operating Systems",
                  code: "COP4600",
                  credits: "3.00",
                  group: 503571,
                },
                {
                  name: "Introduction to Software Engineering",
                  code: "CEN3031",
                  credits: "3.00",
                  group: 503571,
                },
                {
                  name: "Computer Network Fundamentals",
                  code: "CNT4007",
                  credits: "4.00",
                  group: 503571,
                },
                {
                  name: "Senior Project or CIS4913C ",
                  code: "CIS4914",
                  credits: "3.00",
                  group: 503571,
                },
              ],
            },
            {
              name: "Pre-professional Labs",
              courses: [
                {
                  name: "General Chemistry 1 Lab",
                  code: "CHM2045",
                  credits: "1.00",
                  group: 503571,
                },
                {
                  name: "Physics 1 Lab",
                  code: "PHY2048",
                  credits: "1.00",
                  group: 503571,
                },
                {
                  name: "Physics 2 Lab",
                  code: "PHY2049",
                  credits: "1.00",
                  group: 503571,
                },
              ],
            },
            {
              name: "Summary of Major Coursework",
              courses: [
                {
                  name: "Tech Writing",
                  code: "ENC3246",
                  credits: "3.00",
                  group: 503571,
                },
                {
                  name: "Linear Algebra",
                  code: "MAS3114",
                  credits: "3.00",
                  group: 503571,
                },
                {
                  name: "Engineering Statistics",
                  code: "STA3032",
                  credits: "3.00",
                  group: 503571,
                },
                {
                  name: "Professional Ethics",
                  code: "EGS4034",
                  credits: "1.00",
                  group: 503571,
                },
              ],
            },
            {
              name: "Computer Science - Communications (3 Credits)",
              courses: [
                {
                  name:
                    "Approved Writing or Public Speaking Courses.  – (3 Credits)",
                  code: "Elective(s)",
                  credits: "3.00",
                  group: 503571,
                },
              ],
            },
            {
              name:
                "Computer Science - Interdisciplnary Electives (14 Credits)",
              courses: [
                {
                  name: "Option A:  3000 Level or Above",
                  code: "Elective(s)",
                  credits: "14.00",
                  group: 503571,
                },
                {
                  name: "Option B: Minor",
                  code: "Elective(s)",
                  credits: "14.00",
                  group: 503571,
                },
              ],
            },
            {
              name: "Computer Science - Technical Electives (15 Credits)",
              courses: [
                {
                  name: "Technical Electives and Co-Op/Internship Courses",
                  code: "Elective(s)",
                  credits: "15.00",
                  group: 503571,
                },
              ],
            },
            {
              name: "University Required Course",
              courses: [
                {
                  name: "What is the Good Life",
                  code: "IUF1000",
                  credits: "0.00",
                  group: 502147,
                },
              ],
            },
            {
              name: "State General Education Requirement",
              courses: [
                {
                  name: "Composition",
                  code: "Elective(s)",
                  credits: "3.00",
                  group: 502147,
                },
                {
                  name: "Humanities",
                  code: "Elective(s)",
                  credits: "3.00",
                  group: 502147,
                },
                {
                  name: "Social and Behavioral Science",
                  code: "Elective(s)",
                  credits: "3.00",
                  group: 502147,
                },
                {
                  name: "Mathematics",
                  code: "Elective(s)",
                  credits: "3.00",
                  group: 502147,
                },
                {
                  name: "Biological and Physical Sciences",
                  code: "Elective(s)",
                  credits: "3.00",
                  group: 502147,
                },
              ],
            },
            {
              name: "Composition (6 Credits)",
              courses: [
                {
                  name: "Composition",
                  code: "Elective(s)",
                  credits: "6.00",
                  group: 503650,
                },
              ],
            },
            {
              name: "Humanities (6 Credits)",
              courses: [
                {
                  name: "Humanities Courses",
                  code: "Elective(s)",
                  credits: "6.00",
                  group: 503650,
                },
              ],
            },
            {
              name: "Social & Behavioral Science Courses (6 Credits)",
              courses: [
                {
                  name: "Social Science Courses",
                  code: "Elective(s)",
                  credits: "6.00",
                  group: 503650,
                },
              ],
            },
            {
              name: "Mathematics (6 Credits)",
              courses: [
                {
                  name: "Analytical Geometry ",
                  code: "MAC2311",
                  credits: "3.00",
                  group: 503650,
                },
                {
                  name: "Calculus 2",
                  code: "MAC2312",
                  credits: "3.00",
                  group: 503650,
                },
              ],
            },
            {
              name: "Physical/Biological Sciences (12 Credits)",
              courses: [
                {
                  name: "General Chemistry 1",
                  code: "CHM2045",
                  credits: "3.00",
                  group: 503650,
                },
                {
                  name: "CHM2045l - General Chemistry 1 Laboratory",
                  code: "Elective(s)",
                  credits: "1.00",
                  group: 503650,
                },
                {
                  name: "Physics with Calculus 1",
                  code: "PHY2048",
                  credits: "3.00",
                  group: 503650,
                },
                {
                  name: "Physics with Calculus 1 Lab",
                  code: "PHY2048",
                  credits: "1.00",
                  group: 503650,
                },
                {
                  name: "Physics with Calculus 2",
                  code: "PHY2049",
                  credits: "3.00",
                  group: 503650,
                },
                {
                  name: "Physics with Calculus 2 Lab",
                  code: "PHY2049",
                  credits: "1.00",
                  group: 503650,
                },
              ],
            },
            {
              name: "International/Diversity Requirement",
              courses: [
                {
                  name: "International Focus - 3 Credits",
                  code: "Elective(s)",
                  credits: "3.00",
                  group: 502146,
                },
                {
                  name: "Diversity Focus - 3 Credits",
                  code: "Elective(s)",
                  credits: "3.00",
                  group: 502146,
                },
              ],
            },
            {
              name: "Summer Enrollment",
              courses: [
                {
                  name: "OPTION 1: UF Summer Courses (9 Credits)",
                  code: "Elective(s)",
                  credits: "9.00",
                  group: 502149,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleCollapse: function (e) {
      e.target.classList.toggle("active");
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
  padding: 10px;
}
.active,
.category-title:hover {
  background-color: #ccc;
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
