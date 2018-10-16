<template>
  <header class="hero">
    <div class="hero__inner-wrapper">
      <h1 class="hero__title">
        {{ title }}
      </h1>
      <ae-text class="hero__text">
        {{ text }}
      </ae-text>
      <router-link :to="to" class="button-wrapper">
        <ae-button face="round" fill="primary" extend>
          {{ cta }}
        </ae-button>
      </router-link>
    </div>
    <div class="line"></div>
  </header>
</template>
<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeText from '@aeternity/aepp-components/dist/ae-text'
export default {
  name: 'Hero',
  props: {
    title: String,
    text: String,
    to: { type: [String, Object], default: undefined },
    cta: String
  },
  components: {
    AeButton,
    AeText
  }
}
</script>
<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100%;
  min-height: 90vh;
  background-color: $bg-color;
  display: flex;
  padding: $spacer-xl;
  text-align: center;
  &__inner-wrapper{
    max-width: 60em;
    margin: auto;
  }
  &__title {

    @include font-size(xxxl)
    line-height: 1.1em;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }

  &__text {
    margin-bottom: 1.5rem;
    @include font-size(l)
    line-height: 1.7em;

  }
}
.button-wrapper{
  display: block;
  max-width: 15em;
  margin: 0 auto;
}
.line {
  height: 6rem;
  width: 2px;
  background-color: $magenta;
  position: absolute;
  bottom: -3rem;
  left: 50%;
  transform: translate(-50%);
}
</style>
