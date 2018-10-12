<template>
  <figure class="ae-slide">
    <figure class="ae-slide__img">
      <img :src="src" :alt="alt">
    </figure>
    <section class="ae-slide__body">
      <h3 class="ae-slide__body__title">
        {{ maintitle }}
      </h3>
      <h4 class="ae-slide__body__sub-title" v-if="subtitle">{{ subtitle }}</h4>
      <p class="ae-slide__body__text" v-if="text">{{ text }}</p>
      <footer class="ae-slide__body__footer">
        <slot></slot>
      </footer>
    </section>
  </figure>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ae-slide',
  props: {
    src: String,
    alt: String,
    maintitle: String,
    subtitle: String,
    text: String
  }
}
</script>
<style lang="scss" scoped>

.ae-slide {
  width: 75%;
  display: flex;
  flex-wrap: wrap;
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

.ae-slide__body {

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
  .ae-slider {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  .ae-slide {
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
