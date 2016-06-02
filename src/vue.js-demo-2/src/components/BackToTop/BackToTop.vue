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
    }
  },
  props: {
    element: {
      type: Object,
      default: () => {
        return window
      }
    }
  },
  methods: {
    toTop () {
      window.scrollTo(0, 0)
    },
    handleScroll: Vue.filter('debounce')(function () {
      if (this.element.scrollY > this.distance) {
        this.enableIcon = true
        this.$root.$broadcast('backToTopShown')
      } else {
        this.enableIcon = false
        this.$root.$broadcast('backToTopHidden')
      }
    }, 100)

  },
  ready () {
    this.distance = this.element.innerHeight || this.element.offsetHeight

    let fn = () => this.handleScroll()
    this.element.addEventListener('scroll', fn)

    this.$on('desctroy', () => {
      this.element.removeEventListener('scroll', fn)
    })
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
  font-size: 20px;
}
</style>
