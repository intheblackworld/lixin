<template>
  <div class="section10">
    <div class="bg">
      <div class="relative" v-if="!isMobile">
        <div class="row relative">
          <img src="./s10/img1.png" alt data-aos="fade-right" data-aos-delay="300" />
          <img src="./s10/img2.png" alt data-aos="fade-left" data-aos-delay="600" />
        </div>
        <div class="row relative">
          <img src="./s10/img3.png" alt data-aos="fade-right" data-aos-delay="900" />
          <img src="./s10/img4.png" alt data-aos="fade-left" data-aos-delay="1200" />
        </div>
      </div>
      <div v-else>
        <div class="slide relative" style="overflow:hidden">
          <img src="./s10/w.png" alt class="m-bg" data-aos="fade-up" data-aos-delay="600" />
          <img src="./s10/b.png" alt class="m-bg" data-aos="fade-left" data-aos-delay="800" />
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s4-slide-${index}`"
          >
            <img :src="slide.src" alt />
            <img :src="slide.txt" alt />
          </div>
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decIndex" src="./small_left_btn.png" alt />
            <img @click="addIndex" src="./small_right_btn.png" alt />
          </div>
        </div>
      </div>
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

.row {
  img {
    display: block;
    width: 100vw;
    &:nth-child(1) {
      position: relative;
    }
    position: absolute;
    left: 0;
    top: 0;
  }
}

.slide {
  .btn-group {
    width: 95%;
    bottom: 50%;
    img {
      width: 36px;
    }
  }
}

.fullscreen {
  max-height: 900px;
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
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: 55%;
    position: relative;
    display: block;
  }

  .slide {
    .slide-img {
      transition: 0s;
      &.active {
        img {
          position: relative;
          &:nth-child(2) {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
          }
        }
      }

      img {
        width: 100vw;
      }
    }
    .btn-group {
      width: 95%;
      bottom: 50%;
      z-index: 5;
      img {
        width: 28px;
      }
    }
  }

  .m-bg {
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section10',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s10/img1m.jpg'),
          txt: require('./s10/txt1m.png'),
        },
        {
          src: require('./s10/img2m.jpg'),
          txt: require('./s10/txt2m.png'),
        },
        {
          src: require('./s10/img3m.jpg'),
          txt: require('./s10/txt3m.png'),
        },
        {
          src: require('./s10/img4m.jpg'),
          txt: require('./s10/txt4m.png'),
        },
      ],
    }
  },

  methods: {},
}
</script>
