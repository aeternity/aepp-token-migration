<template>
  <app-view>
    <app-header>
      <app-header-nav prog="3/5" text="Enter your Aeternity account address"/>
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Enter your æternity account address
        </template>
        <template slot="intro">
          Please make sure the address below is the correct æternity address which you made.
          All AE tokens will be sent to this address.
          You cannot change the address your tokens will be sent to later!
        </template>
      </app-intro>
      <app-panel primary padding shadow>
        <app-address disabled>
          <ae-address :value="walletAddress" v-if="walletAddress" />
          <!--<ae-toolbar slot="footer"  align="right">-->
            <!--<ae-button face="toolbar">-->
              <!--<ae-icon name="save" />-->
              <!--Copy-->
            <!--</ae-button>-->
            <!--<ae-button @click="toggleRescan" face="toolbar">-->
              <!--<ae-icon name="camera" />-->
              <!--Scan-->
            <!--</ae-button>-->
          <!--</ae-toolbar>-->
        </app-address>
        <ae-check name="approve" v-model="validated">
          <ae-text face="sans-s">I am certain my address and identicon are correct</ae-text>
        </ae-check>
        <br />
        <div class="app-scan-button-group">
          <router-link class="app-scan-link" :to="{ name: 'wallets' }" :disabled="!approved">
            <ae-button face="round" fill="primary" :disabled="!approved" extend>Continue</ae-button>
          </router-link>
        </div>
        <div class="app-scan-button-group">
          <ae-button @click="toggleRescan" extend>Scan Again</ae-button>
        </div>
      </app-panel>
    </app-view>
    <qrcode-reader class="app-scan" @decode="onDecode" :paused="paused" :camera="!paused" v-show="scanner">
      <app-header>
        <app-header-nav prog="3/5" text="Enter your Aeternity account address"/>
      </app-header>
      <ae-button class="app-scan__btn" @click="closeScanner" face="icon" fill="neutral" :disabled="!walletAddress">
        <ae-icon name="close"/>
      </ae-button>
    </qrcode-reader>
  </app-view>
</template>

<script>
import { mapState } from 'vuex'
import { QrcodeReader } from 'vue-qrcode-reader'

import AeAddress from '@aeternity/aepp-components/dist/ae-address'
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeCheck from '@aeternity/aepp-components/dist/ae-check'
import AeInput from '@aeternity/aepp-components/dist/ae-input'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

import AppAddress from '../../../components/app-address.vue'
import AppIntro from '../../../components/app-intro.vue'

export default {
  name: 'scan',
  data: function () {
    return {
      scanner: true,
      address: false,
      paused: false,
      validated: false
    }
  },
  components: {
    AppAddress,
    AppIntro,
    AeAddress,
    AeIcon,
    AeText,
    AeButton,
    AeCheck,
    AeInput,
    AeToolbar,
    QrcodeReader
  },
  computed: {
    approved: function () {
      return this.validated && this.walletAddress
    },
    ...mapState([
      'walletAddress'
    ])
  },
  methods: {
    onDecode (content) {
      this.paused = true
      this.scanner = false
      this.$store.commit('setWalletAddress', content)
    },
    closeScanner () {
      this.scanner = false
    },
    toggleRescan () {
      this.paused = false
      this.scanner = true
      this.$store.commit('setWalletAddress', null)
    }
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
  margin: 2rem auto;
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
    top: 6rem;
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
