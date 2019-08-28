<template>
  <app-view>
  <app-allert v-if="true && migrationHash">You have successfully migrated your tokens. Your Tx Hash: {{ migrationHash }}</app-allert>
    <app-header>
      <app-header-nav text="Statuspage"/>
    </app-header>
    <app-view container>
      <app-intro spacing>
        <template slot="title">
          Check your migrations!
        </template>
        <template slot="intro">
          You have successfully migrated your AE tokens to Mainnet.
        </template>
        <div class="app-migration-result-print">
          <ae-button @click="print()" face="round" fill="primary" extend shadow>
            Print / Save as PDF
          </ae-button>
        </div>
      </app-intro>
      <app-panel shadow>
        <app-panel secondary padding style="text-align: center">
          <img :src="require('../../assets/graphics/header-check.svg')" class="app-migration-result-check">
          <h4 class="app-migration-result-subtitle">You've migrated</h4>
          <h1 class="app-migration-result-title">
            {{collectiveSum | shorten(true) }}<small style="font-size: 2rem;">.{{collectiveSum | shorten }}</small>
            <span>&nbsp;AE</span>
          </h1>
          <h4 class="app-migration-result-subtitle">in total to the following address</h4>
          <ae-identicon :address="$route.params.pubkey"/>
          <ae-address
            v-if="$route.params.pubkey"
            :value="$route.params.pubkey"
            length="flat"
          />
        </app-panel>
        <div class="app-migration-panel-phase">
          <app-panel primary padding>
            <div class="app-migration-result-phase">
              <h2 class="warning">
                Tokens migrated in Phase 3
                <span>
                  Tokens will be available after the 3rd Hardfork.<br />
                  All tokens migrated during Phase 3.
                </span>
              </h2>
              <h1>
                {{totalAmountMigrated(this.phase[3]) | fromWei | shorten(true) }}<small style="font-size: 1.125rem;">.{{totalAmountMigrated(this.phase[3]) | fromWei | shorten }}</small>
                <small>&nbsp;AE</small>
              </h1>
            </div>
            <ul class="app-migration-result-table">
              <li v-for="(e, index) in phase[3]" :key="index">
                <h5>
                  {{ new Date(e.created).toDateString() }}
                  <span>PHASE {{ e.deliveryPeriod }}</span>
                </h5>
                <div class="app-migration-result-tx">
                  <a :href="`https://${
                 env === 'development' ? 'kovan.' : ''
                }etherscan.io/tx/${e.transactionHash}`" target="_blank">
                    <p v-html="$options.filters.chunk(e.transactionHash)"></p>
                  </a>
                  <h1>
                    {{e.value | fromWei | shorten(true) }}<small style="font-size: 1.125rem;">.{{e.value | fromWei | shorten }}</small>
                    <small>&nbsp;AE</small>
                  </h1>
                </div>
              </li>
            </ul>
          </app-panel>
        </div>
        <div class="app-migration-panel-phase">
          <app-panel primary padding>
            <div class="app-migration-result-phase">
              <h2 class="check">
                Tokens migrated in Phase 2
                <span>
                  Tokens will be available after the 2nd Hardfork.<br />
                  All tokens migrated during Phase 2 (March, 2019 - May 2019).
                </span>
              </h2>
              <h1>
                {{totalAmountMigrated(this.phase[2]) | fromWei | shorten(true) }}<small style="font-size: 1.125rem;">.{{totalAmountMigrated(this.phase[2]) | fromWei | shorten }}</small>
                <small>&nbsp;AE</small>
              </h1>
            </div>
            <ul class="app-migration-result-table">
              <li v-for="(e, index) in phase[2]" :key="index">
                <h5>
                  {{ new Date(e.created).toDateString() }}
                  <span>PHASE {{ e.deliveryPeriod }}</span>
                </h5>
                <div class="app-migration-result-tx">
                  <a :href="`https://${
                 env === 'development' ? 'kovan.' : ''
                }etherscan.io/tx/${e.transactionHash}`" target="_blank">
                    <p v-html="$options.filters.chunk(e.transactionHash)"></p>
                  </a>
                  <h1>
                    {{e.value | fromWei | shorten(true) }}<small style="font-size: 1.125rem;">.{{e.value | fromWei | shorten }}</small>
                    <small>&nbsp;AE</small>
                  </h1>
                </div>
              </li>
            </ul>
          </app-panel>
        </div>
        <div class="app-migration-panel-phase">
          <app-panel primary padding>
            <div class="app-migration-result-phase">
              <h2 class="check">
                Tokens migrated in Phase 1
                <span>
                  Tokens will be available after the 1st Hardfork.<br />
                  All tokens migrated during Phase 1 (November 26th, 2018 - February 2019).
                </span>
              </h2>
              <h1>
                {{totalAmountMigrated(this.phase[1]) | fromWei | shorten(true) }}<small style="font-size: 1.125rem;">.{{totalAmountMigrated(this.phase[1]) | fromWei | shorten }}</small>
                <small>&nbsp;AE</small>
              </h1>
            </div>
            <ul class="app-migration-result-table">
              <li v-for="(e, index) in phase[1]" :key="index">
                <h5>
                  {{ new Date(e.created).toDateString() }}
                  <span>PHASE {{ e.deliveryPeriod }}</span>
                </h5>
                <div class="app-migration-result-tx">
                  <a :href="`https://${
                 env === 'development' ? 'kovan.' : ''
                }etherscan.io/tx/${e.transactionHash}`" target="_blank">
                    <p v-html="$options.filters.chunk(e.transactionHash)"></p>
                  </a>
                  <h1>
                    {{e.value | fromWei | shorten(true) }}<small style="font-size: 1.125rem;">.{{e.value | fromWei | shorten }}</small>
                    <small>&nbsp;AE</small>
                  </h1>
                </div>
              </li>
            </ul>
          </app-panel>
        </div>
        <div class="app-migration-panel-phase">
          <app-panel primary padding>
            <div class="app-migration-result-phase">
              <h2 class="check">
                Tokens migrated in Phase 0
                <span>Tokens will be available on Mainnet Launch.</span>
              </h2>
              <h1>
                {{totalAmountMigrated(this.phase[0]) | fromWei | shorten(true) }}<small style="font-size: 1.125rem;">.{{totalAmountMigrated(this.phase[0]) | fromWei | shorten }}</small>
                <small>&nbsp;AE</small>
              </h1>
            </div>
            <ul class="app-migration-result-table">
              <li v-for="(e, index) in phase[0]" :key="index">
                <h5>
                  {{ new Date(e.created).toDateString() }}
                  <span>PHASE {{ e.deliveryPeriod }}</span>
                </h5>
                <div class="app-migration-result-tx">
                  <a :href="`https://${
                 env === 'development' ? 'kovan.' : ''
                }etherscan.io/tx/${e.transactionHash}`" target="_blank">
                    <p v-html="$options.filters.chunk(e.transactionHash)"></p>
                  </a>
                  <h1>
                    {{e.value | fromWei | shorten(true) }}<small style="font-size: 1.125rem;">.{{e.value | fromWei | shorten }}</small>
                    <small>&nbsp;AE</small>
                  </h1>
                </div>
              </li>
            </ul>
          </app-panel>
        </div>
      </app-panel>
    </app-view>
    <app-modal v-if="loading">
      <img :src="require('../../../public/loader.svg')" class="app-migration-result-loading" alt="Loading">
    </app-modal>
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
import AppNotice from '../../components/app-notice.vue'
import AppAllert from '../../components/app-alert.vue'

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
    AppColumn,
    AppAllert
  },
  data () {
    return {
      color:"#00BFA8",
      loading: true,
      intervalId: 0,
      phase: {
        0: [],
        1: [],
        2: [],
        3: []
      }
    }
  },
  methods: {
    /**
     * Mapping print function from window
     * to a function inside VueJS
     */
    print: print.bind(window),

    async phaseAPIResponse (phase) {
      const response = await fetch(`${
        'https://api.backendless.com'
      }/${
        process.env.VUE_APP_BL_ID
      }/${
        process.env.VUE_APP_BL_KEY
      }/data/${
        process.env.VUE_APP_BL_TABLE
      }?pageSize=100&where=pubKey%20%3D%20%27${
        this.$route.params.pubkey
      }%27%20and%20deliveryPeriod%3D${phase}`)

      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        return response.json()
      }
      return []
    },

    /**
     * Get all burn events
     */
    async getBurnEvents () {
      const [zero, one, two, three] = await Promise.all([
        this.phaseAPIResponse(0),
        this.phaseAPIResponse(1),
        this.phaseAPIResponse(2),
        this.phaseAPIResponse(3)
      ])
      this.phase = {
        0: orderBy(zero, ['created'], ['desc']),
        1: orderBy(one, ['created'], ['desc']),
        2: orderBy(two, ['created'], ['desc']),
        3: orderBy(three, ['created'], ['desc'])
      }
    },

    /**
     * Gets an array of burn events and calculates
     * the amount migrated
     * @param phase
     * @return {*}
     */
    totalAmountMigrated: function (phase) {
      return phase.map(
        e => new utils.BN(e.value)
      ).reduce(
        (a, v) => a.add(v),
        new utils.BN(0)
      )
    }
  },
  computed: {
    collectiveSum () {
      return utils.fromWei(
        this.totalAmountMigrated(
          this.phase[0].concat(
            this.phase[1],
            this.phase[2],
            this.phase[3]
          )
        )
      )
    },
    ...mapState([
      'env',
      'walletAddress',
      'migrationHash'
    ])
  },
  mounted () {
    this.$store.commit('setWalletAddress', this.$route.params.pubkey || null)
    this.intervalId = setInterval(this.getBurnEvents, 30000)
    this.getBurnEvents().then(() => { this.loading = false })
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

  @include phone-and-tablet {
    font-size: 4rem;
  }
  @include only-phone {
    font-size: 2rem;
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

    > ul {
      margin-right: 1rem;
    }
  }

  @include phone-and-tablet {
    flex-direction: column;
    justify-content: center;

    > span {
      display: block;
      text-align: center;

      > ul {
        padding-bottom: 1rem;
      }
    }
  }
}

.app-migration-result-phase {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #203040;

  @include phone-and-tablet {
    flex-direction: column;
    justify-content: flex-start;
  }

  > h2 {
    position: relative;
    font-size: rem(22px);
    font-weight: bold;
    padding-left: 2.5rem;

    &:before {
      content: ' ';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    &.check:before {
      background-image: url('../../assets/icons/check.png');
    }

    &.warning:before {
      background-image: url('../../assets/icons/warning.png');
    }

    > span {
      @extend %face-uppercase-xs;

      display: block;
      font-size: rem(13px);
      color: #4E5A66;
      text-transform: none;
      font-weight: normal;
      margin-top: rem(4px);
      line-height: 1.5;
    }
  }

  > h1 {
    font-size: 3rem;

    > small {
      font-size: 1rem;
    }
  }
}

.app-migration-result-table {
  padding: 0;
  margin: 0;

  > li {
    border-bottom: 1px solid #D3DCE6;
    list-style: none;
    padding: 2rem 0;

    @include phone-and-tablet {
      text-align: left;
    }

    &:last-child {
      border-bottom: 0;
    }

    > h5 {
      margin: 0;

      > span {
        @extend %face-uppercase-xs;

        display: block;
        margin-top: 0;
        margin-bottom: 0.5rem;
        line-height: 1;
        color: #4E5A66;
      }
    }
  }
}

.app-migration-result-tx {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include phone-and-tablet {
    flex-direction: column;
    align-items: flex-start;
  }

  > h1 {
    margin: 0;
    font-weight: normal;

    > small {
      font-size: 50%;
    }
  }

  @include phone-and-tablet {
    > a {
      margin-bottom: 1rem;
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

    @include phone-and-tablet {
      width: auto;
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

.app-migration-result-loading {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 50px;
  animation: rotate 2s reverse infinite linear;
}

.app-migration-panel-phase {
  border-bottom: 1px solid #D3DCE6;
}
</style>
