<template>
  <div class="section5">
    <div class="bg fullscreen">
      <div class="relative">
        <div class="title-block" v-if="isMobile">
          <h3 class="title">24項奢華公設</h3>
          <div class="subtitle">Luxury Amenities</div>
        </div>
        <div :class="`slide relative fullscreen`">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s5-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decIndex" src="./arrow-left.png" alt />
            <img @click="addIndex" src="./arrow-right.png" alt />
          </div>
        </div>

        <div class="text" v-if="!isMobile">
          <div class="title-block">
            <h3 class="title">24項奢華公設</h3>
            <div class="subtitle">Luxury Amenities</div>
          </div>
          <h3 class="view-title">{{slideList[slideIndex].title}}</h3>
          <div class="view-subtitle">{{slideList[slideIndex].floor}}</div>
        </div>
        <div class="m-text" v-if="isMobile">
          <h3 class="view-title">{{slideList[slideIndex].title}}</h3>
          <div class="view-subtitle">{{slideList[slideIndex].floor}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: relative;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.text {
  .title-block {
    width: 263px;
    height: 114px;
    margin-bottom: 0;

    .title {
      font-size: 36px;
    }

    .view-subtitle {
      font-size: 14px;
    }
  }
}

.slide {
  width: 100vw;
  .slide-img {
    height: 100%;
  }
}

.text {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 70px;
  width: 528px;
  height: 224px;
  padding: 30px 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.8) 30%
  );

  .view-title {
    font-size: 40px;
    font-weight: bold;
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: center;
    color: #d9a721;
  }

  .view-subtitle {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.67;
    letter-spacing: 1.8px;
    text-align: center;
    color: #d9a721;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }

  .fullscreen {
    height: auto;
  }

  .text {
    bottom: 40px;
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .title-block {
    margin-bottom: 0px;
  }

  .m-text {
    margin-top: 25px;
    margin-bottom: 40px;

    .view-title {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      color: #ffffff;
    }

    .view-subtitle {
      font-size: 18px;
      font-weight: 300;
      line-height: 1.67;
      letter-spacing: 1.8px;
      text-align: center;
      color: #d9a721;
    }
  }

  .fullscreen {
    height: auto !important;
  }

  .slide {
    width: 100vw;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import { setInterval } from 'timers'

export default {
  name: 'section5',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s6/1f凡爾賽花園.jpg'),
          title: '凡爾賽花園',
          floor: '1f',
        },
        {
          src: require('./s6/1f各棟拆信區-溫莎區.jpg'),
          title: '各棟拆信區-溫莎區',
          floor: '1f',
        },
        {
          src: require('./s6/1f各棟梯廳-莫內廳.jpg'),
          title: '各棟梯廳-莫內廳',
          floor: '1f',
        },
        {
          src: require('./s6/1f挑高7.8米羅曼大廳.jpg'),
          title: '挑高7.8米羅曼大廳',
          floor: '1f',
        },
        {
          src: require('./s6/1f挑高7.8米羅曼大廳2.jpg'),
          title: '挑高7.8米羅曼大廳2',
          floor: '1f',
        },
        {
          src: require('./s6/1f崗石門廳入口.jpg'),
          title: '崗石門廳入口',
          floor: '1f',
        },
        {
          src: require('./s6/2f巴哈練琴室.jpg'),
          title: '巴哈練琴室',
          floor: '2f',
        },
        {
          src: require('./s6/2f巴登蒸氣室.jpg'),
          title: '巴登蒸氣室',
          floor: '2f',
        },
        {
          src: require('./s6/2f卡拉絲健身房(女).jpg'),
          title: '卡拉絲健身房(女)',
          floor: '2f',
        },
        {
          src: require('./s6/2f印象水中吧.jpg'),
          title: '印象水中吧',
          floor: '2f',
        },
        {
          src: require('./s6/2f多明戈健身房(男).jpg'),
          title: '多明戈健身房(男)',
          floor: '2f',
        },
        {
          src: require('./s6/2f百老匯視聽館.jpg'),
          title: '百老匯視聽館',
          floor: '2f',
        },
        {
          src: require('./s6/2f韋瓦第水療池.jpg'),
          title: '韋瓦第水療池',
          floor: '2f',
        },
        {
          src: require('./s6/2f韋伯撞球沙龍.jpg'),
          title: '韋伯撞球沙龍',
          floor: '2f',
        },
        {
          src: require('./s6/2f香緹梳洗室.jpg'),
          title: '香緹梳洗室',
          floor: '2f',
        },
        {
          src: require('./s6/2f海明威泳廳.jpg'),
          title: '海明威泳廳',
          floor: '2f',
        },
        {
          src: require('./s6/2f舒曼瑜珈室.jpg'),
          title: '舒曼瑜珈室',
          floor: '2f',
        },
        {
          src: require('./s6/2f愛樂沙發廳.jpg'),
          title: '愛樂沙發廳',
          floor: '2f',
        },
        {
          src: require('./s6/2f羅馬烤箱室.jpg'),
          title: '羅馬烤箱室',
          floor: '2f',
        },
        {
          src: require('./s6/3f卡拉揚LOUNGE BAR.jpg'),
          title: '卡拉揚LOUNGE BAR',
          floor: '3f',
        },
        {
          src: require('./s6/3f卡農沙發廳.jpg'),
          title: '卡農沙發廳',
          floor: '3f',
        },
        {
          src: require('./s6/3f四季家教室.jpg'),
          title: '四季家教室',
          floor: '3f',
        },
        {
          src: require('./s6/3f布萊梅樂讀室_遊戲室.jpg'),
          title: '布萊梅樂讀室_遊戲室',
          floor: '3f',
        },
        {
          src: require('./s6/3f紀伊國閱覽廳.jpg'),
          title: '紀伊國閱覽廳',
          floor: '3f',
        },
        {
          src: require('./s6/3f藍帶廚藝室_宴饗廳.jpg'),
          title: '藍帶廚藝室_宴饗廳',
          floor: '3f',
        },
      ],
    }
  },
  methods: {},

  created() {
    setInterval(() => {
      this.addIndex()
    }, 10000)
  },
}
</script>
