import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    walletAddress: null
  },
  mutations: {
    setWalletAddress (state, address) {
      state.walletAddress = address
    }
  },
  actions: {
    setWalletAddress (context, payload) {
      context.commit('setWalletAddress', payload)
    }
  }
})
