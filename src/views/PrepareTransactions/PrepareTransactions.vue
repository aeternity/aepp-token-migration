<template>
  <main class="view" :class="this.$options.name">
    <app-header />
    <article class="view__content">
      <ae-intro :title="intro.title" :intro="intro.intro"></ae-intro>
      <!--<ae-block>-->
        <!--<header>-->
          <!--<h2>Meta Mask Wallet Detected</h2>-->
        <!--</header>-->
        <!--<section>-->
          <!--<h3>Your Ethereum Address</h3>-->
          <!--<ae-text face="mono-base">{{ account }}</ae-text>-->
          <!--<ul>-->
            <!--<li>-->
              <!--AE ERC20 Balance <br>-->
              <!--This amount will be available in the main net-->
              <!--<ae-text face="mono-base">{{ AeBalance }}</ae-text>-->
            <!--</li>-->
            <!--<li>-->
              <!--Sufficient ETH Balance <br>-->
              <!--You need ETH to transfer your AE tokens-->
              <!--<ae-text face="mono-base">{{ EtherumBalance }}</ae-text>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</section>-->
      <!--</ae-block>-->
      <!--<ae-block>-->
        <!--<header>-->
          <!--<h2>Migrate with Meta Mask</h2>-->
        <!--</header>-->
        <!--<br>-->
        <!--<section>-->
          <!--<h3>Your Ethereum Address</h3>-->
          <!--<ae-text face="mono-base">{{ account }}</ae-text>-->
          <!--<ul>-->
            <!--<li>-->
              <!--AE ERC20 Balance <br>-->
              <!--This amount will be available in the main net-->
              <!--<ae-text face="mono-base">{{ AeBalance }}</ae-text>-->
            <!--</li>-->
            <!--<li>-->
              <!--Sufficient ETH Balance <br>-->
              <!--You need ETH to transfer your AE tokens-->
              <!--<ae-text face="mono-base">{{ EtherumBalance }}</ae-text>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</section>-->
      <!--</ae-block>-->

      <section style="width: 100%;">
        <h2>Migration Process</h2>
        <p>
          The tokens aren’t being transfered directly to your æternity address,
          but first to an AE Migration address.
          The moment that you can expect your tokens in the Mainnet, depends on the phase.
        </p>
      </section>
      <br />
      <section style="width: 100%;">
        <ae-avatar :address="walletAddress" />
        {{ balance }}
      </section>
      <section style="width: 100%;">
        <input type="text" v-model="amount" style="width: 100%; height: 40px; border: none; margin: 50px 0" />
        <br />
        <ae-button face="round" fill="secondary" extend @click="connectMetaMask(walletAddress, amount)">Migrate</ae-button>
      </section>
    </article>
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

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeAvatar from '@aeternity/aepp-components/dist/ae-identicon'
import AeInput from '@aeternity/aepp-components/src/components/ae-input/ae-input'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'

import Web3 from 'web3'
import { mapState, mapActions } from 'vuex'
import tokenBurnerAbi from '../../assets/token-burner-abi.json'
import ethereumjs from 'ethereumjs-abi'

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

      ],
      addresses: [],

      /**
       * Data
       */
      balance: 0,
      web3: {},
      amount: 0
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
    AeText,
    AeAvatar,
    AeInput,
    AeToolbar,
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
    },
    ...mapState([
      'AEToken',
      'TokenBurner',
      'walletAddress',
      'web3'
    ])
  },
  methods: {

    setEthereumBalance (balance) {
      this.$data.balance = this.web3.utils.fromWei(balance, 'ether')
    },

    async getBalanceOf () {
      var web3 = this.web3
      var coinbase = await web3.eth.getCoinbase()
      var abi = require('human-standard-token-abi')
      var token = new web3.eth.Contract(abi, this.AEToken)
      token.methods.balanceOf(coinbase).call().then((res) => this.setEthereumBalance(res))
    },

    /**
     * Connect to Metamask
     */
    async connectMetaMask (_sender, _amount) {
      const abi = require('human-standard-token-abi')
      const token = new this.web3.eth.Contract(abi, this.AEToken)
      // Why is there an instance here? of the token burner
      // var tokenBurner = new this.web3.eth.Contract(tokenBurnerAbi, this.TokenBurner)
      const coinbase = await this.web3.eth.getCoinbase()
      /**
       * Payload should never be
       * generated when there's no address
       *
       * always doublecheck if there is an address
       */
      const payload = ethereumjs
        .rawEncode(['uint256'], [0x80])
        .toString('hex') + ethereumjs.rawEncode(['uint256'], [0x34]).toString('hex') + this.web3.utils.padRight(
        // this.web3.utils.fromUtf8('ak_wmZUvZWrVibPM2PuSGhgWmMQXchEWgRTbwBp7tYUcPyBYHnpR').slice(2), 64
        this.web3.utils.fromUtf8(_sender).slice(2), 64
      )

      token
        .methods
        .approveAndCall(this.TokenBurner, this.web3.utils.toWei(_amount, 'ether'), '0x' + payload)
        .send({ from: coinbase })
        .then((results) => {
          console.log(results)
          this.$router.push('/migration-results')
        })

      // AEToken.setProvider(web3.currentProvider)
      // TokenBurner.setProvider(web3.currentProvider)

      // this.web3.eth.getAccounts((err, accs) => {
      //  console.log(err, accs)
      // })
    }
  },
  mounted: function () {
    if (typeof window.web3 !== 'undefined') {
      console.warn(`
        Using web3 detected from external source.
        If you find that your accounts don't appear or you have 0 Fluyd,
        ensure you've configured that source properly.
        If using MetaMask, see the following link.
        Feel free to delete this warning. 🙂 http://truffleframework.com/tutorials/truffle-and-metamask
      `)

      /**
       * Use Mist/MetaMask's provider
       * @type {Web3}
       */
      Object.assign(this.$data, { web3: new Web3(window.web3.currentProvider) })

      /**
       * Call the balance method
       */
      this.getBalanceOf()
    } else {
      console.log('Kauf dir Metamask')
    }
  }
}
</script>
<style lang="scss" scoped></style>
