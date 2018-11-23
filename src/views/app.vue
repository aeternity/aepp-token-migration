<template>
  <div id="app">
    <app-notice v-if="!mainnet">
      You’re connected to a Ethereum Testnet,
      the tokens that you are about to migrate
      will NOT be available in the æternity Mainnet
    </app-notice>
    <router-view />
  </div>
</template>
<script>
import { network } from '../plugins/web3'
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AppNotice from '../components/app-notice.vue'

export default {
  name: 'app',
  components: {
    AeButton,
    AppNotice
  },
  data () {
    return { mainnet: true }
  },
  watch: {
    async $route () {
      try {
        await this.$hasWeb3()
      } catch (e) {
        return
      }

      try {
        await this.$checkNetwork(network.mainnet)
        this.mainnet = true
      } catch (e) {
        this.mainnet = false
      }
    }
  },
  mounted: async function () {
    try {
      await this.$hasWeb3()
    } catch (e) {
      return
    }

    try {
      await this.$checkNetwork(network.mainnet)
      this.mainnet = true
    } catch (e) {
      this.mainnet = false
    }
  }
}
</script>
<style lang="scss" scoped></style>
