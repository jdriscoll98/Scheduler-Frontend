<template>
  <div class="overview">
    <Card />
    <button @click="$router.push('add')" class="add-btn">
      <img class="add" src="../assets/images/plus-solid.svg" />
    </button>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "Overview",
  components: {
    Card,
  },
};
</script>

<style scoped>
.add-btn {
  display: inline-block;
  height: 50px;
  width: 50px;
  position: relative;
  top: 200px;
  left: 75px;
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
</style>
