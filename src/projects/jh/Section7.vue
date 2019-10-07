<template>
  <div class="section7">
    <div class="bg fullscreen">
      <div :class="`slide relative fullscreen`">
        <div class="title-block">
          <h3 class="title">究好的構築</h3>
          <div class="subtitle">Zhuhe Architecture</div>
        </div>
        <div class="menu-group" v-if="!isMobile">
          <div :class="`menu ${slideIndex === 0 ? 'active': ''}`" @click="slideIndex = 0">
            <h3 class="menu-title">築禾初衷</h3>
            <div class="menu-desc">ZHUHE Theory</div>
          </div>
          <div :class="`menu ${slideIndex === 1 ? 'active': ''}`" @click="slideIndex = 1">
            <h3 class="menu-title">品牌基石</h3>
            <div class="menu-desc">The Brand</div>
          </div>
          <div :class="`menu ${slideIndex === 2 ? 'active': ''}`" @click="slideIndex = 2">
            <h3 class="menu-title">理念觸發</h3>
            <div class="menu-desc">The Concept</div>
          </div>
        </div>
        <img
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s7-slide-${index}`"
          :src="isMobile ? slide.srcM : slide.src"
          alt
        />
        <div class="btn-group flex-jb flex-ac flex-mobile-jb" v-if="isMobile">
          <img @click="decIndex" src="./arrow-left.png" alt />
          <img @click="addIndex" src="./arrow-right.png" alt />
        </div>
      </div>
      <div class="text">
        <div class="title">
          <h3>{{slideList[slideIndex].title}}</h3>
          <span>{{slideList[slideIndex].smalltitle}}</span>
        </div>
        <div class="subtitle1">{{slideList[slideIndex].subtitle1}}</div>
        <div class="subtitle2">{{slideList[slideIndex].subtitle2}}</div>
        <div class="desc" v-html="slideList[slideIndex].desc"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: relative;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.title-block {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 70px;
  z-index: 2;
}

.menu-group {
  position: absolute;
  top: 250px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  width: 450px;
  justify-content: space-between;
  z-index: 2;
  .menu {
    background: url('./s7/menubg.png');
    background-size: cover;
    width: 135px;
    height: 72px;
    padding-top: 15px;
    cursor: pointer;
  }

  .menu-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #ffe1a6;
    transition: all 0.3s;
  }

  .menu-desc {
    font-family: Playball;
    font-size: 16px;
    text-align: center;
    color: #ffe1a6;
    margin-top: 5px;
  }

  .menu:hover,
  .menu.active {
    .menu-title {
      color: #fff;
    }
  }
}

.text {
  position: absolute;
  left: 50vw;
  bottom: 10%;
  width: 528px;
  height: 391px;
  background: rgba(230, 176, 72, 1);
  padding: 50px;

  .title {
    margin-bottom: 15px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    h3 {
      font-size: 44.5px;
      font-weight: bold;
      text-align: left;
      color: #ffffff;
    }

    span {
      font-size: 27px;
      text-align: left;
      font-family: Playball;
      color: #ffffff;
    }
  }

  .subtitle1 {
    font-size: 24px;
    text-align: left;
    color: #312000;
  }

  .subtitle2 {
    font-family: Playball;
    font-size: 18px;
    text-align: left;
    color: #312000;
    margin-top: 5px;
  }

  .desc {
    margin-top: 25px;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.67;
    letter-spacing: 1.8px;
    text-align: justify;
    color: #ffffff;
  }
}

.slide {
  width: 100vw;
  height: 100%;

  .btn-group {
    z-index: 5;
  }
}

.fullscreen {
  min-height: 900px;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    min-height: 800px;
    height: auto;
  }

  .text {
    height: 320px;
    bottom: 5%;
    padding: 30px;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }

  .fullscreen {
    min-height: auto;
    height: 100vh;
  }

  .text {
    bottom: 40px;
    height: 350px;
  }
}

@media screen and (max-width: 767px) {
  .fullscreen {
    min-height: auto;
  }

  .title-block {
    margin-bottom: 0px;
  }

  .title {
    top: 40px;
  }

  .text {
    top: 200px;
    width: 90vw;
    height: 260px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 30px;

    .title {
      h3 {
        font-size: 30px;
      }

      span {
        font-size: 18px;
      }
    }

    .subtitle1 {
      font-size: 16px;
    }

    .subtitle2 {
      font-size: 12px;
    }

    .desc {
      font-size: 12px;
    }
  }

  .fullscreen {
    height: auto !important;
  }

  .slide {
    width: 100vw;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section7',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s7/1.png'),
          srcM: require('./s7/1m.jpg'),
          title: '築禾初衷',
          smalltitle: 'ZHUHE Theory',
          subtitle1: '您一輩子的居住風景，我一輩子的大事',
          subtitle2: 'Live a Good Life Spend a Good Time',
          desc:
            '從琢磨最好的細節開始，才能一直做到更好的穩健基石，驅策立身感動於「成家立業」這樣的好事，更以處處用心、事事縝密的建築造詣，企欲打造如同以作曲家兼指揮家的理念熱情，詮釋著綿密交織的情感磅礡、餘韻悠長之傳世Melody！',
        },
        {
          src: require('./s7/2.png'),
          srcM: require('./s7/2m.jpg'),
          title: '品牌基石',
          smalltitle: 'The Brand',
          subtitle1: '真誠V.S信賴的空間對策',
          subtitle2: 'Wonderland，BEAUTIFUL True',
          desc:
            '蓋房，不只構築人們與生活情感共生的場域，更為了造建與購屋者間最貼近的對話與信任；我們衷心懷抱對土地的熱情，進而勾勒出理想願景的藍圖想像，讓生活回到初心，嚐出簡單不平凡的生活原味。',
        },
        {
          src: require('./s7/3.png'),
          srcM: require('./s7/3m.jpg'),
          title: '理念觸發',
          smalltitle: 'The Concept',
          subtitle1: '宏觀V.S微觀的堅持意念',
          subtitle2: 'Fabulous Architecture',
          desc:
            '理念1. 以人為本，深化專業以力築誠信<br />理念2. 築夢踏實，造就創新的理念基石<br />理念3. 榮耀城市，建築幸福的美好效應<br />理念4. 見微知著，呼應身心靈居住場域<br />',
        },
      ],
    }
  },
  methods: {},

  created() {},
}
</script>
