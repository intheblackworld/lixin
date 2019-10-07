<template>
  <div class="section10">
    <div class="bg fullscreen">
      <div class="title-block">
        <h3 class="title">世紀地王10大優勢</h3>
        <div class="subtitle">Features</div>
      </div>
      <carousel-3d
        ref="mycarousel"
        :width="imgWidth"
        :height="imgHeight"
        :perspective="0"
        :disable3d="isMobile ? true : false"
        :border="0"
        :display="isMobile ? 1 : 3"
        :space="isMobile ? 'auto' : 'auto'"
        @after-slide-change="onAfterSlideChange"
      >
        <slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img"
          class="img-slide"
        >
          <img :src="slide.img" :class="`video-img absolute`" />
        </slide>
      </carousel-3d>
      <div class="btn-group flex-jb flex-ac flex-mobile-jb" v-if="isMobile">
        <img @click="goToSlide(currentIndex - 1)" src="./arrow-left.png" alt />
        <img @click="goToSlide(currentIndex + 1)" src="./arrow-right.png" alt />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: relative;
  overflow: hidden;
  position: relative;
  padding: 50px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.title-block {
  width: 420px;
  margin-bottom: 0px;
}

.img-slide {
  border: 1px solid #e6b048 !important;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border-color: #fff !important;
  }

  .play-btn {
    width: 125px;
    cursor: pointer;
    z-index: 2;

    display: block;

    &.hide {
      display: none;
    }
  }

  .video {
  }

  .video-img {
    width: 780px;
    display: block;

    &.hide {
      display: none;
    }
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .img-slide {
    .play-btn {
      width: 125px;
      cursor: pointer;
      z-index: 2;

      display: block;

      &.hide {
        display: none;
      }
    }

    .video-img {
      width: 800px;
      display: block;

      &.hide {
        visibility: hidden;
      }
    }

    video {
      width: 100%;
    }
  }
  // .fullscreen {
  //   height: auto;
  // }
}

@media screen and (max-width: 767px) {
  .bg {
    align-content: center;
    padding: 0;
  }

  .fullscreen {
    height: auto !important;
  }

  .img1 {
    top: 0;
    left: 0;
    width: 30vw;
  }

  .img2 {
    position: relative;
  }

  .text {
    position: relative;
    left: 0;
    right: 0;
    top: auto;
    margin: 0 auto;
    margin-top: 30px;
    width: 90vw;

    .title {
      font-size: 24px;
    }

    .desc {
      font-size: 16px;
    }
  }

  .img-slide {
    width: 100vw;
    // position: relative;
    z-index: 15;
    .play-btn {
      width: 80px;
      cursor: pointer;
      z-index: 15;

      display: block;

      &.hide {
        display: none;
      }
    }

    .video-img {
      width: 100vw;
      display: block;

      &.hide {
        display: none;
      }
    }

    video {
      width: 100%;
    }
  }

  .btn-group {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 25%;
    z-index: 12;

    img {
      width: 25px;
      cursor: pointer;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import slider from '@/mixins/slider.js'

export default {
  name: 'section10',
  components: {
    Carousel3d,
    Slide,
  },

  mixins: [slider],

  data() {
    return {
      isMobile,
      isTablet,
      currentIndex: 0,
      slideList: [
        {
          img: require('./s10/1.jpg'),
        },
        {
          img: require('./s10/2.jpg'),
        },
        {
          img: require('./s10/3.jpg'),
        },
        {
          img: require('./s10/4.jpg'),
        },
        {
          img: require('./s10/5.jpg'),
        },
        {
          img: require('./s10/6.jpg'),
        },
        {
          img: require('./s10/7.jpg'),
        },
        {
          img: require('./s10/8.jpg'),
        },
        {
          img: require('./s10/9.jpg'),
        },
        {
          img: require('./s10/10.jpg'),
        },
      ],
      imgWidth: 780,
      imgHeight: 540,
    }
  },

  mounted() {
    if (this.isTablet) {
      this.imgWidth = 800
      this.imgHeight = 450
    }
    if (this.isMobile) {
      this.imgWidth = window.screen.width
      this.imgHeight = window.screen.width * (450 / 800)
    }
  },

  methods: {
    pauseAll() {
      this.slideList[0].isPlay = false
      this.$refs[`video${0}`][0].pause()
      this.slideList[1].isPlay = false
      this.$refs[`video${1}`][0].pause()
      this.slideList[2].isPlay = false
      this.$refs[`video${2}`][0].pause()
    },
    // pausePlay(index) {
    //   this.slideList[index].isPlay = false
    //   this.$refs[`video${index}`][0].pause()
    // },
    handlePlay(index) {
      if (this.slideList[index].isPlay) {
        this.slideList[index].isPlay = false
        this.$refs[`video${index}`][0].pause()
      } else {
        this.slideList[index].isPlay = true
        this.$refs[`video${index}`][0].play()
      }
    },

    goToSlide(index) {
      this.$refs.mycarousel.goSlide(index)
    },

    onAfterSlideChange(index) {
      this.currentIndex = index
      this.pauseAll()
    },
  },
}
</script>
