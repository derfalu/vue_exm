import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import UserPage from '@/pages/UserPage.vue'
import AboutPage from '@/pages/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/user_page',
    name: 'adsgjhsad',
    component: UserPage
  },
  {
    path: '/about',
    name: 'adsgjhsadgasshagdjad',
    component: AboutPage
  }
]
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})
export default router
