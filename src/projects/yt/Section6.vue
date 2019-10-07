<template>
  <div class="section6">
    <div class="bg fullscreen">
      <div v-if="!isMobile">
        <img src="./s6/1o1.png" alt="追求卓越" class="bg-img" data-aos="fade-down"
          data-aos-delay="400" />
        <img src="./s6/2o1.png" alt="Alfa-Safe耐震系統工法" class="bg-img" data-aos="fade-up"
          data-aos-delay="1200" />
        <img src="./s6/2o2.png" alt="SPEED作業效率化" class="bg-img" data-aos="fade-down"
          data-aos-delay="1000" />
        <img src="./s6/2o3.png" alt="SIMPLE防呆配件化" class="bg-img" data-aos="fade-right"
          data-aos-delay="800" />
        <img src="./s6/2o4.png" alt="STANDARD規格標準化" class="bg-img" data-aos="fade-down"
          data-aos-delay="600" />
        <img src="./s6/3o1.png" alt="SYSTEM系統規則化" class="bg-img" data-aos="fade-down"
          data-aos-delay="1400" />
      </div>
      <div v-else>
        <h3 class="title" data-aos="fade-down" data-aos-delay="400">追求卓越</h3>
        <h3 class="title title-2" data-aos="fade-down" data-aos-delay="400">Alfa-Safe耐震系統工法</h3>
        <div class="desc" data-aos="fade-down" data-aos-delay="600">
          特採用 戴雲發 結構技師
          <br />研發之專利結構工法，讓安全向上升級
        </div>
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="200">
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.src" :class="`circle-img`" />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev">
            <img src="./arrow-left.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./arrow-right.png" alt />
          </div>
        </swiper>
        <swiper
          :options="methodOption"
          ref="methodSwiper"
          @slideChangeTransitionEnd="slideChanged"
          data-aos="fade-down"
          data-aos-delay="200"
          class="method"
        >
          <swiper-slide
            v-for="(slide, index) in slideListMethod"
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
        <div
          class="name"
          data-aos="fade-down"
          data-aos-delay="400"
          v-html="slideListMethod[methodIndex].name"
        ></div>
        <div
          class="content"
          data-aos="fade-down"
          data-aos-delay="600"
          v-html="slideListMethod[methodIndex].content"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s6/bg.jpg');
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
}

.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
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

  .fullscreen {
    height: auto !important;
  }

  .bg-img {
    top: auto;
    bottom: 0;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background: url('./s6/mo/bg.jpg');
    background-size: 100%;
  }

  .title {
    border-left: 2px solid #02121c;
    padding-left: 20px;
    height: calc(100vw * 30 / 375);
    line-height: calc(100vw * 30 / 375);
    font-size: calc(100vw * 22 / 375);
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 1.2px;
    text-align: left;
    color: #02121c;
    width: calc(100vw * 310 / 375);
    margin: 0 auto;
    margin-top: calc(100vw * 30 / 375);
    margin-bottom: 0;
  }

  .title-2 {
    margin-top: 0;
    text-align: right;
    border-left: none;
    padding-right: 20px;
    border-right: 2px solid #02121c;
    margin-bottom: calc(100vw * 20 / 375);
  }

  .desc {
    width: calc(100vw * 310 / 375);
    font-size: calc(100vw * 17 / 375);
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: calc(100vw * 24 / 375);
    letter-spacing: 1.5px;
    text-align: left;
    color: #3e3a39;
    margin: 0 auto;
    margin-bottom: calc(100vw * 20 / 375);
    white-space: nowrap;
  }

  .circle-img {
    width: calc(100vw * 490 / 750);
    margin: 0 auto;
  }

  .item-img {
    width: calc(100vw * 580 / 750);
    margin: 0 auto;
  }

  .bg.fullscreen {
    height: auto !important;
  }

  .method {
    margin-top: 30px;
  }

  .name {
    width: calc(100vw * 572 / 750);
    margin: 0 auto;
    font-size: 17px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #231815;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  .content {
    width: calc(100vw * 572 / 750);
    margin: 0 auto;
    margin-bottom: 25px;
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.64;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
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
  name: 'section6',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      methodIndex: 0,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isTablet ? 20 : 30,
        // allowSlidePrev: isMobile ? true : false,
        // allowSlideNext: isMobile ? true : false,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        loop: isMobile,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      methodOption: {
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isTablet ? 20 : 30,
        // allowSlidePrev: isMobile ? true : false,
        // allowSlideNext: isMobile ? true : false,
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
          src: require('./s6/mo/11.png'),
        },
        {
          src: require('./s6/mo/12.png'),
        },
        {
          src: require('./s6/mo/13.png'),
        },
        {
          src: require('./s6/mo/14.png'),
        },
      ],

      slideListMethod: [
        {
          src: require('./s6/mo/21.jpg'),
          name: '柱中柱系統工法',
          content:
            '在一樓地震力最大的樓層柱子中，內部再增設加強柱筋及核心圓箍筋的配置，使之形成強化柱核心的柱中柱，能更有效提升一樓結構柱的抗震能力。',
        },
        {
          src: require('./s6/mo/22.jpg'),
          name: 'T型系統牆工法 L型系統牆工法',
          content:
            '各種牆部位的轉角處、正交處及端部等，都以鋼筋加工廠所彎折的Alfa Safe 系統牆配件進行施工，其施工品質精準確實，使整體房屋建築安全更加穩固。',
        },
      ],
    }
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.methodSwiper.swiper
      let index
      index = swiper.activeIndex - 1
      console.log(index)
      if (index === 2) {
        index = 0
      }

      if (index === -1) {
        index = 1
      }

      this.methodIndex = index
    },
  },
}
</script>
