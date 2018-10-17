<template>
  <footer class="app-footer">
    <slot />
  </footer>
</template>
<script>
export default {
  name: 'app-footer'
}
</script>
<style lang="scss" scoped>
.app-footer {
  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background: $color-white;
  padding: 1rem 0;
}
</style>
