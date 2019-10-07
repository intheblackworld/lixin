<template>
  <div class="section4">
    <div class="bg">
      <div v-if="!isMobile">
        <img
          src="./s5/1.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade-left"
          data-aos-delay="600"
        />
        <img
          src="./s5/2.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade-right"
          data-aos-delay="600"
        />
        <img
          src="./s5/logo.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="1200"
        />
        <img
          src="./s5/t1.png"
          alt="聽見 森林公園第一排"
          class="bg-img"
          data-aos="fade-down"
          data-aos-delay="400"
        />
        <img
          src="./s5/t2.png"
          alt="【下樓 走進一座綠色花園】"
          class="bg-img"
          data-aos="fade-right"
          data-aos-delay="600"
        />
        <img
          src="./s5/t3.png"
          alt="【散步 遇見輕軌的美好距離】"
          class="bg-img"
          data-aos="fade-right"
          data-aos-delay="800"
        />
        <img
          src="./s5/t4.png"
          alt="【轉彎 公司田溪腳踏車自由行】"
          class="bg-img"
          data-aos="fade-right"
          data-aos-delay="900"
        />
      </div>
      <div v-else>
        <h3 class="title" data-aos="fade-down" data-aos-delay="400">聽見 森林公園第一排</h3>
        <div class="desc" data-aos="fade-down" data-aos-delay="600">
          綠意森濤的立體聲，
          <br />收藏無瑕視野第一排
        </div>
        <div class="dropdown" data-aos="fade-down" data-aos-delay="800">
          <div
            :class="`item ${item.open ? 'open' : ''}`"
            v-for="(item, index) in toggleList"
            :key="item.title"
          >
            <h3 @click="toggle(index)" class="head flex-jb flex-ac">
              <div>{{item.title}}</div>
              <img v-if="!item.open" src="./plus.png" alt class="btn" />
              <img v-if="item.open" src="./minus.png" alt class="btn" />
            </h3>
            <div class="content" v-html="item.desc"></div>
          </div>
        </div>
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="200">
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
        <!-- <img src="./s5/mo/bg.jpg" alt class="img" data-aos="fade" data-aos-delay="800" />
        <img src="./s5/mo/logo.png" alt="" class="logo" data-aos="fade" data-aos-delay="1200">-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s5/bg.jpg');
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
}

@media screen and (max-width: 767px) {
  .bg {
    background: #fff;
    height: 100%;
  }

  .item-img {
    width: 100%;
  }

  .title {
    border-left: 2px solid #02121c;
    padding-left: 10px;
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

  .dropdown {
    margin-bottom: 30px;
    .item {
      height: 45px;
      overflow: hidden;
      border-bottom: solid 0.5px #595757;
      width: calc(100vw * 645 / 750);
      margin: 0 auto;
      transition: all 0.5s;

      &.open {
        height: auto;
      }
    }
    .head {
      font-size: calc(100vw * 17 / 375);
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 45px;
      letter-spacing: 1.6px;
      text-align: left;
      color: #595757;
      white-space: nowrap;
    }

    .btn {
      width: 18px;
    }

    .content {
      padding-top: 0px;
      padding-bottom: 10px;
      font-size: calc(100vw * 14 / 375);
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.61;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
    }
  }

  .img {
    width: 100vw;
    margin-top: 20px;
    display: block;
  }

  .logo {
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
  }

  .swiper-container {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .item-img {
    width: 90%;
    margin: 0 auto;
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 5vw;
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 5vw;
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
  name: 'section5',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      toggleList: [
        {
          title: '下樓 走進一座綠色花園',
          desc:
            '佔地約萬坪的七號公園，就在「耘萃」社區門口，轉個彎就是截然不同的生態綠意，調整呼吸走進自然美景，呼吸可以很放鬆、視野可以很寬裕，這一切近在咫尺完美零距離。',
          open: false,
        },
        {
          title: '散步 遇見輕軌的美好距離',
          desc:
            '走出社區約5分鐘，漫步就抵達輕軌／濱海沙崙站，未來將銜接輕軌藍海線，成為雙輕軌站。一路跟著幾米的浪漫繪畫，從紅樹林接軌北捷，悠遊士林圓山、台北城中、大安信義。',
          open: false,
        },
        {
          title: '轉彎 公司田溪腳踏車自由行',
          desc:
            '公七公園對面就是公司田溪水岸綠帶，是城市優雅的一抹綠岸，也棲息了眾多生態，喜鵲、白頭翁、白鷺鷥、水鳥徜徉其中；沿著旁邊的自行車道，可以悠遊淡水單車路網，輕鬆自在。',
          open: false,
        },
      ],
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
          src: require('./s5/mo/img1.jpg'),
        },
        {
          src: require('./s5/mo/img2.jpg'),
        },
        {
          src: require('./s5/mo/img3.jpg'),
        },
      ],
    }
  },

  methods: {
    toggle(index) {
      if (this.toggleList[index].open) {
        this.toggleList[index].open = false
      } else {
        this.toggleList.forEach(item => (item.open = false))
        this.toggleList[index].open = !this.toggleList[index].open
      }
    },
  },
}
</script>
