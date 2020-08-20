<template>
  <div id="app">
    <Navbar />
    <!-- <Overview /> -->
    <SemesterForm />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import Overview from "./components/Overview.vue";
import SemesterForm from "./components/SemesterForm.vue";

export default {
  name: "App",
  components: {
    Navbar,
    // Overview,
    SemesterForm,
  },
};
</script>

<style>
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  line-height: 1.4;
  font-size: 14px;
}
body {
  background-color: whitesmoke;
}
* {
  margin: 0;
  padding: 0;
}
</style>
