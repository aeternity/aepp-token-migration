<template>
  <div :class="this.$options.name">
    <div>
      <section >
        <h1>
          this is {{ this.$options.name }}
        </h1>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ledger'
}
</script>
<style lang="scss"></style>
