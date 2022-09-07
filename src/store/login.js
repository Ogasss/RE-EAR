import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {loginTel} from '../api'

const state = {
    loginTel:[]
}

const actions = {
    async getLoginTel(commit,telPhone){
        const result = await loginTel(telPhone)
        commit('RECEIVE_LoginTel',result)
    }
}

const mutations = {
    RECEIVE_LoginTel(state,loginTel){
        state.loginTel = loginTel
    }
}

const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})