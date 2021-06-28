// import sourceData from '@/data.json'
// import { findById } from '@/helpers'
import Home from '@/pages/Home'
import Forum from '@/pages/Forum'
import Profile from '@/pages/Profile'
import Category from '@/pages/Category'
import NotFound from '@/pages/NotFound'
import ThreadEdit from '@/pages/ThreadEdit'
import ThreadShow from '@/pages/ThreadShow'
import ThreadCreate from '@/pages/ThreadCreate'

import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/me',
    name: 'Profile',
    component: Profile,
    meta: { toTop: true, smoothScroll: true },
  },
  {
    path: '/me/edit',
    name: 'ProfileEdit',
    component: Profile,
    props: { edit: true },
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
    // beforeEnter(to, from, next) {
    //   // check if thread exists
    //   const trheadExists = findById(sourceData.threads, to.params.id)
    //   // if exists continue
    //   if (trheadExists) {
    //     return next()
    //   } else {
    //     // if doesnt exists redirect to not found
    //     next({
    //       name: 'NotFound',
    //       params: { pathMatch: to.path.substring(1).split('/') },
    //       // preserve existing query and hash
    //       query: to.query,
    //       hash: to.hash,
    //     })
    //   }
    // },
  },
  {
    path: '/forum/:forumId/thread/create',
    name: 'ThreadCreate',
    component: ThreadCreate,
    props: true,
  },
  {
    path: '/thread/:id/edit',
    name: 'ThreadEdit',
    component: ThreadEdit,
    props: true,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    const scroll = {}
    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.behavior = 'smooth'
    return scroll
  },
})
router.beforeEach(() => {
  store.dispatch('unsubscribeAllSnapshots')
})

export default router
