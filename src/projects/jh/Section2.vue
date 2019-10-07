<template>
  <div class="section2 relative">
    <img
      src="./s2/circle_small.png"
      alt
      class="absolute circle_small"
      data-aos="fade"
      data-aos-delay="100"
    />
    <img src="./s2/line.png" alt class="absolute line" data-aos="scale-bottom" data-aos-delay="400" />
    <img
      src="./s2/circle_mid.png"
      alt
      class="absolute circle_mid"
      data-aos="scale-in"
      data-aos-delay="800"
      data-aos-duration="700"
    />
    <img
      src="./s2/circle_big.png"
      alt
      class="absolute circle_big"
      data-aos="scale-in"
      data-aos-delay="1200"
      data-aos-duration="700"
    />
    <div class="bg fullscreen">
      <Map :bgSrc="bgSrc" :hand="hand">
        <img
          src="./s2/light.png"
          alt
          class="absolute light"
          data-aos="scale-bottom"
          data-aos-delay="1200"
        />
        <img src="./s2/frame.png" alt class="frame" />
      </Map>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: relative;
  overflow: hidden;
  position: relative;
}

.circle_small {
  left: 0;
  right: 0;
  margin: 0 auto;
  top: -180px;
}

.circle_mid,
.circle_big {
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 5;
}

.circle_mid {
  top: calc(100vh * (-54 / 1080));
  width: calc(100vw * (568 / 1920));
}

.circle_big {
  top: calc(100vh * (-90 / 1080));
  width: calc(100vw * (638 / 1920));
}

.line {
  top: -156px;
  height: calc(100vh * (270 / 1080));
  z-index: 2;
}

.light {
  width: calc(100vw * (120 / 1920));
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  margin-top: calc(-100vh * (250 / 1080));
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .fullscreen {
    height: auto;
  }
}

@media screen and (max-width: 767px) {
  .circle_small {
    left: 0;
    right: 0;
    margin: 0 auto;
    top: -114px;
  }

  .circle_mid,
  .circle_big {
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 5;
  }

  .circle_mid {
    top: calc(100vh * (-54 / 1200));
    width: calc(100vw * (568 / 750));
  }

  .circle_big {
    top: calc(100vh * (-90 / 1200));
    width: calc(100vw * (638 / 750));
  }

  .line {
    top: -90px;
    height: auto;
    z-index: 12;
  }

  .light {
    display: none;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import Map from '@/components/Map.vue'
export default {
  name: 'section2',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      bgSrc: require('./s2/bg.jpg'),
      hand: require('../lkf/s4_hand.png')
    }
  },

  methods: {},

  created() {},
}
</script>
