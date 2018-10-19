<template>
  <app-view>
    <app-header>
      <app-header-nav prog="4/5" text="Select your wallet where you hold your tokens" />
    </app-header>
    <app-view container>
      <article class="view__content">
        <app-intro>
          <template slot="title">
            Enter your æternity account address
          </template>
          <template slot="intro">
            Please make sure the address below is the correct æternity address which you made.
            All AE tokens will be sent to this address.
            You cannot change the address your tokens will be sent to later!
          </template>
        </app-intro>
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
    </app-view>
  </app-view>
</template>

<script>
import { mapState } from 'vuex'
import AeBlock from '@/components/ae-block.vue'
import AeAddressBlock from '@/components/ae-address-block.vue'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeInput from '@aeternity/aepp-components/dist/ae-input'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

import AppIntro from '../../../components/app-intro.vue'

export default {
  name: 'input-address',
  data: function () {
    return {
      scanner: false,
      addressInput: false,
      addressIsUnknown: true,
      paused: false
    }
  },
  components: {
    AppIntro,
    AeBlock,
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