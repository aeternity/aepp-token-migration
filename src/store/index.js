import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    walletAddress: 'ak_v12Pf9vWcN5tSuN2SeFL3RmYUDpu7zeeUsSuAYwyGDMW9NX3B'
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
