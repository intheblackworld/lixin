<template>
  <div class="section4">
    <div class="bg relative">
      <div class="container">
        <div class="content" data-aos="fade-right" data-aos-delay="0">
          <div class="title">時尚美學 在家展演</div>
          <hr />
          <div class="desc" v-html="slideList[slideIndex].desc"></div>
        </div>
        <div class="slide relative" data-aos="fade-left" data-aos-delay="500">
          <div class="name">{{slideList[slideIndex].name}}</div>
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s10-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decIndex" src="./left_btn.png" alt />
            <img @click="addIndex" src="./right_btn.png" alt />
          </div>
        </div>
      </div>
      <img src="./s7/circle.png" alt class="circle" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-image: url('./s1/bg.png');
  position: relative;
  overflow: hidden;
  position: relative;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;
}

.title {
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2;
  text-align: left;
  color: #231916;
  margin-bottom: 25px;
}

.desc {
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: left;
  color: #595857;
  white-space: nowrap;
}

.circle {
  position: absolute;
  left: -80px;
  top: 20%;
  z-index: 2;
}

.slide {
  width: 690px;
  overflow: hidden;

  .name {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 20px;
    color: #fff;
    z-index: 4;
  }

  .btn-group {
    width: 95%;
    bottom: 50%;

    img {
      width: 20px;
    }
  }
}

.content {
  width: 480px;
  margin-left: 20px;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }

  .slide {
    width: 810px;
  }

  .content {
    width: 420px;
    margin-right: 10px;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 100vw;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 50px;
  }

  .title {
    font-size: 30px;
    font-weight: bold;
    line-height: 1.2;
    text-align: left;
    color: #231916;
    margin-bottom: 25px;
  }

  .desc {
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: -0.1px;
    text-align: left;
    color: #595857;
  }

  .circle {
    position: absolute;
    right: -10%;
    top: 20%;
  }

  .slide {
    width: 565px;

    .btn-group {
      width: 95%;
      bottom: 50%;

      img {
        width: 20px;
      }
    }
  }

  .content {
    width: 420px;
    margin-right: 10px;
  }
}

@media screen and (max-width: 767px) {
  .container {
    width: 100vw;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 0px;
    flex-wrap: wrap;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
    text-align: left;
    color: #231916;
    margin-bottom: 25px;
  }

  .desc {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.1px;
    text-align: left;
    color: #595857;
  }

  .circle {
    position: absolute;
    left: -70%;
    top: -10%;
    z-index: 1;
  }

  .slide {
    width: 100vw;
    z-index: 2;

    .name {
      font-size: 16px;
    }

    .btn-group {
      width: 95%;
      bottom: 50%;

      img {
        width: 20px;
      }
    }
  }

  .content {
    width: 100vw;
    padding: 40px 5% 20px 0%;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

import slider from '@/mixins/slider.js'
export default {
  name: 'section4',
  mixins: [slider],

  methods: {},

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s7/1.jpg'),
          name: '現場實景',
          desc: '．精品設計感衛浴，營造家中最享受的時尚秘境',
        },
        {
          src: require('./s7/2.jpg'),
          name: '現場實景',
          desc:
            '．櫻花多功能一體式櫥櫃，冰箱上面也為你做好做滿<br />．5+5膠合抗UV強化玻璃。隔熱、防曬，豪宅級高規格',
        },
      ],
    }
  },
}
</script>
