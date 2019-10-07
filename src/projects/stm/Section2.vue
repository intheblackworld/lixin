<template>
  <div class="section2">
    <!-- 背景圖覽家仔 -->
    <div class="container">
      <img
        v-scroll-reveal.reset="$fadeInLeft(700, 2500)"
        src="./s2_tree_left.png"
        alt
        class="absolute tree-left"
      />
      <img
        v-scroll-reveal.reset="$fadeInRight(700, 2500)"
        src="./s2_tree_right.png"
        alt
        class="absolute tree-right"
      />
      <div class="content">
        <h3 class="title flex-c" v-scroll-reveal.reset="$fadeInUp(0)">水碓秘境</h3>
        <div>
          <h3 v-scroll-reveal.reset="$fadeInUp(300)" class="sub-title">只是一個轉彎，城市竟能如此靜謐</h3>
          <p v-scroll-reveal.reset="$fadeInUp(300)">
            走進水碓，像是打開一個珠寶盒，精緻細膩的獨特風光
            <br />沿途大樹夾道招呼，光影與微風追逐‭ ‬
            <br />城市的喧鬧被隔絕了，競速的步調在這裡放慢了…
          </p>
        </div>
        <div class="second">
          <h3 v-scroll-reveal.reset="$fadeInUp(500)" class="sub-title">像是走進回憶裡，喚醒最親切的風景</h3>
          <p v-scroll-reveal.reset="$fadeInUp(500)">
            親自走一遭，您會想起年輕時的街隅
            <br />熟悉親切的矮房大院，濃郁的人情招呼
          </p>
        </div>
      </div>
      <div class="video-container relative" v-scroll-reveal.reset="$fadeInUp(1000, 2500)">
        <div :class="`mask absolute flex-c ${isPlay ? 'hide' : ''}`">
          <img src="./s2_play_btn.png" @click="handlePlay" alt="心天畝的圖片" />
        </div>
        <video ref="video">
          <source src="./video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 1050px;
  padding-top: 100px;
  position: relative;

  .tree-left {
    width: 33%;
    max-width: 472px;
    left: 0;
    top: 100px;
  }

  .tree-right {
    width: 28%;
    max-width: 410px;
    right: 0;
    top: 250px;
  }

  .content {
    width: 572px;
    margin: 0 auto;
    text-align: left;

    .second {
      margin-left: 160px;
    }

    .title {
      width: 339px;
      height: 97px;
      background-image: url('./s2_title_bg.png');
      background-size: cover;
      margin-bottom: 50px;
      color: #fff;
      font-size: 28px;
    }

    .sub-title {
      display: block;
      padding-left: 10px;
      border-left: 7px solid rgba(77, 77, 77, 0.3);
      color: #4d4d4d;
      font-size: 24px;
      margin-bottom: 15px;
    }

    p {
      line-height: 1.5;
      margin-bottom: 50px;
    }
  }

  .video-container {
    width: 950px;
    margin: 0 auto;
    .mask {
      z-index: 1;
      left: 0;
      width: 720px;
      height: 405px;
      background: rgba(0, 0, 0, 0.4);
      transition: all 0.5s;

      &.hide {
        opacity: 0;
      }

      img {
        width: 70px;
        cursor: pointer;
        position: relative;
        z-index: 2;
      }
    }
    video {
      position: absolute;
      left: 0;
      width: 720px;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    height: 778px;
    padding-top: 75px;

    .tree-left {
      width: 30%;
      max-width: 323px;
      top: 75px;
    }

    .tree-right {
      width: 27%;
      max-width: 286px;
      top: 225px;
    }

    .content {
      width: 430px;

      .second {
        margin-left: 120px;
      }

      .title {
        width: 251px;
        height: 71px;
        font-size: 20px;
      }

      .sub-title {
        display: block;
        padding-left: 10px;
        font-size: 18px;
        margin-bottom: 15px;
      }

      p {
        line-height: 1.5;
        font-size: 12px;
        margin-bottom: 50px;
      }
    }

    .video-container {
      width: 750px;
      margin: 0 auto;
      .mask {
        width: 532px;
        height: 300px;

        img {
          width: 60px;
        }
      }
      video {
        width: 532px;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .container {
    width: 100vw;
    height: auto;
    padding-top: 25px;

    .tree-left,
    .tree-right {
      display: none;
    }

    .content {
      width: 280px;

      .second {
        margin-left: 0px;
      }

      .title {
        width: 275px;
        height: 80px;
        font-size: 32px;
        margin-bottom: 20px;
      }

      .sub-title {
        display: block;
        padding-left: 10px;
        font-size: 15px;
        margin-bottom: 15px;
      }

      p {
        line-height: 1.5;
        font-size: 12px;
        margin-bottom: 25px;
      }
    }

    .video-container {
      width: 100%;
      margin: 0 auto;
      .mask {
        width: 100vw;
        height: calc((100vw * 9) / 16);

        img {
          width: 60px;
        }
      }
      video {
        position: relative;
        width: 100vw;
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
export default {
  name: 'section2',

  data() {
    return {
      loading: false,
      isPlay: false,
    }
  },

  methods: {
    handlePlay() {
      if (this.isPlay) {
        this.isPlay = false
        this.$refs.video.pause()
      } else {
        this.isPlay = true
        this.$refs.video.play()
      }
    },
  },

  created() {},
}
</script>
