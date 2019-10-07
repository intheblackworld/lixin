<template>
  <div class="section8">
    <div class="bg">
      <img src="./s8_txt.png" alt class="txt" v-if="!isMobile" data-aos="fade" data-aos-delay="300" />
      <div v-if="isMobile" class="m-content">
        <img src="./s8_bg_1_m.jpg" alt class="m-bg" data-aos="fade" data-aos-delay="300" />
        <!-- <img src="./s8_bg_2_m.jpg" alt class="m-bg" style="margin-top: -1px" /> -->
        <div class="toggle" data-aos="fade" data-aos-delay="500">
          <div
            :class="`item ${item.open ? 'open' : ''}`"
            v-for="(item, index) in toggleList"
            :key="item.title"
          >
            <div @click="toggle(index)" class="title flex-jb flex-ac">
              {{item.title}}
              <div class="btn">+</div>
            </div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
        <img src="./s8_bg_3_m.jpg" alt class="m-bg" style="margin-top: -1px" />
        <img src="./s8_img_m.jpg" alt class="m-img" />
        
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-size: cover;
  position: relative;
  background-image: url('./s8_bg.jpg');

  .txt {
    width: 100vw;
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
    background-size: 1920px auto;
    background-position: center;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: 55%;
  }

  .m-content {
    width: 100vw;
    position: relative;
    .m-bg {
      width: 100vw;
      display: block;
    }

    .m-img {
      position: absolute;
      top: 77vw;
      right: 0;
      width: 54vw;
    }
    .toggle {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      top: auto;
      left: auto;
      top: 0;
      background: url('./s8_bg_2_m.jpg');
      background-size: 100% 100%;
    }

    .item {
      width: calc(340 * 100vw / 375);
      height: 50px;
      background: transparent;
      border-bottom: 1px solid #c0c3c0;
      color: #00a29a;
      overflow: hidden;
      margin-bottom: 15px;
      cursor: pointer;
      transition: all 0.5s;

      &.open {
        height: auto;
        border-radius: 15px / 15px;
      }

      .btn {
        font-size: 24px;
        color: #fff;
        border-radius: 999px;
        background: #00a29a;
        width: 33px;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .title {
        font-size: 20px;
        height: 50px;
        margin-top: 0px;
        text-align: center;
        margin-bottom: 10px;
        padding: 3px 10px 0 10px;
        white-space: nowrap;
        width: 100%;

        img {
          width: 20px;
        }
      }

      .desc {
        font-size: 14px;
        padding: 0 10px 20px;
        line-height: 1.4;
        text-align: justify;
        width: 100%;
        color: #333;
      }
    }
  }
}
</style>

<script>
import { isMobile } from '@/utils'
export default {
  name: 'section8',

  data() {
    return {
      isMobile,
      toggleList: [
        {
          title: '鞏固結構強度-鋼筋續接器',
          desc:
            '結構設計，柱主筋採用SA級續接器鎖固續接。以避免傳統式搭接造成鋼筋排列太密，間隙不足，混凝土澆注困難造成蜂窩現象。',
          open: false,
        },
        {
          title: '更勇猛更紮實-筏式基礎',
          desc:
            '筏式基礎的承載面積大，能減小基底壓力，增加基礎剛度，當發生天災時，基礎之間的相互支援性較強，可大大降低房子地基的撕裂危機。',
          open: false,
        },

        {
          title: '結構安全工法-鋼筋綁紮',
          desc:
            '結構設計採用成本較高之高拉力鋼筋。以提供樑、柱等主筋之高降伏強度，達到最紮實的結構安全。',
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
