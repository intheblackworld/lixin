<template>
  <div :class="`loading-bg ${loading ? '' : 'hide'} ${remove ? 'none' : ''}`">
    <img src="~@/assets/img/loading.gif" alt class="loading-icon" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';

.loading-bg {
  background-color: $loading_bg_color;
  background-image: $loading_bg_image;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .loading-icon {
    width: 150px;
    // border-color: $loading_icon_color;
  }

  &.hide {
    animation: hide 1s ease 0s forwards;
  }

  &.none {
    display: none;
  }

  @keyframes hide {
    0% {
      oacity: 1;
      display: block;
    }

    99% {
      opacity: 0;
      display: block;
      z-index: 1000;
    }

    100% {
      opacity: 0;
      display: none;
      z-index: -1000;
    }
  }
}
</style>

<script>
// import { setTimeout } from 'timers'

export default {
  name: 'loadingComponent',

  props: ['loading'],

  data() {
    return {
      remove: false,
    }
  },

  watch: {
    loading: {
      handler(loading) {
        this.remove = !loading
      },
      // immediate: true,
    },
  },

  // created() {
  //   setTimeout(() => {
  //     this.remove = true
  //   }, 1000)
  // },
}
</script>
