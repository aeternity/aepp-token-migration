<template>
  <header class="ae-intro" >
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .ae-intro{
    text-align: center;
    max-width: 35em;
    @include font-size(m);
    margin: 0 auto $spacer-xl ;
    &__title {
       @include font-size(xxl);
       line-height: 1.2em;
       margin-bottom: .5em;
    }
    &__text {
      max-width: 28em;
      margin: 0 auto $spacer-xl ;
    }

    &__footer {
      margin-top: $spacer-xl;
    }
  }
</style>
