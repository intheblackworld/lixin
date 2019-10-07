<template>
  <div class="section1">
    <div class="fullscreen bg">
      <div class="star comet"></div>
      <img src="./s1_logo.png" alt class="logo" data-aos="fade-down" data-aos-delay="0" />
    </div>
    <img src="./s1_bg_bottom.png" alt class="bg-bottom" v-if="!isMobile" />
    <img src="./s1_bg_bottom_m.png" alt class="bg-bottom" v-if="isMobile" />
  </div>
</template>
<style lang="scss">
.star {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  opacity: 0.5;
  position: absolute;
  background-color: rgba(255, 255, 220, 0.2);
  box-shadow: 0 0 40px 0 rgba(255, 255, 220, 0.2), 0 0 20px 0 #ffffff;
  animation: glow 5s infinite;
}

/*  小星*/
.star--medium {
  width: 300px;
  height: 300px;
  box-shadow: 0 0 40px 0 rgba(255, 255, 220, 0.3), 0 0 20px 0 #ffffff,
    inset 0 0 4px #ffffff;
}

/*  大星 */
.star--big {
  width: 300px;
  height: 300px;
  box-shadow: 0 0 40px 0 rgba(255, 255, 220, 0.2), 0 0 20px 0 #ffffff,
    inset 0 0 4px #ffffff;
}

@keyframes glow {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-position: 100% 0%;
  background-size: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('./s1_bg.jpg');
}

.bg-bottom {
  width: 100vw;
  height: auto;
  margin-top: calc(-100vw * (250 / 1920));
  display: block;
  position: relative;
  z-index: 2;
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
    background-size: 1920px auto;
    background-position: center;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: 55%;
    background-size: cover;
  }

  .logo {
    width: 55vw;
    margin-top: -80px;
  }

  .bg-bottom {
    margin-top: calc(-100vw * (218 / 750));
  }
}
</style>

<script>
import { isMobile } from '@/utils'
export default {
  name: 'section1',

  data() {
    return {
      isMobile,
    }
  },

  mounted() {
    const wH = window.innerHeight
    const wW = window.innerWidth

    const generateStars = n => {
      for (let i = 0; i < n; i++) {
        const div = document.createElement('div')
        div.className =
          i % 30 == 0
            ? 'star star--big'
            : i % 100 == 0
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
    generateStars(150)
  },

  methods: {},
}
</script>
