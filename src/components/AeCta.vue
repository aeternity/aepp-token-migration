<template>
  <section class="ae-cta">
    <figure class="ae-cta__img">
      <img :src="img" :alt="title">
    </figure>
    <h3 class="ae-cta__title">
      {{ title }}
    </h3>
    <p class="ae-cta__text">
      {{ text }}
    </p>
    <div class="ae-cta__btn">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ae-cta',
  props: {
    title: String,
    text: String,
    to: { type: [String, Object], default: undefined },
    img: { type: [String, Object], default: undefined }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ae-cta {
  text-align: center;
  padding: $spacer-m $spacer-l;
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;

  &__img {
    max-width: 3rem;
    margin: 0 auto;
  }

  &__title {
    font-size: 1rem;
    line-height: 1.5em;
    margin: $spacer-s 0;
  }

  &__text {
    @include font-size(xs);
    line-height: 24px;
    margin: 0 0 $spacer-l;
  }

  &__btn {
    margin: auto 0 0;
  }
}
</style>
