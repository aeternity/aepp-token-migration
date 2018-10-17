<template>
  <header class="appp-header">
    <div class="appp-header__logo">
      <img :src="require('../assets/logo.svg')" alt="æternity">
      æternity
    </div>
    <div>
      <slot />
    </div>
  </header>
</template>

<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'

export default {
  name: 'app-header',
  components: {
    AeButton
  }
}
</script>
<style lang="scss" scoped>
.appp-header {
  background-color: $white;
  box-shadow: $shadow;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 $spacer-l;

  &__logo {
    font-weight: bold;
    font-size: 21px;
    display: flex;
    align-items: center;
    font-family: 'Inter UI', sans-serif;
    color: #001833;

    & img {
      margin-right: $spacer-s;
    }
  }
}
</style>
