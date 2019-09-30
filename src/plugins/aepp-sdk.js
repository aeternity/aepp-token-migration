import * as AeSDK from '@aeternity/aepp-sdk'
import { Crypto } from '@aeternity/aepp-sdk/es'
const Universal = AeSDK.Universal
const Node = AeSDK.Node

const SUCCESS_TX = 'ok'

export default {
  install: async function (Vue, options) {
    let $client
    let network

    Vue.prototype.$getClient = async function () {
      network = getNetwork()

      let emptyKeyPair = await Crypto.generateKeyPair()

      const UniversalFate = getUniversal()

      let node = await getNode()

      $client = await instantiateClient(UniversalFate, node, emptyKeyPair)

      Object.assign(Vue.prototype, { $client })
    }

    Vue.prototype.$waitForMineTx = async function (tx) {
      try {
        while (true) {
          let txMined = await $client.api.getTransactionByHash(tx)

          if (txMined.blockHeight > 1) {
            return ''
          }
        }
      } catch (error) {
        return error.response.data.reason
      }
    }

    Vue.prototype.$isReverted = async function (tx) {
      let txInfo = await $client.api.getTransactionInfoByHash(tx)

      return txInfo.callInfo.returnType.toLowerCase() !== SUCCESS_TX
    }

    function getNetwork () {
      return {
        url: process.env.VUE_APP_NODE_URL,
        internalUrl: process.env.VUE_APP_NODE_INTERNAL_URL,
        networkId: process.env.VUE_APP_NODE_NETWORK_ID,
        compilerUrl: process.env.VUE_APP_NODE_COMPILER_URL
      }
    }

    function getUniversal () {
      return Universal.compose({
        props: {
          compilerOptions: {
            backend: 'fate'
          },
          vmVersion: 5,
          abiVersion: 3
        }
      })
    }
    async function getNode () {
      return Node({
        url: network.url,
        internalUrl: network.internalUrl,
        forceCompatibility: true
      })
    }

    async function instantiateClient (_UniversalFate, _node, _emptyKeyPair) {
      return _UniversalFate({
        nodes: [{
          name: 'ANY_NAME',
          instance: _node
        }],
        accounts: [AeSDK.MemoryAccount({
          keypair: _emptyKeyPair
        })],
        nativeMode: false,
        networkId: network.networkId,
        compilerUrl: network.compilerUrl,
        forceCompatibility: true
      })
    }
  }
}
