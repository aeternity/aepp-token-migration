import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    env: process.env.NODE_ENV,
    walletAddress: null,
    migrationHash: null
  },
  mutations: {
    setWalletAddress (state, address) {
      if (!address) {
        state.walletAddress = address
        return
      }
      state.walletAddress = address.replace(/ /g, '')
    },

    setMigrationHash (state, txHash) {
      state.migrationHash = txHash
    }
  }
})
