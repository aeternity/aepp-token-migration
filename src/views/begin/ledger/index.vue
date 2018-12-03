<i18n>
  {
    "en": {}
  }
</i18n>
<template>
  <app-view>
    <app-header>
      <app-header-nav prog="2/6" text="Create an Aeternity account with Ledger Nano S"/>
    </app-header>
    <app-view container>
      <app-intro spacing>
        <template slot="title">
          Create an æternity account with Ledger Nano S
        </template>
        <router-link to="/migration">
          <ae-button face="round" fill="secondary" class="ae-button-ledger">
            I already have an account
          </ae-button>
        </router-link>
      </app-intro>
      <app-panel padding margin shadow overflow>
        <app-tutorial>
          <img
            class="app-begin-ledger-image"
            slot="image"
            :src="require('../../../assets/images/tutorial-ledger/1.0-install-ledger-app.svg')"
            alt="Install"
          />
          <template slot="info">
            <h1>Download and install the Ledger app</h1>
            <p>For now it can be downloaded from our Github page. Soon it will be available in Ledger Live.</p>
          </template>
        </app-tutorial>
      </app-panel>
      <app-panel padding margin shadow overflow>
        <app-tutorial>
          <img
            class="app-begin-ledger-image"
            slot="image"
            :src="require('../../../assets/images/tutorial-ledger/2.0-create-account-on-ledger.svg')"
            alt="Account"
          />
          <template slot="info">
            <h1>Create æternity account on the Ledger</h1>
            <p>
              This will securely create an æternity account on the Ledger.
              Please confirm on the Ledger when you’re asked to do so.
            </p>
          </template>
        </app-tutorial>
      </app-panel>
    </app-view>
    <app-footer>
      <router-link to="/migration">
        <ae-button face="round" fill="primary" shadow>
          Start Migration
        </ae-button>
      </router-link>
    </app-footer>
  </app-view>
</template>

<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'

import AppIntro from '../../../components/app-intro.vue'
import AppRow from '../../../components/app-row.vue'
import AppColumn from '../../../components/app-column.vue'
import AppSlideContainer from '../../../components/app-slide-container.vue'
import AppTutorial from '../../../components/app-tutorial.vue'

export default {
  name: 'begin-ledger',
  components: {
    AeButton,
    AppIntro,
    AppRow,
    AppColumn,
    AppSlideContainer,
    AppTutorial
  }
}
</script>
<style lang="scss" scoped>
.app-begin-ledger-image {
  position: absolute;
  bottom: -3rem !important;
  right: 5rem !important;
  left: auto !important;
  height: 520px !important;
}
</style>
