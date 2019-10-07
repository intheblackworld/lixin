<template>
  <div class="section1">
    <div class="bg fullscreen relative">
      <img v-if="!isMobile" src="./s1_logo.png" alt class="img relative" />
      <img v-if="!isMobile" src="./s1_subtitle.png" alt class="img" />
      <img v-if="!isMobile" src="./s1_title.png" alt class="img" />
      <img v-if="!isMobile" src="./s1_desc.png" alt class="img" />
      <img v-if="!isMobile" src="./s1_sky.png" alt class="img" />
      
      <div v-if="isMobile">
        <img src="./s1_logo_m.png" alt class="logo relative" />
        <div class="subtitle relative">捷運 ｜ 森活 ｜ 校園</div>
        <div class="desc relative">
          1180萬
          <span>起</span> 買捷運2房
        </div>
        <div class="desc relative">
          景觀3房 訂簽180萬
          <span>起</span>
        </div>
        <img src="./s1_sky_m.png" alt class="sky" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s1_bg.jpg');
  background-size: cover;
  position: relative;
}

.img {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;

  &.relative {
    position: relative;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s1_bg.jpg');
    background-size: cover;
  }

  .logo {
    width: 225px;
    margin: 0 auto;
    margin-top: 20vh;
    z-index: 1;
  }

  .subtitle {
    font-size: 32px;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 10vh;
    font-weight: bold;
    z-index: 1;
  }

  .desc {
    color: #113f86;
    font-size: 33px;
    font-weight: bold;
    margin-bottom: 15px;
    z-index: 1;

    span {
      font-size: 24px;
    }
  }

  .sky {
    width: 200%;
    left: -50%;
    position: absolute;
    bottom: 0;
    z-index: 0;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section1',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
