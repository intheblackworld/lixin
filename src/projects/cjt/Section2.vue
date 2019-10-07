<template>
  <div class="section2 relative">
    <img v-if="!isMobile" class="bg-img" src="./s2_bg.jpg" alt />
    <img v-else class="bg-img" src="./s2_bg_m.jpg" alt />
    <img
      class="bg-img absolute"
      v-if="!isMobile"
      src="./s2_txt.png"
      alt
      data-aos="slide-up"
      data-aos-duration="600"
      data-aos-delay="500"
      data-aos-once="false"
    />
    <img
      class="bg-img absolute"
      v-else
      src="./s2_txt_m.png"
      alt
      data-aos="slide-up"
      data-aos-duration="600"
      data-aos-delay="500"
      data-aos-once="false"
    />
  </div>
</template>
<style lang="scss" scoped>
.bg-img {
  width: 100vw;
  height: auto;
  display: block;
  top: 0;
}

@media screen and (max-width: 767px) {
  .img {
    display: none;
  }
  .imgM {
    display: block;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section2',

  methods: {},

  data() {
    return {
      isMobile
    }
  }
}
</script>
