<template>
  <div class="courses">
    <h1 class="courses-header">Remaining Courses</h1>
    <div class="course-category">
      <h3 class="category-heading">Major Courses (39)</h3>
      <ul>
        <li>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="course-category">
      <h3 class="category-heading">Technical Electives (15)</h3>
      <ul>
        <li>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="course-category">
      <h3 class="category-heading">Mathematics (18)</h3>
      <ul>
        <li>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
          <div class="course">
            <div class="course-code">COP3502</div>
            <div class="course-name">Prog. Fundamentals 1</div>
            <div class="course-credits">3 credits</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RemainingCourses",
};
</script>

<style scoped>
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
