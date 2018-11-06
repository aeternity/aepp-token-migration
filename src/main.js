import '@aeternity/aepp-components/dist/aepp.fonts.css'
import '@aeternity/aepp-components/dist/aepp.components.css'

import Vue from 'vue'
import VueAgile from 'vue-agile'
import VueWeb3 from './plugins/web3'

import app from './views/app.vue'
import router from './router'
import store from './store'

import './filters/index.js'
import './sections/index.js'

Vue.use(VueAgile)
Vue.use(VueWeb3, {
  tokenContract: process.env.VUE_APP_AE_TOKEN_CONTRACT,
  tokenBurner: process.env.VUE_APP_AE_TOKEN_BURNER
})

export default new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
