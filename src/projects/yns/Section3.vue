<template>
  <div class="section3">
    <div class="bg fullscreen">
      <img src="./s3/img1.png" alt class="img1" data-aos="fade-right" data-aos-delay="0" />
      <div class="text" data-aos="fade-up" data-aos-delay="400">
        <div class="title">依山面水 三峽最美</div>
        <div class="desc">
          佔據「鳶山vs大漢溪畔」交會點；
          <br />獨霸三峽最強視野，讓眼界氣度更上層樓…
          <br />讓親近大自然的心願，無須遠離都會就能實現！
          <br />
        </div>
      </div>
      <img src="./s3/img2.jpg" alt class="img2" v-if="!isMobile" />
      <img src="./s3/img2m.jpg" alt class="img2" v-if="isMobile" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-image: url('./s1/bg.png');
  position: relative;
  overflow: hidden;
  position: relative;
}

.img1 {
  position: absolute;
  top: 0;
  left: 10vw;
  width: 310px;
  height: auto;
  z-index: 2;
}

.img2 {
  position: absolute;
  width: 100vw;
  height: auto;
  bottom: 0;
  left: 0;
}

.text {
  position: absolute;
  left: calc(10vw + 210px);
  top: 150px;
  z-index: 2;

  .title {
    font-size: 30px;
    font-weight: bold;
    line-height: 1.2;
    color: #231916;
    margin-bottom: 15px;
    text-align: left;
  }

  .desc {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.1px;
    text-align: left;
    color: #595857;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .fullscreen {
    height: auto !important;
  }

  .img1 {
    top: 0;
    left: 0;
    width: 30vw;
  }

  .img2 {
    position: relative;
  }

  .text {
    position: relative;
    left: 0;
    right: 0;
    top: auto;
    margin: 0 auto;
    margin-top: 30px;
    width: 90vw;

    .title {
      font-size: 24px;
    }

    .desc {
      font-size: 16px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section3',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
