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
export default {
  name: 'ae-block',
  props: ['to', 'name'],
  components: {}
}
</script>
<style  lang="scss" scoped>
.ae-block {
  background-color: $bg-color_light;
  padding: $spacer-l;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  box-shadow: $shadow_wide;

  &__body {
    display: flex;

    & .ae-cta:first-child {
      border-right: 1px solid $grey;

      &:after {
        @include font-size(xs);

        content: 'or';
        display: flex;
        align-items: center;
        text-align: center;
        line-height: 0;
        width: 1rem;
        height: 2.5rem;
        position: absolute;
        top: 50%;
        right: -.65rem;
        background: $bg-color_light;
        transform: translateY(-50%);
      }
    }
  }

  &__footer {
    @include font-size(xs);
    text-align: center;
    width: 100%;
    padding: $spacer-l 0 0;
    text-transform: uppercase;
    font-weight: 700;
  }
}
</style>
