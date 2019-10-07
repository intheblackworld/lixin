<template>
  <div class="section1">
    <Loading :loading="loading" />
    <div class="bg fullscreen relative">
      <img :class="`absolute-c ${imgIndex === 0 ? 'show' : ''}`" src="./s1_logo.png" alt />
      <img :class="`absolute-c ${imgIndex === 1 ? 'show' : ''}`" src="./s1_title.png" alt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s1_bg.jpg');
  background-position: 50% 100%;
  background-size: auto;

  img {
    opacity: 0;
    margin-top: -50px;
    transition: all 1s;
  }

  .show {
    margin-top: 0px;
    opacity: 1;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    img {
      width: 90vw;
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s1_bg_m.jpg');
    background-position: 50% 100%;
    background-size: auto;

    img {
      opacity: 0;
      margin-top: -50px;
      transition: all 1s;
      width: 90vw;
    }

    .show {
      margin-top: 0px;
      opacity: 1;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import Loading from '@/components/Loading.vue'
import { setTimeout, setInterval } from 'timers'

export default {
  name: 'section1',
  components: {
    Loading,
  },

  data() {
    return {
      loading: false,
      imgIndex: 0,
    }
  },

  methods: {},

  created() {
    this.$Lazyload.$on('loaded', ({ el, src }) => {
      setTimeout(() => {
        if (this.loading) {
          this.loading = false
        }
      }, 500)
    })

    setInterval(() => {
      if (this.imgIndex === 0) {
        this.imgIndex = 1
      } else {
        this.imgIndex = 0
      }
    }, 5000)
  },
}
</script>
