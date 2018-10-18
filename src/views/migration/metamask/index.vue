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
          <app-intro>
            <template slot="subtitle">
              Migration Process
            </template>
            <template slot="intro">
              The tokens aren't being transferred directly to your æternity address,
              but first to an AE Migration address.
              The moment that you can expect your tokens in the Mainnet, depends on the phase.
            </template>
          </app-intro>
        </app-panel>
        <app-panel padding primary>
          <ae-avatar :address="walletAddress" />
          {{ balance }}
        </app-panel>
        <app-panel padding secondary>
          <input type="text" v-model="amount" style="width: 100%; height: 40px; border: none; margin: 50px 0" />
          <br />
          <ae-button face="round" fill="secondary" extend @click="connectMetaMask(amount, walletAddress)">Migrate</ae-button>
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

import AppIntro from '../../../components/app-intro.vue'

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
      //var web3 = this.web3
      //var coinbase = await web3.eth.getCoinbase()
      //var abi = require('human-standard-token-abi')
      //var token = new web3.eth.Contract(abi, this.AEToken)
      //token.methods.balanceOf(coinbase).call().then((res) => this.setEthereumBalance(res))

      this.$getAEBalance().then((res) => this.setEthereumBalance(res))
    },

    /**
     * Connect to Metamask
     */
    async connectMetaMask (_amount, _sender) {
      //const abi = require('human-standard-token-abi')
      //const token = new this.web3.eth.Contract(abi, this.AEToken)
      //// Why is there an instance here? of the token burner
      //// var tokenBurner = new this.web3.eth.Contract(tokenBurnerAbi, this.TokenBurner)
      //const coinbase = await this.web3.eth.getCoinbase()
      ///**
      // * Payload should never be
      // * generated when there's no address
      // *
      // * always doublecheck if there is an address
      // */
      //const payload = ethereumjs
      //  .rawEncode(['uint256'], [0x80])
      //  .toString('hex') + ethereumjs.rawEncode(['uint256'], [0x34]).toString('hex') + this.web3.utils.padRight(
      //  // this.web3.utils.fromUtf8('ak_wmZUvZWrVibPM2PuSGhgWmMQXchEWgRTbwBp7tYUcPyBYHnpR').slice(2), 64
      //  this.web3.utils.fromUtf8(_sender).slice(2), 64
      //)
      //
      //token
      //  .methods
      //  .approveAndCall(this.TokenBurner, this.web3.utils.toWei(_amount, 'ether'), '0x' + payload)
      //  .send({ from: coinbase })
      //  .then((results) => {
      //    console.log(results)
      //    this.$router.push('/migration-results')
      //  })
      //
      //// AEToken.setProvider(web3.currentProvider)
      //// TokenBurner.setProvider(web3.currentProvider)
      //
      //// this.web3.eth.getAccounts((err, accs) => {
      ////  console.log(err, accs)
      //// })

      return this.$migrateTokens(_amount, this.$encodePayload(_sender))
    }
  },
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
