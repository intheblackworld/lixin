<template>
  <div class="section12">
    <div class="bg relative">
      <img src="./s12_bg.jpg" alt="" class="bg-img" v-if="!isMobile" data-aos="fade" data-aos-delay="300">
      <img src="./s12_txt.png" alt="" class="bg-img" v-if="!isMobile" data-aos="fade-down" data-aos-delay="900">
      <img src="./s12_bg_m.jpg" alt="" class="bg-img" v-if="isMobile" data-aos="fade" data-aos-delay="300">
      <img src="./s12_txt1_m.png" alt="" class="bg-img" v-if="isMobile" data-aos="fade" data-aos-delay="500">
      <img src="./s12_txt2_m.png" alt="" class="bg-img" v-if="isMobile" data-aos="fade" data-aos-delay="700">
      <img src="./s12_txt3_m.png" alt="" class="bg-img" v-if="isMobile" data-aos="fade" data-aos-delay="900">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-position: 100% 0%;
  background-size: cover;
  position: relative;
  display: flex;
}

.bg-img {
  width: 100vw;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  &:nth-child(1) {
    position: relative;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: auto;
  }

  .img-group {
    width: 800px;

    img {
      width: 180px;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    background-size: cover;
    background-position: center;
    background-image: url('./s9/s9_bg_m.jpg');
  }

  .fullscreen {
    height: auto;
  }

  .img-group {
    width: 650px;

    img {
      width: 140px;
    }
  }

  .m-img {
    position: abso
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: 55%;
    position: relative;
    display: block;
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section12',
  mixins: [slider],

  data() {
    return {
      isMobile,
    }
  },

  methods: {},
}
</script>
