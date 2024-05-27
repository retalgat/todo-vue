import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
  linkActiveClass: 'header__link--active',
  linkExactActiveClass: 'header__link--active',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about',
      component: AboutView
    }
  ]
})

export default router
