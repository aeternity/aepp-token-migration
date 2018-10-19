<template>
  <div class="app-address" :class="{ disabled }">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'app-address',
  props: {
    disabled: Boolean
  }
}
</script>
<style lang="scss" scoped>
.app-address {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  overflow: hidden;
  transition: all $base-transition-time;
  border-left: 2px solid $color-focus;
  min-height: 10rem;
  margin-bottom: 2rem;

  &.disabled {
    color: $color-neutral-negative-1;
  }
}
</style>
