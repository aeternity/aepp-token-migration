<template>
  <app-view>
    <app-header>
      <app-header-nav prog="4/6" text="Enter your Aeternity account address"/>
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Enter your æternity account address
        </template>
        <template slot="intro">
          Please make sure the address below is the correct æternity <br/>
          address which you made. All AE tokens will be sent to this address. <br/>
          You cannot change the address your tokens will be sent to later!
        </template>
      </app-intro>
      <app-panel primary padding shadow>
        <div class="app-scan-address">
          <app-address :value="walletAddress" disabled>
            <ae-toolbar align="justify">
              <span v-if="!validbase58 && (walletAddress && walletAddress.length > 0)">
                Invalid AE Address
              </span>
              <span v-else> </span>
              <ae-button @click="toggleRescan" face="toolbar">
                <ae-icon name="camera"/>
                Scan
              </ae-button>
            </ae-toolbar>
          </app-address>
          <ae-check name="approve" v-model="validated">
            <ae-text face="sans-s">
              I am certain my address and identicon are correct
            </ae-text>
          </ae-check>
          <br/>
        </div>
        <div class="app-scan-button-group">
          <router-link class="app-scan-link" :to="{ name: 'wallets' }" :disabled="!approved">
            <ae-button face="round" fill="primary" :disabled="!approved" extend>
              Continue
            </ae-button>
          </router-link>
        </div>
        <div class="app-scan-button-group">
          <ae-button @click="toggleRescan" extend>
            Scan Again
          </ae-button>
        </div>
      </app-panel>
    </app-view>
    <qrcode-reader class="app-scan" @decode="onDecode" :paused="paused" :camera="!paused" v-show="scanner">
      <ae-button class="app-scan__btn" @click="closeScanner" face="icon" fill="neutral">
        <ae-icon name="close"/>
      </ae-button>
    </qrcode-reader>
  </app-view>
</template>

<script>
import { mapState } from 'vuex'
import { QrcodeReader } from 'vue-qrcode-reader'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeCheck from '@aeternity/aepp-components/dist/ae-check'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

import AppAddress from '../../../components/app-address.vue'
import AppIntro from '../../../components/app-intro.vue'

export default {
  name: 'migration-scan',
  components: {
    AppAddress,
    AppIntro,
    AeIcon,
    AeText,
    AeButton,
    AeCheck,
    AeToolbar,
    QrcodeReader
  },
  data () {
    return {
      scanner: true,
      address: false,
      paused: false,
      validated: false,
      validbase58: false
    }
  },
  computed: {
    approved: function () {
      return this.validated && this.walletAddress && this.validbase58
    },
    ...mapState([
      'walletAddress'
    ])
  },
  watch: {
    walletAddress (address) {
      if (!address) return
      try {
        this.$base58Check(address)
        this.validbase58 = true
      } catch (e) {
        this.validbase58 = false
      }
    }
  },
  methods: {
    onDecode (content) {
      this.$store.commit('setWalletAddress', content)
      this.paused = true
      this.scanner = false
    },
    closeScanner () {
      this.$store.commit('setWalletAddress', null)
      this.paused = true
      this.scanner = false
      this.$router.push({ name: 'migration' })
    },
    toggleRescan () {
      this.$store.commit('setWalletAddress', null)
      this.paused = false
      this.scanner = true
    }
  }
}
</script>
<style lang="scss" scoped>
.app-scan {
  background-color: $color-black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  &__btn {
    position: fixed;
    top: 2rem;
    right: 2rem;
  }

  /deep/ .app-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
}

.app-scan-link {
  width: 100%;
}

.app-scan-button-group {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 220px;
  margin: 2rem auto 0 auto;
}

.app-scan-address {
  display: block;
  margin: 0 auto;
  width: 560px;
}
</style>
