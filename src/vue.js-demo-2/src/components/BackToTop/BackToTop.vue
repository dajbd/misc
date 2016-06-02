<template>
  <a class="back-to-top" @click="toTop">∧</a>
</template>

<script>
export default {
  methods: {
    toTop () {
      console.log('toStop')
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style>
.back-to-top{
  position: fixed;
  bottom: 15px;
  right: 10px;
  z-index: 999;
  background: rgba(255, 255, 255, 0.8);
}
</style>
