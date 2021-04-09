import sourceData from '@/data.json'
import Home from '@/pages/Home'
import Forum from '@/pages/Forum'
import Category from '@/pages/Category'
import NotFound from '@/pages/NotFound'
import ThreadShow from '@/pages/ThreadShow'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true,
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      // check if thread exists
      const trheadExists = sourceData.threads.find((thread) => thread.id === to.params.id)
      // if exists continue
      if (trheadExists) {
        return next()
      } else {
        // if doesnt exists redirect to not found
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash
          query: to.query,
          hash: to.hash,
        })
      }
    },
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
