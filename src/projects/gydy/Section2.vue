<template>
  <div class="section2">
    <div class="bg fullscreen relative">
      <div class="container">
        <div class="item" v-for="(item, index) in itemList" :key="index">
          <div class="flex">
            <span class="number">{{index}}</span>
            <span class="title">{{item.title}}</span>
          </div>
          <div class="desc" v-html="item.desc"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s2_bg.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 1050px;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.item {
  width: 280px;
  height: 280px;
  margin: 15px;
  border-radius: 999px;
  background-color: #fff;
  color: #2c7920;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 5px 5px 4px 0 rgba(0, 0, 0, 0.5);
  > div {
    width: 100%;
  }

  .flex {
    text-align: center;
    align-items: flex-end;
    padding: 0px 0 0px 40px;
  }

  .number {
    font-size: 150px;
    font-weight: 900;
    margin-bottom: 10px;
  }

  .title {
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 30px;
    margin-left: 10px;
  }

  .desc {
    padding-bottom: 20px;
    line-height: 1.5;
    height: 94px;
    margin-top: -15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
  .container {
    width: 700px;
  }

  .item {
    width: 210px;
    height: 210px;
    margin: 10px;
    .number {
      font-size: 110px;
      margin-left: -10px;
    }
    .title {
      font-size: 24px;
      margin-left: 0;
    }
    .desc {
      height: 79px;
      margin-top: -10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s2_bg_m.jpg');
    background-size: cover;
  }

  .fullscreen {
    height: auto !important;
  }

  .container {
    width: 100%;
    padding: 30px 0; 
  }

  .item {
    width: 45vw;
    height: 45vw;
    margin: 2.5%;
    padding: 0px;
    padding-top: 20px;
    .number {
      font-size: 60px;
      margin-left: -10px;
    }

    .title {
      font-size: 20px;
      margin-bottom: 20px;
      margin-left: 5px;
    }

    .desc {
      font-size: 12px;
      height: 74px;
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
      itemList: [
        {
          title: '雨遮',
          desc: '全案零雨遮   評價最真實',
        },
        {
          title: '安心建築',
          desc: '馥域建設  欣聯建設<br />首敦建設  聯手打造',
        },
        {
          title: '捷運交通',
          desc: '北投站 新北投站',
        },
        {
          title: '美好生活',
          desc: '機能 溫泉 文化',
        },
        {
          title: '文教環境',
          desc: '薇閣中小學  復興高中<br />國防大學  新民國中',
        },
        {
          title: '公園綠活',
          desc: '復興公園   北投公園<br />七星公園   七虎公園<br /中庸公園',
        },
      ],
    }
  },

  methods: {},

  created() {},
}
</script>
