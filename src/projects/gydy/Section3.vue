<template>
  <div class="section3">
    <div class="slide relative fullscreen">
      <div class="name">{{slideList[slideIndex].name}}</div>
      <img
        v-for="(slide, index) in slideList"
        :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
        :key="`s3-slide-${index}`"
        :src="slide.src"
        alt
      />
      <div class="container fullscreen" v-if="!isMobile">
        <div class="title absolute">
          公園綠活
          <span>No.1</span>
        </div>
        <div class="desc absolute">{{ slideList[slideIndex].desc }}</div>
      </div>
      <div class="btn-group flex-jc flex-ac flex-mobile-jb">
        <div class="button" @click="decIndex" v-if="!isMobile">
          <img src="./arrow-left.png" alt />
        </div>
        <div class="button" v-if="!isMobile">{{ slideIndex + 1}} / {{ slideList.length }}</div>
        <div class="button" v-if="!isMobile" @click="addIndex">
          <img src="./arrow-right.png" alt />
        </div>
        <img v-if="isMobile" @click="decIndex" src="./arrow-left.png" alt />
        <img v-if="isMobile" @click="addIndex" src="./arrow-right.png" alt />
      </div>
    </div>
    <div class="text" v-if="isMobile">
      <div class="park">{{slideList[slideIndex].name}}</div>
      <div class="park-desc">{{slideList[slideIndex].desc}}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  top: 0;
  margin: 0 auto;
  width: 1050px;
  position: absolute;
  z-index: 2;

  .title {
    left: 8vw;
    bottom: calc(8vh + 120px);
    width: 283px;
    height: 65px;
    background-color: rgba(22, 103, 158, 0.7);
    color: #fff;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    span {
      font-size: 40px;
      font-weight: bold;
    }
  }

  .desc {
    left: 7vw;
    bottom: 8vh;
    width: 870px;
    width: 871px;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 40px;
    text-align: justify;
    font-size: 23px;
    color: #fff;
  }
}

.slide {
  .name {
    position: absolute;
    right: 6vw;
    font-size: 20px;
    color: #fff;
    z-index: 2;
    top: 20px;
  }
  .slide-img {
    display: block;
  }

  .btn-group {
    position: absolute;
    width: 240px;
    bottom: 0;
    left: auto;
    right: 7vw;
    display: flex;
    margin: 0;
    .button {
      width: 80px;
      height: 80px;
      background: rgba(0, 0, 0, 0.75);
      border: 1px solid #fff;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 23px;

      img {
        width: 20px;
        height: auto;
      }
    }
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .fullscreen {
    height: 800px;
  }

  .container {
    .title {
      bottom: calc(8vh + 110px);
    }
    .desc {
      width: 800px;
      font-size: 18px;
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    .title {
      bottom: calc(8vh + 110px);
    }
    .desc {
      width: 600px;
      font-size: 18px;
    }
  }

  .slide {
    .slide-img {
      height: calc(100vh - 60px);
    }

    .btn-group {
      .button {
        width: 57px;
        height: 57px;
        font-size: 17px;
        img {
          width: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .fullscreen {
    height: auto !important;
  }

  .slide {
    .name {
      position: relative;
      width: 100vw;
      height: 38px;
      background: #333;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 15px;
      left: 0;
      top: 0;
    }

    .desc {
      position: relative;
    }

    .btn-group {
      width: 100vw;
      left: 0;
      bottom: 40%;
    }
  }

  .text {
    background: #333;
    color: #fff;
    padding: 30px;
    height: 330px;
    .park {
      font-size: 28px;
      margin-bottom: 20px;
    }

    .park-desc {
      font-size: 20px;
      line-height: 1.5;
      text-align: justify;
    }
  }

  .container {
    width: 100%;
    padding: 30px 0;
  }
}
</style>

<script>
// @ is an alias to /src
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
export default {
  name: 'section3',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          name: '復興公園(約7800坪)',
          src: require('./s3_img_1.jpg'),
          desc:
            '坐落於公園大院對街的復興公園，樹林環抱，渾然天成，為無人不知無人不曉的在地樂園。貫穿公園有一潺潺的磺港溪，流過涼亭、大道，生態與石景。馳名的足湯，堆滿人們的歡笑聲。',
        },
        {
          name: '北投公園(約18000坪)',
          src: require('./s3_img_2.jpg'),
          desc:
            '走出新北投站，就能在北投公園空氣中感受到微微瀰漫的硫磺特有香味，不但設有露天溫泉風呂，更以珍稀老樹和豐富的生態馳名。',
        },
        {
          name: '七星公園(約3600坪)',
          src: require('./s3_img_3.jpg'),
          desc:
            '七星公園是一座年輕卻盈溢清幽的祕密花園，視野開闊，綠草如茵，百餘株櫻花樹在花季競相爭豔。新北投車站以百年驛站之姿再現風華，早已成為爭相打卡網紅搶拍的吸睛焦點。',
        },
        {
          name: '七虎公園(約3000坪)',
          src: require('./s3_img_4.jpg'),
          desc:
            '小巧卻精緻的私家秘境，七虎公園位於育仁路、薇閣小學及七虎泳池之間，小孩放電、長輩賞景最適宜，散步遛狗隨興愜意，躍入泳池嬉戲的孩童歡笑，銀鈴般的喜悅撫慰塵心再生美好。',
        },
        {
          name: '中庸公園(約1500坪)',
          src: require('./s3_img_5.jpg'),
          desc:
            '熱鬧與靜謐並存的幸福園地！蟬鳴鳥叫在茂密林蔭此起彼落，天籟相伴心曠神怡，健走、慢跑都不怕艷陽高照，藉高聳的綠葉遮陰納涼正好，步道鋪設平坦無高低差，中庸公園恰如其名，小小的世界自在合意全齡滿意。',
        },
      ],
    }
  },

  methods: {},

  created() {},
}
</script>
