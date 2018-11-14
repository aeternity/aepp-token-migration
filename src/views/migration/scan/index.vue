<template>
  <app-view>
    <!-- Application Header -->
    <app-header>
      <app-header-nav prog="4/6" text="Provide your æternity account"/>
    </app-header>

    <!-- Content View -->
    <app-view container>
      <app-notice v-if="scannerError">
        {{ scannerError }}. Please click
        <router-link :to="{ name: 'input' }">
          here
        </router-link>
        to enter the address manually.
      </app-notice>
      <app-intro>
        <template slot="title">
          Provide your æternity account
        </template>
        <template slot="intro">
        Please make sure the address you provide is your real æternity address, <br/>
        this cannot be changed afterwards. All tokens you choose to transfer <br/>
        will be available on this address.
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

    <!-- QRCode Scanner -->
    <qrcode-reader
      class="app-scan"
      @init="onInit"
      @decode="onDecode"
      :paused="paused"
      :camera="!paused"
      v-show="scanner"
    >
      <ae-button class="app-scan__btn" @click="closeScanner('migration')" face="icon" fill="neutral">
        <ae-icon name="close"/>
      </ae-button>
    </qrcode-reader>
  </app-view>
</template>

<script>
import { mapState } from 'vuex'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeCheck from '@aeternity/aepp-components/dist/ae-check'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

import AppNotice from '../../../components/app-notice.vue'
import AppAddress from '../../../components/app-address.vue'
import AppIntro from '../../../components/app-intro.vue'

import mixinsScan from '../../../mixins/scan'

export default {
  name: 'migration-scan',
  mixins: [mixinsScan],
  components: {
    AppNotice,
    AppAddress,
    AppIntro,
    AeIcon,
    AeText,
    AeButton,
    AeCheck,
    AeToolbar
  },
  data () {
    return { validated: false }
  },
  computed: {
    validbase58: function () {
      if (!this.walletAddress) return false
      try {
        this.$base58Check(this.walletAddress)
        return true
      } catch (e) {
        return false
      }
    },
    approved: function () {
      return this.validated && this.walletAddress && this.validbase58
    },
    ...mapState(['walletAddress'])
  }
}
</script>
<style lang="scss" scoped>
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
