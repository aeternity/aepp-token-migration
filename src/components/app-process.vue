<template>
  <div class="app-process" v-if="!collapsed">
    <slot />
  </div>
  <div v-else>
    <button class="app-process-collapse" @click="visible = !visible">
      <ae-icon name="plus" v-if="!visible"/>
      <ae-icon name="close" v-else/>
    </button>
    <div class="app-process" v-show="visible">
      <slot />
    </div>
  </div>
</template>
<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

export default {
  name: 'app-process',
  components: {
    AeButton,
    AeIcon
  },
  data: function () {
    return { visible: false }
  },
  props: {
    collapsed: Boolean
  }
}
</script>
<style lang="scss" scoped>
.app-process {
  position: relative;
  padding: 0 4rem 0 8rem;
  z-index: 10;

  /deep/ > li {
    list-style: none;
    position: relative;
    padding: 2rem 0;
    border-bottom: 1px solid #D3DCE6;

    > span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 2rem;
      left: -4rem;
      border: 2px solid #979797;
      background: #979797;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      overflow: hidden;

      &:before {
        display: block;
        position: absolute;
        top: -300%;
        content: ' ';
        height: 300%;
        width: 2px;
        background: #979797;
        z-index: -1;
      }
    }

    > h4 {
      font-family: $font-sans;
      font-weight: bold;
      font-size: 0.9375rem;
      margin: 0;
      color: #203040;
    }

    > p {
      margin: 0;
      font-family: $font-mono;
      font-size: 0.8125rem;
      color: #929CA6;
      letter-spacing: 0.125rem;

      > span {
        margin: 0 0.2rem;
      }
    }

    &:first-child > span:before {
      display: none;
      visibility: hidden;
    }

    &:last-child {
      border-bottom: none;
    }
  }
}

.app-process-collapse {
  position: relative;
  display: block;
  width: 3rem;
  margin: 0 auto;
  background: none;
  border: 0;
  font-size: 2rem;
  padding: 0;
  color: $color-neutral-negative-3;
  cursor: pointer;
}
</style>
