<template>
  <app-view>
    <app-header>
      <app-header-nav
        prog="1/5"
        :prev="{ name: 'landing' }"
        :next="{ name: 'tutorials' }"
        text="Begin migrating your AE tokens" />
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Start Migration
        </template>
        <template slot="intro">
          For migrating your ERC20 tokens from ethereum to the
          æternity main net you need to safely create a key pair first.
          Skip this step if you already created one.
        </template>
        <router-link to="/provide-address">
          <ae-button face="flat">Skip this step</ae-button>
        </router-link>
      </app-intro>
      <app-panel primary padding shadow>
        <ae-cta
          v-for="(tutorial, index) in tutorials"
          :key="tutorial.id"
          :img="tutorial.img"
          :title="tutorial.title"
          :text="tutorial.text">
          <router-link :to="tutorial.link">
            <ae-button
              :class="[index === 0 ? 'secondary' : 'neutral']"
              face="round"
              extend>
              Get Started
            </ae-button>
          </router-link>
        </ae-cta>
      </app-panel>
    </app-view>
  </app-view>
</template>

<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeText from '@aeternity/aepp-components/dist/ae-text'

import AeCta from '@/components/ae-cta.vue'
import AppIntro from '../../components/app-intro.vue'

export default {
  name: 'start',
  data: function () {
    return {
      tutorials: [
        {
          img: require('@/assets/graphics/airgap-logo.svg'),
          title: 'Airgap Vault',
          text: 'This creates an æternity key pair with AirGap, a secure way to store your key pair in an mobile app.',
          link: '/Tutorials',
          is_neutral: false,
          is_secondary: true
        },
        {
          img: require('@/assets/graphics/ledger-logo.svg'),
          title: 'Ledger Wallet',
          text: 'This creates an æternity key pair on the Ledger Nano S. A secure way to store your key pair on a hardware ledger.',
          link: '/Tutorials',
          is_neutral: true,
          is_secondary: false
        }
      ]
    }
  },
  components: {
    AeCta,

    AppIntro,
    AeButton,
    AeText
  }
}
</script>
<style lang="scss"></style>
