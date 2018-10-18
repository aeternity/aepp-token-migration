<template>
  <div class="app-panel" :class="{ primary, secondary, padding, shadow }">
    <div class="app-panel-header" v-if="$slots.header">
      <slot name="header" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'app-panel',
  props: {
    primary: Boolean,
    secondary: Boolean,
    padding: Boolean,
    shadow: Boolean
  }
}
</script>
<style lang="scss" scoped>
.app-panel {
  position: relative;
  overflow: hidden;
  background: $color-white;

  &.primary {
    background: #F7FAFC;
  }
  &.secondary {
    background: #E3ECF2;
  }

  &.padding {
    padding: 3rem;

    > .app-panel-header {
      margin-top: -3rem;
      margin-right: -3rem;
      margin-left: -3rem;
    }
  }
  &.shadow {
    box-shadow: 0 0 25px rgba(0, 33, 87, 0.40);
  }
}

.app-panel-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-white;
  box-shadow: 0 0 16px $color-shadow-alpha-15;
  height: 5.125rem;
  margin-bottom: 3rem;
}
</style>
