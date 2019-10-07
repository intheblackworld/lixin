<template>
  <div class="section6">
    <div class="fullscreen bg-cover bg relative">
      <div class="flex-jb wrap">
        <div class="content">
          <div
            class="label"
            data-aos="fade"
            data-aos-offset="50"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="false"
          >【 韻致建築 】</div>
          <div class="flex-ab flex-jb">
            <h3
              class="title"
              data-aos="fade"
              data-aos-offset="50"
              data-aos-delay="300"
              data-aos-duration="1500"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              三重水畔最美留白
              <br />超低建蔽規劃
            </h3>
          </div>
        </div>
        <div
          class="toggle"
          data-aos="fade"
          data-aos-offset="50"
          data-aos-delay="600"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div
            :class="`item ${item.open ? 'open' : ''}`"
            v-for="(item, index) in toggleList"
            :key="item.title"
          >
            <h3 @click="toggle(index)" class="title flex-jb flex-ac">
              {{item.title}}
              <img src="./s6_arrow.png" alt />
            </h3>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!loading"></div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/style/variableDefault.scss';
.bg {
  background-image: url('./s6_bg.jpg');
}

.fullscreen-container {
  min-width: 1100px;
}

.content {
  color: #fff;
  text-align: left;
  // margin-top: calc((100vh - #{$nav_pc_height}) * (130 / 900));
  // transform: none;
  // margin-left: 20px;
  position: absolute;
  left: 34%;
  transform: translate(-100%, 0);
  top: 10%;
}
.label {
  font-size: 3.7vh;
  margin-bottom: 10px;
}

.title {
  font-size: 5.3vh;
  line-height: 1.4;
  letter-spacing: 3px;
}

.desc {
  font-size: 2.7vh;
  line-height: 1.7;
}

.toggle {
  // margin-top: calc((100vh - #{$nav_pc_height}) * (260 / 900));
  // margin-right: 37px;
  top: 30%;
  left: 63%;
  position: absolute;
}

.item {
  width: calc(380 * 100vw / 1440);
  height: 44px;
  background: rgba(12, 73, 127, 0.5);
  border-radius: 33px / 33px;
  color: #fff;
  overflow: hidden;
  margin-bottom: 40px;
  cursor: pointer;
  transition: all 0.5s;

  &.open {
    height: auto;
    border-radius: 15px / 15px;
  }
  .title {
    font-size: 2.8vh;
    height: 44px;
    margin-top: 0px;
    text-align: center;
    margin-bottom: 10px;
    padding: 0 10px 0 30px;
    white-space: nowrap;

    img {
      width: 20px;
    }
  }

  .desc {
    font-size: 1.7vh;
    padding: 0 20px 20px;
    text-align: justify;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .label {
    font-size: 3vh;
    margin-bottom: 10px;
  }

  .title {
    font-size: 4.5vh;
    line-height: 1.4;
    letter-spacing: 3px;
  }

  .desc {
    font-size: 2vh;
    line-height: 1.7;
  }
  .toggle {
    margin-top: 0;
    margin-right: 0;
    top: 25%;
    right: 67%;
  }

  .item {
    width: calc(420 * 100vw / 1440);
    .title {
      font-size: 2vh;
    }
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s6_bg_m.jpg');
  }
  .content {
    color: #fff;
    text-align: left;
    top: auto;
    transform: none;
    position: relative;
    left: auto;
    top: auto;
    margin-left: 20px;
    margin-top: 40px;

    .flex-ab {
      flex-wrap: wrap;
    }
  }

  .fullscreen-container {
    min-width: auto;
  }

  .label {
    font-size: 3vh;
    margin-bottom: 10px;
  }

  .title {
    font-size: 4vh;
    line-height: 1.3;
    letter-spacing: 3px;
  }

  .desc {
    font-size: 2.4vh;
    line-height: 1.7;
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

  .fullscreen-container {
    display: block;
  }

  .item {
    width: calc(340 * 100vw / 375);
    height: 33px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 17px / 17px;
    color: #fff;
    overflow: hidden;
    margin-bottom: 10px;
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
      padding: 0 10px 0 30px;
      white-space: nowrap;

      img {
        width: 20px;
      }
    }

    .desc {
      font-size: 14px;
      padding: 0 20px 20px;
      text-align: justify;
    }
  }
}
</style>

<script>
export default {
  name: 'section6',

  data() {
    return {
      loading: true,
      toggleList: [
        {
          title: '戶戶土地持分10坪以上',
          desc:
            '20%建蔽率，讓住戶擁有大片開放空間，居住環境更舒適。同時擁有人均最大土地持分，每戶至少10坪以上。全區唯一超高土地持分!',
          open: false,
        },
        {
          title: '花園裡的家，城市微型綠洲',
          desc:
            '用綠意彩繪建築身段，四季花藝勾勒一座城市綠洲。走進花園就到家，在城市聽見自然的聲音',
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

  created() {
    window.setTimeout(() => {
      this.loading = false
    }, 1000)
  },
}
</script>
