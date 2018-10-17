<template>
  <header class="app-header">
    <router-link :to="{ name: 'landing' }" class="app-header__logo">
      <img :src="require('@/assets/logo.svg')" alt="æternity">
    </router-link>
    <div class="app-header__slot">
      <!-- Slot for the header content -->
      <slot />

      <!-- Identicon with address -->
      <div class="app-header__identicon" :class="{ grayscale: !walletAddress }">
        <ae-address
          class="app-header__address"
          :value="walletAddress"
          length="short"
        />
        <ae-identicon :address="walletAddress ? walletAddress : 'none'" />
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

  &__identicon {
    display: flex;
    align-self: flex-end;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-right: 2rem;

    &.grayscale {
      opacity: 0.40;
      filter: grayscale(95%);
    }
  }

  &__address {
    color: $color-neutral-negative-1;
  }
}
</style>
