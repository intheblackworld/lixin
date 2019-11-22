<template>
  <div class="section2">
    <!-- img="./bg.jpg" -->
    <div class="fullscreen bg">
      <img
        src="./s2/bg.jpg"
        alt
        class="bg-img"
        data-aos="fade"
        data-aos-delay="400"
        data-aos-duration="1500"
      />
      <div class="page-title">服務內容</div>
      <div class="pie-chart">
        <img src="./s2/pie.png" alt="" class="pie-bg" ref="pie">
        <div class="overlay">
          <div class="web" @mouseenter="handlePie(0)"></div>
          <div class="video" @mouseenter="handlePie(1)"></div>
          <div class="social" @mouseenter="handlePie(2)"></div>
          <div class="digital" @mouseenter="handlePie(3)"></div>
          <div class="ad" @mouseenter="handlePie(4)"></div>
          <div class="media" @mouseenter="handlePie(5)"></div>
        </div>
        <!-- <icon class="logo" :data="logo" /> -->
        <!-- <div @mouseenter="handlePie(0)">
          <icon class="web" :data="web" />
        </div>
        <div @mouseenter="handlePie(1)">
          <icon class="video" :data="video" />
        </div>
        <div @mouseenter="handlePie(2)">
          <icon class="social" :data="social" />
        </div>
        <div @mouseenter="handlePie(3)">
          <icon class="digital" :data="digital" />
        </div>
        <div @mouseenter="handlePie(4)">
          <icon class="ad" :data="ad" />
        </div>
        <div @mouseenter="handlePie(5)">
          <icon class="media" :data="media" />
        </div>

        <icon class="house" :data="house" />-->
        <!-- <div class="line line1">
          <hr />
        </div>
        <div class="line line2">
          <hr />
        </div>
        <div class="line line3">
          <hr />
        </div>
        <div class="line line4">
          <hr />
        </div>
        <div class="line line5">
          <hr />
        </div>
        <div class="line line6">
          <hr />
        </div>-->
        <!-- <div class="pie" ref="pie1"></div>
        <div class="pie" ref="pie2"></div>
        <div class="pie" ref="pie3"></div>-->
      </div>
      <transition-group name="slide-fade" mode="out-in">
        <div
          class="content"
          v-for="(content, index) in pieList"
          v-show="index === contentIndex"
          :key="`content-${index}`"
        >
          <div class="title">{{content.title}}</div>
          <icon class="icon" :data="content.icon" />
          <div class="subtitle" v-html="content.subtitle"></div>
          <div class="desc" v-html="content.desc"></div>
        </div>
      </transition-group>
      <transition-group name="slide-fade-delay">
        <icon
          class="icon-bg"
          :data="content.icon"
          v-for="(content, index) in pieList"
          v-show="index === contentIndex"
          :key="`content-icon-${index}`"
        />
      </transition-group>
      <div class="star comet"></div>
    </div>
  </div>
</template>
<style lang="scss">
.star {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  position: absolute;
  background-color: rgba(0, 204, 255, 0.8);
  box-shadow: 0 0 40px 0 rgba(0, 204, 255, 0.8), 0 0 20px 0 #ffffff;
  animation: glow 5s infinite;
}

/*  小星*/
.star--medium {
  width: 3px;
  height: 3px;
}

/*  大星 */
.star--big {
  width: 6px;
  height: 6px;
  box-shadow: 0 0 40px 0 #0cf, 0 0 20px 0 #ffffff, inset 0 0 4px #ffffff;
}
/* 流星大小 */
.comet {
  width: 7px;
  height: 7px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 40px 0 #0cf, 0 0 20px 0 #ffffff,
    inset 0 0 8px rgba(255, 255, 255, 0.6);
  top: 0;
  left: 80%;
  opacity: 0.3;
  transform: rotate(-45deg) translate(0, -50px);
  animation: comet 6s infinite;
}
/* 尾巴 */
.comet:after {
  content: '';
  width: 20vw;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 204, 255, 0.4);
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes glow {
  0% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.9;
  }
}
@keyframes comet {
  0% {
    transform: rotate(-45deg) translateX(0);
    opacity: 0.3;
  }
  10% {
    opacity: 1;
  }
  30% {
    transform: rotate(-45deg) translateX(-50vw);
    opacity: 0;
  }
  100% {
    transform: rotate(-45deg) translateX(-50vw);
    opacity: 0;
  }
}

// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // margin-top: 50px !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  margin-top: 10px !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

@keyframes fadedelay {
  0% {
    top: 60%;
    opacity: 0;
  }

  50% {
    top: 55%;
    opacity: 0;
  }

  100% {
    top: 50% !important;
    opacity: 1 !important;
  }
}

.slide-fade-delay-enter-active {
  animation: fadedelay 0.8s ease 0s;
}
.slide-fade-delay-leave-active {
  // animation: fadedelay .1s ease 0s reverse;
}
</style>
<style lang="scss" scoped>
.bg {
  background: #000;
  // background: url('./s2/area2_bg.jpg');
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.page-title {
  font-size: 45px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.58;
  letter-spacing: 4.95px;
  text-align: left;
  color: #ed6d34;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  top: 15%;
}

svg {
  width: 62px;
  height: auto;
  left: 0;
  display: block;
  fill: #fff;
  z-index: 10;
  // position: absolute;
}

.pie-chart {
  width: 489px;
  height: 489px;
  border-radius: 999px;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  .pie-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    transition: all .3s;
  }
  .overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 488px;
    height: 488px;
    border-radius: 999px;
    background: url('./s2/cirlce.png');

    > div {
      width: 100px;
      height: 100px;
      // background: #fff;
      &.web {
        position: absolute;
        left: auto;
        top: 57px;
        right: 130px;
      }

      &.video {
        position: absolute;
        left: auto;
        top: 216px;
        right: 30px;
      }

      &.social {
        position: absolute;
        left: auto;
        bottom: 46px;
        right: 110px;
      }

      &.digital {
        position: absolute;
        right: auto;
        bottom: 46px;
        left: 110px;
      }

      &.ad {
        position: absolute;
        right: auto;
        top: 216px;
        left: 30px;
      }

      &.media {
        position: absolute;
        left: auto;
        top: 57px;
        left: 130px;
      }

      &.house {
        position: absolute;
        width: 280px;
        height: 258px;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 112px;
        fill: #000;
      }
    }
  }
}

.content {
  width: 280px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;

  .icon {
    margin: 0 auto;
    margin-bottom: 15px;
  }

  .title {
    font-size: 23px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.37;
    letter-spacing: 2.76px;
    text-align: center;
    color: #ed6d34;
  }

  .subtitle {
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: 1.5px;
    text-align: center;
    color: #ed6d34;
    margin-bottom: 5px;
  }

  .desc {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: 0.8px;
    text-align: center;
    color: #ffffff;
  }
}

.icon-bg {
  width: 350px;
  opacity: 0.1;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translate(-350px, -100%);
}

// .pie {
//   position: absolute;
//   width: 244.5px;
//   height: 244.5px;
//   overflow: hidden;
//   left: 50%;
//   top: 0;
//   // mix-blend-mode: overlay;
//   z-index: 3;
//   transform-origin: left bottom;
//   // animation: a 5s infinite linear;
//   transition: all 0.3s ease;
//   transform: rotate(0deg);

//   &:before,
//   &:after {
//     content: '';
//     box-sizing: border-box;
//     position: absolute;
//     top: 0;
//     right: 0;
//     width: 489px;
//     height: 244.5px;
//     background: #ed6d34;
//     border-radius: 999px 999px 0 0;
//     transform-origin: 244.5px 244.5px;
//   }

//   &:after {
//     opacity: 0;
//     z-index: 2;
//     transform: rotate(0deg);
//     // animation: a2 5s infinite linear;
//   }

//   &:before {
//     z-index: 1;
//     // animation: a1 5s infinite linear;
//     transform: rotate(-30deg);
//   }
// }

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
import ad from '@/assets/svg/icon-ad.svg'
import house from '@/assets/svg/icon-centerHouse.svg'
import digital from '@/assets/svg/icon-digital.svg'
import media from '@/assets/svg/icon-media.svg'
import social from '@/assets/svg/icon-social.svg'
import video from '@/assets/svg/icon-video.svg'
import web from '@/assets/svg/icon-web.svg'

export default {
  name: 'section2',

  data() {
    return {
      isMobile,
      ad,
      house,
      digital,
      media,
      social,
      video,
      web,

      pieIndex: 0,
      pieList: [
        {
          title: '內容行銷',
          icon: web,
          subtitle: '網頁建置',
          desc: '客製網站設計<br />形象網頁設計',
        },
        {
          title: '內容行銷',
          icon: video,
          subtitle: '影片製作',
          desc: '高品質創意內容<br />超吸晴行銷影片',
        },
        {
          title: '內容行銷',
          icon: social,
          subtitle: '粉專經營',
          desc: '互動貼文內容<br />專業粉專小編',
        },
        {
          title: '數位操作',
          icon: digital,
          subtitle: '數據分析',
          desc: '即時掌握數據<br />優化廣告策略',
        },
        {
          title: '數位操作',
          icon: ad,
          subtitle: '廣告投放',
          desc: 'GOOGLE<br />YAHOO<br />FACEBOOK',
        },
        {
          title: '媒體購買',
          icon: media,
          subtitle: '傳統媒體<br />數位媒體',
          desc: '',
        },
      ],
    }
  },

  methods: {
    handlePie(index) {
      let currentIndex = this.pieIndex % 6
      let handleIndex
      handleIndex = index - currentIndex
      this.pieIndex = this.pieIndex + handleIndex
      this.rotatePie()
    },

    rotatePie() {
      this.$refs.pie.style.transform = `rotate(${this.pieIndex * 60}deg)`
    },
  },

  watch: {
    pieIndex() {
      this.rotatePie()
    },
  },
  computed: {
    contentIndex() {
      return this.pieIndex % 6
    },
  },

  mounted() {
    const wH = window.innerHeight
    const wW = window.innerWidth

    const generateStars = n => {
      for (let i = 0; i < n; i++) {
        const div = document.createElement('div')
        div.className =
          i % 20 === 0
            ? 'star star--big'
            : i % 50 === 0
            ? 'star star--medium'
            : 'star'
        // random everywhere!
        //2000是數度
        div.setAttribute(
          'style',
          `top:${Math.round(Math.random() * wH)}px;left:${Math.round(
            Math.random() * wW,
          )}px;animation-duration:${Math.round(Math.random() * 2000) +
            2000}ms;animation-delay:${Math.round(Math.random() * 2000)}ms;`,
        )
        document.querySelector('.bg').appendChild(div)
      }
    }
    /* 數量 */
    generateStars(100)

    setInterval(() => {
      this.pieIndex++
    }, 6000)
  },
}
</script>
