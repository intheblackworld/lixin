<template>
  <div class="section3">
    <div class="title-bg">
      <div class="text" v-if="isMobile">
        <div
          class="title"
          data-aos="fade-down"
          data-aos-delay="0"
        >樹海恬靜學區 爭藏氧森別墅</div>
        <div
          class="desc"
          data-aos="fade-down"
          data-aos-delay="200"
        >步行2分鐘抵高雄大學，自然生態日夜淨化空氣ING</div>
      </div>
    </div>
    <Map :tagList="tagList" :bgSrc="isMobile ? bgmSrc: bgSrc" :hand="hand">
      <div class="text" v-if="!isMobile">
        <div
          class="title"
          data-aos="fade-down"
          data-aos-delay="0"
        >樹海恬靜學區 爭藏氧森別墅</div>
        <div
          class="desc"
          data-aos="fade-down"
          data-aos-delay="500"
        >步行2分鐘抵高雄大學，自然生態日夜淨化空氣ING</div>
      </div>
    </Map>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-position: 100% 0%;
  background-size: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: url('./s2_bg.jpg');
}

.bg-top {
  width: 100vw;
  height: 530px;
  display: block;
}
.text {
  top: 70px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.title {
  font-size: 111px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}

.desc {
  font-size: 31px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.81;
  letter-spacing: 3.1px;
  text-align: center;
  color: #ffffff;
}
@media only screen and (max-width: 1440px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }

  .text {
    top: 40px;
  }

  .title {
    font-size: 90px;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    background-size: 1920px auto;
    background-position: center;
  }
  .txt {
    height: auto;
    margin-top: 100px;
  }

  .title {
    font-size: 52px;
  }

  .desc {
    font-size: 24px;
  }

  .text {
    top: 0;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: 55%;
    // background-image: url('./s3_bg_m.jpg');
  }

  .logo {
    width: 55vw;
    margin-top: -80px;
  }

  .video-container {
    width: 100%;
    margin: 0 auto;
    right: 0;
    .mask {
      width: 100vw;
      height: calc((100vw * 9) / 16);

      img {
        width: 60px;
      }
    }
    video {
      position: relative;
      width: 100vw;
    }
  }

  .title {
    width: 100vw;
    font-size: 55px;
  }

  .desc {
    width: 100vw;
    font-size: 25px;
  }

  .text {
    top: 0;
    background-size: cover;
  }

  .title-bg {
    background-size: auto;
    height: 270px;
    background-image: url('./s3_bg_top.png');
    background-size: contain;
    display: flex;
    align-items: center;

    .text {
      position: relative;
    }
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import Map from '@/components/Map.vue'
export default {
  name: 'section3',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      tagList: [require('./s3_title.png')],

      bgSrc: require('./s3_bg.jpg'),
      bgmSrc: require('./s3_bg_m.jpg'),
      hand: require('../lkf/s4_hand.png'),
    }
  },

  mounted() {},
}
</script>
