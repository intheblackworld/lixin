<template>
  <div class="section4">
    <div class="bg relative">
      <div class="container">
        <div class="slide relative" data-aos="fade-right" data-aos-delay="0">
          <div class="name" v-html="slideList[slideIndex].name"></div>
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
          <div class="title">三峽靜好 細細品嚐</div>
          <hr>
          <div class="desc" v-html="slideList[slideIndex].desc"></div>
        </div>
      </div>
      <img src="./s6/circle.png" alt class="circle" />
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
  margin-top: 50px;
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

hr {
  color: #776b39;
}

.circle {
  position: absolute;
  right: -40px;
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
    line-height: 1.2;
    z-index: 4;
    text-align: right;
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
  width: 380px;
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
    right: -30%;
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
    padding: 40px 5% 20px 10%;
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
          src: require('./s8/1.jpg'),
          name: '二高實景',
          desc: '．北二高 一下就到<br />入籍三峽，最輕近的一回',
        },
        {
          src: require('./s8/2.jpg'),
          name: '北大實景',
          desc: '．台北大學 學森活<br />大安公園2倍大，天龍國也讚嘆',
        },
        {
          src: require('./s8/3.jpg'),
          name: '北大實景',
          desc: '．台北大學 學森活<br />大安公園2倍大，天龍國也讚嘆',
        },
        {
          src: require('./s8/4.jpg'),
          name: '三峽老街實景',
          desc: '．三峽老街 品人文<br />想逛就來去，免跟遊客擠',
        },
        {
          src: require('./s8/5.jpg'),
          name: '情境示意圖<br />公車站實景',
          desc: '．三鶯捷運 Ready Go<br />建設看得見！ 2023就通車',
        },
        {
          src: require('./s8/6.jpg'),
          name: '情境示意圖<br />公車站實景',
          desc: '．三鶯捷運 Ready Go<br />建設看得見！ 2023就通車',
        },
        {
          src: require('./s8/7.jpg'),
          name: '公園實景',
          desc: '．河濱公園 狗狗go<br />揮汗壘球場，河堤步道草原毛孩天堂',
        },
        {
          src: require('./s8/8.jpg'),
          name: '情境示意圖<br />恩主公醫院實景',
          desc: '．看顧全家 恩主公<br />恩主公醫院，守護全家無後顧之憂',
        },
        {
          src: require('./s8/9.jpg'),
          name: '情境示意圖<br />恩主公醫院實景',
          desc: '．看顧全家 恩主公<br />恩主公醫院，守護全家無後顧之憂',
        },
      ],
    }
  },
}
</script>
