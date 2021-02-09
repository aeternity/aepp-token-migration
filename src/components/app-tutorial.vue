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
@import "~@aeternity/aepp-components/src/styles/globals/functions";
@import "~@aeternity/aepp-components/src/styles/variables/colors";
@import "~@aeternity/aepp-components/src/styles/placeholders/typography";

.app-tutorial {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include phone-and-tablet {
    /deep/ .app-separator {
      display: none;
      visibility: hidden;
    }
  }

  @include only-phone {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  /deep/ h1,
  /deep/ h2,
  /deep/ h3,
  /deep/ h4,
  /deep/ h5,
  /deep/ h6 {
    margin-top: 0;
    line-height: 1.5;
  }

  /deep/ h1 {
    font-size: rem(28px);

    @include only-phone {
      font-size: rem(20px);
    }
  }

  /deep/ p {
    margin-bottom: 1rem;
    margin-top: 0;
    font-size: rem(16px);

    @include only-phone {
      font-size: rem(14px);
    }
  }
}

.app-tutorial-img {
  margin: 0;
  padding-right: 2rem;
  width: 50%;

  > img {
    width: 100%;
  }

  @include phone-and-tablet {
    display: none;
    visibility: hidden;
  }
}

.app-tutorial-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  width: 50%;
  @extend %face-sans-s;

  @include phone-and-tablet {
    justify-content: flex-start;
    width: 100%;
  }

  > ol {
    counter-reset: li;
  }

  > ol, ul {
    margin: 0 0 1rem;
    padding-left: 1rem;
    list-style: none;
  }

  > ol > li,
  > ul > li {
    @extend %face-sans-s;

    font-weight: 500;
    color: $color-black;
    margin-bottom: 0.5rem;

    &:before {
      color: $color-alternative;
      display: inline-block;
      width: 1rem;
      margin-left: -1rem
    }
  }

  > ol > li {
    counter-increment: li;

    &:before {
      content: counter(li);
    }
  }

  > ul > li:before {
    content: '\2713';
  }

  > ul > li.success {
    color: $color-alternative;
  }

  > ul > li.error {
    color: $color-primary;

    &:before {
      color: $color-primary;
      content: '\2717';
    }
  }

  > footer {
    display: flex;
    justify-content: flex-start;
  }

  > footer > a {
    margin-left: 0.5rem;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
