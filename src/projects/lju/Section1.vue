<template>
  <div class="section1">
    <Loading :loading="loading" />
    <!-- 背景圖覽家仔 -->
    <!-- <div class="lazy-bg fullscreen" v-lazy:background-image="require('./s1_bg.jpg')">
      
    </div>-->
    <div class="fullscreen bg flex-c relative">
      <div
        class="content m-auto relative flex-jb wrap"
        data-aos="fade"
        data-aos-offset="50"
        data-aos-delay="0"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <img src="./s1_title.png" alt class="title absolute" />
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="50"
        data-aos-delay="600"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
        class="absolute tree-1"
      >
        <img src="./s1_tree_1.png" alt class />
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="50"
        data-aos-delay="600"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
        class="absolute tree-2"
      >
        <img src="./s1_tree_2.png" alt />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/variableDefault.scss';
.bg {
  background-image: url('./s1_bg.jpg');
  margin-top: $nav_pc_height;
}

@keyframes flower {
  from {
    transform: skewX(-3deg);
  }
  to {
    transform: skewX(0deg);
  }
}

.content {
  width: 640px;
  left: -50px;
  // margin-top: -250px;
  z-index: 2;

  .title {
    top: 50%;
    left: 50%;
    width: 7.5vw;
    transform: translate(-164%, -50%);
  }
}

.tree-1 {
  left: 0;
  width: 28vw;
  left: 0;
  animation: flower 2s linear infinite alternate;
  transform-origin: bottom;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.tree-2 {
  right: 0;
  width: 45.5vw;
  animation: flower 2s linear infinite alternate;
  transform-origin: bottom;
  img {
    width: 100%;
    object-fit: cover;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    margin-top: $nav_tablet_height;
  }
  .content {
    width: 540px;
    left: auto;
    margin-top: -250px;
  }

  .tree-1 {
    left: 0;
    width: 300px;
  }

  .tree-2 {
    right: 0;
    width: 500px;
    margin-top: 50px;
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .bg {
    margin-top: $nav_phone_height;
  }
  .content {
    width: 100vw;
    left: auto;
    margin-top: -250px;
    display: block;

    .title {
      width: auto;
      left: 40%;
      height: 40vh;
      transform: translateY(-35%);
    }
  }

  .tree-1 {
    left: 0;
    width: 140px;
  }

  .tree-2 {
    right: 0;
    width: 250px;
    margin-top: 0px;
    bottom: 0;
    top: auto;
    transform: none;
  }
}
</style>

<script>
// @ is an alias to /src
import Loading from '@/components/Loading.vue'
import { setTimeout } from 'timers'
import desc1 from '../../assets/svg/s1_desc_1.svg'
import desc2 from '../../assets/svg/s1_desc_2.svg'
import desc3 from '../../assets/svg/s1_desc_3.svg'
import desc4 from '../../assets/svg/s1_desc_4.svg'

export default {
  name: 'section1',
  components: {
    Loading,
  },

  data() {
    return {
      loading: false,
      desc1,
      desc2,
      desc3,
      desc4,
    }
  },

  methods: {},

  created() {
    this.$Lazyload.$on('loaded', ({ el, src }) => {
      setTimeout(() => {
        if (this.loading) {
          this.loading = false
        }
      }, 500)
    })
  },
}
</script>
