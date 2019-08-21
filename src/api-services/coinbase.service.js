import Axios from 'axios'

const COINBASE_INFORMATION = '/info'

export default {
  getInfo (coinbase) {
    return Axios.get(`${COINBASE_INFORMATION}/${coinbase}`)
  },

  migrate (data) {
    return Axios.post(`/migrate`, data)
  }
}
