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
        <router-link :to="{ name: 'migration' }">
          <ae-button face="round" fill="secondary" class="ae-button-ledger">
            I already have an account
          </ae-button>
        </router-link>
      </app-intro>
      <app-panel padding margin shadow overflow>
        <app-tutorial>
          <img
            slot="image"
            class="app-begin-ledger-image"
            alt="Install"
            :src="require('../../../assets/images/tutorial-ledger/1.0-install-ledger-live-app.svg')"
          />
          <template slot="info">
            <h1>Download & Install the Ledger Live desktop app</h1>
            <p>The Ledger Live app is available on the official Ledger website.</p>
            <a href="//www.ledger.com/pages/ledger-live" target="_blank">
              <ae-button class="ae-button-ledger" face="round" extend>Download Ledger Live</ae-button>
            </a>
          </template>
        </app-tutorial>
      </app-panel>
      <app-panel padding margin shadow overflow>
        <app-tutorial>
          <img
            slot="image"
            class="app-begin-ledger-image"
            alt="Account"
            :src="require('../../../assets/images/tutorial-ledger/2.0-install-aeternity-ledger-app.svg')"
          />
          <template slot="info">
            <h1>Install the æternity app from Ledger Live</h1>
            <ol>
              <li>Connect Ledger with USB and unlock it</li>
              <li>Navigate to ‘Manager’ in the sidebar</li>
              <li>Install the official ‘Aeternity’ Ledger app on the device</li>
            </ol>
          </template>
        </app-tutorial>
      </app-panel>
      <app-panel padding margin shadow overflow>
        <app-tutorial>
          <img
            slot="image"
            class="app-begin-ledger-image"
            alt="Account Created"
            :src="require('../../../assets/images/tutorial-ledger/3.0-aeternity-account-created.svg')"
          />
          <template slot="info">
            <h1>You have safely created an æternity account</h1>
            <p>
              Currently, the Ledger Live app cannot display your æternity account. To view it, visit the Base æpp on
              Desktop. Note: this step is not needed for migrating.
            </p>
            <p>With the Base æpp you can</p>
            <ol>
              <li>View your address</li>
              <li>Send and receive AE</li>
            </ol>
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
<style lang="scss" scoped></style>
