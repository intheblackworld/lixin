<template>
  <div class="section5">
    <!-- img="./bg.jpg" -->
    <div class="bg fullscreen">
      <div class="content">
        <div class="title">我們的作品</div>
        <swiper
          :options="swiperOption"
          swiper-no-swiping
          class="mac-container"
          ref="mySwiper"
          @slideChangeTransitionEnd="slideChanged"
        >
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.src_mac"
            class="item"
          >
            <div class="subtitle">{{slide.name}}</div>
            <div class="work-title">{{slide.title}}</div>
            <div class="work-desc" v-html="slide.desc"></div>
            <div class="play-group">
              <icon class="play" :data="play" @click="showVideoDialog(index)" />
              <div>觀看影片</div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="slide-btn">
          <div class="left-btn" slot="button-prev">
            <img src="./s5/next.png" alt class="prev" />
          </div>
          <div class="right-btn" slot="button-next">
            <img src="./s5/next.png" alt class="next" />
          </div>
        </div>
        <div class="link">
          <span>看更多影片</span>
          <span class="line-arrow"></span>
        </div>
      </div>
      <video-bg
        autoplay="autoplay"
        :sources="[slideList[0].video, slideList[1].video, slideList[2].video, slideList[3].video, slideList[4].video, slideList[5].video, slideList[6].video]"
        :slideIndex="slideIndex"
      ></video-bg>

      <div class="progress-bar">
        <div
          class="bar"
          :style="`left: ${(100 / slideList.length) * slideIndex}%;width: ${100 / slideList.length}%`"
        ></div>
      </div>
    </div>
    <div class="dialog" v-show="isDialogShow">
      <div class="close" @click="closeVideoDialog">
        <img src="./s5/close.png" alt />
      </div>
      <div class="dialog-content">
        <video playsinline loop controls :muted="true" ref="dialogVideo">
          <source :src="slideList[slideIndex].video" />
        </video>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.play-group {
  cursor: pointer;
  .st0 {
    fill: #ed6d34;
    transition: all 0.3s;
  }

  .st1 {
    fill: #fff;
  }

  .st2 {
    display: none;
  }

  .st3 {
    display: inline;
  }

  &:hover {
    .st0 {
      fill: #000;
    }
  }
}
</style>
<style lang="scss" scoped>
.bg {
  background: #fff;
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.VideoBg {
  width: 100vw;
  height: 100% !important;
  video {
    // position: fixed;
    z-index: 0;
  }
}

.content {
  width: calc(100vw * 567 / 1440);
  height: calc(100vh * 450 / 796);
  background: rgba(255, 255, 255, 0.9);
  right: calc(100vw * 112 / 1440);
  top: calc(100vw * 136 / 796);
  position: absolute;
  z-index: 2;
}

.title {
  margin-top: 70px;
  margin-left: 55px;
  font-size: 45.5px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 4.55px;
  text-align: left;
  color: #ed6d34;
}

.subtitle {
  margin-top: -10px;
  margin-left: 57px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: 1.28px;
  text-align: left;
  color: #585858;
}

.work-title {
  margin-top: 50px;
  margin-left: 57px;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 2px;
  text-align: left;
  color: #000000;
}

.work-desc {
  margin-left: 57px;
  font-size: 13.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.11;
  letter-spacing: 1.08px;
  text-align: left;
  color: #585858;
}

.slide-btn {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 120px;
  height: 60px;
  border: 1px solid #000;
  margin-left: -1px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left-btn {
    width: 60px;
    height: 60px;
    border-right: 1px solid #000;
    outline: none;

    img {
      transform: rotate(180deg);
      width: 30px;
    }
  }

  .right-btn {
    width: 60px;
    height: 60px;
    outline: none;
    img {
      width: 30px;
    }
  }
}

.play-group {
  margin-left: 57px;
  margin-top: 37px;
  font-size: 14px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s;

  &:hover {
    color: #ed6d34;
    font-weight: bold;
  }
}

.play {
  width: 27px;
  margin-right: 10px;
}

.link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  color: #000;
  transition: all 0.5s;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;

  &:hover {
    color: #ed6d34;
    .line-arrow {
      width: 80px;
      background: #ed6d34;

      &:after {
        background: #ed6d34;
      }
    }
  }
}

.line-arrow {
  position: relative;
  width: 45px;
  height: 1px;
  background: #000;
  margin-left: 10px;
  transition: all 0.3s;
  &:after {
    content: '';
    position: absolute;
    width: 5px;
    height: 1px;
    background: #000;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    right: 0;
    top: -2px;
  }
}

.progress-bar {
  width: 290px;
  bottom: 5%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);

  .bar {
    height: 3px;
    background: rgb(237, 109, 52);
    transition: all 0.3s;
    position: relative;
    top: 1px;
    border-radius: 1px;
  }
}

.dialog {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 90;

  .dialog-content {
    width: 90vw;
    height: 90vh;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%) !important;
    background: #fff;

    video {
      width: 100%;
      height: 100%;
    }
  }

  .close {
    width: 30px;
    height: 30px;
    cursor: pointer;
    img {
      width: 100%;
    }

    position: fixed;
    top: 30px;
    right: 30px;
  }
}

.swiper-container {
  padding-top: 5px;
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
import VideoBg from '@/components/VideoBg.vue'
import play from '@/assets/svg/icon-play.svg'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section5',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
    VideoBg,
  },

  data() {
    return {
      play,
      isMobile,
      isDialogShow: false,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerColumn: 1,
        allowSlidePrev: true,
        allowSlideNext: true,
        centeredSlides: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        loop: true,
        navigation: {
          nextEl: '.right-btn',
          prevEl: '.left-btn',
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
      slideList: [
        {
          title: '房地產｜新碩鼎和｜百年家族',
          name: '新聯陽實業股份有限公司',
          desc: '傳承百年的感動<br />延續家族的幸福',
          video: require('./s5/video/1新碩鼎和.mp4'),
        },
        {
          title: '房地產｜新板巨星｜不再搬家',
          name: '海沃創意行銷',
          desc:
            '小熊多多為什麼不開心？<br />他說：常常在搬家，搬來搬去都是別人的家‥',
          video: require('./s5/video/2不再搬家.mp4'),
        },
        {
          title: '房地產｜幸福莊園｜寄人籬下',
          name: '海悅廣告股份有限公司',
          desc:
            '用一樣的錢換一個屬於自己的窩<br />大台北門牌，這次買得起<br />開除房東做自己!!',
          video: require('./s5/video/3幸福莊園-寄人籬下0716.mp4'),
        },
        {
          title: '房地產｜新板巨星｜汪星人',
          name: '海沃創意行銷',
          desc:
            '汪星人不說，但汪星人都懂。<br />金窩銀窩，都不如有自己溫馨的窩，來聽聽汪星人怎麼說',
          video: require('./s5/video/4狗.mp4'),
        },
        {
          title: '房地產｜金城舞2｜百變型男',
          name: '甲山林機構',
          desc: '給爸媽最即時的溫暖',
          video: require('./s5/video/6愛要即時.mp4'),
        },
        {
          title: '房地產｜新板巨星｜愛要及時',
          name: '海沃創意行銷',
          desc: '最熱銷的百變型男<br />都住最熱銷的金城舞2',
          video: require('./s5/video/5金城舞2.mp4'),
        },
        {
          title: '房地產｜新板巨星｜競選',
          name: '海沃創意行銷',
          desc:
            '我們有多久，不敢擁抱成家的夢想<br />其實夢想，不一定要到很遠的地方<br />支持努力圓夢的你',
          video: require('./s5/video/7林板新.mp4'),
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

    showVideoDialog(index) {
      this.$refs.dialogVideo.src = this.slideList[this.slideIndex].video
      this.$refs.dialogVideo.play()
      this.isDialogShow = true
    },

    closeVideoDialog(index) {
      this.$refs.dialogVideo.src = this.slideList[this.slideIndex].video
      this.$refs.dialogVideo.pause()
      this.isDialogShow = false
    },
  },
}
</script>