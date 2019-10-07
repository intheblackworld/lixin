<template>
  <div class="section6">
    <div class="bg">
      <div class="container">
        <div class="container-title">
          <div
            class="title"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >奢華精裝 精品居住</div>
          <hr data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" />
          <div
            class="desc"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >Sense Design</div>
        </div>
        <div class="slide relative" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div v-if="!isMobile">
            <div class="slide-title">英國爵士風格 經典品味</div>
            <div class="slide-desc">承襲英國貴族風格，『蘭桂‧坊』大氣開展80米的建築面寬，加上歐式建築美學細膩雕琢，優雅的紳士品味，無論近觀或遠望，都是讚嘆的焦點</div>
          </div>
          <img
            v-for="(slide, index) in slideList1"
            :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`"
            :key="`s6-slide-${index}`"
            :src="slide"
            alt
          />
          <div class="btn-group flex-jc flex-ac flex-mobile-jb">
            <div
              class="dot"
              v-for="(slide, index) in slideList1"
              :key="`s6-dot-${index}`"
              @click="slideIndex1 = index"
            ></div>
            <img @click="decMultiIndex(1)" src="./small_left_btn.png" alt class="arrow-btn" />
            <img @click="addMultiIndex(1)" src="./small_right_btn.png" alt class="arrow-btn" />
          </div>
          <div class="slide-footer">建築外觀3D示意圖(實際依完工現況為準)</div>
        </div>
        <div v-if="isMobile" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div class="slide-title">英國爵士風格 經典品味</div>
          <div class="slide-desc">承襲英國貴族風格，『蘭桂‧坊』大氣開展80米的建築面寬，加上歐式建築美學細膩雕琢，優雅的紳士品味，無論近觀或遠望，都是讚嘆的焦點</div>
        </div>

        <div class="slide relative" style="margin-bottom: 50px;" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div v-if="!isMobile">
            <div class="slide-title">新東方時尚 雅緻盛宴</div>
            <div
              class="slide-desc"
            >宛如頂級上海外灘超星級飯店門廳，優雅的窗櫺融入現代簡約的細膩雅緻，從迎賓門廳、LOUNGE交誼、多功能健身房等，一場極致的中式優雅品味，在回家的每一刻都是享受</div>
          </div>
          <img
            v-for="(slide, index) in slideList2"
            :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`"
            :key="`s6-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="btn-group flex-jc flex-ac flex-mobile-jb">
            <div
              class="dot"
              v-for="(slide, index) in slideList2"
              :key="`s6-dot-${index}`"
              @click="slideIndex2 = index"
            ></div>
            <img @click="decMultiIndex(2)" src="./small_left_btn.png" alt class="arrow-btn" />
            <img @click="addMultiIndex(2)" src="./small_right_btn.png" alt class="arrow-btn" />
          </div>
          <div class="slide-footer">{{slideList2[slideIndex2].title}}</div>
        </div>
        <a class="slide relative" style="display: block;" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500" href="https://720yun.com/t/a9vknb2q7dh?scene_id=32516944" target="_blank">
          <img
            :class="`slide-img active`"
            src="./s6_720.png"
            alt
          />
          <div class="slide-footer">點擊前往720環景圖</div>
        </a>
        <div v-if="isMobile" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div class="slide-title">新東方時尚 雅緻盛宴</div>
          <div
            class="slide-desc"
          >宛如頂級上海外灘超星級飯店門廳，優雅的窗櫺融入現代簡約的細膩雅緻，從迎賓門廳、LOUNGE交誼、多功能健身房等，一場極致的中式優雅品味，在回家的每一刻都是享受</div>
        </div>

        <div class="slide relative" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div v-if="!isMobile">
            <div class="slide-title">國際級精裝修 頂級享受</div>
            <div class="slide-desc">林口首座精裝修飯店風潮，18~22坪完美格局，絕無僅有的品味時尚，拎包入住的便利生活，無論自住或出租，家都是飯店人生得完美展現</div>
          </div>
          <div class="slide-video">
            <video-bg
              autoplay="autoplay"
              :sources="[require('./s6_video3.mp4')]"
              img="./s6_img3-1.jpg"
            ></video-bg>
          </div>
          <div class="slide-footer">樣品屋3D示意圖(實際依完工現況為準)</div>
        </div>
        <div v-if="isMobile" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div class="slide-title">國際級精裝修 頂級享受</div>
          <div class="slide-desc">林口首座精裝修飯店風潮，18~22坪完美格局，絕無僅有的品味時尚，拎包入住的便利生活，無論自住或出租，家都是飯店人生得完美展現</div>
        </div>

        <div class="slide relative" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div v-if="!isMobile">
            <div class="slide-title">全套代租代管 尊榮禮遇</div>
            <div class="slide-desc">『蘭桂‧坊』以頂級生活服務，禮遇每位尊客，從飯店門廳服務、到生活服務與管理服務一應俱全，專屬為您打造您的生活禮遇</div>
          </div>
          <img
            v-for="(slide, index) in slideList4"
            :class="`slide-img ${slideIndex4 === index ? 'active' : ''}`"
            :key="`s6-slide-${index}`"
            :src="slide"
            alt
          />
          <!-- <div class="btn-group flex-jc flex-ac flex-mobile-jb">
            <div
              class="dot"
              v-for="(slide, index) in slideList4"
              :key="`s6-dot-${index}`"
              @click="slideIndex4 = index"
            ></div>
            <img @click="addMultiIndex(4)" src="./small_left_btn.png" alt class="arrow-btn" />
            <img @click="decMultiIndex(4)" src="./small_right_btn.png" alt class="arrow-btn" />
          </div>-->
          <div class="slide-footer">飯店式服務示意圖</div>
        </div>
        <div v-if="isMobile" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div class="slide-title">全套代租代管 尊榮禮遇</div>
          <div class="slide-desc">『蘭桂‧坊』以頂級生活服務，禮遇每位尊客，從飯店門廳服務、到生活服務與管理服務一應俱全，專屬為您打造您的生活禮遇</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-image: url('./s6_bg.png');
  background-position: 100% 0%;
  background-attachment: fixed;
  background-size: auto;
  position: relative;
  padding-top: 25px;
}

.container {
  width: 1380px;
  margin: 0 auto;
  padding-top: 70px;
  padding-bottom: 40px;
  background-color: rgba(30, 31, 31, 0.88);
}
.container-title {
  .title {
    width: 298px;
    height: 48px;
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  hr {
    width: 304.7px;
    height: 0;
    border: solid 1px #c08d4e;
    margin: 0 auto;
    margin-bottom: 5px;
  }

  .desc {
    width: 128px;
    height: 20px;
    font-family: TimesNewRomanPSMT;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #c08d4e;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}

.slide {
  width: 850px;
  margin: 0 auto;
  margin-bottom: 10vw;
  z-index: 1;

  .dot {
    background-color: #c08d4e;
  }

  .slide-img {
    margin: 0 auto;
    width: 100%;
    max-height: 70vh;
    object-fit: cover;
    left: 0;
    right: 0;
  }

  .VideoBg {
    height: 477px !important;
  }

  .btn-group {
    bottom: 50px;
  }

  .slide-footer {
    position: absolute;
    bottom: -27px;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a1311;
    background-color: #c08d4e;
  }
}

.slide-title {
  font-size: 26px;
  color: #c08d4e;
  margin-bottom: 15px;
}

.slide-desc {
  font-size: 13px;
  line-height: 1.5;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
}

.arrow-btn {
  display: none;
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .container {
    width: 1024px;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .container {
    width: 1024px;
  }
  .fullscreen {
    height: auto;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 900px;
  }
  .slide {
    .slide-img {
      width: 100%;
      max-height: auto;
    }
  }
}

@media screen and (max-width: 767px) {
  .container {
    padding-top: 50px;
    width: 92vw;
  }

  .container-title {
    .title {
      width: 184px;
      height: 21px;
      font-size: 22px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }

    hr {
      width: 201px;
    }

    .desc {
      width: 110px;
      height: 13px;
      font-family: TimesNewRomanPSMT;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #c08d4e;
    }
  }
  .dot {
    display: none;
  }

  .arrow-btn {
    display: block;
  }

  .slide {
    width: 100%;
    .btn-group {
      width: 92%;
      bottom: 40%;
    }

    .VideoBg {
      width: 87.4vw !important;
      margin: 0 auto;
      height: calc(87.4vw * 240 / 320) !important;
    }

    .slide-img {
      width: 95%;
      max-height: auto;
    }

    .slide-footer {
      width: 95%;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
  }

  .slide-title {
    padding-top: 15px;
    margin-bottom: 10px;
  }

  .slide-desc {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
    text-align: justify;
  }
}
</style>

<script>
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
import VideoBg from '@/components/VideoBg.vue'

export default {
  name: 'section6',
  mixins: [slider],

  components: {
    VideoBg,
  },

  data() {
    return {
      slideIndex1: 0,
      slideIndex2: 0,
      slideIndex4: 0,
      slideList1: [require('./s6_img1-1.jpg'), require('./s6_img1-2.jpg')],
      slideList2: [
        {
          src: require('./s6_img2-1.jpg'),
          title: '迎賓大廳3D示意圖(實際依完工現況為準)',
        },
        {
          src: require('./s6_img2-2.jpg'),
          title: '迎賓廊道3D示意圖(實際依完工現況為準)',
        },
        {
          src: require('./s6_img2-3.jpg'),
          title: '交誼廳3D示意圖(實際依完工現況為準)',
        },
        {
          src: require('./s6_img2-4.jpg'),
          title: '洗衣中心3D示意圖(實際依完工現況為準)',
        },
        {
          src: require('./s6_img2-5.jpg'),
          title: '健身房3D示意圖(實際依完工現況為準)',
        },
        {
          src: require('./s6_img2-6.jpg'),
          title: '信箱區3D示意圖(實際依完工現況為準)',
        },
      ],
      slideList4: [require('./s6_img4-1.jpg')],
      isMobile,
    }
  },

  methods: {},
}
</script>
