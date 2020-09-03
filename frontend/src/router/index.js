import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview.vue'
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/program',
    name: 'Program',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "program" */ '../views/ProgramView.vue')
  },
  {
    path: '/form',
    name: 'SemesterForm',

    component: () => import(/* webpackChunkName: "program" */ '../views/SemesterForm.vue')
  },
  {
    path: '/upload',
    name: 'Upload',

    component: () => import(/* webpackChunkName: "program" */ '../views/Upload.vue')
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import(/* webpackChunkName: "program" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',

    component: () => import(/* webpackChunkName: "program" */ '../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.loggedIn) next({ name: 'Login' })
  else next()
})

export default router
