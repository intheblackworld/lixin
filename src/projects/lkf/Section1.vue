<template>
  <div class="section1">
    <div class="fullscreen bg" v-scroll-reveal.reset="$fadeInDown()">
      <img src="./s1_footer.png" class="img" />
      <img src="./s1_footer_m.png" class="imgM" />
    </div>
    <!-- <section v-scroll-reveal.reset="$fadeInDown()">
      <img src="./s1_bg.jpg" class="img" />
      
      <img src="./s1_bg_m.jpg" class="imgM" />
      <img src="./s1_footer_m.png" class="imgM" />
    </section>-->
  </div>
</template>
<style lang="scss" scoped>
.section1 {
  position: relative;
  z-index: 2;
  background: #fff;
}
.bg {
  background-image: url('./s1_bg.jpg');
  background-position: center;
  background-size: cover;
  position: relative;

  .img {
    position: absolute;
    width: 100vw;
    bottom: 0;
    left: 0;
  }

  .imgM {
    position: absolute;
    width: 100vw;
    bottom: 0;
    left: 0;
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s1_bg_m.jpg');
    .img {
      display: none;
    }
    .imgM {
      display: block;
    }
  }
}
</style>

<script>
// @ is an alias to /src

import { setTimeout } from 'timers'

export default {
  name: 'section1',

  data() {
    return {
      loading: false,
    }
  },

  methods: {},
}
</script>
