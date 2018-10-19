<template>
  <app-view>
    <app-header>
      <app-header-nav prog="5/5" text="Prepare your transaction with MetaMask" />
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Prepare your transaction with Meta Mask
        </template>
        <template slot="intro">
          The transaction you are going to make will be transfering all
          your ERC-20 AE Tokens the AE Migration Address.
          That address will take care of the migration for you.
        </template>
      </app-intro>
      <app-panel shadow>
        <app-panel primary padding>
          <template slot="header">
            hello
          </template>
          <app-intro>
            <template slot="subtitle">
              Migration Process
            </template>
            <template slot="intro">
              The tokens aren't being transferred directly to your æternity address, <br />
              but first to an AE Migration address. The moment that you can expect <br />
              your tokens in the Mainnet, depends on the phase.
            </template>
          </app-intro>
          <ae-avatar :address="walletAddress" />
          {{ balance }}
        </app-panel>
        <app-panel primary padding>
          <app-intro>
            <template slot="subtitle">
              AE Token Balance
            </template>
            <template slot="intro">
              Define the amount of tokens you want to migrate here. You can <br />
              migrate all your tokens at once, or in multiple steps.
            </template>
          </app-intro>
          <input type="text" v-model="amount" style="width: 100%; height: 40px; border: none; margin: 50px 0" />
          <ae-button face="round" fill="secondary" extend @click="migrate(amount, walletAddress)">Migrate</ae-button>
        </app-panel>
        <app-panel padding secondary>
          <ae-icon name="info" />
          <ae-text>
            The transaction you’re about to make will not send any ETH, will only use ETH for gas.
            The amount of tokens that you send will be stored in the data tab in MetaMask.
          </ae-text>
        </app-panel>
      </app-panel>
    </app-view>
  </app-view>
</template>

<script>
import { mapState } from 'vuex'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeAvatar from '@aeternity/aepp-components/dist/ae-identicon'
import AeInput from '@aeternity/aepp-components/dist/ae-input'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

import AppIntro from '../../../../components/app-intro.vue'

export default {
  name: 'metamask',
  data: function () {
    return {
      scanner: false,
      address: false,
      addresses: [],

      /**
       * Data
       */
      balance: 0,
      amount: 0
    }
  },
  components: {
    AppIntro,
    AeButton,
    AeIcon,
    AeText,
    AeAvatar,
    AeInput,
    AeToolbar
  },
  computed: {
    ...mapState([
      'walletAddress'
    ])
  },
  methods: {

    setEthereumBalance (balance) {
      console.log('Balance', balance)
      this.$data.balance = this.$web3.utils.fromWei(balance, 'ether')
    },

    async getBalanceOf () {
      this.$getAEBalance().then((res) => this.setEthereumBalance(res))
    },

    /**
     * Connect to Metamask
     */
    async migrate (_amount, _sender) {
      return this
        .$migrateTokens(_amount, this.$encodePayload(_sender))
        .then(
          () => this.$router.push({ name: 'result' })
        )
    }
  },
  /**
   * Update Later
   */
  mounted: function () {
    this.getBalanceOf()
    this.$checkNetwork(42)
    this.$getAEBalance().then((res) => console.log(`balance in AE: `, res))
    this.$getETHBalance().then((res) => console.log(`balance in eth: `, res))
    this.$hasEnoughETHForGas().then((res) => console.log(`balance eth gas: `, res))
    this.$estimateGas(this.$encodePayload(this.walletAddress)).then((res) => console.log(`estimate: `, res))
  },

  /**
   * Check if the user is logged in
   */
  beforeRouteEnter (to, from, next) {
    return next(vm => {
      return vm
        .$isLoggedInMetamask()
        .catch(() => vm.$router.push({
          name: 'wallets'
        }))
    })
  }
}
</script>
<style lang="scss" scoped></style>
