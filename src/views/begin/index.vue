<i18n>
  {
    "en": {
      "header": "Begin migrating your AE tokens",
      "intro": {
        "title": "Create an æternity account",
        "intro": "For highest security it is recommended to use AirGap or Ledger Nano S. This requires an installation of AirGap Vault on a mobile device or a connection with Ledger Nano S.",
        "button": "Skip this step"
      },
      "column": {
        "airgap": {
          "title": "AirGap Vault",
          "text": "Create an æternity account with AirGap. A secure way to store your key pair in a mobile app.",
          "button": "Get Started"
        },
        "or": "or",
        "ledger": {
          "title": "Ledger Wallet",
          "text": "This creates an æternity account with the Ledger Nano S. A secure way to store your key pair on a hardware ledger.",
          "button": "Coming soon"
        }
      },
      "more": {
        "title": "Other options to create an æternity account are also available, they are explained in our forum.",
        "button": "Read how to"
      }
    }
  }
</i18n>
<template>
  <app-view>
    <app-header>
      <app-header-nav prog="1/6" :text="$t('header')"/>
    </app-header>
    <app-view container>
      <app-intro spacing>
        <template slot="title">
          {{ $t('intro.title') }}
        </template>
        <template slot="intro">
          {{ $t('intro.intro') }}
        </template>
        <router-link :to="{ name: 'migration' }">
          <ae-button face="flat">
            {{ $t('intro.button') }}
          </ae-button>
        </router-link>
      </app-intro>
      <app-panel primary padding shadow>
        <app-row>
          <app-column>
            <img :src="require('@/assets/graphics/airgap-logo.svg')" :alt="$t('airgap.title')" slot="image">
            <template slot="title">
              {{ $t('column.airgap.title') }}
            </template>
            <template slot="text">
              {{ $t('column.airgap.text') }}
            </template>
            <router-link :to="{ name: 'airgap' }" slot="button">
              <ae-button face="round" fill="secondary" extend>
                {{ $t('column.airgap.button') }}
              </ae-button>
            </router-link>
          </app-column>
          <app-separator>
            {{ $t('column.or') }}
          </app-separator>
          <app-column>
            <img :src="require('@/assets/graphics/ledger-logo.svg')" :alt="$t('ledger.title')" slot="image">
            <template slot="title">
              {{ $t('column.ledger.title') }}
            </template>
            <template slot="text">
              {{ $t('column.ledger.text') }}
            </template>
            <router-link :to="{ name: 'ledger' }" slot="button" disabled>
              <ae-button class="ae-button-ledger" face="round" extend disabled>
                {{ $t('column.ledger.button') }}
              </ae-button>
            </router-link>
          </app-column>
        </app-row>
      </app-panel>
      <app-intro class="app-spacing-top">
        <template slot="intro">
          {{ $t('more.title') }}
        </template>
        <a href="https://forum.aeternity.com/t/token-migration-phase-1-support-and-faq/1411" target="_blank">
          <ae-button face="flat">
            <ae-icon name="link"/>
            {{ $t('more.button') }}
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
