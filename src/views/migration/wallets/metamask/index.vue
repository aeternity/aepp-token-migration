<template>
  <app-view>
    <!-- App Header -->
    <app-header>
      <app-header-nav prog="6/6" text="Prepare your transaction with MetaMask" />
    </app-header>

    <!-- App View -->
    <app-view container>
      <app-intro>
        <template slot="title">
          Prepare your transaction <br /> with Meta Mask
        </template>
        <template slot="intro">
          The transaction you are about to make will transfer your AE <br />
          Tokens to the AE Migration Address. Once the tokens are <br />
          transferred to this address we will take care of everything else for you.
        </template>
      </app-intro>
      <app-panel shadow>
        <app-panel primary padding border>
          <template slot="header">
            <img :src="require('../../../../assets/graphics/metamask-fox.svg')" alt="Metamask">
            Migrating with MetaMask
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
          <span class="app-icons">
            <ae-identicon :address="coinbase" v-if="coinbase" />
          </span>
          <div class="app-icons">
            <app-jazzicon :address="$tokenContract" v-if="$tokenContract" />
          </div>
          <div class="app-icons">
            <app-jazzicon :address="$tokenBurner" v-if="$tokenBurner" />
          </div>
          <div class="app-icons">
            <ae-identicon :address="walletAddress" v-if="walletAddress" />
          </div>
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
          <ae-input label="Amount" :placeholder="balance" aemount>
            <ae-text slot="header" fill="black">AE Tokens</ae-text>
            <ae-toolbar align="justify" slot="footer">
              <span>GAS: {{ gasEstimate }} ETH</span>
              <ae-button @click="setEntireBalance" face="toolbar">
                <ae-icon name="left-more" />
                Send Entire Balance
              </ae-button>
            </ae-toolbar>
          </ae-input>
          <input type="text" v-model="amount" style="width: 100%; height: 40px; border: none; margin: 50px 0" />
          <ae-button face="round" fill="secondary" @click="migrate(amount, walletAddress)">
            Make Transaction
          </ae-button>
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

    <!-- Modal -->
    <app-modal v-if="false">
      <app-panel primary padding shadow>
        <template slot="header">
          hello
        </template>
        hello
      </app-panel>
    </app-modal>
  </app-view>
</template>

<script>
import { mapState } from 'vuex'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeIdenticon from '@aeternity/aepp-components/dist/ae-identicon'
import AeInput from '@aeternity/aepp-components/dist/ae-input'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

import AppModal from '../../../../sections/app-modal/index.vue'
import AppIntro from '../../../../components/app-intro.vue'
import AppJazzicon from '../../../../components/app-jazzicon.vue'

export default {
  name: 'metamask',
  data: function () {
    return {
      balance: 0,
      amount: 0,
      coinbase: null,
      gasEstimate: 0
    }
  },
  components: {
    AeButton,
    AeIcon,
    AeText,
    AeIdenticon,
    AeInput,
    AeToolbar,
    AppModal,
    AppIntro,
    AppJazzicon
  },
  computed: {
    ...mapState([
      'walletAddress'
    ])
  },
  methods: {

    setEthereumBalance (balance) {
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
    },

    /**
     * Set Entire balance
     */
    async setEntireBalance () {
      const balance = await this.$getAEBalance()

      Object.assign(this.$data, { balance })
    }
  },
  /**
   * Update Later
   */
  mounted: async function () {
    if (!this.walletAddress) {
      return this.$router.push({ name: 'migration' })
    }

    const coinbase = await this.$getCoinbase()
    const gasEstimate = await this.$estimateGas(
      this.$encodePayload(this.walletAddress)
    )

    Object.assign(this.$data, { coinbase, gasEstimate })
  }
}
</script>
<style lang="scss" scoped></style>
