<template>
  <app-view>
    <app-header>
      <app-header-nav text="Statuspage"/>
    </app-header>
    <app-view container>
      <app-intro spacing>
        <template slot="title">
          Success! =)
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
          <h4 class="app-migration-result-subtitle">You have successfully migrated your tokens to the following address</h4>
          <br/>
          <ae-identicon :address="$route.params.pubkey"/>
          <ae-address
            v-if="$route.params.pubkey"
            :value="$route.params.pubkey"
            length="flat"
          />
          <br/>
          <h4 class="app-migration-result-subtitle">
            Your Tx Hash: <a :href="'https://explorer.aeternity.io/transactions/' + migrationHash" target="_blank">{{ migrationHash }}</a>
          </h4>
        </app-panel>
      </app-panel>
    </app-view>
    <app-modal v-if="loading">
      <img :src="require('../../../public/loader.svg')" class="app-migration-result-loading" alt="Loading">
    </app-modal>
  </app-view>
</template>
<script>
import { mapState } from 'vuex'

import AeAddress from '@aeternity/aepp-components/dist/ae-address'
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIdenticon from '@aeternity/aepp-components/dist/ae-identicon'

import AppIntro from '../../components/app-intro.vue'

const print = window.print

export default {
  name: 'migration-results',
  components: {
    AeAddress,
    AeButton,
    AeIdenticon,
    AppIntro
  },
  data () {
    return {
      color: '#00BFA8',
      loading: false
    }
  },
  methods: {
    /**
     * Mapping print function from window
     * to a function inside VueJS
     */
    print: print.bind(window)
  },
  computed: {
    ...mapState([
      'env',
      'walletAddress',
      'migrationHash'
    ])
  },
  mounted () {
    this.$store.commit('setWalletAddress', this.$route.params.pubkey || null)
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
