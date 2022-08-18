import Vue from 'vue'
import App from './App.vue'
import store from './Vuex/store'

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  el:'#app',
  store,
  render: h => h(App),
})
