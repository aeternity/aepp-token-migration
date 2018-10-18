<template>
  <section class="app-column">
    <figure class="app-column__img">
      <slot name="image" />
    </figure>
    <h3 class="app-column__title">
      <slot name="title" />
    </h3>
    <p class="app-column__text">
      <slot name="text" />
    </p>
    <div class="app-column__btn">
      <slot name="button" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'app-column'
}
</script>
<style lang="scss" scoped>
.app-column {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem 4rem;
  text-align: center;
  width: 50%;

  &__img {
    max-width: 3rem;
    margin: 0 auto;
  }

  &__title {
    @extend %face-sans-l;

    font-weight: bold;
    margin: $spacer-s 0;
  }

  &__text {
    @extend %face-sans-s;

    margin: 0 0 $spacer-l;
  }
}
</style>
