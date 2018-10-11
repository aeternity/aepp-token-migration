<template>
  <main class="view" :class="this.$options.name">
    <app-header></app-header>
    <article class="view__content">
      <ae-intro :title="intro.title" :intro="intro.intro" >
        <ae-button v-if="!account" @click="scanCode" face="round" fill="primary" extend>scan code</ae-button>
        <ae-button v-else="account" @click="scanCode" face="flat" >scan again</ae-button>
        <ae-button @click="showAddress" face="flat">enter address manually</ae-button>
      </ae-intro>
      <div class="webcam" v-if="scanner">
        <ae-button class="webcam__btn" @click="closeScanner" face="icon" fill="neutral">
          <ae-icon name="close"/>
        </ae-button>
        <vue-qr-reader v-on:code-scanned="codeArrived" :responsive="true"/>
      </div>
      <ae-address-block v-show="account || showAddress" :address="account">

      </ae-address-block>
    </article>
    <ae-nav></ae-nav>
  </main>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'
import AeIntro from '@/components/AeIntro.vue'
import AeBlock from '@/components/AeBlock.vue'
import AeBtn from '@/components/AeBtn.vue'
import AeAddressBlock from '@/components/AeAddressBlock.vue'
import AeNav from '@/components/AeNav.vue'
import AeFooter from '@/components/AeFooter.vue'
import VueQrReader from 'vue-qr-reader/dist/lib/vue-qr-reader.umd.js'
import { AeButton, AeIcon } from '@aeternity/aepp-components'
import cmp from '@aeternity/aepp-components'
export default {
  name: 'Migrate',
  data: function () {
    return {
      scanner: false,
      address: false,
      intro: {
        title: 'Supply us your new æternity address',
        intro: `This will be the address where all your tokens are going to be migrated to. When created with AirGap, you can easily scan it. When created with the Ledger you can easily copy it from the Ledger Live app.`
      }
    }
  },
  components: {
    AppHeader,
    AeIntro,
    AeBlock,
    AeBtn,
    AeNav,
    AeAddressBlock,
    AeButton: cmp.AeButton,
    AeIcon: cmp.AeIcon,
    AeFooter,
    VueQrReader
  },
  methods: {
    codeArrived (code) {
      let address = code.replace('airgap-wallet://import?data=', '').replace('=', '')
      // console.log(address)
      this.$store.commit('setAddress', address)
      this.scanner = false
    },
    scanCode () {
      this.scanner = true
    },
    showAddress () {
      this.address = true
    },
    closeScanner () {
      this.scanner = false
    }
  },
  computed: {
    account () {
      return this.$store.state.address
    }
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
      top: 0;
      right: 0;
      width: 2rem;
      height: 2rem;

    }
  }

</style>
