import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [{
    name: 'begin',
    path: '/',
    component: require('../views/begin/index.vue').default
  }, {
    name: 'airgap',
    path: '/airgap',
    component: require('../views/begin/airgap/index.vue').default
  }, {
    name: 'ledger',
    path: '/ledger',
    component: require('../views/begin/ledger/index.vue').default
  }, {
    name: 'migration',
    path: '/migration',
    component: require('../views/migration/index.vue').default
  }, {
    name: 'input',
    path: '/migration/input',
    component: require('../views/migration/input/index.vue').default
  }, {
    name: 'scan',
    path: '/migration/scan',
    component: require('../views/migration/scan/index.vue').default
  }, {
    name: 'read',
    path: '/migration/read',
    component: require('../views/migration/read/index.vue').default
  }, {
    name: 'wallets',
    path: '/migration/wallets',
    component: require('../views/migration/wallets/index.vue').default
  }, {
    name: 'metamask',
    path: '/migration/metamask',
    component: require('../views/migration/wallets/metamask/index.vue').default
  }, {
    name: 'myetherwallet',
    path: '/migration/myetherwallet',
    component: require('../views/migration/wallets/myetherwallet/index.vue').default
  }, {
    name: 'check',
    path: '/status/result',
    component: require('../views/status/check.vue').default
  }, {
    name: 'result',
    path: '/status/result/:pubkey',
    component: require('../views/status/address.vue').default
  }, {
    name: 'tx',
    path: '/status/tx/:pubkey',
    component: require('../views/status/tx.vue').default
  }, {
    name: 'payload',
    path: '/status/payload',
    component: require('../views/status/payload.vue').default
  }]
})
