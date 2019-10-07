<template>
  <div class="section1">
    <div class="bg fullscreen">
      <div v-if="!isMobile">
        <img src="./s1/1.png" alt class="img" data-aos="fade-down" data-aos-delay="0" />
        <img src="./s1/2-1.png" alt :class="`img dog1 ${dog1 ? 'show' : ''}`" />
        <img src="./s1/2-2.png" alt :class="`img dog2 ${dog2 ? 'show' : ''}`" />
        <img src="./s1/3.png" alt class="img" data-aos="fade-down" data-aos-delay="600" />
        <img src="./s1/4.png" alt class="img grace" data-aos="fade" data-aos-delay="900" />
        <div class="text" data-aos="fade-down" data-aos-delay="900">
          弘華機構-和彩建設
          <br />在地深耕用心建築，值得您細心鑑賞
        </div>
      </div>
      <div v-else>
        <img src="./s1/m1.png" alt class="img" data-aos="fade-down" data-aos-delay="0" />
        <img src="./s1/2-1m.png" alt :class="`img dog1 ${dog1 ? 'show' : ''}`" />
        <img src="./s1/2-2m.png" alt :class="`img dog2 ${dog2 ? 'show' : ''}`" />
        <img src="./s1/m3.png" alt class="img" data-aos="fade-down" data-aos-delay="600" />
        <img src="./s1/m4.png" alt class="img" data-aos="fade-down" data-aos-delay="900" />
        <div class="text" data-aos="fade-down" data-aos-delay="900">
          弘華機構-和彩建設
          <br />在地深耕用心建築，值得您細心鑑賞
        </div>
      </div>
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

.img {
  width: 1920px;
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  margin-left: -960px;
  object-fit: contain;
}

.dog1,
.dog2 {
  opacity: 0;

  &.show {
    opacity: 1;
  }
}

.grace {
  margin-left: -960px;
  animation: grace 2s linear infinite alternate;
  transform-origin: bottom;
}

@keyframes grace {
  from {
    transform: skewX(-5deg);
  }
  to {
    transform: skewX(0deg);
  }
}

.text {
  text-align: center;
  position: absolute;
  top: 84%;
  font-size: 2.8vh;
  line-height: 1.4;
  left: 0;
  width: 100%;
  color: #00a398;
  font-weight: bold;
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

  .img {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    margin-left: 0px;
    object-fit: initial;

    &:nth-child(1) {
      position: relative;
    }
  }

  .dog1, .dog2 {
    z-index: 4;
  }

  .text {
    top: 90%;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import { setInterval } from 'timers'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      dog1: true,
      dog2: false,
    }
  },

  methods: {},

  created() {
    setInterval(() => {
      this.dog1 = !this.dog1
      this.dog2 = !this.dog2
    }, 3000)
  },
}
</script>
