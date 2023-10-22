import { createApp } from 'vue'
// import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router';

import Moment from 'moment'


createApp(App).use(router).use(ElementPlus).mount('#app')
