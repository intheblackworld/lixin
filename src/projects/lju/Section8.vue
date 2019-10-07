<template>
  <div class="section8 relative fullscreen">
    <img
      v-if="isMobile"
      :data-aos="!isMobile ? 'fade-left' : 'fade-up'"
      data-aos-offset="50"
      data-aos-delay="600"
      data-aos-duration="1500"
      data-aos-mirror="true"
      data-aos-once="false"
      src="./s8_tree.png"
      class="tree absolute"
      alt
    />
    <div class="container">
      <h3
        class="title flex-ac"
        :data-aos="!isMobile ? 'fade-left' : 'fade-up'"
        data-aos-offset="50"
        data-aos-delay="0"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
        v-html="isMobile ? '雋永雅緻<br />讓回家成為最期望的事' : '雋永雅緻，讓回家成為最期望的事'"
      ></h3>
      <div
        class="slide relative"
        :data-aos="!isMobile ? 'fade-left' : 'fade-up'"
        data-aos-offset="50"
        data-aos-delay="300"
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
        <div class="slide-content absolute">
          <h3 class="title">{{slideList[slideIndex].title}}</h3>
          <div class="desc">{{slideList[slideIndex].desc}}</div>
          <div
            class="btn flex-c"
            @click="slideIndex = slideList[slideIndex].goToIndex"
          >{{slideList[slideIndex].btn}} ►</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/style/variableDefault.scss';
.section8 {
  width: 100vw;
  // height: calc(100vw * (900 / 1440));
  background-image: url('./s8_bg.jpg');
}

.btn-group {
  display: none;
}

.tree {
  left: 75%;
  top: calc(100vw * (900 / 1440) * 0.15);
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 40px;
}

.title {
  font-size: 49px;
  line-height: 1.7;
  color: #000;
  border-left: 40px solid #d43829;
  padding-left: 20px;
  text-align: left;
  margin-bottom: 40px;
}

.slide {
  width: 100%;
  height: calc(100vh - 224px);
  max-width: 1440px;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  img {
    width: 90%;
    height: 100%;
    object-fit: cover;
  }

  .slide-content {
    background-image: url('./s8_shadow.png');
    background-size: 100% 100%;
    width: 490px;
    height: 210px;
    bottom: 80px;
    right: 20px;
    padding: 40px;

    .title {
      font-size: 31px;
      color: #fff;
      height: auto;
      border-left: none;
      text-align: left;
      margin-bottom: 30px;
      padding-left: 0;
    }

    .desc {
      color: #fff;
      font-size: 17.5px;
      line-height: 1.5;
      text-align: left;
    }

    .btn {
      background: #bcb700;
      width: 280px;
      height: 50px;
      color: #fff;
      position: relative;
      right: -190px;
      bottom: 0px;
      cursor: pointer;
    }
  }
}

.content {
  bottom: 0;
  left: 0;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .section8 {
    width: 100vw;
    background-image: url('./s8_bg.jpg');
  }

  .tree {
    left: calc(100vw * (1200 / 1440));
    top: calc(100vw * (900 / 1440) * 15%);
  }

  .title {
    font-size: 40px;
    color: #000;
    border-left: 30px solid #d43829;
    padding-left: 15px;
    text-align: left;
    height: 67px;
  }

  .slide {
    width: calc(100vw * (1200 / 1440));
    height: calc(100vw * (1200 / 1440) * (720 / 1200));
    img {
      width: calc(100vw * (1200 / 1440));
    }

    .slide-content {
      background-image: url('./s8_shadow.png');
      width: 388px;
      height: 151px;
      bottom: 50px;
      right: -100px;
      padding: 30px;

      .title {
        font-size: 24.5px;
        color: #fff;
        height: auto;
        border-left: none;
        text-align: left;
        margin-bottom: 10px;
        padding-left: 0;
      }

      .desc {
        color: #fff;
        font-size: 13.5px;
        line-height: 1.5;
        text-align: left;
      }

      .btn {
        background: #bcb700;
        width: 220px;
        height: 40px;
        color: #fff;
        font-size: 14px;
        position: relative;
        right: -170px;
        bottom: -20px;
        cursor: pointer;
      }
    }
  }

  .content {
    bottom: 0;
    left: 0;
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .section8 {
    width: 100vw;
    height: calc(100vw * (667 / 375));
    background-image: url('./s8_bg.jpg');
    padding-top: 0px;
  }

  .tree {
    left: auto;
    right: 20px !important;
  }

  .tree {
    width: 100px;
    right: 0;
    bottom: 10px;
  }

  .title {
    font-size: 4vh;
    width: 90%;
    margin: 0 auto;
    color: #000;
    border-left: none;
    padding-left: 0px;
    line-height: 1.5;
    text-align: left;
    height: 79px;
    margin-bottom: 20px;
  }

  .slide {
    width: 100vw;
    height: calc(100vw * (370 / 375) + 60px);
    img {
      width: 100%;
      height: auto;
    }

    .btn-group {
      bottom: auto;
      top: calc(100vw * (240 / 375) / 2);
      display: flex;
    }

    .slide-content {
      background-image: none;
      position: relative;
      width: 100%;
      height: auto;
      bottom: auto;
      right: 0;
      top: calc(100vw * (240 / 375));
      left: 0;
      padding: 2vh;

      .title {
        width: 100%;
        font-size: 3.5vh;
        color: #252525;
        height: auto;
        border-left: none;
        text-align: left;
        margin-bottom: 10px;
        padding-left: 0;
      }

      .desc {
        color: #252525;
        width: 80%;
        font-size: 2vh;
        line-height: 1.5;
        text-align: left;
      }

      .btn {
        display: none;
      }
    }
  }

  .tree {
    top: auto;
    right: 0;
    bottom: 0;
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section8',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s8_img_1.jpg'),
          title: '麗韻門廳，如同飯店宴會Bar',
          desc: '典雅的灰藍色階，鋪陳出飯店般的情緒，崗石與玻璃材質的完美設計',
          btn: '健身空間，喚醒身體的能量',
          goToIndex: 1,
        },
        {
          src: require('./s8_img_2.jpg'),
          title: '健身空間，喚醒身體的能量',
          desc: '兼具健身房與閱覽空間，陪伴孩子閱讀時也鍛鍊自己的身材與線條',
          btn: '快遞包裹，社區郵件專用',
          goToIndex: 2,
        },
        {
          src: require('./s8_img_3.jpg'),
          title: '快遞包裹，社區郵件專用',
          desc: '具備臨時閱覽區，能方便您即時處理包裹文件的拆封，貼心住戶使用',
          btn: '麗韻門廳，如同飯店宴會Bar',
          goToIndex: 0,
        },
      ],
    }
  },

  methods: {},
}
</script>
