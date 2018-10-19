<template>
  <app-view>
    <app-header>
      <app-header-nav prog="1/5" text="Begin migrating your AE tokens"/>
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Begin migrating your AE tokens
        </template>
        <template slot="intro">
          Before you can migrate your AE tokens from Ethereum to the
          æternity Mainnet you need to have an æternity account.
          You can skip this step if you already have an æternity account.
        </template>
        <router-link :to="{ name: 'migration' }">
          <ae-button face="flat">Skip this step</ae-button>
        </router-link>
      </app-intro>
      <app-panel primary padding shadow>
        <app-row>
          <app-column>
            <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="Airgap Vault" slot="image">
            <template slot="title">
              Airgap Vault
            </template>
            <template slot="text">
              Create an æternity account with AirGap.
              A secure way to store your key pair in a mobile app.
            </template>
            <router-link to="/begin/airgap" slot="button">
              <ae-button face="round" fill="primary" extend>Get Started</ae-button>
            </router-link>
          </app-column>
          <app-separator>or</app-separator>
          <app-column>
            <img :src="require('@/assets/graphics/ledger-logo.svg')" alt="#" slot="image">
            <template slot="title">
              Ledger Wallet
            </template>
            <template slot="text">
              This creates an æternity account with the Ledger Nano S.
              A secure way to store your key pair on a hardware ledger.
            </template>
            <router-link to="/begin/ledger" slot="button">
              <ae-button face="round" fill="neutral" extend>Get Started</ae-button>
            </router-link>
          </app-column>
        </app-row>
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
  name: 'begin',
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
<style lang="scss"></style>
