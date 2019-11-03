<template>
  <div class="section4">
    <!-- img="./bg.jpg" -->
    <div class="fullscreen">
      <div class="bg-top"></div>
      <div class="bg-bottom"></div>
      <div class="title">響應式設計</div>
      <swiper :options="swiperOption" swiper-no-swiping class="mac-container">
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.src_mac"
          class="item"
        >
          <img :src="slide.src_mac" :class="`item-img`" />
        </swiper-slide>
      </swiper>
      <swiper :options="swiperOption" swiper-no-swiping class="tablet-container">
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.src_tablet"
          class="item"
        >
          <img :src="slide.src_tablet" :class="`item-img`" />
        </swiper-slide>
      </swiper>
      <swiper :options="swiperOption" swiper-no-swiping class="phone-container">
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.src_phone"
          class="item"
        >
          <img :src="slide.src_phone" :class="`item-img`" />
        </swiper-slide>
      </swiper>
      <img src="./s4/rwd-mac.png" alt class="mac" />
      <img src="./s4/rwd-tablet.png" alt class="tablet" />
      <img src="./s4/rwd-phone.png" alt class="phone" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  // background: url('./s1/bg.jpg');
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
}

.bg-top {
  width: 100vw;
  height: 70%;
  position: absolute;
  top: 0;
  background-color: #c0bfbd;
  border-bottom: 1px solid #666;
}

.bg-bottom {
  width: 100vw;
  height: 30%;
  position: absolute;
  bottom: 0;
  background-color: rgb(235, 232, 232);
  // border-bottom: 1px solid #666;
}

.mac {
  position: absolute;
  width: calc(100vw * 1240 / 1440);
  right: calc(100vw * -104 / 1440);
  bottom: calc(100vw * 85 / 900);
  z-index: 2;
}

.mac-container {
  position: absolute;
  width: calc(100vw * 749 / 1440);
  right: calc(100vw * 28 / 1440);
  bottom: calc(100vw * 142 / 900);
  overflow: hidden;
  z-index: 1;

  .item-img {
    width: calc(100vw * 749 / 1440);
  }
}

.tablet {
  position: absolute;
  width: calc(100vw * 697 / 1440);
  left: calc(100vw * 200 / 1440);
  bottom: calc(100vw * 64 / 900);
  z-index: 4;
}

.tablet-container {
  position: absolute;
  width: calc(100vw * 504 / 1440);
  height: calc(100vw * 379 / 1440);
  left: calc(100vw * 277 / 1440);
  bottom: calc(100vw * 110 / 900);
  overflow: hidden;
  z-index: 3;

  .item-img {
    width: calc(100vw * 504 / 1440);
    height: calc(100vw * 379 / 1440);
  }
}

.phone {
  position: absolute;
  width: calc(100vw * 170 / 1440);
  left: calc(100vw * 98 / 1440);
  bottom: calc(100vw * 64 / 900);
  z-index: 6;
}

.phone-container {
  position: absolute;
  width: calc(100vw * 118 / 1440);
  height: calc(100vw * 265 / 1440);
  left: calc(100vw * 118 / 1440);
  bottom: calc(100vw * 85 / 900);
  overflow: hidden;
  z-index: 5;

  .item-img {
    width: calc(100vw * 118 / 1440);
    height: calc(100vw * 265 / 1440);
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section4',

  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerColumn: 1,
        allowSlidePrev: true,
        allowSlideNext: true,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      slideList: [
        {
          src_mac: require('./s4/rwd/mac1.jpg'),
          src_tablet: require('./s4/rwd/tablet1.jpg'),
          src_phone: require('./s4/rwd/phone1.jpg'),
        },
        {
          src_mac: require('./s4/rwd/mac2.jpg'),
          src_tablet: require('./s4/rwd/tablet2.jpg'),
          src_phone: require('./s4/rwd/phone2.jpg'),
        },

        {
          src_mac: require('./s4/rwd/mac3.jpg'),
          src_tablet: require('./s4/rwd/tablet3.jpg'),
          src_phone: require('./s4/rwd/phone3.jpg'),
        },

        {
          src_mac: require('./s4/rwd/mac4.jpg'),
          src_tablet: require('./s4/rwd/tablet4.jpg'),
          src_phone: require('./s4/rwd/phone4.jpg'),
        },
      ],
    }
  },

  methods: {},
}
</script>
