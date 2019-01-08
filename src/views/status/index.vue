<template>
  <app-view>
    <!-- Application Header -->
    <app-header>
      <app-header-nav text="Statuspage"/>
    </app-header>

    <!-- Content View -->
    <app-view container>
      <app-notice v-if="scannerError">
        {{ scannerError }}. Please enter your address manually.
      </app-notice>
      <app-intro spacing>
        <template slot="title">
          Verify if, or how many tokens you have migrated to Roma.
        </template>
        <template slot="intro">
          Enter your æternity address and check the status of your migrations.
        </template>
      </app-intro>
      <div class="app-migration-check">
        <app-address
          @input="$store.commit('setWalletAddress', $event)"
          :value="walletAddress"
          background="#F7FAFC"
        >
          <ae-toolbar align="right">
            <ae-button @click="toggleRescan" face="toolbar">
              <ae-icon name="camera"/>
              Scan
            </ae-button>
          </ae-toolbar>
        </app-address>
        <router-link
          class="app-scan-link"
          :to="{ name: 'result', params: { pubkey: walletAddress } }"
          :disabled="!walletAddress"
        >
          <ae-button face="round" fill="primary" :disabled="!walletAddress">
            Check Migrations
          </ae-button>
        </router-link>
      </div>
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
      <ae-button class="app-scan__btn" @click="closeScanner(null)" face="icon" fill="neutral">
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

import AppNotice from '../../components/app-notice.vue'
import AppAddress from '../../components/app-address.vue'
import AppIntro from '../../components/app-intro.vue'

import mixinsScan from '../../mixins/scan'

export default {
  name: 'migration-check',
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
  data: function () {
    return { scanner: false, paused: true }
  },
  computed: {
    ...mapState(['walletAddress'])
  }
}
</script>
<style lang="scss" scoped>
.app-migration-check {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
