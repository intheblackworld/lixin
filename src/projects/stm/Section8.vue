<template>
  <div class="section8">
    <div v-show="!isMobile">
      <div class="img-list flex-jb">
        <div
          class="img-item relative"
          v-for="(item, index) in slideList"
          :key="item.src"
          v-scroll-reveal.reset="$fadeInRight(300 * index)"
        >
          <img :src="item.src" alt="心天畝的圖片" />
          <div class="mask flex-c absolute wrap">
            <h3>{{item.title}}</h3>
            <p v-html="item.desc"></p>
          </div>
        </div>
      </div>
      <div class="row flex">
        <img v-scroll-reveal.reset="$fadeInUp(600)" src="./s8_tree.png" alt="心天畝的圖片" class="tree" />
        <div class="text">
          <h3 class="title" v-scroll-reveal.reset="$fadeInUp(300)">吃果子拜樹頭，效法大樹共好精神</h3>
          <div class="desc" v-scroll-reveal.reset="$fadeInUp(400)">
            春木林團隊深耕建築二十餘年，白手起家的拼搏精神
            <br />以一枝草一點露的感恩心情，持續不斷的累積品牌力量
          </div>
          <h3 class="title" v-scroll-reveal.reset="$fadeInUp(500)">陽光空氣水，基本卻最重要的價值</h3>
          <div class="desc" v-scroll-reveal.reset="$fadeInUp(600)">
            建築在華麗與機能的訴求以外，更要回歸基本的落實
            <br />春木林團隊每一塊土地的環境，都以此為本
          </div>
          <h3 class="title" v-scroll-reveal.reset="$fadeInUp(700)">用心把房子蓋到最好</h3>
          <div class="desc" v-scroll-reveal.reset="$fadeInUp(800)">耕耘建築，收穫幸福</div>
        </div>
      </div>
    </div>
    <div v-if="isMobile">
      <div class="row">
        <div class="text">
          <h3 class="title" v-scroll-reveal.reset="$fadeInUp(0)">吃果子拜樹頭，效法大樹共好精神</h3>
          <div class="desc" v-scroll-reveal.reset="$fadeInUp(100)">
            春木林團隊深耕建築二十餘年，白手起家的拼搏精神
            <br />以一枝草一點露的感恩心情，持續不斷的累積品牌力量
          </div>
          <h3 class="title" v-scroll-reveal.reset="$fadeInUp(200)">陽光空氣水，基本卻最重要的價值</h3>
          <div class="desc" v-scroll-reveal.reset="$fadeInUp(300)">
            建築在華麗與機能的訴求以外，更要回歸基本的落實
            <br />春木林團隊每一塊土地的環境，都以此為本
          </div>
          <h3 class="title" v-scroll-reveal.reset="$fadeInUp(400)">用心把房子蓋到最好</h3>
          <div class="desc" v-scroll-reveal.reset="$fadeInUp(500)">耕耘建築，收穫幸福</div>
        </div>
        <img v-scroll-reveal.reset="$fadeInUp(600)" src="./s8_tree.png" alt="心天畝的圖片" class="tree" />
      </div>
      <div class="slide relative" v-scroll-reveal.reset="$fadeInUp(700)">
        <img
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s4-slide-${index}`"
          :src="slide.src"
          alt
        />
        <div class="btn-group flex-jb flex-ac">
          <img @click="addIndex" src="./small_left_btn.png" alt="心天畝的圖片" />
          <div class="slide-text">
            <h3>{{slideList[slideIndex].title}}</h3>
            <hr />
            <p v-html="slideList[slideIndex].desc"></p>
          </div>
          <img @click="decIndex" src="./small_right_btn.png" alt="心天畝的圖片" />
        </div>
      </div>
    </div>
    <div v-show="!loading"></div>
  </div>
</template>
<style lang="scss" scoped>
.img-list {
  width: 840px;
  margin: 0 auto;
  transform: translateX(130px);
  .img-item {
    width: 202px;
    height: 248px;
    img {
      width: 100%;
    }

    &:hover {
      .mask {
        opacity: 1;
      }
    }

    .mask {
      width: 202px;
      height: 248px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      text-align: center;
      top: 0;
      opacity: 0;
      transition: all 0.5s;
      h3 {
        margin-top: 140px;
        font-size: 24px;
        border-bottom: 3px solid #fff;
        padding-bottom: 7px;
        margin-bottom: 10px;
        width: 80%;
      }

      p {
        width: 100%;
        font-size: 16px;
        margin-bottom: 15px;
        line-height: 1.5;
      }
    }
  }
}

.row {
  margin-top: 30px;

  .tree {
    margin-right: 80px;
  }

  .text {
    text-align: left;
    margin-top: 35px;

    .title {
      font-size: 24px;
      color: #2b466f;
      margin-bottom: 10px;
    }

    .desc {
      font-size: 16px;
      line-height: 1.5;
      color: #4d4d4d;
      margin-bottom: 30px;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .img-list {
    width: 630px;
    margin: 0 auto;
    transform: translateX(70px);
    .img-item {
      width: 150px;
      height: 184px;
      img {
        width: 100%;
      }

      &:hover {
        .mask {
          opacity: 1;
        }
      }

      .mask {
        width: 150px;
        height: 184px;
        h3 {
          margin-top: 90px;
          font-size: 18px;
          border-bottom: 3px solid #fff;
          padding-bottom: 7px;
          margin-bottom: 10px;
          width: 80%;
        }

        p {
          width: 100%;
          font-size: 12px;
          margin-bottom: 15px;
          line-height: 1.5;
        }
      }
    }
  }

  .row {
    margin-top: 30px;

    .tree {
      width: 386px;
      height: 342px;
      margin-right: 80px;
    }

    .text {
      text-align: left;
      margin-top: 35px;

      .title {
        font-size: 24px;
        color: #2b466f;
        margin-bottom: 10px;
      }

      .desc {
        font-size: 16px;
        line-height: 1.5;
        color: #4d4d4d;
        margin-bottom: 30px;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .row {
    margin-top: 30px;

    .tree {
      width: 60%;
      margin-right: 0px;
      margin: 0 auto;
      margin-bottom: 40px;
    }

    .text {
      text-align: left;
      width: 90%;
      margin: 0 auto;
      margin-top: 15px;

      .title {
        font-size: 16px;
        color: #2b466f;
        margin-bottom: 10px;
      }

      .desc {
        font-size: 14px;
        line-height: 1.5;
        color: #4d4d4d;
        margin-bottom: 30px;
      }
    }
  }
  .slide {
    width: 100vw;
    height: calc(100vw * (390 / 320) + 60px);
    margin-bottom: 30px;

    .slide-img {
      width: 100vw;
    }

    .btn-group {
      width: 220px;
      bottom: -10px;
    }

    .slide-text {
      width: 220px;
      padding-top: 13px;
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
export default {
  name: 'section8',
  mixins: [slider],
  data() {
    return {
      isMobile,
      loading: true,
      slideList: [
        {
          src: require('./s8_img1.png'),
          title: '大觀天下',
          desc: '林口第一環<br /> 黃金軸線 王者建築',
        },
        {
          src: require('./s8_img2.png'),
          title: '南方沐林',
          desc: '林口莊園特區<br /> 首購新家園',
        },
        {
          src: require('./s8_img3.png'),
          title: '世界心',
          desc: '林口第一環<br /> 文北大道 景觀建築',
        },
        {
          src: require('./s8_img4.png'),
          title: '親愛的House',
          desc: '林口核心環<br /> 23層摩天精品建築',
        },
      ],
    }
  },

  methods: {},

  mounted() {
    window.setTimeout(() => {
      this.loading = false
    }, 2000)
  },
}
</script>
