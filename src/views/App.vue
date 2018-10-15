<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Start">Start</router-link>
      <router-link to="/Migrate">Migrate Now</router-link>
      <router-link to="/Airgap">Airgap Vault</router-link>
      <router-link to="/Ledger">Ledger Wallet</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<style lang="scss">
html {
  font-family: 'Inter UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  font-size: $base-font-size;
  line-height: $base-font-size*1.35;
}

body {
  margin: 0;
  background-color: $bg-color;

  & * {
    margin: 0;
  }
}

a {
  text-decoration: none;
  color: $black;
  &:hover {
    color: $magenta;
  }
}

#app {
  & .view__content {
    max-width: 60em;
    margin: 0 auto;
    margin-top: 5%;
  }
}

img {
  width: 100%;
  height: auto;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.agile__dots {
  position: absolute;
  bottom: $spacer-l;
  right: 28%;
  transform: translate(-28%);
}

.agile__dot button {
  background: $grey;
  border: none;
  margin: 0 .5rem;
  display: block;
  border-radius: 50%;
  padding: 5px;
}

.agile__dot--current button {
  background: red;
}

.agile__slide {
  padding-top: 3rem;
  padding-left: 2rem;
}

.ae-check-button[data-v-57274944] {
  width: auto !important;
}

.qrcode-reader {
  width: 100%;
  height: 100%;
  &__inner-wrapper{
    width: 100%;
  }
  &__camera {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  &__pause-frame {
    width: 100%;
    height: auto;
    filter: blur(20px);
    object-fit: cover;
  }
}
</style>
