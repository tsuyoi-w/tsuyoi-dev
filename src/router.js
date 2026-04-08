import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import Project from './views/project.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/project', component: Project },
]

const router = createRouter({
  history: createWebHistory('/tsuyoi-dev/'),
  routes,
})

export default router
