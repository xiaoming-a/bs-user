import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

Vue.config.productionTip = false

import http from "../http";

//使用提示组件
import toastRegistry from '../src/components/common/toast/index'
Vue.use(toastRegistry)

//原型上使用 http
Vue.prototype.$http = http;

//在main.js引入 过滤器
Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  return `${y}-${m}-${d}`
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


