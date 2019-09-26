<template>
  <app-view>
    <app-allert v-if="migrated">
      You already have migrated your tokens. More information with the following TX Hash: {{ txHash }}
    </app-allert>
      <app-header>
        <app-header-nav prog="6/6" text="Prepare your transaction with MetaMask"/>
      </app-header>
      <app-view container>
        <app-intro spacing>
          <template slot="title">
            Prepare your transaction with Meta Mask
          </template>
          <template slot="intro">
            You are about to transfer AE tokens to the AE Token Contract, which sends them to the AE Migration Contract.
            The Migration Contract takes care of everything else for you.
          </template>
        </app-intro>
        <app-panel shadow>
          <app-panel primary padding>
            <template slot="header">
              <img :src="require('../../../assets/graphics/metamask-fox.svg')" alt="Metamask">
              Migrating with MetaMask
            </template>
            <app-intro>
              <template slot="subtitle">
                Migration Process
              </template>
              <template slot="intro">
                The tokens aren't being transferred directly to your æternity address. The moment that you can expect
                your tokens in the Mainnet, depends on the phase.
              </template>
            </app-intro>
            <app-process>
              <li>
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
                  <ae-identicon :address="walletAddress" v-if="walletAddress"/>
                </span>
                <h4>Your AE Mainnet Address</h4>
                <p v-html="$options.filters.chunk(walletAddress)"></p>
              </li>
            </app-process>
          </app-panel>
          <app-panel primary>
            <app-intro>
              <template slot="subtitle">
                AE Token Balance
              </template>
              <template slot="intro">
                {{ introTemplate }}
              </template>
            </app-intro>
            <ae-input readonly for="amount" type="number" label="Amount" v-model="amount" :placeholder="balance" aemount>
              <ae-text  slot="header" fill="black" class="ae-text-width">AE Tokens</ae-text>
              <ae-toolbar align="justify" slot="footer">
                <span>GAS: {{ gasPrice }} ETH</span>
              </ae-toolbar>
            </ae-input>
            <div class="app-check-spacing">
              <ae-check name="approve" v-model="checked">
                <ae-text face="sans-s">
                  I agree to the <a href="//migrate.aeternity.com/#/tos" target="_blank">Terms of Service</a>
                </ae-text>
              </ae-check>
            </div>
            <ae-button
              class="app-center-block"
              face="round"
              fill="secondary"
              @click="migrate(amount, walletAddress, coinbase)"
              :disabled="!validated"
            >
              Make Transaction
            </ae-button>
          </app-panel>
          <app-panel v-if="!migrated" class="app-text-center" padding secondary>
            <ae-icon name="info" size="2rem" class="app-highlight"/>
            <ae-text face="sans-s" :weight=700>
              The transaction you’re about to make will not send any ETH, will only use ETH for gas. The amount of tokens
              that you send will be stored in the
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
            <img :src="require('../../../assets/graphics/metamask-fox.svg')" alt="Metamask">
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
            <img :src="require('../../../assets/graphics/metamask-fox.svg')" alt="Metamask">
            Migrating with MetaMask
          </template>
          <app-intro>
            <template slot="title">
              <ae-icon name="reload" class="app-rotate"/>
            </template>
            <template slot="subtitle">
              Please confirm the transaction in MetaMask
            </template>
            <template slot="intro">
              Please hold on for a bit. As soon as the transaction is successful, we will forward you to the result page.
            </template>
          </app-intro>
        </app-panel>
      </app-modal>

      <!-- Modal for try-again -->
      <app-modal v-if="modal && name === 'try-again'" @click="closeModal">
        <app-panel primary padding shadow>
          <template slot="header">
            <img :src="require('../../../assets/graphics/metamask-fox.svg')" alt="Metamask">
            Migrating with MetaMask
          </template>
          <app-intro>
            <template slot="title">
              <ae-icon name="info"/>
            </template>
            <template slot="subtitle">
              {{ errorTitle }}
            </template>
            <template slot="intro">
              Migration did not take place. This does not affect your <br />
              tokens, you are safe to try again.
              <div v-if="reverted"> 
                <strong> Failed Tx: </strong> {{ txHash }}
              </div>
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
import AeCheck from '@aeternity/aepp-components/dist/ae-check'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

import AppModal from '../../../sections/app-modal/index.vue'
import AppIntro from '../../../components/app-intro.vue'
import AppJazzicon from '../../../components/app-jazzicon.vue'
import AppProcess from '../../../components/app-process.vue'
import AppAllert from '../../../components/app-alert.vue'

import mixinsModal from '../../../mixins/modal'

export default {
  name: 'migration-wallets-metamask',
  mixins: [mixinsModal],
  components: {
    AeButton,
    AeIcon,
    AeText,
    AeIdenticon,
    AeInput,
    AeCheck,
    AeToolbar,
    AppModal,
    AppIntro,
    AppJazzicon,
    AppProcess,
    AppAllert
  },
  data () {
    return {
      balance: '0',
      amount: null,
      coinbase: null,
      gasPrice: '0',
      checked: false,
      migrated: false,
      txHash: null,
      reverted: false
    }
  },
  computed: {
    validated: function () {
      return Number(this.amount) && this.checked && !this.migrated
    },
    ...mapState([
      'walletAddress'
    ]),
    introTemplate: function () {
      return this.migrated ? `The balance has already been migrated in ${ this.txHash }` : `The below information is read only. That is all the balance you have currently on your ETH account for migration. You are going to migrate all your tokens at once.`
    },
    errorTitle() {
      return this.reverted ? 'The transaction has been reverted!' : 'Something went wrong'
    },
  },
  methods: {
    /**
     * Connect to Metamask
     */
    async migrate (_amount, _sender, _coinbase) {
      this.openModal('processing')
      try {
        const res = await this.$migrateTokens(_amount, _sender, _coinbase)
        this.checkForRevert(res)
        this.$store.commit('setMigrationHash', res.txHash)

        await this.$router.push({
          name: 'result',
          params: {
            pubkey: this.walletAddress
          }
        })
      } catch (e) {
        this.openModal('try-again')
      }
    },

    /**
     * Get Details for the current ETH address
     */
    async getDetails () {
      const infoObj = await this.$getAEInfo()
      this.migrated = infoObj.migrated
      this.txHash = infoObj.migrateTxHash

      Object.assign(this.$data, {
        amount: this.$web3.utils.fromWei(infoObj.tokens, 'ether')
      })
    },

    checkForRevert(tx) {
      if (this.$isReverted(tx)) {
        this.reverted = true
        this.txHash = tx.txHash
        throw new Error()
      }
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

    await this.getDetails()
  }
}
</script>
<style lang="scss" scoped>

.ae-text-width {
      width: 110px;
      position: relative
}

</style>
