<template>
  <div class="app-panel" :class="{ primary, secondary, tertiary, padding, margin, shadow, middle, centered, overflow }">
    <div class="app-panel-header" v-if="$slots.header">
      <slot name="header"/>
      <ae-button class="app-panel-close hide-desktop" v-if="close" @click="close">
        <ae-icon name="close"/>
      </ae-button>
    </div>
    <slot/>
  </div>
</template>
<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

export default {
  name: 'app-panel',
  components: {
    AeButton,
    AeIcon
  },
  props: {
    primary: Boolean,
    secondary: Boolean,
    tertiary: Boolean,
    padding: Boolean,
    margin: Boolean,
    shadow: Boolean,
    centered: [Boolean, String],
    middle: Boolean,
    overflow: Boolean,
    close: [Boolean, Function]
  }
}
</script>
<style lang="scss" scoped>
.app-panel {
  position: relative;
  overflow: hidden;
  background: $color-white;
  border-radius: 8px;

  > .app-panel {
    border-radius: 0;
  }

  &.primary {
    // background: #F7FAFC;
    background: $color-white;
  }
  &.secondary {
    background: #E3ECF2;
  }
  &.tertiary {
    background: #EEF3F7;
  }

  &.padding {
    padding: 3rem;

    > .app-panel-header {
      margin-top: -3rem;
      margin-right: -3rem;
      margin-left: -3rem;
    }

    @include only-phone {
      padding: 1rem;

      > .app-panel-header {
        margin-top: -1rem;
        margin-right: -1rem;
        margin-left: -1rem;
      }
    }
  }

  &.margin {
    margin-bottom: 8rem;

    @include only-phone {
      margin-bottom: 1rem;
    }
  }
  &.shadow {
    box-shadow: 0 0 10px 0 rgba(27,68,121,0.14);
    background: #FFFFFF;

    @media print {
      box-shadow: none;
    }
  }
  &.centered {
    padding-top: 0;
    padding-left: 12rem;
    padding-right: 12rem;
    padding-bottom: 4rem;

    @include only-phone {
      padding-top: 0;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 2rem;
    }
  }
  &.middle {
    @include center-both;

    width: 100%;
  }
  &.overflow {
    overflow: visible;
  }
}

.app-panel-header {
  @extend %face-sans-l;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-white;
  box-shadow: 0 0 16px $color-shadow-alpha-15;
  height: 5.125rem;
  margin-bottom: 3rem;
  font-size: 1rem;
  font-weight: bold;

  > img {
    margin-right: 1rem;
    width: 28px;
    height: 26px;
  }

  @include only-phone {
    justify-content: flex-start;
    padding-left: 2rem;
  }
}

.app-panel-close {
  position: absolute;
  right: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
