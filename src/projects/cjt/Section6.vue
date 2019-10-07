<template>
  <div class="section6">
    <img
      v-if="!isMobile"
      class="bg-img"
      data-aos="fade"
      data-aos-duration="1500"
      src="./s6_bg.jpg"
      alt
    />
    <img
      v-if="isMobile"
      class="bg-img"
      data-aos="fade"
      data-aos-duration="1500"
      src="./s6_txt_m.jpg"
      alt
    />
    <img
      v-if="isMobile"
      @click="showDialog = true"
      class="bg-img"
      data-aos="fade"
      data-aos-delay="300"
      data-aos-duration="1500"
      src="./s6_img_m.jpg"
      alt
    />

    <div class="scale-img-dialog" v-if="showDialog">
      <div class="mask">
        <img @click="showDialog = false" class="close" src="@/assets/img/close.png" alt />
        <div class="content">
          <img src="./s6_img_m.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg-img {
  width: 100vw;
  height: auto;
  display: block;
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
  name: 'section6',

  methods: {},

  data() {
    return {
      isMobile,
      showDialog: false,
    }
  },
}
</script>
