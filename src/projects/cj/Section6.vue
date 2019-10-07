<template>
  <div class="section6">
    <div class="bg relative">
      <div class="relative fullscreen">
        <img src="./s6/line.png" alt class="line" v-if="!isMobile" data-aos="scale-bottom"
        data-aos-delay="0" />
        <div class="container">
          <div class="main-img relative" v-if="!isMobile" data-aos="fade"
        data-aos-delay="0">
            <div class="border absolute"></div>
            <img :src="slideList[slideIndex].src" alt />
          </div>
          <div :class="`slide relative`" v-if="isMobile">
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
          </div>
          <div class="content" data-aos="fade"
        data-aos-delay="500">
            <div class="title">優質建材</div>
            <div class="subtitle">以環保+恆久 承諾傳世地標質感</div>
            <div class="desc" v-if="!isMobile">
              LOW-E低輻射玻璃，搭配靜音氣密鋁門窗等，舒適與靜謐合一。
              <br />鎏金歲月造型鑄鋁防暴鋼木門，盡顯大戶風範。
              <br />日系Cleanup廚具的超強機能主張，採用世界首度發表的不鏽鋼素材「NSSC® FW1」
              <br />TOTO 無鉛龍頭、PANASONIC 免治馬桶、PANASONIC
              <br />松下三合一暖風機
              ，先進環保養生。
              <br />
            </div>
            <div class="desc" v-else>{{slideList[slideIndex].desc}}</div>
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
  background-image: url('./s6/bg.jpg');
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
  width: calc(100vw * (560 / 1920));
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
    width: calc(100vw * (650 / 1920));
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
    width: calc(100vw * (700 / 1920));
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
    background: #5e5851;
    display: block;
    position: relative;
    z-index: 12;
    margin-bottom: 40px;
    margin-top: -30px;
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
  name: 'section6',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s6/img1.jpg'),
          desc: 'LOW-E低輻射玻璃，搭配靜音氣密鋁門窗等，舒適與靜謐合一。',
        },
        {
          src: require('./s6/img2.jpg'),
          desc: '鎏金歲月造型鑄鋁防暴鋼木門，盡顯大戶風範。',
        },
        {
          src: require('./s6/img3.jpg'),
          desc:
            '日系Cleanup廚具的超強機能主張，採用世界首度發表的不鏽鋼素材「NSSC® FW1」',
        },
        {
          src: require('./s6/img4.jpg'),
          desc:
            'OTO 無鉛龍頭、PANASONIC 免治馬桶、PANASONIC  松下三合一暖風機，先進環保養生。',
        },
      ],
    }
  },

  methods: {},

  created() {},
}
</script>
