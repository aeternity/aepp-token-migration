<template>
  <app-view>
    <app-header>
      <app-header-nav prog="4/6" text="Provide your æternity account"/>
    </app-header>
    <app-view container>
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
          <app-address @input="updateAddress">
            <ae-toolbar align="justify">
              <span v-if="!validbase58 && (walletAddress && walletAddress.length > 0)">Invalid AE Address</span>
              <span v-else>&nbsp;</span>
              <ae-button @click="scanAddress" face="toolbar">
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
        </div>
        <div class="app-scan-button-group">
          <router-link class="app-scan-link" :to="{ name: 'wallets' }" :disabled="!approved">
            <ae-button face="round" fill="primary" :disabled="!approved" extend>
              Continue
            </ae-button>
          </router-link>
        </div>
      </app-panel>
    </app-view>
  </app-view>
</template>

<script>
import { mapState } from 'vuex'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeCheck from '@aeternity/aepp-components/dist/ae-check'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

import AppAddress from '../../../components/app-address.vue'
import AppIntro from '../../../components/app-intro.vue'

export default {
  name: 'migration-input',
  data () {
    return { validated: false }
  },
  components: {
    AppAddress,
    AppIntro,
    AeIcon,
    AeText,
    AeButton,
    AeCheck,
    AeToolbar
  },
  computed: {
    approved () {
      return this.validated && this.walletAddress && this.validbase58
    },
    validbase58: function () {
      if (!this.walletAddress) return false
      try {
        this.$base58Check(this.walletAddress)
        return true
      } catch (e) {
        return false
      }
    },
    ...mapState([
      'walletAddress'
    ])
  },
  methods: {
    scanAddress: function () {
      this.$router.push({ name: 'scan' })
    },
    updateAddress: function (value) {
      this.$store.commit('setWalletAddress', value)
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
  margin: 2rem auto 0 auto;
}

.app-scan-address {
  display: block;
  margin: 0 auto;
  width: 560px;
}
</style>
