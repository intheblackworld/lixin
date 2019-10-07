<template>
  <div class="section2">
    <div class="fix-group">
      <div class="button" v-scroll-to="{ element: `#${'contact'}`, offset: -56 }">
        <img src="./gold_btn.png" alt />
      </div>
      <!-- <div class="button" v-scroll-to="{ element: `#${'section2'}`, offset: -56 }">
        <img src="./chevron-up.png" alt />
      </div> -->
    </div>
    <video-bg autoplay="autoplay" :sources="[require('./s2_video.mp4')]" img="./s2_bg.jpg" isFix>
      <img
        data-aos="fade"
        data-aos-delay="0"
        data-aos-duration="1500"
        class="mask-img hidden-mobile"
        src="./s2_mask.png"
        alt
      />
      <img class="mask-img hidden-pc hidden-tablet visible-mobile" src="./s2_mask_m.png" alt />
      <div class="mask"></div>
      <div
        class="title"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1500"
      >Luxury Life</div>
      <div class="content" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
        <div>
          <p class="sub-title">A9捷運正對面 首座國際精裝寓所</p>
          <p class="text">
            低總價 X 高投報
            <br />18~22坪 奢華質感機能住宅
          </p>
        </div>
      </div>
    </video-bg>
  </div>
</template>
<style lang="scss" scoped>
.VideoBg {
  width: 100vw;
  height: calc(100vh - 60px) !important;
  video {
    position: fixed;
    z-index: 0;
  }
}
.mask {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
}
.mask-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  z-index: 1;
}

.title {
  width: 292px;
  height: 66px;
  opacity: 0.7;
  font-family: TimesNewRomanPSMT;
  font-size: 60px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #c08d4e;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 10%;
  position: absolute;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  top: 60%;
  padding-right: 20px;
  .sub-title {
    width: 460px;
    height: 42px;
    font-size: 31.5px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .text {
    width: 350px;
    height: 71px;
    font-size: 28px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
}

.fix-group {
  position: fixed;
  z-index: 10;
  right: 20px;
  bottom: 20px;

  .button {
    font-size: 18px;
    color: #fff;
    width: 80px;
    height: 80px;
    border-radius: 999px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .content {
    width: 980px;
  }
}

@media screen and (max-width: 767px) {
  .VideoBg {
    height: calc(100vh - 45px - 63px) !important;

    video {
      top: 48%;
    }
  }

  .mask {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .mask,
  .mask-img {
    height: calc(100vh - 45px - 63px) !important;
  }

  .title {
    font-size: 30px;
    top: 20%;
  }

  .content {
    width: 100vw;
    top: 30%;
    .sub-title {
      width: 230px;
      white-space: nowrap;
      height: 16px;
      font-size: 15.5px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }

    .text {
      width: 175px;
      height: 30px;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.07px;
      text-align: left;
      color: #ffffff;
    }
  }
  .bg {
    background-image: url('./s1_bg_m.jpg');
    .img {
      display: none;
    }
    .imgM {
      display: block;
    }
  }

  .fix-group {
    display: none;
  }
}
</style>

<script>
// @ is an alias to /src
import VideoBg from '@/components/VideoBg.vue'

export default {
  name: 'section2',
  components: {
    VideoBg,
  },

  data() {
    return {}
  },

  methods: {},
}
</script>
