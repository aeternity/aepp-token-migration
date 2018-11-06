<template>
  <div class="app-slide-container">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'app-slide-container'
}
</script>
<style lang="scss" scoped>
.app-slide-container {
  position: relative;
  width: 100%;
  margin: auto;
}
</style>
