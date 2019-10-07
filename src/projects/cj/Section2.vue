<template>
  <div class="section2">
    <div class="bg relative">
      <div class="slide relative" data-aos="fade"
        data-aos-delay="0">
        <img
          :src="slide.src"
          v-for="(slide, index) in slideList"
          :class="`fullscreen slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s2-slide-${index}`"
        />
        <div class="content" data-aos="fade-down"
        data-aos-delay="600">
          <div class="title">東區首席</div>
          <div class="subtitle">台北科技走廊之頂，北台灣黃金軸帶核心</div>
          <div class="desc">
            北市外擴第一圈，康寧生活圈機能核心，與哈拉影城東湖商圈連成一器。
            周邊群聚內科、南軟、汐科這3座北臺灣最重要的金雞母，廣吸白領精英進駐，共同讓你點石成金。
            商圈與公園的雙享機能超越單一的公園綠生活或都會商圈型態，實現讓綠色幸福 + 繁華便利，創造出迷人又耀眼的生活風潮。
          </div>
        </div>
        <img src="./s2/s2_bg1.png" alt class="img bg1" />
        <img src="./s2/s2_block.png" alt class="img block" v-if="!isMobile" data-aos="fade"
        data-aos-delay="0" />
        <img src="./s2/s2_line.png" alt class="img line" v-if="!isMobile" data-aos="fade"
        data-aos-delay="0" />
      </div>
      <div class="relative fullscreen" v-if="!isMobile">
        <img src="./s2/s2_bg2.jpg" alt class="img" />
        <img src="./s2/s2_label.png" alt class="img label" />
        <img src="./s2/s2_logo.png" alt class="img" />
        <img src="./s2/s2_bg_bottom.png" alt class="img bg-bottom" />
      </div>
      <Map :bgSrc="bgSrc" v-if="isMobile">
      </Map>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s1/s1_bg.jpg');
  background-size: cover;
  position: relative;
}

.slide {
  z-index: 4;
  .slide-img {
    transition: all 0s;
  }
}

.bg1 {
  z-index: 5;
}

.block {
  z-index: 6;
}

.line {
  z-index: 7;
}

.ribbon {
  transform: translateY(60px);
  z-index: 3;
}

.content {
  position: absolute;
  z-index: 10;
  right: calc(100vw * (220 / 1920));
  bottom: calc(100vh * (220 / 1080));
  width: calc(100vw * (630 / 1920));
  padding-left: calc(100vw * (70 / 1920));
  padding-right: calc(100vw * (95 / 1920));

  .title {
    font-size: calc(100vw * (110 / 1920));
    font-weight: bold;
    line-height: 1.2;
    text-align: left;
    color: #ffffff;
    margin-bottom: 25px;
  }

  .subtitle {
    font-size: calc(100vw * (24 / 1920));
    line-height: 1.28;
    text-align: left;
    margin-bottom: 25px;
    color: #ffef00;
  }

  .desc {
    font-size: 17px;
    line-height: 1.3;
    text-align: justify;
    color: #ffffff;
  }
}

.fullscreen {
  overflow: visible;
  height: 100vh;
}

.img {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;

  &.relative {
    position: relative;
  }

  &.bg-bottom {
    height: auto;
    bottom: 0;
    top: auto;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s1/s1_bg_m.jpg');
    background-size: cover;
  }

  .content {
    width: 90vw;
    opacity: 0.8;
    background-color: #334e66;
    text-align: center;
    margin: 0 auto;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 20px;

    .title {
      font-size: 65px;
      text-align: center;
    }

    .subtitle {
      font-size: 16px;
    }

    .desc {
      font-size: 15px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import Map from '@/components/Map.vue'
export default {
  name: 'section2',
  mixins: [slider],

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s2/s2_img1.jpg'),
        },
        {
          src: require('./s2/s2_img2.jpg'),
        },
      ],
      bgSrc: require('./s2/mo/map.jpg')
    }
  },

  methods: {},

  created() {
    setInterval(() => {
      if (this.slideList) {
        this.addIndex()
      }
    }, 3000)
  },
}
</script>
