<template>
  <main class="view" :class="this.$options.name">
    <app-header />
    <article class="view__content">
      <ae-intro :title="intro.title" :intro="intro.intro" />
      <ae-block>
        <ae-cta
          v-for="connection in connections"
          :key="connection.id"
          :img="connection.img"
          :title="connection.name"
          :text="connection.text">
          <ae-button
            fill="secondary"
            face="round"
            extend
            @click="setMetaMaskWeb3Provider">
              Get Started
          </ae-button>
          <ae-button
            fill="secondary"
            face="round"
            extend
            @click="connectMetaMask">
             connectMetaMask
          </ae-button>
        <!-- <router-link :to="connection.link">
        </router-link> -->
        </ae-cta>
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
import VueQrReader from 'vue-qr-reader/dist/lib/vue-qr-reader.umd.js'
import { AeButton, AeIcon } from '@aeternity/aepp-components'
import Web3 from 'web3'
import { mapState, mapActions } from 'vuex'
import tokenBurnerAbi from '../../assets/token-burner-abi.json'
import ethereumjs from 'ethereumjs-abi'

export default {
  name: 'Connect',
  data: function () {
    return {
      scanner: false,
      // address: false,
      intro: {
        title: 'Connect your Ethereum Wallet',
        intro: `This way we can transfer your AE tokens to the AE Migration Address, which will verify your tokens and let them appear in æternity’s Mainnet.`
      },
      connections: [
        {
          name: 'Meta Mask',
          text: 'If you use Meta Mask, we are going to prepare the transaction here on this website.',
          img: '',
          link: '/PrepareTransactions',
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
    AeButton,
    AeIcon,
    AeFooter,
    VueQrReader
  },
  methods: {
    async setMetaMaskWeb3Provider () {
      var web3
      if (typeof window.web3 !== 'undefined') {
        console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 Fluyd, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. 🙂 http://truffleframework.com/tutorials/truffle-and-metamask")

        // Use Mist/MetaMask's provider
        web3 = new Web3(window.web3.currentProvider)
        this.setWeb3(web3)
        window.web4 = web3
      } else {
        alert('Kauf dir Metamask')
      }
    },
    async getBalanceOf() {
      var web3 = this.web3
      var coinbase = await web3.eth.getCoinbase()
      var abi = require('human-standard-token-abi')
      var token = new web3.eth.Contract(abi, this.AEToken)
      token.methods.getBalanceOf(coinbase).call().then((res) => this.setEtherumBalance(res))
    },
    async connectMetaMask () {
      var web3 = this.web3
      var abi = require('human-standard-token-abi')
      var token = new web3.eth.Contract(abi, this.AEToken)
      var tokenBurner = new web3.eth.Contract(tokenBurnerAbi, this.TokenBurner)
      console.log(token)
      window.token = token
      window.tokenBurner = tokenBurner
      var coinbase = await web3.eth.getCoinbase()
      var a = ethereumjs.rawEncode(['uint256'], [0x80]).toString('hex') + ethereumjs.rawEncode(['uint256'], [0x34]).toString('hex') + web3.utils.padRight(web3.utils.fromUtf8("ak_wmZUvZWrVibPM2PuSGhgWmMQXchEWgRTbwBp7tYUcPyBYHnpR").slice(2), 64)
      token.methods.approveAndCall(
        this.TokenBurner,
        web3.utils.toWei('0.001'),
        '0x' + a
      )
      .send({ from: coinbase })
      .then(result => {
        console.log('result')
        console.log(result)
      })
      // AEToken.setProvider(web3.currentProvider)
      // TokenBurner.setProvider(web3.currentProvider)
      web3.eth.getAccounts((err, accs) => {
        console.log(err, accs)
      })
    },
    ...mapActions([
      'setWeb3'
    ])
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
<style lang="scss" scoped>
</style>
