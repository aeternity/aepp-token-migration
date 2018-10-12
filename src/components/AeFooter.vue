<template>
  <footer class="ae-footer">
    <slot />
  </footer>
</template>
<script>
export default {
  name: 'ae-footer'
}
</script>
<style lang="scss" scoped>
.ae-footer {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}
</style>
