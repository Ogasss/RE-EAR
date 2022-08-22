import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import News from '../pages/News.vue'

export default new VueRouter({
    routes:[
        {
            path:'/news',
            component:News
        },
    ]
})