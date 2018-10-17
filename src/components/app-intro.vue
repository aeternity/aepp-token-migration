<template>
  <header class="app-intro">
    <h2 v-if="$slots.title" class="app-intro__title">
      <slot name="title" />
    </h2>
    <h3 v-else-if="$slots.subtitle" class="app-intro__subtitle">
      <slot name="subtitle" />
    </h3>
    <p v-if="$slots.intro" class="app-intro__text">
      <slot name="intro" />
    </p>
    <footer class="app-intro__footer" v-if="$slots.default">
      <slot />
    </footer>
  </header>
</template>
<script>
export default {
  name: 'app-intro'
}
</script>
<style lang="scss" scoped>
.app-intro {
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
    @include font-size(m);

    margin: 0 auto;
  }

  &__footer {
    margin-top: 2rem;
    text-align: center;
  }
}
</style>
