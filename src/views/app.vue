<template>
  <div id="app">
    <!-- Notice element -->
    <app-notice v-if="!mainnet">
      You’re connected to a Testnet,
      the tokens that you are about to migrate
      will NOT be available in the Mainnet
    </app-notice>

    <!-- Render everything here -->
    <router-view/>

    <!-- Blocker for non-mobile phones -->
    <div class="app-is-mobile-backdrop">
      <div class="app-is-mobile">
        <img src="../assets/graphics/desktop.png" alt="Desktop">
        <h2>Please switch to desktop</h2>
        <p>Currently, we do not support mobile phones</p>
        <a href="https://migrate.aeternity.com">
          <ae-button face="round" fill="primary" extend>
            Ok
          </ae-button>
        </a>
      </div>
    </div>
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
<style lang="scss" scoped>
.app-is-mobile-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  visibility: hidden;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #EDF3F7;
  z-index: 1000;
  overflow: hidden;
}

.app-is-mobile {
  flex: 1 0;
  background: $color-white;
  border-radius: 4px;
  padding: 4rem 2rem;
  margin: 0 2rem;
  text-align: center;
  width: 100%;

  > img {
    position: relative;
    margin-left: calc(-4rem);
    margin-right: calc(-4rem);
    width: calc(100% + 4rem);
  }

  > a {
    display: block;
    width: 100%;
  }

  > h2 {
    margin-bottom: 0.5rem;
    line-height: 1.5;
    font-weight: bold;
    font-size: 1.4375rem;
    color: #001833;
  }

  > p {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #4E5A66;
    font-size: 1.0625rem;
  }
}

@media screen and (max-width: 767px) {
  #app {
    overflow: hidden;
    height: 100%;
    max-height: none;
  }

  .app-is-mobile-backdrop {
    display: flex;
    visibility: visible;
  }
}
</style>
