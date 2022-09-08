import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import login from './login'

const state = {
    loginAndRegisterChoice: true,
    logined: false,
}

const actions = {
}

const mutations = {
}

const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        login
    }
})