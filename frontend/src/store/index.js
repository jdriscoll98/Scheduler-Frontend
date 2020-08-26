import { createStore } from 'vuex'

export default createStore({
  state: {
    loggedIn: localStorage.getItem('logged-in') || false,
    profile: {
      "username": localStorage.getItem("username") || null,
      "token": localStorage.getItem("token") || null,
    },
    authError: {
      "username": null,
      "password": null,
      "error": null,
    },
    errors: false,
  },
  mutations: {
    login(state, data) {
      state.errors = false;
      localStorage.setItem("logged-in", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token", data.token);
    },
    logout() {
      localStorage.clear();
    },
    setAuthError(state, data) {
      state.authError = data;
      state.errors = true;
    }
  },
  actions: {
    login({ commit }, payload) {
      return fetch("http://localhost:8000/api/login/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(response => response.json())
        .then(response => {
          if (response.token) {
            commit('login', response)
          }
          else {
            commit('setAuthError', response)
          }
          return response;
        })
    },

    register({ commit }, payload) {
      return fetch("http://localhost:8000/api/register/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(response => response.json())
        .then(response => {
          if (response.token) {
            commit('login', response)
          }
          else {
            commit('setAuthError', response)
          }
          return response;
        })
    }

  },
  modules: {
  }
})
