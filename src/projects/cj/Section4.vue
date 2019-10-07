<template>
  <div class="section4">
    <div class="bg relative">
      <div class="relative fullscreen">
        <div class="container" v-if="!isMobile" data-aos="fade"
        data-aos-delay="0">
          <img src="./s4/line.png" alt class="line" v-if="!isMobile" data-aos="scale-bottom"
        data-aos-delay="0" />
          <div class="content" data-aos="fade"
        data-aos-delay="800">
            <div class="title">壯闊造鎮</div>
            <div class="subtitle">5000坪整體開發計畫，越住越有價值</div>
            <div class="desc">
              近乎絕版！市中心5000坪大型整體開發計畫，60%以上規劃綠地廣場，在東城大境裡，公園與建築融合一體。
              16000多平米，僅興建6座建築物，實踐城市花園理想。
              我們將生態植入街廓，並導入「都市綠廊」概念，藉由開放空間的點、線、面作為串連及整合，形成綠色跳島，方便鳥類蝴蝶昆蟲休憩，達到森態園區的理想境界。
            </div>
          </div>
          <img src="./s4/img.jpg" alt class="img" data-aos="fade"
        data-aos-delay="300" />
        </div>
        <div class="container" v-if="isMobile">
          <img src="./s4/img.jpg" alt class="img" data-aos="fade"
        data-aos-delay="0" />
          <div class="content" data-aos="fade"
        data-aos-delay="0">
            <div class="title">壯闊造鎮</div>
            <div class="subtitle">5000坪整體開發計畫，越住越有價值</div>
            <div class="desc">
              近乎絕版！市中心5000坪大型整體開發計畫，60%以上規劃綠地廣場，在東城大境裡，公園與建築融合一體。
              16000多平米，僅興建6座建築物，實踐城市花園理想。
              我們將生態植入街廓，並導入「都市綠廊」概念，藉由開放空間的點、線、面作為串連及整合，形成綠色跳島，方便鳥類蝴蝶昆蟲休憩，達到森態園區的理想境界。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s4/bg.png');
  background-size: 100%;
  position: relative;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.line {
  width: 100vw;
  height: 70%;
  position: absolute;
  left: 0;
  top: 0;
}

.img {
  width: calc(100% * (1200 / 1920));
}

.content {
  width: calc(100% * (720 / 1920));
}

.title,
.desc,
.subtitle {
  width: calc(100vw * (450 / 1920));
  margin-left: calc(100vw * (210 / 1920));
}

.title {
  font-size: 95px;
  font-weight: bold;
  text-align: left;
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 20px;
  margin-top: -20%;
}

.subtitle {
  font-size: 24px;
  line-height: 1.28;
  text-align: left;
  color: #ffef00;
  margin-bottom: 20px;
}

.desc {
  font-size: 17px;
  line-height: 1.3;
  text-align: justify;
  color: #ffffff;
}

@media only screen and (max-width: 1440px) and (min-width: 1200px) {
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

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .container {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .line {
    margin-top: -50px;
  }

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

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .line {
    margin-top: -50px;
  }

  .title {
    font-size: 60px;
  }

  .subtitle {
    font-size: 14px;
  }

  .desc {
    font-size: 13px;
  }

  .fullscreen {
    height: auto;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background: #dfafa0;
  }

  .container {
    display: block;
    padding-top: 20px;
  }

  .img {
    width: 100vw;
  }

  .fullscreen {
    height: auto !important;
  }

  .content {
    width: 90vw;
    margin: 0 auto;
    background: #b55759;
    z-index: 3;
    position: relative;
    padding: 20px;
    margin-top: -40px;
    margin-bottom: 20px;
    .title,
    .subtitle,
    .desc {
      width: 100%;
      margin-left: auto;
    }

    .title {
      font-size: 65px;
      text-align: center;
      margin-top: 0;
    }

    .subtitle {
      font-size: 16px;
    }

    .desc {
      font-size: 15px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section4',
  mixins: [slider],

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
