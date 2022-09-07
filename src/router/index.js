import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import TheLogin from '../pages/TheLogin.vue'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component: Home
        },
        {
            path:'/news',
            component: News
        },
        {
            path:'/login',
            component:TheLogin
        },
        {
            path:'/',
            redirect:'/home'
        }, 
    ]
})