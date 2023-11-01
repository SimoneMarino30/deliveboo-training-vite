import { createApp } from 'vue'
import App from './App.vue'
import './styles/general.scss'

// Import all of Bootstrap's JS
import mojs from '@mojs/core'
import * as bootstrap from 'bootstrap'
import { router } from "./router.js"
createApp(App).use(router).mount('#app')
