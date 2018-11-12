<template>
  <app-view>
    <app-header>
      <app-header-nav text="Statuspage"/>
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Are you ready for <br /> the æternity Mainnet?
        </template>
        <template slot="intro">
          Enter the hash of the transaction you made on <br />
          MyEtherWallet, to check if you are ready.
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

import AppAddress from '../../components/app-address.vue'
import AppIntro from '../../components/app-intro.vue'

export default {
  name: 'migration-check',
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
  data: function () {
    return {
      scanner: false,
      address: false,
      paused: true
    }
  },
  computed: {
    ...mapState([
      'walletAddress'
    ])
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
.app-migration-check {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
</style>
