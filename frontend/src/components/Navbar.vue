<template>
  <div class="nav">
    <button class="menu">
      <img class="menu-btn" src="../assets/images/menu.svg" />
    </button>
    <a>
      <img class="logo" src="../assets/images/logo-uf.svg" />
    </a>
    <h1 class="oneuf">ONE.UF</h1>
    <h2 class="label">| SCHEDULER</h2>
    <button class="user-icon">
      <img src="../assets/images/user-icon.svg" />
      <i class="arrow down"></i>
    </button>
    <div class="subnav">
      <div class="left-nav">
        <h3 @click="$router.push('/')" class="nav-item not-current">OVERVIEW</h3>
      </div>
      <div class="right-nav">
        <h3 @click="$router.push('/program')" class="nav-item not-current">PROGRAM</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-item {
  padding: 20px;
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
  width: 50%;
  background-color: white;
  color: blue;
  font-size: 14px;
}
.right-nav {
  display: inline-block;
  height: inherit;
  width: 50%;
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
}
.oneuf {
  color: white;
  position: absolute;
  left: 110px;
  padding: 18px;
  font-size: 18px;
  font-weight: 500;
}
.label {
  color: white;
  position: absolute;
  left: 180px;
  padding: 18px;
  font-size: 18px;
  font-weight: 500;
}
.user-icon {
  position: absolute;
  right: 55px;
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  border: none;
  background-color: #285797;
  cursor: pointer;
  outline: none;
}
.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  position: fixed;
  right: 20px;
  top: 25px;
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
.nav .menu {
  position: absolute;
  left: 0;
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
</style>
