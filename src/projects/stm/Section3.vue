<template>
  <div class="section3">
    <div class="container">
      <img v-scroll-reveal.reset="$fadeIn()" src="./s3_bg.png" alt="心天畝的圖片" class="bg" />
      <div class="flex row flex-jc mb-20">
        <div class="text">
          <h3 v-scroll-reveal.reset="$fadeInUp()" class="title flex-c mb-20">翻轉五股</h3>
          <h3 v-scroll-reveal.reset="isMobile ? $fadeInUp(400) : $fadeInUp()" class="sub-title ml-100">五股新未來 繁華乍現</h3>
          <p v-scroll-reveal.reset="isMobile ? $fadeInUp(400) : $fadeInUp()" class="small-title ml-100">30年城市演進觀點</p>

          <h3 v-scroll-reveal.reset="isMobile ? $fadeInUp(400) : $fadeInUp()" class="special-title ml-100">五股新市鎮計劃</h3>
          <p v-scroll-reveal.reset="isMobile ? $fadeInUp(400) : $fadeInUp()" class="desc ml-100">
            五股新市鎮朝向南港、新店等各城市
            <br />開發模式。結合產業升級，改變環境
            <br />生態，迎向五股城市新風貌
          </p>
        </div>
        <img v-scroll-reveal.reset="isMobile ? $fadeInLeft(400) : $fadeInUp()" class="img1" src="./s3_img1.png" alt="心天畝的圖片" />
      </div>

      <div class="flex row flex-c mb-90">
        <img class="img2" v-scroll-reveal.reset="isMobile ? $fadeInRight(400) : $fadeInUp()" src="./s3_img2.png" alt="心天畝的圖片" />
        <div class="text" v-scroll-reveal.reset="isMobile ? $fadeInUp(400) : $fadeInUp()">
          <h3 class="special-title">五股泰山輕軌計劃</h3>
          <p class="desc">
            捷運開發帶動資產上漲，看準輕軌潛
            <br />力。跟進輕軌五泰線，率先卡位捷運
            <br />資產效益。
          </p>
        </div>
      </div>

      <div class="flex row flex-c" v-if="!isMobile">
        <div class="text" v-scroll-reveal.reset="isMobile ? $fadeInUp(400) : $fadeInUp()">
          <h3 class="special-title no-border mb-40">
            城市蛻變有其脈絡可循
            <br />沿著軌跡遇見五股新未來
          </h3>
          <h3 class="label-title">效法南港經驗，轉型科技大城</h3>
          <p class="desc mb-40">
            南港從煙囪小鎮，經過半世紀的粹練，轉變
            <br />為科技軟體資訊城市與金融中心
          </p>

          <h3 class="label-title">追隨新店腳步，裕隆城新規模</h3>
          <p class="desc mb-40">
            新店裕隆汽車廠，跟著產經進化腳步，以複
            <br />合式開發計劃重新塑造新店樣貌
          </p>
        </div>
        <img v-scroll-reveal.reset="isMobile ? $fadeInLeft(400) : $fadeInUp()" class="img3" src="./s3_img3.png" alt="心天畝的圖片" />
      </div>

      <div class="flex row flex-c" v-if="isMobile">
        <img v-scroll-reveal.reset="isMobile ? $fadeInLeft(400) : $fadeInUp()" class="img3" src="./s3_img3.png" alt="心天畝的圖片" />
        <div class="text" v-scroll-reveal.reset="isMobile ? $fadeInUp(400) : $fadeInUp()">
          <h3 class="special-title no-border mb-40">
            城市蛻變有其脈絡可循
            <br />沿著軌跡遇見五股新未來
          </h3>
          <h3 class="label-title">效法南港經驗，轉型科技大城</h3>
          <p class="desc mb-40">
            南港從煙囪小鎮，經過半世紀的粹練，轉變
            <br />為科技軟體資訊城市與金融中心
          </p>

          <h3 class="label-title">追隨新店腳步，裕隆城新規模</h3>
          <p class="desc mb-40">
            新店裕隆汽車廠，跟著產經進化腳步，以複
            <br />合式開發計劃重新塑造新店樣貌
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section3 {
  position: relative;
}
.container {
  width: 980px;
  margin: 0 auto;

  .bg {
    width: 60%;
    position: absolute;
    display: block;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.41;
  }

  .row {
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .img1 {
    width: 367px;
    margin-left: 70px;
  }

  .img2 {
    width: 530px;
    margin-right: 70px;
  }

  .img3 {
    width: 583px;
    margin-left: 45px;
  }

  .text {
    text-align: left;
  }

  .title {
    width: 340px;
    height: 101px;
    background-image: url('./s3_title_bg.png');
    background-size: cover;
    margin-bottom: 30px;
    color: #fff;
    font-size: 28px;
  }

  .sub-title {
    font-size: 28px;
    color: #2b466f;
    margin-bottom: 10px;
  }

  .small-title {
    font-size: 24px;
    color: #2b466f;
    margin-bottom: 50px;
  }

  .special-title {
    font-size: 32px;
    color: #7b8125;
    display: inline-block;
    padding-bottom: 10px;
    border-bottom: 1px solid #4d4d4d;

    &.no-border {
      border: none;
    }
  }

  .label-title {
    font-size: 24px;
    color: #005b96;
    padding-left: 10px;
    border-left: 10px solid #999;
  }

  .desc {
    font-size: 16px;
    line-height: 1.25;
    color: #4d4d4d;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 724px;
    margin: 0 auto;

    .bg {
      width: 60%;
      position: absolute;
      display: block;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.41;
    }

    .row {
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .img1 {
      width: 271px;
      margin-left: 55px;
    }

    .img2 {
      width: 390px;
      margin-right: 70px;
    }

    .img3 {
      width: 430px;
      margin-left: 45px;
    }

    .text {
      text-align: left;
    }

    .title {
      width: 250px;
      height: 75px;
      background-image: url('./s3_title_bg.png');
      background-size: cover;
      margin-bottom: 20px;
      color: #fff;
      font-size: 20px;
    }

    .sub-title {
      font-size: 21px;
      color: #2b466f;
      margin-bottom: 10px;
    }

    .small-title {
      font-size: 18px;
      color: #2b466f;
      margin-bottom: 50px;
    }

    .special-title {
      font-size: 24px;
      color: #7b8125;
      display: inline-block;
      padding-bottom: 10px;
      border-bottom: 1px solid #4d4d4d;

      &.no-border {
        border: none;
      }
    }

    .label-title {
      font-size: 17px;
      color: #005b96;
      padding-left: 10px;
      border-left: 6px solid #999;
      margin-bottom: 10px;
    }

    .desc {
      font-size: 12px;
      line-height: 1.25;
      color: #4d4d4d;
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .container {
    width: 100%;
    margin: 0 auto;

    .bg {
      width: 60%;
      position: absolute;
      display: block;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.41;
    }

    .row {
      align-items: center;
      position: relative;
      z-index: 1;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }

    .img1 {
      width: 217px;
      margin: 0 auto;
      margin-top: 20px;
    }

    .img2 {
      width: 390px;
      margin-right: 0px;
    }

    .img3 {
      width: 430px;
      margin-left: 45px;
    }

    .text {
      text-align: center;
    }

    .title {
      width: 300px;
      height: 90px;
      margin: 0 auto;
      margin-top: 20px;
      background-image: url('./s3_title_bg.png');
      background-size: cover;
      margin-bottom: 20px;
      color: #fff;
      font-size: 32px;
    }

    .sub-title {
      font-size: 21px;
      color: #2b466f;
      margin-bottom: 10px;
      margin-left: 0;
    }

    .small-title {
      font-size: 18px;
      color: #2b466f;
      margin-bottom: 0px;
      margin-left: 0;
    }

    .special-title {
      font-size: 24px;
      color: #7b8125;
      display: inline-block;
      padding-bottom: 10px;
      border-bottom: 1px solid #4d4d4d;
      margin-bottom: 10px;
      margin-top: 30px;
      margin-left: 0;

      &.no-border {
        border: none;
      }
    }

    .label-title {
      font-size: 17px;
      color: #005b96;
      padding-left: 10px;
      border-left: 6px solid #999;
      margin-bottom: 10px;
    }

    .desc {
      font-size: 12px;
      line-height: 1.25;
      color: #4d4d4d;
      margin-left: 0;
      margin-bottom: 20px;
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
import { isMobile } from '@/utils'
// @ is an alias to /src
export default {
  name: 'section3',

  data() {
    return {
      isMobile
    }
  },

  methods: {},

  created() {},
}
</script>
