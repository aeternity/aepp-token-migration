import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 0,
    walletAddress: '',
    web3: null,

    /**
     * AE Token Contract
     */
    AEToken: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',

    /**
     * AE Burnable Contract
     */
    TokenBurner: '0x4ecd812b010d9db16b0fb7143a79786b65b89b09'
  },
  mutations: {
    setStep (state, payload) {
      state.step = payload
    },
    setWalletAddress (state, address) {
      state.walletAddress = address
    },
    setWeb3 (state, web3) {
      state.web3 = web3
    }
  },
  actions: {
    setWalletAddress (context, payload) {
      context.commit('setWalletAddress', payload)
    },
    setWeb3 (context, web3) {
      context.commit('setWeb3', web3)
    }
  }
})
