<template>
  <app-view>
    <app-header>
      <app-header-nav prog="5/6" text="Select your wallet where you hold your tokens" />
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Select your wallet where you <br/> hold your tokens
        </template>
        <template slot="intro">
          For now, we only support migrating with MetaMask and <br/>
          MyEtherWallet. If you hold your tokens somewhere else, <br/>
          create accounts on either of the option below first. And <br/>
          move your tokens there to proceed.
        </template>
      </app-intro>
      <app-panel primary padding shadow>
        <app-row>
          <app-column>
            <img :src="require('../../../assets/graphics/metamask-fox.svg')" alt="Meta Mask" slot="image">
            <template slot="title">
              MetaMask
            </template>
            <template slot="text">
              If you use Meta Mask, we are going to prepare the transaction here on this website.
            </template>
            <router-link :to="{ name: 'metamask' }" slot="button">
              <ae-button face="round" fill="secondary" extend>Connect MetaMask</ae-button>
            </router-link>
          </app-column>
          <app-separator>or</app-separator>
          <app-column>
            <img :src="require('../../../assets/graphics/myetherwallet.svg')" alt="My EEther Wallet" slot="image">
            <template slot="title">
              MyEtherWallet
            </template>
            <template slot="text">
              If you use MyEtherWallet, we are going to prepare the transaction here first and forward you there.
            </template>
            <router-link :to="{ name: 'myetherwallet' }" slot="button">
              <ae-button class="ae-button-ledger" face="round" extend>
                Proceed on MEW
              </ae-button>
            </router-link>
          </app-column>
        </app-row>
      </app-panel>
      <app-intro class="app-spacing-top">
        <template slot="intro">
          It is also possible to use another web3 desktop wallet/browser <br/> instead of MetaMask.
        </template>
      </app-intro>
    </app-view>
    <!-- Wallet not found -->
    <app-modal v-if="modal && name === 'wallet-not-found'" @click="closeModal">
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
            Wallet not found
          </template>
          <template slot="intro">
            We could not read your account from MetaMask. <br/>
            Please try unlocking it again. We recommend using the <br/>
            Chrome browser to complete the token migration.
          </template>
          <ae-button @click="closeModal" face="round" fill="secondary" style="width: 260px">
            Close
          </ae-button>
        </app-intro>
      </app-panel>
    </app-modal>
  </app-view>
</template>
<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AppIntro from '../../../components/app-intro.vue'
import AppRow from '../../../components/app-row.vue'
import AppSeparator from '../../../components/app-separator.vue'
import AppColumn from '../../../components/app-column.vue'

import mixinsModal from '../../../mixins/modal'

export default {
  name: 'migration-wallets',
  mixins: [mixinsModal],
  components: {
    AeButton,
    AeIcon,
    AppIntro,
    AppRow,
    AppSeparator,
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
    }

    return next()
  }
}
</script>
<style lang="scss" scoped></style>
