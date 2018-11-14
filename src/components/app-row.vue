<template>
  <div class="app-row">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'app-row'
}
</script>
<style lang="scss" scoped>
.app-row {
  position: relative;
  display: flex;
  justify-content: space-between;

  @include only-phone {
    flex-direction: column;
    align-items: center;
  }
}
</style>
