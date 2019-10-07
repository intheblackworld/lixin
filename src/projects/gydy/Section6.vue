<template>
  <div class="section6">
    <div class="bg fullscreen relative">
      <img v-if="!isMobile" src="./s6_label.png" alt class="img relative" />
      <img v-if="!isMobile" src="./s6_subtitle.png" alt class="img" />
      <img v-if="!isMobile" src="./s6_title.png" alt class="img" />
      <img v-if="!isMobile" src="./s6_desc.png" alt class="img" />
      <img v-if="!isMobile" src="./s6_img_2.png" alt class="img" />
      <img v-if="!isMobile" src="./s6_img_1.png" alt class="img" />
      <div v-if="isMobile">
        <div class="title">
          環境不只造就人才
          <br />還能讓孩子發揮潛能從
          <br />起跑點一路贏到未來
        </div>
        <div class="subtitle">
          政商菁英名流學府
          <br />薇閣名校近在咫尺
        </div>
        <div :class="`desc ${isOpenDesc ? 'active': ''}`">
          <img
            @click="isOpenDesc = !isOpenDesc"
            src="./add-icon.png"
            class="add-icon"
            v-if="isMobile"
            alt
          />
          向來強調中西並用，走向世界，也讓世界走進來的雙語學校「薇閣」，以幼稚園、國小、國中、高中之人才教育聞名，蔚為潮流的讀經閱冊之經典教育，加強學習、記憶與專注力，搭配不同主題、品格教育和多元外語，更致力於田園、環境、藝術、人文…等360度全方位學習，就算選擇了北投區域公立學校，文教場域文風鼎盛人文匯萃，不必是貴族亦能感受知性的書卷氣，各級學校大學林立，成為孕育術德兼備之英傑孵化基地。
        </div>
        <img src="./s6_img_m.png" alt class="train" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s6_bg.png');
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
  name: 'section6',

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
