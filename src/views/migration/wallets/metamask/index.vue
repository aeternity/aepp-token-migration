<template>
  <app-view>
    <app-header>
      <app-header-nav prog="6/6" text="Prepare your transaction with MetaMask"/>
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Prepare your transaction <br/> with Meta Mask
        </template>
        <template slot="intro">
          The transaction you are about to make will transfer your AE <br/>
          Tokens to the AE Migration Address. Once the tokens are <br/>
          transferred to this address we will take care of everything else for you.
        </template>
      </app-intro>
      <app-panel shadow>
        <app-panel primary padding>
          <template slot="header">
            <img :src="require('../../../../assets/graphics/metamask-fox.svg')" alt="Metamask">
            Migrating with MetaMask
          </template>
          <app-intro>
            <template slot="subtitle">
              Migration Process
            </template>
            <template slot="intro">
              The tokens aren't being transferred directly to your æternity address, <br/>
              but first to an AE Migration address. The moment that you can expect <br/>
              your tokens in the Mainnet, depends on the phase.
            </template>
          </app-intro>
          <app-process>
            <li>
              <!-- TODO: Ask Ray if we should have jazzicon representation for the Metamask wallet icon -->
              <span v-if="false">
                <ae-identicon :address="coinbase" v-if="coinbase"/>
              </span>
              <span>
                <app-jazzicon :address="coinbase" v-if="coinbase"/>
              </span>
              <h4>Your Ethereum Account</h4>
              <p v-html="$options.filters.chunk(coinbase)"></p>
            </li>
            <li>
              <span>
                <app-jazzicon :address="$tokenContract" v-if="$tokenContract"/>
              </span>
              <h4>AE Token Contract</h4>
              <p v-html="$options.filters.chunk($tokenContract)"></p>
            </li>
            <li>
              <span>
                <app-jazzicon :address="$tokenBurner" v-if="$tokenBurner"/>
              </span>
              <h4>AE Migration Contract</h4>
              <p v-html="$options.filters.chunk($tokenBurner)"></p>
            </li>
            <li>
              <span>
                <ae-identicon :address="walletAddress" v-if="walletAddress"/>
              </span>
              <h4>Your AE Mainnet Address</h4>
              <p v-html="$options.filters.chunk(walletAddress)"></p>
            </li>
          </app-process>
        </app-panel>
        <app-panel primary padding centered>
          <app-intro>
            <template slot="subtitle">
              AE Token Balance
            </template>
            <template slot="intro">
              Define the amount of tokens you want to migrate here. You can <br/>
              migrate all your tokens at once, or in multiple steps.
            </template>
          </app-intro>
          <ae-input for="amount" type="number" label="Amount" v-model="amount" :placeholder="balance" aemount>
            <ae-text slot="header" fill="black">AE Tokens</ae-text>
            <ae-toolbar align="justify" slot="footer">
              <span>GAS: {{ gasPrice }} ETH</span>
              <ae-button @click="setEntireBalance" face="toolbar">
                <ae-icon name="left-more"/>
                Send Entire Balance
              </ae-button>
            </ae-toolbar>
          </ae-input>
          <br />
          <ae-button
            class="app-center-block"
            face="round"
            fill="secondary"
            @click="migrate(amount, walletAddress)">
            Make Transaction
          </ae-button>
        </app-panel>
        <app-panel class="app-text-center" padding secondary>
          <ae-icon name="info" size="2rem" class="app-highlight"/>
          <ae-text face="sans-s" :weight=700>
            The transaction you’re about to make will not send any ETH, will only use ETH for gas. The <br/>
            amount of tokens that you send will be stored in the
            <span class="app-highlight">
              data tab in MetaMask.
            </span>
          </ae-text>
        </app-panel>
      </app-panel>
    </app-view>
    <!-- Modal for not-enough-eth -->
    <app-modal v-if="modal && name === 'not-enough-eth'" @click="closeModal">
      <app-panel primary padding shadow>
        <template slot="header">
          <img :src="require('../../../../assets/graphics/metamask-fox.svg')" alt="Metamask">
          Migrating with MetaMask
        </template>
        <app-intro>
          <template slot="title">
            <ae-icon name="card"/>
          </template>
          <template slot="subtitle">
            Not enough ETH
          </template>
          <template slot="intro">
            There is not enough ether to complete this transaction
          </template>
          <ae-button @click="closeModal" face="round" fill="secondary" style="width: 260px">
            Close
          </ae-button>
        </app-intro>
      </app-panel>
    </app-modal>

    <!-- Modal for processing -->
    <app-modal v-if="modal && name === 'processing'">
      <app-panel primary padding shadow>
        <template slot="header">
          <img :src="require('../../../../assets/graphics/metamask-fox.svg')" alt="Metamask">
          Migrating with MetaMask
        </template>
        <app-intro>
          <template slot="title">
            <ae-icon name="reload" class="app-rotate"/>
          </template>
          <template slot="subtitle">
            We are migrating your tokens
          </template>
          <template slot="intro">
            Please hold on for a bit. As soon as the transaction is <br />
            successful, we will forward you to the result page.
          </template>
        </app-intro>
      </app-panel>
    </app-modal>

    <!-- Modal for try-again -->
    <app-modal v-if="modal && name === 'try-again'" @click="closeModal">
      <app-panel primary padding shadow>
        <template slot="header">
          <img :src="require('../../../../assets/graphics/metamask-fox.svg')" alt="Metamask">
          Migrating with MetaMask
        </template>
        <app-intro>
          <template slot="title">
            <ae-icon name="info"/>
          </template>
          <template slot="subtitle">
            Something went wrong
          </template>
          <template slot="intro">
            The migration didn't took place. This doesn’t affect your <br />
            tokens, you are safe to try the migration again.
          </template>
          <ae-button @click="closeModal" face="round" fill="secondary" style="width: 260px">
            Try Again
          </ae-button>
        </app-intro>
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
import AppProcess from '../../../../components/app-process.vue'

import mixinsModal from '../../../../mixins/modal'

/**
 * TODO: People can send 0 Token transfers, don't let them do that
 */
export default {
  name: 'migration-wallets-metamask',
  mixins: [mixinsModal],
  components: {
    AeButton,
    AeIcon,
    AeText,
    AeIdenticon,
    AeInput,
    AeToolbar,
    AppModal,
    AppIntro,
    AppJazzicon,
    AppProcess
  },
  data () {
    return {
      balance: '0',
      amount: null,
      coinbase: null,
      gasPrice: '0'
    }
  },
  computed: {
    ...mapState([
      'walletAddress'
    ])
  },
  methods: {
    /**
     * Connect to Metamask
     */
    async migrate (_amount, _sender) {
      this.openModal('processing')
      return this
        .$migrateTokens(
          _amount,
          this.$encodeExtraData(_sender)
        )
        .then(
          () => this.$router.push({
            name: 'result',
            params: {
              pubkey: this.walletAddress
            }
          })
        )
        .catch(
          () => this.openModal('try-again')
        )
    },

    /**
     * Set Entire balance
     */
    async setEntireBalance () {
      const AEBalance = await this.$getAEBalance()

      Object.assign(this.$data, {
        amount: this.$web3.utils.fromWei(AEBalance, 'ether')
      })
    }
  },

  /**
   * While mounting check for several things
   *
   * Check if there's a wallet already in the system
   *
   * 1. AE Balance
   * 2. coinbase (eth wallet)
   * 3. gasEstimate
   */
  mounted: async function () {
    if (!this.walletAddress) {
      return this.$router.push({ name: 'migration' })
    }

    /**
     * TODO: - Setup modal for when there is not enough gas
     *       - Ask Ray for text for the modal
     */
    try {
      await this.$hasEnoughETHForGas()
    } catch (e) {
      this.openModal('not-enough-eth')
    }

    const gasPrice = await this.$web3.eth.getGasPrice()
    const coinbase = await this.$getCoinbase()

    Object.assign(this.$data, {
      coinbase,
      gasPrice: this.$web3.utils.fromWei(gasPrice, 'ether')
    })
  }
}
</script>
<style lang="scss" scoped></style>
