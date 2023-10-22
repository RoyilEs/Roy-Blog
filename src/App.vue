<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  
  <Navbar/>
  <router-view></router-view>
  <div class="background"></div>
</template>

<style scoped>
  #app {
    background-color:transparent;
    font-family: NotoSansHans-Bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #0a2845;
  }
  .background {
    background:url("src/assets/image/back-roy1.png");
    background-size: cover;
    background-attachment: scroll;
    background-repeat: no-repeat;
    min-width: 100%;
    min-height: 100%;
    z-index: -99;
    position: fixed;
    top: 0;
    opacity: .5;
    transition: opacity 1s linear;
  }
</style>
