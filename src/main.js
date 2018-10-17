import '@aeternity/aepp-components/dist/aepp.fonts.css'
import '@aeternity/aepp-components/dist/aepp.components.css'

import Vue from 'vue'
import VueAgile from 'vue-agile'
import Affix from 'vue-affix'

import '@/sections/index.js'
import app from './views/app.vue'
import router from './router'
import store from './store'

import VueWeb3 from './plugins/web3'

Vue.use(VueAgile)
Vue.use(VueWeb3, {
  tokenContract: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  tokenBurner: '0x4ecd812b010d9db16b0fb7143a79786b65b89b09'
})
Vue.use(Affix)

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
