<template>
  <div class="section5">
    <div class="bg fullscreen" v-if="!isMobile">
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
            <div class="play-group" @click="showVideoDialog(index)" >
              <icon class="play" :data="play"/>
              <div>觀看影片</div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="slide-btn">
          <div class="left-btn" slot="button-prev">
            <img v-lazy="require('./s5/next.png')" alt class="prev" />
          </div>
          <div class="right-btn" slot="button-next">
            <img v-lazy="require('./s5/next.png')" alt class="next" />
          </div>
        </div>
        <div class="link" @click="window.open('https://www.youtube.com/channel/UChwYvwlnfXs_PTJMUdyR2Eg/videos')">
          <span>看更多影片</span>
          <span class="line-arrow"></span>
        </div>
      </div>
      <video-bg
        autoplay="autoplay"
        :sources="[slideList[0].video, slideList[1].video, slideList[2].video, slideList[3].video, slideList[4].video, slideList[5].video, slideList[6].video]"
        :slideIndex="slideIndex"
      ></video-bg>
      <div class="line-bg" v-lazy:background-image="require('./s5/bg.png')"></div>
      <div class="progress-bar">
        <div
          class="bar"
          :style="`left: ${(100 / slideList.length) * slideIndex}%;width: ${100 / slideList.length}%`"
        ></div>
      </div>
    </div>
    <div class="bg fullscreen" v-if="isMobile">
      <img v-lazy="slideList[slideIndex].img" alt class="mobile-video-img" />
      <img v-lazy="require('./s5/img/icon.png')" alt class="play-icon" @click="showVideoDialog(slideIndex)" />
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
          </swiper-slide>
        </swiper>

        <div class="flex">
          <div class="slide-btn">
            <div class="left-btn" slot="button-prev">
              <img v-lazy="require('./s5/next.png')" alt class="prev" />
            </div>
            <div class="right-btn" slot="button-next">
              <img v-lazy="require('./s5/next.png')" alt class="next" />
            </div>
          </div>
          <div class="link" @click="$router.push('works?type=video')">
            <span>看更多影片</span>
            <span class="line-arrow"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="dialog" v-show="isDialogShow">
      <div class="dialog-content">
      <div class="close" @click="closeVideoDialog">
        <img v-lazy="require('./s5/close.png')" alt />
      </div>
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
      fill: #c00;
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
  min-height:calc(17.1vw + 540px);
}

.VideoBg {
  width: 100vw;
  height: 100% !important;
  video {
    // position: fixed;
    z-index: 0;
  }
}

.line-bg {
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('./s5/bg.png');
}

.content {
  width: calc(100vw * 567 / 1440);
  //height: calc(100vh * 450 / 796);
  height:480px;
 background: rgba(255, 255, 255, 0.8);
  right: calc(100vw * 112 / 1440);
  top: calc(100vw * 136 / 796);
  position: absolute;
  z-index: 2;
  transition: all .3s;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
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
  color: #666;
}

.subtitle {
  margin-top: 0px;
  margin-left: 57px;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: 1.28px;
  text-align: left;
  color: #585858;
}

.work-title {
  margin-top: 10px;
  margin-left: 57px;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 2px;
  text-align: left;
  color: #ec6d34;
}

.work-desc {
  margin:10px 0 0 57px;
  font-size: 15px;
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
    transition: all .3s;
    &:hover {
      background:rgb(237, 109, 52,0.3) 
    }

    img {
      transform: rotate(180deg);
      width: 30px;
    }
  }

  .right-btn {
    width: 60px;
    height: 60px;
    outline: none;
    transition: all .3s;
    &:hover {
      background:rgb(237, 109, 52,0.3) 
    }
    img {
      width: 30px;
    }
  }
}

.play-group {
  margin-left: 57px;
  margin-top: 17px;
  padding: 20px 0;
  font-size: 15px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s;

  &:hover {
    color: #c00;
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
  bottom: 0;
  right: 0;
  padding: 20px;
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
    width: 150vh;
    height: 90vh;
    max-width: calc(100vw - 200px);
    max-height: 51vw;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%) !important;
    background: #000;

    video {
      outline: none;
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
    right:-50px;
  }
}

.swiper-container {
   margin: -160px auto;
  padding: 165px 0 0 0;
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .content {
    width: 567px;
    height: 450px;
  }

  .play-group {
    margin-top: 10px;
    margin-left: 53px;
  }

  .work-title {
  }
}

@media screen and (max-width: 767px) {
  .bg.fullscreen {
    height: auto !important;
  }
  .VideoBg {
    height: auto;
    video {
      width: 100vw;
      height: auto;
    }
  }
  .mobile-video-img {
    width: 100vw;
  }

  .play-icon {
    width: 100vw;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    cursor: pointer;
    z-index: 4;
  }
  .content {
    position: relative;
    width: 100vw;
    height: auto;
    right: auto;
    top: 0;
    padding-bottom: 30px;
    background: rgba(255, 255, 255, 0.8);
    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }

    .title {
      font-size: 8vw;
      margin-top: 30px;
      margin-left: calc(100vw * (30 / 375));
    }

    .subtitle {
      margin-left: calc(100vw * (30 / 375));
    }

    .work-title {
      margin-left: calc(100vw * (30 / 375));
      letter-spacing:0;
    }

    .work-desc {
      margin-left: calc(100vw * (30 / 375));
      margin-right:6vw;
      line-height: 1.6;
      letter-spacing:0;
    }

    .slide-btn {
      margin-left: calc(100vw * (30 / 375));
      position: relative;
      margin-top: 20px;
    }

    .link {
      right: auto;
      bottom: auto;
      position: relative;
      margin-left: calc(100vw * (30 / 375));
      margin-top: 15px;
      &:hover {
        .line-arrow {
          width: 25px;
        }
      }
    }
  }
  .flex{
    justify-content:space-between;
  }
  .line-arrow{
    width: 25px;
  }
  .dialog {
    z-index: 100;
    .dialog-content {
      width: 100vw;
      height: auto;
      max-width:100vw;
      z-index: 100;
      background: transparent;
    }

    .close {
      width: 30px;
      height: 30px;
      cursor: pointer;
      img {
        width: 100%;
      }

      position: fixed;
      top: -45px;
      right: 20px;
      z-index: 100;
    }
  }
  .swiper-container {
    margin: -160px auto 0 auto;
    padding: 165px 0 0 0;
  }
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
      window,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerColumn: 1,
        allowSlidePrev: true,
        allowSlideNext: true,
        centeredSlides: true,
        threshold : 20,
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
          title: '新碩鼎和｜百年家族',
          name: '新聯陽實業股份有限公司',
          desc: '傳承百年的感動<br />延續家族的幸福',
          video: 'https://i.imgur.com/MqbyrWU.mp4',
          img: require('./s5/img/1.jpg'),
        },
        {
          title: '新板巨星｜不再搬家',
          name: '海沃創意行銷',
          desc:
            '小熊多多為什麼不開心？<br />他說：常常在搬家，搬來搬去都是別人的家‥',
          video: 'https://i.imgur.com/6elOHFf.mp4',
          img: require('./s5/img/2.jpg'),
        },
        {
          title: '幸福莊園｜寄人籬下',
          name: '海悅廣告股份有限公司',
          desc:
            '用一樣的錢換一個屬於自己的窩<br />大台北門牌，這次買得起，開除房東做自己!!',
          video: 'https://i.imgur.com/yJsBWRS.mp4',
          img: require('./s5/img/3.jpg'),
        },
        {
          title: '新板巨星｜汪星人',
          name: '海沃創意行銷',
          desc:
            '汪星人不說，但汪星人都懂。<br />金窩銀窩，都不如有自己溫馨的窩，來聽聽汪星人怎麼說',
          video: 'https://i.imgur.com/Kp5cQSY.mp4',
          img: require('./s5/img/4.jpg'),
        },
        {
          title: '新板巨星｜愛要及時',
          name: '海沃創意行銷',
          desc: '給爸媽最即時的溫暖',
          video: 'https://i.imgur.com/KKHTVmY.mp4',
          img: require('./s5/img/5.jpg'),
        },
        {
          title: '金城舞2｜百變型男',
          name: '甲山林機構',
          desc: '最熱銷的百變型男<br />都住最熱銷的金城舞2',
          video: 'https://i.imgur.com/XWg9fRo.mp4',
          img: require('./s5/img/6.jpg'),
        },
        {
          title: '新板巨星｜競選',
          name: '海沃創意行銷',
          desc:
            '我們有多久，不敢擁抱成家的夢想<br />其實夢想，不一定要到很遠的地方',
          video: 'https://i.imgur.com/O6jvijd.mp4',
          img: require('./s5/img/7.jpg'),
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
