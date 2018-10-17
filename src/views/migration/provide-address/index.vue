<template>
  <app-view>
    <app-header>
      <app-header-nav
        prog="3/5"
        :prev="{ name: 'tutorials' }"
        :next="{ name: '' }"
        text="Enter your Aeternity account address" />
    </app-header>
    <app-view container>
      <article class="view__content">
        <ae-intro :title="intro.title" :intro="intro.intro"/>
        <ae-block to="/input-address" name="Enter Address Manually" >
          <ae-cta
            v-for="(input, index) in inputs"
            :key="input.id"
            :img="input.img"
            :title="input.title"
            :text="input.text">
            <router-link :to="input.link">
              <ae-button
                :class="[index === 0 ? 'secondary' : 'neutral']"
                face="round"
                extend>
                {{ input.cta }}
              </ae-button>
            </router-link>
          </ae-cta>
        </ae-block>
      </article>
    </app-view>
  </app-view>
</template>

<script>
import AeIntro from '@/components/ae-intro.vue'
import AeBlock from '@/components/ae-block.vue'
import AeBtn from '@/components/ae-btn.vue'
import AeCta from '@/components/ae-cta.vue'
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeText from '@aeternity/aepp-components/dist/ae-text'

export default {
  name: 'ProvideAddress',
  data: function () {
    return {
      scanner: false,
      addressInput: false,
      addressIsUnknown: true,
      paused: false,
      intro: {
        title: 'Provide your new æternity address',
        intro: `All of your tokens will be migrated to this address.`
      },
      inputs: [
        {
          img: require('@/assets/graphics/airgap-logo.svg'),
          title: 'Airgap Vault',
          text: 'This creates an æternity key pair with AirGap, a secure way to store your key pair in an mobile app.',
          link: '/scan-address',
          cta: 'Scan from Airgap'
        },
        {
          img: require('@/assets/graphics/ledger-logo.svg'),
          title: 'Ledger Wallet',
          text: 'This creates an æternity key pair on the Ledger Nano S. A secure way to store your key pair on a hardware ledger.',
          link: '/read-from-ledger',
          cta: 'Read from Ledger'
        }
      ]
    }
  },
  components: {
    AeIntro,
    AeBlock,
    AeBtn,
    AeCta,
    AeText,
    AeButton
  }
}
</script>
<style lang="scss" scoped>
</style>
