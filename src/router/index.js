import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CourseView from '@/views/CourseView.vue'
import AboutView from '@/views/AboutView.vue'
import PricingView from '@/views/PricingView.vue'
import ConatctView from '@/views/ConatctView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/course', name: 'course', component: CourseView,},
    {path: '/about', name: 'about', component: AboutView},
    {path: '/pricing', name: 'pricing', component: PricingView},
    {path: '/contact', name: 'contact', component: ConatctView},

  ],
})

export default router
