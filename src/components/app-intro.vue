<template>
  <section class="app-intro" :class="{ [align]: Boolean(align)}">
    <h2 v-if="$slots.title" class="app-intro__title">
      <slot name="title"/>
    </h2>
    <h3 v-if="$slots.subtitle" class="app-intro__subtitle">
      <slot name="subtitle"/>
    </h3>
    <p v-if="$slots.intro" class="app-intro__text">
      <slot name="intro"/>
    </p>
    <footer class="app-intro__footer" v-if="$slots.default">
      <slot/>
    </footer>
  </section>
</template>
<script>
export default {
  name: 'app-intro',
  props: {
    align: String,
    spacing: Boolean
  }
}
</script>
<style lang="scss" scoped>
.app-intro {
  text-align: center;
  margin: 0 auto $spacer-xl;

  &.left {
    text-align: left;

    > /deep/ .app-intro__subtitle {
      margin-top: 0;
    }
  }

  &.spacing {
    padding: 0 10rem;

    @include only-phone {
      padding: 0 4rem;
    }
  }

  &__title {
    @extend %face-sans-l;

    font-size: rem(55px);
    font-weight: bold;
    line-height: 4.0625rem;
    color: $color-neutral-negative-3;
    margin: 1.5rem 0;

    @include only-phone {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  &__subtitle {
    @extend %face-sans-l;

    font-size: rem(23px);
    font-weight: bold;
    line-height: 2rem;

    @include only-phone {
      font-size: 1.125rem;
      line-height: 1.125rem;
    }
  }

  &__text {
    @extend %face-sans-base;

    margin: 0 auto;

    @include only-phone {
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }

  &__footer {
    margin-top: 2rem;
    text-align: center;
  }

  @media print {
    display: none;
    visibility: hidden;
  }
}
</style>
