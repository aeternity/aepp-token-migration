<template>
      <footer class="ae-footer">
        <slot/>
      </footer>
    </article>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'ae-footer'

}
</script>
<style lang="scss" scoped>
.ae-footer {
  display: flex;
  align-content: center;
  justify-content: space-evenly;
}
</style>
