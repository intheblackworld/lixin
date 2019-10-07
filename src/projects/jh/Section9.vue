<template>
  <div class="section9">
    <div class="bg fullscreen">
      <div :class="`dialog ${isDialogShow ? 'show' : ''}`">
        <div class="relative">
          <img src="./s4/close.png" alt class="close" @click="isDialogShow = false" />
          <img :src="imgSrc" alt class="detail" />
        </div>
      </div>
      <div>
        <div class="title-block">
          <h3 class="title">歷年築跡</h3>
          <div class="subtitle">The Projects</div>
        </div>
        <div class="container" v-if="!isMobile">
          <div class="item" v-for="slide in slideList" :key="slide.src" @click="showDialog(slide)">
            <div class="title">{{slide.title}}</div>
            <img :src="slide.src" alt />
          </div>
        </div>
        <div :class="`slide relative`" v-if="isMobile">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s8-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="name">{{slideList[slideIndex].title}}</div>
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decIndex" src="./arrow-left.png" alt />
            <img @click="addIndex" src="./arrow-right.png" alt />
          </div>
        </div>
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
  justify-content: center;
  background-image: url('./s9/bg.png');
}

.container {
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .item {
    width: 20%;
    padding: 10px;
    img {
      width: 100%;
      margin: 10px 0;
      border: 1px solid #e6b048 !important;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        border-color: #fff !important;
      }
    }

    .title {
      font-size: 16px;
      text-align: center;
      color: #ffffff;
    }
  }
}

.dialog {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  &.show {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close {
    cursor: pointer;
    position: absolute;
    top: -70px;
    right: -70px;
    z-index: 2;
  }

  .detail {
    height: 70vh;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .container {
    width: 1240px;
    > img {
      width: 600px;
    }
  }
  .fullscreen {
    height: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 450px;
      cursor: pointer;
    }
  }

  .map-detail {
    width: calc(100vw * (800 / 1024));
  }
}

@media screen and (max-width: 767px) {
  .bg {
    padding: 0 0 40px;
  }

  .title-block {
    width: 100vw;
  }

  .fullscreen {
    height: auto !important;
  }

  .container {
    width: 100vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 50vw;
      // height: 300px;
      cursor: pointer;
    }
  }

  .map-detail {
    width: 100vw;
  }

  .dialog {
    .close {
      cursor: pointer;
      position: absolute;
      width: 50px;
      top: -70px;
      right: 0px;
      z-index: 2;
    }
  }

  .slide {
    width: 100vw !important;
    .name {
      position: absolute;
      right: 5vw;
      margin: 0 auto;
      bottom: 0;
      font-size: 17px;
      color: #fff;
      letter-spacing: 2px;
      background: rgba(0, 0, 0, 0.6);
      padding: 5px 15px;
      border-top-left-radius: 15px;
    }

    .slide-img {
      width: 90vw;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

import slider from '@/mixins/slider.js'
export default {
  name: 'section9',
  mixins: [slider],

  data() {
    return {
      isMobile,
      isDialogShow: false,
      imgSrc: '',
      slideList: [
        {
          src: require('./s9/築禾悅.jpg'),
          title: '築禾悅',
        },
        {
          src: require('./s9/築禾豐.jpg'),
          title: '築禾豐',
        },
        {
          src: require('./s9/築禾樂.jpg'),
          title: '築禾樂',
        },
        {
          src: require('./s9/築禾韻.jpg'),
          title: '築禾韻',
        },
        {
          src: require('./s9/築禾八里.jpg'),
          title: '築禾八里',
        },
      ],
    }
  },

  methods: {
    showDialog(slide) {
      this.isDialogShow = true
      this.imgSrc = slide.src
    },
  },
}
</script>
