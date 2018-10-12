import '@aeternity/aepp-components/dist/aepp.components.css'

import Vue from 'vue'
import VueAgile from 'vue-agile'

import app from './views/App.vue'
import router from './router'
import store from './store'

Vue.use(VueAgile)

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
