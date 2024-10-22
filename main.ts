import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import App from './src/App.vue'

const app = createApp(App)
const pinia = createPinia()

// app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
