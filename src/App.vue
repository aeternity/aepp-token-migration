<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Start">Start</router-link>
      <router-link to="/Migrate">Migrate Now</router-link>
      <router-link to="/Airgap">Airgap Vault</router-link>
      <router-link to="/Ledger">Ledger Wallet</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style src="./App.scss" lang="scss"></style>
