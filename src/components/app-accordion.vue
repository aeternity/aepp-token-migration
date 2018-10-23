<template>
  <div class="accordion" :class="{ 'is-open': open }">
    <div class="accordion__subject" @click="toggle">
      <slot name="title"/>
      <ae-icon :name="`${ open ? 'close' : 'plus'}`" fill="primary" size="2.5rem"/>
    </div>
    <div class="accordion__content">
      <slot name="body"/>
    </div>
  </div>
</template>

<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

export default {
  name: 'accordion',
  props: ['title', 'accordion'],
  data: function () {
    return {
      open: false
    }
  },
  methods: {
    toggle (accordion) {
      this.open = !this.open
    }
  },
  components: {
    AeIcon
  }

}
</script>
<style lang="scss" scoped>
$color: $aubergin;

.accordion {
  width: 100%;
  text-align: left;
  margin-top:  $spacer-m;
  padding-bottom: $spacer-m;
  border-bottom: 2px solid $grey;

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
.is-open .accordion__content{
  height: auto;
}

</style>
