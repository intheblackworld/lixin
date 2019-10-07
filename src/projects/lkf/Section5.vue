<template>
  <div class="section5">
    <div class="fullscreen bg">
      <div class="container">
        <div class="title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">超強生機 娛樂休閒</div>
        <hr data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" />
        <div class="desc" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">Highly Fashionable</div>
        <div class="slide relative" data-aos="fade" data-aos-delay="400" data-aos-duration="1500">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s3-slide-${index}`"
            :src="slide.src"
            alt
          />

          <div class="slide-content" v-if="!isMobile">
            <div class="name" data-aos="fade" data-aos-delay="900" data-aos-duration="1500">{{slideList[slideIndex].name}}</div>
            <div class="white" data-aos="fade-down" data-aos-delay="800" data-aos-duration="1500"></div>
            <div class="text" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1500">
              <div class="title">{{slideList[slideIndex].title}}</div>
              <div class="desc">{{slideList[slideIndex].desc}}</div>
            </div>
          </div>
          <div class="btn-group flex-jc flex-ac flex-mobile-jb" data-aos="fade" data-aos-delay="600" data-aos-duration="1500">
            <div
              class="dot"
              v-for="(slide, index) in slideList"
              :key="`s3-dot-${index}`"
              @click="slideIndex = index"
            ></div>
            <img @click="decIndex" src="./small_left_btn.png" alt class="arrow-btn" />
            <img @click="addIndex" src="./small_right_btn.png" alt class="arrow-btn" />
          </div>
        </div>
        <div class="slide-content-m" v-if="isMobile">
          <div class="name" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">{{slideList[slideIndex].name}}</div>
          <div class="content" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
            <div class="title">{{slideList[slideIndex].title}}</div>
            <div class="desc">{{slideList[slideIndex].desc}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s5_bg.png');
  background-position: 100% 0%;
  background-size: cover;
  position: relative;
}
.container {
  width: 1210px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 40px;
}

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
  color: #1a1311;
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
  width: 142px;
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

.slide {
  width: 100%;
  z-index: 1;
  display: flex;
  margin-top: 100px;

  .slide-img {
    width: 880px;
    z-index: 1;
  }

  .slide-content {
    width: 880px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
  }

  .btn-group {
    bottom: 30px;
    width: 880px;
    margin: 0;
  }

  .arrow-btn {
    display: none;
  }

  .name {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: -30px;
    color: #1a1311;
    font-size: 14px;
  }
  .white {
    width: 800px;
    height: 435px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 140px;
    margin-left: 140px;
  }

  .text {
    width: 398.5px;
    height: 434px;
    background-color: #c08d4e;
    position: absolute;
    right: 0;
    right: -329px;
    top: -75px;
    padding-left: 130px;
    padding-top: 110px;

    .title {
      width: 211px;
      height: auto;
      font-size: 26px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.71;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
      margin-left: 0;
      margin-bottom: 0;
    }

    .desc {
      width: 211px;
      height: 128px;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.71;
      letter-spacing: normal;
      text-align: justify;
      color: #ffffff;
      margin-left: 0;
      margin-bottom: 0;
    }
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .container {
    width: 1024px;
  }

  .slide {
    margin-top: 50px;
    transform: scale(0.85);
    transform-origin: left;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .container {
    width: 1024px;
  }
  .fullscreen {
    height: auto !important;
  }
  .slide {
    margin-top: 50px;
    transform: scale(0.85);
    transform-origin: left;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .section5 {
    margin-top: -1px;
  }
  .container {
    width: 900px;
  }

  .slide {
    margin-top: 0px;
    transform: scale(0.74);
    transform-origin: left;
  }
}

@media screen and (max-width: 767px) {
  .section5 {
    margin-top: -1px;
  }
  .container {
    width: 100vw;
    padding-bottom: 20px;
  }

  .fullscreen {
    height: auto !important;
  }

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
    color: #231f20;
  }

  hr {
    width: 201px;
  }

  .desc {
    width: 120px;
    height: 13px;
    font-family: TimesNewRomanPSMT;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #c49a6c;
  }

  .dot {
    display: none;
  }

  .slide {
    width: 100vw;
    margin-top: 20px;
    align-items: center;
    .slide-img {
      width: 100%;
      height: auto;
    }
    .btn-group {
      width: 90%;
      margin: 0 auto;
      bottom: 40%;
      z-index: 2;
    }

    .arrow-btn {
      display: block;
    }
  }

  .slide-content-m {
    position: relative;
    z-index: 4;
    margin-top: -40px;
    
    .name {
      color: #fff;
      margin-bottom: 10px;
      text-shadow: 0 0 2px #333;
    }

    .content {
      background-color: #c8a063;
      color: #fff;
      width: 90vw;
      margin: 0 auto;
      padding-top: 20px;
    }

    .title {
      width: 210px;
      height: auto;
      font-size: 26px;
      color: #fff;
      margin-bottom: 5px;
    }

    .desc {
      width: 210px;
      height: auto;
      font-size: 14px;
      color: #fff;
      text-align: justify;
      padding-bottom: 15px;
    }
  }
}
</style>

<script>
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
export default {
  name: 'section5',
  mixins: [slider],

  data() {
    return {
      slideList: [
        {
          src: require('./s5_img1-1.jpg'),
          name: '三井Outlet Park',
          title: '三大購物商圈核心',
          desc:
            '正對A9環球購物中心，三井Outlet僅需5分鐘，還有昕境廣場，3購物中心匯聚，超強生活機能，食衣住行一次滿足。',
        },
        {
          src: require('./s5_img1-2.jpg'),
          name: '昕境廣場',
          title: '三大購物商圈核心',
          desc:
            '正對A9環球購物中心，三井Outlet僅需5分鐘，還有昕境廣場，3購物中心匯聚，超強生活機能，食衣住行一次滿足。',
        },
        {
          src: require('./s5_img1-3.jpg'),
          name: '環球購物中心',
          title: '三大購物商圈核心',
          desc:
            '正對A9環球購物中心，三井Outlet僅需5分鐘，還有昕境廣場，3購物中心匯聚，超強生活機能，食衣住行一次滿足。',
        },
        {
          src: require('./s5_img2-1.jpg'),
          name: '三井 Outlet Park 威秀影城',
          title: '兩大影城影視最新',
          desc:
            '威秀、國賓兩大影城進駐商城，隨時觀賞熱門院線影劇，無論是假日小休閒，或是平日愜意行，不用舟車勞頓，走路即能抵達。',
        },
        {
          src: require('./s5_img2-2.jpg'),
          name: '昕境廣場 國賓影城',
          title: '兩大影城影視最新',
          desc:
            '威秀、國賓兩大影城進駐商城，隨時觀賞熱門院線影劇，無論是假日小休閒，或是平日愜意行，不用舟車勞頓，走路即能抵達。',
        },
        {
          src: require('./s5_img3-1.jpg'),
          name: '行政文化園區',
          title: '行政園區便捷安心',
          desc:
            '林口行政園區步行約3分鐘，政府耗資將近9億打造，消防局、警察局、衛生局、社會局、稅捐處、圖書館等六大機關，便利又安心。',
        },
        {
          src: require('./s5_img3-2.jpg'),
          name: '行政文化園區',
          title: '行政園區便捷安心',
          desc:
            '林口行政園區步行約3分鐘，政府耗資將近9億打造，消防局、警察局、衛生局、社會局、稅捐處、圖書館等六大機關，便利又安心。',
        },
        {
          src: require('./s5_img4-1.jpg'),
          name: '第一運動公園',
          title: '擁抱綠意遼闊寬心',
          desc:
            '享受林口60%高綠覆率國際城市，無論是假日的扶輪公園、或是6.6公頃的運動公園，猶如搬進超大植物園，徜徉於大自然的懷抱。',
        },
        {
          src: require('./s5_img4-2.jpg'),
          name: '扶輪公園',
          title: '擁抱綠意遼闊寬心',
          desc:
            '享受林口60%高綠覆率國際城市，無論是假日的扶輪公園、或是6.6公頃的運動公園，猶如搬進超大植物園，徜徉於大自然的懷抱。',
        },
      ],
      isMobile,
    }
  },

  methods: {},
}
</script>
