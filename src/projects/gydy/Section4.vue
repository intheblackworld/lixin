<template>
  <div class="section4">
    <div class="bg fullscreen">
      <div class="slide relative">
        <img
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s4-slide-${index}`"
          :src="slide.src"
          alt
        />
        <div class="btn-group flex-jc flex-ac flex-mobile-jb" v-if="isMobile">
          <img @click="decIndex" src="./arrow-left.png" alt />
          <img @click="addIndex" src="./arrow-right.png" alt />
        </div>
      </div>
      <div class="content">
        <div>
          <div class="label">
            美好生活
            <span>No.1</span>
          </div>
          <div v-if="!isMobile" class="title" v-html="slideList[slideIndex].title"></div>
          <div v-if="isMobile" class="title" v-html="slideList[slideIndex].titleM"></div>

          <div :class="`desc ${isOpenDesc ? 'active': ''}`">
            <img @click="isOpenDesc = !isOpenDesc" src="./add-icon.png" class="add-icon" v-if="isMobile" alt />
            {{slideList[slideIndex].desc}}
          </div>
          <div class="btn-group flex-jc flex-ac flex-mobile-jb">
            <div class="button" @click="decIndex" v-if="!isMobile">
              <img src="./arrow-left.png" alt />
            </div>
            <div class="button" v-if="!isMobile">{{ slideIndex + 1}} / {{ slideList.length }}</div>
            <div class="button" v-if="!isMobile" @click="addIndex">
              <img src="./arrow-right.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/style/variableDefault.scss';
.bg {
  background-image: url('./s4_bg.jpg');
  background-size: cover;
  position: relative;
  display: flex;
}
.slide {
  .slide-img {
    width: auto;
    height: calc(100vh - #{$nav_pc_height});
    display: block;
  }
}

.content {
  width: 388px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .label {
    width: 283px;
    height: 65.8px;
    background-color: #009792;
    font-size: 32px;
    line-height: 1.5;
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;

    span {
      font-size: 41px;
      font-weight: 900;
    }
  }

  .title {
    font-size: 48px;
    line-height: 1.35;
    text-align: left;
    color: #16679e;
    margin-bottom: 40px;
  }

  .desc {
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
    color: #000000;
  }
}

.btn-group {
  position: absolute;
  width: 240px;
  bottom: 0;
  left: auto;
  right: 7vw;
  display: flex;
  margin: 0;
  .button {
    width: 80px;
    height: 80px;
    background: transparent;
    border: 1px solid #16679e;
    color: #16679e;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;

    img {
      width: 20px;
      height: auto;
    }
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .content {
    width: 300px;
    padding-left: 20px;
    .label {
      width: 200px;
      height: 50.8px;
      font-size: 24px;
      margin-bottom: 20px;
      span {
        font-size: 32px;
      }
    }

    .title {
      font-size: 32px;
      margin-bottom: 20px;
    }

    .desc {
      font-size: 14px;
      padding-right: 20px;
    }

    .btn-group {
      .button {
        width: 57px;
        height: 57px;
        font-size: 17px;
        img {
          width: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    display: block;
  }
  .fullscreen {
    height: auto !important;
  }

  .content {
    width: 90vw;
    padding-top: 40px;
    padding-bottom: 40px;
    .label {
      display: none;
    }

    .title {
      font-size: 26px;
    }

    .desc {
      font-size: 18px;
      text-overflow: clip;
      padding: 15px;
      padding-left: 0;
      padding-bottom: 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      position: relative;
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
  }

  .slide {
    .slide-img {
      width: 100vw;
      height: auto;
    }
    .btn-group {
      width: 100vw;
      left: 0;
      bottom: 40%;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
export default {
  name: 'section4',
  mixins: [slider],

  data() {
    return {
      isOpenDesc: false,
      isMobile,
      slideList: [
        {
          title: '双享中和街<br />光明路商圈<br />繁華市心0距離',
          titleM: '双享中和街 光明路商圈<br />繁華市心0距離',
          src: require('./s4_img_1.png'),
          desc:
            '進駐公園大院，飲食起居一應俱全，想在周邊來個家用大採購，開車1分速抵家樂福、全聯，步行5分前進臨時市場完成日常小補給，屈臣氏、康是美、美食料理、咖啡飲料、銀行密集，國內第一家健康醫旅也在此區打造健康照護基地。只要跨過大業路，中西連鎖餐廳、在地特色小吃、知名速食品牌、頂好、北投傳統市場、中華電信…等全數到齊，離塵不離城的萬能生活天天給力，美好便利EASY GO，全齡滿足更能盡情享受。',
        },
        {
          title: '療癒系<br />溫泉風呂之鄉<br />感知在地暖心溫度',
          titleM: '療癒系溫泉風呂之鄉<br />感知在地暖心溫度',
          src: require('./s4_img_2.png'),
          desc:
            '入主溫泉鄉，必親身體訪「溫泉水滑洗凝脂，皓首沐浴回常春」的美妙，沉浸蒸騰氤氳，領略青磺、白磺和鐵磺泉的不同快活，從臺灣第一家溫泉旅社「天狗庵」為起始，現已蔚為老爺、大地、百樂匯…頂級溫泉會館聳立的特色場域，100%日本血統唯一移植海外的「加賀屋」，呈現道地和風心細如絲的體貼；以私人招待所自居之「三二行館」用紓壓的坪效溫潤人心，榮獲CNN評選為亞洲經典SPA之一，無須長途跋涉即可解衣入浴。',
        },
        {
          title: '思古溯源<br />因人文風華底蘊<br />躍上國際焦點',
          titleM: '思古溯源因人文風華底蘊<br />躍上國際焦點',
          src: require('./s4_img_3.png'),
          desc:
            '先後獲得米其林綠色指南三星級城鎮，美國福斯新聞網及紐約時報評選為台灣的溫泉天堂_北投，還有更多令人慕名的景點值得爭相前往。日治時代列入台灣八勝十二景之一的地熱谷，其獨特青磺水質與秋田齊名。以原住民多元認同為己任的凱達格蘭文化館、于右任故居「梅庭」、張學良隱身幽禁的「少帥禪園」、三級古蹟北投溫泉博物館…等歷史建築，均為驚艷目光的熱點，每年11月激情登場的台北溫泉季，更是家門前的文化盛宴。',
        },
      ],
    }
  },

  methods: {},

  created() {},
}
</script>
