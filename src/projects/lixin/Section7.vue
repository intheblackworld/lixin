<template>
  <div class="section7">
    <div class="bg fullscreen">
    <div class="title">服務客戶</div>
      <div class="container">
        <div class="logo" v-for="(logo, index) in logoList" :key="`logo${index}`">
          <img
            :src="logo"
            alt
            data-aos="flip-left"
            :data-aos-delay="0 + 100 * index"
            data-aos-duration="1200"
          />
        </div>
      </div>
     <!--
      <div  v-if="isMobile" :class="`slide-next ${isShowDetail ? 'hide' : ''}`" @click="slideNext">
        <img src="./s6/next_w.png" alt />
      </div>
      <div  v-if="isMobile" :class="`slide-prev ${isShowDetail ? 'hide' : ''}`" @click="slidePrev">
        <img src="./s6/next_w.png" alt />
      </div>
      -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 2;
  background: url('./s7/bg.png');
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 20%;
  transform: translateY(-50%);
  font-size: 45px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.11em;
  text-align: center;
  color: #ed6d34;
}
.container {
  width: 1140px;
  height: 260px;
  display: flex;
  // align-items:
  flex-wrap: wrap;
  justify-content: space-between;
  .logo {
    width: 355px;
    // height: 45%;
    margin-bottom: 5%;

    img {
      width: 100%;
      height: auto;
      max-height: 100%;
      display: block;
      margin: 0 auto;
    }
  }
}
.slide-next,
.slide-prev {
  width: 60px;
  height: 60px;
  background-color: #ed6d34;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  cursor: pointer;
  z-index: 12;
  transition: all 1s ease-in-out;

  img {
    width: 30%;
  }

  &.hide {
    opacity: 0;
  }
}

.slide-next {
  right: 0;
}

.slide-prev {
  left: 0;

  img {
    transform: rotate(180deg);
  }
}

.dialog {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 90;

  .dialog-content {
    width: 90vw;
    height: 90vh;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%) !important;
    background: transparent;

    video {
      outline: none;
      width: 100%;
      height: 100%;
    }
  }

  .close {
    width: 30px;
    height: 30px;
    cursor: pointer;
    img {
      width: 100%;
    }

    position: fixed;
    top: 30px;
    right: 30px;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    min-height: 750px;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    .logo {
      width: 33.33%;
    }
  }
}

@media screen and (max-width: 767px) {
  .container {
    width: 90vw;
    justify-content: center;
    .logo {
      width: 50%;
    }
  }

  .section7 {
    position: relative;
    > .fullscreen {
      height: 150vw !important;
    }
  }

  .title {
    color: #ed6d34;
    font-size: 8vw;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.94;
    letter-spacing: 3.1px;
    text-align: center;
    position: absolute;
    z-index: 3;
    top: 25vw;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100vw;
  }

  .slide-next,
  .slide-prev {
    width: 40px;
    height: 40px;
    img {
      width: 40%;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'
import play from '@/assets/svg/icon-play.svg'
import { setTimeout } from 'timers'
export default {
  name: 'section7',
  mixins: [slider],

  components: {},

  data() {
    return {
      play,
      isMobile,
      isShowDetail: false,
      logoList: [
        require('./s7/logo/logo1.png'),
        require('./s7/logo/logo2.png'),
        require('./s7/logo/logo3.png'),
        require('./s7/logo/logo4.png'),
        require('./s7/logo/logo5.png'),
        require('./s7/logo/logo6.png'),
      ],
    }
  },

  methods: {
    slideNext() {
      if (this.isShowDetail) {
        return
      }
      this.addIndex()
    },

    slidePrev() {
      if (this.isShowDetail) {
        return
      }
      this.decIndex()
    },
  },

  mounted() {},
}
</script>
