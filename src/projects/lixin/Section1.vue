<template>
  <div class="section1">
    <!-- img="./bg.jpg" -->
    <div class="fullscreen bg">
      <div class="mask" v-if="isMobile">
        <div class="title typing" v-show="showFirst">用對的策略</div>
        <div class="title typing" v-show="showSecond">做對的行銷</div>
        <!-- <div class="type">LIXIN DIGITAL</div> -->
      </div>
      <div class="mask" v-else>
        <div class="title typing">用對的策略 做對的行銷</div>
        <!-- <div class="type">LIXIN DIGITAL</div> -->
      </div>
      <video-bg autoplay="autoplay" :sources="[require('./s1/video.mp4')]" :isFix="false"></video-bg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  // background: url('./s1/bg.jpg');
  background-size: cover;
  position: relative;
  overflow: hidden;
  z-index: 3;
  // position: fixed;
}

.VideoBg {
  width: 100vw;
  height: 100% !important;
  video {
    // position: fixed;
    z-index: 2;
  }
}

.mask {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 2;
  box-shadow: -2.1px 3.4px 8px 0 rgba(0, 0, 0, 0.08);
  background: url('./s1/bg.png');
  background-size: cover;
  background-position: center center;
  // mix-blend-mode: screen;
  // position: fixed;
}

.title {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 35%;
  font-size: 58px;
  font-weight: bold;
  line-height: 1.88;
  letter-spacing: 2.32px;
  text-align: center;
  color: #ffffff;
  height: 67px;
  display: flex;
  align-items: center;
}

.typing {
  width: 11.4em;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 5s steps(12) infinite;
}

@keyframes typing {
  0% {
    width: 0;opacity: 1;
  }

  40% {
    width: 11.4em;
  }

  95% {
    width: 11.4em;opacity: 1;
  }
  100% {
    width: 11.4em;opacity: 0;
  }
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    min-height: 750px;
  }

  .mask {
    height: 100%;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .mask {
    background-image: url('./s1/tbg.png');
  }
}

@media screen and (max-width: 767px) {
  .mask {
    background-image: url('./s1/mobg.png');
  }

  .title {
    font-size: 45.5px;
    top: 25%;
  }

  .typing {
    width: 290px;
  }

  .typing {
    width: 290px;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.04em solid;
    animation: typing 4s steps(5) infinite, caret 1s steps(1) infinite;
  }

  @keyframes typing {
    0% {
      width: 0;
    }

    60% {
      width: 240px;
    }

    100% {
      width: 240px;
    }
  }

  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import VideoBg from '@/components/VideoBg.vue'
import { setInterval } from 'timers'
export default {
  name: 'section1',

  components: {
    VideoBg,
  },

  data() {
    return {
      isMobile,
      showFirst: true,
      showSecond: false,
    }
  },

  methods: {},

  mounted() {
    setInterval(() => {
      this.showFirst = !this.showFirst
      this.showSecond = !this.showSecond
    }, 4000)
  },
}
</script>
