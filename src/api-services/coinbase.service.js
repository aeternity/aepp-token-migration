import Axios from 'axios'

const COINBASE_INFORMATION = '/info'
const MIGRATE = '/migrate'

export default {
  getInfo (coinbase) {
    return Axios.get(`${COINBASE_INFORMATION}/${coinbase}`)
  },

  migrate (data) {
    return Axios.post(`${MIGRATE}`, data)
  }
}
