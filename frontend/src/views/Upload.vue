<template>
  <div class="main">
    <div class="instructions">
      <ol>
        <li>In a seperate tab, log in to ONE.UF</li>
        <li>
          Once Logged in, stay on the ONE.UF homepage and enter "http://one.uf.edu/api/degreeaudit/loaddegreeaudit" into the address bar (without quotations)
          <p>(This may take a few seconds to load)</p>
        </li>
        <li>Once the link loads, right click and select "Save as", and save it to anywhere on your computer</li>
        <li>Click the choose file button below to select that file, and then click upload!</li>
      </ol>
      <form>
        <input class="upload" id="file" type="file" />
        <button class="upload btn" type="submit">Upload</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.instructions {
  position: relative;
  top: 135px;
  width: 50%;
  text-align: left;
  margin: auto;
}
li {
  color: #285787;
  font-size: 24px;
  font-weight: 800;
  margin: 20px;
}

.btn {
  background-color: #285787;
  color: white;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  width: 150px;
  height: 50px;
}
</style>
