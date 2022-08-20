import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/Home.vue'

export default new VueRouter({
    routes:[
    {
        path:'/home',
        component: Home
    },
    {
        path:'/',
        redirect:'/home'
    },
    ]
})