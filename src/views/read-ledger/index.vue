<template>
  <main class="view" :class="this.$options.name">
    <app-header />
    <article class="view__content">
      <h1>Read from Ledger</h1>
    </article>
    <ae-nav />
  </main>
</template>

<script>

export default {
  name: 'Read from Ledger',
  data: function () {
    return {
    }
  },
  components: {
  },
  methods: {
  },
  computed: {
  }
}
</script>
<style lang="scss" scoped>
</style>
