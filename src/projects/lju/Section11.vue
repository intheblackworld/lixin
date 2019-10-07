<template>
  <div class="section11">
    <div class="bg relative">
      <img
        src="./s10_tree.png"
        alt
        v-if="isMobile"
        class="m-tree absolute"
        :data-aos="!isMobile ? 'fade' : 'fade-up'"
        data-aos-offset="50"
        data-aos-delay="1000"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
      />
      <div class="flex-jb flex-at wrap bottom custom">
        <div
          class="slide relative"
          :data-aos="!isMobile ? 'fade' : 'fade-up'"
          data-aos-offset="50"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s4-slide-${index}`"
            :src="slide.src"
            alt
          />

          <div class="btn-group flex-jb flex-ac">
            <img @click="addIndex" src="./small_left_btn.png" alt />
            <img @click="decIndex" src="./small_right_btn.png" alt />
          </div>
        </div>
        <div
          class="content wrap flex-jr"
          :data-aos="!isMobile ? 'fade' : 'fade-up'"
          data-aos-offset="50"
          data-aos-delay="600"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h3 class="border flex-c" v-if="isMobile">兩房</h3>
          <h3
            class="title"
            v-html="(isMobile || isTablet) ? '面寬三米五<br />靈活彈性好運用' : '面寬三米五，靈活彈性好運用'"
          ></h3>
          <div
            class="desc"
            v-if="!isMobile"
            v-html="(isTablet) ? '<p>大面窗寬裕舒適的空間，是家人起居<br />生活的好地方</p><p>可自由調整的+1變化，讓家裡安排更<br />有彈性更加溫馨</p>' : '<p>大面窗寬裕舒適的空間，是家人起居生活的好地方</p><p>可自由調整的+1變化，讓家裡安排更有彈性更加溫馨</p>'"
          ></div>
          <div class="desc" v-else>
            <p>
              大面窗寬裕舒適的空間，是家人起居生活的好地方。
              可自由調整的+1變化，讓家裡安排更有彈性更加溫馨
            </p>
          </div>
          <h3 class="border flex-c" v-if="!isMobile">兩房</h3>
        </div>
      </div>
      <!-- <img
        src="./s11_tree_2.png"
        alt
        class="tree-2 absolute"
        :data-aos="!isMobile ? 'fade' : 'fade'"
        data-aos-offset="50"
        data-aos-delay="300"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
      />-->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s10_bg.jpg');
  padding-top: 4vh;

  .icon-1 {
    margin: 0 30px;
    height: 20vh;
  }

  .tree-1 {
    left: 0;
    bottom: 0;
    height: 56vh;
  }

  .tree-2 {
    bottom: 0;
    height: 10vh;
    right: 30%;
  }

  .bottom {
    flex-direction: row-reverse;
    // padding-bottom: 12vh;
  }

  .slide {
    width: 50%;

    height: auto;
    margin-top: 30px;

    .slide-img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &.active {
        position: relative;
      }
    }

    .btn-group {
      width: 95%;
      bottom: 45%;
    }
  }

  .content {
    color: #231815;
    padding: 30px;
    width: 50%;
    position: relative;
    z-index: 2;
    .border {
      width: 103px;
      height: 103px;
      border: 1px solid #231815;
      font-size: 42px;
      color: #231815;
    }

    .title {
      font-size: 34px;
      margin-bottom: 20px;
      text-align: right;
    }

    .desc {
      font-size: 17px;
      text-align: right;
      margin-bottom: 30px;
      line-height: 1.5;
      width: 100%;
    }
  }
}

.custom {
  display: flex;
  margin: 0 auto;
  width: 1440px;
  padding-right: 200px;
  max-width: 100vw;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    width: 100vw;
    padding-top: 30px;

    .tree-1 {
      height: 30vh;
    }
  }

  .custom {
    padding-right: 0px;
  }

  .tree-2 {
    margin-top: 150px !important;
  }

  .bg {
    width: 100vw;

    .slide {
      width: 65%;
      height: 460px;
      .btn-group {
        bottom: 27vh;
      }
    }

    .content {
      width: 35%;
    }

    .text {
      .title {
        font-size: 6vh;
      }
    }

    .content {
      .title {
        line-height: 1.3;
      }
    }
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .bg {
    width: 100vw;
    height: auto;
    background-image: url('./s10_bg.jpg');
    padding-top: 0px;
  }

  .custom {
    padding-right: 0px;
  }

  .bg {
    .icon-1 {
      margin: 0;
    }

    .tree-1,
    .tree-2 {
      display: none;
    }

    .text {
      text-align: center;
      .title {
        font-size: 30px;
        color: #231815;
        margin-bottom: 20px;
      }

      .desc {
        font-size: 15px;
        color: #231815;
      }
    }

    .slide {
      width: 100vw;
      height: calc(100vw * (503 / 885));
      margin-top: 0px;

      .slide-img {
        width: 100%;

        &.active {
          position: relative;
        }
      }

      .btn-group {
        width: 100vw;
        bottom: calc(100vw * (200 / 885));
      }
    }

    .m-tree {
      left: auto;
      bottom: 0;
      right: 0;
      width: 20vw;
    }

    .content {
      color: #231815;
      padding: 30px;
      width: 40vw;
      position: relative;
      z-index: 2;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row !important;
      .border {
        width: 63px;
        height: 63px;
        border: 1px solid #231815;
        font-size: 28px;
        color: #231815;
        margin-bottom: 20px;
        display: flex;
        margin-right: 20px;
      }

      .title {
        width: 170px;
        font-size: 24px;
        line-height: 1.3;
        margin-bottom: 20px;
        text-align: left;
        display: inline-block;
      }

      .desc {
        font-size: 14px;
        text-align: left;
        line-height: 1.4;
        text-align: justify;
      }
    }
  }
}
</style>

<script>
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section11',
  mixins: [slider],
  components: {},

  data() {
    return {
      isMobile,
      isTablet,
      slideList: [
        {
          src: require('./s11_img_1.jpg'),
        },
        {
          src: require('./s11_img_2.jpg'),
        },
      ],
    }
  },

  methods: {},
}
</script>
