<template>
  <div class="contact" id="contact">
    <div class="container">
      <div>
        <div class="title">聯絡我們</div>
        <div class="info-item">
          <div class="subtitle">
            <div class="line"></div>
            <span>ADDRESS</span>
          </div>
          <div class="desc">台北市中山區建國北路二段65號4樓</div>
        </div>
        <div class="info-item">
          <div class="subtitle">
            <div class="line"></div>
            <span>CONTACT</span>
          </div>
          <div class="desc">
            電話
            <br />02-2500-0818
          </div>
        </div>
      </div>
      <div>
        <div class="form">
          <div class="row flex">
            <el-input placeholder="姓名*"></el-input>
            <el-input placeholder="公司"></el-input>
          </div>

          <div class="row flex">
            <el-input placeholder="信箱*"></el-input>
            <el-input placeholder="電話"></el-input>
          </div>

          <el-input type="textarea" :rows="1" placeholder="我想詢問廣告內容"></el-input>
          <el-input type="textarea" :rows="4" placeholder="詢問內容"></el-input>
        </div>
        <div class="button">GO!</div>
      </div>
    </div>
    <!-- <Order /> -->
    <!-- <HouseInfo /> -->
  </div>
</template>
<style lang="scss" scoped>
.contact {
  &:before {
    content: '';
    width: 100%;
    height: 205px;
    background: #fff;
    -webkit-transform: skewY(5deg);
    transform: skewY(5deg);
    position: absolute;
    top: -75px;
    left: 0;
    z-index: -1;
  }

  background: #fff;
  min-height: 500px;
  padding-top: 0px;
  z-index: 3;
  position: relative;
  // transform: translateY(-200px);
}

.container {
  width: 960px;
  margin: 0 auto;
  margin-top: 0px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  > div {
    width: 50%;
  }

  > div:nth-child(2) {
    margin-top: 50px;
  }
}

.title {
  font-size: 45.5px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 4.55px;
  text-align: left;
  color: #ed6d34;
  margin-bottom: 50px;
}

.info-item {
  margin-bottom: 55px;
}

.subtitle {
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  span {
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: 0.7px;
    text-align: left;
    color: #000000;
  }
}
.line {
  width: 44px;
  height: 2px;
  background: #000;
  margin-right: 15px;
}

.desc {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 1.76px;
  text-align: left;
  color: rgba(88, 88, 88, 0.83);
  padding-left: 60px;
}

.button {
  width: 223px;
  height: 68px;
  background-color: #ed6d34;
  margin: 0 auto;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 68px;
  letter-spacing: 0.8px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
</style>

<script>
import Order from '@/components/Order.vue'
import HouseInfo from '@/components/HouseInfo.vue'

export default {
  name: 'contactSection',
  components: {
    Order,
    HouseInfo,
  },

  methods: {},
}
</script>
