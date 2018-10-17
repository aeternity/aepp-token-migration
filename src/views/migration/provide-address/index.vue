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
      <app-intro>
        <template slot="title">
          Provide your new æternity address
        </template>
        <template slot="intro">
          All of your tokens will be migrated to this address.
        </template>
      </app-intro>
      <app-panel primary padding shadow>
        <ae-cta
          v-for="(input, index) in inputs"
          :key="input.id"
          :img="input.img"
          :title="input.title"
          :text="input.text">
          <router-link :to="input.link">
            <ae-button :class="[index === 0 ? 'secondary' : 'neutral']" face="round" extend>
              {{ input.cta }}
            </ae-button>
          </router-link>
        </ae-cta>
      </app-panel>
    </app-view>
  </app-view>
</template>
<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeText from '@aeternity/aepp-components/dist/ae-text'

import AppIntro from '@/components/app-intro.vue'
import AeBlock from '@/components/ae-block.vue'
import AeBtn from '@/components/ae-btn.vue'
import AeCta from '@/components/ae-cta.vue'

export default {
  name: 'provide-address',
  data: function () {
    return {
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
    AeBlock,
    AeBtn,
    AeCta,

    AppIntro,
    AeText,
    AeButton
  }
}
</script>
<style lang="scss" scoped></style>
