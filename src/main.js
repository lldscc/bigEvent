import Vue from 'vue'
import App from './App.vue'
import '@/assets/global.less'
import '@/elementUI'
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
