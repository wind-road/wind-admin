// import './assets/main.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/index.css'
// 黑暗模式样式
import './styles/dark/css-vars.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

//引入pinia数据持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 实例化 Pinia
const pinia = createPinia()
app.use(pinia.use(piniaPluginPersistedstate))
app.use(router)

app.mount('#app')
