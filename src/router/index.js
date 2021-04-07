import PageHome from '@/components/PageHome'
import { createRouter, createWebHistory } from 'vue-router'
import PageThreadShow from '@/components/PageThreadShow'
import PageNotFound from '@/components/PageNotFound'
import sourceData from '@/data.json'

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
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
