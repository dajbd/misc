<template>
  <a class="BackToTop" @click="handleToTop" :class="{ shown: isShow }" transition="fade"></a>
</template>

<script>
import Vue from 'vue'

export default {
  data: () => {
    return {
      isShow: false,
      distance: 0
    }
  },
  props: {
    element: {
      type: global.HTMLElement,
      default: () => {
        return global
      }
    }
  },
  methods: {
    handleToTop () {
      global.scrollTo(0, 0)
      this.isShow = false
    },
    handleScroll: Vue.filter('debounce')(function () {
      if (this.element.scrollY > this.distance) {
        this.isShow = true
        this.$root.$broadcast('backToTopShown')
      } else {
        this.isShow = false
        this.$root.$broadcast('backToTopHidden')
      }
    }, 150)

  },
  ready () {
    this.distance = this.element.innerHeight || this.element.offsetHeight
    this.element.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    this.element.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
.BackToTop {
  position: fixed;
  bottom: 15px;
  right: 10px;
  width: 45.66666667px;
  height: 45.66666667px;
  font-size: 20px;
  background: url("./image/back-to-top-iconfont.cn.png");
  background-size: cover;
  visibility: hidden;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.BackToTop.shown {
  visibility: visible;
}

.BackToTop.fade-transition {
  transition: all .13s ease;
  overflow: hidden;
}

.BackToTop.fade-enter,
.BackToTop.fade-leave {
  opacity: 0;
}
</style>
