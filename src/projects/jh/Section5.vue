<template>
  <div class="section5">
    <div class="bg fullscreen">
      <div class="title-block">
        <h3 class="title">世紀繁華</h3>
        <div class="subtitle">Andante！Listen The Greatest World</div>
      </div>
      <div class="relative">
        <div :class="`slide relative`">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s5-slide-${index}`"
            :src="slide.src"
            alt
          />
        </div>
        <div class="text">
          <h3 class="title">{{slideList[slideIndex].title}}</h3>
          <div class="subtitle">{{slideList[slideIndex].subtitle}}</div>
          <div class="desc" v-html="slideList[slideIndex].desc"></div>
        </div>
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
  margin-bottom: 0;
}

.slide {
  width: calc(100vw * (1258 / 1920));
  margin-bottom: 40px;
}

.text {
  position: absolute;
  left: 50vw;
  top: 50%;
  transform: translateY(-50%);
  width: 528px;
  height: 391px;
  background: linear-gradient(
    to right,
    rgba(230, 176, 72, 0.7) 0%,
    rgba(230, 176, 72, 1) 30%
  );
  padding: 80px 50px;

  .title {
    font-size: 40px;
    font-weight: bold;
    text-align: left;
    color: #312000;
  }

  .subtitle {
    font-family: Playball;
    font-size: 27px;
    line-height: 2;
    text-align: left;
    color: #312000;
  }

  .desc {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.67;
    letter-spacing: 1.8px;
    text-align: justify;
    color: #000000;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }

  .text {
    width: 508px;
    height: 270px;
    padding: 20px 40px;
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .fullscreen {
    height: auto !important;
  }

  .slide {
    width: 100vw;
  }

  .text {
    position: relative;
    left: auto;
    top: auto;
    margin: 0 auto;
    transform: translateY(-30px);
    width: 90vw;
    height: 260px;
    padding: 40px 30px;

    .title {
      font-size: 27px;
      font-weight: bold;
      text-align: left;
      color: #312000;
    }

    .subtitle {
      font-family: Playball;
      font-size: 18px;
      line-height: 2;
      text-align: left;
      color: #312000;
    }

    .desc {
      font-size: 12px;
      font-weight: 300;
      line-height: 1.67;
      letter-spacing: 1.7px;
      text-align: justify;
      color: #000000;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import { setInterval } from 'timers'

export default {
  name: 'section5',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s5/1.jpg'),
          title: '橫空出世',
          subtitle: 'Romanesque Style',
          desc:
            '4座羅馬神殿式拱穹＋1座富麗輝煌的圓形穹頂<br />如同偉大作家歌德所說的<br />騰空而起，像崇高壯觀、濃蔭廣覆的建築之樹',
        },
        {
          src: require('./s5/2.jpg'),
          title: '向榮冠冕的萬丈城市力',
          subtitle: 'Crown City',
          desc:
            '高仰度28F摩天視界、4棟口字型高樓層地標式建築，可眺望台北城市無敵豪景，北美館、圓山飯店、台北101…爭藏地標、盡收眼底，壯麗開卷般的生活尺度，成就景觀無敵的眼界奢華，更能放心追逐您心之所向的視界巔峰。',
        },
      ],
    }
  },
  methods: {},

  created() {
    setInterval(() => {
      this.addIndex()
    }, 5000)
  },
}
</script>
