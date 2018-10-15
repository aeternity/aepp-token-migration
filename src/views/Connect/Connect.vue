<template>
  <main class="view" :class="this.$options.name">
    <app-header />
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
          <router-link v-if="index === 0" to="/PrepareTransactions">
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
    <ae-nav />
  </main>
</template>

<script>
import Web3 from 'web3'
import { mapState, mapActions } from 'vuex'
import tokenBurnerAbi from '../../assets/token-burner-abi.json'
import ethereumjs from 'ethereumjs-abi'

import AppHeader from '@/components/AppHeader.vue'
import AeIntro from '@/components/AeIntro.vue'
import AeBlock from '@/components/AeBlock.vue'
import AeBtn from '@/components/AeBtn.vue'
import AeCta from '@/components/AeCta.vue'
import AeAddressBlock from '@/components/AeAddressBlock.vue'
import AeNav from '@/components/AeNav.vue'
import AeFooter from '@/components/AeFooter.vue'

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
          link: '/PrepareTransactions',
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
    AppHeader,
    AeIntro,
    AeBlock,
    AeBtn,
    AeNav,
    AeCta,
    AeAddressBlock,
    AeButton,
    AeIcon,
    AeFooter
  },
  methods: {
    //async setMetaMaskWeb3Provider () {
    //  var web3
    //  if (typeof window.web3 !== 'undefined') {
    //    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 Fluyd, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. 🙂 http://truffleframework.com/tutorials/truffle-and-metamask")
    //
    //    // Use Mist/MetaMask's provider
    //    web3 = new Web3(window.web3.currentProvider)
    //    this.setWeb3(web3)
    //    window.web4 = web3
    //  } else {
    //    alert('Kauf dir Metamask')
    //  }
    //},
    //
    //...mapActions([
    //  'setWeb3'
    //])
  },
  computed: {
    account () {
      return this.address
    },
    ...mapState([
      'AEToken',
      'TokenBurner',
      'address',
      'web3'
    ])
  }
}
</script>
<style lang="scss" scoped></style>
