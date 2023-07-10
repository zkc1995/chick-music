import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// 代替vuex
import { createPinia } from 'pinia'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
