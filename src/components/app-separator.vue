<template>
  <div class="app-separator">
    <span>
      <slot />
    </span>
  </div>
</template>
<script>
export default {
  name: 'app-separator'
}
</script>
<style lang="scss" scoped>
.app-separator {
  align-self: stretch;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    @extend %face-sans-s;

    background: $color-neutral-positive-3;
    width: 100%;
    padding: 1.5rem 0;
    z-index: 10;
  }

  &:before, &:after {
    content: ' ';
    position: absolute;
    right: 0;
    left: 0;
    margin: 0 auto;
    height: 50%;
    width: 1px;
    background: $color-neutral-positive-1;
  }

  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
}
</style>
