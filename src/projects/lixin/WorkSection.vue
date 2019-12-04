<template>
  <div class="work-section">
    <!-- img="./bg.jpg" -->
    <div class="work-top">
      <div class="title">OUR WORK</div>
      <div class="line"></div>
      <div class="filter-btns">
        <div
          :class="`${filterType === 'video' ? 'active' : ''} btn`"
          @click="changeFilterType('video')"
        >video</div>
        <div
          :class="`${filterType === 'web' ? 'active' : ''} btn`"
          @click="changeFilterType('web')"
        >web</div>
      </div>
    </div>
    <div class="work-container">
      <div class="work-row flex" v-for="(row, rowIndex) in workRow" :key="`row-${rowIndex}`">
        <div
          :class="`work-item relative no-padding`"
          v-for="item in row"
          :key="`item-${item.img}`"
        >
          <div v-if="item.type === 'video'" class="video-item">
            <div class="play-group reverse">
              <icon class="play" :data="play" @click="showDialog(item.type, item.link)" />
            </div>
            <div class="work-content relative">
              <img :src="item.img" alt class="work-img" />
            </div>
          </div>
          <div v-if="item.type === 'web'" class="web-item">
            <div class="mask">
              <h3 class="mask-title">
                {{item.title}}
                <h3 class="mask-subtitle">PROJECT</h3>
              </h3>
              <div class="mask-line"></div>
              <div class="mask-btn" @click="showDialog(item.type, item.link)">
                <h3>VIEW</h3>
                <div class="btn-border"></div>
              </div>
            </div>
            <div class="work-content relative">
              <img :src="item.img" alt class="work-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="`dialog ${isShowDialog ? '' : 'hide'}`">
      <div class="close" @click="closeDialog">
        <img src="./s5/close.png" alt />
      </div>
      <div class="dialog-content">
        <iframe width="560" height="315" :src="iframeLink" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
    <div class="work-line"></div>
  </div>
</template>

<style lang="scss">
.play-group.reverse {
  cursor: pointer;
  .st0 {
    fill: #fff !important;
    transition: all 0.3s;
  }

  .st1 {
    fill: #ed6d34 !important;
  }

  .st2 {
    display: none;
  }

  .st3 {
    display: inline;
  }

  &:hover {
    .st0 {
      fill: #000;
    }
  }
}
</style>

<style lang="scss" scoped>
.work-section {
  margin-top: 190px;
  margin-bottom: 120px;
}

.work-top {
  margin: 0 auto;
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 132.5px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    text-align: left;
    color: #ed6d34;
  }

  .line {
    width: 203px;
    height: 1px;
    background: #ed6d34;
  }

  .filter-btns {
    width: 154px;
    height: 77px;
    display: flex;

    .btn {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eeeeee;
      fill: #666;
      color: #666;
      cursor: pointer;

      &.active {
        background: #ed6d34;
        fill: #fff;
        color: #fff;
      }
    }
  }
}
.play-group {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  width: 67px;
  height: 67px;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;

  svg {
    width: 100%;
    height: 100%;
  }
}
.work-container {
  width: 1440px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 67px;

  .work-row {
    margin-left: -5px;
    margin-right: -5px;
  }

  .work-item {
    // box-shadow: 0 0 2px 1px #666;
    // border-radius: 5px;
    margin: 15px 5px;
    padding: 15px;
    overflow: hidden;
    max-width: calc(20% - 10px);
    transition: all 0.3s;

    &.no-padding {
      padding: 0;
    }

    .mask {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      background: rgba(237, 109, 52, 0.75);
      // border-radius: 5px;
      transition: all 0.5s ease-in-out;
      opacity: 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      .mask-title {
        font-size: 26.5px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: 1.33px;
        text-align: center;
        color: #ffffff;
        transition: all 0.3s ease-in-out;
        transition-delay: 0.2s;
        opacity: 0;
        transform: translateY(15px);
      }

      .mask-subtitle {
        font-size: 10px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: 0.5px;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
      }

      .mask-line {
        width: 1px;
        height: 50px;
        margin: 0 auto;
        background: #fff;
        margin-top: -50px;
      }

      .mask-btn {
        width: 120px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 5px;
        margin: 0 auto;
        margin-top: -100px;
        transition: all 0.5s ease;
        transition-delay: 0.3s;
        cursor: pointer;
        opacity: 0;
        // transform: translate(-5px, -5px);
        position: relative;

        .btn-border {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          border: 1px solid #fff;
          position: absolute;
          // transform: translate(0px, 0px);
          transition: all 0.5s;
          transition-delay: 0.5s;
        }

        h3 {
          font-size: 13px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.15;
          letter-spacing: 0.65px;
          text-align: center;
          color: #ed6d34;
        }
      }
    }

    &:hover {
      .video-item {
        opacity: 0.6;
        .play-group {
          opacity: 1;
        }
      }

      .web-item {
        .mask {
          opacity: 1;
        }
      }

      .mask-title {
        opacity: 1;
        transform: translateY(0px);
      }

      .mask-btn {
        opacity: 1;
      }

      .btn-border {
        transform: translate(5px, 5px);
      }
    }
  }

  .work-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .work-title {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }
}

.work-line {
  width: 1px;
  height: 243px;
  margin: 0 auto;
  background: #ed6d34;
}

.dialog {
  width: 100vw;
  height: 100vh;
  display: block;
  z-index: 150;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);

  .close {
    width: 30px;
    height: 30px;
    cursor: pointer;
    img {
      width: 100%;
    }

    position: fixed;
    top: 30px;
    right: 30px;
  }

  &.hide {
    display: none;
  }

  .dialog-content {
    width: 90vw;
    height: 90vh;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%) !important;
    background: transparent;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}

@media only screen and (max-width: 1440px) and (min-width: 1280px) {
  .work-top {
    width: 1280px;

    .title {
      font-size: 110px;
    }
  }
  .work-container {
    width: 1280px;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .work-top {
    width: 1024px;
    .title {
      font-size: 95px;
    }
  }

  .work-container {
    width: 1024px;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .work-section {
    margin-top: 130px;
  }
  .work-top {
    width: 875px;
    .title {
      font-size: 78.5px;
    }
  }

  .work-container {
    width: 875px;
    .work-item {
      max-width: calc(33.33% - 30px);
    }
  }

  .dialog {
    .dialog-content {
      width: 85vw;
      height: 85vh;
    }
  }
}

@media screen and (max-width: 767px) {
  .work-section {
    margin-top: 60px;
  }
  .work-top {
    width: 90vw;
    .title {
      font-size: 55px;
    }
    .line {
      display: none;
    }

    .filter-btns {
      width: 130px;

      .btn {
        width: 65px;
        height: 65px;
      }
    }
  }

  .work-container {
    width: 90vw;
    .work-item {
      max-width: 100%;
    }
  }

  .dialog {
    .dialog-content {
      width: 85vw;
      height: 75vh;
      margin-top: 30px;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import play from '@/assets/svg/icon-play.svg'
import _ from 'lodash'
export default {
  name: 'worksection',

  components: {},

  data() {
    return {
      isMobile,
      isTablet,
      play,
      isShowDialog: false,
      iframeLink: '',
      filterType: 'web',
      workList: [
        {
          img: require('./work/video/早知道.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/gghgcTwO3Qg',
        },
        {
          img: require('./work/video/百年家族.png'),
          type: 'video',
          link: 'https://www.youtube.com/embed/g7MKeVT_RuI',
        },
        {
          img: require('./work/video/百年家族.png'),
          type: 'video',
          link: 'https://www.youtube.com/embed/g7MKeVT_RuI',
        },
        {
          img: require('./work/video/百年家族.png'),
          type: 'video',
          link: 'https://www.youtube.com/embed/g7MKeVT_RuI',
        },
        {
          img: require('./work/video/百年家族.png'),
          type: 'video',
          link: 'https://www.youtube.com/embed/g7MKeVT_RuI',
        },
        {
          img: require('./work/video/百年家族.png'),
          type: 'video',
          link: 'https://www.youtube.com/embed/g7MKeVT_RuI',
        },
        {
          img: require('./work/web/6.築禾交響院.png'),
          type: 'web',
          link: 'https://jh.h35.tw/',
          title: '築禾交響院',
        },
        {
          img: require('./work/web/13.越那山.png'),
          type: 'web',
          link: 'https://yns.h35.tw/',
          title: '越那山',
        },
        {
          img: require('./work/web/14.悅成功活動官網.png'),
          type: 'web',
          link: 'https://ycg.h35.tw/event/',
          title: '悅成功活動官網',
        },
        {
          img: require('./work/web/14.悅成功活動官網.png'),
          type: 'web',
          link: 'https://ycg.h35.tw/event/',
          title: '悅成功活動官網',
        },
        {
          img: require('./work/web/14.悅成功活動官網.png'),
          type: 'web',
          link: 'https://ycg.h35.tw/event/',
          title: '悅成功活動官網',
        },
        {
          img: require('./work/web/14.悅成功活動官網.png'),
          type: 'web',
          link: 'https://ycg.h35.tw/event/',
          title: '悅成功活動官網',
        },
      ],
    }
  },

  computed: {
    workRow() {
      let count
      if (this.isTablet) {
        count = 3
      } else if (this.isMobile) {
        count = 1
      } else {
        count = 5
      }
      return _.chunk(this.filterWorkList, count)
    },

    filterWorkList() {
      return this.workList.filter(item => item.type === this.filterType)
    },
  },

  methods: {
    showDialog(type, link) {
      // this.$refs[`dialogVideo${index}`].src = this.slideList[this.slideIndex].video
      // this.$refs[`dialogVideo${index}`].play()
      this.iframeLink = link
      this.isShowDialog = true
    },

    closeDialog() {
      this.isShowDialog = false
      // this.$refs[`dialogVideo${index}`].pause()
    },

    changeFilterType(type) {
      this.filterType = type
    },
  },

  mounted() {},
}
</script>
