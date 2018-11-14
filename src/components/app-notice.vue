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
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-primary;
  color: $color-white;
  font-size: 0.875rem;
  width: 100%;
  height: 40px;

  a {
    margin: 0 0.2rem;
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
