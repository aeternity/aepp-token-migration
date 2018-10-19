<template>
  <div class="app-view" :class="{ container }">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'app-view',
  props: {
    container: Boolean
  }
}
</script>
<style lang="scss" scoped>
.app-view {
  position: relative;
  min-height: 100%;

  &.container {
    padding: 2rem 0 4rem 0;
    margin: 0 auto;
    width: 100%;
    max-width: 60rem;
  }
}
</style>
