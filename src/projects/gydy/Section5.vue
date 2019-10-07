<template>
  <div class="section5">
    <div class="bg fullscreen relative">
      <img v-if="!isMobile" src="./s5_label.png" alt class="img relative" />
      <img v-if="!isMobile" src="./s5_subtitle.png" alt class="img" />
      <img v-if="!isMobile" src="./s5_title.png" alt class="img" />
      <img v-if="!isMobile" src="./s5_desc.png" alt class="img" />
      <img v-if="!isMobile" src="./s5_img_1.png" alt class="img" />
      <img v-if="!isMobile" src="./s5_img_2.png" alt class="img" />
      <div v-if="isMobile">
        <div class="title">
          住捷境超捷徑
          <br />最有效率的移動方式
          <br />把時間留給更重要的事
        </div>
        <div class="subtitle">
          北投站或是新北投站
          端看心情嚮往哪一站
        </div>
        <div :class="`desc ${isOpenDesc ? 'active': ''}`">
          <img
            @click="isOpenDesc = !isOpenDesc"
            src="./add-icon.png"
            class="add-icon"
            v-if="isMobile"
            alt
          />
          住進溫泉鄉，通勤族也能擁有朝九晚五準時打卡的日常！出門鳥語導航緩步3分鐘就到MRT新北投站，轉運匯入淡水信義線，上車瞬即與大台北交通網絡全面串聯。若覺得時間還早漫步正好，一路逛逛悠閒自在沿景舒心，10分鐘直抵捷運北投站，方便南來北往走西東，對外更有洲美快速道路、中山高速公路八達暢行聯通，另有貼心的台灣好行巴士前往陽明山、竹子湖等近郊任你遊，還有完善自行車道讓U-bike騎士微旅行趴趴走。
        </div>
        <img src="./s5_img_m.png" alt class="train" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s5_bg.jpg');
  background-size: cover;
  position: relative;
}

.img {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;

  &.relative {
    position: relative;
  }
}

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

  .title {
    width: 90vw;
    font-size: 32px;
    line-height: 1.19;
    text-align: left;
    color: #16679e;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .subtitle {
    width: 90vw;
    font-size: 32px;
    margin-bottom: 30px;
    line-height: 1.19;
    text-align: left;
    font-size: 24px;
    line-height: 1.29;
    color: #9e1616;
    margin: 0 auto;
  }

  .desc {
    width: 90vw;
    margin: 0 auto;
    font-size: 18px;
    text-overflow: clip;
    padding: 15px;
    line-height: 1.5;
    padding-left: 0;
    padding-bottom: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    position: relative;
    text-align: justify;
    .add-icon {
      position: absolute;
      right: 0px;
      top: 0px;
      width: 30px;
      cursor: pointer;
    }

    &.active {
      height: auto;
      display: block;
    }
  }

  .train {
    width: 100vw;
    height: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section5',

  data() {
    return {
      isOpenDesc: false,
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
