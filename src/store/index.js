import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    env: process.env.NODE_ENV,
    walletAddress: null,
    migrationHash: null,
    ethWalletAddress: null
  },
  mutations: {
    setWalletAddress (state, address) {
      if (!address) {
        state.walletAddress = address
        return
      }
      state.walletAddress = address.replace(/ /g, '')
    },
    setEthWalletAddress (state, address) {
      if (!address) {
        state.ethWalletAddress = address
        return
      }
      state.ethWalletAddress = address.replace(/ /g, '')
    },

    setMigrationHash (state, txHash) {
      state.migrationHash = txHash
    }
  }
})
