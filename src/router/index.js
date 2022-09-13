import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import TheLogin from '../pages/TheLogin.vue'
import Person from '../pages/Person.vue'
import PersonMessage from '../pages/PersonMessage.vue'
import PersonDynamic from '../pages/PersonDynamic.vue'

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
            component: TheLogin
        },
        {
            path:'/person',
            component: Person,
            children:[
                {
                    path:'message',
                    component:PersonMessage,
                },
                {
                    path:'dynamic',
                    component:PersonDynamic,
                }
            ]
        },
        {
            path:'/',
            redirect:'/home'
        }, 
    ]
})