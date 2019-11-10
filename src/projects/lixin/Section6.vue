<template>
  <div class="section6">
    <div class="bg fullscreen">
      <div class="left-bg">
        <img v-for="(slide, index) in slideList" :src="slide.img" alt :class="`item-img ${slideIndex === index ? 'active' : ''}`" :key="`img-${index}`" />
      </div>
      <div class="content">
        <div class="text">
          <div :style="`transform: translateY(${-100 * slideIndex}%)`">
            <div
              :class="`text-item ${slideIndex === index ? 'active' : ''}`"
              v-for="(slide, index) in slideList"
              :key="`slide-${index}`"
            >
              <div class="title">{{slide.title}}</div>
              <div class="subtitle">{{slide.subtitle}}</div>
              <div class="desc">{{slide.desc}}</div>
            </div>
          </div>
        </div>
        <div class="button" @click="checkDetail(slideIndex)">DETAIL</div>
      </div>
      <div class="slide-next" @click="slideNext">
        <img src="./s6/next_w.png" alt />
      </div>
      <div class="slide-prev" @click="slidePrev">
        <img src="./s6/next_w.png" alt />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 2;
  background: #fff;
}

.left-bg,
.content {
  width: 50%;
  height: 100%;
}

.left-bg {
  background: url('./s6/work_bg.jpg');
  background-size: 100% 100%;
  position: relative;

}

.item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  // transform: translateY(0%);
  transition: all 0.8s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;

  &:nth-child(1) {
    z-index: 1;
  }
  
  &:nth-child(2) {
    z-index: 2;
  }

  &:nth-child(3) {
    z-index: 3;
  }

  &:nth-child(4) {
    z-index: 4;
  }

  &:nth-child(5) {
    z-index: 5;
  }

  &.active {
    animation: up 1.2s ease-in-out 0s forwards;
    z-index: 9;
  }
}

@keyframes up {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
}
.content {
  position: relative;
}

.text {
  width: 80%;
  height: 25%;
  overflow: hidden;
  margin: 0 auto;
  text-align: left;
  position: absolute;
  top: 15%;
  left: 10%;

  > div {
    height: 100%;
    transition: all 0.8s ease-in-out;
  }

  .text-item {
    height: 100%;
    &.active {
      .title,
      .subtitle,
      .desc {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
}

.title {
  font-family: 'noto_regular';
  font-size: 2.8em;
  line-height: 1.5em;
  font-weight: 300;
  margin-bottom: -0.4em;
  color: #ed6d34;
  transition: all 0.3s ease-in;
  opacity: 0;
  transform: translateY(10px);
}

.subtitle {
  font-family: 'noto_regular';
  font-size: 0.9em;
  font-weight: 900;
  margin: 1.8em 0;
  color: #000;
  transition: all .7s ease-in;
  opacity: 0;
  transform: translateY(15px);
}

.desc {
  font-family: 'noto_thin';
  font-size: 1em;
  line-height: 2em;
  letter-spacing: 3px;
  color: #585858;
  transition: all .9s ease-in;
  opacity: 0;
  transform: translateY(20px);
}

.button {
  position: absolute;
  top: 40%;
  margin-left: 10%;
  width: 12em;
  height: 4em;
  border: 1px solid #3f3f3f;
  color: #000;
  border-radius: 3px;
  text-align: center;
  box-sizing: border-box;
  padding-top: 1.5em;
  font-family: 'AvantGarde_Thin';
  /* font-weight: bold; */
  letter-spacing: 2px;
  transition: box-shadow 0.5s, color 0.5s;
  transition-timing-function: ease-in-out;
  box-shadow: inset 0 0 0 0 #3f3f3f;
  cursor: pointer;

  &:hover {
    box-shadow: inset -200px 0 0 0 #3f3f3f;
    color: #fff;
  }
}

.slide-next,
.slide-prev {
  width: 60px;
  height: 60px;
  background-color: #ed6d34;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  cursor: pointer;
  z-index: 10;

  img {
    width: 30%;
  }
}

.slide-next {
  right: 0;
}

.slide-prev {
  left: 0;

  img {
    transform: rotate(180deg);
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'
import { setTimeout } from 'timers'
export default {
  name: 'section6',
  mixins: [slider],

  components: {},

  data() {
    return {
      isMobile,
      isChange: false,
      slideList: [
        {
          title: '用議題打破行銷思維 — 林板新',
          subtitle: '海沃創意行銷-新板巨星',
          desc: '搭上選舉順風車，包裝「良好新候選人」創造議題。',
          img: require('./s6/item-img-1.jpg'),
        },
        {
          title: '善用網紅行銷，帶動網路聲量 — 一個屋簷下 - 木曜四超玩',
          subtitle: '海沃創意行銷-一個屋簷下',
          desc: '與網紅合作並舉辦線上抽獎，替活動創造高度關注。',
          img: require('./s6/item-img-2.jpg'),
        },
        {
          title: '打造超吸晴的網站 — 博悅',
          subtitle: '興富發建設-博悅',
          desc: '藉由動態影片塑造品牌形象，呈現產品風格，打造吸睛的網站。',
          img: require('./s6/item-img-1.jpg'),
        },
        {
          title: '用影音傳遞對的訊息 — 金城舞2',
          subtitle: '甲山林機構-金城舞2',
          desc:
            '用影音達到深度溝通，打造全面式的行銷體驗。即使是廣告影片，也要讓民眾看得舒服且有趣，發揮影音的高互動特性。',
          img: require('./s6/item-img-2.jpg'),
        },
        {
          title: '四個月完銷的秘密 — 欣璞綻',
          subtitle: '海沃創意行銷-欣璞綻',
          desc:
            '網路素材交叉測試、精準廣告投放、追蹤數據並即時優化、調整行銷方向。',
          img: require('./s6/item-img-1.jpg'),
        },
      ],
    }
  },

  methods: {
    slideNext() {
      this.addIndex()
    },

    slidePrev() {
      this.decIndex()
    },

    checkDetail(index) {},
  },

  watch: {
    slideIndex() {
      this.isChange = true
      setTimeout(() => {
        this.isChange = false
      }, 500)
    },
  },

  mounted() {},
}
</script>
