<template>
  <div :class="this.$options.name">
    <app-header />
    <article class="view__content">
      <ae-intro :title="intro.title">
        <ae-btn to="/provide-address" :is_secondary="true">I have one already</ae-btn>
      </ae-intro>
      <div class="block"
           v-for="tutorial in tutorials"
           :key="tutorial.id">
        <ae-slider
          :slides="tutorial.steps"
          :maintitle="tutorial.title"
          :condition="tutorial.steps.length > 1">
        </ae-slider>
      </div>
      <ae-footer>
        <ae-btn to="/provide-address" :is_primary="true">Done, start migration</ae-btn>
      </ae-footer>
    </article>
  </div>
</template>
<script>
import AppHeader from '@/components/app-header.vue'
import AeBlock from '@/components/ae-block.vue'
import AeIntro from '@/components/ae-intro.vue'
import AeCta from '@/components/ae-cta.vue'
import AeBtn from '@/components/ae-btn.vue'
import AeNav from '@/components/ae-nav.vue'
import AeSlider from '@/components/ae-slider.vue'
import AeFooter from '@/components/ae-footer.vue'

export default {
  name: 'ledger-wallet',
  data: function () {
    return {
      intro: {
        title: 'Generate your key pair with AirGap',
        intro: `For migrating your ERC20 tokens from Ethereum to the æternity main net you need to safely create a key pair first. Skip this step if you already created one.`
      },
      tutorials: [
        {
          title: 'Download & Install AirGap Vault app',
          steps: [
            {
              title: '',
              img: require('@/assets/images/tutorial_airgap/download.png'),
              text: `Go to the App store of your choosing and download the mobile App. If possible, use a on a dedicated or old smartphone.

                After the download put your phone in airplane mode to disconnect the device from any network, and open the app.
                `,
              buttons: [
                {
                  img: require('@/assets/graphics/apple-store.svg'),
                  link: ''
                },
                {
                  img: require('@/assets/graphics/google-play.svg'),
                  link: ''
                }
              ]
            }
          ]
        },
        {
          title: 'Generate your secret',
          steps: [
            {
              title: 'Write your secret on a piece of paper',
              img: require('@/assets/images/tutorial_airgap/generate_1.png'),
              text: `Generate a new secret, you can also import an existing mnemonic phrase.

                We recommend that you generate a new secret on the air gapped device and not import one that was previously used in a device with network connectivity.
                `
            },
            {
              title: 'Write your secret on a piece of paper',
              img: require('@/assets/images/tutorial_airgap/generate_1.png'),
              text: `Generate a new secret, you can also import an existing mnemonic phrase.

                We recommend that you generate a new secret on the air gapped device and not import one that was previously used in a device with network connectivity.
                `
            },
            {
              title: 'Write your secret on a piece of paper',
              img: require('@/assets/images/tutorial_airgap/generate_1.png'),
              text: `Generate a new secret, you can also import an existing mnemonic phrase.

                We recommend that you generate a new secret on the air gapped device and not import one that was previously used in a device with network connectivity.
                `
            },
            {
              title: 'Write your secret on a piece of paper',
              img: require('@/assets/images/tutorial_airgap/Group_11.png'),
              text: `Generate a new secret, you can also import an existing mnemonic phrase.

                We recommend that you generate a new secret on the air gapped device and not import one that was previously used in a device with network connectivity.
                `
            },
            {
              title: 'Write your secret on a piece of paper',
              img: require('@/assets/images/tutorial_airgap/generate_1.png'),
              text: `Generate a new secret, you can also import an existing mnemonic phrase.

                We recommend that you generate a new secret on the air gapped device and not import one that was previously used in a device with network connectivity.
                `
            }
          ]
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
    AeNav,
    AeSlider,
    AeFooter
  }
}
</script>
<style lang="scss">
  .ledger-wallet {}
</style>
