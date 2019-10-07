<template>
  <div class="section6">
    <div class="bg fullscreen relative">
      <div class="container">
        <div class="title">
          新屋保固超級比一比
          <br />用心守護竭盡誠意
        </div>
        <div class="desc" v-if="!isMobile">
          公園大院保固契約 防水保固5年
          <span>
            <img src="./red-icon.png" alt />
          </span>設備保固2年
          <span>
            <img src="./red-icon.png" alt />
          </span>結構保固15年
        </div>
        <div class="desc" v-if="!isMobile">
          一般建案定型契約 防水保固1年
          <span></span>設備保固1年
          <span></span>結構保固15年
        </div>
        <div class="desc" v-if="isMobile">
          公園大院保固契約
          <br />防水保固5年
          <span>
            <img src="./red-icon.png" alt />
          </span>
          <br />設備保固2年
          <span>
            <img src="./red-icon.png" alt />
          </span>
          <br />結構保固15年
        </div>
        <div class="desc" v-if="isMobile">
          一般建案定型契約
          <br />防水保固1年
          <span></span>
          <br />設備保固1年
          <span></span>
          <br />結構保固15年
        </div>
        <div class="img-content">
          <img src="./s8_img_1.png" alt />
          <img src="./s8_img_2.png" alt />
          <img src="./s8_img_3.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s6_bg.png');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.title {
  margin-top: 30px;
  font-size: 48px;
  line-height: 1.35;
  text-align: center;
  color: #16679e;
  margin-bottom: 15px;
}

.desc {
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: #000000;
  span {
    display: inline-block;
    width: 30px;
  }
}

.img-content {
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  img {
    width: 30%;
    margin: 0 20px;
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

  .container {
    width: 92vw;
  }

  .title {
    font-size: 32px;
  }

  .desc {
    display: inline-block;
    width: 50%;
    text-align: left;
  }

  .img-content {
    flex-wrap: wrap;
    img {
      width: 240px;
      display: block;
      margin-bottom: 30px;
    }
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
