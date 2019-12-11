<template>
  <div class="section2">
    <!-- img="./bg.jpg" -->
    <div class="bg">
      <img
        src="./s2/bg.jpg"
        alt
        class="bg-img"
        data-aos="fade"
        data-aos-delay="400"
        data-aos-duration="1500"
      />
      <!-- 區塊1 -->
      <div class="fullscreen">
        <div class="page-title">服務內容</div>
        <div class="pie-chart">
          <img src="./s2/pie.png" alt class="pie-bg" ref="pie" />
          <div class="overlay">
            <div class="web" @mouseenter="handlePie(0)"></div>
            <div class="video" @mouseenter="handlePie(1)"></div>
            <div class="social" @mouseenter="handlePie(2)"></div>
            <div class="digital" @mouseenter="handlePie(3)"></div>
            <div class="ad" @mouseenter="handlePie(4)"></div>
            <div class="media" @mouseenter="handlePie(5)"></div>
          </div>
        </div>
        <transition-group name="slide-fade" mode="out-in">
          <div
            class="content"
            v-for="(content, index) in pieList"
            v-show="index === contentIndex"
            :key="`content-${index}`"
          >
            <div class="title">{{content.title}}</div>
            <!-- <icon class="icon" :data="content.icon" /> -->
            <div class="subtitle" v-html="content.subtitle"></div>
            <div class="desc" v-html="content.desc"></div>
          </div>
        </transition-group>
        <transition-group name="slide-fade-delay">
          <icon
            class="icon-bg"
            :data="content.icon"
            v-for="(content, index) in pieList"
            v-show="index === contentIndex"
            :key="`content-icon-${index}`"
          />
        </transition-group>
      </div>
      <!-- 區塊2 -->
      <!-- <div class="container">
        <div class="page-title white">立炘數位</div>
        <div class="animate-block">
          <div class="animate-icon-bing">
            <img src="./s2/s2-2/icon/bing.png" alt />
          </div>
          <div class="animate-icon-fb">
            <img src="./s2/s2-2/icon/fb.png" alt />
          </div>
          <div class="animate-icon-ga">
            <img src="./s2/s2-2/icon/ga.png" alt />
          </div>
          <div class="animate-icon-gmb">
            <img src="./s2/s2-2/icon/gmb.png" alt />
          </div>
          <div class="animate-icon-gtm">
            <img src="./s2/s2-2/icon/gtm.png" alt />
          </div>
          <div class="animate-icon-ig">
            <img src="./s2/s2-2/icon/ig.png" alt />
          </div>
          <div class="animate-icon-line">
            <img src="./s2/s2-2/icon/line.png" alt />
          </div>
          <div class="animate-icon-stripe">
            <img src="./s2/s2-2/icon/stripe.png" alt />
          </div>
          <div class="animate-icon-yahoo">
            <img src="./s2/s2-2/icon/yahoo.png" alt />
          </div>
          <div class="animate-icon-yt">
            <img src="./s2/s2-2/icon/yt.png" alt />
          </div>
        </div>
        <carousel-3d
          ref="mycarousel"
          :width="isMobile ? window.innerWidth * (638 / 750) : window.innerWidth * (width / 1920)"
          :height="isMobile ?window.innerWidth * (468 / 750) : window.innerWidth * (height / 1920)"
          :perspective="0"
          :autoplay="true"
          :autoplayTimeout="4000"
          :disable3d="isMobile ? true : false"
          :border="0"
          :display="3"
          :space="isMobile ? 'auto' : 'auto'"
          data-aos="fade"
          data-aos-delay="200"
        >
          <slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="video-slide"
          >
            <img
            src="./s3/play_btn.png"
            alt
            :class="`play-btn absolute-c ${slide.isPlay ? 'hide' : ''}`"
            @click="handlePlay(index)"
            />
            <img :src="slide.img" :class="`video-img ${slide.isPlay ? 'hide' : ''}`" />
          </slide>
        </carousel-3d>
      -->
      </div>
      <div class="star1 comet"></div>
      <div class="star2 comet"></div>
      <div class="star3 comet"></div>
    </div>
  </div>
</template>
<style lang="scss">
/* 流星大小 */
.comet {
  border-radius: 50%;
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: rgba(200, 200, 255, 0.6);
  box-shadow: 0 0 40px 0 #0CF, 0 0 20px 0 #FFFFFF, inset 0 0 8px rgba(200, 255, 255, 0.5);
  top: 0;
  left: 90%;
  opacity: 0.3;
  transform: rotate(-45deg) translate(0, -50px);
  animation: comet 20s infinite;
  z-index: 1;
}

/* 尾巴 */
.comet:after {
  content: '';
  width: 20vw;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(150, 200, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 154, 255, 0.4);
  position: absolute;
  top: 0;
  left: 0;
}

.star1 {
  top: 0;
  left: 40%;
  animation-delay: 10s;
}

.star2 {
  top: 0;
  left: 80%;
  animation-delay: 5s;
}

@keyframes comet {
  0% {
    transform: rotate(-45deg) translateX(0);
    opacity: 0.3;
  }

  5% {
    opacity: 1;
  }

  10% {
    transform: rotate(-45deg) translateX(-50vw);
    opacity: 0;
  }

  100% {
    transform: rotate(-45deg) translateX(-50vw);
    opacity: 0;
  }
}



// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // margin-top: 50px !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  margin-top: 10px !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

@keyframes fadedelay {
  0% {
    top: 60%;
    opacity: 0;
  }

  50% {
    top: 55%;
    opacity: 0;
  }

  100% {
    top: 50% !important;
    opacity: 1 !important;
  }
}

.slide-fade-delay-enter-active {
  animation: fadedelay 0.8s ease 0s;
}
.slide-fade-delay-leave-active {
  // animation: fadedelay .1s ease 0s reverse;
}
</style>
<style lang="scss" scoped>
.section2 {
  position: relative;
}
.bg {
  background: #000;
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
}

.bg-img {
  width: 100vw;
  height:100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  z-index: 1;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.page-title {
  font-size: 45px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.11em;
  text-align: left;
  color: #ed6d34;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  top: 55%;
  z-index: 2;
  margin:-7.77em 0 0 0;

  &.white {
    color: #fff;
  }
}

svg {
  width: 62px;
  height: auto;
  left: 0;
  display: block;
  fill: #fff;
  z-index: 10;
  // position: absolute;
}

.pie-chart {
  width: 489px;
  height: 489px;
  border-radius: 999px;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 55%;
  transform: translateY(-50%);
  z-index: 2;

  .pie-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    transition: all 0.3s;
  }
  .overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 488px;
    height: 488px;
    border-radius: 999px;
    background: url('./s2/cirlce.png');

    > div {
      width: 100px;
      height: 100px;
      // background: #fff;
      &.web {
        position: absolute;
        left: auto;
        top: 57px;
        right: 130px;
      }

      &.video {
        position: absolute;
        left: auto;
        top: 216px;
        right: 30px;
      }

      &.social {
        position: absolute;
        left: auto;
        bottom: 46px;
        right: 110px;
      }

      &.digital {
        position: absolute;
        right: auto;
        bottom: 46px;
        left: 110px;
      }

      &.ad {
        position: absolute;
        right: auto;
        top: 216px;
        left: 30px;
      }

      &.media {
        position: absolute;
        left: auto;
        top: 57px;
        left: 130px;
      }

      &.house {
        position: absolute;
        width: 280px;
        height: 258px;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 112px;
        fill: #000;
      }
    }
  }
}

.content {
  width: 280px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 55%;
  transform: translateY(-50%);
  z-index: 3;

  .icon {
    margin: 0 auto;
    margin-bottom: 15px;
  }

  .title {
    font-size: 23px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.37;
    letter-spacing: 2.76px;
    text-align: center;
    color: #ed6d34;
  }

  .subtitle {
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: 1.5px;
    text-align: center;
    color: #ed6d34;
    margin-bottom: 5px;
  }

  .desc {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: 0.8px;
    text-align: center;
    color: #ffffff;
  }
}

.icon-bg {
  width: 350px;
  opacity: 0.1;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 55%;
  transform: translate(-350px, -100%);
}

.container {
  // background-image: url('./s2/s2-2/bg.jpg');
  // border-radius: 50% 50% 0 0;
  transition: all 1s;
  width: 100vw;
  height: 100vw * (831 / 1920);
  position: relative;
  z-index: 2;
  // background-size: cover;
  background-position: center;
}

.carousel-3d-container {
  position: absolute !important;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;

  .absolute-c {
    position: relative !important;
    top: 0;
    transform: none;
  }
}

.carousel-3d-slide {
  box-shadow: 0 0 7px 0 #999;
  border: none !important;
  border-radius: 25px !important;
  margin-top: 10px;
}

.animate-block {
  width: 100vw;
  height: 100%;
  position: relative;

  > div {
    position: absolute;
    z-index: 5;
  }

  img {
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    width: calc(100vw * (70 / 1980));
    height: calc(100vw * (70 / 1980));
  }
  .animate-icon-bing {
    right: calc(100vw * (482 / 1980));
    top: 0px;
  }

  @keyframes bing-float {
    from {
      transform: translate3D(0, 0, 0) scale(0.7) rotate(0deg);
    }
    65% {
      transform: translate3D(-8%, 16%, 0) scale(0.75) rotate(-10deg);
    }
    to {
      transform: translate3D(0, 0, 0) scale(0.7) rotate(0deg);
    }
  }

  .animate-icon-fb {
    left: calc(100vw * (188 / 1920));
    bottom: calc(100vw * (300 / 1920));
  }

  @keyframes fb-float {
    from {
      transform: translate3D(0, 0, 0) scale(0.65) rotate(0deg);
    }
    65% {
      transform: translate3D(-6%, 12%, 0) scale(0.7) rotate(10deg);
    }
    to {
      transform: translate3D(0, 0, 0) scale(0.65) rotate(0deg);
    }
  }

  .animate-icon-ga {
    left: calc(100vw * (384 / 1920));
    top: calc(100vw * (212 / 1920));
  }

  @keyframes ga-float {
    from {
      transform: translate3D(0, 0, 0) scale(0.8) rotate(0deg);
    }
    65% {
      transform: translate3D(8%, 16%, 0) scale(0.85) rotate(10deg);
    }
    to {
      transform: translate3D(0, 0, 0) scale(0.8) rotate(0deg);
    }
  }

  .animate-icon-gmb {
    right: calc(100vw * (272 / 1920));
    top: calc(100vw * (365 / 1920));

    img {
      box-shadow: none;
    }
  }

  @keyframes gmb-float {
    from {
      transform: translate3D(0, 0, 0) scale(0.75) rotate(0deg);
    }
    65% {
      transform: translate3D(-8%, 20%, 0) scale(0.85) rotate(-10deg);
    }
    to {
      transform: translate3D(0, 0, 0) scale(0.75) rotate(0deg);
    }
  }

  .animate-icon-gtm {
    right: calc(100vw * (960 / 1920));
    top: calc(100vw * (220 / 1920));
  }

  @keyframes gtm-float {
    from {
      transform: translate3D(0, 0, 0) scale(0.65) rotate(0deg);
    }
    65% {
      transform: translate3D(-6%, 12%, 0) scale(0.7) rotate(10deg);
    }
    to {
      transform: translate3D(0, 0, 0) scale(0.65) rotate(0deg);
    }
  }

  .animate-icon-ig {
    right: calc(100vw * (707 / 1920));
    top: calc(100vw * (124 / 1920));
  }

  @keyframes ig-float {
    from {
      transform: translate3D(0, 0, 0) scale(0.65) rotate(0deg);
    }
    65% {
      transform: translate3D(-8%, 20%, 0) scale(0.85) rotate(10deg);
    }
    to {
      transform: translate3D(0, 0, 0) scale(0.65) rotate(0deg);
    }
  }

  .animate-icon-line {
    left: calc(100vw * (496 / 1980));
    top: calc(100vw * (312 / 1920));
  }

  @keyframes line-float {
    from {
      transform: translate3D(0, 0, 0) scale(0.75) rotate(0deg);
    }
    65% {
      transform: translate3D(-8%, 20%, 0) scale(0.85) rotate(-10deg);
    }
    to {
      transform: translate3D(0, 0, 0) scale(0.75) rotate(0deg);
    }
  }

  .animate-icon-stripe {
    left: calc(100vw * (415 / 1980));
    top: calc(100vw * (25 / 1920));
  }

  @keyframes stripe-float {
    from {
      transform: translate3D(0, 0, 0) scale(0.75) rotate(0deg);
    }
    65% {
      transform: translate3D(-8%, 20%, 0) scale(0.85) rotate(-10deg);
    }
    to {
      transform: translate3D(0, 0, 0) scale(0.75) rotate(0deg);
    }
  }

  .animate-icon-yahoo {
    right: calc(100vw * (352 / 1920));
    top: calc(100vw * (160 / 1920));
  }

  @keyframes yahoo-float {
    from {
      transform: translate3D(0, 0, 0) scale(0.85) rotate(0deg);
    }
    65% {
      transform: translate3D(-6%, 12%, 0) scale(0.95) rotate(10deg);
    }
    to {
      transform: translate3D(0, 0, 0) scale(0.85) rotate(0deg);
    }
  }

  .animate-icon-yt {
    left: calc(100vw * (700 / 1920));
    top: calc(100vw * (22 / 1920));
  }

  @keyframes yt-float {
    from {
      transform: translate3D(0, 0, 0) scale(0.85) rotate(0deg);
    }
    65% {
      transform: translate3D(-8%, 20%, 0) scale(0.95) rotate(-10deg);
    }
    to {
      transform: translate3D(0, 0, 0) scale(0.85) rotate(0deg);
    }
  }

  .animate-icon-fb {
    animation: fb-float 3s 0s infinite ease-out;
    transform: scale(0.65);
  }

  .animate-icon-ga {
    animation: ga-float 3s 1s infinite ease-in-out;
    transform: scale(0.8);
  }
  .animate-icon-stripe {
    animation: stripe-float 3s 1s infinite ease-in-out;
    transform: scale(0.75);
  }
  .animate-icon-line {
    animation: line-float 3s 1s infinite ease-in-out;
    transform: scale(0.75);
  }

  .animate-icon-gtm {
    animation: gtm-float 4s 1.5s infinite ease-out;
    transform: scale(0.65);
  }
  .animate-icon-yt {
    animation: yt-float 3s 1.5s infinite ease-in-out;
    transform: scale(0.85);
  }
  .animate-icon-ig {
    animation: ig-float 2.5s 1.5s infinite ease-in-out;
    transform: scale(0.65);
  }

  .animate-icon-yahoo {
    animation: yahoo-float 3s 1.5s infinite ease-in-out;
    transform: scale(0.85);
  }
  .animate-icon-bing {
    animation: bing-float 3s 1.5s infinite ease-in-out;
  }
  .animate-icon-gmb {
    animation: gmb-float 2.6s 1.5s infinite ease-in-out;
    transform: scale(0.75);
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    min-height: 880px;
  }

  .pie-chart {
    position: absolute;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg-img {
    min-height: 100vh;
  }
  .icon-bg {
    width: 289px;
    height: auto;
  }

  .page-title {
    top: 6%;
  }
}

@media screen and (max-width: 767px) {
  .bg-img {
    min-height: 100vh;
  }
  .page-title {
    font-size: 32px;
  }

  .pie-chart {
    width: 90vw;
    height: 90vw;
    .overlay {
      width: 90vw;
      height: 90vw;
      background-size: cover;
    }
  }

  .icon-bg {
    width: 166px;
    height: 166px;
    transform: translate(-100px, 100px);
  }

  .container {
    width: 100vw;
    border-radius: 0;
    height: calc(100vw * (822 / 750));
    background-image: none;
  }

  .mobile-bg {
    width: 100vw;
    transform: skewY(20deg);
    position: absolute;
    top: 50px;
    left: 0;
  }

  .animate-block {
    z-index: 2;

    img {
      box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      width: calc(100vw * (70 / 750));
      height: calc(100vw * (70 / 750));
    }

    .animate-icon-bing {
      right: calc(100vw * (375 / 750));
      bottom: calc(100vw * (1300 / 1300));
    }
    .animate-icon-fb {
      right: calc(100vw * (200 / 750));
      bottom: calc(100vw * (800 / 1300));
    }
    .animate-icon-ga {
      right: calc(100vw * (384 / 750));
      bottom: calc(100vw * (700 / 1300));
    }
    .animate-icon-gmb {
      right: calc(100vw * (50 / 750));
      bottom: calc(100vw * (680 / 1300));
    }

    .animate-icon-gtm {
      right: calc(100vw * (222 / 750));
      bottom: calc(100vw * (650 / 1300));
    }
    .animate-icon-ig {
      right: calc(100vw * (150 / 750));
      bottom: calc(100vw * (900 / 1300));
    }
    .animate-icon-line {
      left: calc(100vw * (150 / 750));
      bottom: calc(100vw * (350 / 1300));
      z-index: 12;
    }
    .animate-icon-stripe {
      left: calc(100vw * (100 / 750));
      bottom: calc(100vw * (750 / 1300));
    }
    .animate-icon-yahoo {
      right: calc(100vw * (352 / 750));
      top: calc(100vw * (160 / 1300));
    }
    .animate-icon-yt {
      left: auto;
      right: calc(100vw * (30 / 750));
      top: calc(100vw * (22 / 1300));
    }
  }

  .carousel-3d-container {
    z-index: 3;
  }

  .carousel-3d-slide {
    margin-top: 0;
    top: 50px !important;
    &.current {
      top: 10px !important;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import ad from '@/assets/svg/icon-ad.svg'
import house from '@/assets/svg/icon-centerHouse.svg'
import digital from '@/assets/svg/icon-digital.svg'
import media from '@/assets/svg/icon-media.svg'
import social from '@/assets/svg/icon-social.svg'
import video from '@/assets/svg/icon-video.svg'
import web from '@/assets/svg/icon-web.svg'

import { Carousel3d, Slide } from 'vue-carousel-3d'
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

  components: {
    Carousel3d,
    Slide,
  },

  mixins: [slider],

  data() {
    return {
      isMobile,
      ad,
      house,
      digital,
      media,
      social,
      video,
      web,

      pieIndex: 0,
      pieList: [
        {
          title: '內容行銷',
          icon: web,
          subtitle: '網頁建置',
          desc: '客製網站設計<br />形象網頁設計',
        },
        {
          title: '內容行銷',
          icon: video,
          subtitle: '影片製作',
          desc: '高品質創意內容<br />超吸晴行銷影片',
        },
        {
          title: '內容行銷',
          icon: social,
          subtitle: '粉專經營',
          desc: '互動貼文內容<br />專業粉專小編',
        },
        {
          title: '數位操作',
          icon: digital,
          subtitle: '數據分析',
          desc: '即時掌握數據<br />優化廣告策略',
        },
        {
          title: '數位操作',
          icon: ad,
          subtitle: '廣告投放',
          desc: 'GOOGLE<br />YAHOO<br />FACEBOOK',
        },
        {
          title: '媒體購買',
          icon: media,
          subtitle: '傳統媒體<br />數位媒體',
          desc: '',
        },
      ],

      currentIndex: 0,
      width: 813,
      height: 597,
      window: window,
      slideList: [
        {
          img: require('./s2/s2-2/1.png'),
        },
        {
          img: require('./s2/s2-2/2.png'),
        },
        {
          img: require('./s2/s2-2/3.png'),
        },
      ],
    }
  },
  methods: {
    handlePie(index) {
      let currentIndex = this.pieIndex % 6
      let handleIndex
      handleIndex = index - currentIndex
      this.pieIndex = this.pieIndex + handleIndex
      this.rotatePie()
    },

    rotatePie() {
      this.$refs.pie.style.transform = `rotate(${this.pieIndex * 60}deg)`
    },
  },

  watch: {
    pieIndex() {
      this.rotatePie()
    },
  },
  computed: {
    contentIndex() {
      return this.pieIndex % 6
    },
  },

/*
  mounted() {
    const wH = window.innerHeight
    const wW = window.innerWidth

    const generateStars = n => {
      for (let i = 0; i < n; i++) {
        const div = document.createElement('div')
        div.className =
          i % 20 === 0
            ? 'star star--big'
            : i % 50 === 0
            ? 'star star--medium'
            : 'star'
        // random everywhere!
        //2000是數度
        div.setAttribute(
          'style',
          `top:${Math.round(Math.random() * wH)}px;left:${Math.round(
            Math.random() * wW,
          )}px;animation-duration:${Math.round(Math.random() * 2000) +
            2000}ms;animation-delay:${Math.round(Math.random() * 2000)}ms;`,
        )
        document.querySelector('.bg').appendChild(div)
      }
    }
    // 數量 
    generateStars(100)

    setInterval(() => {
      this.pieIndex++
    }, 6000)
  },
  */
}
</script>
