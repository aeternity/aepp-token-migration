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
        <div class="app-read-error" v-if="error">
          {{ error }}
        </div>
        <div class="app-scan-address">
          <app-address :value="walletAddress" disabled>
            <ae-toolbar align="left">
              <span v-if="!validbase58 && (walletAddress && walletAddress.length > 0)">
                Invalid AE Address
              </span>
            </ae-toolbar>
          </app-address>
        </div>
        <div class="app-scan-button-group">
          <ae-button @click="verifyAddress" face="round" fill="primary" :disabled="!approved" extend>
            <span v-if="!loading">
              Compare address with Ledger
            </span>
            <span v-else>
              <ae-icon name="reload" class="app-rotate"/>
              Confirm address on ledger...
            </span>
          </ae-button>
        </div>
      </app-panel>
    </app-view>

    <!-- Modal for Ledger Wallet -->
    <app-modal v-if="modal" dark>
      <router-link :to="{ name: 'migration' }" slot="button">
        <ae-button face="icon" fill="neutral">
          <ae-icon name="close"/>
        </ae-button>
      </router-link>
      <app-panel padding shadow>
        <div class="app-read-error" v-if="error">
          {{ error }}
        </div>
        <br />
        <app-tutorial>
          <img
            slot="image"
            :src="require('../../../assets/images/tutorial-ledger/1.0-install-ledger-app.svg')"
          />
          <template slot="info">
            <h1>Connect the Ledger with your computer</h1>
            <p>And open the æternity app on the Ledger</p>
            <ae-button
              @click="fetchAddress"
              face="round"
              fill="secondary"
              class="ae-button-ledger"
              :disabled="loading"
            >
              Continue
            </ae-button>
            <h4 v-if="loading">
              <ae-icon name="reload" class="app-rotate"/>
              Searching for Ledger
            </h4>
          </template>
        </app-tutorial>
      </app-panel>
    </app-modal>
  </app-view>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import TransportU2F from '@ledgerhq/hw-transport-u2f'
import Ae from '@aeternity/ledger-app-api'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeCheck from '@aeternity/aepp-components/dist/ae-check'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

import AppIntro from '../../../components/app-intro.vue'
import AppAddress from '../../../components/app-address.vue'
import AppNotice from '../../../components/app-notice.vue'
import AppTutorial from '../../../components/app-tutorial.vue'

import mixinsModal from '../../../mixins/modal'

export default {
  name: 'migration-read',
  mixins: [mixinsModal],
  components: {
    AeButton,
    AeIcon,
    AeText,
    AeCheck,
    AeToolbar,
    AppIntro,
    AppAddress,
    AppNotice,
    AppTutorial
  },
  data: function () {
    return {
      error: null,
      validbase58: false,
      loading: false
    }
  },
  computed: {
    approved: function () {
      return this.walletAddress && this.validbase58 && !this.loading
    },
    ...mapState([
      'walletAddress'
    ])
  },
  methods: {
    fetchAddress: async function () {
      this.loading = true

      let address
      let transport
      let ae

      try {
        transport = await TransportU2F.create()
        ae = new Ae(transport)
        address = await ae.getAddress(0)
      } catch (e) {
        this.loading = false
        this.error = e.message
        return
      }

      try {
        this.$base58Check(address)
        this.validbase58 = true
      } catch (e) {
        this.error = e.message
        this.validbase58 = false
      }

      this.setWalletAddress(address)

      this.error = null
      this.loading = false

      this.closeModal()
    },
    verifyAddress: async function () {
      this.error = null
      this.loading = true

      let transport = await TransportU2F.create()
      let ae = new Ae(transport)

      /**
       * Waiting for about 2 minutes for the user
       * to verify the address
       */
      // transport.setExchangeTimeout(900000)

      try {
        await ae.getAddress(0, true)
        this.loading = false
        this.$router.push({ name: 'wallets' })
      } catch (e) {
        this.loading = false
        this.error = e.message
        return
      }

      this.error = null
      this.loading = false
    },
    ...mapMutations(['setWalletAddress'])
  },
  mounted () {
    this.error = null
    this.loading = false
    this.openModal(null)
  }
}
</script>
<style lang="scss" scoped>
.app-read-error {
  @extend %face-sans-l;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-primary;
  color: $color-white;
  font-size: 0.875rem;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
}

.app-read-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-scan-link {
  width: 100%;
}

.app-scan-button-group {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 380px;
  margin: 2rem auto 0 auto;
}

.app-scan-address {
  display: block;
  margin: 0 auto;
  width: 560px;
}
</style>
