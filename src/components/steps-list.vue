<template>
  <ol class="list-steps">
    <slot/>
  </ol>
</template>

<script>
export default {
  name: 'steps-list',
}
</script>
<style lang="scss">
.list-steps {
  list-style: none;
  counter-reset: count-steps;
  padding: 0;
  margin: 0;
}
</style>
