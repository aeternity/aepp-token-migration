<template>
  <app-view>
    <app-header>
      <app-header-nav
        prog="2/5"
        :prev="{ name: 'start' }"
        :next="{ name: 'provide-address' }"
        text="Create an Aeternity account with Airgap" />
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Create an æternity account with AirGap
        </template>
        <router-link to="/migration">
          <ae-button face="round" fill="secondary">I already have an account</ae-button>
        </router-link>
      </app-intro>
      <div class="block" v-for="tutorial in tutorials" :key="tutorial.id">
        <ae-slider
          :slides="tutorial.steps"
          :maintitle="tutorial.title"
          :condition="tutorial.steps.length > 1">
        </ae-slider>
      </div>
    </app-view>
    <app-footer>
      <router-link to="/migration">
        <ae-button face="round" fill="primary" shadow>Start Migration</ae-button>
      </router-link>
    </app-footer>
  </app-view>
</template>

<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'

import AppIntro from '@/components/app-intro.vue'
import AeSlider from '@/components/ae-slider.vue'

export default {
  name: 'Tutorials',
  data: function () {
    return {
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
    AppIntro,
    AeSlider,
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
