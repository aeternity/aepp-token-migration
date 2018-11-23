<template>
  <div class="app-header-nav">
    <div class="app-header-nav__menu" v-if="prog">
      <ae-button @click="$router.go(-1)">
        <ae-icon name="left-more" class="app-header-nav__rotate"/>
      </ae-button>
      {{ prog }}
      <ae-button @click="$router.go(1)">
        <ae-icon name="left-more"/>
      </ae-button>
    </div>
    <p class="app-header-nav__text">{{ text }}</p>
  </div>
</template>
<script>
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

export default {
  name: 'app-header-nav',
  components: {
    AeText,
    AeButton,
    AeIcon
  },
  props: {
    prog: String,
    text: String
  }
}
</script>
<style lang="scss" scoped>
.app-header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  font-family: $font-sans;
  font-weight: bold;
  color: #203040;

  &__menu {
    display: flex;
    align-items: center;
    height: 100%;
    line-height: 1;

    > /deep/ .ae-button > .ae-icon {
      font-size: 1.5rem;
      margin: 0 0.5rem;
    }
  }

  &__text {
    margin-left: 1rem;
    font-family: $font-sans;
    font-weight: bold;
    color: #203040;

    @include only-phone {
      display: none;
      visibility: hidden;
    }
  }

  &__rotate {
    transform: rotate(180deg);
  }
}
</style>
