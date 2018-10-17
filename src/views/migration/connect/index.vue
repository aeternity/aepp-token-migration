<template>
  <app-view>
    <app-header>
      <app-header-nav
        prog="4/5"
        :prev="{ name: 'tutorials' }"
        :next="{ name: '' }"
        text="Select your wallet where you hold your tokens" />
    </app-header>
    <app-view container>
      <article class="view__content">
        <ae-intro :title="intro.title" :intro="intro.intro" />
        <ae-block>
          <ae-cta
            v-for="(connection, index) in connections"
            :key="connection.id"
            :img="connection.img"
            :title="connection.name"
            :text="connection.text"
            :data-index="index">
            <router-link v-if="index === 0" to="/prepare-transactions">
              <ae-button fill="secondary" face="round" extend>
                {{ connection.cta }}
              </ae-button>
            </router-link>
            <ae-button v-else fill="neutral" face="round" extend>
              {{ connection.cta }}
            </ae-button>
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
import AeAddressBlock from '@/components/ae-address-block.vue'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

export default {
  name: 'Connect',
  data: function () {
    return {
      scanner: false,
      // address: false,
      intro: {
        title: 'Select the wallet where you hold your tokens',
        intro: `This way we can transfer your AE tokens to the AE Migration Address, which will verify your tokens and let them appear in æternity’s Mainnet.`
      },
      connections: [
        {
          name: 'Meta Mask',
          text: 'If you use Meta Mask, we are going to prepare the transaction here on this website.',
          img: require('@/assets/graphics/metamask-fox.svg'),
          link: '/prepare-transactions',
          cta: 'CONNECT META MASK'
        },
        {
          name: 'MyEtherWallet',
          text: 'If you use MyEtherWallet, we are going to prepare the transaction there and you are going to be forwarded.',
          img: require('@/assets/graphics/myetherwallet.svg'),
          link: '',
          cta: 'Proceed on MEW'
        }

      ]

    }
  },
  components: {
    AeIntro,
    AeBlock,
    AeBtn,
    AeCta,
    AeAddressBlock,
    AeButton,
    AeIcon
  }
}
</script>
<style lang="scss" scoped></style>
