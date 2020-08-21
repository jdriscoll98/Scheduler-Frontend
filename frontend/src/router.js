import { createRouter, createWebHistory } from 'vue-router'

// import Overview from '../components/Overview.vue'
// import SemesterForm from '../components/SemesterForm.vue'
// import Program from '../components/Program.vue'

const routerHistory = createWebHistory();

export default createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            // component: Overview
        },
        {
            path: '/program',
            // component: Program
        },
        {
            path: '/add',
            // component: SemesterForm
        }
    ]
})
