<template>
  <app-view>
    <app-header>
      <app-header-nav prog="3/6" text="Enter your Aeternity account address" />
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Provide your new <br /> æternity address
        </template>
        <template slot="intro">
          All of your tokens will be migrated to this address.
        </template>
      </app-intro>
      <app-panel primary padding shadow>
        <app-row>
          <app-column>
            <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="Airgap Vault" slot="image">
            <template slot="title">
              Airgap Vault
            </template>
            <template slot="text">
              Provide the address from Airgap.
              Choose in Airgap the æternity wallet and show the QR code.
            </template>
            <router-link :to="{ name: 'scan' }" slot="button">
              <ae-button face="round" fill="secondary" extend>Scan from Airgap</ae-button>
            </router-link>
          </app-column>
          <app-separator>or</app-separator>
          <app-column>
            <img :src="require('@/assets/graphics/ledger-logo.svg')" alt="#" slot="image">
            <template slot="title">
              Ledger Wallet
            </template>
            <template slot="text">
              Connect the Ledger over USB and click on the button below,
              as soon as the æternity app op the Ledger is open.
            </template>
            <router-link :to="{ name: 'read' }" slot="button">
              <ae-button class="ae-button-ledger" face="round" extend>Read Address from Ledger</ae-button>
            </router-link>
          </app-column>
        </app-row>
        <br />
        <router-link :to="{ name: 'input' }">
          <ae-button extend>
            <ae-text face="uppercase-base" weight="700">Enter Address Manually</ae-text>
          </ae-button>
        </router-link>
      </app-panel>
    </app-view>
  </app-view>
</template>
<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeText from '@aeternity/aepp-components/dist/ae-text'

import AppIntro from '../../components/app-intro.vue'
import AppRow from '../../components/app-row.vue'
import AppSeparator from '../../components/app-separator.vue'
import AppColumn from '../../components/app-column.vue'

export default {
  name: 'migration',
  components: {
    AeButton,
    AeText,
    AppIntro,
    AppRow,
    AppSeparator,
    AppColumn
  }
}
</script>
<style lang="scss" scoped></style>
