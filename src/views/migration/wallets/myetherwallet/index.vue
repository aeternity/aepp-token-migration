<template>
  <app-view>
    <app-header>
      <app-header-nav prog="6/6" text="Prepare your transaction with MetaMask"/>
    </app-header>
    <!-- App View -->
    <app-view container>
      <app-intro>
        <template slot="title">
          Prepare your transaction <br/> with MyEtherWallet
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
            <img :src="require('../../../../assets/graphics/myetherwallet.svg')" alt="MyEtherWallet">
            Migrating with MyEtherWallet
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
              <span>
                <ae-identicon address="0x• ••• ••• ••• ••• ••• ••• ••• ••• ••• ••• ••• •••"/>
              </span>
              <h4>Your Ethereum Account</h4>
              <p>0x• ••• ••• ••• ••• ••• ••• ••• ••• ••• ••• ••• •••</p>
            </li>
            <li>
              <span>
                <ae-identicon :address="$tokenContract" v-if="$tokenContract"/>
              </span>
              <h4>AE Token Contract</h4>
              <p v-html="$options.filters.chunk($tokenContract)"></p>
            </li>
            <li>
              <span>
                <ae-identicon :address="$tokenBurner" v-if="$tokenBurner"/>
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
          <ae-input for="amount" type="number" label="Amount" v-model="amount" placeholder="0.0" aemount>
            <ae-text slot="header" fill="black">AE Tokens</ae-text>
            <ae-toolbar align="justify" slot="footer">
              <span>Estimated GAS: {{ gasPrice }} ETH</span>
            </ae-toolbar>
          </ae-input>
          <br />
          <app-url :value="migrate">
            <ae-toolbar align="justify" fill="neutral">
              <span>Your Migration payload is saved in this link</span>
              <ae-button face="toolbar">
                <ae-icon name="copy"/>
                COPY ADDRESS
              </ae-button>
            </ae-toolbar>
          </app-url>
          <br />
          <ae-button
            @click="startMigration"
            class="app-center-block ae-button-ledger"
            face="round"
            fill="secondary">
            Start Migration on MEW
          </ae-button>
        </app-panel>
        <app-panel class="app-text-center" padding secondary>
          <ae-icon name="info" size="2rem" class="app-highlight"/>
          <ae-text face="sans-s" :weight="700">
            The transaction you’re about to make will not send any ETH, it will only use ETH for gas. The <br />
            amount of tokens that you send will be stored in the payload, which can be found in <br />
            <span class="app-highlight">
              Generated Data in MyEtherWallet.
            </span>
          </ae-text>
        </app-panel>
      </app-panel>
    </app-view>

    <!-- Modal for processing -->
    <app-modal v-if="modal && name === 'processing'" @click="closeModal">
      <app-panel primary padding shadow>
        <template slot="header">
          <img :src="require('../../../../assets/graphics/myetherwallet.svg')" alt="MyEtherWallet">
          Migrating with MyEtherWallet
        </template>
        <app-intro>
          <template slot="title">
            <ae-icon name="reload" class="app-rotate"/>
          </template>
          <template slot="subtitle">
            We have generated the transaction link
          </template>
          <template slot="intro">
            We have generated your transaction, what is left is for you to <br />
            do is to proceed at MEW and continue with the migration. <br />
            Afterwards you can check the transactions you've done already.
          </template>
        </app-intro>
        <div class="app-myetherwallet-button-group">
          <router-link :to="{ name: 'result', params: { pubkey: walletAddress } }">
            <ae-button face="round" fill="neutral">
              Check Transactions
            </ae-button>
          </router-link>
          <a :href="migrate" target="_blank">
            <ae-button class="ae-button-ledger" face="round" fill="primary">
              Proceed at MEW
            </ae-button>
          </a>
        </div>
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
import AppUrl from '../../../../components/app-url.vue'

import mixinsModal from '../../../../mixins/modal'

export default {
  name: 'migration-wallets-myetherwallet',
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
    AppProcess,
    AppUrl
  },
  data: function () {
    return { amount: null, gasPrice: '0' }
  },
  computed: {
    migrate () {
      if (!this.walletAddress) return
      return this.$generateMEWURI(
        this.$tokenContract,
        this.$generatePayload(
          this.amount ? this.amount : '0',
          this.$encodeExtraData(this.walletAddress)
        )
      )
    },
    ...mapState([
      'walletAddress'
    ])
  },
  methods: {
    startMigration () {
      this.openModal('processing')
    }
  },
  mounted: async function () {
    if (!this.walletAddress) {
      return this.$router.push({ name: 'migration' })
    }
  }
}
</script>
<style lang="scss" scoped>
.app-myetherwallet-button-group {
  display: block;
  text-align: center;

  & /deep/ button {
    width: 240px;
    margin: 0 1rem;
  }
}
</style>
