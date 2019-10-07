<template>
  <div class="section3">
    <div class="bg relative">
      <div class="relative fullscreen">
        <div class="container" data-aos="fade"
        data-aos-delay="0">
          <img src="./s3/line.png" alt class="line" v-if="!isMobile" data-aos="scale-bottom"
        data-aos-delay="0" />
          <img src="./s3/img.jpg" alt class="img" data-aos="fade"
        data-aos-delay="300" />
          <div class="content" data-aos="fade"
        data-aos-delay="800">
            <div class="title">樹海公園</div>
            <div class="subtitle">城心之上，展現最令人心動的綠光風華</div>
            <div class="desc">
              地球上每多一棵樹，一年就可以減少十二公斤的二氧化碳，家住公園第一排不僅擁抱景觀視野，還能越住越建康。
              新北市每人平均綠地面積3.18平方公尺，東城大境正坐公園第一排，享受2100多平方米大綠活，健康最無價。
              東城大境公園樹海當窗景，每一戶都有空間驚喜，大棟距、大景觀、大採光，最奢侈的公園居住特權。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s3/bg.png');
  background-size: 100%;
  position: relative;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.line {
  width: 100vw;
  height: 70%;
  position: absolute;
  left: 0;
  top: 0;
}

.img {
  width: calc(100% * (1200 / 1920));
}

.content {
  width: calc(100% * (720 / 1920));
}

.title,
.desc,
.subtitle {
  width: calc(100vw * (450 / 1920));
  margin: 0 auto;
}

.title {
  font-size: 95px;
  font-weight: bold;
  text-align: left;
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 20px;
  margin-top: -20%;
}

.subtitle {
  font-size: 22px;
  line-height: 1.28;
  text-align: left;
  color: #ffef00;
  margin-bottom: 20px;
}

.desc {
  font-size: 17px;
  line-height: 1.3;
  text-align: justify;
  color: #ffffff;
}

@media only screen and (max-width: 1440px) and (min-width: 1200px) {
  .title {
    font-size: 80px;
  }

  .subtitle {
    font-size: 18px;
  }

  .desc {
    font-size: 17px;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .container {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .line {
    margin-top: -50px;
  }

  .title {
    font-size: 65px;
  }

  .subtitle {
    font-size: 17px;
  }

  .desc {
    font-size: 15px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .line {
    margin-top: -50px;
  }

  .title {
    font-size: 60px;
  }

  .subtitle {
    font-size: 14px;
  }

  .desc {
    font-size: 13px;
  }

  .fullscreen {
    height: auto;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }

  .container {
    display: block;
    padding-top: 20px;
  }

  .img {
    width: 100vw;
  }

  .fullscreen {
    height: auto !important;
  }

  .content {
    width: 90vw;
    margin: 0 auto;
    background: #487013;
    z-index: 3;
    position: relative;
    padding: 20px;
    margin-top: -40px;
    margin-bottom: 20px;
    .title,
    .subtitle,
    .desc {
      width: 100%;
    }

    .title {
      font-size: 65px;
      text-align: center;
      margin-top: 0;
    }

    .subtitle {
      font-size: 16px;
    }

    .desc {
      font-size: 15px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section3',
  mixins: [slider],

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
