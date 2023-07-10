import type { RouterOptions } from 'vue-router'
const routes: RouterOptions['routes'] = [
  { 
    path: '/',
    redirect: '/recommend'
  },
  { 
    path: '/recommend',
    component: () => import('@/views/recommend.vue')
  },
  { 
    path: '/singer',
    component: () => import('@/views/singer.vue')
  },
  { 
    path: '/search',
    component: () => import('@/views/search.vue')
  },
  { 
    path: '/top-list',
    component: () => import('@/views/top-list.vue')
  }
]

export default routes