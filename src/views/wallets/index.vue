<template>
  <app-view>
    <app-header>
      <app-header-nav prog="5/6" text="Select the wallet where you hold your AE tokens" />
    </app-header>
    <app-view container>
      <app-intro spacing>
        <template slot="title">
          Select the wallet where you hold your AE tokens
        </template>
        <template slot="intro">
          Currently, we only support migrating with MyEtherWallet and MetaMask (or any other web3 wallet).
          Both ways support Ledger and Trezor hardware wallets.
          If you hold your tokens somewhere else, move them to one of these wallets.
          Create an account there if necessary.
          <br /><br />
          <strong>IMPORTANT</strong>: You will need to have enough ETH on the same account to
          pay for transaction fees.
        </template>
      </app-intro>
      <app-panel primary padding shadow>
        <app-row>
          <app-column>
            <img :src="require('../../assets/graphics/metamask-fox.svg')" alt="Meta Mask" slot="image">
            <template slot="title">
              MetaMask
            </template>
            <template slot="text">
              If you use MetaMask, click below to prepare the transaction.
            </template>
            <router-link :to="{ name: 'metamask' }" slot="button">
              <ae-button face="round" fill="secondary" extend>Proceed with MetaMask</ae-button>
            </router-link>
          </app-column>
          <app-separator>or</app-separator>
          <app-column>
            <img :src="require('../../assets/graphics/myetherwallet.svg')" alt="My EEther Wallet" slot="image">
            <template slot="title">
              MyEtherWallet
            </template>
            <template slot="text">
              If you use MyEtherWallet, click below to prepare the transaction.
            </template>
            <router-link :to="{ name: 'myetherwallet' }" slot="button">
              <ae-button class="ae-button-ledger" face="round" extend>
                Proceed with MEW
              </ae-button>
            </router-link>
          </app-column>
        </app-row>
      </app-panel>
    </app-view>
    <!-- Wallet not found -->
    <app-modal v-if="modal && name === 'wallet-not-found'" @click="closeModal">
      <app-panel primary padding shadow>
        <template slot="header">
          <img :src="require('../../assets/graphics/metamask-fox.svg')" alt="MetaMask">
          Migrating with MetaMask
        </template>
        <app-intro>
          <template slot="title">
            <ae-icon name="card"/>
          </template>
          <template slot="subtitle">
            Wallet not found
          </template>
          <template slot="intro">
            We could not read your account from MetaMask. Please try unlocking it again. We recommend using the
            Chrome browser to complete the token migration.
          </template>
          <ae-button @click="closeModal" face="round" fill="secondary" style="width: 260px">
            Close
          </ae-button>
        </app-intro>
      </app-panel>
    </app-modal>
        <app-modal v-if="modal && name === 'enter-eth-address'" @click="closeModal">
      <app-panel primary padding shadow>
        <template slot="header">
          <img :src="require('../../assets/graphics/myetherwallet.svg')" alt="MetaMask">
          Migrating with MEW
        </template>
        <app-intro>
          <template slot="title">
            <ae-icon name="card"/>
          </template>
          <template slot="subtitle">
            Wallet address required
          </template>
          <template slot="intro">
            Please provide your <span> <b> ETH</b> </span> address in the text box below so we can proceed further with the migration.
          </template>
          <template>
            <app-panel primary padding shadow>
              <div class="app-scan-address">
                <app-eth-address @input="updateAddress">
                  <ae-toolbar align="justify">
                    <span v-if="!validEthAddress && (ethWalletAddress && ethWalletAddress.length > 0)">Invalid ETH Address</span>
                    <span v-else>&nbsp;</span>
                  </ae-toolbar>
                </app-eth-address>
                <ae-check name="approve" v-model="validated">
                  <ae-text face="sans-s">
                    I am certain my address is correct
                  </ae-text>
                </ae-check>
              </div>
              <div class="app-scan-button-group">
                <router-link class="app-scan-link" :to="{ name: 'wallets' }" :disabled="!approved">
                  <ae-button face="round" fill="primary" :disabled="!approved" @click="onSubmit">
                    Continue
                  </ae-button>
                </router-link>
              </div>
            </app-panel>
          </template>
        
        </app-intro>
      </app-panel>
    </app-modal>
  </app-view>
</template>
<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeIdenticon from '@aeternity/aepp-components/dist/ae-identicon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeCheck from '@aeternity/aepp-components/dist/ae-check'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'
import Cleave from 'cleave.js'

import AppAddress from '../../components/app-address.vue'
import AppEthAddress from '../../components/app-eth-address.vue'

import AppIntro from '../../components/app-intro.vue'
import AppRow from '../../components/app-row.vue'
import AppSeparator from '../../components/app-separator.vue'
import AppColumn from '../../components/app-column.vue'

import mixinsModal from '../../mixins/modal'

import { mapState } from 'vuex'

export default {
  data() {
    return {
      validated: false,
    }
  },
  methods: {
    onSubmit: function() {
      this.$router.push({name: 'myetherwallet'})
    },
    updateAddress: function (value) {
      this.$store.commit('setEthWalletAddress', value)
    }
  },
    computed: {
    approved () {
      return this.validated && this.ethWalletAddress && this.validEthAddress
    },
    validEthAddress: function () {
      if (!this.ethWalletAddress) return false
      try {
        return this.$isEthAddress(this.ethWalletAddress)
      } catch (e) {

        return false
      }
    },
    ...mapState([
      'walletAddress',
      'ethWalletAddress'
    ])
  },
  name: 'migration-wallets',
  mixins: [mixinsModal],
  components: {
    AppAddress,
    AeToolbar,
    AppEthAddress,
    AeCheck,
    AeIdenticon,
    AeButton,
    AeIcon,
    AppIntro,
    AppRow,
    AppSeparator,
    AeText,
    AppColumn
  },
  beforeRouteLeave: async function (to, from, next) {
    if (to.name === 'metamask') {
      try {

        await this.$hasWeb3()
        await this.$isLoggedIn()
      } catch (e) {
        return this.openModal('wallet-not-found')
      }
      return next()
    } else if (to.name === 'myetherwallet'){
        if(!this.ethWalletAddress) return this.openModal('enter-eth-address')

        return next()
    }
    
    return next()
  }
}
</script>
<style lang="scss" scoped>
  pre {
    width: 100%;
    color: rgba(255, 255, 255,.8);
  }

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

  @include only-phone {
    width: auto;
    text-align: center;
  }
}

.app-address {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 560px;
  overflow: hidden;
  transition: all $base-transition-time;
  border-left: 2px solid $color-focus;
  margin-bottom: 1rem;

  &.disabled {
    color: $color-neutral-negative-1;
  }

  @include only-phone {
    max-width: none;
  }
}

.app-address-input {
  background: $color-neutral-positive-3;
  padding-left: 1rem;

  > label {
    @extend %face-sans-xs;

    display: block;
    color: $color-focus;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  > textarea {
    @extend %face-mono-base;

    margin-bottom: 1rem;
    width: 100%;
    height: auto;
    font-size: 1.6rem;
    background: transparent;
    line-height: 2.125rem;
    min-height: 72px;
    max-height: 72px;
    border: 0;
    resize: none;
    color: #76818C;
    text-align: justify;
  }

  @include only-phone {
    padding-right: 1rem;

    > textarea {
      min-height: 170px;
      max-height: none;
    }
  }
}


</style>
