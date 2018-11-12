<template>
  <header class="app-header">
    <router-link :to="{ name: 'begin' }" class="app-header__logo">
      <img :src="require('../../assets/logo.svg')" alt="æternity">
    </router-link>
    <div class="app-header__slot">
      <!-- Slot for the header content -->
      <slot/>
      <!-- Identicon with address -->
      <div class="app-header__identicon">
        <ae-address
          v-if="walletAddress"
          class="app-header__address"
          :value="walletAddress"
          length="short"
        />
        <router-link :to="{ name: 'migration' }" :class="{ 'app-header__grayscale': !validAddress }">
          <ae-identicon :address="validAddress ? walletAddress : 'none'"/>
        </router-link>
        <a href="https://forum.aeternity.com/t/token-migration-phase-0-support-and-faq/1275" class="app-header__forum" target="_blank">
          <img :src="require('../../assets/icons/forum.png')" alt="Visit Forum">
          <div>
            <h4>Need assistance?</h4>
            <p>Click to visit our forum for more information</p>
          </div>
        </a>
      </div>
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex'

import AeAddress from '@aeternity/aepp-components/dist/ae-address'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeIdenticon from '@aeternity/aepp-components/dist/ae-identicon'

export default {
  name: 'app-header',
  components: {
    AeAddress,
    AeText,
    AeIdenticon
  },
  computed: {
    validAddress () {
      return this.walletAddress && (
        this.walletAddress.length > 50 ||
        this.walletAddress.length < 54
      )
    },
    ...mapState(['walletAddress'])
  }
}
</script>
<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 4.375rem;
  box-shadow: 0 0 16px $color-shadow-alpha-15;
  background-color: $color-white;
  padding: 0.875rem 0;

  &__slot {
    flex: 1 1 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 100%;
    border-right: 1px solid #DFDFDF;

    > img {
      width: 3rem;
    }
  }

  &__forum {
    position: relative;
    display: inline-block;
    color: #203040;
    z-index: 100;

    > img {
      width: 20px;
      height: 20px;

      &:hover + div {
        display: block;
        visibility: visible;
      }
    }

    > div {
      display: none;
      visibility: hidden;
      position: absolute;
      top: 100%;
      right: -14px;
      margin-top: 1rem;
      width: 250px;
      padding: 1rem;
      border-radius: 8px;
      background: #203040;

      &:before {
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 12.5px 15px 12.5px;
        border-color: transparent transparent #203040 transparent;
        right: 10px;
        top: -10px;
      }

      > h4 {
        margin: 0;
        color: $color-white;
      }

      > p {
        font-size: 0.875rem;
        line-height: 1.5;
        margin: 0;
        color: #D3DCE6;
      }
    }
  }

  &__identicon {
    display: flex;
    align-self: flex-end;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-right: 2rem;

    > a {
      display: inline-flex;
      align-self: center;
      margin-left: 1rem;
    }
  }

  &__grayscale {
    opacity: 0.40;
    filter: grayscale(95%);
  }

  &__address {
    color: $color-neutral-negative-1;
  }

  @media print {
    display: none;
    visibility: hidden;
  }
}
</style>
