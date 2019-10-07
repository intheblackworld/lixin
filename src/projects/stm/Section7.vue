<template>
  <div class="section7">
    <div class="container">
      <h3 class="title flex-c" v-scroll-reveal.reset="!isMobile ? $fadeInUp() : $fadeInUp()">春木林團隊</h3>
      <h3
        class="sub-title"
        v-scroll-reveal.reset="!isMobile ? $fadeInUp(300) : $fadeInUp()"
      >種下家的種子，十年後就會長成大樹</h3>
      <div
        class="small-title"
        v-scroll-reveal.reset="!isMobile ? $fadeInUp(600) : $fadeInUp()"
      >用種樹的精神蓋房子，以站在樹頂的眼光看未來</div>
    </div>
    <div class="section">
      <h3
        class="section-title"
        v-scroll-reveal.reset="!isMobile ? $fadeInUp(600) : $fadeInUp()"
      >堅持開發大型基地，掌握先天優勢</h3>
      <div
        class="section-sub-title"
        v-scroll-reveal.reset="!isMobile ? $fadeInUp(900) : $fadeInUp()"
      >春木林團隊，以開發大型基地為主軸</div>
      <div class="list-container flex wrap" v-if="!isMobile">
        <div class="list-item" v-scroll-reveal.reset="$fadeInLeft(900)">
          <h3 class="list-label">01</h3>
          <div class="list-desc">大基地較易建築棟距規劃</div>
        </div>
        <div class="list-item" v-scroll-reveal.reset="$fadeInLeft(1100)">
          <h3 class="list-label">04</h3>
          <div class="list-desc">大基地的公設空間運用更有效</div>
        </div>
        <div class="list-item" v-scroll-reveal.reset="$fadeInLeft(1300)">
          <h3 class="list-label">02</h3>
          <div class="list-desc">大基地的建築採光面更良好</div>
        </div>
        <div class="list-item" v-scroll-reveal.reset="$fadeInLeft(1500)">
          <h3 class="list-label">05</h3>
          <div class="list-desc">大基地的城市地標設計更經典</div>
        </div>
        <div class="list-item" v-scroll-reveal.reset="$fadeInLeft(1700)">
          <h3 class="list-label">03</h3>
          <div class="list-desc">大基地的空間尺度規劃更人性</div>
        </div>
      </div>
      <div class="list-container flex wrap" v-if="isMobile">
        <div class="list-item" v-scroll-reveal.reset="$fadeInLeft(900)">
          <h3 class="list-label">01</h3>
          <div class="list-desc">大基地較易建築棟距規劃</div>
        </div>
        <div class="list-item" v-scroll-reveal.reset="$fadeInLeft(1100)">
          <h3 class="list-label">02</h3>
          <div class="list-desc">大基地的建築採光面更良好</div>
        </div>
        <div class="list-item" v-scroll-reveal.reset="$fadeInLeft(1300)">
          <h3 class="list-label">03</h3>
          <div class="list-desc">大基地的空間尺度規劃更人性</div>
        </div>
        <div class="list-item" v-scroll-reveal.reset="$fadeInLeft(1500)">
          <h3 class="list-label">04</h3>
          <div class="list-desc">大基地的公設空間運用更有效</div>
        </div>
        <div class="list-item" v-scroll-reveal.reset="$fadeInLeft(1700)">
          <h3 class="list-label">05</h3>
          <div class="list-desc">大基地的城市地標設計更經典</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.title {
  width: 340px;
  height: 101px;
  background-image: url('./s6_title_bg.png');
  background-size: cover;
  color: #fff;
  font-size: 28px;
  margin: 0 auto;
  margin-bottom: 25px;
}

.sub-title {
  font-size: 28px;
  color: #2b466f;
  margin-bottom: 20px;
}

.small-title {
  font-size: 24px;
  color: #2b466f;
  margin-bottom: 40px;
}

.section {
  width: 100vw;
  height: 430px;
  background-size: cover;
  background-image: url('./s7_section_bg.png');
  color: #fff;
  padding-top: 50px;
  margin-bottom: 50px;

  .section-title {
    font-size: 28px;
    margin-bottom: 15px;
  }

  .section-sub-title {
    font-size: 24px;
    margin-bottom: 50px;
  }

  .list-container {
    width: 610px;
    margin: 0 auto;
    .list-item {
      width: 50%;
      text-align: left;
      margin-bottom: 25px;

      &:nth-child(3) {
        transform: translateX(55px);
      }

      &:nth-child(4) {
        transform: translateX(55px);
      }

      &:nth-child(5) {
        transform: translateX(110px);
      }

      .list-label {
        height: 23px;
        border-left: 7px solid rgba(255, 255, 255, 0.3);
        font-size: 24px;
        padding-left: 15px;
      }

      .list-desc {
        padding-left: 20px;
        padding-top: 10px;
        font-size: 16px;
      }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .title {
    width: 300px;
    height: 90px;
    background-image: url('./s6_title_bg.png');
    background-size: cover;
    margin-bottom: 15px;
    color: #fff;
    font-size: 32px;
  }

  .sub-title {
    font-size: 18px;
    color: #2b466f;
    margin-bottom: 20px;
  }

  .small-title {
    font-size: 15px;
    color: #2b466f;
    width: 200px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .title {
    width: 300px;
    height: 90px;
    background-image: url('./s6_title_bg.png');
    background-size: cover;
    margin-bottom: 15px;
    color: #fff;
    font-size: 32px;
  }

  .sub-title {
    font-size: 18px;
    color: #2b466f;
    margin-bottom: 20px;
  }

  .small-title {
    font-size: 15px;
    color: #2b466f;
    width: 200px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .section {
    width: 100vw;
    height: calc(100vw * (476 / 320));
    background-size: cover;
    background-image: url('./s7_section_bg_m.png');
    color: #fff;
    padding-top: 60px;
    margin-bottom: 50px;

    .section-title {
      font-size: 20px;
      margin-bottom: 12px;
    }

    .section-sub-title {
      font-size: 17px;
      margin-bottom: 15px;
    }

    .list-container {
      width: 100vw;
      margin: 0 auto;
      .list-item {
        width: 230px;
        text-align: left;
        margin: 0 auto;
        margin-bottom: 15px;

        &:nth-child(3) {
          transform: translateX(0px);
        }

        &:nth-child(4) {
          transform: translateX(0px);
        }

        &:nth-child(5) {
          transform: translateX(0px);
        }

        .list-label {
          height: 23px;
          border-left: 7px solid rgba(255, 255, 255, 0.3);
          font-size: 16px;
          padding-left: 15px;
          padding-top: 3px;
        }

        .list-desc {
          padding-left: 15px;
          padding-top: 5px;
          font-size: 16px;
        }
      }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
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
      loading: true,
    }
  },

  methods: {},

  created() {
    window.setTimeout(() => {
      // this.loading = false
    }, 1500)
  },
}
</script>
