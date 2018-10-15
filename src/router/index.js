import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/start',
      name: 'Start',
      component: () => import('../views/Start/Start.vue')
    },
    {
      path: '/tutorials',
      name: 'Tutorials',
      component: () => import('../views/Tutorials/Tutorials.vue')
    },
    {
      path: '/provide-address',
      name: 'Provide Address',
      component: () => import('../views/ProvideAddress/ProvideAddress.vue')
    },
    {
      path: '/input-address',
      name: 'Input Address',
      component: () => import('../views/InputAddress/InputAddress.vue')
    },
    {
      path: '/scan-address',
      name: 'Scan Address',
      component: () => import('../views/ScanAddress/ScanAddress.vue')
    },
     {
      path: '/read-from-ledger',
      name: 'Read from Ledger',
      component: () => import('../views/ReadLedger/ReadLedger.vue')
    },
    {
      path: '/connect',
      name: 'Connect',
      component: () => import('../views/Connect/Connect.vue')
    },
    {
      path: '/prepare-transactions',
      name: 'Prepare Transactions',
      component: () => import('../views/PrepareTransactions/PrepareTransactions.vue')
    },
    {
      path: '/migration-results',
      name: 'Migration Results',
      component: () => import('../views/MigrationResults/MigrationResults.vue')
    },
    {
      path: '/input-data-decoder',
      name: 'InputDataDecoder',
      component: () => import('../views/InputDataDecoder/InputDataDecoder.vue')
    }
  ]
})
