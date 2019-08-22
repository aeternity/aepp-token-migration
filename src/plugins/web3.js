import Web3 from 'web3'
import ABI from 'human-standard-token-abi'
import ethereumjs from 'ethereumjs-abi'
import base58check from 'base58check'
import CoinBaseService from '@/api-services/coinbase.service'
const BN = Web3.utils.BN
const GASLIMIT = new BN(300000)

/**
 * Exporting IDs of the networks
 */
export const network = {
  mainnet: 1,
  kovan: 42
}

/**
 * Web3 Vue Plugin
 */
export default {
  install: function (Vue, options) {
    let $web3

    /**
     * DApp check from MetaMask
     */
    if (window.ethereum) {
      $web3 = new Web3(window.ethereum)
    } else if (window.web3) {
      $web3 = new Web3(window.web3.currentProvider)
    } else {
      $web3 = new Web3()
    }

    /**
     * Assign web3 to the vue prototype
     */
    Object.assign(Vue.prototype, { $web3 })

    /**
     * Reference to the token contract
     * @type {string}
     */
    // Vue.prototype.$tokenContract = options.tokenContract

    /**
     * Reference to the burner contract
     * @type {string}
     */
    // Vue.prototype.$tokenBurner = options.tokenBurner

    /**
     * Check if the browser has web3 installed
     * @return {Promise<undefined>}
     */
    Vue.prototype.$hasWeb3 = async function () {
      if (typeof window.web3 === 'undefined' || typeof window.ethereum === 'undefined') {
        throw Error('No web3 provider found on the browser!')
      }

      return undefined
    }

    /**
     * Check if the user
     *   - Is logged in
     *   - has accounts
     *   - has access to MetaMask
     * @return {Promise<void>}
     */
    Vue.prototype.$isLoggedIn = async function () {
      let accounts = []

      if (!$web3) {
        throw Error('$web3 is not installed!')
      }

      if (window.web3) {
        accounts = await $web3.eth.getAccounts()
      }

      if (window.ethereum) {
        accounts = await window.ethereum.enable()
      }

      if (accounts.length === 0) {
        throw Error('You\'re not logged in!')
      }
    }

    /**
     * Return the main account address from MetaMask
     * @return {Promise<*>}
     */
    Vue.prototype.$getCoinbase = async function () {
      if (!$web3) {
        throw Error('$web3 is not installed!')
      }

      return $web3.eth.getCoinbase()
    }

    /**
     * Returns the balance in AE of the address holder
     * @return {Promise<any>}
     */
    Vue.prototype.$getAEInfo = async function () {
      if (!$web3) {
        throw Error('$web3 is not installed!')
      }

      let coinbase = await $web3.eth.getCoinbase()
      let result = (await CoinBaseService.getInfo(coinbase)).data

      return result
    }

    /**
     * Returns the balance in ETH of the account holder
     * @return {Promise<number>}
     */
    Vue.prototype.$getETHBalance = async function () {
      if (!$web3) {
        throw Error('$web3 is not installed!')
      }

      let coinbase = await $web3.eth.getCoinbase()

      return $web3.eth.getBalance(coinbase)
    }

    /**
     * Check if the account have enough ETH for gas
     * @return {Promise<{eth: *, gas: number}>}
     */
    Vue.prototype.$hasEnoughETHForGas = async function () {
      const eth = new BN(await this.$getETHBalance())
      const gas = new BN(await $web3.eth.getGasPrice()).mul(GASLIMIT)

      if (eth.lt(gas)) {
        throw Error('Not enough gas to execute this transaction')
      }

      return { eth, gas }
    }

    /**
     * TODO: Figure out a way to estimate gas
     * @return {Promise<number>}
     */
    Vue.prototype.$estimateGas = async function () {
      return $web3.eth.getGasPrice()
    }

    /**
     * Checks the network ID:
     * mainnet: 1
     * kovan: 42
     */
    Vue.prototype.$checkNetwork = async function (_id) {
      const networkId = await $web3.eth.net.getId()

      if (networkId !== _id) {
        throw Error('Wrong network')
      }

      return networkId
    }

    /**
     * Encodes extraData into the transaction
     * @param _sender
     * @return {string}
     */
    Vue.prototype.$encodeExtraData = function (_sender) {
      if (!_sender) {
        throw Error(`_sender not found!`)
      }
      let slicedAeddress = $web3.utils.fromUtf8(_sender).slice(2)
      let len = $web3.utils.toHex(slicedAeddress.length / 2)

      return `0x${
        ethereumjs.rawEncode(['uint256'], [0x80]).toString('hex')
      }${
        ethereumjs.rawEncode(['uint256'], [len]).toString('hex')
      }${
        $web3.utils.padRight(slicedAeddress, 64)
      }`
    }

    /**
     * Executes the migration of the tokens
     * @param _amount
     * @param _sender
     * @param _coinbase
     * @return {Promise<*>}
     */
    Vue.prototype.$migrateTokens = async function (_amount, _sender, _coinbase) {
      if (!$web3 || !_sender || !_coinbase) {
        throw Error('$web3 or _sender or _coinbase not found!')
      }

      let msg = 'Hello World'
      // let prefix = "\x19Ethereum Signed Message:\n" + msg.length
      let messageDigest = $web3.utils.sha3(msg)
      let signature = await $web3.eth.sign(messageDigest, _coinbase)

      const migrationObj = {
        signature,
        messageDigest,
        aeAddress: _sender,
        ethPubKey: _coinbase
      }

      const txInfo = await CoinBaseService.migrate(migrationObj)
      return txInfo
    }

    /**
     * Executes the migration of the tokens
     * @param _amount
     * @param _extraData
     * @return {Promise<*>}
     */
    Vue.prototype.$generatePayload = function (_amount, _extraData) {
      if (!$web3 || !_extraData) {
        throw Error('$web3 or _extraData not found!')
      }

      const token = new $web3.eth.Contract(ABI)

      return token
        .methods
        .approveAndCall(
          options.tokenBurner,
          $web3.utils.toWei(_amount, 'ether'),
          _extraData
        ).encodeABI().slice(2)
    }

    /**
     * Generates MEW URL String
     * @param _contract
     * @param _gas
     * @param _payload
     * @return {string}
     */
    Vue.prototype.$generateMEWURI = function (_contract, _payload, _gas = GASLIMIT) {
      return `https://vintage.myetherwallet.com/?to=${
        _contract
      }&value=0&gaslimit=${
        _gas
      }&data=${
        _payload
      }#send-transaction`
    }

    /**
     * Base 58 check for aeternity address
     * @example ak_v12Pf9vWcN5tSuN2SeFL3RmYUDpu7zeeUsSuAYwyGDMW9NX3B
     * @param address
     * @return {{}}
     */
    Vue.prototype.$base58Check = function (address) {
      return base58check.decode(address.replace(/ak_/, ''), 'hex')
    }
  }
}
