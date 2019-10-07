<template>
  <div class="section1">
    <Loading :loading="loading" />
    <!-- 圖片懶家仔 -->
    <!-- <img v-lazy="require('@/assets/img/contact-logo.png')" /> -->
    <!-- 背景圖覽家仔 -->
    <!-- <div
      class="lazy-bg fullscreen"
      v-lazy:background-image="require('@/assets/img/contact-logo.png')"
    ></div>
    <section v-scroll-reveal.reset="$fadeInDown()">
      <img src="@/assets/img/contact-logo.png" />
      <img src="@/assets/img/contact-logo.png" />
    </section> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from '@/components/Loading.vue'
import { setTimeout } from 'timers'

export default {
  name: 'section1',
  components: {
    Loading,
  },

  data() {
    return {
      loading: false,
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
  },
}
</script>
