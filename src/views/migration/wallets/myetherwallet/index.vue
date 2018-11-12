<template>
  <app-view>
    <app-header>
      <app-header-nav prog="6/6" text="Prepare your transaction with MyEtherWallet"/>
    </app-header>
    <!-- App View -->
    <app-view container>
      <app-intro>
        <template slot="title">
          Prepare your transaction <br/> with MyEtherWallet
        </template>
        <template slot="intro">
          You are about to transfer AE tokens to the AE Token Contract, which <br/>
          sends them to the AE Migration Contract. The Migration Contract <br/>
          takes care of everything else for you.
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
              The tokens aren't being transferred directly to your æternity address. <br/>
              The moment that you can expect your tokens in the Mainnet,<br/>
              depends on the phase.
            </template>
          </app-intro>
          <app-process>
            <li>
              <span></span>
              <h4>Your Ethereum Account</h4>
              <p>0x• ••• ••• ••• ••• ••• ••• ••• ••• ••• ••• ••• •••</p>
            </li>
            <li>
              <span>
                <img :src="require('../../../../assets/graphics/aeternity-contract.png')" alt="æternity contract">
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
          <app-url :value="migrate" disabled>
            <ae-toolbar align="justify" fill="neutral">
              <span>Your Migration payload is saved in this link</span>
              <ae-button face="toolbar">
                <ae-icon name="copy"/>
                COPY ADDRESS
              </ae-button>
            </ae-toolbar>
          </app-url>
          <div class="app-check-spacing">
            <ae-check name="approve" v-model="validated">
              <ae-text face="sans-s">
                I agree to the <a href="//migrate.aeternity.com/#/tos" target="_blank">Terms of Service</a>
              </ae-text>
            </ae-check>
          </div>
          <ae-button
            @click="startMigration"
            class="app-center-block ae-button-ledger"
            face="round"
            fill="secondary"
            :disabled="!validated"
          >
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

    <!-- Step process -->
    <app-modal v-if="modal && name === 'step'" @click="closeModal">
      <app-panel tertiary padding shadow v-if="step === 1">
        <template slot="header">
          <img :src="require('../../../../assets/graphics/myetherwallet.svg')" alt="MyEtherWallet">
          Migrating with MyEtherWallet
        </template>
        <app-row>
          <div class="app-myetherwallet-screenshot">
            <img :src="require('../../../../assets/graphics/screenshot.png')" alt="MyEtherWallet">
          </div>
          <app-separator />
          <app-column size="small">
            <app-intro align="left">
              <template slot="subtitle">
                You will be forwarded to the transaction link on MyEtherWallet
              </template>
              <template slot="intro">
                The transaction form will be pre-filled and
                <span class="app-highlight">
                  should not be changed!
                </span> <br /> <br />
                Continue for more information, before proceeding.
              </template>
            </app-intro>
            <ae-button @click="step = 2" face="round" fill="secondary" extend>
              Continue
            </ae-button>
          </app-column>
        </app-row>
      </app-panel>
      <app-panel tertiary padding shadow v-if="step === 2 || step === 3">
        <template slot="header">
          <img :src="require('../../../../assets/graphics/myetherwallet.svg')" alt="MyEtherWallet">
          Migrating with MyEtherWallet
        </template>
        <app-row>
          <div class="app-myetherwallet-screenshot">
            <img :src="require('../../../../assets/graphics/screenshot-2.png')" alt="MyEtherWallet">
          </div>
          <app-separator />
          <app-column size="small">
            <ul class="app-myetherwallet-list">
              <li>
                <span>1</span>
                Address of the AE Token Contract.
                Learn more about token transfer <a href="#">here</a>.
              </li>
              <li>
                <span>2</span>
                Amount of <strong>ETH</strong> to send to the aeternity token contract, this is
                <strong>not</strong> the <strong>AE</strong> amount
                <div class="app-highlight">
                  This field must to be zero.
                </div>
              </li>
              <li>
                <span>3</span>
                Gas needed for the contract’s executions.
              </li>
              <li>
                <span>4</span>
                Dataload included in the transaction, It contains the
                <strong>AE Migration Address</strong>, your <strong>AE Mainnet Account</strong>
                and the <strong>Amount of AE</strong> Decode dataload
                <a href="//verify-data.aeternity.com" target="_blank">here</a>.
              </li>
              <li>
                <a :href="migrate" target="_blank" v-if="step === 2">
                  <ae-button @click="step = 3" face="round" fill="secondary" extend>
                    Migrate on MEW
                  </ae-button>
                </a>
                <router-link :to="{ name: 'result', params: { pubkey: walletAddress } }" v-if="step === 3">
                  <ae-button @click="step = 3" face="round" fill="alternative" extend>
                    Check Migrations
                  </ae-button>
                </router-link>
              </li>
            </ul>
          </app-column>
        </app-row>
        <div class="app-myetherwallet-notification" v-if="step === 2">
          When you are done come back to check your transaction!
        </div>
        <div class="app-myetherwallet-notification" v-else-if="step === 3">
          Closed the MyEtherWallet transaction too soon? <a :href="migrate" target="_blank">Try again</a>
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
import AeCheck from '@aeternity/aepp-components/dist/ae-check'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

import AppModal from '../../../../sections/app-modal/index.vue'
import AppIntro from '../../../../components/app-intro.vue'
import AppJazzicon from '../../../../components/app-jazzicon.vue'
import AppProcess from '../../../../components/app-process.vue'
import AppUrl from '../../../../components/app-url.vue'
import AppRow from '../../../../components/app-row.vue'
import AppSeparator from '../../../../components/app-separator.vue'
import AppColumn from '../../../../components/app-column.vue'

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
    AeCheck,
    AeToolbar,
    AppModal,
    AppIntro,
    AppJazzicon,
    AppProcess,
    AppUrl,
    AppRow,
    AppSeparator,
    AppColumn
  },
  data: function () {
    return { amount: null, gasPrice: '0', step: 0, validated: false }
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
      this.step = 1
      this.openModal('step')
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
.app-myetherwallet-screenshot {
  background: #EEF3F7;
  width: 50%;
}

.app-myetherwallet-button-group {
  display: block;
  text-align: center;

  & /deep/ button {
    width: 240px;
    margin: 0 1rem;
  }
}

.app-myetherwallet-list {
  padding: 0 0 0 0.5rem;
  margin: 0 0 1rem 2rem;
  text-align: left;

  > li {
    @extend %face-sans-l;

    position: relative;
    list-style: none;
    font-size: 1rem;
    color: #203040;
    line-height: 1.5;
    margin-bottom: 1rem;

    a {
      text-decoration: underline;
    }

    &:last-child > a {
      text-decoration: none;
    }

    > span {
      display: inline-block;
      border-radius: 50%;
      text-align: center;
      vertical-align: center;
      line-height: 16px;
      position: absolute;
      top: 0;
      left: -1.5rem;
      width: 16px;
      height: 16px;
      background: $color-primary;
      color: $color-white;
      font-size: 0.725rem;
      font-weight: bold;
    }
  }
}

.app-myetherwallet-notification {
  display: block;
  position: relative;
  margin: 0 -3rem -3rem -3rem;
  background: #D3DCE6;
  text-align: center;
  padding: 0.5rem;
  color: #203040;
  font-size: 1rem;
}
</style>
