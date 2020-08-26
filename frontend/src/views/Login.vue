<template>
  <div class="main">
    <div class="card">
      <div class="heading">
        <h3>ONE.UF - Scheduler</h3>
        <h6>Login</h6>
      </div>
      <div class="form-group">
        <p class="error" v-if="$store.state.authError.error">{{ $store.state.authError.error }}</p>
        <p class="success-msg" v-if="$store.state.registered">Successfully registered, login below</p>
        <label for="username" class="label">Username</label>
        <p
          class="error"
          v-if="$store.state.authError.username"
        >{{ $store.state.authError.username[0] }}</p>
        <input class="input" id="username" name="username" v-model="username" />
        <label for="username" class="label">Password</label>
        <p
          class="error"
          v-if="$store.state.authError.password"
        >{{ $store.state.authError.password[0] }}</p>
        <input class="input" type="password" id="password" v-model="password" name="password" />
        <div class="submit">
          <button @click="login" class="submit-btn">Login</button>
          <p>
            Don't have an account?
            <a
              class="register-link"
              @click="$router.push('/register')"
              href="#"
            >Click here to register.</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login: function () {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          if (!this.$store.state.errors) {
            window.location.href = "/";
          }
        });
    },
  },
};
</script>

<style scoped>
.success-msg {
  background-color: lightgreen;
  border-radius: 5px;
  margin: 10px;
  font-weight: 700;
  padding: 10px;
}
.register-link {
  text-decoration: none;
}
.error {
  color: red;
  position: relative;
  width: 80%;
}

.submit-btn {
  margin: 20px;
  height: 50px;
  width: 50%;
  font-size: 20px;
  color: white;
  font-weight: 700;
  border-radius: 5px;
  background-color: #e0812e;
  cursor: pointer;
}

.submit {
  display: block;
  position: relative;
  top: 10px;
  padding-bottom: 30px;
}

.input {
  width: 75%;
  height: 40px;
  margin: 10px;
  border: 2px solid #285797;
  border-radius: 5px;
  outline: none;
  padding-left: 5px;
  font-weight: 700;
}

.input:focus {
  border: 3px solid #285797;
}

.label {
  font-weight: 500;
  color: #285797;
  margin: 10px 0 0 10px;
  width: 40%;
  display: block;
}

.form-group {
  height: 50%;
  width: 75%;
  margin: auto;
  top: 10%;
  position: relative;
  display: block;
}

.heading {
  width: 100%;
  height: 10%;
  padding: 10px 0 10px 0;
  position: relative;
  font-size: 24px;
  color: white;
  background-color: #285797;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card {
  width: 400px;
  min-height: 100%;
  background-color: white;
  margin: auto;
  position: relative;
  top: 100px;
  border-radius: 5px;
  box-shadow: 0 10px 20px #888888;
}
</style>
