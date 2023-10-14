import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import pinia from './stores'
import 'normalize.css'
import './assets/css/index.css'

createApp(App).use(router).use(pinia).mount('#app')
