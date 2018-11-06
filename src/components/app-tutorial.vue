<template>
  <article class="app-tutorial">
    <figure class="app-tutorial__img">
      <slot name="image"/>
    </figure>
    <section class="app-tutorial__info">
      <slot name="info"/>
    </section>
  </article>
</template>
<script>
export default {
  name: 'app-tutorial'
}
</script>
<style lang="scss" scoped>
.app-tutorial {
  display: flex;
  justify-content: center;

  /deep/ h1,
  /deep/ h2,
  /deep/ h3,
  /deep/ h4,
  /deep/ h5,
  /deep/ h6 {
    line-height: 1.2;
  }

  &__img {
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0;
  }

  &__img > img {
    margin: 0 auto;
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    object-fit: contain;
    object-position: 100% 100%;
    max-height: 470px;
  }

  &__info {
    width: 50%;
    padding: 4rem 2rem;
  }

  &__info > footer {
    display: flex;
    margin-top: $spacer-l;

    & a {
      margin-right: $spacer-l;
    }
  }
}
</style>
