import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 0,
    address: null
  },
  mutations: {
    setStep (state, payload) {
      state.step = payload
    },
    setAddress (state, payload) {
      state.address = payload
    }
  },
  actions: {
    setAddress (context, payload) {
      context.commit('setAddress', 'payload')
    }
  }
})
