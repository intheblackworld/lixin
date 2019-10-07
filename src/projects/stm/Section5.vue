<template>
  <div class="section5">
    <div class="container">
      <h3 class="title flex-c" v-scroll-reveal.reset="!isMobile ? $fadeInUp() : $fadeInUp()">樹海為鄰</h3>
      <h3 class="sub-title" v-scroll-reveal.reset="!isMobile ? $fadeInUp(300) : $fadeInUp()">有氧森活，比健身房更好的養生秘境</h3>
      <div class="small-title" v-scroll-reveal.reset="!isMobile ? $fadeInUp(600) : $fadeInUp()">10公頃樹海造鎮，伴隨呼吸與大自然共舞，走出氧森之道</div>
      <div
        class="slide relative"
        v-scroll-reveal.reset="!isMobile ? $fadeInUp(900) : $fadeInUp()"
      >
        <img
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s5-slide-${index}`"
          :src="slide.src"
          alt
        />
        <img class="left-btn" @click="addIndex" src="./left_btn.png" alt="心天畝的圖片" />
        <img class="right-btn" @click="decIndex" src="./right_btn.png" alt="心天畝的圖片" />
        <div class="slide-content">
          <div class="slide-title">{{slideList[slideIndex].title}}</div>
          <div class="slide-desc" v-html="slideList[slideIndex].desc"></div>
        </div>
        <div class="btn-group flex-jb flex-ac">
          <img @click="addIndex" src="./small_left_btn.png" alt="心天畝的圖片" />
          <img @click="decIndex" src="./small_right_btn.png" alt="心天畝的圖片" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 980px;
  margin: 0 auto;
  text-align: center;

  .title {
    width: 340px;
    height: 101px;
    background-image: url('./s5_title_bg.png');
    background-size: cover;
    margin-bottom: 25px;
    color: #fff;
    font-size: 28px;
    margin: 0 auto;
  }

  .sub-title {
    font-size: 28px;
    color: #2b466f;
    margin-bottom: 20px;
  }

  .small-title {
    font-size: 24px;
    color: #2b466f;
    margin-bottom: 20px;
  }

  .slide {
    width: 955px;
    height: 458px;
    margin-left: 50px;
    margin-bottom: 30px;

    .slide-img {
      width: 810px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .slide-content {
      position: absolute;
      bottom: 30px;
      .slide-title {
        padding: 15px 20px;
        text-align: center;
        background: #2b466f;
        color: #fff;
        font-size: 24px;
        position: relative;
        z-index: 1;
      }

      .slide-desc {
        padding: 15px 20px;
        padding-top: 50px;
        text-align: left;
        color: #1a2739;
        background-color: #9ca5b2;
        font-size: 18px;
        transform: translate(30px, -30px);
      }
    }
  }

  .btn-group {
    display: none;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 810px;
    margin: 0 auto;
    text-align: center;

    .title {
      width: 251px;
      height: 75px;
      background-image: url('./s5_title_bg.png');
      background-size: cover;
      margin-bottom: 25px;
      color: #fff;
      font-size: 21px;
    }

    .sub-title {
      font-size: 21px;
      color: #2b466f;
      margin-bottom: 20px;
    }

    .small-title {
      font-size: 18px;
      color: #2b466f;
      margin-bottom: 20px;
    }

    .slide {
      width: 710px;
      height: 340px;
      margin-left: 50px;
      margin-bottom: 30px;

      .slide-img {
        width: 600px;
        left: 0;
        right: 0;
        margin: 0 auto;
      }

      .left-btn,
      .right-btn {
        width: 40px;
      }

      .slide-content {
        position: absolute;
        bottom: 0px;
        .slide-title {
          padding: 10px 15px;
          text-align: center;
          background: #2b466f;
          color: #fff;
          font-size: 18px;
          position: relative;
          z-index: 1;
        }

        .slide-desc {
          padding: 10px 15px;
          padding-top: 40px;
          text-align: left;
          color: #1a2739;
          background-color: #9ca5b2;
          font-size: 13px;
          transform: translate(30px, -30px);
        }
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .container {
    width: 100vw;
    margin: 0 auto;
    text-align: center;

    .title {
      width: 300px;
      height: 90px;
      background-image: url('./s5_title_bg.png');
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

    .small-title {
      font-size: 18px;
      color: #2b466f;
      margin-bottom: 20px;
    }

    .slide {
      width: 100vw;
      height: calc(100vw * (180 / 320) + 40px);
      margin-left: 0px;
      margin-bottom: 100px;

      .slide-img {
        width: 100vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }

      .left-btn,
      .right-btn {
        display: none;
      }

      .btn-group {
        width: 180px;
        bottom: 0px;
        display: flex;
      }

      .slide-content {
        position: absolute;
        bottom: -100px;
        .slide-title {
          padding: 10px 15px;
          text-align: center;
          background: #2b466f;
          color: #fff;
          font-size: 18px;
          position: relative;
          z-index: 1;
          margin: 0 10%;
        }

        .slide-desc {
          width: 100vw;
          padding-top: 0px;
          padding: 20px 15px 10px;
          text-align: left;
          color: #1a2739;
          background-color: #9ca5b2;
          font-size: 13px;
          transform: translate(0px, -8px);
        }
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
  name: 'section5',
  mixins: [slider],
  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s5_item1.png'),
          title: '水碓觀景公園，健康作靠山',
          desc:
            '出門200步就到水碓觀景公園<br />這是企業家的早餐會報，更是讓健康有靠的不二法門',
        },
        {
          src: require('./s5_item2.png'),
          title: '走步道看風景，樂觀向前行',
          desc:
            '10.5公頃的水碓觀景公園，六條步道七座涼亭<br />山上視野好、空氣乾淨，心境自然輕鬆開朗',
        },
        {
          src: require('./s5_item3.png'),
          title: '散步石德公園，每天做早操 ',
          desc:
            '大樹下是楚漢棋局，林蔭底是孩子的開心笑聲，<br />一片波光樹海是清幽雅緻的寧靜公園',
        },
      ],
    }
  },

  methods: {},

  created() {},
}
</script>
