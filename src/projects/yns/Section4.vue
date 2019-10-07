<template>
  <div class="section4">
    <div class="bg relative">
      <div class="container">
        <div class="slide relative" data-aos="fade-right" data-aos-delay="0">
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
        <div class="content" data-aos="fade-left" data-aos-delay="500">
          <div class="title">與山對話 與你交心</div>
          <hr>
          <div class="desc" v-html="slideList[slideIndex].desc"></div>
        </div>
      </div>
      <img src="./s4/circle.png" alt class="circle" />
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
  margin-top: 100px;
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
  right: -100px;
  top: 20%;
}

.slide {
  width: 855px;
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
  width: 350px;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
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
    width: 625px;

    .btn-group {
      width: 95%;
      bottom: 50%;

      img {
        width: 20px;
      }
    }
  }

  .content {
    width: 350px;
    margin-right: 10px;
  }
}

@media screen and (max-width: 767px) {
  .container {
    width: 100vw;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 0px;
    flex-direction: column-reverse;
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
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.1px;
    text-align: left;
    color: #595857;
  }

  .circle {
    position: absolute;
    right: -10%;
    top: 0%;
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
    padding: 40px 10% 20px;
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
          src: require('./s4/img1.jpg'),
          name: '東南側3D外觀示意',
          desc: '建築展翅 越那山<br />向上開展的建築立框；載著夢想飛越鳶山',
        },
        {
          src: require('./s4/img2.jpg'),
          name: '東南側3D外觀示意',
          desc: '建築展翅 越那山<br />向上開展的建築立框；載著夢想飛越鳶山',
        },
        {
          src: require('./s4/img3.jpg'),
          name: '西北側3D外觀示意',
          desc: '質樸大器 寬心居 <br />質樸清水模vs磅礡大片原石，融入自然',
        },
        {
          src: require('./s4/img4.jpg'),
          name: '西北側3D外觀示意',
          desc: '質樸大器 寬心居 <br />質樸清水模vs磅礡大片原石，融入自然',
        },
        {
          src: require('./s4/img5.jpg'),
          name: '3D外觀示意',
          desc: '飯店尺度 高品味<br />挑高7米開闊大廳，回家開啟渡假心情',
        },
      ],
    }
  },
}
</script>
