<template>
  <div class="section9">
    <div class="bg">
      <div class="slide relative" v-if="!isMobile" data-aos="fade" data-aos-delay="300">
        <img
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s4-slide-${index}`"
          :src="slide.src"
          alt
        />
        <div class="img-group" data-aos="fade" data-aos-delay="600">
          <img
            v-for="(slide, index) in slideList"
            :class="`${slideIndex === index ? 'active' : ''}`"
            @click="slideIndex = index"
            :key="`s9-img-${index}`"
            :src="slide.small"
            alt
          />
        </div>
      </div>
      <div v-else>
        <div class="slide relative" data-aos="fade" data-aos-delay="300">
          <img
            v-for="(slide, index) in slideListM"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s4-slide-${index}`"
            :src="slide.src"
            alt
          />
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
  background-color: #333;
  background-position: 100% 0%;
  background-size: cover;
  position: relative;
  display: flex;
}

.img-group {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  img {
    width: 200px;
    transition: all .3s;

    &.active {
      box-shadow: 0 0 0 5px #00a29a;
    }
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
    background-image: url('./s9/s9_bg_m.jpg')
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
    background-image: url('./s9/s9_bg_m.jpg');
    background-size: cover;
    .btn-group {
      width: 95%;
      bottom: 50%;
      img {
        width: 28px;
      }
    }
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section9',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s9/img1.jpg'),
          small: require('./s9/img1s.jpg'),
        },
        {
          src: require('./s9/img2.jpg'),
          small: require('./s9/img2s.jpg'),
        },
        {
          src: require('./s9/img3.jpg'),
          small: require('./s9/img3s.jpg'),
        },
        {
          src: require('./s9/img4.jpg'),
          small: require('./s9/img4s.jpg'),
        },
      ],
      slideListM: [
        {
          src: require('./s9/img_t_1.png'),
        },
        {
          src: require('./s9/img_t_2.png'),
        },
        {
          src: require('./s9/img_t_3.png'),
        },
        {
          src: require('./s9/img_t_4.png'),
        },
      ]
    }
  },

  methods: {},

  // mounted() {
  //   if (this.isMobile) {
  //     this.slideList = [
  //       {
  //         src: require('./s6_img1m.jpg'),
  //       },
  //       {
  //         src: require('./s6_img2m.jpg'),
  //       },
  //       {
  //         src: require('./s6_img3m.jpg'),
  //       },
  //       {
  //         src: require('./s6_img4m.jpg'),
  //       },
  //     ]
  //   }
  // }
}
</script>
