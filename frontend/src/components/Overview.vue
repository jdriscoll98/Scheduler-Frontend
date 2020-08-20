<template>
  <div class="overview">
    <div class="card">
      <div class="card-header">
        <h1 class="semester-number">Semeseter 1 - Fall 2020</h1>
      </div>
      <div class="card-body">
        <div class="card-table">
          <table>
            <tr>
              <th>Class</th>
              <th>Name</th>
              <th>Credits</th>
            </tr>
            <tr>
              <td>ACG2021</td>
              <td>Introduction to Financial Accounting</td>
              <td>4</td>
            </tr>
            <tr>
              <td>CDA3101</td>
              <td>Introduction to Computer Organization</td>
              <td>3</td>
            </tr>
            <tr>
              <td>ENC3246</td>
              <td>Professional Communcation for Engineers</td>
              <td>3</td>
            </tr>
            <tr>
              <td>ENT3503</td>
              <td>Introduction to Social Entrepreneurship</td>
              <td>2</td>
            </tr>
            <tfoot>
              <tr>
                <td colspan="2" style="text-align: right; font-weight: 800">Total:</td>
                <td style="font-weight: 800">12</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
};
</script>

<style scoped>
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
.semester-number {
  font-size: 22px;
  text-align: left;
  margin: 10px;
}
.card-header {
  border-bottom: 1px solid black;
}
.card {
  display: inline-block;
  height: 325px;
  width: 400px;
  margin: 25px;
  border: 2px solid #285797;
  border-radius: 5px;
  background-color: white;
  position: relative;
  left: 0;
  top: 75px;
}
</style>
