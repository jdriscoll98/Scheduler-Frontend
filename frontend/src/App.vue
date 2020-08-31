<template>
  <div id="app">
    <Navbar />
    <router-view />
    <div class="footer">
      <p class="small-heading">
        Have questions?
        <a href="http://one.uf.edu" style="text-decoration:none;">Contact Registrar</a>
      </p>
      <hr style="height: 1px; opacity: .3" />
      <div class="categories">
        <div class="category">
          <h3 class="category-heading">Resources</h3>
          <h4 class="link">
            <a>ONE.UF</a>
          </h4>
          <h4 class="link">
            <a>WEBMAIL</a>
          </h4>
          <h4 class="link">
            <a>MYUFL</a>
          </h4>
          <h4 class="link">
            <a>E-LEARNING</a>
          </h4>
          <h4 class="link">
            <a>DIRECTORY</a>
          </h4>
        </div>
        <div class="category">
          <h3 class="category-heading">Resources</h3>
          <h4 class="link">
            <a>ONE.UF</a>
          </h4>
          <h4 class="link">
            <a>WEBMAIL</a>
          </h4>
          <h4 class="link">
            <a>MYUFL</a>
          </h4>
          <h4 class="link">
            <a>E-LEARNING</a>
          </h4>
          <h4 class="link">
            <a>DIRECTORY</a>
          </h4>
        </div>
        <div class="category">
          <h3 class="category-heading">Resources</h3>
          <h4 class="link">
            <a>ONE.UF</a>
          </h4>
          <h4 class="link">
            <a>WEBMAIL</a>
          </h4>
          <h4 class="link">
            <a>MYUFL</a>
          </h4>
          <h4 class="link">
            <a>E-LEARNING</a>
          </h4>
          <h4 class="link">
            <a>DIRECTORY</a>
          </h4>
        </div>
        <div class="contact">
          <div class="uf-logo">
            <img style="width: 200px;" src="./assets/images/uflogo.png" />
          </div>
          <div class="social">
            <a class="social-btn">
              <img class="social-img" src="./assets/images/facebook.png" />
            </a>
            <a class="social-btn">
              <img class="social-img" src="./assets/images/twitter.png" />
            </a>
            <a class="social-btn">
              <img class="social-img" src="./assets/images/instagram.png" />
            </a>
            <a class="social-btn">
              <img class="social-img" src="./assets/images/youtube.png" />
            </a>
          </div>
          <div class="address">
            <p>University of Florida</p>
            <p>Gainesville, FL 32611</p>
            <p>(352) 392-3261</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
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
.footer {
  display: inline-block;
  position: relative;
  width: 100%;
}
.uf-logo {
  margin: 10px 0 10px 0;
}
.small-heading {
  margin: 20px 0 20px 0;
}
.link,
.category-heading {
  margin: 10px;
  font-weight: 400;
  text-transform: uppercase;
}

.link {
  color: #285797;
}
.category,
.contact {
  text-align: left;
  display: inline-block;
  margin: 0 40px 0 40px;
}
.categories {
  width: 50vw;
  margin: auto;
}
.social-btn {
  border: 2px solid #e0812e;
  border-radius: 50%;
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin: 5px;
}
.social-img {
  margin: auto;
  display: inline-block;
  vertical-align: middle;
  height: 50%;
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
