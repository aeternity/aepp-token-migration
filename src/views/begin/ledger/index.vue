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
            alt="Install"
            :src="require('../../../assets/images/tutorial-ledger/1.0-install-ledger-live-app.svg')"
          />
          <template slot="info">
            <h1>Install Ledger Live</h1>
            <p>Download Ledger Live for desktop from their official website.</p>
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
            alt="Account"
            :src="require('../../../assets/images/tutorial-ledger/2.0-install-aeternity-ledger-app.svg')"
          />
          <template slot="info">
            <h1>Install æternity in Ledger Live</h1>
            <ol>
              <li>Connect Ledger via USB and unlock it</li>
              <li>Click 'Manager' in the menu</li>
              <li>Search for 'æternity' and install</li>
            </ol>
          </template>
        </app-tutorial>
      </app-panel>
      <app-panel padding margin shadow overflow>
        <app-tutorial>
          <img
            slot="image"
            alt="Account Created"
            :src="require('../../../assets/images/tutorial-ledger/3.0-aeternity-account-created.svg')"
          />
          <template slot="info">
            <h1>You now have an æternity account on your Ledger</h1>
            <p>Ledger Live is still working on displaying æternity accounts in their app. But it's there.</p>
            <p>To see your account details and transfer, go to Base æpp for Desktop.</p>
            <p>You can now start the Token Migration.</p>
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
