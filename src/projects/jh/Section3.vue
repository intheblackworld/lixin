<template>
  <div class="section3">
    <div class="bg fullscreen">
      <carousel-3d
        ref="mycarousel"
        :width="videoWidth"
        :height="videoHeight"
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
          class="video-slide"
        >
          <img
            src="./s3/play_btn.png"
            alt
            :class="`play-btn absolute-c ${slide.isPlay ? 'hide' : ''}`"
            @click="handlePlay(index)"
          />
          <img :src="slide.img" :class="`video-img absolute ${slide.isPlay ? 'hide' : ''}`" />
          <video :ref="`video${index}`" class="video" @click="pauseAll">
            <source :src="slide.video" type="video/mp4" />
          </video>
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
}

.video-slide {
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
    width: 960px;
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
  .video-slide {
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

  .video-slide {
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
    bottom: 47%;
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
  name: 'section3',
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
          img: require('./s3/1.jpg'),
          video: require('./s3/20S_世紀地王篇_20190708.mp4'),
          isPlay: false,
        },
        {
          img: require('./s3/2.jpg'),
          video: require('./s3/30S_時間價值篇_20190708.mp4'),
          isPlay: false,
        },
        {
          img: require('./s3/4.jpg'),
          video: require('./s3/45S_永恆篇_20190708.mp4'),
          isPlay: false,
        },
      ],
      videoWidth: 960,
      videoHeight: 536,
    }
  },

  mounted() {
    if (this.isTablet) {
      this.videoWidth = 800
      this.videoHeight = 450
    }
    if (this.isMobile) {
      this.videoWidth = window.screen.width
      this.videoHeight = window.screen.width * (450 / 800)
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
