<template>
  <div class="section4">
    <img src="./s4_bg_1.jpg" alt class="bg-top" v-if="!isMobile" />
    <img src="./s4_bg_1_m.jpg" alt class="bg-top" v-else />
    <div class="bg fullscreen">
      <div class="container">
        <div class="row" data-aos="fade" data-aos-delay="0">
          <div class="circle" v-if="!isMobile">
            <div>
              <div class="title">大學墅畫出最美的幸福圓</div>
              <div class="desc">
                以基地為中心，向外畫一個圓，此圓即是大學墅的生活區域，
                同時正是全高雄最稀有之地一圓中有雙圓
              </div>
              <div class="title">圓中有校園</div>
              <div class="desc">
                高雄大學是台灣少數沒有圍牆的森林大學之一，
                校園佔地82公頃，同時也是南台灣培育學子的菁英殿堂，
                與基地僅離約150公尺，正是以大學作為社區前院的延伸；
                高大特區屬低密度住宅區，無大型工廠或商辦大樓，
                早期以透天產品居多，近年因土地漲幅大，漸漸地以新大樓為主。
                因此，大學墅的透天產品在該區實屬難得！
              </div>
            </div>
          </div>
          <div class="toggle" v-else data-aos="fade" data-aos-delay="200">
            <div
              :class="`item ${item.open ? 'open' : ''}`"
              v-for="(item, index) in toggleList"
              :key="item.title"
            >
              <div @click="toggle(index)" class="title flex-jb flex-ac">
                {{item.title}}
                <img src="./s4_arrow.png" alt />
              </div>
              <div class="desc">{{item.desc}}</div>
            </div>
          </div>
        </div>
        <div class="row" v-if="!isMobile">
          <img src="./s4_img1.png" alt data-aos="fade" data-aos-delay="200" />
          <img src="./s4_img2.png" alt data-aos="fade" data-aos-delay="400" />
          <img src="./s4_img3.png" alt data-aos="fade" data-aos-delay="600" />
        </div>
      </div>
      <div class="row" v-if="isMobile" data-aos="fade" data-aos-delay="200">
        <img src="./s4_img1.png" alt />
        <img src="./s4_img2.png" alt />
        <img src="./s4_img3.png" alt />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-position: 100% 0%;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('./s4_bg_2.jpg');
}

.bg-top {
  width: 100vw;
  display: block;
}

.fullscreen {
  overflow: initial;
}

.container {
  width: 90vw;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10%;
}

.circle {
  background-image: url('./s4_circle.png');
  width: calc((762 / 1920) * 100vw);
  height: calc((762 / 1920) * 100vw);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  > div {
    width: 100%;
  }
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 50%;

  img {
    width: 15vw;
  }

  &:nth-child(2) {
    margin-top: -10%;
  }
}

.title {
  color: #fffca6;
  font-size: calc((42 / 1920) * 100vw);
  width: 478px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.desc {
  color: #fff;
  font-size: calc((20 / 1920) * 100vw);
  line-height: 1.5;
  width: 478px;
  margin: 0 auto;
  margin-bottom: 30px;
  text-align: justify;
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
    background-size: 1920px auto;
    background-position: center;
  }

  .title,
  .desc {
    width: 70%;
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: 55%;
    background-image: url('./s4_bg_2_m.jpg');
    position: relative;
  }

  .container {
    width: 100%;
    flex-wrap: wrap;
  }

  .circle {
    display: none;
  }
  .row {
    width: 100%;
    &:nth-child(2) {
      position: absolute;
      bottom: 30px;
      left: 0;

      img {
        width: 30vw;
      }
    }
  }

  .toggle {
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    top: auto;
    left: auto;
  }

  .item {
    width: calc(340 * 100vw / 375);
    height: 40px;
    background: #6b7927;
    border-radius: 17px / 17px;
    color: #fff;
    overflow: hidden;
    margin-bottom: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &.open {
      height: auto;
      border-radius: 15px / 15px;
    }
    .title {
      font-size: 16px;
      height: 33px;
      margin-top: 0px;
      text-align: center;
      margin-bottom: 10px;
      padding: 3px 10px 0 30px;
      white-space: nowrap;
      width: 100%;

      img {
        width: 20px;
      }
    }

    .desc {
      font-size: 14px;
      padding: 0 20px 20px;
      text-align: justify;
      width: 100%;
    }
  }
}
</style>

<script>
import { isMobile } from '@/utils'
export default {
  name: 'section4',

  data() {
    return {
      isMobile,

      toggleList: [
        {
          title: '大學墅畫出最美的幸福圓',
          desc:
            '以基地為中心，向外畫一個圓，此圓即是大學墅的生活區域，同時正是全高雄最稀有之地一圓中有雙圓',
          open: false,
        },
        {
          title: '圓中有校園',
          desc:
            '高雄大學是台灣少數沒有圍牆的森林大學之一，校園佔地82公頃，同時也是南台灣培育學子的菁英殿堂，與基地僅離約150公尺，正是以大學作為社區前院的延伸；高大特區屬低密度住宅區，無大型工廠或商辦大樓，早期以透天產品居多，近年因土地漲幅大，漸漸地以新大樓為主。因此，大學墅的透天產品在該區實屬難得！',
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
