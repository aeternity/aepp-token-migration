<template>
  <div class="app-notice">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'app-notice'
}
</script>
<style lang="scss" scoped>
.app-notice {
  @extend %face-sans-l;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-primary;
  color: $color-white;
  font-size: 0.875rem;
  width: 100%;
  height: 40px;

  @media print {
    display: none;
    visibility: hidden;
  }
}
</style>
