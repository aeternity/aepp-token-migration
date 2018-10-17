<template>
  <app-view>
    <app-header />
    <app-view container>
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
    </app-view>
    <app-footer />
  </app-view>
</template>

<script>
import AeBlock from '@/components/ae-block.vue'
import AeIntro from '@/components/ae-intro.vue'
import AeCta from '@/components/ae-cta.vue'
import AeBtn from '@/components/ae-btn.vue'

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
    AeBlock,
    AeIntro,
    AeCta,
    AeBtn
  }
}
</script>
<style lang="scss"></style>
