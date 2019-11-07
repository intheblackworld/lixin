<template>
  <div class="section5">
    <!-- img="./bg.jpg" -->
    <div class="bg fullscreen">
      <div class="content">
        <div class="title">我們的作品</div>
        <div class="subtitle">{{slideList[slideIndex].name}}</div>
        <div class="work-title">{{slideList[slideIndex].title}}</div>
        <div class="work-desc" v-html="slideList[slideIndex].desc"></div>
      </div>
      <video-bg autoplay="autoplay" :sources="[require('./s5/video/1.新碩鼎和.mp4')]"></video-bg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  // background: url('./s1/bg.jpg');
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
      isMobile,
      slideList: [
        {
          title: '房地產｜新碩鼎和｜百年家族',
          name: '新聯陽實業股份有限公司',
          desc: '傳承百年的感動<br />延續家族的幸福',
        },
        {
          title: '房地產｜新板巨星｜不再搬家',
          name: '海沃創意行銷',
          desc:
            '小熊多多為什麼不開心？<br />他說：常常在搬家，搬來搬去都是別人的家‥',
        },
        {
          title: '房地產｜幸福莊園｜寄人籬下',
          name: '海悅廣告股份有限公司',
          desc:
            '用一樣的錢換一個屬於自己的窩<br />大台北門牌，這次買得起<br />開除房東做自己!!',
        },
        {
          title: '房地產｜新板巨星｜汪星人',
          name: '海沃創意行銷',
          desc:
            '汪星人不說，但汪星人都懂。<br />金窩銀窩，都不如有自己溫馨的窩，來聽聽汪星人怎麼說',
        },
        {
          title: '房地產｜金城舞2｜百變型男',
          name: '甲山林機構',
          desc: '給爸媽最即時的溫暖',
        },
        {
          title: '房地產｜新板巨星｜愛要及時',
          name: '海沃創意行銷',
          desc: '最熱銷的百變型男<br />都住最熱銷的金城舞2',
        },
        {
          title: '房地產｜新板巨星｜競選',
          name: '海沃創意行銷',
          desc:
            '我們有多久，不敢擁抱成家的夢想<br />其實夢想，不一定要到很遠的地方<br />支持努力圓夢的你',
        },
      ],
    }
  },

  methods: {},
}
</script>