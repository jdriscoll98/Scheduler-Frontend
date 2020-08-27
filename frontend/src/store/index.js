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
    registered: false,
    semesters: [],
  },
  getters: {
    semesters: (state) => {
      return state.semesters;
    }
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
    },
    registered(state) {
      state.registered = true;
    },
    setSemesters(state, data) {
      state.semesters = data;
    },
    updateSemesters(state, semester) {
      state.semesters.push(semester)
    }
  },
  actions: {
    getPrograms() {
      return fetch("http://localhost:8000/api/programs/", {
        method: "get",
        headers: {
          Authorization: "Token ".concat(this.state.profile.token),
        },
      }).then((res) => (res.json()))
        .then((res) => {
          if (res.errors) {
            console.log(res.errors)
          }
          return res;
        })
    },
    createSemester({ commit }, payload) {
      return fetch("http://localhost:8000/api/semesters/", {
        method: "post",
        headers: {
          Authorization: "Token ".concat(this.state.profile.token),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      }).then((res) => (res.json()))
        .then((res) => {
          console.log(res);
          if (res.errors) {
            console.log("here")
          }
          else {
            commit('updateSemesters', res)
          }
          return res;
        })
    },
    getSemesters({ commit }) {
      return fetch("http://localhost:8000/api/semesters/", {
        method: "get",
        headers: {
          Authorization: "Token ".concat(this.state.profile.token),
        }
      }).then(res => res.json())
        .then(res => {
          commit('setSemesters', res)
        })
    },
    getCategories() {
      return fetch("http://localhost:8000/api/categories/", {
        method: "get",
        headers: {
          Authorization: "Token ".concat(this.state.profile.token),
        }
      }).then((res) => res.json())
        .then((res) => {
          return res;
        })
    },
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
          commit("registered")
          return response;
        })
    }

  },
  modules: {
  }
})
