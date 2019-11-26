<template>
  <div class="footer">
    <img src="../assets/img/footer_bg.png" alt class="footer-bg" />
    <!-- <img src="../assets/img/footerLogo.png" alt="心天畝的圖片" /> -->
    <div class="footer-bottom">
      <a
        class="link"
        href=" https://www.h35.tw/admin/test/login.php"
        target="_blank"
      >© 2019 立炘數位行銷有限公司. ALL RIGHTS RESERVED.</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  // width: 100%;
  // height: 40px;
  // margin-bottom: 0px;
  // background: #302626;
  position: relative;
  z-index: 2;
  .footer-bg {
    width: 100vw;
    height: auto;
    margin-top: -200px;
  }

  .link {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: 0.7px;
    text-align: left;
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
  }

  .footer-bottom {
    height: 82px;
    background-color: #ed6d34;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // img {
  //   width: 50px;
  //   margin-right: 20px;
  // }

  // p {
  //   font-size: 12px;
  //   color: rgba(255, 255, 255, 0.6);
  //   margin-right: 15px;
  //   margin-bottom: 0;
  // }

  // a {
  //   font-size: 12px;
  //   color: #fff;
  //   text-decoration: none;
  // }
}

@media screen and (max-width: 767px) {
  .footer {
    // margin-bottom: 63px;
  }
}

@media only screen and (max-width: 767px) {
  .footer {
    // margin-bottom: 63px;
    .footer-bg {
      width: 100vw;
      height: 414px;
      object-fit: cover;
      margin-top: -50px;
    }
  }
}
</style>

<script>
export default {
  name: 'adminFooter',
  components: {},

  methods: {},
}
</script>
