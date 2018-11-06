<template>
  <div class="app-accordion" :class="{ 'is-open': open }">
    <div class="app-accordion__subject" @click="toggle">
      <slot name="title"/>
      <ae-icon :name="`${ open ? 'close' : 'plus'}`" fill="primary" size="2.5rem"/>
    </div>
    <div class="app-accordion__content">
      <slot name="body"/>
    </div>
  </div>
</template>

<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

export default {
  name: 'app-accordion',
  components: {
    AeIcon
  },
  props: ['title', 'accordion'],
  data: function () {
    return { open: false }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>
<style lang="scss" scoped>
.app-accordion {
  margin-top: $spacer-m;
  padding-bottom: $spacer-m;
  border-bottom: 2px solid $grey;
  width: 100%;
  text-align: left;

  &__subject {
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    height: 0;
    overflow: hidden;
    transition: height .3s ease;
  }
}

.is-open .app-accordion__content {
  height: auto;
}
</style>
