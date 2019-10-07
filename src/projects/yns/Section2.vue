<template>
  <div class="section2">
    <div class="bg fullscreen">
      <img
        src="./s2/map.jpg"
        alt
        class="map"
        v-if="!isMobile"
        data-aos="fade-down"
        data-aos-delay="0"
      />
      <img
        src="./s2/map_icon.png"
        alt
        class="icon"
        data-aos="fade-down"
        data-aos-delay="500"
      />
      <img
        src="./s2/map_icon.png"
        alt
        class="icon2"
        data-aos="fade-down"
        data-aos-delay="500"
      />
      <img
        src="./s2/map.jpg"
        alt
        class="map"
        v-if="isMobile"
        data-aos="fade-down"
        data-aos-delay="0"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-image: url('./s1/bg.png');
  position: relative;
  overflow: hidden;
  position: relative;
}

.map {
  height: 90vh;
  width: auto;
  margin: 0 auto;
  margin-top: 5vh;
}

.icon, .icon2 {
  position: absolute;
  height: 90vh;
  width: auto;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: 5vh;
  z-index: 2;
}

.icon {
  animation: heartbeat 1s infinite;
}

@keyframes heartbeat {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0.75;
  }
  100% {
    opacity: 0.75;
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
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .fullscreen {
    height: auto !important;
  }

  .map {
    margin-top: 0;
    width: 100vw;
    height: auto;
    position: relative;
  }

  .icon, .icon2 {
    width: 100vw;
    height: auto;
    margin-top: 0;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
