<template>
  <app-view>
    <app-header>
      <app-header-nav prog="6/6" text="Prepare your transaction with MetaMask" />
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Input Data Decoder Tool
        </template>
        <template slot="intro">
          Use this tool to decode the input data of the transaction
        </template>
      </app-intro>
      <app-panel padding shadow>
        <p>Input your desired AE Token Amount to migrate:</p>
        <p>Plese make sure you don't exceed your balance</p>
        <input type="text" v-model="amount" style="width: 100%; height: 40px; border: none; margin: 50px 0" />

        <p>generated Payload:</p>
        <textarea readonly v-model="payLoad" style="width: 100%; height: 110px; margin: 50px 0" />

        <p>decode Payload with this tool</p>
        <app-panel>
          <textarea v-model="inputData" style="width: 100%; height: 110px; margin: 50px 0" />
        </app-panel>
        <app-panel>
          <textarea v-model="JSON.stringify(decodedInputData)" style="width: 100%; height: 110px; margin: 50px 0" />
        </app-panel>

        <a target='_blank' :href='mewLink'>
          {{mewLink}}
        </a>
      </app-panel>
    </app-view>
  </app-view>
</template>

<script>
import Web3 from 'web3'
import { mapState, mapActions } from 'vuex'
import tokenBurnerAbi from '@/assets/token-burner-abi.json'
import abi from 'ethereumjs-abi'
import tokenAbi from 'human-standard-token-abi'
import AppIntro from '../../../../components/app-intro.vue'
import AeBlock from '@/components/ae-block.vue'
import AeAddressBlock from '@/components/ae-address-block.vue'
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import AeInput from '@aeternity/aepp-components/dist/ae-input'
window.Web4 = Web3
window.abi = abi

export default {
  name: 'myetherwallet',
  data: function () {
    return {
      amount: "0",
      inputData: ''
    }
  },
  components: {
    AppIntro,
    AeBlock,
    AeAddressBlock,
    AeButton,
    AeIcon,
    AeInput
  },
  mounted() {
    console.log(this.$web3.utils.padLeft(this.$web3.utils.toHex(this.$web3.utils.toWei("123456")).slice(2), 64))
  },
  methods: {
    inputChange (e) {
      console.log(e)
    },
    migrate (amount, walletAddress) {
      alert(amount +  walletAddress)
    }
  },
  computed: {
    payLoad () {
      return `${
        'cae9ca51'
      }${
        '0000000000000000000000004ecd812b010d9db16b0fb7143a79786b65b89b09'
      }${
        this.$web3.utils.padLeft(this.$web3.utils.toHex(this.$web3.utils.toWei(this.amount)).slice(2), 64)
      }${
        '0000000000000000000000000000000000000000000000000000000000000060'
      }${
        '0000000000000000000000000000000000000000000000000000000000000074'
      }${
        '0000000000000000000000000000000000000000000000000000000000000080'
      }${
        '0000000000000000000000000000000000000000000000000000000000000034'
      }${
        this.$web3.utils.padRight(this.$web3.utils.fromUtf8(this.walletAddress).slice(2), 64)
      }`
    },
    mewLink () {
      return `https://www.myetherwallet.com/?to=0x35d8830ea35e6df033eedb6d5045334a4e34f9f9&value=0&gaslimit=300000&data=${this.payLoad}#send-transaction`
        // '616b5f776d5a55765a5772566962504d32507553476867576d4d515863684557'
        // }${
        // '67525462774270377459556350794259486e7052000000000000000000000000'
        // }#send-transaction`
    },
    decodedInputData () {
      try {
        return {
          // lol:  abi.simpleDecode("approveAndCall(address,uint256,bytes):(bool)", "0x" + this.inputData),
          // lol: abi.decode(tokenAbi, 'approveAndCall(address uint256 bytes)', this.inputData),
          callFunction: this.inputData.substr(0, 8) === 'cae9ca51',
          burnContract: this.inputData.substr(8, 64) === '0000000000000000000000004ecd812b010d9db16b0fb7143a79786b65b89b09',
          amount: Web3.utils.fromWei(Web3.utils.toBN('0x' + this.inputData.substr(72, 64)).toString()),
          aeternity: new Web3().utils.hexToString((new Web3()).eth.abi.decodeParameter('bytes', this.inputData.substr(136)))
        }
      } catch (e) {
        /* handle error */
        return e
      }
    },
    ...mapState([
      'walletAddress'
    ])
  }
}
</script>
<style lang="scss" scoped></style>
