<template>
  <ol class="accordion">
    <li class="step"
      v-for="(step, index) in steps"
      :key="step.id">
      <span class="step__number">
        <span class="step__number__inner-wrapper">
          <span class="step__number__text">Step</span>
          <span class="step__number__index">{{ index + 1}}</span>
        </span>
      </span>
      <article class="step__info">
        <h4 class="step__info__title">{{ step.title }}</h4>
        <p class="step__info__text">{{ step.text }}</p>
        <footer v-if="step.links" class="step__info__footer">
          <a class="cta"  v-for="link in step.links"
          :href="link.url">
            <img :src="link.img" alt=""> {{ link.cta }}
          </a>
        </footer>
      </article>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'steps',
  props: {
    steps: Array
  },
  data: function () {
    return {
      open: false
    }
  },
  methods: {
    toggle (accordion) {
      this.open = !this.open
    }
  }
}
</script>
<style lang="scss" scoped>
  ol {
    list-style: none;
  }
.step {
  display: flex;
  margin-bottom: $spacer-xl;
  box-shadow: $shadow_wide;
  &__info {
      padding: $spacer-l;
     &__title {
      @include font-size(l);
      line-height: 1.2em;
      font-weight: bold;
      margin-bottom: 1rem;
     }
     &__text {
      margin-bottom: 1rem;
     }
     &__footer {
      display: flex;

     }
  }
  &__number {
    display: inline-flex;
    background-color: $magenta;
    padding: $spacer-xl;
    color: $white;
    width: 19rem;
    position: relative;
    text-align: center;

    &__inner-wrapper {
      margin: auto;
    }

    &__text {
      @include font-size(xs);
      display: block;
      margin-bottom: $spacer-m;
    }

    &__index {
      font-size: 6rem;
      display: block;
      font-weight: bold;
      line-height: .7em;
    }

  }
}
.step:not(:last-child) .step__number:after{
    content: '';
    height: $spacer-xl;
    width: 2px;
    display: block;
    background-color: $black;
    position: absolute;
    bottom: -$spacer-xl;
    left: 50%;
    transform: translate(-50%);
  }

img {
  width: 100%;
  height: auto;
}
.cta{
  display: block;
  width: 2rem;
  &:not(:last-child){
    margin-right: $spacer-m;
  }
}
</style>
