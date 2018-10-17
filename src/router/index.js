import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'index',
      path: '/',
      component: require('../views/index/index.vue').default
    },
    {
      name: 'start',
      path: '/start',
      component: () => import('../views/tutorial/index.vue')
    },
    {
      name: 'airgap',
      path: '/airgap',
      component: () => import('../views/tutorial/airgap/index.vue')
    },
    {
      name: 'ledger',
      path: '/ledger',
      component: () => import('../views/tutorial/ledger/index.vue')
    },
    {
      name: 'tutorials',
      path: '/tutorials',
      component: () => import('../views/tutorial/tutorials/index.vue')
    },
    {
      name: 'provide-address',
      path: '/provide-address',
      component: () => import('../views/migration/provide-address/index.vue')
    },
    {
      name: 'input-address',
      path: '/input-address',
      component: () => import('../views/migration/input-address/index.vue')
    },
    {
      name: 'scan-address',
      path: '/scan-address',
      component: () => import('../views/migration/scan-address/index.vue')
    },
    {
      name: 'read-from-ledger',
      path: '/read-from-ledger',
      component: () => import('../views/tutorial/ledger/read-ledger/index.vue')
    },
    {
      name: 'connect',
      path: '/connect',
      component: () => import('../views/migration/connect/index.vue')
    },
    {
      name: 'prepare-transactions',
      path: '/prepare-transactions',
      component: () => import('../views/migration/prepare-transactions/index.vue')
    },
    {
      name: 'migrate-results',
      path: '/migration-results',
      component: () => import('../views/status/migration-results/index.vue')
    },
    {
      name: 'input-data-decoder',
      path: '/input-data-decoder',
      component: () => import('../views/migration/input-data-decoder/index.vue')
    }
  ]
})
