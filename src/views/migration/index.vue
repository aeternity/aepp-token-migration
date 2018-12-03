<i18n>
  {
    "en": {
      "header": "Provide your æternity account",
      "intro": {
        "title": "Provide your æternity account",
        "intro": "The amount of tokens you choose to migrate, will be available on this address in the next scheduled hardfork release."
      },
      "column": {
        "airgap": {
          "title": "AirGap Vault",
          "text": "Open your æternity wallet in the AirGap Vault and scan your QR code.",
          "button": "Scan from AirGap"
        },
        "or": "or",
        "ledger": {
          "title": "Ledger Wallet",
          "text": "Connect your Ledger Wallet over USB, select the æternity app.",
          "button": "Coming soon"
        },
        "manual": "Enter Address Manually"
      },
      "noChromeModal": {
        "header": "Migrating with Ledger Wallet",
        "subtitle": "Please use Google Chrome or Brave browser",
        "intro": "We can only read your Ledger wallet from one these browsers.",
        "button": "Close"
      }
    }
  }
</i18n>
<template>
  <app-view>
    <app-header>
      <app-header-nav prog="3/6" :text="$t('header')"/>
    </app-header>
    <app-view container>
      <app-intro spacing>
        <template slot="title">
          {{ $t('intro.title') }}
        </template>
        <template slot="intro">
          {{ $t('intro.intro') }}
        </template>
      </app-intro>
      <app-panel primary padding shadow>
        <app-row>
          <app-column>
            <img :src="require('../../assets/graphics/airgap-logo.svg')" :alt="$t('column.airgap.title')" slot="image">
            <template slot="title">
              {{ $t('column.airgap.title') }}
            </template>
            <template slot="text">
              {{ $t('column.airgap.text') }}
            </template>
            <router-link :to="{ name: 'scan' }" slot="button">
              <ae-button face="round" fill="secondary" extend>
                {{ $t('column.airgap.button') }}
              </ae-button>
            </router-link>
          </app-column>
          <app-separator>
            {{ $t('column.or') }}
          </app-separator>
          <app-column>
            <img :src="require('../../assets/graphics/ledger-logo.svg')" :alt="$t('column.ledger.title')" slot="image">
            <template slot="title">
              {{ $t('column.ledger.title') }}
            </template>
            <template slot="text">
              {{ $t('column.ledger.text') }}
            </template>
            <router-link :to="{ name: 'read' }" slot="button" disabled>
              <ae-button class="ae-button-ledger" face="round" extend disabled>
                {{ $t('column.ledger.button') }}
              </ae-button>
            </router-link>
          </app-column>
        </app-row>
        <br/>
        <router-link :to="{ name: 'input' }">
          <ae-button extend>
            <ae-text face="uppercase-base" :weight=700>
              {{ $t('column.manual') }}
            </ae-text>
          </ae-button>
        </router-link>
      </app-panel>
    </app-view>
    <!-- Not a chrome browser modal -->
    <app-modal v-if="modal && name === 'not-chrome-browser'" @click="closeModal">
      <app-panel primary padding shadow>
        <template slot="header">
          <img :src="require('../../assets/graphics/ledger-logo.svg')" :alt="$t('noChromeModal.header')">
          {{ $t('noChromeModal.header') }}
        </template>
        <app-intro>
          <template slot="title">
            <ae-icon name="info"/>
          </template>
          <template slot="subtitle">
            {{ $t('noChromeModal.subtitle') }}
          </template>
          <template slot="intro">
            {{ $t('noChromeModal.intro') }}
          </template>
          <ae-button @click="closeModal" face="round" fill="secondary" style="width: 260px">
            {{ $t('noChromeModal.button') }}
          </ae-button>
        </app-intro>
      </app-panel>
    </app-modal>
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

import mixinsModal from '../../mixins/modal'

export default {
  name: 'migration',
  mixins: [mixinsModal],
  components: {
    AeButton,
    AeIcon,
    AeText,
    AppIntro,
    AppRow,
    AppSeparator,
    AppColumn
  },
  beforeRouteLeave: async function (to, from, next) {
    if (to.name === 'read') {
      // please note,
      // that IE11 now returns undefined again for window.chrome
      // and new Opera 30 outputs true for window.chrome
      // but needs to check if window.opr is not undefined
      // and new IE Edge outputs to true now for window.chrome
      // and if not iOS Chrome check
      // so use the below updated condition
      let isChromium = window.chrome
      let winNav = window.navigator
      let vendorName = winNav.vendor
      let isOpera = typeof window.opr !== 'undefined'
      let isIEedge = winNav.userAgent.indexOf('Edge') > -1

      if (
        isChromium !== null &&
        typeof isChromium !== 'undefined' &&
        vendorName === 'Google Inc.' &&
        isOpera === false &&
        isIEedge === false
      ) {
        return next()
      } else {
        return this.openModal('not-chrome-browser')
      }
    }

    return next()
  }
}
</script>
<style lang="scss" scoped></style>
