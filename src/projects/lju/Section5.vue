<template>
  <div class="section5">
    <div class="bg">
      <div v-if="isTablet" class="tablet-content">
        <div
          class="label"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >【 蘊藏生活 】</div>
        <h3
          class="title"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >水岸優雅綻放，蘊藏生活絢美</h3>
        <div
          class="desc"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="600"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          校園第一排融合水岸雙景觀優勢，
          <br />雙國道快速道路動能，加倍獻上生活豐美
        </div>
      </div>
      <div class="container flex-ja" v-if="isMobile">
        <div class="side">
          <div
            class="label"
            data-aos="fade"
            data-aos-offset="50"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="false"
          >【 蘊藏生活 】</div>
          <h3
            class="title"
            data-aos="fade"
            data-aos-offset="50"
            data-aos-delay="300"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            水岸優雅綻放
            <br />蘊藏生活絢美
          </h3>
          <div
            class="desc"
            data-aos="fade"
            data-aos-offset="50"
            data-aos-delay="600"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            校園第一排融合水岸雙景觀優勢，
            <br />雙國道快速道路動能，加倍獻上生活豐美
          </div>
        </div>
      </div>
      <div class="container flex-ja" v-if="!isMobile">
        <div class="side">
          <span v-if="!isTablet">
            <div
              class="label"
              data-aos="fade"
              data-aos-offset="50"
              data-aos-delay="0"
              data-aos-duration="1500"
              data-aos-mirror="true"
              data-aos-once="false"
            >【 蘊藏生活 】</div>
            <h3
              class="title"
              data-aos="fade"
              data-aos-offset="50"
              data-aos-delay="300"
              data-aos-duration="1500"
              data-aos-mirror="true"
              data-aos-once="false"
            >水岸優雅綻放，蘊藏生活絢美</h3>
            <div
              class="desc"
              data-aos="fade"
              data-aos-offset="50"
              data-aos-delay="600"
              data-aos-duration="1500"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              校園第一排融合水岸雙景觀優勢，
              <br />雙國道快速道路動能，加倍獻上生活豐美
            </div>
          </span>
          <div
            class="img-group"
            data-aos="fade"
            data-aos-offset="50"
            data-aos-delay="900"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div>
              <img src="./s5_img1.jpg" alt />
            </div>
            <div>
              <img src="./s5_img2.jpg" alt />
            </div>
            <div>
              <img src="./s5_img3.jpg" alt />
            </div>
            <div>
              <img src="./s5_img4.jpg" alt />
            </div>
            <div>
              <img src="./s5_img5.jpg" alt />
            </div>
          </div>
        </div>
        <div class="side side2">
          <div
            class="item"
            v-for="(slide, index) in slideList"
            :key="slide.title"
            data-aos="fade"
            data-aos-offset="50"
            :data-aos-delay="index * 200"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h3 class="title">{{slide.title}}</h3>
            <div class="desc" v-html="slide.desc"></div>
          </div>
        </div>
      </div>
      <div
        class="slide relative"
        v-else
        v-scroll-reveal.reset="!isMobile ? $fadeInLeft(900) : $fadeInUp()"
      >
        <img
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s4-slide-${index}`"
          :src="slide.src"
          alt
        />
        <!-- <icon class="icon" :data="arrow2" />
        <icon class="icon" :data="arrow1" />-->
        <div class="btn-group flex-jb flex-ac">
          <img @click="addIndex" src="./small_left_btn.png" alt />
          <img @click="decIndex" src="./small_right_btn.png" alt />
        </div>
        <div class="slide-content">
          <h3 class="title">{{slideList[slideIndex].title}}</h3>
          <div class="desc">{{slideList[slideIndex].desc}}</div>
        </div>
      </div>
      <div class="relative bg-bottom">
        <img src="./s5_bg_top.png" alt />
        <img src="./s5_bg_b.jpg" alt />
        <img src="./s5_bg_f.png" alt class="absolute flower" style="bottom: 0;right: 0;" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s5_bg.jpg');
}

.bg-bottom {
  width: 100vw;
  margin-top: 50px;
  img {
    width: auto;
    display: block;
  }
}

.flower {
  animation: flower 2s linear infinite alternate;
  transform-origin: bottom;
}
@keyframes flower {
  from {
    transform: skewX(-3deg);
  }
  to {
    transform: skewX(0deg);
  }
}

.container {
  width: 1400px;
  max-width: 100vw;
  padding: 0 40px;
  margin: 0 auto;
  padding-top: 100px;
  color: #231815;
  .side {
    width: 50%;
    text-align: left;
    .label {
      font-size: 32px;
      margin-bottom: 20px;
    }
    .title {
      font-size: 49px;
      margin-bottom: 30px;
    }

    .desc {
      font-size: 21px;
      margin-bottom: 40px;
      line-height: 1.5;
    }

    .img-group {
      width: 100%;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      div {
        overflow: hidden;
        display: inline-block;
        margin-bottom: 10px;
      }

      div:nth-child(1) {
        width: 560px;
        height: 260px;
      }

      div:nth-child(2) {
        width: 350px;
        height: 260px;
        margin-right: 10px;
      }

      div:nth-child(3) {
        width: 200px;
        height: 260px;
      }

      div:nth-child(4) {
        width: 200px;
        height: 200px;
        margin-right: 10px;
      }
      div:nth-child(5) {
        width: 350px;
        height: 200px;
      }
    }

    .item {
      text-align: left;
      .title {
        font-size: 37px;
        margin-bottom: 20px;
      }
      .desc {
        line-height: 1.5;
        font-size: 17px;
      }
    }
  }

  .side2 {
    margin-top: 52px;
    width: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg-bottom {
    width: 100vw;
    margin-top: 50px;
    img {
      width: 100%;

      &:nth-child(2) {
        width: 100%;
      }
    }

    .flower {
      width: 60%;
    }
  }

  .tablet-content {
    width: 670px;
    margin: 0 auto;
    text-align: left;
    color: #231815;
    padding-top: 50px;
    margin-left: 100px;
  }
  .label {
    font-size: 32px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 49px;
    margin-bottom: 30px;
  }

  .desc {
    font-size: 21px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  .container {
    width: 980px;
    max-width: 100vw;
    padding: 0;
    margin: 0 auto;
    padding-top: 20px;
    color: #231815;
    .side {
      width: 50%;
      text-align: left;
      .label {
        font-size: 32px;
        margin-bottom: 20px;
      }
      .title {
        font-size: 49px;
        margin-bottom: 30px;
      }

      .desc {
        font-size: 21px;
        margin-bottom: 40px;
      }

      .img-group {
        width: 100%;

        div {
          overflow: hidden;
          display: inline-block;
          margin-bottom: 10px;
        }

        div:nth-child(1) {
          width: 475px;
          height: 220px;
        }

        div:nth-child(2) {
          width: 300px;
          height: 220px;
          margin-right: 10px;
        }

        div:nth-child(3) {
          width: 165px;
          height: 220px;
        }

        div:nth-child(4) {
          width: 165px;
          height: 170px;
          margin-right: 10px;
        }
        div:nth-child(5) {
          width: 300px;
          height: 170px;
        }
      }

      .item {
        text-align: left;
        .title {
          font-size: 32px;
          margin-bottom: 20px;
        }
        .desc {
          font-size: 15px;
        }
      }
    }
  }

  .container {
    .side2 {
      margin-top: 0;
      padding-left: 35px;
    }
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .section5 {
    height: auto;
  }

  .container {
    .side2 {
      margin-top: 0;
    }
  }

  .bg-bottom {
    width: 100vw;
    margin-top: 0px;
    img {
      width: 100%;

      &:nth-child(2) {
        width: 100%;
      }
    }

    .flower {
      width: 60%;
    }
  }

  .container {
    padding: 0 20px;
    padding-top: 40px;
    .side {
      width: 100%;
      .label {
        font-size: 28px;
      }

      .title {
        font-size: 46px;
        line-height: 1.4;
      }

      .desc {
        font-size: 18px;
      }
    }
  }
  .slide {
    width: 100vw;
    height: calc(100vw * (260 / 375) + 200px);
    img {
      width: 100%;
      height: 260px;
      &.active {
        position: relative;
      }
    }

    .icon {
      fill: #d33828;
      width: 60px;
      margin-right: 20px;
      margin-left: 20px;
      margin-top: calc(100vw * (260 / 375));
    }

    .btn-group {
      width: 95%;
      position: absolute;
      top: 0%;
      bottom: 190px;
      img {
        height: auto;
      }
    }

    .slide-content {
      color: #000;
      position: absolute;
      bottom: -30px;
      width: 90vw;
      left: 0;
      right: 0;
      margin: 0 auto;
      padding-bottom: 40px;

      .title {
        font-size: 32px;
        margin-bottom: 20px;
      }

      .desc {
        font-size: 15px;
        line-height: 1.5;
        text-align: justify;
      }
    }
  }
}
</style>

<script>
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import arrow1 from '../../assets/svg/arrow_r_1.svg'
import arrow2 from '../../assets/svg/arrow_r_2.svg'
import { setInterval } from 'timers'
export default {
  name: 'section5',
  mixins: [slider],

  data() {
    return {
      isMobile,
      isTablet,
      arrow1,
      arrow2,
      slideList: [
        {
          src: require('./s5_img1.jpg'),
          title: '永久校園視野',
          desc:
            '建築基地正對校園預定地，等同保有完美的視野棟距<br />日後孩子上學下樓就到，家長接送更安心安全',
        },
        {
          src: require('./s5_img1.jpg'),
          title: '水岸綠金風光',
          desc:
            '大台北都會公園，雙北最美的城市綠廊，騎上單車<br />悠遊世界富人都羨慕的極致水岸風光，更享健康人生',
        },
        {
          src: require('./s5_img2.jpg'),
          title: '豐美生活滋味',
          desc:
            '同步光復路精彩機能，生猛的熱炒料理、排隊的羊肉麵線<br />鍋貼水餃、咖啡簡餐便利店，生活方便有滋味',
        },
        {
          src: require('./s5_img3.jpg'),
          title: '企業總部能量',
          desc:
            '新三重，包括玉山金控、群光電子以及未來東森商業總部<br />率先瞄準重劃區進駐，看好產業改變帶來的城市翻轉能量',
        },
        {
          src: require('./s5_img4.jpg'),
          title: '辰光橋直達三重站',
          desc:
            '單車5分鐘就到雙捷三重站，具備機場捷運與新蘆線雙軌動能<br />加上日後潤泰Citylink商場，世界級的水岸生活已隱然成形',
        },
        {
          src: require('./s5_img5.jpg'),
          title: '一分鐘直上快速道路',
          desc:
            '轉個彎就是64快速道路，自在切換新北環快雙城市走廊<br />國一國三雙國道動線，加上汐五高架與忠孝橋形成完美交通圈',
        },
      ],
    }
  },

  methods: {},

  created() {
    if (this.isMobile) {
      this.slideList = [
        {
          src: require('./s5_img1.jpg'),
          title: '永久校園視野',
          desc:
            '建築基地正對校園預定地，等同保有完美的視野棟距日後孩子上學下樓就到，家長接送更安心安全',
          title2: '永久校園視野',
          desc2:
            '建築基地正對校園預定地，等同保有完美的視野棟距日後孩子上學下樓就到，家長接送更安心安全',
        },
        {
          src: require('./s5_img2.jpg'),
          title: '豐美生活滋味',
          desc:
            '同步光復路精彩機能，生猛的熱炒料理、排隊的羊肉麵線鍋貼水餃、咖啡簡餐便利店，生活方便有滋味',
        },
        {
          src: require('./s5_img3.jpg'),
          title: '企業總部能量',
          desc:
            '新三重，包括玉山金控、群光電子以及未來東森商業總部率先瞄準重劃區進駐，看好產業改變帶來的城市翻轉能量',
        },
        {
          src: require('./s5_img4.jpg'),
          title: '辰光橋直達三重站',
          desc:
            '單車5分鐘就到雙捷三重站，具備機場捷運與新蘆線雙軌動能加上日後潤泰Citylink商場，世界級的水岸生活已隱然成形',
        },
        {
          src: require('./s5_img5.jpg'),
          title: '一分鐘直上快速道路',
          desc:
            '轉個彎就是64快速道路，自在切換新北環快雙城市走廊國一國三雙國道動線，加上汐五高架與忠孝橋形成完美交通圈',
        },
      ]
    }

    // setInterval(() => {
    //   this.addIndex()
    // }, 2000)
  },
}
</script>
