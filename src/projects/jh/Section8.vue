<template>
  <div class="section8">
    <div class="container relative">
      <img src="./s8/bg1.png" alt class="bg-img" v-if="!isMobile" />
      <div class="title-block">
        <h3 class="title">精工團隊</h3>
        <div class="subtitle">The Team</div>
      </div>
      <div class="block b2">
        <div class="title">
          <p>工藝V.S品質的營建美學</p>
          <span>Elite Decorative Arts</span>
        </div>
        <div class="desc">品味需要時間淬煉，築禾建設從建築外觀、景觀規劃及公設設計等，集結業界名師設計團隊，為居住者提供最卓越超群的生活豐景。</div>
        <div class="content left">
          <div>
            <div class="label">建築設計</div>
            <h3 class="title">吳成榮建築師</h3>
            <div class="subtitle">Architecture Design</div>
            <div class="item-list" v-if="!isMobile">
              <div
                class="item"
                v-for="slide in slideList1"
                :key="slide.title"
                @click="showDialog(slide)"
              >
                <img :src="slide.src" alt />
                <div class="item-title">{{slide.title}}</div>
              </div>
            </div>
          </div>
        </div>
        <div :class="`slide relative`" v-if="isMobile">
          <img
            v-for="(slide, index) in slideList1"
            :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`"
            :key="`s8-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="name">{{slideList1[slideIndex1].title}}</div>
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decMultiIndex(1)" src="./arrow-left.png" alt />
            <img @click="addMultiIndex(1)" src="./arrow-right.png" alt />
          </div>
        </div>
      </div>

      <div class="block b3">
        <div class="content left">
          <div>
            <div class="label">公設規劃</div>
            <h3 class="title">磐石空間</h3>
            <div class="subtitle">Public Space Design</div>
            <div class="item-list" v-if="!isMobile">
              <div
                class="item"
                v-for="slide in slideList2"
                :key="slide.title"
                @click="showDialog(slide)"
              >
                <img :src="slide.src" alt />
                <div class="item-title">{{slide.title}}</div>
              </div>
            </div>
          </div>
        </div>
        <div :class="`slide relative`" v-if="isMobile">
          <img
            v-for="(slide, index) in slideList2"
            :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`"
            :key="`s8-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="name">{{slideList2[slideIndex2].title}}</div>
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decMultiIndex(2)" src="./arrow-left.png" alt />
            <img @click="addMultiIndex(2)" src="./arrow-right.png" alt />
          </div>
        </div>
      </div>
      <div class="block b4">
        <div class="content right">
          <div>
            <div class="label">景觀設計</div>
            <h3 class="title">老圃景觀</h3>
            <div class="subtitle">Landscape Design</div>
            <div class="item-list" v-if="!isMobile">
              <div
                class="item"
                v-for="slide in slideList3"
                :key="slide.title"
                @click="showDialog(slide)"
              >
                <img :src="slide.src" alt />
                <div class="item-title">{{slide.title}}</div>
              </div>
            </div>
          </div>
        </div>
        <div :class="`slide relative`" v-if="isMobile">
          <img
            v-for="(slide, index) in slideList3"
            :class="`slide-img ${slideIndex3 === index ? 'active' : ''}`"
            :key="`s8-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="name">{{slideList3[slideIndex3].title}}</div>
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decMultiIndex(3)" src="./arrow-left.png" alt />
            <img @click="addMultiIndex(3)" src="./arrow-right.png" alt />
          </div>
        </div>
      </div>
      <div :class="`dialog ${isDialogShow ? 'show' : ''}`">
        <div class="relative">
          <img src="./s4/close.png" alt class="close" @click="isDialogShow = false" />
          <img :src="currentDialogImg" class="detail" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section8 {
  overflow: hidden;
}
.bg-img {
  width: 100%;
  display: block;
}

.title-block {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50px;
}

.content {
  display: flex;
  align-items: center;
  width: 990px;
  height: 590px;
  margin: 0 auto;
  &.left {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }

  .label {
    font-size: 18px;
    text-align: left;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .title {
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 5px;
    text-align: left;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .subtitle {
    font-family: Playball;
    font-size: 20px;
    text-align: left;
    color: #ffffff;
    margin-bottom: 30px;
  }

  .item-list {
    width: 440px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .item {
    margin-bottom: 15px;
    cursor: pointer;
    img {
      width: 205px;
      border: 1px solid #e6b048 !important;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        border-color: #fff !important;
      }
    }

    .item-title {
      font-size: 16px;
      margin-top: 5px;
      text-align: center;
      color: #ffffff;
    }
  }
}

.block {
  width: 100%;
  height: 700px;
  background-image: url('./s8/bg2.jpg');
  background-size: cover;
  margin-top: -40px;

  &.b2 {
    background-image: url('./s8/bg2.jpg');
  }

  &.b3 {
    background-image: url('./s8/bg3.jpg');
  }

  &.b4 {
    background-image: url('./s8/bg4.jpg');
  }

  .title {
    margin-bottom: 20px;
    p {
      font-size: 24px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 5px;
    }

    span {
      font-family: Playball;
      font-size: 18px;
      text-align: center;
      color: #ffffff;
    }
  }

  .desc {
    font-size: 18px;
    line-height: 1.67;
    letter-spacing: 1.8px;
    text-align: left;
    color: #ffffff;
    width: 740px;
    margin: 0 auto;
  }
}

.container {
  width: 1440px;
  margin: 0 auto;
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
    width: 600px;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }

  .bg-img {
    height: 300px;
  }

  .container {
    width: 100vw;
    margin: 0 auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 100vw;
    margin: 0 auto;
  }

  .block {
    &.b2,
    &.b3 {
      background-position: -340px;
      padding-left: 40px;
    }

    &.b4 {
      background-position: 0px;
      padding-right: 40px;
    }
  }
}

@media screen and (max-width: 767px) {
  .container {
    width: 100vw;
    margin: 0 auto;
    background: #000;
  }

  .block {
    height: auto;
    margin-top: 0;
    > .title {
      padding-top: 200px;
    }

    .desc {
      width: 90vw;
      line-height: 1.5;
    }

    &.b2,
    &.b3,
    &.b4 {
      background-image: none;
    }

    &.b2 {
      .content {
        background-image: url('./s8/mo/1_01.jpg');
      }
    }

    &.b3 {
      .content {
        background-image: url('./s8/mo/2_01.jpg');
      }
    }

    &.b4 {
      .content {
        background-image: url('./s8/mo/3_01.jpg');
      }
    }

    .content {
      width: 100vw;
      padding-left: 5vw;
      background-size: cover;
      height: calc(100vw * (445 / 750));
      align-items: flex-end;
      padding-bottom: 30px;

      &.right {
        justify-content: flex-start;
      }

      .label {
        font-size: 14px;
        margin-bottom: 7px;
      }

      .title {
        font-size: 30px;
        margin-bottom: 7px;
      }

      .subtitle {
        font-size: 14px;
        margin-bottom: 7px;
      }
    }
  }

  .slide {
    .name {
      position: absolute;
      right: 0;
      margin: 0 auto;
      bottom: 0;
      font-size: 17px;
      color: #fff;
      letter-spacing: 2px;
      background: rgba(0, 0, 0, 0.6);
      padding: 5px 15px;
      border-top-left-radius: 15px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

import slider from '@/mixins/slider.js'
export default {
  name: 'section8',
  mixins: [slider],

  methods: {
    showDialog(slide) {
      this.currentDialogImg = slide.src
      this.isDialogShow = true
    },
  },

  data() {
    return {
      isMobile,
      slideIndex1: 0,
      slideList1: [
        {
          title: '泰禾基河路',
          src: require('./s8/泰禾基河路.jpg'),
        },
        {
          title: '奧斯卡仁愛路',
          src: require('./s8/奧斯卡仁愛路.jpg'),
        },
        {
          title: '花蓮洄瀾灣',
          src: require('./s8/花蓮洄瀾灣.jpg'),
        },
        {
          title: '鄉林中港路',
          src: require('./s8/鄉林中港路.jpg'),
        },
      ],

      slideIndex2: 0,
      slideList2: [
        {
          title: '冠德遠見',
          src: require('./s8/冠德遠見.jpg'),
        },
        {
          title: '草山清境',
          src: require('./s8/草山清境.jpg'),
        },
        {
          title: '麗寶芙蓉匯',
          src: require('./s8/麗寶芙蓉匯.jpg'),
        },
        {
          title: '麗寶雙璽',
          src: require('./s8/麗寶雙璽.jpg'),
        },
      ],

      slideIndex3: 0,
      slideList3: [
        {
          title: '宏盛帝寶',
          src: require('./s8/宏盛帝寶.jpg'),
        },
        {
          title: '寶徠花園',
          src: require('./s8/寶徠花園.jpg'),
        },
        {
          title: '冠德遠見',
          src: require('./s8/冠德遠見.jpg'),
        },
        {
          title: '慕夏四季',
          src: require('./s8/慕夏四季.jpg'),
        },
      ],
      currentDialogImg: '',
      isDialogShow: false,
    }
  },
}
</script>
