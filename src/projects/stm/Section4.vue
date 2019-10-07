<template>
  <div class="section4">
    <div class="container">
      <h3 class="title flex-c" v-scroll-reveal.reset="!isMobile ? $fadeInUp(0) : $fadeInUp()">心靈時區</h3>
      <h3
        class="sub-title"
        v-scroll-reveal.reset="!isMobile ? $fadeInUp(300) : $fadeInUp()"
      >遠離塵囂心自靜 近擁雙北核心圈</h3>
      <div class="flex row">
        <div v-scroll-reveal.reset="!isMobile ? $fadeInRight(600) : $fadeInUp()">
          <img class="img1" src="./s4_img1.png" alt="心天畝的圖片" />
        </div>

        <div class="text" v-scroll-reveal.reset="!isMobile ? $fadeInUp(600) : $fadeInUp()">
          <div class="item">
            <h3 class="label-title">
              三高、三快 交通暢行 |
              <br />20分鐘生活圈
            </h3>
            <hr />
            <p>
              南港從煙囪小鎮，經過半世紀的粹練，轉變為科技
              <br />軟體資訊城市與金融中心
            </p>
          </div>
          <div class="item">
            <h3 class="label-title">
              三高-
              <br />中山高．汐五高．五楊高
            </h3>
            <hr />
            <p>
              新店裕隆汽車廠，跟著產經進化腳步，以複合式開
              <br />發計劃重新塑造新店樣貌
            </p>
          </div>
          <div class="item">
            <h3 class="label-title">
              三快
              <br />64快．65快．台一線
            </h3>
            <hr />
            <p>
              64快八里新店線、65快五股土城線、台一線高架道
              <br />路，迅速接軌站前雙子星特區、新莊副都心，緊密
              <br />結合繁榮大都會區。
            </p>
          </div>
        </div>
      </div>
      <h3
        class="gold-title"
        v-scroll-reveal.reset="!isMobile ? $fadeInUp(900) : $fadeInUp()"
      >五股交通大樞紐</h3>
      <div class="flex row small flex-c wrap">
        <img
          v-scroll-reveal.reset="!isMobile ? $fadeInRight(900) : $fadeInUp()"
          class="map"
          src="./s4_map.png"
          alt
        />
        <div
          class="slide relative"
          v-scroll-reveal.reset="!isMobile ? $fadeInLeft(900) : $fadeInUp()"
        >
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s4-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="btn-group flex-jb flex-ac">
            <img @click="addIndex" src="./small_left_btn.png" alt="心天畝的圖片" />
            <img @click="decIndex" src="./small_right_btn.png" alt="心天畝的圖片" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 1090px;
  margin: 0 auto;

  .title {
    width: 340px;
    height: 101px;
    background-image: url('./s4_title_bg.png');
    background-size: cover;
    margin-bottom: 25px;
    color: #fff;
    font-size: 28px;
    margin-top: 30px;
  }

  .sub-title {
    font-size: 28px;
    color: #2b466f;
    margin-bottom: 40px;
  }

  .img1 {
    width: 670px;
    margin-right: 30px;
  }

  .row {
    margin-bottom: 30px;
  }

  .text {
    text-align: left;
    .item {
      width: 360px;
      margin-bottom: 15px;
    }

    .label-title {
      padding-left: 15px;
      border-left: 5px solid rgba(77, 77, 77, 0.3);
      font-size: 24px;
      line-height: 1.25;
      color: #005b96;
      margin-bottom: 15px;
    }

    hr {
    }
    p {
      font-size: 16px;
      line-height: 1.44;
      color: #4d4d4d;
    }
  }

  .gold-title {
    font-size: 32px;
    color: #7b8125;
    padding-left: 150px;
    text-align: left;
    margin-bottom: 30px;
  }

  .map {
    width: 465px;
    margin-right: 55px;
  }

  .slide {
    width: 460px;
    height: 360px;

    .slide-img {
      width: 460px;
    }

    .btn-group {
      width: 280px;
      bottom: 10px;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 810px;
    margin: 0 auto;

    .title {
      width: 251px;
      height: 75px;
      background-image: url('./s4_title_bg.png');
      background-size: cover;
      margin-bottom: 25px;
      color: #fff;
      font-size: 21px;
      margin-top: 30px;
    }

    .sub-title {
      font-size: 21px;
      color: #2b466f;
      margin-bottom: 40px;
    }

    .img1 {
      width: 495px;
      margin-right: 30px;
    }

    .row {
      margin-bottom: 30px;
    }

    .text {
      text-align: left;
      .item {
        width: 360px;
        margin-bottom: 15px;
      }

      .label-title {
        padding-left: 15px;
        border-left: 5px solid rgba(77, 77, 77, 0.3);
        font-size: 18px;
        line-height: 1.25;
        color: #005b96;
        margin-bottom: 15px;
      }

      hr {
      }
      p {
        font-size: 12px;
        line-height: 1.44;
        color: #4d4d4d;
      }
    }

    .map {
      width: 345px;
      margin-right: 55px;
    }

    .slide {
      width: 340px;
      height: 227px;

      .slide-img {
        width: 340px;
      }

      .btn-group {
        width: 180px;
        bottom: -35px;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .container {
    width: 100vw;
    margin: 0 auto;

    .title {
      width: 300px;
      height: 90px;
      background-image: url('./s4_title_bg.png');
      background-size: cover;
      margin-bottom: 15px;
      color: #fff;
      font-size: 32px;
    }

    .sub-title {
      font-size: 18px;
      color: #2b466f;
      margin-bottom: 20px;
    }

    .img1 {
      width: 100vw;
      margin-right: 0px;
    }

    .row {
      margin-bottom: 10px;
      display: block;
    }

    .text {
      text-align: left;
      margin: 0 auto;
      margin-top: 20px;
      .item {
        width: 230px;
        margin: 0 auto;
        margin-bottom: 15px;
      }

      .label-title {
        padding-left: 16px;
        border-left: 5px solid rgba(77, 77, 77, 0.3);
        font-size: 18px;
        line-height: 1.25;
        color: #005b96;
        margin-bottom: 10px;
      }

      hr {
      }
      p {
        font-size: 14px;
        line-height: 1.44;
        color: #4d4d4d;
      }
    }

    .gold-title {
      padding-left: 30px;
      font-size: 23px;
    }

    .map {
      width: 100vw;
      margin-right: 0px;
    }

    .slide {
      width: 100vw;
      height: calc(100vw * (250 / 375) + 60px);

      .slide-img {
        width: 100vw;
      }

      .btn-group {
        width: 180px;
        bottom: 0px;
      }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'

export default {
  name: 'section4',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s4_item1.png'),
        },
        {
          src: require('./s4_item2.png'),
        },
      ],
    }
  },

  created() {},
}
</script>
