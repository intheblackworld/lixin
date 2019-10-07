<template>
  <div class="section6">
    <div class="bg">
      <div class="slide relative" data-aos="fade" data-aos-delay="300">
        <img
          v-for="(slide, index) in slideList"
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
</template>
<style lang="scss" scoped>
.bg {
  background-color: #333;
  background-position: 100% 0%;
  background-size: cover;
  position: relative;
  display: flex;
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
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    background-size: 1920px auto;
    background-position: center;
  }

  .fullscreen {
    height: auto;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: 55%;
    position: relative;
    display: block;
  }

  .slide {
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
  name: 'section6',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s6_img1.jpg'),
        },
        {
          src: require('./s6_img2.jpg'),
        },
        {
          src: require('./s6_img3.jpg'),
        },
      ],
    }
  },

  methods: {},

  mounted() {
    if (this.isMobile) {
      this.slideList = [
        {
          src: require('./s6_img1m.jpg'),
        },
        {
          src: require('./s6_img2m.jpg'),
        },
        {
          src: require('./s6_img3m.jpg'),
        },
        {
          src: require('./s6_img4m.jpg'),
        },
      ]
    }
  }
}
</script>
