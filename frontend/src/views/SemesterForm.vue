<template>
  <div class="main">
    <div class="courses">
      <h1 class="courses-header">Remaining Courses</h1>
      <div v-for="category in categories" :key="category.name" class="course-catgegories">
        <div class="course-category">
          <h3 class="category-heading">{{ category.name }}</h3>
          <ul>
            <div v-for="course in category.courses" :key="course.code" class="course-list">
              <li>
                <div
                  v-on:dragstart="handleDragStart($event, course, category)"
                  @dragend="handleDragEnd($event)"
                  id="drag1"
                  draggable="true"
                  class="course"
                >
                  <div class="course-code">{{ course.code }}</div>
                  <div class="course-name">{{ course.name }}</div>
                  <div class="course-credits">{{ course.credits }} credits</div>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div class="empty" v-if="categories.length == 0">
        <h3>No Program Available</h3>
        <h5>
          Upload one
          <a @click="$router.push('/upload')" href="#">here</a>
        </h5>
      </div>
    </div>
    <div class="semester-builder">
      <h1 class="semester-header">Semester {{ semester.number }}</h1>
      <button class="save-button">Save</button>
      <div class="semester-term">
        <label class="term-label" for="term">Term:</label>
        <select id="term" class="semester-select">
          <option selected>{{ semester.term}}</option>
          <option>Fall 2020</option>
          <option>Spring 2021</option>
          <option>Summer 2021</option>
        </select>
      </div>
      <div class="semester-list">
        <ol id="list">
          <div v-for="course in addedCourses" :key="course.code" class="added-classes">
            <li>
              <div id="drag1" draggable="true" class="course">
                <div class="course-code">{{ course.code }}</div>
                <div class="course-name">{{ course.name }}</div>
                <div class="course-credits">{{ course.credits }} credits</div>
              </div>
              <button id="delete-button" class="delete-btn">
                <img class="delete" src="../assets/images/times-solid.svg" />
              </button>
            </li>
          </div>
        </ol>
        <div
          class="drag-header box"
          @drop="handleDrop($event)"
          @dragover.prevent
          @dragenter.prevent
          @dragEnter="handleDragEnter($event)"
          @dragLeave="handleDragLeave($event)"
          id="list"
        >Drag Courses Here to Add</div>
      </div>
      <div class="notes">
        <h4>Notes</h4>
        <textarea class="notes-input" v-model="semester.notes"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SemesterForm",
  data: function () {
    return {
      semester: {
        number: 1,
        term: "Spring 2021",
        notes: "Example Notes",
      },
      dragSrcEl: null,
      dragCat: null,
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
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
          ],
        },
        {
          name: "Computer Science - Interdisciplnary Electives (14 Credits)",
          courses: [
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
          ],
        },
        {
          name: "Computer Science - Technical Electives (15 Credits)",
          courses: [
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503571,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
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
              name: "Elective",
              code: "",
              credits: 3,
              group: 502147,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502147,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502147,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502147,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502147,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502147,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502147,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502147,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502147,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502147,
            },
          ],
        },
        {
          name: "Composition (6 Credits)",
          courses: [
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503650,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503650,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503650,
            },
          ],
        },
        {
          name: "Humanities (6 Credits)",
          courses: [
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503650,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503650,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503650,
            },
          ],
        },
        {
          name: "Social & Behavioral Science Courses (6 Credits)",
          courses: [
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503650,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 503650,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
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
              name: "Elective",
              code: "",
              credits: 3,
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
              name: "Elective",
              code: "",
              credits: 3,
              group: 502146,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502146,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502146,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502146,
            },
          ],
        },
        {
          name: "Summer Enrollment",
          courses: [
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502149,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502149,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502149,
            },
            {
              name: "Elective",
              code: "",
              credits: 3,
              group: 502149,
            },
          ],
        },
      ],
      addedCourses: [],
    };
  },
  computed: {
    courseList() {
      return this.courses;
    },
  },
  methods: {
    handleDragStart: function (event, course, category) {
      event.target.style.opacity = "0.4";
      this.dragSrcEl = course;
      console.log(category);
      this.dragCat = category;

      event.dataTransfer.effectAllowed = "copy";
      event.dataTransfer.setData("text/html", course.innerHTML);
    },
    handleDragOver: function (e) {
      if (e.preventDefault) {
        e.preventDefault();
      }

      return false;
    },
    handleDrop: function (e) {
      if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }
      this.addedCourses.push(this.dragSrcEl);
      this.dragCat.courses.splice(
        this.dragCat.courses.findIndex((c) => c.code === this.dragSrcEl.code),
        1
      );
      return false;
    },
    handleDragEnd: function (e) {
      e.target.style.opacity = "1";
      let items = document.querySelectorAll(".box");

      items.forEach(function (item) {
        item.classList.remove("over");
      });
    },
    handleDragEnter: function (e) {
      e.target.classList.add("over");
    },
    handleDragLeave: function (e) {
      e.target.classList.remove("over");
    },
  },
};
</script>

<style scoped>
.empty {
  font-size: 20px;
  margin: 20px 0 0 0;
}
.over {
  border: 3px dotted #666;
}
.save-button {
  width: 75px;
  height: 40px;
  background-color: #e0812e;
  color: white;
  font-size: 20px;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  transition: scale 0.3s ease-in-out;
}
.save-button:hover {
  transform: scale(1.1);
}

.drag-header {
  background-color: #285797;
  color: white;
  border-radius: 20px;
  padding: 10px;
  width: 250px;
  margin: auto;
}
.delete-btn {
  height: 25px;
  width: 25px;
  position: relative;
  left: 350px;
  bottom: 35px;
  border-radius: 12px;
  background-color: red;
  border: none;
  outline: none;
  cursor: pointer;
  display: none;
}
.delete {
  width: 12px;
  height: 12px;
  position: absolute;
  top: 6px;
  right: 6px;
}
.notes-input {
  resize: none;
  width: 99%;
  height: 100%;
}
.notes {
  position: absolute;
  top: 75%;
  left: 0;
  padding: 10px 0 0 10px;
  width: 99%;
  height: 150px;
  text-align: left;
  border-top: 1px solid black;
}
.semester-list {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 150px;
  left: 50px;
}

.term-label {
  font-size: 20px;
  font-weight: 600;
}
.semester-header {
  background-color: #285797;
  color: white;
  text-align: left;
  padding: 10px;
}

.semester-select {
  height: 30px;
  font-size: 20px;
  font-weight: 500;
}

.semester-term {
  position: relative;
  float: left;
  margin: 10px;
}
.semester-builder {
  height: 80vh;
  width: 65vw;
  border: 2px solid black;
  position: relative;
  float: right;
  margin: 100px 3vw 0 0;
}
.courses {
  height: 80vh;
  width: 25vw;
  border: 2px solid black;
  position: relative;
  overflow-y: scroll;
  float: left;
  margin: 100px 0 0 3vw;
}

.course-code,
.course-name,
.course-credits {
  display: inline-block;
  margin: 10px;
}
.course {
  background-color: #e0812e;
  color: white;
  font-weight: 600;
  width: 90%;
  margin: 5px auto 5px auto;
  border-radius: 50px;
  cursor: move;
}
.category-heading {
  text-align: left;
  font-size: 18px;
  font-weight: 800;
  padding: 10px;
  text-decoration: underline;
}

.courses-header {
  background-color: #285797;
  color: white;
  font-size: 18px;
  font-weight: 500;
}
</style>
