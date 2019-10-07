<template>
  <div class="section10">
    <div class="bg relative">
      <img v-if="!isMobile" src="./s10_footer.png" alt class="footer" />
      <img v-else src="./s10_footer_m.png" alt class="footer" />
      <img
        v-if="!isMobile"
        src="./s10_tree.png"
        alt
        class="tree-1 absolute"
        :data-aos="!isMobile ? 'fade' : 'fade'"
      />
      <img
        src="./s11_tree_1.png"
        alt
        class="tree-2 absolute"
        :data-aos="!isMobile ? 'fade' : 'fade'"
        data-aos-offset="50"
        data-aos-delay="300"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
      />
      <div class="head flex" v-if="isTablet">
        <img src="./s10_icon_1.png" alt />
        <div
          class="flex-ac wrap"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h3 class="title">放大幸福 加倍感動 大一點好室會發生!</h3>
          <p class="desc">空間大一點，驚喜多一點，想不到的細節都藏在這裡</p>
        </div>
      </div>
      <div
        class="head"
        v-if="isMobile"
        data-aos="fade"
        data-aos-offset="50"
        data-aos-delay="0"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <h3 class="title">
          放大幸福 加倍感動
          <br />大一點好室會發生!
        </h3>
        <p class="desc">空間大一點，驚喜多一點，想不到的細節都藏在這裡</p>
      </div>
      <div class="container flex-jb wrap">
        <div
          class="slide relative"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s10-slide-${index}`"
            :src="slide.src"
            alt
          />

          <div class="btn-group flex-jb flex-ac">
            <img @click="addIndex" src="./small_left_btn.png" alt />
            <img @click="decIndex" src="./small_right_btn.png" alt />
          </div>
        </div>
        <div
          class="content"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h3 class="title" v-if="!(isMobile || isTablet)">
            放大幸福 加倍感動
            <br />大一點好室會發生!
          </h3>
          <p class="desc" v-if="!(isMobile || isTablet)">空間大一點，驚喜多一點，想不到的細節都藏在這裡</p>
          <h3 class="border flex-c">三房</h3>
          <h3 class="small-title" v-if="!(isMobile || isTablet)">寬裕客餐廳，主臥加碼更衣室</h3>
          <h3 class="small-title" v-else>
            寬裕客餐廳
            <br />主臥加碼更衣室
          </h3>

          <p class="desc" v-if="!(isMobile || isTablet)">
            大尺碼客餐廳，是親朋來訪好友相聚小酌的完美場域
            <br />主臥室升級更衣室雙排儲櫃，老婆閨密講悄悄話的完美空間
          </p>
          <p class="desc" v-if="isTablet">
            大尺碼客餐廳，是親朋來訪好友相聚
            <br />小酌的完美場域
            <br />主臥室升級更衣室雙排儲櫃，老婆閨
            <br />密講悄悄話的完美空間
          </p>
          <p class="desc" v-if="isMobile">
            大尺碼客餐廳，是親朋來訪好友相聚
            小酌的完美場域
            <br />主臥室升級更衣室雙排儲櫃，老婆閨密講悄悄話的完美空間
          </p>
        </div>
        <img
          src="./s11_tree_2.png"
          alt
          v-if="isMobile"
          class="m-tree"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        />
      </div>
      <div class="container flex-jb wrap reverse">
        <img
          v-if="isMobile"
          src="./s10_tree.png"
          alt
          class="m-tree-2"
          :data-aos="!isMobile ? 'fade' : 'fade'"
        />
        <div
          class="content content-r"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h3 class="border flex-c" v-if="isMobile">兩房</h3>
          <h3 class="small-title" v-if="!(isMobile || isTablet)">面寬三米五，靈活彈性好運用</h3>
          <h3 class="small-title" v-else>
            面寬三米五
            <br />靈活彈性好運用
          </h3>
          <p class="desc" v-if="!(isMobile || isTablet)">
            大面窗寬裕舒適的空間，是家人起居生活的好地方
            <br />可自由調整的+1變化，讓家裡安排更有彈性更加溫馨
          </p>
          <p class="desc" v-if="isTablet">
            大面窗寬裕舒適的空間，是家人起居
            <br />生活的好地方
            <br />可自由調整的+1變化，讓家裡安排更
            <br />有彈性更加溫馨
          </p>
          <p class="desc" v-if="isMobile">
            大面窗寬裕舒適的空間，是家人起居生活的好地方
            <br />可自由調整的+1變化，讓家裡安排更有彈性更加溫馨
          </p>
          <h3 class="border flex-c" v-if="!isMobile">兩房</h3>
        </div>
        <div
          class="slide relative"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            v-for="(slide, index) in slideList2"
            :class="`slide-img ${slide2Index === index ? 'active' : ''}`"
            :key="`s11-slide-${index}`"
            :src="slide.src"
            alt
          />

          <div class="btn-group flex-jb flex-ac">
            <img @click="addIndex2" src="./small_left_btn.png" alt />
            <img @click="decIndex2" src="./small_right_btn.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/style/variableDefault.scss';

.bg {
  background-image: url('./s10_bg.jpg');
  position: relative;

  .footer {
    width: 100vw;
  }

  .tree-1 {
    top: 20vh;
    right: 0;
    width: 14vw;
  }

  .tree-2 {
    left: 0;
    bottom: 0;
    width: 33vw;
  }

  .container {
    width: 100vw;

    max-width: 1440px;
    margin: 0 auto;
    padding-top: 60px;
    z-index: 1;
    position: relative;
  }

  .slide {
    width: 62%;
    height: auto;
    position: relative;

    .slide-img {
      width: 100%;

      &.active {
        position: relative;
      }
    }

    .btn-group {
      width: 95%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .content {
    width: 38%;
    text-align: left;
    padding-left: 40px;
    color: #231815;
    line-height: 1.5;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;

    &.content-r {
      padding-left: 0;
      padding-right: 40px;
      text-align: right;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: flex-end;

      .small-title {
        margin-bottom: 25px;
      }
    }

    > * {
      width: 100%;
    }

    .title {
      font-size: 49px;
      line-height: 1.3;
    }

    .desc {
      font-size: 17px;
    }

    .small-title {
      font-size: 36px;
      line-height: 1.5;
    }

    .border {
      width: 103px;
      height: 103px;
      margin-top: 40px;
      border: 1px solid #231815;
      font-size: 45px;
      font-weight: 400 !important;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    .head {
      text-align: left;
      align-content: center;
      color: #231815;
      margin-left: 20px;
      margin-top: 20px;
      img {
        width: 75px;
        height: 120px;
        margin-right: 30px;
      }

      .title {
        font-size: 45px;
        margin-bottom: 20px;
      }

      .desc {
        font-size: 23px;
      }
    }

    .content {
      .border {
        width: 63px;
        height: 63px;
        font-size: 28px;
      }
    }
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .tree-2 {
    display: none;
  }
  .bg {
    background-image: url('./s10_bg.jpg');
    position: relative;
    width: 100vw;

    .head {
      text-align: left;
      align-content: center;
      color: #231815;
      margin-left: 20px;
      margin-top: 20px;
      img {
        width: 75px;
        height: 120px;
        margin-right: 30px;
      }

      .title {
        font-size: 28px;
        line-height: 1.4;
        margin-bottom: 20px;
      }

      .desc {
        font-size: 14px;
      }
    }

    .footer {
      width: 100vw;
    }

    .tree-1 {
      top: 20vh;
      right: 0;
      width: 14vw;
    }

    .tree-2 {
      left: 0;
      bottom: 0;
      width: 33vw;
    }

    .container {
      width: 100vw;
      max-width: 1440px;
      margin: 0 auto;
      padding-top: 40px;
      z-index: 1;
      position: relative;
    }

    .slide {
      width: 100vw;
      height: auto;
      position: relative;

      .slide-img {
        width: 100%;

        &.active {
          position: relative;
        }
      }

      .btn-group {
        width: 95%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .content {
      width: 100%;
      text-align: left;
      padding-left: 20px;
      padding-right: 20px;
      color: #231815;
      line-height: 1.5;
      display: flex;
      flex-wrap: wrap;
      align-items: none;
      margin-top: 25px;

      &.content-r {
        padding-left: 0;
        padding-right: 40px;
        text-align: right;
        align-items: flex-start;
        align-content: flex-start;
        justify-content: flex-end;

        .small-title {
          margin-bottom: 25px;
        }
      }

      > * {
        width: auto;
      }

      .title {
        font-size: 49px;
        line-height: 1.3;
      }

      .desc {
        font-size: 14px;
        margin-top: 20px;
      }

      .small-title {
        font-size: 24px;
        line-height: 1.4;
      }

      .border {
        width: 63px;
        height: 63px;
        margin-top: 0px;
        margin-right: 20px;
        border: 1px solid #231815;
        font-size: 28px;
        font-weight: 400 !important;
      }
    }

    .m-tree {
      position: relative;
      left: 70%;
    }
  }

  .reverse {
    flex-direction: column-reverse;
    padding-top: 0 !important;

    .content {
      text-align: left !important;
      justify-content: flex-start !important;
      padding-left: 20px !important;
      padding-right: 20px !important;
      z-index: 1;

      .small-title {
        margin-bottom: 20px !important;
      }

      .desc {
        margin-top: 0 !important;
        margin-bottom: 80px;
      }
    }

    .m-tree-2 {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 20vw;
    }
  }
}
</style>

<script>
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section10',
  mixins: [slider],
  components: {},

  data() {
    return {
      isMobile,
      isTablet,
      slide2Index: 0,
      slideList: [
        {
          src: require('./s10_img_1.jpg'),
        },
        {
          src: require('./s10_img_2.jpg'),
        },
        {
          src: require('./s10_img_3.jpg'),
        },
      ],
      slideList2: [
        {
          src: require('./s11_img_1.jpg'),
        },
        {
          src: require('./s11_img_2.jpg'),
        },
      ],
    }
  },

  methods: {
    addIndex2() {
      this.slide2Index =
        this.slide2Index === this.slideList2.length - 1
          ? 0
          : this.slide2Index + 1
    },

    decIndex2() {
      this.slide2Index =
        this.slide2Index === 0
          ? this.slideList2.length - 1
          : this.slide2Index - 1
    },
  },
}
</script>
