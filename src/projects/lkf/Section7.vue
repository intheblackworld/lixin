<template>
  <div class="section7">
    <div class="bg" v-if="!isMobile">
      <div class="container-title">
        <div class="title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">自有資金 超高投報</div>
        <hr data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" />
        <div class="desc" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">Intelligent Investor</div>
      </div>
      <img src="./s7_gold.png" alt class="gold" data-aos="fade" data-aos-delay="0" data-aos-duration="1500" />
      <div class="container" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
        <div class="content-title" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">高投報 出租自用雙贏</div>
        <div class="content">
          <div class="description" data-aos="fade" data-aos-delay="600" data-aos-duration="1500">
            <div class="title">磁吸六大特區 產業商業醫療齊聚</div>
            <div class="desc">
              一次全擁華亞科技園區、長庚醫療特區、國際媒體園區、新創園區以及
              未來郵政物流特區、林口產業專區，龐大產業醫療群聚大量就業機會與
              未來產值，更是奠定未來租金高收益的絕佳保證！
            </div>
            <div class="title">自有資金高投報 建築鍊金術</div>
            <div class="desc">
              『蘭桂‧坊』超低總價輕坪規劃，減擔入手價，捷運站前稀罕臻品，現
              在入手保值，未來更想增值利多！
            </div>
          </div>
          <div class="slide relative" data-aos="fade" data-aos-delay="800" data-aos-duration="1500">
            <div class="img-name">{{slideList[slideIndex].title}}</div>
            <img
              v-for="(slide, index) in slideList"
              :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
              :key="`s7-slide-${index}`"
              :src="slide.src"
              alt
            />
            <div class="btn-group flex-jc flex-ac flex-mobile-jb">
              <div
                class="dot"
                v-for="(slide, index) in slideList"
                :key="`s7-dot-${index}`"
                @click="slideIndex = index"
              ></div>
              <img @click="addIndex" src="./small_left_btn.png" alt class="arrow-btn" />
              <img @click="decIndex" src="./small_right_btn.png" alt class="arrow-btn" />
            </div>
          </div>
        </div>
        <div class="items">
          <div class="item" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
            <img src="./s7_item1.png" alt />
            <div class="item-title">房東養成 小錢變大錢</div>
            <div class="item-desc">
              小坪數地段佳易出租，你買房別人付租
              金，小錢換大錢，房東養成術，人人都
              是“租”隊友！
            </div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1500">
            <img src="./s7_item2.png" alt />
            <div class="item-title">有房有金 房客變房東</div>
            <div class="item-desc">
              買一間會自己賺錢的房金，捷運站前增
              值，購物中心再增值，飯店服務再增值
              低總價高收益高投報，當然再增值！
            </div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1500">
            <img src="./s7_item3.png" alt />
            <div class="item-title">買房養老 年金變成房</div>
            <div class="item-desc">
              沒有股票基金高風險，更沒有銀行定存
              的低利率打破通貨膨脹現金越存越小，
              樂退人生，更應該擁有一個房兒子，定
              時收益轉手再賺一筆！
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative m-block" v-if="isMobile">
      <div class="container-title">
        <div class="title">自有資金 超高投報</div>
        <hr />
        <div class="desc">Intelligent Investor</div>
      </div>
      <img src="./s7m/mo.jpg" alt />
      <div class="relative">
        <div class="slide relative">
          <div class="img-name">{{slideList[slideIndex].title}}</div>
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s7-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="btn-group flex-jc flex-ac flex-mobile-jb">
            <div
              class="dot"
              v-for="(slide, index) in slideList"
              :key="`s7-dot-${index}`"
              @click="slideIndex = index"
            ></div>
            <img @click="decIndex" src="./small_left_btn.png" alt class="arrow-btn" />
            <img @click="addIndex" src="./small_right_btn.png" alt class="arrow-btn" />
          </div>
        </div>
        <div class="description">
          <div class="title">{{content[contentIndex].title}}</div>
          <div class="desc">{{content[contentIndex].desc}}</div>
          <div class="button" @click="contentIndex = contentIndex === 0 ? 1 : 0">
            <div class="triangle"></div>
            {{content[contentIndex === 0 ? 1 : 0].title}}
          </div>
        </div>
      </div>
      <img src="./s7m/bottom.jpg" alt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  // background-color: #fff;
  background-image: url('./s7_bg.jpg');
  background-position: 100% 0%;
  background-size: cover;
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;
}

.container {
  width: 1380px;
  margin: 0 auto;
  margin-top: calc(100vw * 580 / 1920);
  padding: 20px 90px 40px;
  border: solid 3px #c08d4e;
  background: #1e1f1f;

  .content {
    display: flex;
    height: 400px;
    margin-bottom: 50px;

    .description {
      width: 50%;
      background-color: #c08d4e;
      color: #1a1311;
      padding-top: 80px;

      .title {
        width: 430px;
        font-size: 26px;
        margin: 0 auto;
        text-align: left;
        margin-bottom: 10px;
      }

      .desc {
        width: 430px;
        font-size: 14px;
        text-align: justify;
        line-height: 1.5;
        margin: 0 auto;
        margin-bottom: 40px;
      }
    }
  }

  .content-title {
    font-size: 45.9px;
    color: #fff;
    width: 50%;
    margin-top: 30px;
    margin-bottom: 20px;
  }
}

.gold {
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0px;
}

.container-title {
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
    color: #fff;
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
    width: 140px;
    height: 20px;
    font-family: TimesNewRomanPSMT;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #c08d4e;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}

.slide {
  width: 50%;
  z-index: 1;

  .img-name {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    text-shadow: 0 0 2px #333;
    font-size: 14px;
    z-index: 3;
  }

  .slide-img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    right: 0;
  }

  .btn-group {
    bottom: 30px;
  }
}

.items {
  display: flex;
  align-items: center;
  justify-content: space-around;

  .item {
    img {
      width: 185px;
    }

    .item-title {
      font-size: 26px;
      letter-spacing: normal;
      color: #c08d4e;
      margin-bottom: 10px;
      width: 100%;
    }

    .item-desc {
      width: 245px;
      height: 104px;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.71;
      letter-spacing: 0.42px;
      text-align: justify;
      color: #ffffff;
    }
  }
}

.arrow-btn {
  display: none;
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .bg {
    padding-top: 30px;
  }
  .container {
    width: 1280px;
    margin-top: calc(100vw * 550 / 1920);

    // .content {}
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .container {
    width: 1024px;
    padding: 20px 50px 40px;
  }
  .fullscreen {
    height: auto;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 900px;
    padding: 20px 30px 40px;

    .content-title {
      font-size: 32px;
    }

    .content {
      .description {
        .title,
        .desc {
          width: 90%;
        }
      }
    }
  }
  .gold {
    margin-top: 80px;
  }
  .slide {
    .slide-img {
      width: 100%;
      max-height: auto;
    }
  }
}

@media screen and (max-width: 767px) {
  .description {
    width: 84.4vw;
    margin: 0 auto;
    margin-top: -30px;
    padding-top: 20px;
    left: 0;
    right: 0;
    z-index: 3;
    height: 170px;
    color: #000;
    background: #c9a063;
    position: absolute;

    .title {
      margin-bottom: 10px;
      font-size: 17px;
    }

    .desc {
      margin-bottom: 20px;
      text-align: justify;
      font-size: 14px;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 15px;
    }

    .button {
      width: 80%;
      margin: 0 auto;
      height: 30px;
      background: #fff;
      color: #c9a063;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 4px 7px 4px;
        border-color: transparent transparent #c9a063 transparent;
        margin-right: 15px;
      }
    }
  }
  .container {
    width: 90vw;
    margin: 0 auto;
    margin-top: calc(100vw * 580 / 1920);
    padding: 20px 90px 40px;
    border: solid 3px #c08d4e;
    background: #1e1f1f;
  }

  .slide {
    width: 50%;
    z-index: 1;

    .img-name {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #fff;
      text-shadow: 0 0 2px #333;
      font-size: 14px;
      z-index: 3;
    }

    .slide-img {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      object-fit: cover;
      left: 0;
      right: 0;
      transition: all 0s;
    }

    .btn-group {
      bottom: 30px;
    }
  }

  .container-title {
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
      color: #fff;
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

  .dot {
    display: none;
  }

  .arrow-btn {
    display: block;
  }

  .slide {
    .btn-group {
      bottom: 40%;
    }

    .slide-img {
      width: 100vw;
      max-height: auto;
    }
  }

  .m-block {
    .container-title {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 30px;
    }
    img {
      display: block;
      width: 100vw;
      margin-top: -1px;
    }
  }
}
</style>

<script>
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
export default {
  name: 'section7',
  mixins: [slider],

  data() {
    return {
      slideList: [
        {
          title: '華亞園區',
          src: require('./s7_img1.jpg'),
        },
        {
          title: '長庚園區',
          src: require('./s7_img2.jpg'),
        },
        {
          title: '國際媒體文創產業園區',
          src: require('./s7_img3.jpg'),
        },
        {
          title: '林口新創園區',
          src: require('./s7_img4.jpg'),
        },
        {
          title: '郵政物流特區',
          src: require('./s7_img5.jpg'),
        },
      ],
      contentIndex: 0,
      content: [
        {
          title: '磁吸六大特區 產業商業醫療齊聚',
          desc:
            '一次全擁華亞科技園區、長庚醫療特區、國際媒體園區、新創園區以及未來郵政物流特區、林口產業專區，龐大產業醫療群聚大量就業機會與未來產值，更是奠定未來租金高收益的絕佳保證！',
        },
        {
          title: '自有資金高投報 建築鍊金術',
          desc:
            '『蘭桂‧坊』超低總價輕坪規劃，減擔入手價，捷運站前稀罕臻品，現在入手保值，未來更想增值利多！',
        },
      ],
      isMobile,
    }
  },

  methods: {},
}
</script>
