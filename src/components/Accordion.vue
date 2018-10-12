<template>
  <div class="accordion" :class="{ active: open }">
    <h4 @click="toggle" class="accordion__title">{{ title }}</h4>
    <span class="accordion__icon">+</span>
    <div class="accordion__content" v-show="open">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
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
  }
}
</script>
<style lang="scss" scoped>
$color: $aubergin;

.accordion {
  width: 100%;
  text-align: left;
}

.accordion__title {
  display: inline-block;
  width: 30%;
  vertical-align: middle;
  color: $color;
  font: normal 500 1rem/150% 'Roboto Mono', monospace;
}

.accordion__icon {
  font-size: 2em;
  display: inline-block;
  vertical-align: middle;
}

.active .accordion__icon {
  transform: rotate(45deg);
}
</style>
