<template>
  <div class="semester-form">
    <div class="courses">
      <h1 class="courses-header">Remaining Courses</h1>
      <div class="course-category">
        <h3 class="category-heading">Major Courses (39)</h3>
        <ul>
          <div v-for="course in courseList" :key="course.code" class="course-list">
            <li>
              <div
                v-on:dragstart="handleDragStart($event, course)"
                @dragstart="handleDragStart($event, course)"
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
    <div class="semester-builder">
      <h1 class="semester-header">Semester 3</h1>
      <button class="save-button">Save</button>
      <div class="semester-term">
        <label class="term-label" for="term">Term:</label>
        <select id="term" class="semester-select">
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
        <textarea class="notes-input"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SemesterForm",
  data: function () {
    return {
      dragSrcEl: null,
      courses: [
        {
          code: "COP3503",
          name: "Prog. Fundamentals 2",
          credits: 3,
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
    handleDragStart: function (event, course) {
      event.target.style.opacity = "0.4";
      this.dragSrcEl = course;

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
      this.courses.splice(
        this.courses.findIndex((c) => c.code === this.dragSrcEl.code),
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
  height: 150px;
  width: 99%;
}
.notes {
  position: absolute;
  top: 75%;
  left: 0;
  padding: 10px 0 0 10px;
  width: 99%;
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
  position: absolute;
  top: 75px;
  left: 10px;
}
.semester-builder {
  height: 80vh;
  width: 75vw;
  border: 2px solid black;
  position: absolute;
  top: 135px;
  left: 21vw;
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
.courses {
  height: 80vh;
  width: 20vw;
  border: 2px solid black;
  position: absolute;
  top: 135px;
  left: 5px;
  overflow-y: scroll;
}
.courses-header {
  background-color: #285797;
  color: white;
  font-size: 18px;
  font-weight: 500;
}
</style>
