<template>
  <div class="app-address" :class="{ disabled }">
    <div class="app-address-input" :style="{ background }">
      <label for="address">Your ETH address</label>
      <textarea
        placeholder="0x_"
        @input="$emit('input', $event.target.value)"
        maxlength="70"
        id="address"
        ref="address"
        :disabled="disabled"
      ></textarea>
    </div>
    <slot/>
  </div>
</template>
<script>
import Cleave from 'cleave.js'

import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

export default {
  name: 'app-eth-address',
  components: {
    AeButton,
    AeIcon
  },
  data () {
    return {
      cleave: null,
      options: {
        blocks: [
          3, 2, 3,
          3, 3, 3,
          3, 3, 3,
          3, 3, 3,
          3, 3, 3,
          3, 3, 3
        ]
      }
    }
  },
  props: {
    background: String,
    value: {
      type: String,
      default: ''
    },
    disabled: Boolean
  },
  watch: {
    value (value) {
      this.cleave.destroy()
      this.$refs.address.value = value
      this.cleave = new Cleave(
        this.$refs.address,
        this.options
      )
    }
  },
  mounted () {
    this.$refs.address.value = this.value
    this.cleave = new Cleave(
      this.$refs.address,
      this.options
    )
  },
  beforeDestroy () {
    this.cleave.destroy()
  }
}
</script>
<style lang="scss" scoped>
.app-address {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 560px;
  overflow: hidden;
  transition: all $base-transition-time;
  border-left: 2px solid $color-focus;
  margin-bottom: 1rem;

  &.disabled {
    color: $color-neutral-negative-1;
  }

  @include only-phone {
    max-width: none;
  }
}

.app-address-input {
  background: $color-neutral-positive-3;
  padding-left: 1rem;

  > label {
    @extend %face-sans-xs;

    display: block;
    color: $color-focus;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  > textarea {
    @extend %face-mono-base;

    margin-bottom: 1rem;
    width: 100%;
    height: auto;
    font-size: 1.6rem;
    background: transparent;
    line-height: 2.125rem;
    min-height: 72px;
    max-height: 72px;
    border: 0;
    resize: none;
    color: #76818C;
    text-align: justify;
  }

  @include only-phone {
    padding-right: 1rem;

    > textarea {
      min-height: 170px;
      max-height: none;
    }
  }
}
</style>
