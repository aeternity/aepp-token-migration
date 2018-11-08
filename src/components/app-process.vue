<template>
  <div class="app-process">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'app-process'
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
</style>
