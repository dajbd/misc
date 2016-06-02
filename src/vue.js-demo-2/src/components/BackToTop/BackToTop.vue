<template>
  <a class="back-to-top" @click="toTop" v-if="enableIcon">∧</a>
</template>

<script>
import Vue from 'vue'

export default {
  data: () => {
    return {
      enableIcon: false,
      distance: 0
      // innerHeight: window.innerHeight,
    }
  },
  props: {
    element: {
      default: () => {
        return window
      }
    }
  },
  methods: {
    toTop () {
      // console.log('toStop')
      window.scrollTo(0, 0)
    }
  },
  // created () {
  //   console.log('c')
  // },
  ready () {
    this.distance = this.element.innerHeight || this.element.offsetHeight

    let { element } = this
    let handle = Vue.filter('debounce')(() => {
      if (element.scrollY > this.distance) {
        this.enableIcon = true
      } else {
        this.enableIcon = false
      }
    }, 100)

    element.addEventListener('scroll', handle)
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
