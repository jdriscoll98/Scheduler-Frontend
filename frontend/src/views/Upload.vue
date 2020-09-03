<template>
  <div class="main">
    <div>
      <h3 class="heading errors" id="errors"></h3>
    </div>
    <div v-if="!extensionLoaded">
      <h3 class="heading" id="install-warning">
        This App requires the Gator-Scheduler extension to be installed
      </h3>

      <button
        @click="
          openPage(
            'https://chrome.google.com/webstore/category/extensions?hl=en'
          )
        "
        class="extension-btn"
      >
        Go to Chrome Extension
      </button>
    </div>
    <div v-else>
      <div v-if="this.auditLoaded">
        <h3 class="heading">
          Audit Successfully Loaded
        </h3>
        <button
          class="upload-btn"
          @click="uploadAudit()"
          v-if="this.auditLoaded"
        >
          Upload Data
        </button>
        <div class="loader" id="loader"></div>
      </div>
      <div v-else>
        <h3 class="heading" id="pre-upload">
          Extension Successfully Loaded
        </h3>
        <button @click="fetchData" class="upload-btn">
          Fetch Degree Audit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upload",
  data: function() {
    return {
      auditLoaded: false,
      extensionLoaded: false,
    };
  },

  mounted() {
    this.detectExtension(this.setExtensionValue);
    let data = JSON.parse(localStorage.getItem("audit"));
    if (data && data.audit) {
      this.auditLoaded = true;
    }
  },
  methods: {
    detectExtension(callback) {
      var img;
      img = new Image();
      img.src = "chrome-extension://kmimdoenmlpjipeandldklbjjfbabojd/test.png";
      img.onload = function() {
        callback(true);
      };
      img.onerror = function() {
        callback(false);
      };
    },
    setExtensionValue(value) {
      this.extensionLoaded = value;
    },
    fetchData: function() {
      window.open("https://one.uf.edu/degreeaudit");
      this.auditLoaded = true;
      let errors = document.getElementById("errors");
      errors.innerText = "";
    },
    openPage: function(url) {
      window.open(url);
      let notice = document.getElementById("install-warning");
      notice.innerText = "Refresh to recheck for extension";
    },
    uploadAudit: function() {
      let data = JSON.parse(localStorage.getItem("audit"));
      if (!data || !data.audit) {
        this.auditLoaded = false;
        let errors = document.getElementById("errors");
        errors.innerText =
          "Sorry, there was an error finding your audit, please fetch it again.";
      } else {
        let loader = document.getElementById("loader");
        loader.style.display = "block";
        this.$store.dispatch("uploadAudit", data.audit).then(() => {
          this.$router.push("/");
        });
      }
    },
  },
};
</script>

<style scoped>
.heading {
  position: relative;
  top: 100px;
  color: #e0812e;
  margin: 10px 0 10px 0;
}
.errors {
  color: red;
}
.upload-btn {
  position: relative;
  top: 100px;
  background-color: #285797;
  color: white;
  font-size: 24px;
  font-weight: 600;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 15px #888888;
  cursor: pointer;
}
.extension-btn {
  position: relative;
  top: 100px;
  background-color: #285797;
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 15px #888888;
  cursor: pointer;
}
.loader {
  position: relative;
  margin: auto;
  top: 150px;
  border: 16px solid whitesmoke; /* Light grey */
  border-top: 16px solid #285797; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
  display: none;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
