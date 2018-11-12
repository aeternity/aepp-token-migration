<template>
  <app-view>
    <app-header>
      <app-header-nav prog="1/6" text="Begin migrating your AE tokens"/>
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Create an aeternity account
        </template>
        <template slot="intro">
          For highest security it is recommended to use AirGap or Ledger <br/>
          Nano S. This requires an installation of Airgap on a mobile device <br/>
          or a connection with Ledger Nano S.
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
            <router-link :to="{ name: 'airgap' }" slot="button">
              <ae-button face="round" fill="secondary" extend>Get Started</ae-button>
            </router-link>
          </app-column>
          <app-separator>or</app-separator>
          <app-column>
            <img :src="require('@/assets/graphics/ledger-logo.svg')" alt="Ledger Wallet" slot="image">
            <template slot="title">
              Ledger Wallet
            </template>
            <template slot="text">
              This creates an æternity account with the Ledger Nano S.
              A secure way to store your key pair on a hardware ledger.
            </template>
            <router-link :to="{ name: 'ledger' }" slot="button" disabled>
              <ae-button class="ae-button-ledger" face="round" extend disabled>
                Coming soon
              </ae-button>
            </router-link>
          </app-column>
        </app-row>
      </app-panel>
      <app-intro class="app-spacing-top">
        <template slot="intro">
          Other options to create an æternity account are also available, <br/>
          they are explained in our blogpost.
        </template>
        <a href="https://blog.aeternity.com/launched-first-phase-of-ae-token-migration-bafa68b12463" target="_blank">
          <ae-button face="flat">
            <ae-icon name="link"/>
            Read how to
          </ae-button>
        </a>
      </app-intro>
    </app-view>
  </app-view>
</template>
<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'

import AppIntro from '../../components/app-intro.vue'
import AppRow from '../../components/app-row.vue'
import AppSeparator from '../../components/app-separator.vue'
import AppColumn from '../../components/app-column.vue'

export default {
  name: 'begin',
  components: {
    AeButton,
    AeIcon,
    AeText,
    AppIntro,
    AppRow,
    AppSeparator,
    AppColumn
  }
}
</script>
<style lang="scss"></style>
