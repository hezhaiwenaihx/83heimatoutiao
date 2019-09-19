import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
// 映入element插件
import 'element-ui/lib/theme-chalk/index.css'
import './components/styles/index.less'
import axios from 'axios'

// 映入样式
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
