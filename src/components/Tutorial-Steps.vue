<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'TutorialSteps',
  props: {
    msg: String
  }
}
</script>
<style lang="scss" scoped>
$color: $aubergin;

h3 {
  color: $color;
  margin: 40px 0 0;
  font: normal 500 13px/150% 'Roboto Mono', monospace;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
