<template>
  <div class="programs">
    <div class="program">
      <div class="headings">
        <h3 class="college">
          COLLEGE :
          <span>Herbert Wertheim College of Engineering</span>
        </h3>
        <h3 class="major">
          MAJOR :
          <span>Computer Science and Engineering</span>
        </h3>
      </div>
      <div class="category">
        <h3 class="category-title">Major Courses (39)</h3>
        <ul>
          <li>COP 3502 Prog. Fundamentals 1 (mac23111)...................................3</li>
          <li>COP 3503 Prog. Fundamentals 2 (mac2311,cop3502).....................3</li>
          <li>COT 3100 App. of Discrete Structures (mac2311,cop35031 ...........3</li>
          <li>COP 3530 Data Struct & Algorithms (cop3503, cot3100, cal2) .......4</li>
          <li>CDA3101 Intro Comp Organization (mac2311, cop3503, cot3100).3</li>
        </ul>
      </div>
      <div class="category">
        <h3 class="category-title">Major Courses (39)</h3>
        <ul>
          <li>COP 3502 Prog. Fundamentals 1 (mac23111)...................................3</li>
          <li>COP 3503 Prog. Fundamentals 2 (mac2311,cop3502).....................3</li>
          <li>COT 3100 App. of Discrete Structures (mac2311,cop35031 ...........3</li>
          <li>COP 3530 Data Struct & Algorithms (cop3503, cot3100, cal2) .......4</li>
          <li>CDA3101 Intro Comp Organization (mac2311, cop3503, cot3100).3</li>
        </ul>
      </div>
      <div class="category">
        <h3 class="category-title">Major Courses (39)</h3>
        <ul>
          <li>COP 3502 Prog. Fundamentals 1 (mac23111)...................................3</li>
          <li>COP 3503 Prog. Fundamentals 2 (mac2311,cop3502).....................3</li>
          <li>COT 3100 App. of Discrete Structures (mac2311,cop35031 ...........3</li>
          <li>COP 3530 Data Struct & Algorithms (cop3503, cot3100, cal2) .......4</li>
          <li>CDA3101 Intro Comp Organization (mac2311, cop3503, cot3100).3</li>
        </ul>
      </div>
      <div class="category">
        <h3 class="category-title">Major Courses (39)</h3>
        <ul>
          <li>COP 3502 Prog. Fundamentals 1 (mac23111)...................................3</li>
          <li>COP 3503 Prog. Fundamentals 2 (mac2311,cop3502).....................3</li>
          <li>COT 3100 App. of Discrete Structures (mac2311,cop35031 ...........3</li>
          <li>COP 3530 Data Struct & Algorithms (cop3503, cot3100, cal2) .......4</li>
          <li>CDA3101 Intro Comp Organization (mac2311, cop3503, cot3100).3</li>
        </ul>
      </div>
      <div class="category">
        <h3 class="category-title">Major Courses (39)</h3>
        <ul>
          <li>COP 3502 Prog. Fundamentals 1 (mac23111)...................................3</li>
          <li>COP 3503 Prog. Fundamentals 2 (mac2311,cop3502).....................3</li>
          <li>COT 3100 App. of Discrete Structures (mac2311,cop35031 ...........3</li>
          <li>COP 3530 Data Struct & Algorithms (cop3503, cot3100, cal2) .......4</li>
          <li>CDA3101 Intro Comp Organization (mac2311, cop3503, cot3100).3</li>
        </ul>
      </div>
    </div>
    <div class="program">
      <div class="headings">
        <h3 class="college">
          COLLEGE :
          <span>Warrington College of Business</span>
        </h3>
        <h3 class="major">
          MINOR :
          <span>Entrepreneurship</span>
        </h3>
      </div>
      <div class="category">
        <h3 class="category-title">Required Courses (39)</h3>
        <ul>
          <li>COP 3502 Prog. Fundamentals 1 (mac23111)...................................3</li>
          <li>COP 3503 Prog. Fundamentals 2 (mac2311,cop3502).....................3</li>
          <li>COT 3100 App. of Discrete Structures (mac2311,cop35031 ...........3</li>
          <li>COP 3530 Data Struct & Algorithms (cop3503, cot3100, cal2) .......4</li>
          <li>CDA3101 Intro Comp Organization (mac2311, cop3503, cot3100).3</li>
        </ul>
      </div>

      <div class="category">
        <h3 class="category-title">Major Courses (39)</h3>
        <ul>
          <li>COP 3502 Prog. Fundamentals 1 (mac23111)...................................3</li>
          <li>COP 3503 Prog. Fundamentals 2 (mac2311,cop3502).....................3</li>
          <li>COT 3100 App. of Discrete Structures (mac2311,cop35031 ...........3</li>
          <li>COP 3530 Data Struct & Algorithms (cop3503, cot3100, cal2) .......4</li>
          <li>CDA3101 Intro Comp Organization (mac2311, cop3503, cot3100).3</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Program",
};
</script>

<style scoped>
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
