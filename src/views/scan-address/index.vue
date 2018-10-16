<template>
  <main class="view" :class="this.$options.name">
    <app-header />
    <article class="view__content">
      <ae-intro :subtitle="intro.title" :intro="intro.intro"/>
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
      <div class="webcam" v-show="scanner">
        <qrcode-reader @decode="onDecode" :paused="paused" :camera="!paused">
          <ae-button class="webcam__btn" @click="closeScanner" face="icon" fill="neutral">
            <ae-icon name="close"/>
          </ae-button>
        </qrcode-reader>
      </div>
    </article>
    <ae-nav />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import { QrcodeReader } from 'vue-qrcode-reader'
import AppHeader from '@/components/app-header.vue'
import AeIntro from '@/components/ae-intro.vue'
import AeBlock from '@/components/ae-block.vue'
import AeAddressBlock from '@/components/ae-address-block.vue'
import AeNav from '@/components/ae-nav.vue'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'

export default {
  name: 'Migrate',
  data: function () {
    return {
      scanner: true,
      addressInput: false,
      addressIsUnknown: true,
      paused: false,
      intro: {
        title: 'Scan in your new æternity address',
        intro: `This will be the address where all your tokens are going to be migrated to. When created with AirGap, you can easily scan it. When created with the Ledger you can easily copy it from the Ledger Live app.`
      }
    }
  },
  components: {
    AppHeader,
    AeIntro,
    AeBlock,
    AeNav,
    AeIcon,
    AeText,
    AeAddressBlock,
    AeButton,
    QrcodeReader
  },
  methods: {
    onDecode (content) {
      this.paused = true
      this.scanner = false
      this.$store.commit('setWalletAddress', content)
    },
    closeScanner () {
      this.scanner = false
    },
    toggleRescan () {
      this.paused = false
      this.scanner = true
      this.$store.commit('setWalletAddress', '')
    }
  },
  computed: {
    ...mapState([
      'walletAddress'
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
