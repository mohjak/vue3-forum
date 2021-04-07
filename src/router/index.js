import PageHome from '@/components/PageHome'
import { createRouter, createWebHistory } from 'vue-router'
import PageThreadShow from '@/components/PageThreadShow'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
