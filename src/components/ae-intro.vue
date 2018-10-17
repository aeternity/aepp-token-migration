<template>
  <header class="ae-intro">
    <h2 v-if="title" class="ae-intro__title">
      {{ title }}
    </h2>
    <h3 v-else-if="subtitle" class="ae-intro__subtitle">
      {{ subtitle }}
    </h3>
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
    subtitle: String,
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
  text-align: center;
  margin: 0 auto $spacer-xl;

  &__title {
    @include font-size(xxl);
    font-weight: bold;
    line-height: 1.1em;
    margin-bottom: .5em;
  }
   &__subtitle {
    @include font-size(xl);
    font-weight: bold;
    line-height: 1.2em;
    margin-bottom: .5em;
  }

  &__text {
    //max-width: 28em;
    @include font-size(m);
    margin: 0 auto;
  }

  &__footer {
    margin-top: $spacer-l;
    text-align: center;
  }
}
</style>
