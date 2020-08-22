<template>
  <div class="main">
    <div v-for="program in programs" :key="program.id" class="programs">
      <div class="program">
        <div class="headings">
          <h3 class="college">
            COLLEGE :
            <span>{{ program.college }}</span>
          </h3>
          <h3 class="major">
            {{ program.major }} :
            <span>{{ program.department }}</span>
          </h3>
        </div>
        <div v-for="category in program.categories" :key="category.name" class="program-categories">
          <div class="category">
            <h3 class="category-title">Major Courses (39)</h3>
            <ul>
              <div v-for="course in category.courses" :key="course.code" class="category-course">
                <li>
                  {{ course.code}} {{ course.name }}
                  <span class="dots">.</span>
                  {{ course.credits }}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="empty" v-if="programs.length == 0">
      <h3>No Programs Available</h3>
      <h6>
        Upload one
        <a href="#">here</a>
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
};
</script>

<style scoped>
.empty {
  position: relative;
  top: 135px;
  font-size: 24px;
}
ul {
  list-style: none;
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
  display: inline-block;
  margin: 10px;
  padding: 10px;
}
.category-title {
  text-decoration: underline;
}
.college,
.major {
  font-size: 24px;
  font-weight: 800;
}
</style>
