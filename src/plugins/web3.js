import Web3 from 'web3'
import ABI from 'human-standard-token-abi'
import ethereumjs from 'ethereumjs-abi'

/**
 * Exporting IDs of the networks
 */
export const net = {
  mainnet: 1,
  kovan: 42
}

/**
 * Web3 Vue Plugin
 */
export default {
  install: function (Vue, options) {
    let $web3

    if (typeof window.web3 !== 'undefined') {
      console.warn('Using web3 detected from external source.')

      $web3 = new Web3(window.web3.currentProvider)

      Object.assign(Vue.prototype, { $web3 })
    }

    /**
     * Reference to the token contract
     * @type {string}
     */
    Vue.prototype.$tokenContract = options.tokenContract

    /**
     * Reference to the burner contract
     * @type {string}
     */
    Vue.prototype.$tokenBurner = options.tokenBurner

    /**
     * Check if the browser has web3 installed
     * @return {Promise<undefined>}
     */
    Vue.prototype.$hasWeb3 = async function () {
      if (typeof window.web3 === 'undefined') {
        throw Error('No web3 provider found on the browser!')
      }

      return undefined
    }

    /**
     * Check if the user is logged in to a web wallet
     * @return {Promise<void>}
     */
    Vue.prototype.$isLoggedIn = async function () {
      if (!$web3) {
        throw Error('$web3 is not installed!')
      }

      const accounts = await $web3.eth.getAccounts()

      if (accounts.length === 0) {
        throw Error('You\'re not logged in!')
      }
    }

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
    Vue.prototype.$getAEBalance = async function () {
      if (!$web3) {
        throw Error('$web3 is not installed!')
      }

      let coinbase = await $web3.eth.getCoinbase()
      let tokenContract = new $web3.eth.Contract(ABI, options.tokenContract)

      return tokenContract.methods.balanceOf(coinbase).call()
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
      const eth = await this.$getETHBalance()
      const gas = await $web3.eth.getGasPrice()

      if (eth < gas) {
        throw Error('Not enough gas to execute this transaction')
      }

      return { eth, gas }
    }

    /**
     * TODO: Figure out a way to estimate gas
     * @param _payload
     * @return {Promise<number>}
     */
    Vue.prototype.$estimateGas = async function (_payload) {
      return $web3.eth.estimateGas({
        to: options.tokenContract,
        data: _payload
      })
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
     * Encodes a payload into the transaction
     * @param _sender
     * @return {string}
     */
    Vue.prototype.$encodePayload = function (_sender) {
      if (!_sender) {
        throw Error(`_payload not found!`)
      }

      return `0x${
        ethereumjs.rawEncode(['uint256'], [0x80]).toString('hex')
      }${
        ethereumjs.rawEncode(['uint256'], [0x34]).toString('hex')
      }${
        $web3.utils.padRight($web3.utils.fromUtf8(_sender).slice(2), 64)
      }`
    }

    /**
     * Executes the migration of the tokens
     * @param _amount
     * @param _payload
     * @return {Promise<*|void|PromiEvent<T>>}
     */
    Vue.prototype.$migrateTokens = async function (_amount, _payload) {
      if (!$web3 || !_payload) {
        throw Error('$web3 or _payload not found!')
      }

      const token = new $web3.eth.Contract(ABI, options.tokenContract)
      const coinbase = await $web3.eth.getCoinbase()

      return token
        .methods
        .approveAndCall(
          options.tokenBurner,
          $web3.utils.toWei(_amount, 'ether'),
          _payload
        ).send({ from: coinbase })
    }

    /**
     * https://www.myetherwallet.com/?to=0x35d8830ea35e6df033eedb6d5045334a4e34f9f9&value=0&gaslimit=300000&data=cae9ca510000000000000000000000004ecd812b010d9db16b0fb7143a79786b65b89b0900000000000000000000000000000000000000000000000000038d7ea4c680000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000007400000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000034616b5f776d5a55765a5772566962504d32507553476867576d4d51586368455767525462774270377459556350794259486e7052000000000000000000000000#send-transaction
     * @return {Promise<void>}
     */
    Vue.prototype.$migrateThroughMEW = async function () {

    }
  }
}
