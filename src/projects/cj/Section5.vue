<template>
  <div class="section5">
    <div class="bg relative">
      <div class="relative fullscreen">
        <img src="./s5/line.png" alt class="line" v-if="!isMobile" data-aos="scale-bottom"
        data-aos-delay="0" />
        <div class="container">
          <div class="main-img relative" v-if="!isMobile" data-aos="fade"
        data-aos-delay="0">
            <div class="border absolute"></div>
            <img :src="slideList[slideIndex].src" alt />
            <div class="text">
              <div class="title">{{slideList[slideIndex].title}}</div>
              <div class="name">{{slideList[slideIndex].name}}</div>
            </div>
          </div>
          <div :class="`slide relative`" v-if="isMobile" data-aos="fade"
        data-aos-delay="0">
            <div
              v-for="(slide, index) in slideList"
              :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
              :key="`s4-slide-${index}`"
            >
              <img
                v-for="(slide, index) in slideList"
                :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
                :key="`s10-slide-${index}`"
                :src="slide.src"
                alt
              />
              <div class="btn-group flex-jb flex-ac flex-mobile-jb">
                <img @click="decIndex" src="./small_left_btn.png" alt />
                <img @click="addIndex" src="./small_right_btn.png" alt />
              </div>
            </div>
            <div class="text">
              <div class="title">{{slideList[slideIndex].title}}</div>
              <div class="name">{{slideList[slideIndex].name}}</div>
            </div>
          </div>
          <div class="content" data-aos="fade"
        data-aos-delay="500">
            <div class="title">菁英團隊</div>
            <div class="subtitle">合康建團隊 綠活主張、造鎮鉅獻</div>
            <div class="desc">
              17年精實口碑，6106個家庭的幸福推手
              <br />合康建築、引領幸福
              <br />2015年台灣10大建築師雙冠王
              <br />閤康聯合建築師事務所
              <br />總統府御用、豪宅景觀第一人
              <br />六國景觀、蘇瑞泉大師
              <br />當代首席空間設計大師
              <br />研舍設計、林建宏
              <br />
            </div>
            <div class="img-list" v-if="!isMobile">
              <img
                :src="slide.src"
                v-for="(slide, index) in slideList"
                @mouseover="slideIndex = index"
                :key="slide.title"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s5/bg.jpg');
  background-size: 100%;
  position: relative;
}

.container {
  width: 80vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
}

.line {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}

.img {
  width: auto;
}

.content {
  width: 50%;

  .title {
    font-size: 95px;
    font-weight: bold;
    text-align: left;
    line-height: 1.2;
    color: #ffffff;
    margin-bottom: 30px;
    margin-top: 0px;
  }

  .subtitle {
    font-size: 22px;
    line-height: 1.28;
    text-align: left;
    color: #ffef00;
    margin-bottom: 30px;
  }

  .desc {
    font-size: 17px;
    line-height: 1.4;
    text-align: justify;
    color: #ffffff;
  }

  .title,
  .desc,
  .subtitle {
    width: calc(100vw * (450 / 1920));
    margin-left: 30px;
  }
}
.img-list {
  width: calc(100vw * (450 / 1920));
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  margin-top: 70px;

  img {
    width: 110px;
  }
}

.main-img {
  width: calc(100vw * (590 / 1920));
  img {
    width: 100%;
  }

  .border {
    width: 100%;
    height: 97%;
    top: -20px;
    right: -20px;
    border: 1px solid #fff;
  }

  .text {
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin-top: 10px;
    > div {
      width: 50%;
    }
  }
}

@media only screen and (max-width: 1440px) and (min-width: 1200px) {
  .content {
    .title {
      font-size: 80px;
    }

    .subtitle {
      font-size: 18px;
    }

    .desc {
      font-size: 17px;
    }
  }

  .img-list {
    width: calc(100vw * (500 / 1920));
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .container {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .line {
    margin-top: -50px;
  }

  .main-img {
    .border {
      height: 92%;
    }

    > div {
      font-size: 14px;
    }
  }

  .content {
    .title {
      font-size: 65px;
    }

    .subtitle {
      font-size: 17px;
    }

    .desc {
      font-size: 15px;
    }
  }

  .img-list {
    width: calc(100vw * (530 / 1920));
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .line {
    margin-top: -50px;
  }

  .content {
    .title {
      font-size: 60px;
    }

    .subtitle {
      font-size: 14px;
    }

    .desc {
      font-size: 13px;
    }
  }

  .main-img {
    .border {
      height: 93%;
    }

    > div {
      font-size: 12px;
    }
  }

  .img-list {
    width: calc(100vw * (730 / 1920));
  }

  .fullscreen {
    height: auto;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }

  .container {
    flex-wrap: wrap;
    width: 100vw;
  }

  .slide {
    width: 100vw;
  }

  .text {
    margin-top: -20%;
    z-index: 10;
    position: relative;
    padding: 0 10px;
    color: #fff;
    font-size: 14px;
    > div {
      margin-bottom: 5px;
    }
  }

  .content {
    width: 90%;
    margin: 0 auto;
    background: #10679c;
    display: block;
    position: relative;
    z-index: 12;
    margin-bottom: 40px;
    margin-top: 10px;
    padding-top: 20px;
    padding-bottom: 20px;

    .title,
    .subtitle,
    .desc {
      width: 80%;
      margin: 0 auto;
      margin-bottom: 20px;
    }

    .title {
      font-size: 60px;
    }

    .subtitle {
      font-size: 16px;
    }

    .desc {
      font-size: 15px;
    }
  }

  .fullscreen {
    height: auto !important;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section5',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s5/img1.jpg'),
          title: '總統府御用、豪宅景觀第一人',
          name: '六國景觀、蘇瑞泉大師',
        },
        {
          src: require('./s5/img2.jpg'),
          title: '當代首席空間設計大師',
          name: '研舍設計、林建宏',
        },
        {
          src: require('./s5/img3.jpg'),
          title: '2015年台灣10大建築師雙冠王',
          name: '吳文全',
        },
      ],
    }
  },

  methods: {},

  created() {},
}
</script>
