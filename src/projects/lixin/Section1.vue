<template>
  <div class="section1">
    <!-- img="./bg.jpg" -->
    <div class="fullscreen">
      <div class="mask">
        <div class="title">用對的策略</div>
        <div class="type">LIXIN DIGITAL</div>
      </div>

      <video-bg autoplay="autoplay" :sources="[require('./s1/video.mp4')]"></video-bg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  // background: url('./s1/bg.jpg');
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
}

.VideoBg {
  width: 100vw;
  height: 100% !important;
  video {
    // position: fixed;
    z-index: 0;
  }
}

.mask {
  width: 100vw;
  height: 100%;
  position: absolute;
  z-index: 1;
  box-shadow: -2.1px 3.4px 8px 0 rgba(0, 0, 0, 0.08);
  background-color: rgb(228, 81, 18);
  mix-blend-mode: screen;
}

.title {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 30%;
  font-size: 58px;
  font-weight: bold;
  line-height: 1.88;
  letter-spacing: 2.32px;
  text-align: center;
  color: #ffffff;
}

.type {
  width: 1300px;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 4s steps(35) infinite alternate, caret 1s steps(1) infinite;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  font-size: 180px;
  line-height: 180px;
  font-weight: bold;
  letter-spacing: 7.32px;
  text-align: center;
  color: #000;
  border-right: 0.02em solid;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes caret {
  50% {
    border-color: transparent;
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
import VideoBg from '@/components/VideoBg.vue'
export default {
  name: 'section1',

  components: {
    VideoBg,
  },

  data() {
    return {
      isMobile,
    }
  },

  methods: {},
}
</script>
