<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { network } from '../plugins/web3'

export default {
  name: 'app',
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
      await this.$getClient()
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
<style lang="scss" scoped>
  @import "src/style/index";
</style>
