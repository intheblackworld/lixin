<template>
  <div class="section4 relative flex-c wrap">
    <img
      class="bg-img"
      src="./s4_bg.png"
      data-aos="fade"
      data-aos-duration="1500"
      data-aos-delay="0"
      alt
    />
    <img
      class="content-img"
      data-aos="fade"
      data-aos-duration="1500"
      data-aos-delay="300"
      src="./s4_content.jpg"
      alt
    />
  </div>
</template>
<style lang="scss" scoped>
.bg-img {
  width: 63.7%;
  height: auto;
  display: block;
}

.content-img {
  width: 36.3%;
  display: block;
}

@media screen and (max-width: 767px) {
  .bg-img {
    width: 100vw;
    height: auto;
    display: block;
  }

  .content-img {
    width: 100vw;
    display: block;
  }
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'section4',

  methods: {},
}
</script>
