<template>
  <main class="view" :class="this.$options.name">
    <app-header />
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
              extend
            >
              {{ input.cta }}
            </ae-button>
          </router-link>
        </ae-cta>
      </ae-block>
    </article>
    <ae-nav />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/AppHeader.vue'
import AeIntro from '@/components/AeIntro.vue'
import AeBlock from '@/components/AeBlock.vue'
import AeBtn from '@/components/AeBtn.vue'
import AeAddressBlock from '@/components/AeAddressBlock.vue'
import AeNav from '@/components/AeNav.vue'
import AeCta from '@/components/AeCta.vue'
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
    AppHeader,
    AeIntro,
    AeBlock,
    AeBtn,
    AeNav,
    AeCta,
    AeText,
    AeButton
  },
  methods: {
  },
  computed: {
  }
}
</script>
<style lang="scss" scoped>
</style>
