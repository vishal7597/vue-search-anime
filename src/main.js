import { createApp } from 'vue'
import './style.css'
import router from './router/index.js'
import store from './store/index.js'
import App from './App.vue'

createApp(App)
.use(router)
.use(store)
.mount('#app')
