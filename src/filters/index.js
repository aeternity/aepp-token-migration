import Vue from 'vue'
import { utils } from 'web3'

Vue.filter('chunk', function (value) {
  if (!value) return
  return value.match(/.{1,3}/g).map(
    (el) => `<span>${el}</span>`
  ).join('')
})

Vue.filter('fromWei', function (value) {
  if (!value) return
  return utils.fromWei(value)
})
