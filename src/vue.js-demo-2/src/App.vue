<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
  <back-to-top></back-to-top>
</template>

<script>
import Hello from './components/Hello'
import BackToTop from './components/BackToTop'

export default {
  components: {
    Hello,
    BackToTop
  }
}
</script>

<style>
#app{
  height: 2000px;
}
</style>
