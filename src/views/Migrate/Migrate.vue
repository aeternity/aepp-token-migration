<template>
  <main class="view" :class="this.$options.name">
    <app-header />
    <article class="view__content">
      <section v-if="!addressInput">
        <ae-intro  :title="intro.title" :intro="intro.intro">
          <div class="intro-btns">
            <ae-button @click="scanCode" face="round" fill="primary" extend>scan code</ae-button>
            <ae-button @click="showAddress" face="flat">enter address manually</ae-button>
          </div>
        </ae-intro>
      </section>
      <section v-show="addressInput">
        <ae-intro  :subtitle="manualInput.title" :intro="manualInput.intro"/>
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
                <ae-button face="toolbar" @click="scanCode">
                  <ae-icon name="camera"/>
                  Scan
                </ae-button>
              </ae-toolbar>
            </ae-input>
          </template>
          <template slot="footer">
          </template>
        </ae-address-block>
      </section>
      <div class="webcam" v-if="scanner">
        <qrcode-reader @decode="onDecode" :paused="paused" :camera="!paused">
          <ae-button class="webcam__btn" @click="closeScanner" face="icon" fill="neutral">
            <ae-icon name="close"/>
          </ae-button>
          <div v-show="paused" class="webcam__frame">
            <ae-address-block :address="walletAddress">
              <template slot="body">
                <div class="wallet-address__field">
                  <ae-text face="mono-base">{{ walletAddress }}</ae-text>
                </div>
              </template>
              <template slot="footer">
                <ae-button @click="toggleRescan" face="flat">scan again</ae-button>
              </template>
            </ae-address-block>
          </div>
        </qrcode-reader>
      </div>

    </article>
    <ae-nav />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import { QrcodeReader } from 'vue-qrcode-reader'
import AppHeader from '@/components/AppHeader.vue'
import AeIntro from '@/components/AeIntro.vue'
import AeBlock from '@/components/AeBlock.vue'
import AeBtn from '@/components/AeBtn.vue'
import AeAddressBlock from '@/components/AeAddressBlock.vue'
import AeNav from '@/components/AeNav.vue'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeInput from '@aeternity/aepp-components/dist/ae-input'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

export default {
  name: 'Migrate',
  data: function () {
    return {
      scanner: false,
      addressInput: false,
      addressIsUnknown: true,
      paused: false,
      intro: {
        title: 'Supply us your new æternity address',
        intro: `This will be the address where all your tokens are going to be migrated to. When created with AirGap, you can easily scan it. When created with the Ledger you can easily copy it from the Ledger Live app.`
      },
      manualInput: {
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
    AeBtn,
    AeNav,
    AeText,
    AeInput,
    AeAddressBlock,
    AeButton,
    AeIcon,
    AeToolbar,
    QrcodeReader
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
      'AEToken',
      'TokenBurner',
      'walletAddress',
      'web3'
    ])
  }
}
</script>
<style lang="scss" scoped>
.webcam {
  background-color: $black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  &__btn {
    position: fixed;
    top: $spacer-l;
    right: $spacer-l;
    width: 2rem;
    height: 2rem;
  }
  &__frame {
    display: block;
    width: 100%;
    max-width: 55em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 12;
  }
}
.intro-btns{
  width: 18rem;
  margin: 2rem auto;
}
.wallet-address {
  &__field{
    background-color: $white;
    padding: $spacer-l $spacer-m;
    & .ae-text.mono-base[data-v-11a5cd56] {
      word-break: break-all;
      @include font-size(l);
    }
  }
}
</style>
