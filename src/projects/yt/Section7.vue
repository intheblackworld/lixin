<template>
  <div class="section7">
    <div class="bg fullscreen">
      <div v-if="!isMobile">
        <img src="./s7/img.gif" alt="生活中的美 只待你發現" class="bg-img" data-aos="fade"
          data-aos-delay="1000" />
        <img src="./s7/t1.png" alt="生活中的美 只待你發現" class="bg-img" data-aos="fade-down"
          data-aos-delay="600" />
      </div>
      <div v-else>
        <img src="./s7/mo/img.gif" alt="生活中的美 只待你發現" class="bg-img" data-aos="fade" data-aos-delay="1200" />
        <img src="./s7/mo/2.png" alt="生活中的美 只待你發現" class="bg-img" data-aos="fade" data-aos-delay="1000" />
        <img src="./s7/mo/3.png" alt="生活中的美 只待你發現" class="bg-img" data-aos="fade" data-aos-delay="800" />
        <h3 class="title" data-aos="fade-down" data-aos-delay="400">生活中的美 只待你發現</h3>
        <div class="desc" data-aos="fade-down" data-aos-delay="600">
          雕塑家羅丹如此說，建築必須越看
          <br />越美「頤昌耘萃」讓美走進心底
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s7/bg.jpg');
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
}

.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }

  .fullscreen {
    height: auto !important;
  }

  .bg-img {
    top: auto;
    bottom: 0;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background: url('./s7/mo/bg.jpg');
    background-size: 100%;
    &.fullscreen {
      height: calc(100vw * 1208 / 750) !important;
    }
  }

  .title {
    border-left: 2px solid #02121c;
    padding-left: 10px;
    padding-right: 10px;
    border-right: 2px solid #02121c;
    height: calc(100vw * 30 / 375);
    line-height: calc(100vw * 30 / 375);
    font-size: calc(100vw * 22 / 375);
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 1.2px;
    text-align: center;
    color: #02121c;
    width: calc(100vw * 310 / 375);
    margin: 0 auto;
    margin-top: calc(100vw * 30 / 375);
    margin-bottom: calc(100vw * 20 / 375);
  }

  .desc {
    width: calc(100vw * 310 / 375);
    font-size: calc(100vw * 17 / 375);
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: calc(100vw * 20 / 375);
    letter-spacing: 1.5px;
    text-align: left;
    color: #3e3a39;
    margin: 0 auto;
    margin-bottom: calc(100vw * 20 / 375);
    white-space: nowrap;
  }

  .bg-img {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    display: block;
    object-fit: cover;

    &:nth-child(1) {
      position: absolute;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section7',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},
}
</script>
