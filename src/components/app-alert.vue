<template lang="html">
  <div>
    <vs-alert class="app-alert"
    :active.sync="activated"
    closable
    close-icon="close">
      <slot/>
    </vs-alert>
  </div>
</template>

<script>
export default {
  name: 'app-alert',
  props: {
    hash: String
  },
  data () {
    return {
      activated: true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-alert {
  @extend %face-sans-l;

  position: relative;
  display: block;
  text-align: center;
  background: #00BFA8;
  color: $color-white;
  font-size: 0.875rem;
  width: 100%;
  padding: 0.5rem;
  --vs-primary: false;
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
