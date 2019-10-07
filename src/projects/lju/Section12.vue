<template>
  <div class="section12">
    <div class="bg relative fullscreen">
      <div class="fullscreen-container">
        <div
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
          class="absolute icon-1"
        >
          <img src="./s12_icon_1.png" alt="">
        </div>
        <div
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
          class="absolute desc-1"
        >
          <icon class="icon" :data="svg2" />
        </div>
        <div
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="600"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
          class="center absolute-c"
        >
          <img v-if="!isMobile" src="./93.png" alt />
          <img v-else src="./s12_center_m.png" alt="">
        </div>
        <div
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="900"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
          class="absolute icon-2"
        >
          <img src="./s12_icon_2.png" alt="">
        </div>
        <div
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="1200"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
          class="absolute desc-2"
        >
          <icon class="icon" :data="svg4" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  width: 100vw;
  background-image: url('./s12_bg.jpg');
  background-color: #fff;
  padding-top: 20px;

  // .container {
  //   // width: calc();
  // }
  .fullscreen-container {
    min-width: 980px;
  }

  .center {
    height: calc(700vh / 10);
    margin-left: 5%;
    // top: 10vw;

    img {
      height: 100%;
    }
  }

  .icon-1 {
    left: calc(100vw * (50 / 1440));
    top: calc(100vh * (50 / 900));
    height: calc(100vh * (136 / 900));
    width: auto;
    img {
      height: 100%;
    }
  }

  .desc-1 {
    left: calc(100vw * (50 / 1440));
    top: calc(100vh * (220 / 900));
    height: calc(100vh * (85 / 900));
    width: auto;
    svg {
      height: 100%;
    }
  }

  .icon-2 {
    right: calc(100vw * (50 / 1440));
    bottom: calc(100vw * (100 / 900));
    height: calc(100vh * (280 / 900));
    width: auto;
    img {
      height: 100%;
    }
  }

  .desc-2 {
    right: calc(100vw * (20 / 1440));
    bottom: calc(100vw * (50 / 900));
    height: calc(100vh * (50 / 900));
    width: auto;
    svg {
      height: 100%;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    .center {
      width: 50vw;
    }

    .icon-1 {
      height: 115px;
    }
    .desc-1 {
      height: 62px;
    }

    .center {
      height: 550px;
      left: 10%;
    }

    .icon-2 {
      height: 200px;
      right: 17%;
      bottom: 18%;
    }

    .desc-2 {
      height: 50px;
      right: 11%;
    }
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .bg {
    width: 100vw;
    height: auto !important;
    background-image: url('./s12_bg.jpg');
    padding-top: 0px;
    .icon-1,
    .icon-2,
    .desc-1,
    .desc-2,
    .center {
      position: relative;
      top: auto;
      left: auto;
      right: auto;
      bottom: auto;
      transform: none !important;
    }

    .fullscreen-container {
      min-width: 100vw;
      height: auto !important;
    }

    .icon-1 {
      width: 40vw;
      padding-top: 30px;
      margin-bottom: 30px;
      margin-left: 5vw;
      img {
        width: 100%;
        height: auto;
      }
    }

    .desc-1 {
      width: 90vw;
      height: auto;
      margin-left: 5vw;
      margin-bottom: 30px;
      svg {
        width: 100%;
        height: auto;
      }
    }

    .center {
      width: 100vw;
      margin: 0;
      height: auto;

      img {
        height: auto;
        width: 90%;
      }
    }

    .icon-2 {
      width: 40vw;
      height: auto;
      margin-top: -20px;
      margin-left: auto;
      margin-right: 20vw;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: auto;
      }
    }

    .desc-2 {
      width: 55vw;
      height: auto;
      margin-left: auto;
      margin-right: 12vw;
      padding-bottom: 20px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import svg1 from '../../assets/svg/9-3.svg'
import svg2 from '../../assets/svg/9-4.svg'
import svg3 from '../../assets/svg/9-5.svg'
import svg4 from '../../assets/svg/9-6.svg'
export default {
  name: 'section12',
  mixins: [slider],
  components: {},

  data() {
    return {
      isMobile,
      svg1,
      svg2,
      svg3,
      svg4,
      slideList: [
        {
          src: require('./s11_img_1.jpg'),
        },
        {
          src: require('./s11_img_2.jpg'),
        },
      ],
    }
  },

  methods: {},
}
</script>
