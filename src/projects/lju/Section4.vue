<template>
  <div class="section4 fullscreen">
    <div class="container flex-ac flex-jb" v-if="!isMobile">
      <div
        class="item relative bg-cover"
        data-aos="fade"
        data-aos-offset="50"
        data-aos-delay="0"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div class="mask absolute bg-cover" />
        <div class="content relative">
          <h3 class="title">城市翻新浪潮</h3>
          <div
            class="desc"
          >上北市東西翻轉大計劃，包括北門與雙子星特區，將勾勒城市全新樣貌，三重具備第一環的紅利優勢，加上產業趨勢改變，充沛豐富的城市浪潮，即將改寫三重風光，包括玉山金控、群光電子都看見蛻變中的新三重</div>
        </div>
      </div>
      <div
        class="item relative bg-cover"
        data-aos="fade"
        data-aos-offset="50"
        data-aos-delay="300"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div class="mask absolute bg-cover" />
        <div class="content relative">
          <h3 class="title">機捷加速驅動</h3>
          <div
            class="desc"
          >機場捷運是台北捷運系統的第二具引擎，聯繫國門與首都的跨世紀能量，串連北市、新北、桃園近九百萬人口城市，三重驅動大勢，不僅是國門第一站，更連結水岸共生、城市再造的超規格版圖</div>
        </div>
      </div>
      <div
        class="item relative bg-cover"
        data-aos="fade"
        data-aos-offset="50"
        data-aos-delay="600"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div class="mask absolute bg-cover" />
        <div class="content relative">
          <h3 class="title">新北閃耀五星</h3>
          <div
            class="desc"
          >依據產業結構、城市潛力提出的新北五星計劃，將以二重為首，在包括土城、新莊、新店、八里地區，匯聚優勢交通能量、工商產業利多、生態環境等條件，打造新型態城市計劃</div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="slide relative"
      data-aos="fade"
      data-aos-offset="50"
      data-aos-delay="900"
      data-aos-duration="1500"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <img
        v-for="(slide, index) in slideList"
        :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
        :key="`s4-slide-${index}`"
        :src="slide.src"
        alt
      />
      <div class="btn-group flex-jb flex-ac">
        <img @click="addIndex" src="./small_left_btn.png" alt />
        <img @click="decIndex" src="./small_right_btn.png" alt />
      </div>
      <div class="slide-content">
        <h3 class="title">{{slideList[slideIndex].title}}</h3>
        <div class="desc">{{slideList[slideIndex].desc}}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section4 {
  // height: calc(100vw * (900 / 1440));
  background-color: rgb(233, 44, 10);
}

.container {
  width: 100%;
  height: 100%;
  padding: 50px 60px;
  .item {
    height: 100%;
    width: 32%;
    border-radius: 50px;
    overflow: hidden;

    &:nth-child(1) {
      background-image: url('./s4_img_1.jpg');
    }
    &:nth-child(2) {
      background-image: url('./s4_img_2.jpg');
    }
    &:nth-child(3) {
      background-image: url('./s4_img_3.jpg');
    }

    &:hover {
      .mask {
        opacity: 1;
      }

      .content {
        opacity: 1;
        margin-top: 0px;
      }
    }
  }

  .content {
    color: #fff;
    padding: 100px 50px;
    z-index: 2;
    opacity: 0;
    margin-top: -50px;
    transition: all 0.5s;
    .title {
      font-size: 43px;
      margin-bottom: 20px;
    }

    .desc {
      font-size: 16px;
      line-height: 1.5;
      text-align: justify;
    }
  }

  .mask {
    background-image: url('./s4_shadow.jpg');
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    opacity: 0;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 100%;
    height: 100%;
    background-color: rgb(233, 44, 10);
    padding: 40px 50px;
    .item {
      height: 100%;
      width: 32%;
      border-radius: 50px;
      overflow: hidden;

      &:nth-child(1) {
        background-image: url('./s4_img_1.jpg');
      }
      &:nth-child(2) {
        background-image: url('./s4_img_2.jpg');
      }
      &:nth-child(3) {
        background-image: url('./s4_img_3.jpg');
      }
    }

    .content {
      color: #fff;
      padding: 70px 50px;
      z-index: 2;
      opacity: 1;
      margin-top: 0px;
      transition: all 0.5s;
      .title {
        font-size: 32px;
        margin-bottom: 20px;
      }

      .desc {
        font-size: 16px;
        line-height: 1.5;
        text-align: justify;
      }
    }

    .mask {
      background-image: url('./s4_shadow.jpg');
      width: 100%;
      height: 100%;
      transition: all 0.5s;
      opacity: 1;
    }
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .section4 {
    height: 100vh;
    max-height: 600px;
  }
  .slide {
    width: 100vw;
    height: calc(100vw * (300 / 375) + 60px);
    > img {
      width: 100%;
      height: calc(100vw * (370 / 375));
      object-fit: cover;
    }

    .btn-group {
      bottom: 180px;
    }

    .slide-content {
      color: #000;
      position: absolute;
      bottom: -100px;
      width: 90vw;
      background: #fff;
      left: 0;
      right: 0;
      margin: 0 auto;
      padding: 20px;

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
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section4',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s4_img_1.jpg'),
          title: '城市翻新浪潮',
          desc:
            '上北市東西翻轉大計劃，包括北門與雙子星特區，將勾勒城市全新樣貌，三重具備第一環的紅利優勢，加上產業趨勢改變，充沛豐富的城市浪潮，即將改寫三重風光，包括玉山金控、群光電子都看見蛻變中的新三重',
        },
        {
          src: require('./s4_img_2.jpg'),
          title: '機捷加速驅動',
          desc:
            '機場捷運是台北捷運系統的第二具引擎，聯繫國門與首都的跨世紀能量，串連北市、新北、桃園近九百萬人口城市，三重驅動大勢，不僅是國門第一站，更連結水岸共生、城市再造的超規格版圖',
        },
        {
          src: require('./s4_img_3.jpg'),
          title: '新北閃耀五星',
          desc:
            '依據產業結構、城市潛力提出的新北五星計劃，將以二重為首，在包括土城、新莊、新店、八里地區，匯聚優勢交通能量、工商產業利多、生態環境等條件，打造新型態城市計劃',
        },
      ],
    }
  },

  methods: {},
}
</script>
