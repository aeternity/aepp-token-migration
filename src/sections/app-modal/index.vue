<template>
  <div class="app-modal-backdrop" @click.self="$emit($event.type, $event)">
    <div class="app-modal">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-modal'
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
}

.app-modal {
  @include center-both;

  max-width: 900px;
  width: 900px;
}
</style>
