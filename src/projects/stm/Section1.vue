<template>
  <div class="section1">
    <Loading :loading="loading" />
    <!-- 背景圖覽家仔 -->
    <section
      class="fullscreen bg-cover no-nav flex-c bg"
      v-scroll-reveal.reset="$fadeInUp()"
    >
      <div class="container">
        <img class="slogan" v-scroll-reveal.reset="$fadeInUp()" src="./title.png" />
        <div class="content">
          <h3 v-scroll-reveal.reset="$fadeInUp(500)" class="title">絕版綠境、水碓別墅特區</h3>
          <h3 v-scroll-reveal.reset="$fadeInUp(700)" class="sub-title">久違了，好久不見的自己</h3>
          <p v-scroll-reveal.reset="$fadeInUp(900)">不論世界怎麼變，在心底總有一畝不變的記憶</p>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s1_bg.png');
}
.container {
  width: 920px;
  height: 494px;
  position: relative;

  .slogan {
    position: absolute;
    left: 0;
    top: 0;
  }

  .content {
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: left;
    color: #2b466f;

    .title {
      font-size: 42px;
      margin-bottom: 20px;
    }

    .sub-title {
      font-size: 28px;
      margin-bottom: 10px;
    }

    p {
      font-size: 24px;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    .content {
      .title {
        font-size: 31px;
        margin-bottom: 20px;
      }

      .sub-title {
        font-size: 20px;
        margin-bottom: 10px;
      }

      p {
        font-size: 18px;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .container {
  width: 100%;
  height: auto;

  .slogan {
    position: relative;
    left: auto;
    top: auto;
    width: 257px;
    margin-bottom: 30px;
  }

  .content {
    position: relative;
    bottom: auto;
    right: auto;
    margin: 0 auto;
    text-align: center;

    .title {
      color: #fff;
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
      font-size: 23px;
      margin-bottom: 100px;
    }

    .sub-title {
      font-size: 16px;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }
  }
}
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

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
      }, 2500)
    })
  },
}
</script>
