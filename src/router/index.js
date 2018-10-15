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
      path: '/Start',
      name: 'Start',
      component: () => import('../views/Start/Start.vue')
    },
    {
      path: '/Airgap',
      name: 'Airgap',
      component: () => import('../views/Airgap/Airgap.vue')
    },
    {
      path: '/Tutorials',
      name: 'Tutorials',
      component: () => import('../views/Tutorials/Tutorials.vue')
    },
    {
      path: '/Ledger',
      name: 'Ledger',
      component: () => import('../views/Ledger/Ledger.vue')
    },
    {
      path: '/Migrate',
      name: 'Migrate',
      component: () => import('../views/Migrate/Migrate.vue')
    },
    {
      path: '/Connect',
      name: 'Connect',
      component: () => import('../views/Connect/Connect.vue')
    },
    {
      path: '/PrepareTransactions',
      name: 'PrepareTransactions',
      component: () => import('../views/PrepareTransactions/PrepareTransactions.vue')
    },
    {
      path: '/MigrationResults',
      name: 'MigrationResults',
      component: () => import('../views/MigrationResults/MigrationResults.vue')
    },
    {
      path: '/input-data-decoder',
      name: 'InputDataDecoder',
      component: () => import('../views/InputDataDecoder/InputDataDecoder.vue')
    }
  ]
})
