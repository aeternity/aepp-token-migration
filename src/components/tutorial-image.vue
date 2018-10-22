<template>
  <figure class="tutorial-image">
      <img :src="src" :alt="alt">
  </figure>
</template>
<script>
export default {
  name: 'tutorial-image',
  props: {
    src: String,
    alt: String
  }
}
</script>
<style lang="scss" scoped>
.app-slide-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: visible;
  box-shadow: $shadow;
  background: $white;
  border-radius: .4rem;
  margin: 0 auto;
  padding-right: $spacer-xl;
  padding-bottom: $spacer-xl;

  &__body {
    width: 50%;
    max-width: 18em;
    margin: auto;
  }

  &__img {
    width: 100%;
    margin-top: -2rem;
    margin-left: -2rem;
    max-width: 25em;
    height: 25em;
    display: flex;
    justify-content: flex-end;

    & img {
      object-fit: contain;
      object-position: 100% 100%;
    }
  }
}

.app-slide__body {

  &__title {
    @include font-size(xl);

    line-height: 1.3em;
    margin-top: $spacer-l;
    margin-bottom: .8em;
  }
  &__sub-title {
    @include font-size(l);

    line-height: 1.3em;
    margin-bottom: .8em;
  }
  &__text {
    @include font-size(s);

    white-space: pre-line;
    margin-bottom: $spacer-l;
  }
  &__footer {
    display: flex;
    flex-wrap: nowrap;

    & > a {
      width: 40%;

      &:first-child {
        margin-right: $spacer-l;
      }
    }
  }
}

@supports (display: grid) {
  .app-slider {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  .app-slide {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    &__body {
      grid-column-start: 4;
      grid-column-end: 6;
      width: 100%;
    }

    &__img {
      grid-column-start: 1;
      grid-column-end: 4;
      width: 100%;
      margin-top: -3rem;
      margin-left: -3rem;
      max-width: 25em;
      height: 25em;
      display: flex;
      justify-content: flex-end;

      & img {
        object-fit: contain;
      }
    }
  }
}

</style>
