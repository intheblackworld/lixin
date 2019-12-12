<template>
  <div class="section4">
    <div class="bg">
      <img src="./s4/bg.jpg" alt class="bg-img mobile-bg" />
      <div class="title">響應式設計</div>
      <div class="mobile-scale"><img src="./s4/device.png" alt class="bg-img device" />
      <swiper
        :options="swiperOption"
        swiper-no-swiping
        class="mac-container"
        @slideChangeTransitionEnd="slideChanged"
        ref="mySwiper"
      >
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
      </div>
      <div class="indigator">
        <li
          v-for="(slide, index) in slideList"
          :class="`${slideIndex === index ? 'active' : ''}`"
          :key="`indigator-${index}`"
        ></li>
      </div>
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
  z-index: 2;
  width: 100vw;
  height: 100vw * (1080 /2400);
}

.bg-img {
  width: 100vw;
  height: 100vw * (1080 /2400);
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  z-index: 0;

  // &:nth-child(1) {
  //   position: relative;
  // }

  &.device {
    z-index: 3;
  }
}

.title {
  position: absolute;
  top: 15%;
  left: 30%;
  margin: 0px 0 0 -4em;
  font-size: 45px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.11em;
  text-align: center;
  color: #666;
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
  width: calc(100vw * 640 / 2400);
  right: calc(100vw * -104 / 1440);
  bottom: calc(100vw * 85 / 900);
  z-index: 2;
}

.mac-container {
  position: absolute;
  width: calc(100vw * 1105 / 2400);
  height: calc(100vw * 700 / 2400);
  right: calc(100vw * 215 / 2400);
  bottom: calc(100vw * 235 / 2400);
  overflow: hidden;
  z-index: 1;

  .item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.tablet-container {
  position: absolute;
  width: calc(100vw * 650 / 2400);
  height: calc(100vw * 500 / 2400);
  left: calc(100vw * 626 / 2400);
  bottom: calc(100vw * 115 / 2400);
  overflow: hidden;
  object-fit: cover;
  z-index: 1;

  .item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.phone-container {
  position: absolute;
  width: calc(100vw * 200 / 2400);
  height: calc(100vw * 440 / 2400);
  left: calc(100vw * 385 / 2400);
  bottom: calc(100vw * 95 / 2400);
  overflow: hidden;
  z-index: 1;

  .item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.indigator {
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 30px;
  width: 100px;
  li {
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: #9f9a98;
    margin: 0 8px;

    &.active {
      background-color: #e17b1f;
    }
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .indigator {
    bottom: 10px;
  }
}

@media screen and (max-width: 767px) {
  .mobile-bg {
    width: 100vw;
    height: calc(100vh - 63px);
  }
  .bg {
    height:130vw;
  }

  .device {
    top: auto;
    bottom: 12vh;
  }

  .phone-container {
    bottom: calc(100vh * (95 / 675));
  }

  .tablet-container {
    bottom: calc(100vh * (100 / 675));
  }

  .mac-container {
    bottom: calc(100vh * (118 / 675));
  }

  .title {
    font-size: 8.5vw;
    left: auto;
    right: auto;
    margin: 0 auto;
    width: 100vw;
    text-align: center;
    top: 12%;
  }

  .mobile-scale {
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(1.8) translate(7%, 10%);
    transform-origin: bottom;
  }
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
        pagination: {
          el: '.swiper-pagination',
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
        {
          src_mac: require('./s4/rwd/mac5.jpg'),
          src_tablet: require('./s4/rwd/tablet5.jpg'),
          src_phone: require('./s4/rwd/phone5.jpg'),
        },
      ],
    }
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else if (swiper.isBeginning) {
        this.slideIndex = swiper.slides.length - 3
      } else {
        this.slideIndex = swiper.activeIndex - 1
      }
    },
  },
}
</script>
