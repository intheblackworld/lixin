<template>
  <div class="section5">
    <div class="bg">
      <div class="container">
        <div class="text" data-aos="fade-right" data-aos-delay="0">
          <div class="title">用心深根 放心安穩</div>
          <hr />
          <li>
            地基12米深入岩盤：
            <br />筏式基礎保留中間樁，穩紮穩打
          </li>
          <li>
            國產安心建材履歷混凝土：
            <br />10樓以下抗壓強度4000psi
          </li>
          <li>PGA周夢龍建築師</li>
          <li>SA級鋼筋續接器</li>
          <li>結構技師劉國欽</li>
        </div>
        <img src="./s5/img1.jpg" alt class="img1" data-aos="fade-left" data-aos-delay="500" />
      </div>
      <img src="./s5/circle.png" alt class="circle" v-if="isMobile" />
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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  width: 100vw;
}

.img1 {
  margin-left: 100px;
}

.text {
  width: 425px;
  .title {
    font-size: 30px;
    font-weight: bold;
    line-height: 1.23;
    text-align: left;
    color: #231916;
    margin-bottom: 20px;
  }

  li {
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: -0.1px;
    text-align: left;
    color: #595857;
    margin-bottom: 15px;
    padding-left: 25px;
    &::before {
      content: '';
      display: inline-block;
      margin-left: -8px;
      line-height: 20px;
      width: 5px;
      height: 5px;
      border-radius: 7.5px;
      background-color: #595857;
      transform: translate(-15px, 13px);
      position: absolute;
    }
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

  .img1 {
    margin-left: 0px;
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .fullscreen {
    height: auto !important;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px 0;
    width: 100vw;
  }
  .img1 {
    margin-left: 0px;
    width: 100vw;
  }

  .text {
    width: 100vw;
    padding: 0 5vw;
    .title {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.23;
      text-align: left;
      color: #231916;
      margin-bottom: 20px;
    }

    li {
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: -0.1px;
      text-align: left;
      color: #595857;
      margin-bottom: 15px;
      padding-left: 25px;
      &::before {
        content: '';
        display: inline-block;
        margin-left: -8px;
        line-height: 20px;
        width: 5px;
        height: 5px;
        border-radius: 7.5px;
        background-color: #595857;
        transform: translate(-15px, 13px);
        position: absolute;
      }
    }
  }

  .circle {
    position: absolute;
    top: -40px;
    left: -30px;
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
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
