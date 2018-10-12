<template>
  <div class="ae-block">
    <div class="ae-block__body">
      <slot></slot>
    </div>
    <footer v-if="to" class="ae-block__footer">
      <router-link :to="to">{{ name }}</router-link>
    </footer>
  </div>
</template>

<script>
// import { AeButton } from '@aeternity/aepp-components'
export default {
  name: 'ae-block',
  props: ['to', 'name'],
  components: {}
}
</script>

<style scoped lang="scss">
.ae-block {
  background-color: $white;
  padding: $spacer-l;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  box-shadow: $shadow;
  border-radius: 8px;
  margin-bottom: $spacer-xxl;

  &__body {
    display: flex;

    & .ae-cta:first-child {
      border-right: 1px solid $grey;

      &:after {
        content: 'or';
        display: flex;
        align-items: center;
        @include font-size(xs);
        text-align: center;
        line-height: 0;
        width: 1rem;
        height: 2.5rem;
        position: absolute;
        top: 50%;
        right: -.65rem;
        background: $white;
        transform: translateY(-50%);
      }
    }
  }

  &__footer {
    text-align: center;
    width: 100%;
    padding: $spacer-l 0 0;
    text-transform: uppercase;
    font-weight: 700;
    @include font-size(xs);
  }
}
</style>
