<template>
  <div class="section3">
    <div class="bg">
      <div class="container">
        <div class="title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">一生一次 尊享禮遇</div>
        <hr data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" />
        <div
          class="desc"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1500"
        >Boutique architecture</div>
        <img
          src="./s8_img1.png"
          alt
          class="img1"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1500"
        />
        <div class="content" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1500">
          <div class="title">青山興業 頂級精品創作家</div>
          <div class="desc">【青山興業】由深耕林口十多年的城洲廣告專業團隊聯手打造，以了解土地價值創新生活理念為標竿，專業而深耕，精緻而時尚</div>
          <div class="desc">
            【青山興業】全新建築非凡眼界，從嚴選土地、建築規劃、營造施工、售後服務、行銷服務、精裝服務，建立完整的建築開發及
            營造事業品牌。
          </div>
        </div>
        <img
          v-if="!isMobile"
          src="./s8_img2.png"
          alt
          class="img2"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="1500"
        />
        <img v-else src="./s8_img2_m.png" alt :class="`img2 ${imgIndex === 0 ? 'show' : ''}`" />
        <img
          v-if="isMobile"
          src="./s8_txt_m.png"
          alt
          :class="`txt ${imgIndex === 1 ? 'show' : ''}`"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-image: url('./s8_bg.png');
  background-position: 100% 0%;
  background-attachment: fixed;
  position: relative;
}
.container {
  background-image: url('./s8_container_bg.png');
  width: 1380px;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 40px;

  > .title {
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

  > hr {
    width: 304.7px;
    height: 0;
    border: solid 1px #c08d4e;
    margin: 0 auto;
    margin-bottom: 5px;
  }

  > .desc {
    width: 170px;
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

.img1 {
  margin-top: 50px;
  margin-bottom: 15px;
}

.content {
  width: 790px;
  margin: 0 auto;
  margin-bottom: 20px;
  .title {
    text-align: center;
    font-size: 26px;
    color: #c08d4e;
    margin-bottom: 20px;
  }

  .desc {
    text-align: center;
    font-size: 14px;
    color: #fff;
    line-height: 1.5;
    margin-bottom: 10px;
  }
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

  .img2 {
    width: 90%;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background: url('./s8_bg_m.png');
  }
  .container {
    width: 90vw;

    > .title {
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

    > hr {
      width: 201px;
    }

    > .desc {
      width: 160px;
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
  }

  .content {
    width: 90%;
    .title {
      margin-bottom: 10px;
    }
    .desc {
      text-align: left;
    }
  }
  .img1 {
    width: 147px;
    margin-top: 0px;
  }
  .img2 {
    width: 80%;
    margin: 0 auto;
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 500px;
    transition: all 1s;

    &.show {
      margin-top: 0px;
      opacity: 1;
    }
  }

  .txt {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: all 1s;

    &.show {
      margin-top: 0px;
      opacity: 1;
    }
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
      imgIndex: 0,
    }
  },

  methods: {},

  created() {
    setInterval(() => {
      if (this.imgIndex === 0) {
        this.imgIndex = 1
      } else {
        this.imgIndex = 0
      }
    }, 5000)
  },
}
</script>
