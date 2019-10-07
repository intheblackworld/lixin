<template>
  <div class="section4">
    <div class="bg fullscreen">
      <div :class="`dialog ${isDialogShow ? 'show' : ''}`">
        <div class="relative">
          <img src="./s4/close.png" alt class="close" @click="isDialogShow = false" />
          <img :src="mapSrc" alt class="map-detail" />
        </div>
      </div>
      <div>
        <div class="title-block">
          <h3 class="title">交響導聆</h3>
          <div class="subtitle">About Symphony Newtown</div>
        </div>
        <div class="container">
          <img src="./s4/map1.png" alt @click="showDialog(1)" v-if="!isMobile" />
          <img src="./s4/map2.png" alt @click="showDialog(2)" v-if="!isMobile" />
          <img src="./s4/map1_m.png" alt @click="showDialog(1)" v-if="isMobile" />
          <img src="./s4/map2_m.png" alt @click="showDialog(2)" v-if="isMobile" />
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
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  img {
    width: 700px;
    border: 1px solid #e6b048 !important;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      border-color: #fff !important;
    }
  }
}

.dialog {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 150;
  overflow: scroll;
  &.show {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close {
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 152;
  }
}

.map-detail {
  width: calc(100vw * (1920 / 1920));
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .container {
    width: 1240px;
    > img {
      width: 600px;
    }
  }
  .fullscreen {
    height: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 450px;
      cursor: pointer;
    }
  }

  .map-detail {
    width: calc(100vw * (1024 / 1024));
  }
}

@media screen and (max-width: 767px) {
  .bg {
    padding: 0 0 40px;
  }

  .fullscreen {
    height: auto !important;
  }

  .container {
    width: 100vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 49vw;
      border: 1px solid #e6b048;

      &:nth-child(1) {
        border-left: none;
      }

      &:nth-child(2) {
        border-right: none;
      }
      // height: 300px;
      cursor: pointer;
    }
  }

  .map-detail {
    width: auto;
    height: 100vh;
  }

  .dialog {
    z-index: 120;
    .close {
      cursor: pointer;
      position: fixed;
      right: 20px;
      top: 20px;
      z-index: 152;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section4',

  data() {
    return {
      isMobile,
      isDialogShow: false,
      mapSrc: '',
      mapSrc1: isMobile
        ? require('./s4/mo_map1.png')
        : require('./s4/maptxt1.png'),
      mapSrc2: isMobile
        ? require('./s4/mo_map2.png')
        : require('./s4/maptxt2.png'),
    }
  },

  methods: {
    showDialog(index) {
      this.isDialogShow = true
      this.mapSrc = this[`mapSrc${index}`]
    },
  },
}
</script>
