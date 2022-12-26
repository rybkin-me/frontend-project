import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'
import {router} from "@/router/main";

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(Equal)
app.use(pinia)
app.mount('#app')

