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
      <ae-intro :title="intro.title" :intro="intro.intro">
        <router-link to="/provide-address">
          <ae-button face="flat">
            Skip step
          </ae-button>
        </router-link>
      </ae-intro>
      <ae-block>
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
      </ae-block>
    </app-view>
  </app-view>
</template>

<script>
import AeBlock from '@/components/ae-block.vue'
import AeIntro from '@/components/ae-intro.vue'
import AeCta from '@/components/ae-cta.vue'
import AeBtn from '@/components/ae-btn.vue'
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeText from '@aeternity/aepp-components/dist/ae-text'

export default {
  name: 'start',
  data: function () {
    return {
      intro: {
        title: 'Start Migration',
        intro: `For migrating your ERC20 tokens from Ethereum to the æternity main net you need to safely create a key pair first. Skip this step if you already created one.`
      },
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
    AeBlock,
    AeIntro,
    AeCta,
    AeBtn,
    AeButton,
    AeText
  }
}
</script>
<style lang="scss"></style>
