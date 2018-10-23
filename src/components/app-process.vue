<template>
  <div class="app-process">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'app-process'
}
</script>
<style lang="scss" scoped>
.app-process {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
