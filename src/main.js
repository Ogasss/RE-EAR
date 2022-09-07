import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import {login} from './api'

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  el:'#app',
  router,
  store,
  render: h => h(App),
})
