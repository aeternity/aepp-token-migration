import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    env: process.env.NODE_ENV,
    walletAddress: null
  },
  mutations: {
    setWalletAddress (state, address) {
      if (!address) {
        state.walletAddress = address
        return
      }
      state.walletAddress = address.replace(/ /g, '')
    }
  }
})
