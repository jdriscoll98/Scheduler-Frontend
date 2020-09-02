<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  created() {
    if (this.$store.state.loggedIn) {
      if (
        !(this.$store.state.semesters && this.$store.state.semesters.length > 0)
      ) {
        this.getSemesters();
      }
      if (
        !(this.$store.state.programs && this.$store.state.programs.length > 0)
      ) {
        this.getPrograms();
      }
    }
  },
  methods: {
    ...mapActions(["getSemesters", "getPrograms"]),
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
  width: 100vw;
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
}
.main {
  display: block;
  height: 100%;
  padding-bottom: 200px;
}

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #ff0000;
}
</style>
