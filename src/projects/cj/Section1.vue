<template>
  <div class="section1">
    <div class="fix-group">
      <div class="button" v-scroll-to="{ element: `#${'contact'}`, offset: -56 }">
        <img src="./gold_btn.png" alt />
      </div>
      <!-- <div class="button" v-scroll-to="{ element: `#${'section2'}`, offset: -56 }">
        <img src="./chevron-up.png" alt />
      </div>-->
    </div>
    <div class="bg fullscreen relative">
      <img
        v-if="!isMobile"
        src="./s1/s1_bg.jpg"
        alt
        class="img"
        data-aos="mini-in"
        data-aos-delay="0"
      />
      <img
        v-if="!isMobile"
        src="./s1/s1_logo.png"
        alt
        class="img logo-s1 relative"
        data-aos="mini-in"
        data-aos-delay="500"
      />
      <img
        v-if="!isMobile"
        src="./s1/s1_ribbon.png"
        alt
        class="img ribbon"
        data-aos="fade"
        data-aos-delay="400"
      />
      <img
        v-if="isMobile"
        src="./s1/s1_logo_m.png"
        alt
        class="img logo"
        data-aos="fade-down"
        data-aos-delay="0"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  // background-image: url('./s1/s1_bg.jpg');
  background-size: cover;
  position: relative;
}

.logo-s1 {
  z-index: 6;
}

.fullscreen {
  overflow: visible;
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

.ribbon {
  top: 60px;
  z-index: 5;
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
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s1/s1_bg_m.jpg');
    background-size: cover;
  }

  .logo-s1 {
    margin: 0 auto;
    z-index: 1;
  }

  .fix-group {
    display: none;
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
