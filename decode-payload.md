
    <!--<app-view container>-->
    <!--<app-intro>-->
    <!--<template slot="title">-->
    <!--Input Data Decoder Tool-->
    <!--</template>-->
    <!--<template slot="intro">-->
    <!--Use this tool to decode the input data of the transaction-->
    <!--</template>-->
    <!--</app-intro>-->
    <!--<app-panel padding shadow>-->
    <!--<p>Input your desired AE Token Amount to migrate:</p>-->
    <!--<p>Plese make sure you don't exceed your balance</p>-->
    <!--<input type="text" v-model="amount" style="width: 100%; height: 40px; border: none; margin: 50px 0"/>-->

    <!--<p>generated Payload:</p>-->
    <!--<textarea readonly v-model="payLoad" style="width: 100%; height: 110px; margin: 50px 0"/>-->

    <!--<p>decode Payload with this tool</p>-->
    <!--<app-panel>-->
    <!--<textarea v-model="inputData" style="width: 100%; height: 110px; margin: 50px 0"/>-->
    <!--</app-panel>-->
    <!--<app-panel>-->
    <!--<textarea v-model="JSON.stringify(decodedInputData)" style="width: 100%; height: 110px; margin: 50px 0"/>-->
    <!--</app-panel>-->

    <!--<a target='_blank' :href='mewLink'>-->
    <!--{{mewLink}}-->
    <!--</a>-->
    <!--{{ migrate }}-->
    <!--</app-panel>-->
    <!--</app-view>-->


//payLoad () {
//  return new (new Web3()).eth.Contract(tokenAbi).methods.approveAndCall(
//    // TODO: get burner token contract address from plugin
//    '0x4ecd812b010d9db16b0fb7143a79786b65b89b09',
//    this.$web3.utils.toWei(this.amount, 'ether'),
//    this.$encodeExtraData(this.walletAddress)
//  ).encodeABI().slice(2)
//},
//mewLink () {
//  return `https://www.myetherwallet.com/?to=0x35d8830ea35e6df033eedb6d5045334a4e34f9f9&value=0&gaslimit=300000&data=${this.payLoad}#send-transaction`
//  // '616b5f776d5a55765a5772566962504d32507553476867576d4d515863684557'
//  // }${
//  // '67525462774270377459556350794259486e7052000000000000000000000000'
//  // }#send-transaction`
//},

//decodedInputData () {
//  try {
//    return {
//      // lol:  abi.simpleDecode("approveAndCall(address,uint256,bytes):(bool)", "0x" + this.inputData),
//      // lol: abi.decode(tokenAbi, 'approveAndCall(address uint256 bytes)', this.inputData),
//      callFunction: this.inputData.substr(0, 8) === 'cae9ca51',
//      burnContract: this.inputData.substr(8, 64) === '0000000000000000000000004ecd812b010d9db16b0fb7143a79786b65b89b09',
//      amount: Web3.utils.fromWei(Web3.utils.toBN('0x' + this.inputData.substr(72, 64)).toString()),
//      aeternity: new Web3().utils.hexToString((new Web3()).eth.abi.decodeParameter('bytes', this.inputData.substr(136)))
//    }
//  } catch (e) {
//    /* handle error */
//    return e
//  }
//},
