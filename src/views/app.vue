<template>
  <div id="app">
    <app-notice v-if="!mainnet">
      You’re connected to a Testnet,
      the tokens that you are about to migrate
      will NOT be available in the Mainnet
    </app-notice>
    <router-view/>
    <div class="app-is-mobile" v-if="isMobile">
      <h1>Mobile phones are not supported for now.</h1>
    </div>
  </div>
</template>
<script>
import { network } from '../plugins/web3'

import AppNotice from '../components/app-notice.vue'

export default {
  name: 'app',
  components: {
    AppNotice
  },
  data () {
    return { mainnet: true, isMobile: false }
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
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
      this.isMobile = true
      return
    }

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
<style lang="scss" scoped>
.app-is-mobile {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: $color-neutral-positive-2;
  overflow: auto;
  z-index: 1000;

  > h1 {
    text-align: center;
    line-height: 1.5;
  }
}
</style>
