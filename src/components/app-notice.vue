<template>
  <div class="app-notice">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'app-notice'
}
</script>
<style lang="scss" scoped>
.app-notice {
  @extend %face-sans-l;

  position: relative;
  display: block;
  text-align: center;
  background: $color-primary;
  color: $color-white;
  font-size: 0.875rem;
  width: 100%;
  padding: 0.5rem;

  a {
    display: inline-block;
    color: $color-white;
    text-decoration: underline;

    &:hover, &:focus {
      color: $color-white;
    }
  }

  @media print {
    display: none;
    visibility: hidden;
  }
}
</style>
