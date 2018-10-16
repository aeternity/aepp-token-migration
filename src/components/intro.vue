<template>
  <div class="intro">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'intro',
}
</script>
<style lang="scss" scoped>
.intro {
  text-align: center;
  max-width: 28em;
  margin: $spacer-xl auto;

  &__footer {
    margin-top: $spacer-l;
    text-align: center;
  }
}
</style>
