import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
// 映入element插件
import 'element-ui/lib/theme-chalk/index.css'
import './components/styles/index.less'
// 映入样式

Vue.config.productionTip = false
Vue.use(ElementUI)
// 全局注册element

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
