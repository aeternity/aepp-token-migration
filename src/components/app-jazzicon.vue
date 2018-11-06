<template>
  <span class="app-jazzicon"></span>
</template>
<script>
import jazzIcon from 'jazzicon'

export default {
  name: 'app-jazzicon',
  data: function () {
    return { icon: null }
  },
  props: {
    address: String,
    size: {
      type: [Number, String],
      default: 32
    }
  },
  methods: {
    addressToNumber: function (address) {
      let addr = address.slice(2, 10)
      return parseInt(addr, 16)
    },
    addIcon: function (size, address) {
      if (this.$el.children.length) {
        this.$el.replaceChild(
          this.$el.children[0],
          jazzIcon(size, this.addressToNumber(address))
        )
      }
      this.$el.appendChild(
        jazzIcon(size, this.addressToNumber(address))
      )
    }
  },
  watch: {
    address: function (address) {
      this.addIcon(this.size, address)
    },
    size: function (size) {
      this.addIcon(size, this.address)
    }
  },
  mounted () {
    this.addIcon(this.size, this.address)
  }
}
</script>
<style scoped>
.app-jazzicon {
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
}
</style>
