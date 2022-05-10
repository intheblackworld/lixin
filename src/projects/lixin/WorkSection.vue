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
          <div v-if="item.type === 'video'" class="video-item" @click="showDialog(item.type, item.link)">
            <div class="play-group reverse">
              <icon class="play" :data="play" />
            </div>
            <div class="work-content relative">
              <img v-lazy="item.img" alt class="work-img" />
              <div class="work-title">{{item.title}}</div>
            </div>
          </div>
          <div v-if="item.type === 'web'" class="web-item">
            <div class="mask pointer" @click="showDialog(item.type, item.link)">
              <h3 class="mask-title">
                <span v-html="item.title"></span>
                <h3 class="mask-subtitle">PROJECT</h3>
              </h3>
              <div class="mask-line"></div>
              <div class="mask-btn">
                <h3>VIEW</h3>
                <div class="btn-border"></div>
              </div>
            </div>
            <div class="work-content relative">
              <img v-lazy="item.img" alt class="work-img" />
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
    fill: #ffffff !important;
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
  opacity: 0.8;
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
    flex: 1 1 auto;
    cursor: pointer;

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
        transition: all 0.3s;
        //opacity: 0.6;
        .play-group {
          opacity:0;
        }
      }
      .work-title{background: rgba(0, 0, 0, 0.8);}

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
    transition: all 0.3s;
    background: rgba(0,0,0,0.5);
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
    /*    {
          img: require('./work/web/ifc.jpg'),
          type: 'web',
          link: 'https://ifc.syn.tw',
          title: '京城IFC',
        },
        */{
          img: require('./work/web/cm.jpg'),
          type: 'web',
          link: 'https://cang-m.omdsd.tw',
          title: '藏美表參道',
        },
        {
          img: require('./work/web/dh.jpg'),
          type: 'web',
          link: 'https://dh.dacin.tw',
          title: '達欣東匯',
        },
        {
          img: require('./work/web/cc.gif'),
          type: 'web',
          link: 'https://cc.haiwo1.tw',
          title: '青青',
        },
        {
          img: require('./work/web/tye.jpg'),
          type: 'web',
          link: 'http://tye.tanyue.tw',
          title: '檀悅',
        },
        {
          img: require('./work/web/nina.jpg'),
          type: 'web',
          link: 'https://nina.yu-fong.tw',
          title: '悅峰釀',
        },
        {
          img: require('./work/web/ihome.jpg'),
          type: 'web',
          link: 'https://ihome.yu-fong.tw',
          title: '悅峰iHOME',
        },
        {
          img: require('./work/web/ghs.jpg'),
          type: 'web',
          link: 'https://ghs.h-sin.tw',
          title: '光禾墅',
        },
        {
          img: require('./work/web/ts.jpg'),
          type: 'web',
          link: 'https://ts.jsyn.tw',
          title: '泰舍至善元',
        },
        {
          img: require('./work/web/ts.jpg'),
          type: 'web',
          link: 'https://ts-coming-demo.h65.tw',
          title: '泰舍至善元預約頁',
        },
        {
          img: require('./work/web/yclj.jpg'),
          type: 'web',
          link: 'https://yclj.lgd.tw',
          title: '宜誠樂聚',
        },
        {
          img: require('./work/web/bbb.jpg'),
          type: 'web',
          link: 'https://bbb.debang.tw',
          title: '碧波白',
        },
        {
          img: require('./work/web/gp.jpg'),
          type: 'web',
          link: 'https://gp.chyy.tw',
          title: '青茵悅',
        },
        {
          img: require('./work/web/kp.jpg'),
          type: 'web',
          link: 'https://kp.kingpark.tw',
          title: '京城king park',
        },
        {
          img: require('./work/web/ml.jpg'),
          type: 'web',
          link: 'https://ml.gden.tw',
          title: 'MILANO茂德三重',
        },
        {
          img: require('./work/web/pjr.jpg'),
          type: 'web',
          link: 'http://pjr-demo.h65.tw',
          title: '璞真之道',
        },
        {
          img: require('./work/web/rss.jpg'),
          type: 'web',
          link: 'https://rss.jod.tw',
          title: '日勝幸福站',
        },
        {
          img: require('./work/web/wl.jpg'),
          type: 'web',
          link: 'https://wl.debang.tw',
          title: '快樂王國',
        },
        {
          img: require('./work/web/wlz.jpg'),
          type: 'web',
          link: 'https://wlz.chinja.tw',
          title: '勤家璞真',
        },
        {
          img: require('./work/web/ymvilla.jpg'),
          type: 'web',
          link: 'https://ymvilla.debang.tw',
          title: '陽明迴鄉',
        },
        {
          img: require('./work/web/tk.jpg'),
          type: 'web',
          link: 'https://tk.da-li.tw',
          title: '達麗東京',
        },
        {
          img: require('./work/web/ll.jpg'),
          type: 'web',
          link: 'https://ll.lianan.tw',
          title: '寶石心富町',
        },
        {
          img: require('./work/web/pacific-dnls.jpg'),
          type: 'web',
          link: 'https://pacific-dnls.uge.tw',
          title: '敦南麗舍',
        },
        {
          img: require('./work/web/li.jpg'),
          type: 'web',
          link: 'https://li.sunty.tw',
          title: '麗昇陽',
        },
        {
          img: require('./work/web/llcs.jpg'),
          type: 'web',
          link: 'https://llcs.wten.tw',
          title: '朗朗誠心',
        },
        /*
        {
          img: require('./work/web/sunbird.jpg'),
          type: 'web',
          link: 'https://sunbird.syn.tw',
          title: '向大師致敬',
        },
        */
        {
          img: require('./work/web/chy.jpg'),
          type: 'web',
          link: 'https://chy.syn.tw',
          title: '清景麟巴克禮PARK2',
        },
        {
          img: require('./work/web/jhan.jpg'),
          type: 'web',
          link: 'https://jhan.lc-h35.tw',
          title: '立瑾綻',
        },
        {
          img: require('./work/web/js.jpg'),
          type: 'web',
          link: 'https://js.howan.tw',
          title: '宏貿臻璽',
        },
        {
          img: require('./work/web/jiou-yun.jpg'),
          type: 'web',
          link: 'https://jiou-yun.tw',
          title: '久云建設官網',
        },
        {
          img: require('./work/web/cfyd.jpg'),
          type: 'web',
          link: 'https://cfyd.syn.tw',
          title: '春福御邸',
        },
        {
          img: require('./work/web/fll.jpg'),
          type: 'web',
          link: 'https://fll.han-sen.tw',
          title: '富來樂',
        },
        {
          img: require('./work/web/ymsy.jpg'),
          type: 'web',
          link: 'https://ymsy.syf.tw',
          title: '樹山丘',
        },
        {
          img: require('./work/web/oh.jpg'),
          type: 'web',
          link: 'https://oh-h35.tw',
          title: '名軒海樂地',
        },
        {
          img: require('./work/web/top-happy.jpg'),
          type: 'web',
          link: 'https://top-happy.tw',
          title: '瀚鼎國際·創悅建設',
        },
        {
          img: require('./work/web/aries.jpg'),
          type: 'web',
          link: 'https://aries-h35.tw',
          title: '牡羊座',
        },
        {
          img: require('./work/web/ymsj.jpg'),
          type: 'web',
          link: 'https://ymsj.com.tw',
          title: '陽明山莊',
        },
        {
          img: require('./work/web/dmh.jpg'),
          type: 'web',
          link: 'https://dm-demo.h65.tw',
          title: '大安謙韵',
        },
        {
          img: require('./work/web/ds.gif'),
          type: 'web',
          link: 'https://ds.goodteam.tw',
          title: '東瑩日光',
        },
        {
          img: require('./work/web/fzg.jpg'),
          type: 'web',
          link: 'https://fzg.nvd.tw',
          title: '豐之谷',
        },
        {
          img: require('./work/web/ab.gif'),
          type: 'web',
          link: '//ab-demo.h65.tw',
          title: '虹耀今采',
        },
        {
          img: require('./work/web/jcs.jpg'),
          type: 'web',
          link: 'https://jcs-h35.tw',
          title: '植春樹',
        },
        {
          img: require('./work/web/juuyi.jpg'),
          type: 'web',
          link: 'https://juuyi.h35.tw',
          title: '鈞驛行銷團隊',
        },
        {
          img: require('./work/web/la.jpg'),
          type: 'web',
          link: 'https://la.h35.tw',
          title: '聯安開發‧欣聯安廣告',
        },
        {
          img: require('./work/web/cby.jpg'),
          type: 'web',
          link: 'https://cby.tw',
          title: '春福年年',
        },
        /*
        {
          img: require('./work/web/cby.jpg'),
          type: 'web',
          link: '//cby-demo.h65.tw',
          title: '春福年年<br>預告頁展示',
        },
        */
        {
          img: require('./work/web/ypy.jpg'),
          type: 'web',
          link: 'https://ypy.tw',
          title: '嘉璟一品硯',
        },
        {
          img: require('./work/web/kid.jpg'),
          type: 'web',
          link: 'https://kid-demo.h65.tw/',
          title: '遛樂KID',
        },
        {
          img: require('./work/web/dc.jpg'),
          type: 'web',
          link: 'https://dc.h35.tw',
          title: '東城大境',
        },
        {
          img: require('./work/web/jiman.jpg'),
          type: 'web',
          link: '//jiman-demo.h65.tw',
          title: '自慢藏',
        },
        /* 
        {
          img: require('./work/web/jiman.jpg'),
          type: 'web',
          link: '//jiman-coming-demo.h65.tw',
          title: '自慢藏預告頁',
        }, */
        {
          img: require('./work/web/hsy.jpg'),
          type: 'web',
          link: 'https://hsy.h35.tw',
          title: '厚陞園',
        },
      
        {
          img: require('./work/web/zm.jpg'),
          type: 'web',
          link: 'https://zm.h35.tw',
          title: '左岸玫瑰',
        },
        {
          img: require('./work/web/debang.jpg'),
          type: 'web',
          link: 'https://debang.tw',
          title: '得邦廣告',
        },
        {
          img: require('./work/web/hh.jpg'),
          type: 'web',
          link: 'https://hh.h35.tw',
          title: '立詠建設',
        },
        {
          img: require('./work/web/lc.jpg'),
          type: 'web',
          link: 'https://lc-h35.tw',
          title: '立瑾建築',
        },
        {
          img: require('./work/web/liang-mao.jpg'),
          type: 'web',
          link: 'https://liang-mao.tw',
          title: '梁茂建設',
        },
        {
          img: require('./work/web/lj.jpg'),
          type: 'web',
          link: 'https://lj.h35.tw',
          title: '連雲景粋',
        },
        {
          img: require('./work/web/sm.jpg'),
          type: 'web',
          link: 'https://sm-demo.h65.tw/',
          title: '西門大院',
        },
        {
          img: require('./work/web/dm.jpg'),
          type: 'web',
          link: 'https://dm.h35.tw',
          title: '東門馥寓',
        },
        {
          img: require('./work/web/sc.jpg'),
          type: 'web',
          link: 'https://sc.h35.tw',
          title: '拾邱',
        },
        {
          img: require('./work/web/yb.jpg'),
          type: 'web',
          link: 'https://yb.h35.tw',
          title: '央北鑫建築',
        },
        {
          img: require('./work/web/yu.jpg'),
          type: 'web',
          link: 'https://yu.h35.tw',
          title: '詠喆',
        },
        {
          img: require('./work/web/jyly.jpg'),
          type: 'web',
          link: 'https://jyly.h35.tw',
          title: '佳元臨沂',
        },
        {
          img: require('./work/web/wh.jpg'),
          type: 'web',
          link: 'https://wh.h35.tw',
          title: '達欣・信義文華 官網',
        },
        {
          img: require('./work/web/jysj.jpg'),
          type: 'web',
          link: 'https://sj-demo.h65.tw/',
          title: '佳元松江',
        },
        {
          img: require('./work/web/56.jpg'),
          type: 'web',
          link: 'https://jw.h35.tw',
          title: '京旺協奏曲',
        },
        {
          img: require('./work/web/cyfh.gif'),
          type: 'web',
          link: 'https://cyfh.h35.tw',
          title: '全陽豐會',
        },
        {
          img: require('./work/web/cs.jpg'),
          type: 'web',
          link: 'https://cs.h35.tw',
          title: '合矩青山',
        },
        {
          img: require('./work/web/hoh.jpg'),
          type: 'web',
          link: 'https://hoh.h35.tw',
          title: '神采飛洋',
        },
        {
          img: require('./work/web/ace.jpg'),
          type: 'web',
          link: 'https://ace.debang.tw',
          title: '太陽帝國',
        },
        {
          img: require('./work/web/58.jpg'),
          type: 'web',
          link: 'https://avc.h35.tw',
          title: '睿暘水漾',
        },
        {
          img: require('./work/web/dunnanhowhow.jpg'),
          type: 'web',
          link: 'https://dunnanhowhow.h35.tw',
          title: '敦南好好',
        },
        {
          img: require('./work/web/jsjm.jpg'),
          type: 'web',
          link: 'https://jsjm-demo.h65.tw/',
          title: '中山直美',
        },
        {
          img: require('./work/web/tv.jpg'),
          type: 'web',
          link: 'https://tv.h35.tw',
          title: 'The View',
        },
        {
          img: require('./work/web/tsi.jpg'),
          type: 'web',
          link: 'https://tsi-h35.tw',
          title: '天空之邑',
        },
        {
          img: require('./work/web/h25.gif'),
          type: 'web',
          link: 'https://h25.tw',
          title: '中正h25',
        },
        {
          img: require('./work/web/hg.jpg'),
          type: 'web',
          link: 'https://hg-demo.h65.tw/',
          title: '築藝海格',
        },
        {
          img: require('./work/web/jhuyi.jpg'),
          type: 'web',
          link: 'https://jhuyi.h35.tw',
          title: '築億築藝',
        },
        {
          img: require('./work/web/jy.jpg'),
          type: 'web',
          link: 'https://jy-demo.h65.tw/',
          title: '築億丰盛',
        },
        {
          img: require('./work/web/jh.jpg'),
          type: 'web',
          link: 'https://jh.h35.tw',
          title: '築禾交響院',
        },
        {
          img: require('./work/web/ycfy.gif'),
          type: 'web',
          link: '//ycfy-demo.h65.tw',
          title: '頤昌豐岳官網',
        },
        { 
          img: require('./work/web/ycpy.jpg'),
          type: 'web',
          link: 'https://ycpy.h35.tw',
          title: '頤昌璞岳',
        },
        { 
          img: require('./work/web/ycpy1.jpg'),
          type: 'web',
          link: '//ycpy-coming-demo.h65.tw',
          title: '頤昌璞岳預告頁',
        },
        {
          img: require('./work/web/way.jpg'),
          type: 'web',
          link: 'https://way.h35.tw',
          title: '立瑾Way',
        },
        {
          img: require('./work/web/tp.gif'),
          type: 'web',
          link: 'https://tp.h35.tw',
          title: '悦讀綠森活',
        },
        {
          img: require('./work/web/yj.jpg'),
          type: 'web',
          link: 'https://yj-demo.h65.tw/',
          title: '明日城2怡家特區',
        },
        {
          img: require('./work/web/we.jpg'),
          type: 'web',
          link: 'https://we.h35.tw',
          title: 'WE時代',
        },
        {
          img: require('./work/web/blly.jpg'),
          type: 'web',
          link: 'https://blly.h35.tw',
          title: '八里龍躍',
        },
        {
          img: require('./work/web/tsy.jpg'),
          type: 'web',
          link: 'https://tsy-h35.tw',
          title: '翠松園',
        },
        {
          img: require('./work/web/sv.jpg'),
          type: 'web',
          link: 'https://sv-h35.tw',
          title: '文華天際',
        },
        {
          img: require('./work/web/cy.jpg'),
          type: 'web',
          link: 'https://cy.h35.tw',
          title: '九陽盧登堡',
        },
        {
          img: require('./work/web/wonder.jpg'),
          type: 'web',
          link: '//wonder-demo.h65.tw',
          title: '聯悦臻',
        },
        {
          img: require('./work/web/dnsf.jpg'),
          type: 'web',
          link: 'https://dnsf.h35.tw',
          title: '敦南學府',
        },
        {
          img: require('./work/web/tm.jpg'),
          type: 'web',
          link: 'https://tm.h35.tw',
          title: '天母自在',
        },
        {
          img: require('./work/web/ra.jpg'),
          type: 'web',
          link: 'https://ra.h35.tw',
          title: '瑞安自在',
        },/*  */
        {
          img: require('./work/web/wop.gif'),
          type: 'web',
          link: '//wop-demo.h65.tw',
          title: '太子峰雲',
        },
        {
          img: require('./work/web/43.jpg'),
          type: 'web',
          link: 'https://ms.h35.tw',
          title: '美術皇居',
        },
        {
          img: require('./work/web/18.jpg'),
          type: 'web',
          link: 'https://fs.h35.tw',
          title: '京城鳳翔 ',
        },
        {
          img: require('./work/web/23.jpg'),
          type: 'web',
          link: 'https://lsbj.h35.tw',
          title: '聯上鉑金',
        },
        {
          img: require('./work/web/42.jpg'),
          type: 'web',
          link: 'https://lsht.h35.tw',
          title: '聯上海棠',
        },
        {
          img: require('./work/web/51.jpg'),
          type: 'web',
          link: 'https://cf.h35.tw',
          title: '春福采采',
        },
        {
          img: require('./work/web/48.jpg'),
          type: 'web',
          link: 'https://syw.h35.tw',
          title: '星玥灣',
        },
        {
          img: require('./work/web/55.jpg'),
          type: 'web',
          link: 'https://cjl.h35.tw',
          title: '清景麟巴克禮',
        },
        {
          img: require('./work/web/57.jpg'),
          type: 'web',
          link: 'https://casa-h35.tw',
          title: '信義CASA',
        },
        {
          img: require('./work/web/03.gif'),
          type: 'web',
          link: 'https://sfdy.h35.tw',
          title: '幸福大院',
        },
        {
          img: require('./work/web/44.jpg'),
          type: 'web',
          link: 'https://yc.h35.tw',
          title: '漾CITY',
        },
        {
          img: require('./work/web/45.jpg'),
          type: 'web',
          link: 'https://sdj.h35.tw',
          title: '上東京',
        },
        {
          img: require('./work/web/01.jpg'),
          type: 'web',
          link: '//by-demo.h65.tw',
          title: '博悅',
        },

        {
          img: require('./work/web/38.jpg'),
          type: 'web',
          link: 'https://ty.h35.tw',
          title: '泰御天鑄',
        },
        {
          img: require('./work/web/39.jpg'),
          type: 'web',
          link: 'https://hy-h35.tw',
          title: '鴻苑',
        },
        {
          img: require('./work/web/40.gif'),
          type: 'web',
          link: 'https://llcs.wten.tw/',
          title: '朗朗城心',
        },

        {
          img: require('./work/web/16.jpg'),
          type: 'web',
          link: 'https://stm.h35.tw',
          title: '心天畝 ',
        },
        {
          img: require('./work/web/09.jpg'),
          type: 'web',
          link: 'https://j-shan.h35.tw',
          title: '堅山謙仰',
        },
        {
          img: require('./work/web/10.jpg'),
          type: 'web',
          link: 'https://xs.h35.tw',
          title: '新碩鼎和',
        },
        {
          img: require('./work/web/11.jpg'),
          type: 'web',
          link: 'https://ds.h35.tw',
          title: '帝璽',
        },

        {
          img: require('./work/web/17.jpg'),
          type: 'web',
          link: 'https://east.h35.tw',
          title: '大道東 ',
        },
        /*
        {
          img: require('./work/web/19.jpg'),
          type: 'web',
          link: 'https://wh1.h35.tw/event/',
          title: '達欣・信義文華 活動',
        },
        */
        {
          img: require('./work/web/20.jpg'),
          type: 'web',
          link: '//ycfy-coming-demo.h65.tw',
          title: '頤昌豐岳活動',
        },

        /*
        {
          img: require('./work/web/06.jpg'),
          type: 'web',
          link: 'https://yt.h35.tw',
          title: '頤昌耘萃',
        },

        */

        {
          img: require('./work/web/07.jpg'),
          type: 'web',
          link: 'https://lju.h35.tw',
          title: '立謹醞',
        },
        {
          img: require('./work/web/13.gif'),
          type: 'web',
          link: 'https://yns.h35.tw',
          title: '北大樂馥',
        },
        {
          img: require('./work/web/02.jpg'),
          type: 'web',
          link: '//dyc-demo.h65.tw',
          title: '德友藏',
        },
        {
          img: require('./work/web/05.jpg'),
          type: 'web',
          link: 'https://dss.h35.tw',
          title: '大學墅',
        },

        {
          img: require('./work/web/08.jpg'),
          type: 'web',
          link: 'https://star.h35.tw',
          title: '一日林板新活動官網',
        },
        /*
        {
          img: require('./work/web/14.jpg'),
          type: 'web',
          link: 'https://lkf1.h35.tw',
          title: '蘭桂坊',
        },*/
        {
          img: require('./work/web/15.jpg'),
          type: 'web',
          link: 'https://wj.h35.tw',
          title: '吾界',
        },
        {
          img: require('./work/web/12.jpg'),
          type: 'web',
          link: 'https://cht.h35.tw',
          title: '長虹天際',
        },

      /*
        {
          img: require('./work/web/28.jpg'),
          type: 'web',
          link: 'https://shinarc.com.tw',
          title: '鑫建築團隊',
        },
        */

        // video
        {
          img: require('./work/video/1.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/gghgcTwO3Qg',
          title: '新潤A18｜早知道 ',
        },
        {
          img: require('./work/video/2.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/g7MKeVT_RuI',
          title: '新碩鼎和 ｜百年家族 ',
        },
        {
          img: require('./work/video/3.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/ymVSwCt__MQ',
          title: '金城舞2｜百變型男 ',
        },
        {
          img: require('./work/video/4.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/uMDcyCV3qgQ',
          title: '新板巨星｜競選 ',
        },
        {
          img: require('./work/video/5.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/_i8jxM7NwmM',
          title: '新碩鼎和｜最強安全感的家 ',
        },
        {
          img: require('./work/video/6.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/xLdvfhpks0c',
          title: '新板巨星｜愛要及時 ',
        },
        {
          img: require('./work/video/7.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/FXFaryfVMLM',
          title: '幸福莊園｜寄人籬下 ',
        },
        {
          img: require('./work/video/8.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/ybf3gDABxPI',
          title: '德友藏｜ 品牌精神 ',
        },
        {
          img: require('./work/video/9.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/bAZhCZANipY',
          title: '德友極｜日本職人精神  ',
        },
        {
          img: require('./work/video/10.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/GINkJA25OSc',
          title: '幸福莊園｜澎湃公設 ',
        },
        {
          img: require('./work/video/11.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/AB63HCTIeHg',
          title: '幸福莊園｜ 一日幸福 ',
        },
        {
          img: require('./work/video/12.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/2aRqK6uwMt4',
          title: '新潤A18｜時尚生活 ',
        },
        {
          img: require('./work/video/13.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/tPXSAfasRBA',
          title: '蘭桂坊｜我們的生活 ',
        },
        {
          img: require('./work/video/14.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/KS6VQhOEWLI',
          title: '心天畝｜林蔭秘境 ',
        },
        {
          img: require('./work/video/15.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/hc5wha2BYv0',
          title: '長虹天際 | 形象篇 ',
        },
        {
          img: require('./work/video/16.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/DS35xFF9ybs',
          title: '裸心納景 ',
        },
        {
          img: require('./work/video/17.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/sT4x6xII7gI',
          title: '新板巨星｜空拍 ',
        },
        {
          img: require('./work/video/18.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/w593EAieCnw',
          title: '新板巨星｜以房養老，準備趁早 ',
        },
        {
          img: require('./work/video/19.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/qWE6nlKQ-4Q',
          title: '新板巨星｜小資購屋 ',
        },
        {
          img: require('./work/video/20.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/nKfCDBTw',
          title: '新板巨星｜老孫家的鐘 ',
        },
        {
          img: require('./work/video/21.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/e6Q3s4ZLb2c',
          title: '新板巨星｜求學道路 ',
        },
        {
          img: require('./work/video/22.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/WoAsWBxMvkg',
          title: '新板巨星｜落葉歸根 ',
        },
        {
          img: require('./work/video/23.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/xSZOeqp9JnA',
          title: '新板巨星｜都市農耕 ',
        },
        {
          img: require('./work/video/24.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/YpLkKAhUsI',
          title: '新板巨星｜名牌生活 ',
        },
        {
          img: require('./work/video/25.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/RanzJCKiiu8',
          title: '新板巨星｜不再搬家 ',
        },
        {
          img: require('./work/video/26.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/KmQK2cPRHPw',
          title: '新板巨星｜汪星人 ',
        },
        {
          img: require('./work/video/27.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/96j2jqZtIu8',
          title: '土城日月光｜家庭證言 ',
        },
        {
          img: require('./work/video/28.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/BB6XOQX1ccI',
          title: '土城日月光｜親子證言 ',
        },
        {
          img: require('./work/video/29.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/PrNC5YAX6hc',
          title: '德友極｜通勤時間 ',
        },
        {
          img: require('./work/video/30.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/iykY3YxXRmU',
          title: '景上川｜萬華訪談 ',
        },
        {
          img: require('./work/video/31.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/3cOEaDlcRqI',
          title: '希望城市｜三個願望 ',
        },
        {
          img: require('./work/video/32.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/xLKhnIMJWfI',
          title: 'SKY1｜藝術人生 ',
        },
        {
          img: require('./work/video/33.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/TbixUARTDT0',
          title: 'SKY1｜更懂珍惜 ',
        },
        {
          img: require('./work/video/34.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/mS_68sMHixA',
          title: 'SKY1｜空拍 ',
        },
        {
          img: require('./work/video/35.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/Rv6oAI5D62w',
          title: '超級花園｜同鄰不同居 ',
        },
        {
          img: require('./work/video/36.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/dWIik0v7_aA',
          title: '超級花園｜娘娘駕到 ',
        },
        {
          img: require('./work/video/37.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/oTrJUdk-asc',
          title: '超級花園｜生活的轉變 ',
        },
        {
          img: require('./work/video/38.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/rHPUvOB1NtU',
          title: '超級城市｜租不如買 ',
        },
        {
          img: require('./work/video/39.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/it0B2YMRxeU',
          title: '超級城市｜生活機能 ',
        },
        {
          img: require('./work/video/40.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/1ccNdkpdFuI',
          title: '超級城市｜親子 ',
        },
        {
          img: require('./work/video/41.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/Lzl_eC0ITOk',
          title: '超級城市｜家人換屋 ',
        },
        {
          img: require('./work/video/42.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/Q92jLT0IAzE',
          title: '隱苑｜紀錄證言 ',
        },
        {
          img: require('./work/video/43.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/wICFeixSTog',
          title: '隱苑｜RAP溫刀勒拎厝邊 ',
        },
        {
          img: require('./work/video/44.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/gh63Umm3F9w',
          title: '隱苑｜生活機能 ',
        },
        {
          img: require('./work/video/45.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/NrmLPaJE88o',
          title: '布拉諾花園｜遊吟詩人 ',
        },
        {
          img: require('./work/video/46.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/gn5LxP8-LEw',
          title: '布拉諾花園｜世外生活型態 ',
        },
        {
          img: require('./work/video/47.jpg'),
          type: 'video',
          link: 'https://www.youtube.com/embed/h_7AFSWrPjU',
          title: '布拉諾花園｜生活機能',
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
