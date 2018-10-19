<template>
  <ol class="list-steps" :class="{ 'is-primary': primary, 'is-secondary': secondary}">
    <slot/>
  </ol>
</template>

<script>
export default {
  name: 'steps-list',
  props: {
    primary: Boolean,
    secondary: Boolean
  }
}
</script>
<style lang="scss">
.list-steps {
  list-style: none;
  counter-reset: count-steps;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  @include phone-and-tablet {
    justify-content: space-around;
  }
}
.is-primary {
  flex-direction: column;
}
.is-secondary {
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
