<template>
  <main class="view block" :class="this.$options.name">
    <app-header />
    <article class="view__content">
      <ae-intro :title="intro.title">
        <router-link to="/provide-address">
          <ae-button face="round" fill="secondary">I have one already</ae-button>
        </router-link>
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
        <router-link to="/provide-address">
          <ae-button face="round" fill="primary">Done, start migration</ae-button>
        </router-link>
      </ae-footer>
    </article>
    <ae-nav />
  </main>
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

import AeButton from '@aeternity/aepp-components/dist/ae-button'

export default {
  name: 'Tutorials',
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
    AeFooter,

    /**
     * Components page
     */
    AeButton
  }
}
</script>
<style lang="scss" scoped>
.block {
  margin-bottom: 10%;
}

.ae-slider {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  &_single {
    padding-top: 3rem;
    padding-left: 2rem;
  }
}

</style>
