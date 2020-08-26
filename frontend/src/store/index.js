import { createStore } from 'vuex'

export default createStore({
  state: {
    loggedIn: false,
    profile: {},
    authError: {
      "username": null,
      "password": null,
      "error": null,
    }
  },
  mutations: {
    login(state, data) {
      state.loggedIn = true;
      state.profile = data
    },
    setAuthError(state, data) {
      state.authError = data;
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
          if (response['token']) {
            commit('login', response)
          }
          else {
            commit('setAuthError', response)
          }
        })
    },

  },
  modules: {
  }
})
