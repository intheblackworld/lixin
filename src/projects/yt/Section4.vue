<template>
  <div class="section4">
    <div class="bg">
      <div v-if="!isMobile">
        <img src="./s4/1.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" data-aos="fade-down"
          data-aos-delay="200" />
        <img src="./s4/2.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" data-aos="fade-left"
          data-aos-delay="400" />
        <img src="./s4/3.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" data-aos="fade-right"
          data-aos-delay="600" />
        <img src="./s4/4.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" data-aos="fade-up"
          data-aos-delay="800" />
        <img src="./s4/5.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" data-aos="fade-right"
          data-aos-delay="1000" />
        <img src="./s4/t1.png" alt="淡江大橋連接台北都心生活" class="bg-img" data-aos="fade-down"
          data-aos-delay="600" />
        <img src="./s4/t2.png" alt="【十分鐘快意馳騁淡江大橋】" class="bg-img" data-aos="fade-right"
          data-aos-delay="400" />
        <img src="./s4/t3.png" alt="【放映浪漫淡水美麗新影城】" class="bg-img" data-aos="fade-left"
          data-aos-delay="800" />
        <img src="./s4/t4.png" alt="【金鬱金香酒店、葛林之森、雲門舞集】" class="bg-img" data-aos="fade-right"
          data-aos-delay="1000" />
      </div>
      <div v-else>
        <h3 class="title" data-aos="fade-down" data-aos-delay="200">淡江大橋連接台北都心生活</h3>
        <div class="desc" data-aos="fade-down" data-aos-delay="400">
          結合美麗新影城商場、滬尾藝文園區，
          <br />描繪淡水宜居新願景
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
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="800">
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.src" :class="`item-img`" />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev">
            <img src="./arrow-left.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./arrow-right.png" alt />
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s4/bg.jpg');
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
}

@media screen and (max-width: 767px) {
  .bg {
    background: url('./s4/mo/bg.jpg');
    width: 100vw;
    height: 200vw;
    background-size: 100%;
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

  .dropdown {
    .item {
      height: 45px;
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
      font-size: calc(100vw * 17 / 375);
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 45px;
      letter-spacing: 1.6px;
      text-align: left;
      color: #595757;
      white-space: nowrap;
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
    }
  }

  .swiper-container {
    margin-top: 30px;
  }

  .item-img {
    width: 90%;
    margin: 0 auto;
  }

  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: 5vw;
  }

  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 5vw;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section4',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      toggleList: [
        {
          title: '十分鐘快意馳騁淡江大橋',
          desc:
            '本案出發約十分鐘車程，就到「淡江大橋」預計 2024年完工，將大幅提升淡水交通效率連接八里新店、台六四快速道路快速連接五股蘆洲、三重板橋，強化與雙北的聯絡；同時淡江大橋也預留輕軌延伸線空間日後成為台灣首座公路、捷運、自行車的三合一橋樑。',
          open: false,
        },
        {
          title: '放映浪漫淡水美麗新影城',
          desc:
            '「淡海美麗新廣場」面積八千坪，包括五千坪生活館有日本料理、中式餐館、下午茶點心新穎豐富的特色商家，讓淡水人週末不用再往城內跑滿足全家人的採買需求。',
          open: false,
        },
        {
          title: '金鬱金香酒店、葛林之森、雲門舞集',
          desc:
            '斥資十六億台幣的滬尾文創園區由將捷集團引進國賓影城、國際級金鬱金香酒店打造葛林之森；與雲門劇場等藝文地景相互連結將藝術、商業、文化、地景完美結合，塑造淡水新風光。',
          open: false,
        },
      ],
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 2,
        allowSlidePrev: isMobile ? true : false,
        allowSlideNext: isMobile ? true : false,
        // centeredSlides: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        loop: isMobile,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          src: require('./s4/mo/img1.jpg'),
        },
        {
          src: require('./s4/mo/img2.jpg'),
        },

        {
          src: require('./s4/mo/img3.jpg'),
        },
        {
          src: require('./s4/mo/img4.jpg'),
        },
        {
          src: require('./s4/mo/img5.jpg'),
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
