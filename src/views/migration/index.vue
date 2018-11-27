<i18n>
  {
    "en": {},
    "ru": {},
    "zh-CN": {}
  }
</i18n>
<template>
  <app-view>
    <app-header>
      <app-header-nav prog="3/6" text="Provide your æternity account"/>
    </app-header>
    <app-view container>
      <app-intro spacing>
        <template slot="title">
          Provide your æternity account
        </template>
        <template slot="intro">
          The amount of tokens you choose to migrate, will be available on this address in the next scheduled hardfork release.
        </template>
      </app-intro>
      <app-panel primary padding shadow>
        <app-row>
          <app-column>
            <img :src="require('../../assets/graphics/airgap-logo.svg')" alt="AirGap Vault" slot="image">
            <template slot="title">
              AirGap Vault
            </template>
            <template slot="text">
              Open your æternity wallet in the AirGap Vault and scan your QR code.
            </template>
            <router-link :to="{ name: 'scan' }" slot="button">
              <ae-button face="round" fill="secondary" extend>
                Scan from AirGap
              </ae-button>
            </router-link>
          </app-column>
          <app-separator>or</app-separator>
          <app-column>
            <img :src="require('../../assets/graphics/ledger-logo.svg')" alt="Ledger Wallet" slot="image">
            <template slot="title">
              Ledger Wallet
            </template>
            <template slot="text">
              Connect your Ledger Wallet over USB, select the æternity app.
            </template>
            <router-link :to="{ name: 'read' }" slot="button" disabled>
              <ae-button class="ae-button-ledger" face="round" extend disabled>
                Coming soon
              </ae-button>
            </router-link>
          </app-column>
        </app-row>
        <br/>
        <router-link :to="{ name: 'input' }">
          <ae-button extend>
            <ae-text face="uppercase-base" :weight=700>
              Enter Address Manually
            </ae-text>
          </ae-button>
        </router-link>
      </app-panel>
    </app-view>
    <!-- Not a chrome browser modal -->
    <app-modal v-if="modal && name === 'not-chrome-browser'" @click="closeModal">
      <app-panel primary padding shadow>
        <template slot="header">
          <img :src="require('../../assets/graphics/ledger-logo.svg')" alt="Ledger Wallet">
          Migrating with Ledger Wallet
        </template>
        <app-intro>
          <template slot="title">
            <ae-icon name="info"/>
          </template>
          <template slot="subtitle">
            Please use Google Chrome or Brave browser
          </template>
          <template slot="intro">
            We can only read your Ledger wallet from one these browsers.
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
