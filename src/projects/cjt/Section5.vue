<template>
  <div class="section5">
    <img
      v-if="!isMobile"
      class="bg-img"
      data-aos="fade"
      data-aos-duration="1500"
      src="./s5_bg.jpg"
      alt
    />
    <div v-else class="bg-img" data-aos="fade" data-aos-duration="1500" @click="showImgDialog">
      <img src="./s5_bg_m.jpg" alt />
    </div>
    <div class="scale-img-dialog" v-if="showDialog">
      <div class="mask">
        <img @click="showDialog = false" class="close" src="@/assets/img/close.png" alt />
        <div class="content">
          <img src="./s5_bg.jpg" alt />
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
  img {
    width: 100vw;
    height: auto;
    display: block;
  }
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
  name: 'section5',

  methods: {
    showImgDialog() {
      this.showDialog = true
    },
  },

  data() {
    return {
      isMobile,
      showDialog: false,
    }
  },
}
</script>
