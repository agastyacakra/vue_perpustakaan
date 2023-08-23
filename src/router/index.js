import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
// import Vue from 'vue'
//import VueRouter from 'vue-router'


const routes = [
  {
    path: '/user',
    name: 'Dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
