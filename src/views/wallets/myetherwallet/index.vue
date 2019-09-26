<template>
  <app-view>
    <app-allert v-if="migrated">
      You already have migrated your tokens. More information with the following TX Hash: {{ txHash }}
    </app-allert>
    <app-header>
      <app-header-nav prog="6/6" text="Prepare your transaction with MyEtherWallet"/>
    </app-header>
    <!-- App View -->
    <app-view container>
      <app-intro spacing>
        <template slot="title">
          Prepare your transaction with MyEtherWallet And
        </template>
        <template slot="intro">
          You are about to transfer AE tokens to the AE Token Contract, which sends them to the AE Migration Contract.
          The Migration Contract takes care of everything else for you.
        </template>
      </app-intro>
      <app-panel shadow>
        <app-panel primary padding>
          <template slot="header">
            <img :src="require('../../../assets/graphics/myetherwallet.svg')" alt="MyEtherWallet">
            Migrating with MyEtherWallet
          </template>
          <app-panel>
            <app-intro>
              <template slot="subtitle">
                AE Token Balance
              </template>
              <template slot="intro">
                <p>
                  {{ introTemplate }}
                </p>
              </template>
            </app-intro>
            <ae-input
              readonly
              for="amount"
              type="number"
              label="Amount to migrate"
              v-model="amount"
              placeholder="0.0"
              aemount
            >
              <ae-text slot="header" fill="black">AE Tokens</ae-text>
              <ae-toolbar align="justify" slot="footer">
                <span>Estimated GAS: {{ gasPrice }} ETH</span>
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
              @click="startMigration"
              class="app-center-block ae-button-ledger"
              face="round"
              fill="secondary"
              :disabled="!validated"
            >
              Start Migration on MEW
            </ae-button>
          </app-panel>
          <hr class="app-horizontal-line" />
          <app-intro>
            <template slot="subtitle">
              Migration Process
            </template>
            <template slot="intro">
              The tokens aren't being transferred directly to your æternity address. <br />
              See how the migration process looks like
            </template>
          </app-intro>
          <app-process collapsed>
            <li>
              <span></span>
              <h4>Your Ethereum Account</h4>
              <p>0x• ••• ••• ••• ••• ••• ••• ••• ••• ••• ••• ••• •••</p>
            </li>
            <li>
              <span>
                <ae-identicon :address="walletAddress" v-if="walletAddress"/>
              </span>
              <h4>Your AE Mainnet Address</h4>
              <p v-html="$options.filters.chunk(walletAddress)"></p>
            </li>
          </app-process>
          <hr v-if="!migrated" class="app-horizontal-line" />
        </app-panel>
        <app-panel v-if="!migrated" class="app-text-center" padding secondary>
          <ae-icon name="info" size="2rem" class="app-highlight"/>
          <ae-text face="sans-s" :weight="700">
            The transaction you’re about to make will not send any ETH, it will only use ETH for gas. The amount of
            tokens that you send will be stored in the dataload, which can be found in
            <span class="app-highlight">
              Generated Data in MyEtherWallet.
            </span>
          </ae-text>
          <br />
          <ae-text face="sans-s" class="app-highlight">
            DO NOT SEND AE TOKENS TO THE MIGRATION CONTRACT DIRECTLY
          </ae-text>
        </app-panel>
      </app-panel>
    </app-view>

    <!-- Step process -->
    <app-modal v-if="modal && name === 'step'" @click="closeModal">
      <app-panel tertiary padding shadow overflow v-if="step === 1" :close="closeModal">
        <template slot="header">
          <img :src="require('../../../assets/graphics/myetherwallet.svg')" alt="MyEtherWallet">
          Migrating with MyEtherWallet
        </template>
        <app-row>
          <div class="app-myetherwallet-screenshot">
            <img :src="require('../../../assets/graphics/signMsg.png')" alt="MyEtherWallet">
          </div>
          <app-separator class="hide-mobile" />
          <app-column size="small">
            <app-intro align="left">
              <template slot="subtitle">
                You will be forwarded to the sign message link on MyEtherWallet
              </template>
              <template slot="intro">
                <p>Continue for more information, before proceeding.</p>
              </template>
            </app-intro>
            <ae-button @click="step = 2" face="round" fill="secondary" extend>
              Continue
            </ae-button>
          </app-column>
        </app-row>
      </app-panel>
      <app-panel tertiary padding shadow overflow v-if="step === 2" :close="closeModal">
        <template slot="header">
          <img :src="require('../../../assets/graphics/myetherwallet.svg')" alt="MyEtherWallet">
          Migrating with MyEtherWallet
        </template>
        <app-row>
          <div class="app-myetherwallet-screenshot">
            <img :src="require('../../../assets/graphics/signMsgConfirmed.png')" alt="MyEtherWallet">
          </div>
          <app-separator class="hide-mobile" />
          <app-column size="small">
            <ul class="app-myetherwallet-list">
              <li>
                <span>1</span>
                Log in with you preferred way on MEW
              </li>
              <li>
                <span>2</span>
                <ae-text face="sans-s" class="app-highlight"> IMPORTANT </ae-text>
                The message you enter must be your <b>AEternity address only! </b>
              </li>
              <li>
                <span>3</span>
                Sign it
              </li>
              <li>
                <span>4</span>
                Copy it 
              </li>
              <li>
                <span>5</span>
                On the next page you'll be asked to paste it.
              </li>
              <li>
                <a :href="mewURI" target="_blank">
                  <ae-button @click="step = 3" face="round" fill="secondary" extend>
                    Sign message
                  </ae-button>
                </a>
              </li>
            </ul>
          </app-column>
        </app-row>
        <div class="app-myetherwallet-notification">
          When you are done come back to check your transaction!
        </div>
      </app-panel>
      <app-panel tertiary padding shadow overflow v-if="step === 3" :close="closeModal">
        <template slot="header">
          <img :src="require('../../../assets/graphics/myetherwallet.svg')" alt="MyEtherWallet">
          Migrating with MyEtherWallet
        </template>
        <app-row>
          <div class="app-myetherwallet-screenshot">
            <img :src="require('../../../assets/graphics/signMsgConfirmed.png')" alt="MyEtherWallet">
          </div>
          <app-separator class="hide-mobile" />
          <app-column size="small">
            <div class="ae-desc"> Paste the signed message here: </div>
            <textarea class="ae-text-area"
              for="signature"
              type="string"
              label="Copied signature from MEW"
              v-model="signature"
              placeholder="{}"
            >
            </textarea>
              <router-link :to="{ name: 'result', params: { pubkey: walletAddress } }">
                <ae-button @click="step = 3" face="round" fill="alternative" extend class="ae-migrate-button">
                  Migrate
                </ae-button>
              </router-link>
          </app-column>
        </app-row>
        <div class="app-myetherwallet-notification">
          Closed the MyEtherWallet transaction too soon? <a :href="mewURI" target="_blank">Try again</a>
        </div>
      </app-panel>
      <app-panel tertiary padding shadow overflow v-if="step === 4" :close="closeModal">
        <template slot="header">
          <img :src="require('../../../assets/graphics/myetherwallet.svg')" alt="Metamask">
          Migrating with MyEtherWallet
        </template>
        <app-intro>
          <template slot="title">
            <ae-icon name="info"/>
          </template>
          <template slot="subtitle">
            {{ errorTitle }}
          </template>
          <template slot="intro">
            <div> 
              Migration did not take place. This does not affect your <br />
              tokens, you are safe to try again.
            </div>
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
      <app-modal v-if="loading">
        <img :src="require('../../../../public/loader.svg')" class="app-migration-result-loading" alt="Loading">
    </app-modal>
  </app-view>
</template>
<script>
import { mapState } from 'vuex'

import { directives } from '@aeternity/aepp-components'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeIdenticon from '@aeternity/aepp-components/dist/ae-identicon'
import AeInput from '@aeternity/aepp-components/dist/ae-input'
import AeCheck from '@aeternity/aepp-components/dist/ae-check'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

import AppAllert from '../../../components/app-alert.vue'
import AppModal from '../../../sections/app-modal/index.vue'
import AppIntro from '../../../components/app-intro.vue'
import AppProcess from '../../../components/app-process.vue'
import AppRow from '../../../components/app-row.vue'
import AppSeparator from '../../../components/app-separator.vue'
import AppColumn from '../../../components/app-column.vue'

import mixinsModal from '../../../mixins/modal'

export default {
  name: 'migration-wallets-myetherwallet',
  mixins: [mixinsModal],
  directives: {
    copyToClipboard: directives.copyToClipboard
  },
  components: {
    AppAllert,
    AeButton,
    AeIcon,
    AeText,
    AeIdenticon,
    AeInput,
    AeCheck,
    AeToolbar,
    AppModal,
    AppIntro,
    AppProcess,
    AppRow,
    AppSeparator,
    AppColumn
  },
  data: function () {
    return { 
      amount: null, 
      gasPrice: '0', 
      step: 0, 
      checked: false, 
      signature: null,
      migrated: false,
      txHash: null,
      reverted: false,
      loading: false
    }
  },
  computed: {
    validated: function () {
      return Number(this.amount) && this.checked && !this.migrated
    },
    mewURI () {
      if (!this.walletAddress) return
       return this.$generateMEWURI()
    },
    introTemplate: function () {
      return this.migrated ? `The balance has already been migrated in ${ this.txHash }` : `The below information is read only. That is all the balance you have currently on your ETH account for migration. You are going to migrate all your tokens at once.`
    },
    errorTitle() {
      return this.reverted ? 'The transaction has been reverted!' : 'Something went wrong'
    },
    ...mapState([
      'walletAddress',
      'ethWalletAddress'
    ])
  },
  methods: {
    startMigration () {
      this.step = 1
      this.openModal('step')
    },
    /**
      * Get Details for the current ETH address
    */
    async getDetails () {

      const infoObj = await this.$getAEInfo(this.ethWalletAddress)
      this.migrated = infoObj.migrated
      this.txHash = infoObj.migrateTxHash

      Object.assign(this.$data, {
        amount: this.$web3.utils.fromWei(infoObj.tokens, 'ether')
      })
    },
    toggleLoader() {
      this.loading = !this.loading
    },
    checkForRevert(tx) {
      if (this.$isReverted(tx)) {
        this.reverted = true
        this.txHash = tx.txHash
        throw new Error()
      }
    }
  },
  mounted: async function () {
    if (!this.walletAddress) {
      return this.$router.push({ name: 'migration' })
    }

    await this.getDetails()
  },
  beforeRouteLeave: async function (to, from, next) {
    this.reverted = false;

    if (to.name === 'result') {
      this.toggleLoader();
      try {
        let txResult = await this.$migrateTokens(this.amount, this.walletAddress, this.ethWalletAddress, this.signature)
        this.checkForRevert(txResult)
        this.$store.commit('setMigrationHash', txResult.txHash)

        next()
      } catch(e) {
        this.step = 4
        this.signature = null
      }
      this.toggleLoader();
    }
  }
}
</script>
<style lang="scss" scoped>
.app-myetherwallet-screenshot {
  width: 50%;

  @include only-phone {
    width: 100%;
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

  @include only-phone {
    padding: 0;
    margin: 0;
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

  @include only-phone {
    margin: 0 -1rem -1rem -1rem;
    line-height: 1.5;
  }
}

.ae-migrate-button {
  margin-top: 10px;
}

.ae-desc {
  text-align: left;
}

.ae-text-area {
  flex-direction: column;
  background: #F7FAFC;
  min-height: 4rem;
  resize: none;
  border: 0 none;
  width: 100%;
  outline: none;
  height: 100%;
}

.app-migration-result-loading {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 50px;
  animation: rotate 2s reverse infinite linear;
}
</style>
