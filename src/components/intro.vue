<template>
  <div class="intro">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'intro'
}
</script>
<style lang="scss" scoped>
.intro {
  text-align: center;

  &__footer {
    margin-top: $spacer-l;
    text-align: center;
  }
}
</style>
