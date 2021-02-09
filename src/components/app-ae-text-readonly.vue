<template>
  <div class="aetext-margin" >
    <ae-text class="aetext-font">
      <slot/>
    </ae-text>
  </div>
</template>
<script>
import AeText from '@aeternity/aepp-components/dist/ae-text'

export default {
  name: 'app-ae-text-readonly',
  components: {
    AeText
  }
}
</script>
<style lang="scss" scoped>

.aetext-margin {
  margin-right: auto;
  margin-left: auto;
}
.aetext-font {
  font-family: "IBM Plex Mono";
  font-size: 3.25rem;
  letter-spacing: -0.05em;
  line-height: 3rem;
  color: dimgrey;
}

</style>
