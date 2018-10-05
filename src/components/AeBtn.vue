<template>
  <router-link class="ae-btn"
    :to="to"
    :class="{
      'ae-btn_primary': is_primary,
      'ae-btn_secondary': is_secondary,
      'ae-btn_neutral': is_neutral
    }"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'ae-btn',
  props: {
    is_secondary: { type: Boolean, default: false },
    is_primary: { type: Boolean, default: false },
    is_neutral: { type: Boolean, default: false },
    to: { type: [String, Object], default: undefined }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .ae-btn{
    border-radius: 2rem;
    padding: $spacer-m $spacer-xl;
    color: $white;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 700;
    &_primary{
      background-color: $btn_primary;
    }
    &_secondary{
      background-color: $btn_secondary;
    }
    &_neutral{
      background-color: $btn_neutral;
    }
  }
</style>
