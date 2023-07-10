import type { RouterOptions } from 'vue-router'
const routes: RouterOptions['routes'] = [
  { 
    path: '/',
    redirect: '/recommend'
  },
  { 
    path: '/recommend',
    component: () => import('@/views/recommend.vue')
  }
]

export default routes