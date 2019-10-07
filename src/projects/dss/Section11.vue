<template>
  <div class="section11">
    <div class="bg relative">
      <img src="./s11_bg.jpg" alt="" class="bg-img" v-if="!isMobile" data-aos="fade" data-aos-delay="300">
      <img src="./s11_bgm.jpg" alt="" class="bg-img" v-if="isMobile" data-aos="fade" data-aos-delay="300">
      <div class="absolute-c">
        <img src="./s11_img.png" alt="" v-if="!isMobile" data-aos="fade" data-aos-delay="700">
        <img src="./s11_imgm.png" alt="" v-if="isMobile" class="bg-img" data-aos="fade" data-aos-delay="700">
        <div :class="`slide relative ${isMobile ? 'absolute-c' : ''}`" data-aos="fade" data-aos-delay="900">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s4-slide-${index}`"
          >
            {{slide.desc}}
          </div>
          <!-- <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decIndex" src="./small_left_btn.png" alt />
            <img @click="addIndex" src="./small_right_btn.png" alt />
          </div> -->
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

.bg-img {
  width: 100vw;
  display: block;
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

  .slide-img {
    margin-top: 30px;
    color: #fff;
    font-size: 22px;

    &.active {
      position: absolute;
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

  .slide {
    .slide-img {
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
    display: block;
  }

  .slide {
    .slide-img {
      width: 90vw;
      margin-left: 5vw;
      margin-top: 60px;
      font-size: 16px;
      line-height: 1.4;
      text-align: justify;
    }
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section11',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          desc: '佳上佳地產，是滋養家庭情感中，拉近您和家人們的「向心力」；',
        },
        {
          desc: '豐禾營運，是讓家擁有更安全的支持，成為您最無後顧之憂的「實力」；',
        },
        {
          desc: '「好眼力」選地哲學，為您獻上綠意兼具文教質感的高雄大學特區。',
        },
      ],
    }
  },

  methods: {},

  created() {
    setInterval(() => {
      if (this.slideList) {
        this.addIndex()
      }
    }, 3000)
  },
}
</script>
