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
// @ is an alias to /src
// import Hero from '@/components/Hero.vue'
export default {
  name: 'Ledger',
  data: function () {
    return {
    }
  }
}
</script>
<style src="./Ledger.scss" lang="scss"></style>
