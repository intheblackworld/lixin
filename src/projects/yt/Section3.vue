<template>
  <div class="section3">
    <div class="bg">
      <div v-if="!isMobile" class="d-flex">
        <img src="./s3/1.jpg" alt class="img" data-aos="fade-down" data-aos-delay="200" />
        <img src="./s3/2.jpg" alt class="img" data-aos="fade-left" data-aos-delay="500" />
        <img src="./s3/3.jpg" alt class="img" data-aos="fade-up" data-aos-delay="800" />
      </div>
      <div v-else data-aos="fade-down" data-aos-delay="200">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.src" :class="`item-img`" />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev">
            <img src="./arrow-left.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./arrow-right.png" alt />
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
}

.img {
  width: 33.33%;
  height: auto;
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

  .item {
    width: 100vw;
    .item-img {
      width: 100%;
      display: block;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section31',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 2,
        allowSlidePrev: isMobile ? true : false,
        allowSlideNext: isMobile ? true : false,
        // centeredSlides: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        loop: isMobile,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          src: require('./s3/1.jpg'),
        },
        {
          src: require('./s3/2.jpg'),
        },

        {
          src: require('./s3/3.jpg'),
        },
      ],
    }
  },

  methods: {},
}
</script>
