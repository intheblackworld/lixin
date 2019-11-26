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
            02-2500-0818
          </div>
        </div>
      </div>
      <div>
        <div class="form">
          <div class="row flex">
            <el-input v-model="form.name">
              <template slot="append">姓名*</template>
            </el-input>
            <el-input v-model="form.company">
              <template slot="append">公司</template>
            </el-input>
          </div>

          <div class="row flex">
            <el-input v-model="form.email">
              <template slot="append">信箱*</template>
            </el-input>
            <el-input v-model="form.phone">
              <template slot="append">電話</template>
            </el-input>
          </div>

          <el-input v-model="form.title" type="textarea" :rows="1" placeholder="我想詢問廣告內容"></el-input>
          <el-input v-model="form.msg" type="textarea" :rows="4" placeholder="詢問內容"></el-input>
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

@media screen and (max-width: 767px) {
  .container {
    width: 100vw;
    flex-wrap: wrap;
    > div {
      width: 85%;
      margin: 0 auto;
    }
    .title {
      font-size: 45.5px;
    }
  }
}
</style>

<script>
import Order from '@/components/Order.vue'
import HouseInfo from '@/components/HouseInfo.vue'
import info from '@/info'

export default {
  name: 'contactSection',
  components: {
    Order,
    HouseInfo,
  },

  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        city: '',
        area: '',
        msg: '',
      },
      isSubmit: false,
    }
  },

  methods: {
    alertValidate() {
      const h = this.$createElement
      this.$notify({
        title: '請填寫必填欄位',
        message: h(
          'i',
          { style: 'color: #82191d' },
          '「姓名、 信箱」是必填欄位',
        ),
      })
    },

    submit() {
      if (this.isSubmit) return
      if (!this.checked) return
      this.isSubmit = true
      if (!this.form.name || !this.form.email) {
        this.alertValidate()
        this.isSubmit = false
        return
      }
      const urlParams = new URLSearchParams(window.location.search)
      const utmSource = urlParams.get('utm_source')
      const utmMedium = urlParams.get('utm_medium')
      const utmContent = urlParams.get('utm_content')
      const utmCampaign = urlParams.get('utm_campaign')
      const formData = new FormData()
      formData.append('name', this.form.name)
      formData.append('company', this.form.company)
      formData.append('phone', this.form.phone)
      formData.append('email', this.form.email)
      formData.append('title', this.form.title)
      formData.append('msg', this.form.msg)
      formData.append('utm_source', utmSource)
      formData.append('utm_medium', utmMedium)
      formData.append('utm_content', utmContent)
      formData.append('utm_campaign', utmCampaign)
      const time = new Date()
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()
      const hour = time.getHours()
      const min = time.getMinutes()
      const sec = time.getSeconds()
      const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`
      fetch(
        `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${this.form.name}&company=${this.form.company}&phone=${this.form.phone}&email=${this.form.email}&title=${this.form.title}&msg=${this.form.msg}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_campaign=${utmCampaign}&date=${date}&campaign_name=${info.caseName}
      `,
        {
          method: 'GET',
        },
      ).then(() => {
        fetch('contact-form.php', {
          method: 'POST',
          body: formData,
        }).then(response => {
          this.isSubmit = false
          if (response.status === 200) {
            window.location.href = 'formThanks'
          }
        })
      })
    },
  },
}
</script>
