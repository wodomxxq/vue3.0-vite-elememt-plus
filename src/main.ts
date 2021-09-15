import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/less/app.less'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
// import { httpGet, httpPost } from '@/api/useRequest'

import pageTitle from './components/pageTitle.vue'

const app = createApp(App)

// app.config.globalProperties.$ELEMENT = 
// app.config.globalProperties.$httpGet = httpGet
// app.config.globalProperties.$httpPost = httpPost

window.$version = {
  vue: app.version,
  ele: ElementPlus.version
}

app.component('pageTitle', pageTitle)

app.use(router)
  .use(store)
  .use(ElementPlus, { locale })
  .mount('#app')
