import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue"
import UserPage from '@/pages/UserPage.vue';


const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/user_page',
        component: UserPage
    }
];
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})
export default router;
