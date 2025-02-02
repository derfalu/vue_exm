import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import PostPage from '@/pages/PostPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import PostPageWithStore from '@/pages/PostPageWithStore.vue'
import PostPageCompositionApi from '@/pages/PostPageCompositionApi.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/post_page',
    name: 'adsgjhsad',
    component: PostPage
  },
  {
    path: '/post_page_with_store',
    name: 'post_page_with_store',
    component: PostPageWithStore
  },
  {
    path: '/post_page_with_composition_api',
    name: 'post_page_with_composition_api',
    component: PostPageCompositionApi
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
