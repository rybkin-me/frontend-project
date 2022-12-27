import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {router} from "@/router/main";
import {i18n} from "@/i18n/main";
import 'boxicons';
import 'boxicons/css/boxicons.min.css';

const pinia = createPinia()

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')

