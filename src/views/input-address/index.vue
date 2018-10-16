<template>
  <main class="view" :class="this.$options.name">
    <app-header />
    <article class="view__content">
        <ae-intro  :subtitle="intro.title" :intro="intro.intro"/>
        <ae-address-block :address="walletAddress" >
          <template slot="body">
            <input type="text" v-model="manualAddressInput">
            <ae-input label="Your æternity address" placeholder="..." v-model="manualAddressInput">
              <template slot="body">
                <input type="text" >
              </template>
              <ae-toolbar slot="footer"  align="right">
                <ae-button face="toolbar">
                  <ae-icon name="paste" />
                  Paste
                </ae-button>
              </ae-toolbar>
            </ae-input>
          </template>
        </ae-address-block>
    </article>
    <ae-nav />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/app-header.vue'
import AeIntro from '@/components/ae-intro.vue'
import AeBlock from '@/components/ae-block.vue'
import AeAddressBlock from '@/components/ae-address-block.vue'
import AeNav from '@/components/ae-nav.vue'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeInput from '@aeternity/aepp-components/dist/ae-input'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

export default {
  name: 'input-address',
  data: function () {
    return {
      scanner: false,
      addressInput: false,
      addressIsUnknown: true,
      paused: false,
      intro: {
        title: 'Enter your æternity account address',
        intro: `Please make sure the address below is the correct æternity address which you made. All AE tokens will be sent to this address. You cannot change the address your tokens will be sent to later!
        `
      }
    }
  },
  components: {
    AppHeader,
    AeIntro,
    AeBlock,
    AeNav,
    AeText,
    AeInput,
    AeAddressBlock,
    AeButton,
    AeIcon,
    AeToolbar
  },
  methods: {
    addManualAddressInput (value) {
      this.$store.commit('setWalletAddress', value)
    },
    onDecode (content) {
      this.paused = true
      this.$store.commit('setWalletAddress', content)
    },
    scanCode () {
      this.scanner = true
    },
    showAddress () {
      this.addressInput = true
    },
    closeScanner () {
      this.scanner = false
    },
    toggleRescan () {
      this.paused = false
      this.$store.commit('setWalletAddress', '')
    }
  },
  computed: {
    manualAddressInput: {
      get () {
        return this.$store.state.walletAddress
      },
      set (value) {
        this.$store.commit('setWalletAddress', value)
      }
    },
    ...mapState([
      'walletAddress'
    ])
  }
}
</script>
<style lang="scss" scoped>
.wallet-address {
  &__field{
    background-color: $white;
    padding: $spacer-l $spacer-m;

    & .ae-text.mono-base[data-v-11a5cd56] {
      @include font-size(l);

      word-break: break-all;
    }
  }
}
</style>
