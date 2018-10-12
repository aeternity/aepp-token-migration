<template>
  <main class="view" :class="this.$options.name">
    <app-header />
    <article class="view__content">
      <ae-intro :title="intro.title" :intro="intro.intro" />
      <ae-block to="/Migrate" name="Skip step">
        <ae-cta
          v-for="tutorial in tutorials"
          :key="tutorial.id"
          :img="tutorial.img"
          :title="tutorial.title"
          :text="tutorial.text">
          <ae-btn
            :to="tutorial.link"
            :is_neutral="tutorial.is_neutral"
            :is_secondary="tutorial.is_secondary">
            Get Started
          </ae-btn>
        </ae-cta>
      </ae-block>
    </article>
    <ae-nav />
  </main>
</template>

<script>
// @ is an alias to /src
// import { AeButton } from '@aeternity/aepp-components'
import AppHeader from '@/components/AppHeader.vue'
import AeBlock from '@/components/AeBlock.vue'
import AeIntro from '@/components/AeIntro.vue'
import AeCta from '@/components/AeCta.vue'
import AeBtn from '@/components/AeBtn.vue'
import AeNav from '@/components/AeNav.vue'

export default {
  name: 'Airgap',
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
          link: '/Airgap',
          is_neutral: false,
          is_secondary: true
        },
        {
          img: require('@/assets/graphics/ledger-logo.svg'),
          title: 'Ledger Wallet',
          text: 'This creates an æternity key pair on the Ledger Nano S. A secure way to store your key pair on a hardware ledger.',
          link: '/Ledger',
          is_neutral: true,
          is_secondary: false
        }
      ]
    }
  },
  components: {
    AppHeader,
    AeBlock,
    AeIntro,
    AeCta,
    AeBtn,
    AeNav
  }
}
</script>
<style lang="scss"></style>
