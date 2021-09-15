import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './entry'

// hash模式：createWebHashHistory 
// history模式：createWebHistory 
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
