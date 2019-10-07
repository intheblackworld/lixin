<template>
  <div class="section3 relative frame">
    <img v-if="!isMobile" class="bg-img" src="./s3_bg.jpg" alt />
    <img v-else class="bg-img-m" src="./s3_bg_m.jpg" alt />
    <img
      v-if="!isMobile"
      class="bg-img absolute"
      src="./s3_logo.png"
      alt
      data-aos="slide-up"
      data-aos-duration="600"
      data-aos-delay="300"
      data-aos-once="false"
    />

    <img
      v-if="isMobile"
      class="img-txt-m"
      src="./s3_txt_m.jpg"
      alt
      data-aos="fade"
      data-aos-duration="600"
    />

    <div v-if="isMobile" class="slide absolute" data-aos="fade" data-aos-offset="50">
      <img @click="addIndex" class="btn" src="./s3_a.png" alt />
      <img
        v-for="(slide, index) in slideList"
        :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
        :key="`s10-slide-${index}`"
        :src="slide.src"
        alt
      />
      <img @click="decIndex" src="./s3_a.png" class="btn reverse" alt />
    </div>
    <img src="./s3_hand.png" alt class="hand" v-if="isMobile" />
  </div>
</template>
<style lang="scss" scoped>
.bg-img {
  width: 100vw;
  height: auto;
  display: block;
  top: 0;
}

@keyframes swing {
  0% {
    transform: translateX(20px);
  }

  50% {
    transform: translateX(-20px);
  }

  100% {
    transform: translateX(20px);
  }
}

@media screen and (max-width: 767px) {
  .bg-img-m {
    height: 140vh;
  }

  .img-txt-m {
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
  }

  .slide {
    top: calc(100vw * (140 / 275));
    width: 85vw;
    left: 7.5vw;

    img {
      width: 100%;
      display: block;
      margin: 0 auto;
      transition: all 0s;
      &.active {
        position: relative;
      }
    }

    .btn {
      width: 13px;
      height: 20px;
      position: absolute;
      cursor: pointer;
      left: -20px;
      top: 50%;
      position: absolute;
      z-index: 3;
    }

    .reverse {
      transform: rotate(180deg);
      left: auto;
      right: -20px;
    }
  }
  .hand {
    position: absolute;
    z-index: 2;
    display: block;
    width: 56px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(100vw * (340 / 275));
    display: block;
    animation: swing 2.5s ease-in-out 0s infinite;
  }

  .frame {
    overflow-x: scroll;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

import slider from '@/mixins/slider.js'
export default {
  name: 'section3',
  mixins: [slider],

  methods: {},

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s3_img1.jpg'),
        },
        {
          src: require('./s3_img2.jpg'),
        },
        {
          src: require('./s3_img3.jpg'),
        },
      ],
    }
  },
}
</script>
