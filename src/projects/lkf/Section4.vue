<template>
  <div class="section4">
    <Map :tagList="tagList" :bgSrc="bgSrc" :hand="hand">
      <div class="text">
        <div class="title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">國際線上 雙北暢遊</div>
        <hr data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" />
        <div
          class="desc"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1500"
        >International Flight</div>
      </div>
    </Map>
    <div class="fluid">
      <div class="foot-container">
        <div class="content" v-if="!isMobile">
          <div class="text" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
            <div class="title">A9捷運站30秒漫步行</div>
            <div class="desc">
              一路之隔，就到捷運林口A9站，3站直達國際機場，出境入境輕鬆掌握；連結桃園機場
              與捷運藍線。與台北市緊密連結，到達桃園機場僅需3站，更可迅速接軌台北車站捷運
              藍線，大台北捷運生活圈就是你的生活任意門！
            </div>

            <div class="title">轉個彎交流道通勤零距</div>
            <div class="desc">
              『蘭桂.坊』轉個彎即光速接軌林口交流道，進出台北市僅需15分鐘，內科18分鐘，上
              班通勤暢快便捷。
            </div>
          </div>
        </div>
        <div v-else class="m-content">
          <div
            class="title"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >{{mapText[mapIndex].title}}</div>
          <div
            class="desc"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >{{mapText[mapIndex].desc}}</div>
          <div
            class="button"
            @click="mapIndex = mapIndex === 0 ? 1 : 0"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div class="triangle"></div>
            {{mapText[mapIndex === 0 ? 1 : 0].title}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.map {
  .text {
    top: 70px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .title {
    width: 298px;
    height: 48px;
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #1a1311;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  hr {
    width: 304.7px;
    height: 0;
    border: solid 1px #c08d4e;
    margin: 0 auto;
    margin-bottom: 5px;
  }

  .desc {
    width: 145px;
    height: 20px;
    font-family: TimesNewRomanPSMT;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}

.fluid {
  width: 100vw;
  background-color: #f5ede0;
  position: relative;
  z-index: 1;
}
.foot-container {
  width: 1380px;
  height: 160px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: #f5ede0;
  position: relative;
  border-bottom: solid 3px #c08d4e;
  .content {
    width: 45%;
    min-width: 620px;
    height: 320px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #f5ede0;
    .text {
      width: 530px;
      height: 182px;
      margin: 0 auto;
      padding-top: 60px;
      color: #1a1311;
    }

    .title {
      font-size: 22px;
      text-align: left;
      margin-bottom: 10px;
    }

    .desc {
      font-size: 14px;
      line-height: 1.57;
      text-align: justify;
      margin-bottom: 20px;
    }
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .map {
    .text {
      top: 30px;
    }
  }
  .foot-container {
    width: 1024px;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .map {
    .text {
      top: 20px;
    }
  }
  .foot-container {
    width: 1024px;
  }
  .fullscreen {
    height: auto;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .map {
    .text {
      top: 30px;

      .title {
        font-size: 28px;
        height: 40px;
        margin-bottom: 10px;
      }
    }
  }
  .foot-container {
    width: 900px;
    transform: scale(1);
  }
}

@media screen and (max-width: 767px) {
  .map {
    .text {
      width: 200px;
      top: 40px;
    }
    .title {
      width: 184px;
      height: 21px;
      font-size: 22px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #231f20;
    }

    hr {
      width: 201px;
    }

    .desc {
      width: 110px;
      height: 13px;
      font-family: TimesNewRomanPSMT;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #c49a6c;
    }
  }
  .foot-container {
    width: 100vw;
    height: 85px;
    border-bottom: none;
    .m-content {
      width: 90vw;
      height: 190px;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 10px;
      background-color: #f5ede0;
      padding-top: 20px;

      .title {
        width: 200px;
        height: 19px;
        font-size: 19px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #231f20;
        margin: 0 auto;
        margin-bottom: 20px;
      }

      .desc {
        width: 90%;
        margin: 0 auto;
        height: auto;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: justify;
        color: #231f20;
      }

      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 35px;
        background-color: #c8a063;
        font-size: 16px;
        color: #fff;
        .triangle {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 4px 7px 4px;
          border-color: transparent transparent #fff transparent;
          margin-right: 15px;
        }
      }
    }
  }
}
</style>

<script>
import Map from '@/components/Map.vue'
import { isMobile } from '@/utils'
export default {
  name: 'section4',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      mapIndex: 0,
      mapText: [
        {
          title: 'A9捷運站30秒漫步行',
          desc:
            '一路之隔，就到捷運林口A9站，3站直達國際機場，出境入境輕鬆掌握；連結桃園機場與捷運藍線。與台北市緊密連結，到達桃園機場僅需3站，更可迅速接軌台北車站捷運藍線，大台北捷運生活圈就是你的生活任意門！',
        },
        {
          title: '轉個彎交流道通勤零距',
          desc:
            '『蘭桂.坊』轉個彎即光速接軌林口交流道，進出台北市僅需15分鐘，內科18分鐘，上班通勤暢快便捷。',
        },
      ],
      tagList: [
        require('./s4/1.png'),
        require('./s4/2.png'),
        require('./s4/3.png'),
        require('./s4/4.png'),
        require('./s4/5.png'),
        require('./s4/6.png'),
        require('./s4/7.png'),
        require('./s4/8.png'),
        require('./s4/9.png'),
        require('./s4/10.png'),
        require('./s4/11.png'),
        require('./s4/12.png'),
        require('./s4/13.png'),
        require('./s4/14.png'),
      ],

      bgSrc: require('./s4_bg.jpg'),
      hand: require('./s4_hand.png'),
    }
  },

  methods: {},
}
</script>
