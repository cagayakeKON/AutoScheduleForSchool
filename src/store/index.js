import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    applicationNavigation:{
      drawer:false
    }
  },
  mutations: {
    TOGGLE_SIDEBAR(state){
      state.applicationNavigation.drawer= ! state.applicationNavigation.drawer
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
  },
  modules: {
  }
})
