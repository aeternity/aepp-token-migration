import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: require('../views/landing/index').default
    },
    {
      path: '/start',
      name: 'Start',
      component: () => import('../views/start/index.vue')
    },
    {
      path: '/tutorials',
      name: 'Tutorials',
      component: () => import('../views/tutorials/index.vue')
    },
    {
      path: '/provide-address',
      name: 'Provide Address',
      component: () => import('../views/provide-address/index.vue')
    },
    {
      path: '/input-address',
      name: 'Input Address',
      component: () => import('../views/input-address/index.vue')
    },
    {
      path: '/scan-address',
      name: 'Scan Address',
      component: () => import('../views/scan-address/index.vue')
    },
    {
      path: '/read-from-ledger',
      name: 'Read from Ledger',
      component: () => import('../views/read-ledger/index.vue')
    },
    {
      path: '/connect',
      name: 'Connect',
      component: () => import('../views/connect/index.vue')
    },
    {
      path: '/prepare-transactions',
      name: 'Prepare Transactions',
      component: () => import('../views/prepare-transactions/index.vue')
    },
    {
      path: '/migration-results',
      name: 'Migration Results',
      component: () => import('../views/migration-results/index.vue')
    },
    {
      path: '/input-data-decoder',
      name: 'InputDataDecoder',
      component: () => import('../views/input-data-decoder/index.vue')
    }
  ]
})
