import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /**
     * Landing Page
     */
    {
      name: 'index',
      path: '/',
      component: require('../views/index/index.vue').default
    },

    /**
     * Tutorial phase
     */
    {
      name: 'begin',
      path: '/begin',
      component: () => import('../views/begin/index.vue')
    },
    {
      name: 'airgap',
      path: '/begin/airgap',
      component: () => import('../views/begin/airgap/index.vue')
    },
    {
      name: 'ledger',
      path: '/begin/ledger',
      component: () => import('../views/begin/ledger/index.vue')
    },

    /**
     * Migration phase
     */
    {
      name: 'migration',
      path: '/migration',
      component: () => import('../views/migration/index.vue')
    },
    {
      name: 'input',
      path: '/migration/input',
      component: () => import('../views/migration/input/index.vue')
    },
    {
      name: 'scan',
      path: '/migration/scan',
      component: () => import('../views/migration/scan/index.vue')
    },
    {
      name: 'read',
      path: '/migration/read',
      component: () => import('../views/migration/read/index.vue')
    },
    {
      name: 'wallets',
      path: '/migration/wallets',
      component: () => import('../views/migration/wallets/index.vue')
    },
    {
      name: 'metamask',
      path: '/migration/metamask',
      component: () => import('../views/migration/wallets/metamask/index.vue')
    },
    {
      name: 'myetherwallet',
      path: '/migration/myetherwallet',
      component: () => import('../views/migration/wallets/myetherwallet/index.vue')
    },

    /**
     * Status pages
     */
    {
      name: 'result',
      path: '/status/result',
      component: () => import('../views/status/result/index.vue')
    }
  ]
})
