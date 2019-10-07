
<template>
  <div class="section6">
    <div class="bg fullscreen">
      <div class="relative m-container" v-if="isMobile">
        <div class="slide relative" data-aos="fade" data-aos-delay="500">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s4-slide-${index}`"
            :src="slide.img"
            alt
          />
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decIndex" src="./small_left_btn.png" alt />
            <img @click="addIndex" src="./small_right_btn.png" alt />
          </div>
        </div>
      </div>
      <div v-else>
        <div class="box">
          <div class="box2" data-aos="fade" data-aos-delay="300">
            <img src="./s7/img_01.jpg" />
            <img src="./s7/txt_01.jpg" class="txt" />
          </div>
          <div class="box2">
            <div class="box3">
              <div class="box4" data-aos="fade" data-aos-delay="400">
                <img src="./s7/img_02.jpg" />
                <img src="./s7/txt_02.jpg" class="txt" />
              </div>
              <div class="box4" data-aos="fade" data-aos-delay="500">
                <img src="./s7/img_03.jpg" />
                <img src="./s7/txt_03.jpg" class="txt" />
              </div>
            </div>
            <div class="box3">
              <div class="box4" data-aos="fade" data-aos-delay="600">
                <img src="./s7/img_04.jpg" />
                <img src="./s7/txt_04.jpg" class="txt" />
              </div>
              <div class="box4" data-aos="fade" data-aos-delay="700">
                <img src="./s7/img_05.jpg" />
                <img src="./s7/txt_05.jpg" class="txt" />
              </div>
            </div>
          </div>
        </div>
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
}

.box,
.box2,
.box3,
.box4 {
  display: flex;
  position: relative;
}
.box2 {
  flex-direction: column;
}
.box2:first-child {
  margin: 1px 0 0 0;
}
.box4 {
  margin: 1px 0 0 1px;
}
img {
  width: 100%;
}

.box2 > img {
  height: 100%;
}
.txt {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.5s;
}
.txt:hover {
  opacity: 1;
}

.fullscreen {
  max-height: 900px;
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
    background-size: 1920px auto;
    background-position: center;
  }

  .fullscreen {
    height: auto;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: 55%;
    position: relative;
    display: block;
  }

  .fullscreen {
    height: auto !important;
  }

  .slide {
    .btn-group {
      width: 95%;
      bottom: 77%;
      img {
        width: 28px;
      }
    }
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section6',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          img: require('./s7/img1m.jpg'),
          src: require('./s7/txt_01.jpg'),
        },
        {
          img: require('./s7/img2m.jpg'),
          src: require('./s7/txt_02.jpg'),
        },
        {
          img: require('./s7/img3m.jpg'),
          src: require('./s7/txt_03.jpg'),
        },
        {
          img: require('./s7/img4m.jpg'),
          src: require('./s7/txt_04.jpg'),
        },
        {
          img: require('./s7/img5m.jpg'),
          src: require('./s7/txt_05.jpg'),
        },
      ],
    }
  },

  methods: {},
}
</script>
