<template>
  <app-view>
    <app-header>
      <app-header-nav
        prog="3/5"
        :prev="{ name: 'tutorials' }"
        :next="{ name: '' }"
        text="Enter your Aeternity account address"/>
    </app-header>

    <app-view container>
      <ae-intro
        subtitle="Enter your æternity account address"
        intro="Please make sure the address below is the correct æternity address which you made. All AE tokens will be sent to this address. You cannot change the address your tokens will be sent to later!"
      />
      <app-panel primary padding shadow>
        <ae-input label="Your æternity address" placeholder="..." v-model="manualAddressInput">
          <template slot="body">
            <input type="text" >
          </template>
          <ae-toolbar slot="footer"  align="right">
            <ae-button face="toolbar">
              <ae-icon name="paste" />
              Paste
            </ae-button>
            <ae-button face="toolbar">
              <ae-icon name="paste" />
              Scan
            </ae-button>
          </ae-toolbar>
        </ae-input>
        <ae-check name="approve"  v-model="isChecked">
          <ae-text face="sans-s">I am certain my address and identicon are correct</ae-text>
        </ae-check>
        <ae-button face="round" fill="primary">Continue</ae-button>
        <ae-button @click="toggleRescan" face="flat" fill="primary">Scan Again</ae-button>
      </app-panel>
    </app-view>

    <div class="app-scan" v-show="scanner">
      <app-header>
        <app-header-nav
          prog="3/5"
          :prev="{ name: 'tutorials' }"
          :next="{ name: '' }"
          text="Enter your Aeternity account address"/>
      </app-header>
      <qrcode-reader @decode="onDecode" :paused="paused" :camera="!paused">
        <ae-button class="app-scan__btn" @click="closeScanner" face="icon" fill="neutral">
          <ae-icon name="close"/>
        </ae-button>
      </qrcode-reader>
    </div>

  </app-view>
</template>

<script>
import { mapState } from 'vuex'
import { QrcodeReader } from 'vue-qrcode-reader'

import AeIntro from '@/components/ae-intro.vue'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeCheck from '@aeternity/aepp-components/dist/ae-check'
import AeInput from '@aeternity/aepp-components/dist/ae-input'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

export default {
  name: 'Migrate',
  data: function () {
    return {
      scanner: true,
      addressInput: false,
      addressIsUnknown: true,
      paused: false,
      intro: {
        title: '',
        intro: ``
      }
    }
  },
  components: {
    AeIntro,
    AeIcon,
    AeText,
    AeButton,
    AeCheck,
    AeInput,
    AeToolbar,
    QrcodeReader
  },
  computed: {
    ...mapState([
      'walletAddress'
    ])
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
      this.$store.commit('setWalletAddress', null)
    }
  }
}
</script>
<style lang="scss" scoped>
.intro-btns {
  width: 18rem;
  margin: 2rem auto;
}

.wallet-address {
  &__field {
    background-color: $white;
    padding: $spacer-l $spacer-m;
    & .ae-text.mono-base[data-v-11a5cd56] {
      word-break: break-all;
      @include font-size(l);
    }
  }
}

.app-scan {
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
    top: 6rem;
    right: 2rem;
  }
}
</style>
