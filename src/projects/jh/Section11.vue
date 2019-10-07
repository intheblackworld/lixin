<template>
  <div class="section11">
    <div class="bg">
      <div :class="`dialog ${isDialogShow ? 'show' : ''}`">
        <div class="relative">
          <img src="./s4/close.png" alt class="close" @click="isDialogShow = false" />
          <iframe
            ref="iframe"
            :src="currentIframe"
            :height="iframeHeight"
            :width="iframeWidth"
            frameborder="0"
            style="background: #fff"
          ></iframe>
        </div>
      </div>
      <div>
        <div class="title-block">
          <h3 class="title">媒體報導</h3>
          <div class="subtitle">Big News</div>
        </div>
        <div class="container">
          <!-- <div class="mask" v-if="!isMobile"></div> -->
          <swiper :options="swiperOption" ref="mySwiper" swiper-no-swiping>
            <swiper-slide
              v-for="(slide, index) in slideList"
              :index="index"
              :key="slide.img"
              class="item"
            >
              <img :src="slide.src" :class="`item-img`" @click="showIframeDialog(slide.link)" />
              <div class="title" @click="showIframeDialog(slide.link)">{{slide.title}}</div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev">
              <img src="./arrow-left.png" alt />
            </div>
            <div class="swiper-button-next" slot="button-next">
              <img src="./arrow-right.png" alt />
            </div>
          </swiper>
        </div>
        <!-- <div :class="`slide relative`" v-if="isMobile">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s8-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="name">{{slideList[slideIndex].title}}</div>
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decIndex" src="./arrow-left.png" alt />
            <img @click="addIndex" src="./arrow-right.png" alt />
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: relative;
  overflow: hidden;
  position: relative;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next,
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  opacity: 0;

  img {
    width: 25px;
  }
}

.container {
  width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .mask {
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    z-index: 10;
    opacity: 0;
  }

  .item {
    // width: 20%;
    position: relative;
    cursor: pointer;
    padding: 3px;
    border: 1px solid #e6b048 !important;
    overflow: hidden;
    transition: all 0.3s;
    &:hover {
      border-color: #fff !important;
    }
    background: #000;
    z-index: 11;

    img {
      width: 100%;
      cursor: pointer;
    }

    .title {
      font-size: 19px;
      margin-top: 5px;
      text-align: left;
      color: #ffffff;
      background: #000;
      line-height: 1.4;
      height: 100px;
      display: flex;
      align-items: center;
      padding: 20px;
    }

    &::before {
      content: '';
      width: 40%;
      height: 100%;
      display: block;
      background: #fff;
      position: absolute;
      transform: skewX(-20deg);
      left: -10%;
      opacity: 0;
      top: 0;
      z-index: 5;
      transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    }

    &:hover::before {
      opacity: 1;
      width: 90%;
      left: 140%;
    }
  }
}

.dialog {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 150;
  &.show {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close {
    cursor: pointer;
    position: absolute;
    top: -70px;
    right: -70px;
    z-index: 2;
  }

  .detail {
    height: 70vh;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .container {
    width: 1240px;
    > img {
      width: 600px;
    }
  }
  .fullscreen {
    height: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 450px;
      cursor: pointer;
    }

    .item {
      .title {
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    padding: 0 0 40px;
  }

  .fullscreen {
    height: auto !important;
  }

  .container {
    width: 100vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // img {
    //   width: 50vw;
    //   // height: 300px;
    //   cursor: pointer;
    // }
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next,
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    background-image: none !important;
    opacity: 1;

    img {
      width: 25px;
    }
  }

  .dialog {
    .close {
      cursor: pointer;
      position: absolute;
      width: 50px;
      top: -70px;
      right: 0px;
      z-index: 2;
    }
  }

  .swiper-wrapper {
    margin-left: 32%;
  }

  .swiper-slide {
    width: 90%;
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
  name: 'section11',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      isTablet,
      isDialogShow: false,
      currentIframe: '',
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
      iframeWidth: 960,
      iframeHeight: 536,
      slideList: [
        {
          src: require('./s11/1.jpg'),
          title: '築禾交響院台北1／2價入主三重核心地段豪宅',
          link: 'https://www.chinatimes.com/realtimenews/20190906000004-260410?chdtv',
        },
        {
          src: require('./s11/2.jpg'),
          title: '今年新北最大案公開 三重「築禾交響院」總銷168億',
          link: 'http://home.appledaily.com.tw/article/index/20190720/38396670/',
        },

        {
          src: require('./s11/3.jpg'),
          title: '築禾交響院 大三重市政核心 3361坪摩天地王',
          link:
            'https://house.udn.com/house/story/5888/4028534',
        },

        {
          src: require('./s11/4.jpg'),
          title: '直擊新北最大案！捷運+公園+市政核心　「築禾交響院」公開爆場',
          link:
            'https://house.ettoday.net/news/1524198',
        },
        {
          src: require('./s11/5.jpg'),
          title: '築禾交響院 三重菜寮站旁 大基地新案',
          link:
            'https://estate.ltn.com.tw/article/8042',
        },
        {
          src: require('./s11/6.jpg'),
          title: '三重市地王「築禾交響院」！　捷運+市政+公園三核心交匯',
          link:
            'https://www.setn.com/News.aspx?NewsID=596025',
        },
      ],
    }
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },

  mounted() {
    this.iframeWidth = window.screen.width / (10 / 7)
    this.iframeHeight = window.screen.width / (10 / 4)
    if (this.isTablet) {
      this.iframeWidth = 800
      this.iframeHeight = 450
    }
    if (this.isMobile) {
      this.iframeWidth = window.screen.width
      this.iframeHeight = window.screen.height * 0.7
    }
  },
  methods: {
    // startSwipe() {
    //   this.swiper.autoplay.start()
    // },

    // stopSwipe() {
    //   this.swiper.autoplay.stop()
    // },

    showIframeDialog(link) {
      console.log(123)
      this.isDialogShow = true
      this.currentIframe = link
    },
  },
}
</script>
