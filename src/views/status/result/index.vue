<template>
  <app-view>
    <app-header>
      <app-header-nav text="Migration Status" />
    </app-header>
    <app-view container>
      <section>
        <h1>
          MigrationResults
        </h1>
        <hr>
        Account:
        {{walletAddress}}
        <hr>
        Tokens Total: {{sum}} AE
        <hr>
        List of TX:
          <table>
            <tr v-for='e in burnEvents'>
              <td>{{e.value | fromWei }} AE</td>
              <td>
                <a target='_blank' :href="`https://kovan.etherscan.io/tx/${e.transactionHash}`">
                  {{e.transactionHash}}
                </a>
              </td>
            </tr>
          </table>
      </section>
    </app-view>
  </app-view>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { utils } from 'web3'
const BN = utils.BN
window.BN = BN
export default {
  name: 'migration-results',
  data () {
    return {
      burnEvents: []
    }
  },
  filters: {
    fromWei: (value) => utils.fromWei(value)
  },
  methods : {
    getBurnEventsByAeAccount () {
      const url = `https://api.backendless.com/CBD0589C-4114-2D15-FF41-6FC7F3EE8800/39EBBD6D-5A94-0739-FF27-B17F3957B700/data/TokenBurnings?where=pubKey%20%3D%20%27${this.walletAddress}%27`
      return fetch(url).then(
        response => {
          const contentType = response.headers.get('content-type')
          if (contentType && contentType.includes('application/json')) {
            return response.json()
          }
          return {}
        }
      )
    }
  },
  computed : {
    sum () {
      return utils.fromWei(
        this.burnEvents
        .map(e => new BN(e.value))
        .reduce((a,v) => a.add(v), new BN(0))
      )
    },
    ...mapState([
      'walletAddress'
    ])
  },
  async mounted () {
    this.burnEvents = await this.getBurnEventsByAeAccount()
  }
}
</script>
<style lang="scss"></style>
