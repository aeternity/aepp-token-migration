<template>
  <div class="hero">
    <div class="hero__info hero__info-block">
      <p>
        {{ infoBubble }}
      </p>
    </div>
    <h1 class="hero__title">
      {{ title }}
    </h1>
    <p class="hero__info">
      {{ tokens }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'Hero',
  props: ['title'],
  data: function () {
    return {
      tokens: 'Tokens swappend so far',
      infoBubble: `ERC20 Tokens
      can now be swapped for mainnet coins`
    }
  }
}
</script>
<style lang="scss" scoped>
$dim: 10rem;

.hero {
  position: relative;
  background-color: $white;
  height: 100%;
  min-height: 100vh;

  &__title {
    position: absolute;
    font-size: 16vw;
    padding: 30% 0;
    top: 50%;
    left: 50%;
    text-align: center;
    line-height: 1em;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  &__info {
    position: absolute;
    bottom: 30%;
    left: $spacer-m;
    color: $white;
    background-color: $magenta;
    padding: $spacer-m;
    display: inline-block;
    transform: translateY(-30%);
  }

  &__info-block {
    text-align: center;
    top: 12%;
    left: auto;
    right: 5%;
    width: $dim;
    height: $dim;
    display: flex;
    border-radius: 50%;
    transform: translate(-12%, -5%);

    & p {
      margin: auto;
      white-space: pre-line;
    }
  }
}
</style>
