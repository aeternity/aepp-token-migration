import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'

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
      component: () => import('./views/Start/Start.vue')
    },
    {
      path: '/Airgap',
      name: 'Airgap',
      component: () => import('./views/Airgap/Airgap.vue')
    },
    {
      path: '/Tutorials',
      name: 'Tutorials',
      component: () => import('./views/Tutorials/Tutorials.vue')
    },
    {
      path: '/Ledger',
      name: 'Ledger',
      component: () => import('./views/Ledger/Ledger.vue')
    },
    {
      path: '/Migrate',
      name: 'Migrate',
      component: () => import('./views/Migrate/Migrate.vue')
    }
  ]
})
