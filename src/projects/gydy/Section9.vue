<template>
  <div class="section9">
    <div class="bg fullscreen relative">
      <div class="detail">
        <img :src="carouselList[carouselIndex].detail" alt />
      </div>
      <div class="items">
        <img
          :src="carouselIndex === index ? carousel.scale : carousel.item"
          alt
          :class="`${carouselIndex === index ? 'active' : ''}`"
          v-for="(carousel, index) in carouselList"
          :key="carousel.item"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s6_bg.png');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: flex-end;
}

.detail {
  position: absolute;
  z-index: 0;
  top: 20px;
  right: 5vw;
  width: calc(100vw * (800 / 1440));
  padding: 20px 160px 40px;
  box-shadow: 0 3px 26px 0 rgba(0, 0, 0, 0.16);
  background-color: rgba(0, 0, 0, 0.18);

  img {
    width: 100%;
    height: auto;
    background-color: #ffffff;
  }
}

.items {
  display: flex;
  align-items: flex-end;
  position: relative;
  z-index: 1;

  img {
    width: 20%;
    &.active {
      width: 40%;
      margin-bottom: -5px;
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .fullscreen {
    height: auto !important;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section9',

  data() {
    return {
      isMobile,
      carouselIndex: 0,
      carouselList: [
        {
          item: require('./item/1.png'),
          scale: require('./scale/1.png'),
          detail: require('./detail/1.jpg'),
        },
        {
          item: require('./item/2.png'),
          scale: require('./scale/2.png'),
          detail: require('./detail/2.jpg'),
        },
        {
          item: require('./item/3.png'),
          scale: require('./scale/3.png'),
          detail: require('./detail/3.jpg'),
        },
        {
          item: require('./item/4.png'),
          scale: require('./scale/4.png'),
          detail: require('./detail/4.jpg'),
        },
        {
          item: require('./item/5.png'),
          scale: require('./scale/5.png'),
          detail: require('./detail/5.jpg'),
        },
        {
          item: require('./item/6.png'),
          scale: require('./scale/6.png'),
          detail: require('./detail/6.jpg'),
        },
        {
          item: require('./item/7.png'),
          scale: require('./scale/7.png'),
          detail: require('./detail/7.jpg'),
        },
      ],
    }
  },

  methods: {},

  created() {},
}
</script>
