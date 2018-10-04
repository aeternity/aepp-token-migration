<template>
  <header class="ae-intro" >
    <h2 class="ae-intro__title">
      {{ title }}
    </h2>
    <p v-if="intro" class="ae-intro__text">
      {{ intro }}
    </p>
  </header>
</template>

<script>
export default {
  name: 'ae-intro',
  props: ['title', 'intro']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .ae-intro{
    text-align: center;
    max-width: 28em;
    @include font-size(m);
    margin: 0 auto $spacer-xl ;
    &__title {
       @include font-size(xxl);
       line-height: 1.5em;
    }
    &__text {
      
    }
  }
</style>
