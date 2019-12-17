<template>
  <div class="work-section">
    <!-- img="./bg.jpg" -->
    <div class="work-top">
      <div class="title">OUR WORK</div>
      <div class="line"></div>
      <div class="filter-btns">
        <div
          :class="`${filterType === 'video' ? 'active' : ''} btn video`"
          @click="changeFilterType('video')"
        ></div>
        <div
          :class="`${filterType === 'web' ? 'active' : ''} btn web`"
          @click="changeFilterType('web')"
        ></div>
      </div>
    </div>
    <div class="work-container">
      <div class="work-row flex" v-for="(row, rowIndex) in workRow" :key="`row-${rowIndex}`">
        <div :class="`work-item relative no-padding`" v-for="item in row" :key="`item-${item.img}`">
          <div v-if="item.type === 'video'" class="video-item">
            <div class="play-group reverse">
              <icon class="play" :data="play" @click="showDialog(item.type, item.link)" />
            </div>
            <div class="work-content relative">
              <img :src="item.img" alt class="work-img" />
            </div>
          </div>
          <div v-if="item.type === 'web'" class="web-item">
            <div class="mask pointer" @click="showDialog(item.type, item.link)">
              <h3 class="mask-title">
                {{item.title}}
                <h3 class="mask-subtitle">PROJECT</h3>
              </h3>
              <div class="mask-line"></div>
              <div class="mask-btn">
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
        <iframe width="560" height="315" :src="link" frameborder="0" allowfullscreen></iframe>
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
  margin-top: 90px;
  margin-bottom: 120px;
  background-image: url('./work/bg.png');
  background-attachment: fixed;
}

.work-top {
  margin: 0 auto;
  width: 1336px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 110px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #ed6d34;
  }

  .line {
    width: 400px;
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

      &.video {
        background-image: url('./work/icon11.png');
        background-size: cover;
        &.active {
          background-image: url('./work/icon1.png');
          fill: #fff;
          color: #fff;
        }
      }

      &.web {
        background-image: url('./work/icon21.png');
        background-size: cover;
        &.active {
          background-image: url('./work/icon2.png');
          fill: #fff;
          color: #fff;
        }
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
  width: 1336px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 67px;

  .work-row {
    margin-left: -30px;
  }

  .pointer {
    cursor: pointer;
  }

  .work-item {
    // box-shadow: 0 0 2px 1px #666;
    // border-radius: 5px;
    margin: 15px 0 15px 30px;
    overflow: hidden;
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
        font-size: 0.46em;
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
        font-size: 13px;
        width: 10em;
        height: 2.7em;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 0.4em;
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
          border-radius: 0.4em;
          border: 1px solid #fff;
          position: absolute;
          // transform: translate(0px, 0px);
          transition: all 0.5s;
          transition-delay: 0.5s;
        }

        h3 {
          font-size: 1em;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.6;
          letter-spacing: 0.05em;
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
      font-size: 13vw;
      line-height: 1;
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
      .mask {
        .mask-title {
          font-size: 40px;
        }
        .mask-line {
          height: 100px;
          margin-top: -100px;
        }
        .mask-btn {
          font-size: 16px;
        }
      }
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
      link: '',
      filterType: 'web',
      window,
      workList: [
        // web
        {
          img: require('./work/web/1.博悅.jpg'),
          type: 'web',
          link: 'https://by1.h35.tw/',
          title: '博悅',
        },
        {
          img: require('./work/web/2.德友藏.png'),
          type: 'web',
          link: 'https://dyc.h35.tw/',
          title: '德友藏',
        },

        {
          img: require('./work/web/5.幸福大院.png'),
          type: 'web',
          link: 'https://sfdy.h35.tw/',
          title: '幸福大院',
        },

        {
          img: require('./work/web/4.一日林板新.png'),
          type: 'web',
          link: 'https://star.h35.tw/',
          title: '一日林板新活動官網',
        },
        {
          img: require('./work/web/3.大學墅.jpg'),
          type: 'web',
          link: 'https://dss.h35.tw/',
          title: '大學墅',
        },

        {
          img: require('./work/web/6.築禾交響院.png'),
          type: 'web',
          link: 'https://jh.h35.tw/',
          title: '築禾交響院',
        },

        {
          img: require('./work/web/7.越那山.png'),
          type: 'web',
          link: 'https://yns.h35.tw/',
          title: '越那山',
        },
        {
          img: require('./work/web/12.吾界.png'),
          type: 'web',
          link: 'https://wj.h35.tw/',
          title: '吾界',
        },

        {
          img: require('./work/web/8.立瑾醞.jpg'),
          type: 'web',
          link: 'https://stm.h35.tw/',
          title: '立謹醞',
        },

        {
          img: require('./work/web/9.蘭桂坊.png'),
          type: 'web',
          link: 'https://lkf.h35.tw/',
          title: '蘭桂坊',
        },

        {
          img: require('./work/web/10.心天畝.png'),
          type: 'web',
          link: 'https://stm.h35.tw/',
          title: '心天畝',
        },

        {
          img: require('./work/web/11.三發丰悅.png'),
          type: 'web',
          link: 'https://fy.h35.tw/',
          title: '三發丰悅',
        },

        {
          img: require('./work/web/13.新碩鼎和.png'),
          type: 'web',
          link: 'https://xs.h35.tw/',
          title: '新碩鼎和',
        },

        {
          img: require('./work/web/14.帝璽.jpg'),
          type: 'web',
          link: 'https://ds.h35.tw/',
          title: '帝璽',
        },

        {
          img: require('./work/web/15.png'),
          type: 'web',
          link: 'https://cht.h35.tw/',
          title: '長虹天際',
        },

        {
          img: require('./work/web/16.悅成功活動官網.png'),
          type: 'web',
          link: 'https://ycg.h35.tw/event/',
          title: '悅成功活動官網 ',
        },

        // video
        {
          img: require('./work/video/1.百變型男(原圖).jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/ymVSwCt__MQ',
        },
        {
          img: require('./work/video/2.愛要及時.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/xLdvfhpks0c',
        },
        {
          img: require('./work/video/3.競選造勢大會.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/uMDcyCV3qgQ',
        },

        {
          img: require('./work/video/4.寄人籬下.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/FXFaryfVMLM',
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
        count = 4
      }
      return _.chunk(this.filterWorkList, count)
    },

    filterWorkList() {
      return this.workList.filter(item => item.type === this.filterType)
    },
  },

  mounted() {
    if (this.$route.query.type === 'video') {
      this.filterType = 'video'
    }

    this.window.scrollTo(0, 0)
  },

  methods: {
    showDialog(type, link) {
      // this.$refs[`dialogVideo${index}`].src = this.slideList[this.slideIndex].video
      // this.$refs[`dialogVideo${index}`].play()
      if (type === 'web') {
        this.window.open(link)
      } else {
        this.link = link
        this.isShowDialog = true
      }
    },

    closeDialog() {
      this.isShowDialog = false
      // this.$refs[`dialogVideo${index}`].pause()
    },

    changeFilterType(type) {
      this.filterType = type
    },
  },
}
</script>
