<template>
  <app-view>
    <app-header>
      <app-header-nav text="Statuspage"/>
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          You’re ready for <br/> the æternity Mainnet!
        </template>
        <template slot="intro">
          You have completed your part of migrating the AE tokens <br/>
          to the æternity Mainnet. Your tokens have been <br/>
          transfered to the AE Migration Address.
        </template>
        <div class="app-migration-result-print">
          <ae-button @click="print()" face="round" fill="primary" extend shadow>
            Print / Save as PDF
          </ae-button>
          <router-link :to="{ name: 'migration' }">
            <ae-button @click="resetWalletAddress" face="flat" fill="neutral"  extend>
              Migrate More Tokens
            </ae-button>
          </router-link>
        </div>
      </app-intro>
      <app-panel shadow>
        <app-panel secondary padding style="text-align: center">
          <img :src="require('../../assets/graphics/header-check.svg')" class="app-migration-result-check">
          <h4 class="app-migration-result-subtitle">You successfully migrated</h4>
          <h1 class="app-migration-result-title">
            {{collectiveSum}}<span>AE</span>
          </h1>
          <h4 class="app-migration-result-subtitle">In total</h4>
        </app-panel>

        <app-panel primary padding>
          <div class="app-migration-result-account">
            <h4>All Migrations to</h4>
            <span>
              <ae-address
                v-if="$route.params.pubkey"
                :value="$route.params.pubkey"
                length="short"
              />
              <ae-identicon :address="$route.params.pubkey" />
            </span>

          </div>
          <ul class="app-migration-result-table">
            <li v-for="(e, index) in orderedBurnEvents" :key="index">
              <h5>{{ new Date(e.created).toDateString() }}</h5>
              <div class="app-migration-result-tx">
                <!-- TODO: Here we're checking what env we're in!-->
                <a :href="`https://${
                 env === 'development' ? 'kovan.' : ''
                }etherscan.io/tx/${e.transactionHash}`" target="_blank">
                  <p v-html="$options.filters.chunk(e.transactionHash)"></p>
                </a>
                <h1>
                  {{e.value | fromWei }}<small>AE</small>
                </h1>
              </div>
            </li>
          </ul>
        </app-panel>
      </app-panel>
    </app-view>
  </app-view>
</template>
<script>
import { utils } from 'web3'
import orderBy from 'lodash.orderby'
import { mapState } from 'vuex'

import AeAddress from '@aeternity/aepp-components/dist/ae-address'
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIdenticon from '@aeternity/aepp-components/dist/ae-identicon'
import AeText from '@aeternity/aepp-components/dist/ae-text'

import AppIntro from '../../components/app-intro.vue'
import AppRow from '../../components/app-row.vue'
import AppSeparator from '../../components/app-separator.vue'
import AppColumn from '../../components/app-column.vue'

const print = window.print

export default {
  name: 'migration-results',
  components: {
    AeAddress,
    AeButton,
    AeIdenticon,
    AeText,
    AppIntro,
    AppRow,
    AppSeparator,
    AppColumn
  },
  data () {
    return {
      intervalId: 0,
      burnEvents: []
    }
  },
  methods: {
    resetWalletAddress () {
      this.$store.commit('setWalletAddress', null)
    },

    /**
     * Mapping print function from window
     * to a function inside VueJS
     */
    print: print.bind(window),

    /**
     * Get all burn events for Ae account
     */
    async getBurnEventsByAeAccount () {
      const url = `${
        'https://api.backendless.com'
      }/${
        'CBD0589C-4114-2D15-FF41-6FC7F3EE8800'
      }/${
        '39EBBD6D-5A94-0739-FF27-B17F3957B700'
      }/data/${
        'TokenBurnings?where=pubKey'
      }%20%3D%20%27${this.$route.params.pubkey}%27`

      const response = await fetch(url)
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        this.burnEvents = await response.json()
      }
    }
  },
  computed: {
    orderedBurnEvents () {
      return orderBy(this.burnEvents, ['created'], ['desc'])
    },
    collectiveSum () {
      return utils.fromWei(
        this.burnEvents.map(
          e => new utils.BN(e.value)
        ).reduce(
          (a, v) => a.add(v),
          new utils.BN(0)
        )
      )
    },
    ...mapState([
      'env',
      'walletAddress'
    ])
  },
  mounted () {
    this.getBurnEventsByAeAccount()
    this.intervalId = setInterval(this.getBurnEventsByAeAccount, 30000)
  },
  beforeDestroy () {
    clearInterval(this.intervalId)
  }
}
</script>
<style lang="scss" scoped>
.app-migration-result-check {
  position: absolute;
  top: 0;
  right: 0;
  width: 74px;
  height: 74px;
}

.app-migration-result-title {
  line-height: 1;
  font-family: $font-sans;
  font-size: 6.875rem;
  font-weight: bold;
  margin: 1rem 0;
  color: #203040;

  > span {
    font-weight: normal;
    font-size: 1.875rem;
  }
}

.app-migration-result-subtitle {
  @extend %face-sans-l;

  font-size: 1.125rem;
  font-weight: normal;
  color: #203040;
}

.app-migration-result-account {
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h4 {
    font-size: 1rem;
    font-weight: 600;
  }

  > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #76818C;
  }
}

.app-migration-result-table {
  padding: 0;
  margin: 0;

  > li {
    border-bottom: 1px solid #D3DCE6;
    list-style: none;
    padding: 2rem 0;

    &:last-child {
      border-bottom: 0;
    }

    > h5 {
      margin: 0;
    }
  }
}

.app-migration-result-tx {
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    margin: 0;
    font-weight: normal;

    > small {
      font-size: 50%;
    }
  }

  > a > p {
    @extend %face-tracked-base;

    color: #76818C;
    font-size: rem(15px);
    margin: 0;
    width: 550px;

    /deep/ > span {
      display: inline-block;
      margin-right: 1rem;
    }
  }

  > a:hover > p {
    color: $color-red;
  }
}

.app-migration-result-print {
  display: block;
  width: 220px;
  margin: 0 auto;
}
</style>
