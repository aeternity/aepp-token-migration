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
    } else {
      throw Error('web3 from metamask was not found!')
    }

    /**
     * Check if the user is logged in MetaMask
     * @return {Promise<void>}
     */
    Vue.prototype.$isLoggedInMetamask = async function () {
      const accounts = await $web3.eth.getAccounts()

      if (accounts.length === 0) {
        throw Error('Used not logged in!')
      }
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
        )
        .send({ from: coinbase })
    }
  }
}
