<template>
  <div class="main">
    <div>
      <div v-for="semester in semesters" :key="semester.number" class="card">
        <div class="card-header">
          <h1 class="semester-number">Semester {{ semester.number }} - {{ semester.term }}</h1>
          <button class="edit-btn">
            <img @click="$router.push('/add')" class="edit" src="../assets/images/edit-regular.svg" />
          </button>
        </div>
        <div class="card-body">
          <div class="card-table">
            <table>
              <tr>
                <th>Class</th>
                <th>Name</th>
                <th>Credits</th>
              </tr>
              <tr v-for="course in semester.courses" :key="course.code">
                <td>{{ course.code }}</td>
                <td>{{ course.name }}</td>
                <td>{{ course.credits }}</td>
              </tr>
              <tfoot>
                <tr>
                  <td colspan="2" style="text-align: right; font-weight: 800">Total:</td>
                  <td style="font-weight: 800">{{ semester.total }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-if="semesters.length == 0" class="empty">
      <h3 class="heading">No Semesters Added Yet!</h3>
    </div>
    <button @click="$router.push('add')" class="add-btn">
      <img class="add" src="../assets/images/plus-solid.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Overview",
  data: function () {
    return {
      semesters: this.$store.getters.semesters,
    };
  },
  created() {
    this.$store.dispatch("getSemesters").then(() => {
      this.semesters = this.$store.getters.semesters;
    });
  },
};
</script>

<style scoped>
.empty {
  position: relative;
  top: 135px;
}
.heading {
  font-size: 24px;
  font-weight: 800;
}
.add-btn {
  display: inline-block;
  height: 50px;
  width: 50px;
  position: relative;
  top: 150px;
  margin: 20px;
  border-radius: 30px;
  background-color: green;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.add {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.add-btn:hover {
  transform: scale(1.1);
}
.edit-btn {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  border: none;
  background-color: #285797;
  cursor: pointer;
  outline: none;
}
.edit {
  height: 30px;
  width: 30px;
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
.semester-number {
  font-size: 22px;
  text-align: left;
  margin: 0 10px 10px 10px;
  padding-top: 10px;
}
.card-header {
  border-bottom: 1px solid black;
  background-color: #285797;
  color: white;
}
.card {
  display: inline-block;
  height: 100%;
  width: 400px;
  margin: 25px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  position: relative;
  left: 0;
  top: 75px;
}
</style>
