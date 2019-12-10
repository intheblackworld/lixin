<template>
  <div class="contact" id="contact">
    <div class="container">
      <div>
        <div class="title">聯絡我們</div>
        <div class="info-item">
            <div class="map_icon"></div>
          <div class="desc" @click="showMAP">台北市中山區建國北路二段65號4樓</div>
        </div>
        <div class="info-item">
            <div class="mail_icon"></div>
          <div class="desc" @click="showEmail">service@lixin.com.tw</div>
        </div>
        <div class="info-item">
            <div class="phone_icon"></div>
          <div class="desc" @click="showCallDialog">02-2500-0818</div>
        </div>
      </div>
      <div>
        <div class="form">
          <div class="row flex">
            <el-input v-model="form.name" @input="handleName" :class="`${hasName ? 'hasValue' : ''}`">
              <template slot="append">姓名*</template>
            </el-input>
            <el-input v-model="form.company" @input="handleCompany" :class="`${hasCompany ? 'hasValue' : ''}`">
              <template slot="append">公司</template>
            </el-input>
          </div>

          <div class="row flex">
            <el-input v-model="form.email" @input="handleEmail" :class="`${hasEmail ? 'hasValue' : ''}`">
              <template slot="append">信箱</template>
            </el-input>
            <el-input v-model="form.phone" @input="handlePhone" :class="`${hasPhone ? 'hasValue' : ''}`">
              <template slot="append">電話*</template>
            </el-input>
          </div>

          <el-input v-model="form.title" type="textarea" :rows="1" placeholder="我想詢問廣告內容"></el-input>
          <el-input v-model="form.msg" type="textarea" :rows="4" placeholder="詢問內容"></el-input>
        </div>
        <div style="margin: 0 auto 15px">
          <vue-recaptcha :sitekey="info.recaptcha_site_key_v2"
          @verify="isVerify = true"
          style="display:flex;justify-content: center;"
          ></vue-recaptcha>
        </div>
        <div :class="`button ${isVerify ? '' : 'disabled'}`" @click="submit">GO!</div>
      </div>
    </div>
    <!-- <Order /> -->
    <!-- <HouseInfo /> -->
    <el-dialog title :visible.sync="isShowCallDialog" :width="isMobile ? '90%' : '480px'" :modal-append-to-body="false">
        <CallDialog :phone="info.phone" />
      </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  &:before {
    content:"";
    background:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='%23FFF' preserveAspectRatio='none'><polygon points='50,50 0,50 0,0'/></svg>");
    width: 100%;
    height: 90px;
    position: absolute;
    top: -90px;
    left: 0;
    z-index: -1;
    background-size: 100% 100%;
  }

  background: #fff url(../assets/img/footer_bg.png) repeat-x 50% 100%;
  background-size: 100% auto;
  min-height: 500px;
  z-index: 3;
  position: relative;
  padding: 0 0 90px 0;
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
  text-align: left;
}

.subtitle {
  display: flex;
  align-items: center;
  margin-bottom:0;
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
.map_icon,
.mail_icon,
.phone_icon{
  width: 1.2em;
  height: 1.2em;
  margin: 0 0.5em -0.2em 0;
  display: inline-block;
}
.map_icon{
  background:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' fill='%23000'><path d='M757.47 537.473c32.419-47.473 52.104-105.368 52.104-167.894 0-164.418-133.156-297.576-297.576-297.576s-297.576 133.156-297.576 297.576c0 62.526 19.684 120.418 52.104 167.894l245.47 414.521 245.47-414.521zM512 191.266c98.418 0 178.313 79.895 178.313 178.313s-79.895 178.313-178.313 178.313c-98.418 0-178.313-79.895-178.313-178.313s79.895-178.313 178.313-178.313z'></path></svg>");
}
.mail_icon{
  background:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' fill='%23000'><path d='M73.143 146.285c-40.521 0-73.143 32.622-73.143 73.143v585.143c0 40.521 32.622 73.143 73.143 73.143h877.714c40.521 0 73.143-32.622 73.143-73.143v-585.143c0-40.521-32.622-73.143-73.143-73.143zM915.419 218.513c20.187 0 36.571 16.384 36.571 36.571 0 11.886-5.669 22.491-14.482 29.147l-402.359 329.216c-6.254 5.157-14.336 8.265-23.15 8.265s-16.896-3.109-23.223-8.302l-402.213-329.106c-8.448-6.766-13.824-17.079-13.824-28.635 0-20.187 16.347-36.535 36.535-36.571 9.033 0 17.262 3.255 23.662 8.667l379.063 310.089 379.136-310.126c7.696-6.597 18.437-8.985 24.283-9.216zM252.928 603.281l57.783 47.214-177.847 145.518c-37.815 31.232-84.443-25.819-46.299-56.649zM771.072 603.281l166.363 136.082c38.144 30.83-8.485 87.881-46.299 56.649l-177.847-145.518z'></path></svg>");
}
.phone_icon{
  background:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' fill='%23000'><path d='M716.8 599.77c-58.514 58.514-58.514 117.029-117.029 117.029s-117.029-58.514-175.543-117.029-117.029-117.029-117.029-175.543 58.514-58.514 117.029-117.029c58.514-58.514-117.029-234.057-175.543-234.057s-175.543 175.543-175.543 175.543c0 117.029 120.247 354.304 234.057 468.114s351.086 234.057 468.114 234.057c0 0 175.543-117.029 175.543-175.543s-175.543-234.057-234.057-175.543z'></path></svg>");
}
.desc {
  display: inline-block;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 1.76px;
  text-align: left;
  color: rgba(88, 88, 88, 0.83);
  cursor: pointer;

  &:hover {
    color: #ed6d34;
  }
}

.button {
  width: 223px;
  height: 68px;
  position: relative;
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
  overflow: hidden;
  &::before {
    content: '';
    width: 40%;
    height: 100%;
    display: block;
    background: #fff;
    position: absolute;
    transform: skewX(-20deg);
    left: -10%;
    opacity: 0;
    top: 0;
    z-index: 5;
    transition: all 0.5s cubic-bezier(0.2, 0.95, 0.57, 0.99);
  }

  &.disabled {
    opacity: .7;
  }

  &:hover::before {
    opacity: 1;
    width: 90%;
    left: 140%;
  }
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
import CallDialog from '@/components/Dialog/Call'
import { isMobile, isTablet } from '@/utils'
import VueRecaptcha from 'vue-recaptcha'
import info from '@/info'

export default {
  name: 'contactSection',
  components: {
    Order,
    HouseInfo,
    CallDialog,
    VueRecaptcha,
  },

  data() {
    return {
      isMobile,
      form: {
        name: '',
        phone: '',
        email: '',
        city: '',
        area: '',
        msg: '',
      },
      isSubmit: false,
      isShowCallDialog: false,
      isVerify: false, // google 機器人驗證
      info,
      hasName: false,
      hasCompany: false,
      hasEmail: false,
      hasPhone: false,
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

    showCallDialog() {
      this.isShowCallDialog = true
    },

    handleName(string) {
      if (string.length > 0) {
        this.hasName = true
      } else {
        this.hasName = false
      }
    },
    handleCompany(string) {
      if (string.length > 0) {
        this.hasCompany = true
      } else {
        this.hasCompany = false
      }
    },
    handleEmail(string) {
      if (string.length > 0) {
        this.hasEmail = true
      } else {
        this.hasEmail = false
      }
    },
    handlePhone(string) {
      if (string.length > 0) {
        this.hasPhone = true
      } else {
        this.hasPhone = false
      }
    },

    submit() {
      if (this.isSubmit) return
      if (!this.isVerify) return
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
