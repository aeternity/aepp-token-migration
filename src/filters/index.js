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

Vue.filter('shorten', function (value, pre) {
  if (!value || !value.includes('.')) return value
  const splitValue = value.split('.')
  if (pre) {
    return splitValue[0]
  } else if (splitValue[1]) {
    return splitValue[1]
  }
  return 0
})
