<template>
  <main class="view" :class="this.$options.name">
    <app-header />
    <article class="view__content">
      <ae-intro :title="intro.title" :intro="intro.intro">
      </ae-intro>
      <ae-block>
        <header>
          <h2>Meta Mask Wallet Detected</h2>
        </header>
        <section>
          <h3>Your Ethereum Address</h3>
          <ae-text face="mono-base">{{ account }}</ae-text>
          <ul>
            <li>
              AE ERC20 Balance <br>
              This amount will be available in the main net
              <ae-text face="mono-base">{{ AeBalance }}</ae-text>
            </li>
            <li>
              Sufficient ETH Balance <br>
              You need ETH to transfer your AE tokens
              <ae-text face="mono-base">{{ EtherumBalance }}</ae-text>
            </li>
          </ul>
        </section>
      </ae-block>
      <ae-block>
        <header>
          <h2>Migrate with Meta Mask</h2>
        </header>
        <br>
        <section>
          <h3>Your Ethereum Address</h3>
          <ae-text face="mono-base">{{ account }}</ae-text>
          <ul>
            <li>
              AE ERC20 Balance <br>
              This amount will be available in the main net
              <ae-text face="mono-base">{{ AeBalance }}</ae-text>
            </li>
            <li>
              Sufficient ETH Balance <br>
              You need ETH to transfer your AE tokens
              <ae-text face="mono-base">{{ EtherumBalance }}</ae-text>
            </li>
          </ul>
        </section>
      </ae-block>
    </article>
    <ae-nav />
  </main>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'
import AeIntro from '@/components/AeIntro.vue'
import AeBlock from '@/components/AeBlock.vue'
import AeBtn from '@/components/AeBtn.vue'
import AeCta from '@/components/AeCta.vue'
import AeAddressBlock from '@/components/AeAddressBlock.vue'
import AeNav from '@/components/AeNav.vue'
import AeFooter from '@/components/AeFooter.vue'
import { AeButton, AeIcon, AeText, AeAvatar } from '@aeternity/aepp-components'
import cmp from '@aeternity/aepp-components'

export default {
  name: 'PrepareTransactions',
  data: function () {
    return {
      scanner: false,
      address: false,
      intro: {
        title: 'Prepare your transaction with Meta Mask',
        intro: `The transaction you are going to make will be transfering all your ERC-20 AE Tokens the AE Migration Address. That address will take care of the migration for you.`
      },
      connections: [
        {
          name: 'Meta Mask',
          text: 'If you use Meta Mask, we are going to prepare the transaction here on this website.',
          img: '',
          link: '/',
          cta: 'CONNECT META MASK'

        },
        {
          name: 'MyEtherWallet',
          text: 'If you use MyEtherWallet, we are going to prepare the transaction there and you are going to be forwarded.',
          img: '',
          link: '',
          cta: 'Proceed on MEW'

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
    AeAddressBlock,
    AeButton: cmp.AeButton,
    AeIcon: cmp.AeIcon,
    AeText: cmp.AeText,
    AeAvatar: cmp.AeAvatar,
    AeFooter
  },
  computed: {
    account () {
      return this.$store.state.address
    },
    AeBalance () {
      return this.$store.state.AeBalance
    },
    EtherumBalance () {
      return this.$store.state.EtherumBalance
    }
  }
}
</script>
<style lang="scss" scoped></style>
