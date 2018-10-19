<template>
  <app-view>
    <app-header>
      <app-header-nav prog="5/6" text="Select your wallet where you hold your tokens" />
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Select your wallet where you <br /> hold your tokens
        </template>
        <template slot="intro">
          For now, we only support migrating with MetaMask and MyEtherWallet.
          If you hold your tokens somewhere else, create accounts on either of the option below first.
          And move your tokens there to proceed.
        </template>
      </app-intro>
      <app-panel primary padding shadow>
        <app-row>
          <app-column>
            <img :src="require('@/assets/graphics/metamask-fox.svg')" alt="Meta Mask" slot="image">
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
            <img :src="require('@/assets/graphics/myetherwallet.svg')" alt="#" slot="image">
            <template slot="title">
              MyEtherWallet
            </template>
            <template slot="text">
              If you use MyEtherWallet, we are going to prepare the transaction there and you will be forwarded.
            </template>
            <router-link :to="{ name: 'myetherwallet' }" slot="button">
              <ae-button class="ae-button-ledger" face="round" extend>Proceed on MEW</ae-button>
            </router-link>
          </app-column>
        </app-row>
      </app-panel>
      <app-intro style="padding-top: 4rem; margin-bottom: 0">
        <template slot="intro">
          It is also possible to use another web3 desktop wallet/browser <br /> instead of MetaMask.
        </template>
      </app-intro>
    </app-view>
  </app-view>
</template>

<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AppIntro from '../../../components/app-intro.vue'
import AppRow from '../../../components/app-row.vue'
import AppSeparator from '../../../components/app-separator.vue'
import AppColumn from '../../../components/app-column.vue'

export default {
  name: 'wallets',
  components: {
    AeButton,
    AeIcon,
    AppIntro,
    AppRow,
    AppSeparator,
    AppColumn
  }
}
</script>
<style lang="scss" scoped></style>
