import { createRouter, createWebHashHistory } from 'vue-router'
import Overview from '../views/Overview.vue'

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
    component: () => import(/* webpackChunkName: "program" */ '../views/Program.vue')
  },
  {
    path: '/add',
    name: 'SemesterForm',

    component: () => import(/* webpackChunkName: "program" */ '../views/SemesterForm.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
