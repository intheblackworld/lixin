<template>
  <div class="section3">
    <div class="fullscreen bg">
      <div class="container">
        <div class="title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">國際都心 精裝風潮</div>
        <hr data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" />
        <div class="desc" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">International City</div>
        <div class="slide relative" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
          <img
            v-for="(slide, index) in (isMobile ? slideListM : slideList)"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s3-slide-${index}`"
            :src="slide"
            alt
          />
          <div class="btn-group flex-jc flex-ac flex-mobile-jb">
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
        <div class="bg-bottom"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-position: 100% 0%;
  background-size: cover;
  position: relative;
}

.bg-bottom {
  width: 100vw;
  height: 10vh;
  background-image: url('./s3_bg.png');
  position: absolute;
  bottom: 0;
  left: 0;
}
.container {
  width: 1380px;
  margin: 0 auto;
  padding-top: 20px;
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
  width: 128px;
  height: 20px;
  font-size: 18px;
  font-family: TimesNewRomanPSMT;
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

  .slide-img {
    margin: 0 auto;
    width: auto;
    max-height: 70vh;
    object-fit: cover;
    left: 0;
    right: 0;
  }

  .btn-group {
    bottom: 30px;
  }
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
    width: 100vw;
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
    color: #c49a6c;
  }

  .dot {
    display: none;
  }

  .arrow-btn {
    display: block;
  }

  .slide {
    .btn-group {
      bottom: 50%;
    }

    .slide-img {
      width: 100vw;
      max-height: auto;
    }
  }
  .bg-bottom {
    height: 90px;
    background-image: url('./s3_bg_m.jpg');
  }
}
</style>

<script>
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
export default {
  name: 'section3',
  mixins: [slider],

  data() {
    return {
      slideList: [
        require('./s3_img1.jpg'),
        require('./s3_img2.jpg'),
        require('./s3_img3.jpg'),
        require('./s3_img4.jpg'),
        require('./s3_img5.jpg'),
        require('./s3_img6.jpg'),
      ],
      slideListM: [
        require('./s3_img_1_m.jpg'),
        require('./s3_img_2_m.jpg'),
        require('./s3_img_3_m.jpg'),
        require('./s3_img_4_m.jpg'),
        require('./s3_img_5_m.jpg'),
        require('./s3_img_6_m.jpg'),
      ],
      isMobile,
    }
  },

  methods: {},
}
</script>
