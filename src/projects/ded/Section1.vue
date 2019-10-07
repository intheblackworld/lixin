<template>
  <section class="fullscreen section1" id="section1">
    <div class="bg">
      <div class="light">
        <img src="./s1_light.png" alt="light" />
      </div>
      <div class="cloud1">
        <img src="./s1_cloud1.png" alt="cloud1" />
      </div>
      <div class="cloud2">
        <img src="./s1_cloud2.png" alt="cloud2" />
      </div>
      <div class="cloud3">
        <img src="./s1_cloud3.png" alt="cloud3" />
      </div>
      <div class="building">
        <img src="./s1_building.png" alt="building" />
      </div>
      <div class="title" data-aos="fade-left" data-aos-once="false">
        <img src="./s1_title.png" alt="title" />
      </div>
      <div class="title-bg" data-aos="fade-left" data-aos-once="false">
        <img src="./s1_title_bg.png" alt="title" />
      </div>
      <div class="logo">
        <img src="./s1_logo.png" alt="logo" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section1 {
  margin: 60px 0 0 0;
  background: url(./s1_bg.png) repeat-x;
  background-size: auto 100%;
  .bg > * {
    position: absolute;
    vertical-align: bottom;

    img {
      display: block;
    }
  }
  .light {
    bottom: 0;
    left: 34%;
    transform: translate(-50%, 30%);
    img {
      max-height: 140vh;
    }
  }
  .cloud1 {
    animation: cloud 120s linear infinite;
    animation-delay: -20s;
    left: 0;
    top: 0px;
  }
  .cloud2 {
    animation: cloud 70s linear infinite;
    animation-delay: -50s;
    left: 0;
    top: 0px;
  }
  .cloud3 {
    animation: cloud 90s linear infinite;
    animation-delay: -30s;
    left: 0;
    top: 70px;
  }
  .building {
    bottom: 0;
    left: 56%;
    transform: translateX(-50%);
    margin: 0 0 0 -230px;
    img {
      max-height: calc(90vh - 60px);
      max-width: calc(175vw);
    }
  }
  .logo {
    top: 65%;
    left: 56%;
    transform: translate(0, -100%);
    margin: 0 0 0 0;
    img {
      max-height: 50vh;
      max-width: 50vw;
    }
  }
  .title {
    bottom: 5%;
    right: 8%;
    // transform: translate(-20%, 0);
    margin: 0 0 0 0px;
    z-index: 1;
    img {
      max-height: 27vh;
      max-width: 135vw;
    }
  }

  .title-bg {
    width: 100vw;
    bottom: 2%;
  }
}

@keyframes cloud {
  from {
    transform: translate(-1920px, 0);
  }

  to {
    transform: translate(1930px, 0);
  }
}
</style>

<script>
export default {
  name: 'section1',
  data() {
    return {}
  },
}
</script>
