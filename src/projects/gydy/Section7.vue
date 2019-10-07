<template>
  <div class="section7">
    <div class="bg relative">
      <div class="container">
        <div class="label">
          安心建築
          <span>No.1</span>
        </div>
        <div class="title">
          建築3強聯手 各擅勝場精鑄出擊
          <br />誓以安全陣容昇華安心笑容
        </div>
        <div class="subtitle">核心三巨頭_實力天團集氣三倍安心</div>
        <div
          class="desc"
        >齊聚建築鐵三角，集結三倍豐厚實力與優質血統悉心擘劃，因「三希堂」聞名的馥域建設＿以留美建築學人之姿，締造高標以待的靈韻；欣聯建設＿為信賴營造職人之首，憑「東園綻」、「幸福捷境」、「欣聯大心」、「欣聯心」…等熱銷個案經典實績，奠定究極精工的基石；首敦建設＿任在地深耕達人，藉北投「鹿鳴館」名宅推手實力，融入居宅工藝，耗費三倍心力攜手累加斐然資歷，為翻轉北投街廓奉獻心力。</div>
      </div>
      <div class="img-row">
        <img src="./s7_img_1.jpg" alt="">
        <img src="./s7_img_2.jpg" alt="">
        <img src="./s7_img_3.jpg" alt="">
        <img src="./s7_img_4.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s6_bg.png');
  background-size: cover;
  position: relative;
}

.container {
  width: 1185px;
  margin: 0 auto;
}

.label {
  width: 283px;
  height: 60.5px;
  background-color: #31426b;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;

  span {
    font-size: 41px;
    font-weight: 900;
  }
}

.title {
  width: 691px;
  margin-bottom: 15px;
  font-size: 48px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.35;
  letter-spacing: normal;
  text-align: left;
  color: #16679e;
}

.subtitle {
  width: 373px;
  margin-bottom: 15px;
  font-family: NotoSansHant;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.71;
  letter-spacing: normal;
  text-align: left;
  color: #9e1616;
}

.desc {
  width: 1186px;
  height: 89px;
  font-family: NotoSansHant;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.59;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: 15px;
}

.img-row {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  img {
    width: 24.3%;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .fullscreen {
    height: auto !important;
  }

  .title {
    width: 90vw;
    font-size: 32px;
    line-height: 1.19;
    text-align: left;
    color: #16679e;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .subtitle {
    width: 90vw;
    font-size: 32px;
    margin-bottom: 30px;
    line-height: 1.19;
    text-align: left;
    font-size: 24px;
    line-height: 1.29;
    color: #9e1616;
    margin: 0 auto;
  }

  .desc {
    width: 90vw;
    margin: 0 auto;
    font-size: 18px;
    text-overflow: clip;
    padding: 15px;
    line-height: 1.5;
    padding-left: 0;
    padding-bottom: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    position: relative;
    text-align: justify;
    .add-icon {
      position: absolute;
      right: 0px;
      top: 0px;
      width: 30px;
      cursor: pointer;
    }

    &.active {
      height: auto;
      display: block;
    }
  }

  .train {
    width: 100vw;
    height: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section7',

  data() {
    return {
      isOpenDesc: false,
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
