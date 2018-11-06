<template>
  <div class="app-column" :class="{ [align]: Boolean(align) }">
    <figure class="app-column__img" v-if="$slots.image">
      <slot name="image"/>
    </figure>
    <h3 class="app-column__title" v-if="$slots.title">
      <slot name="title"/>
    </h3>
    <p class="app-column__text" v-if="$slots.text">
      <slot name="text"/>
    </p>
    <div class="app-column__btn" v-if="$slots.button">
      <slot name="button"/>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'app-column',
  props: {
    align: String
  }
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

  &.left {
    text-align: left;
  }
  &.right {
    text-align: right;
  }

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
