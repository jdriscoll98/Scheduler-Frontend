<template>
  <div class="nav">
    <button class="menu">
      <img class="menu-btn" src="../assets/images/menu.svg" />
    </button>
    <a href="http://ufl.edu" target="_blank">
      <img class="logo" src="../assets/images/logo-uf.svg" />
    </a>
    <h1 class="oneuf">
      <a class="link" href="http://one.uf.edu" target="_blank">ONE.UF |</a>
    </h1>
    <h2 class="label">SCHEDULER</h2>
    <div class="desktop-only user-logged-in" v-if="$store.state.loggedIn">
      <img
        @mouseenter="showDropdown"
        class="user-icon"
        src="../assets/images/user-icon.svg"
      />
      <div
        @mouseleave="hideDropdown"
        @focusout="handleFocusOut($event)"
        id="dropdown"
        class="profile-drop-down"
      >
        <div class="user">
          <img
            class="small-user-icon"
            src="../assets/images/user-icon-small.svg"
          />
          <h4 class="username">{{ $store.state.profile.username }}</h4>
        </div>
        <hr />
        <div class="logout">
          <button @click="logout" class="logout-btn">Logout</button>
        </div>
      </div>
    </div>

    <button v-else class="login-btn" @click="$router.push('/login')">
      Log in
    </button>
    <div v-if="$store.state.loggedIn" class="mobile-only">
      <button @click="logout" class="mobile-logout">Logout</button>
    </div>
    <div v-if="$store.state.loggedIn" class="subnav">
      <div class="left-nav nav-div">
        <h3
          @click="switchPage('/', 'overview')"
          id="overview"
          class="nav-item current"
        >
          OVERVIEW
        </h3>
      </div>
      <div class="left-nav nav-div">
        <h3
          @click="switchPage('/form', 'form')"
          id="form"
          class="nav-item not-current"
        >
          SEMESTER FORM
        </h3>
      </div>
      <div class="right-nav nav-div">
        <h3
          @click="switchPage('/program', 'program')"
          id="program"
          class="nav-item not-current"
        >
          DEGREE AUDIT
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    showDropdown: function(e) {
      e.target.nextElementSibling.style.display = "block";
      setTimeout(function() {
        e.target.nextElementSibling.style.opacity = 1;
      }, 20);
    },
    hideDropdown: function(e) {
      let dropdown = document.getElementById(e.target.id);
      e.target.style.opacity = 0;
      dropdown.addEventListener("transitionend", function(e) {
        if (e.target.style.display === "none") {
          e.target.style.display = "none";
        }
      });
    },
    logout: function() {
      localStorage.clear();
      window.location.href = "/login";
    },
    switchPage: function(url, id) {
      let current = document.getElementsByClassName("current")[0];
      current.classList.remove("current");
      current.classList.add("not-current");

      let new_current = document.getElementById(id);
      new_current.classList.remove("not-current");
      new_current.classList.add("current");

      this.$router.push(url);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-div {
  width: 33%;
}
.logout {
  text-align: center;
}
.logout-btn {
  background-color: transparent;
  border: none;
  color: #285797;
  font-weight: 700;
  font-size: 1.1rem;
  margin: 10px;
  cursor: pointer;
  outline: none;
}
.small-user-icon {
  display: inline-block;
  width: 20%;
  margin: 10px;
}
.username {
  display: inline-block;
  color: #285797;
  position: relative;
  bottom: 20px;
  font-size: 70%;
  margin: 0 10px 0 10px;
}
.profile-drop-down {
  display: none;
  opacity: 0;
  text-align: left;
  position: absolute;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 10px 25px #888888;
  width: 150px;
  background-color: white;
  right: 5px;
  top: 50px;
  z-index: 1;
  transition: opacity 0.3s ease-in-out;
}
.user-icon {
  position: relative;
  width: 30px;
  height: 30px;
  top: 15px;
  right: 30px;
  padding: 0;
  border: none;
  background-color: #285797;
  cursor: pointer;
  outline: none;
}
.user-icon:hover {
  transform: scale(1.5);
}
.user-logged-in {
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  height: 60px;
}

.login-btn {
  right: 0;
  color: white;
  background-color: #285797;
  border: none;
  position: absolute;
  padding: 18px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
}
.login-btn:hover {
  transform: scale(1.1);
}
.link {
  color: inherit;
  text-decoration: none;
  margin: 0 5px 0 5px;
}
.nav-item {
  padding: 20px 0 20px 0;
  font-weight: 400;
  transition: background-color 0.3s;
}
.current {
  border-bottom: 4px solid #e0812e;
}
.not-current {
  border-bottom: 4px solid #285797;
}
.nav-item:hover {
  background-color: #f1f1f1;
  border-bottom: 4px solid #e0812e;
}
.left-nav {
  display: inline-block;
  height: inherit;
  background-color: white;
  color: blue;
  font-size: 14px;
}
.right-nav {
  display: inline-block;
  height: inherit;
  background-color: white;
  color: blue;
  font-size: 14px;
}
.subnav {
  height: 60px;
  width: 100vw;
  background-color: whitesmoke;
  position: absolute;
  top: 65px;
  cursor: pointer;
  box-shadow: 0 10px 10px #888888;
}
.oneuf {
  color: white;
  position: relative;
  left: 30px;
  width: 100px;
  padding: 18px;
  font-size: 18px;
  font-weight: 500;
  float: left;
}
.label {
  color: white;
  position: relative;
  float: left;
  width: 60px;
  padding: 18px;
  font-size: 18px;
  font-weight: 500;
}

.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  position: relative;
  right: 20px;
  margin: 0 20px 0 0;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.user-icon img {
  padding: 14px;
}
.nav {
  height: 60px;
  width: 100vw;
  background-color: #285797;
  border-bottom: 4px solid #e0812e;
  font-size: 20px;
}
.menu {
  position: relative;
  float: left;
  width: 60px;
  height: 60px;
  margin: 0;
  padding: 0;
  border-radius: 30px;
  border: none;
  border-radius: 30px;
  background-color: #285797;
  cursor: pointer;
  outline: none;
}

.nav .logo {
  width: 32px;
  height: 32px;
  padding: 14px;
  position: absolute;
  left: 60px;
}
.mobile-logout {
  color: white;
  font-size: 16px;
  float: right;
  position: relative;
  top: 15px;
  right: 10px;
  height: 30px;
  background-color: #285797;
  border: none;
  outline: none;
}
.mobile-only {
  display: none;
}
@media only screen and (max-width: 415px) {
  .logo,
  .oneuf {
    display: none;
  }
  .mobile-only {
    display: block;
  }
  .nav-item {
    font-size: 4vw;
  }
  .desktop-only {
    display: none;
  }
}
</style>
