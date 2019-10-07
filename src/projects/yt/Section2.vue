<template>
  <div class="section2">
    <div class="bg fullscreen">
      <div v-if="!isMobile">
        <img
          src="./s2/1.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="200"
        />
        <img
          src="./s2/2.gif"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade-down"
          data-aos-delay="400"
        />
        <img
          src="./s2/t1.png"
          alt="【知足】黃國書"
          class="bg-img"
          data-aos="fade-down"
          data-aos-delay="600"
        />
        <img
          src="./s2/t2.png"
          alt="東方而生的建築思維"
          class="bg-img"
          data-aos="fade-down"
          data-aos-delay="800"
        />
        <img
          src="./s2/t3.png"
          alt="【相信彎腰低頭，耕耘才有收穫】"
          class="bg-img"
          data-aos="fade-down"
          data-aos-delay="1000"
        />
        <img
          src="./s2/t4.png"
          alt="【樸實自有華美，領跑品牌之路】"
          class="bg-img"
          data-aos="fade-down"
          data-aos-delay="1100"
        />
      </div>
      <div v-else>
        <img
          src="./s2/mo/1.png"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="600"
        />
        <img
          src="./s2/mo/2.gif"
          alt="耘耕美築 恆久淳萃 公園綠景第一排"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="800"
        />
        <h3 class="title" data-aos="fade-down" data-aos-delay="200">東方而生的建築思維</h3>
        <div class="desc" data-aos="fade-down" data-aos-delay="400">
          見微知著的品牌哲學
          <br />琢磨最小的細節，推動最大的蛻變
        </div>
        <div class="dropdown" data-aos="fade-down" data-aos-delay="600">
          <div
            :class="`item ${item.open ? 'open' : ''}`"
            v-for="(item, index) in toggleList"
            :key="item.title"
          >
            <h3 @click="toggle(index)" class="head flex-jb flex-ac">
              <div>{{item.title}}</div>
              <img v-if="!item.open" src="./plus.png" alt class="btn" />
              <img v-if="item.open" src="./minus.png" alt class="btn" />
            </h3>
            <div class="content" v-html="item.desc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s2/bg.jpg');
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
    background: url('./s2/mo/bg.jpg');
    background-size: 100% 100%;
    // height: 100%;

    &.fullscreen {
      height: 100vh !important;
    }
  }

  .bg-img {
    &:nth-child(1) {
      position: absolute;
      z-index: 2;
    }
    top: auto;
    bottom: 0;
  }

  .title {
    border-left: 2px solid #02121c;
    padding-left: 15px;
    height: calc(100vw * 33 / 375);
    line-height: calc(100vw * 33 / 375);
    font-size: calc(100vw * 30 / 375);
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 1.2px;
    text-align: left;
    color: #02121c;
    width: calc(100vw * 310 / 375);
    margin: 0 auto;
    margin-top: calc(100vw * 50 / 375);
    margin-bottom: calc(100vw * 20 / 375);
  }

  .desc {
    width: calc(100vw * 310 / 375);
    font-size: calc(100vw * 19 / 375);
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: calc(100vw * 23 / 375);
    letter-spacing: 1.5px;
    text-align: left;
    color: #3e3a39;
    margin: 0 auto;
    margin-bottom: calc(100vw * 20 / 375);
    white-space: nowrap;
  }

  .dropdown {
    .item {
      height: 40px;
      overflow: hidden;
      border-bottom: solid 0.5px #595757;
      width: calc(100vw * 645 / 750);
      margin: 0 auto;
      transition: all 0.5s;

      &.open {
        height: auto;
      }
    }
    .head {
      font-size: calc(100vw * 20 / 375);
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 40px;
      letter-spacing: 1.6px;
      text-align: left;
      color: #595757;
    }

    .btn {
      width: 18px;
    }

    .content {
      padding-top: 0px;
      padding-bottom: 10px;
      font-size: calc(100vw * 14 / 375);
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.61;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
      white-space: nowrap;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      isMobile,
      toggleList: [
        {
          title: '相信彎腰低頭，耕耘才有收穫',
          desc:
            '頤昌建設張總經理，在房地產歷練超過二十個寒暑<br />凡事親力親為，站在現場第一線，並相信天助人自<br />助者，唯有不斷耕深，才能長出更紮實的建築。',
          open: false,
        },
        {
          title: '樸實自有華美，領跑品牌之路',
          desc:
            '建築之路並不易走，建築有如慢跑，一步步皆是積累<br />頤昌建設認為實在做好每件工作，就能引來知音相隨，<br />花若芬芳，蝴蝶自來。',
          open: false,
        },
      ],
    }
  },

  methods: {
    toggle(index) {
      if (this.toggleList[index].open) {
        this.toggleList[index].open = false
      } else {
        this.toggleList.forEach(item => (item.open = false))
        this.toggleList[index].open = !this.toggleList[index].open
      }
    },
  },
}
</script>
