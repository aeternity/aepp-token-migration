<template>
  <header class="ae-intro">
    <h2 class="ae-intro__title">
      {{ title }}
    </h2>
    <p v-if="intro" class="ae-intro__text">
      {{ intro }}
    </p>
    <footer class="ae-intro__footer" v-if="hasSlotData">
      <slot></slot>
    </footer>
  </header>
</template>
<script>
export default {
  name: 'ae-intro',
  props: {
    title: String,
    intro: String
  },
  computed: {
    hasSlotData () {
      return !!this.$slots.default
    }
  }
}
</script>
<style lang="scss" scoped>
.ae-intro {
  @include font-size(m);

  text-align: center;
  max-width: 35em;
  margin: 0 auto $spacer-xl;

  &__title {
    @include font-size(xxl);

    line-height: 1.2em;
    margin-bottom: .5em;
  }

  &__text {
    //max-width: 28em;
    margin: 0 auto $spacer-xl;
  }

  &__footer {
    margin-top: $spacer-xl;
    text-align: center;
  }
}
</style>
