<template>
  <div class="section6">
    <div class="container">
      <h3 class="title flex-c" v-scroll-reveal.reset="$fadeInUp()">大樹建築</h3>
      <h3
        class="sub-title"
        v-scroll-reveal.reset="$fadeInUp(!isMobile ? 300 : 0)"
      >五棟大樹建築，向光迎風的自然系規劃</h3>
      <div
        class="small-title"
        v-scroll-reveal.reset="$fadeInUp(!isMobile ? 300 : 0)"
      >心天畝把自然設計到建築裡，開窗就能曬太陽深呼吸</div>
      <div class="item-container flex wrap">
        <div
          class="col-pc-3 col-mobile-6 flex-c wrap"
          v-for="(item, index) in topList"
          :key="item.src"
          v-scroll-reveal.reset="!isMobile ? $fadeInUp(300 * (index + 1)) : $fadeInUp()"
        >
          <div class="border flex-c">
            <div class="in-border flex-c">
              <img :src="item.src" alt="心天畝的圖片" />
              <img class="hover" :src="item.colorSrc" alt="心天畝的圖片" />
            </div>
          </div>
          <div class="desc" v-html="item.desc"></div>
        </div>
        <div
          class="col-pc-4 col-mobile-6 flex-c wrap"
          v-for="(item, index) in bottomList"
          :key="item.src"
          v-scroll-reveal.reset="!isMobile ? $fadeInUp(300 * (index + 5)) : $fadeInUp()"
        >
          <div class="border flex-c">
            <div class="in-border flex-c">
              <img :src="item.src" alt="心天畝的圖片" />
              <img class="hover" :src="item.colorSrc" alt="心天畝的圖片" />
            </div>
          </div>
          <div class="desc" v-html="item.desc"></div>
        </div>
      </div>
    </div>
    <img class="bg" v-scroll-reveal.reset="$fadeInUp(!isMobile ? 300 : 0)" src="./s6_bg1.png" alt="心天畝的圖片" />
    <img class="bg" v-scroll-reveal.reset="$fadeInUp(!isMobile ? 300 : 0)" src="./s6_bg2.png" alt="心天畝的圖片" />
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 980px;
  margin: 0 auto;
  text-align: center;

  .title {
    width: 340px;
    height: 101px;
    background-image: url('./s6_title_bg.png');
    background-size: cover;
    color: #fff;
    font-size: 28px;
    margin: 0 auto;
    margin-bottom: 25px;
  }

  .sub-title {
    font-size: 28px;
    color: #2b466f;
    margin-bottom: 20px;
  }

  .small-title {
    font-size: 24px;
    color: #2b466f;
    margin-bottom: 20px;
  }

  .item-container {
    > div {
      height: 200px;
      margin-bottom: 60px;

      &:hover {
        img {
          opacity: 0;
        }
        .hover {
          opacity: 1;
        }

        .border {
          box-shadow: inset 0 0 0 3px #638ece;
        }

        .in-border {
          box-shadow: inset 0 0 0 3px #b5ce63;
        }
      }
    }

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 60%;
      transition: all 0.7s;
      opacity: 1;
    }

    .hover {
      opacity: 0;
    }

    .border {
      width: 180px;
      height: 180px;
      padding: 5px;
      position: relative;
      border-radius: 50% 50%;
      box-shadow: inset 0 0 0 0px #638ece;
      transition: all 0.7s;
      margin-bottom: 20px;
    }

    .in-border {
      width: 100%;
      height: 100%;
      border-radius: 50% 50%;
      box-shadow: inset 0 0 0 0px #b5ce63;
      transition: all 0.5s;
    }

    .desc {
      width: 100%;
      line-height: 1.5;
      font-size: 16px;
      color: #4d4d4d;
    }
  }
}

.bg {
  width: 100vw;
  margin-top: 30px;
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .bg {
    margin-top: 0;
  }
  .container {
    width: 100vw;
    margin: 0 auto;
    text-align: center;
    padding-top: 25px;

    .title {
      width: 300px;
      height: 90px;
      background-image: url('./s6_title_bg.png');
      background-size: cover;
      margin-bottom: 15px;
      color: #fff;
      font-size: 32px;
    }

    .sub-title {
      font-size: 18px;
      color: #2b466f;
      margin-bottom: 20px;
    }

    .small-title {
      font-size: 15px;
      color: #2b466f;
      margin-bottom: 40px;
      width: 200px;
      margin: 0 auto;
    }

    .item-container {
      margin-top: 40px;
      > div {
        height: 240px;
        margin-bottom: 30px !important;

        &:nth-last-child(1) {
          margin: 0 auto;
        }

        &:hover {
          img {
            opacity: 0;
          }
          .hover {
            opacity: 1;
          }

          .border {
            box-shadow: inset 0 0 0 3px #638ece;
          }

          .in-border {
            box-shadow: inset 0 0 0 3px #b5ce63;
          }
        }
      }

      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 60%;
        transition: all 0.7s;
        opacity: 1;
      }

      .hover {
        opacity: 0;
      }

      .border {
        width: 100%;
        height: 50vw;
        padding: 5px;
        position: relative;
        border-radius: 50% 50%;
        box-shadow: inset 0 0 0 0px #638ece;
        transition: all 0.7s;
        margin-bottom: 0px;
      }

      .in-border {
        width: 100%;
        height: 100%;
        border-radius: 50% 50%;
        box-shadow: inset 0 0 0 0px #b5ce63;
        transition: all 0.5s;
      }

      .desc {
        width: 100%;
        line-height: 1.5;
        font-size: 16px;
        color: #4d4d4d;
      }
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
import { isMobile } from '@/utils'
export default {
  name: 'section6',

  data() {
    return {
      isMobile,
      topList: [
        {
          src: require('./s6_top1.png'),
          colorSrc: require('./s6_top1_color.png'),
          desc: '168米綠園道<br />風光入室光影相伴',
        },
        {
          src: require('./s6_top2.png'),
          colorSrc: require('./s6_top2_color.png'),
          desc: '稀有獨棟雙拼<br />戶戶邊間齊質社區',
        },
        {
          src: require('./s6_top3.png'),
          colorSrc: require('./s6_top3_color.png'),
          desc: '六樓電梯華廈<br />豪宅格局三面採光',
        },
        {
          src: require('./s6_top4.png'),
          colorSrc: require('./s6_top4_color.png'),
          desc: '樑柱外露設計<br />空間方正好擺設',
        },
      ],
      bottomList: [
        {
          src: require('./s6_bottom1.png'),
          colorSrc: require('./s6_bottom1_color.png'),
          desc: '光時空間設計<br />陽光梯廳衛浴開窗',
        },
        {
          src: require('./s6_bottom2.png'),
          colorSrc: require('./s6_bottom2_color.png'),
          desc: '29.5%低公設<br />實用設計坪效更高',
        },
        {
          src: require('./s6_bottom3.png'),
          colorSrc: require('./s6_bottom3_color.png'),
          desc: '少有低密度社區<br />閑靜質樸零店面',
        },
      ],
    }
  },

  methods: {},

  created() {
    window.setTimeout(() => {
      // this.loading = true
    }, 1500)
  },
}
</script>
