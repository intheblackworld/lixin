<template>
  <div class="section8">
    <div class="bg fullscreen">
      <div v-if="!isMobile">
        <img src="./s8/1.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" data-aos="fade"
          data-aos-delay="1200" />
        <img src="./s8/2.gif" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" data-aos="fade"
          data-aos-delay="1200" />
        <img src="./s8/3.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" data-aos="fade"
          data-aos-delay="600" />
        <img src="./s8/4.png" alt="更好的 生活九大精品設備" class="bg-img" data-aos="fade-down"
          data-aos-delay="400" />
      </div>
      <div v-else class="m-block">
        <!-- <img src="./s8/mo/img.gif" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s8/mo/2.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s8/mo/3.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" /> -->
        <h3 class="title" data-aos="fade-down" data-aos-delay="400">更好的 生活九大精品設備</h3>
        <div class="desc" data-aos="fade-down" data-aos-delay="600">
          貼心為您呵護生活的每一天<br />
          精選九大建材設備，細心讓生活更幸福
        </div>
        <img src="./s8/mo/4.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" data-aos="fade-down" data-aos-delay="800" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s8/bg.jpg');
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
    height: 100vh;
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
    background: transparent;
    height: 100%;
    overflow: visible;
    &.fullscreen {
      height: auto !important;
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
    width: 90vw;
    margin: 0 auto;
    position: relative;
  }

  .m-block {
    margin-top: calc(-100vw * 360 / 750);
    position: relative;
    z-index: 1;
    margin-bottom: 20px;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section8',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},
}
</script>