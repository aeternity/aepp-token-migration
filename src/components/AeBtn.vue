<template>
  <router-link class="ae-btn"

    :class="{
      'ae-btn_primary': is_primary,
      'ae-btn_secondary': is_secondary,
      'ae-btn_neutral': is_neutral,
      'ae-btn_blank': is_blank
    }">
    <slot />
  </router-link>
</template>
<script>
export default {
  name: 'ae-btn',
  props: {
    is_secondary: { type: Boolean, default: false },
    is_primary: { type: Boolean, default: false },
    is_neutral: { type: Boolean, default: false },
    is_blank: { type: Boolean, default: false },
    to: { type: [String, Object], default: undefined }
  }
}
</script>
<style lang="scss" scoped>
.ae-btn {
  border-radius: 2rem;
  padding: $spacer-m $spacer-xl;
  color: $white;
  font-size: 13px;
  line-height: 1;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 700;
  margin-bottom: $spacer-m;

  // &_primary {
  //   background-color: $btn_primary;
  // }

  // &_secondary {
  //   background-color: $btn_secondary;
  // }

  // &_neutral {
  //   background-color: $btn_neutral;
  // }

  // &_blank {
  //   background-color: transparent;
  //   color: $black;
  // }
}
</style>
