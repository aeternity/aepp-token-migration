<template>
  <article class="app-tutorial">
    <figure class="app-tutorial-img">
      <slot name="image" />
    </figure>
    <app-separator />
    <section class="app-tutorial-info">
      <slot name="info" />
    </section>
  </article>
</template>
<script>
import AppSeparator from './app-separator.vue'

export default {
  name: 'app-tutorial',
  components: {
    AppSeparator
  }
}
</script>
<style lang="scss" scoped>
@import "~@aeternity/aepp-components/src/styles/variables/colors";
@import "~@aeternity/aepp-components/src/styles/placeholders/typography";

.app-tutorial {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include only-phone {
    flex-direction: column;
    align-items: center;

    /deep/ .app-separator {
      display: none;
      visibility: hidden;
    }
  }

  /deep/ h1,
  /deep/ h2,
  /deep/ h3,
  /deep/ h4,
  /deep/ h5,
  /deep/ h6 {
    margin-top: 0;
    line-height: 1.2;
  }

  /deep/ p {
    margin-bottom: 1rem;
    margin-top: 0;
  }
}

.app-tutorial-img {
  margin: 0;
  padding-right: 2rem;
  width: 50%;

  > img {
    width: 100%;
  }
}

.app-tutorial-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  width: 50%;

  > ol {
    margin: 0 0 1rem;
    padding-left: 1rem;
    list-style: none;
    counter-reset: li;

    > li {
      @extend %face-sans-s;

      font-weight: 500;
      color: $color-black;
      margin-bottom: 0.5rem;
      counter-increment: li;

      &:before {
        content: counter(li);
        color: $color-alternative;
        display: inline-block;
        width: 1rem;
        margin-left: -1rem
      }
    }
  }
}
</style>
