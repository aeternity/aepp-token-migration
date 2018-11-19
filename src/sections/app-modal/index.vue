<template>
  <div class="app-modal-backdrop" :class="{ dark }" @click.self="$emit($event.type, $event)">
    <slot name="button" />
    <div class="app-modal">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-modal',
  props: {
    dark: Boolean
  }
}
</script>
<style lang="scss" scoped>
.app-modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba($color-neutral-positive-2, 0.9);
  overflow: auto;
  z-index: 100;

  > button, > a {
    position: fixed;
    top: 2rem;
    right: 2rem;
  }

  &.dark {
    background: $color-neutral-positive-2;
  }
}

.app-modal {
  @include center-both;

  max-width: 900px;
  width: 900px;

  @include only-phone {
    max-width: none;
    width: 100%;
    height: 100%;

    /deep/ .app-panel {
      height: 100%;
    }
  }
}
</style>
