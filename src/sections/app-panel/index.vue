<template>
  <div class="app-panel" :class="{ primary, secondary, padding, margin, shadow, middle, centered, overflow }">
    <div class="app-panel-header" v-if="$slots.header">
      <slot name="header"/>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'app-panel',
  props: {
    primary: Boolean,
    secondary: Boolean,
    padding: Boolean,
    margin: Boolean,
    shadow: Boolean,
    centered: [Boolean, String],
    middle: Boolean,
    overflow: Boolean
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

  &.margin {
    margin-bottom: 8rem;
  }
  &.shadow {
    box-shadow: 0 0 25px rgba(0, 33, 87, 0.40);

    @media print {
      box-shadow: none;
    }
  }
  &.centered {
    padding-top: 0;
    padding-left: 12rem;
    padding-right: 12rem;
    padding-bottom: 4rem;
  }
  &.middle {
    @include center-both;

    width: 100%;
  }
  &.overflow {
    overflow: visible;
  }
}

.app-panel-header {
  @extend %face-sans-l;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-white;
  box-shadow: 0 0 16px $color-shadow-alpha-15;
  height: 5.125rem;
  margin-bottom: 3rem;
  font-size: 1rem;
  font-weight: bold;

  > img {
    margin-right: 1rem;
    width: 28px;
    height: 26px;
  }
}
</style>
