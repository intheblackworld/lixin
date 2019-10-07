<template>
  <div class="section2 relative">
    <div class="flex-jc flex-at relative frame" ref="frame">
      <div :class="`mask absolute ${!showMask ? 'hide' : ''}`"></div>
      <img src="./s2_bg.jpg" alt class="bg" ref="bg" />
      <img src="./s2_hand.png" alt class="hand" />
      <div
        class="text absolute flex-c wrap"
        data-aos-id="ani-number"
        data-aos="fade"
        data-aos-offset="50"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <!-- <icon class="icon" :data="txt1" />
        <icon class="icon" :data="txt2" /> -->
        <p class="title">
          近擁<span class="number number1">{{animatedNumber1}}</span>公頃<br />
          大台北都會公園
        </p>
        <svgLine />
        <p class="title">
          正對<span class="number number2">{{animatedNumber2}}</span>坪<br />
          校園預定地
        </p>
      </div>
      <img
        class="bubble1"
        data-aos="zoom-in-up"
        data-aos-offset="50"
        data-aos-delay="1200"
        data-aos-duration="500"
        data-aos-mirror="true"
        data-aos-once="false"
        src="./bubble1.png"
        alt
      />
      <img
        class="bubble2"
        data-aos="zoom-in-up"
        data-aos-offset="50"
        data-aos-delay="1200"
        data-aos-duration="500"
        data-aos-mirror="true"
        data-aos-once="false"
        src="./bubble2.png"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: calc(100vh - 60px);
}
.hand {
  display: none;
}

.mask {
  display: none;
}
.text {
  margin-top: 11vh;
  top: 10%;
  .title {
    font-size: 6vh;
    font-weight: bold;
    color: #000;
    font-family: 'Noto Sans TC' !important;
    text-align: left;
  }

  .number {
    font-family: Calibri !important;
    text-align: center;
    font-size: 11vh;
    font-weight: bold;
    color: #d33828;
    width: 188px;
    display: inline-block;
  }

  .number1 {
    // left: 13%;
    // bottom: 48%;
    width: 11vh *(188 / 104);
  }

  .number2 {
    width: 11vh *(241 / 104);
    // right: 8%;
    // bottom: 48%;
  }
}

.bubble1,
.bubble2 {
  position: absolute;
}

.bubble1 {
  width: auto;
  height: calc(100vh * (125 / 900));
  left: 29%;
  bottom: 20%;
}

.bubble2 {
  width: auto;
  height: calc(100vh * (144 / 900));
  right: 33%;
  bottom: 16%;
}
.text > svg {
  height: calc(100vh * (130 / 900));

  &:nth-child(2) {
    width: 78px;
    margin-top: 20px;
  }

  img {
    width: 100%;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .hand {
    position: absolute;
    z-index: 2;
    display: block;
    width: 56px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 5%;
    display: block;
    animation: swing 2.5s ease-in-out 0s infinite;
  }

  .mask {
    width: 100vw;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
    height: calc(100vh - 123px);
    display: block;

    &.hide {
      display: none;
    }
  }

  @keyframes swing {
    0% {
      transform: translateX(20px);
    }

    50% {
      transform: translateX(-20px);
    }

    100% {
      transform: translateX(20px);
    }
  }
  .bg {
    width: 850px;
    height: calc(100vh - 123px);
  }

  .frame {
    display: block;
    overflow-x: scroll;
    z-index: 10;
    width: 100vw;

    img {
      display: block;
    }

    .text {
      width: 850px;

      // .number {
      //   font-size: 65px;
      // }

      // .number1 {
      //   left: 167px;
      //   top: -20px;
      // }

      // .number2 {
      //   right: 130px;
      //   top: -20px;
      // }
    }

    .text > svg {
      width: 320px;

      &:nth-child(2) {
        width: 78px;
      }

      img {
        width: 100%;
      }
    }
  }

  .bubble-container {
    width: 850px;
  }

  .bubble1 {
    width: auto;
    height: calc(100vh * (125 / 900));
    left: 29vw;
    bottom: 20%;
  }

  .bubble2 {
    width: auto;
    height: calc(100vh * (144 / 900));
    left: 147vw;
    bottom: 16%;
  }
}
</style>

<script>
import txt1 from '@/assets/svg/s2_txt1.svg'
import txt2 from '@/assets/svg/s2_txt2.svg'
import svgLine from './s2_txt'
import { TweenLite } from 'gsap'
export default {
  name: 'section2',
  components: {
    svgLine,
  },

  data() {
    return {
      txt1,
      txt2,
      showMask: true,
      number1: 0,
      tweenedNumber1: 0,
      tweenedNumber2: 0,
    }
  },

  computed: {
    animatedNumber1: function() {
      return this.tweenedNumber1.toFixed(0)
    },
    animatedNumber2: function() {
      return this.tweenedNumber2.toFixed(0)
    },
  },

  methods: {
    // handleScroll(e) {
    //       <div class="m">
    //   <div class="box1"></div>
    //   <div class="box2">
    //     <div class="img">
    //       <img src="https://i.imgur.com/epuG7Sh.jpg">
    //       <div class="b1"><img src="https://i.imgur.com/xwpJdj7.png" /></div>
    //       <div class="b2"><img src="https://i.imgur.com/xwpJdj7.png" /></div>
    //       <div class="n1"></div>
    //       <div class="n2"></div>
    //     </div>
    //   </div>
    //   <div class="box3"></div>
    // </div>
    //   // let st = e.target.scrollTop
    //   // console.log(st)
    //   // if (st >= 100 && st < 150) {
    //   //   $('.img').css({
    //   //     position: 'fixed',
    //   //   })
    //   //   $('.img img').css({ left: -st + 100 })
    //   //   $('.b1').removeClass('v')
    //   // } else if (st <= 450 && st >= 150) {
    //   //   $('.img img').css({ left: -50 })
    //   //   $('.b1').addClass('v')
    //   // } else if (st >= 450 && st <= 890) {
    //   //   $('.img img').css({ left: -st + 400 })
    //   //   $('.b1').removeClass('v')
    //   // } else if (st >= 890 && st <= 1190) {
    //   //   $('.img img').css({ left: -490 })
    //   //   $('.b1').addClass('v')
    //   // } else if (st >= 1190 && st <= 2000) {
    //   //   $('.img img').css({ left: -st + 700 })
    //   //   $('.b1').removeClass('v')
    //   // } else {
    //   //   $('.img').css({
    //   //     position: 'relative',
    //   //   })
    //   //   $('.img img').css({ left: 0 })
    //   // }
    // },
  },

  mounted() {
    this.$refs.frame.addEventListener('scroll', () => {
      this.showMask = false
    })

    document.addEventListener('aos:in:ani-number', ({ detail }) => {
      TweenLite.to(this.$data, 1.2, { tweenedNumber1: 424 })
      TweenLite.to(this.$data, 1.2, { tweenedNumber2: 7755 })
      console.log(123)
    })

    document.addEventListener('aos:out:ani-number', ({ detail }) => {
      TweenLite.to(this.$data, 1.2, { tweenedNumber1: 0 })
      TweenLite.to(this.$data, 1.2, { tweenedNumber2: 0 })
      console.log(456)
    })
  },
}
</script>
