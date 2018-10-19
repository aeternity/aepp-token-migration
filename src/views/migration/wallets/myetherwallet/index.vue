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
        <div>
          <textarea v-model="inputData" />
        </div>
        <app-panel>
          <div>{{inputData}}</div>
        </app-panel>
        <app-panel>
          <div>{{decodedInputData}}</div>
        </app-panel>
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
      inputData: 'cae9ca510000000000000000000000004ecd812b010d9db16b0fb7143a79786b65b89b0900000000000000000000000000000000000000000000000000038d7ea4c680000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000007400000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000034616b5f776d5a55765a5772566962504d32507553476867576d4d51586368455767525462774270377459556350794259486e7052000000000000000000000000'
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
  methods: {
    inputChange (e) {
      console.log(e)
    }
  },
  computed: {
    decodedInputData () {
      return {
        // lol:  abi.simpleDecode("approveAndCall(address,uint256,bytes):(bool)", "0x" + this.inputData),
        // lol: abi.decode(tokenAbi, 'approveAndCall(address uint256 bytes)', this.inputData),
        callFunction: this.inputData.substr(0, 8) === 'cae9ca51',
        burnContract: this.inputData.substr(8, 64) === '0000000000000000000000004ecd812b010d9db16b0fb7143a79786b65b89b09',
        amount: Web3.utils.fromWei(Web3.utils.toBN('0x' + this.inputData.substr(72, 64)).toString()),
        aeternity: new Web3().utils.hexToString((new Web3()).eth.abi.decodeParameter('bytes', this.inputData.substr(136)))
      }
    },
    ...mapState([
      'web3'
    ])
  }
}
</script>
<style lang="scss" scoped></style>
