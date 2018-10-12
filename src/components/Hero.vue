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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Hero.scss" scoped lang="scss"></style>
