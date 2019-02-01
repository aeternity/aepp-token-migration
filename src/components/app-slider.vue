<template>
  <agile class="app-slider" :arrows="false" :infinite="false">
    <slot/>
  </agile>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'app-slider'
}
</script>
<style lang="scss" scoped>
.app-slider /deep/ .agile__dots {
  left: 77%;

  @include phone-and-tablet {
    left: 50%;
  }
}
</style>
