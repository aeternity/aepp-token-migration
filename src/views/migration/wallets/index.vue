<i18n>
  {
    "en": {}
  }
</i18n>
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
            <img :src="require('../../../assets/graphics/metamask-fox.svg')" alt="Meta Mask" slot="image">
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
            <img :src="require('../../../assets/graphics/myetherwallet.svg')" alt="My EEther Wallet" slot="image">
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
          <img :src="require('../../../assets/graphics/metamask-fox.svg')" alt="MetaMask">
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
