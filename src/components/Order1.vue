<template>
  <div class="order-bg" ref="parallax2">
    <div class="order-top">
      <div class="title-block">
      <h2 class="order-title" v-html="order.title" data-aos="zoom-in" v-if="order.title"></h2>
      <div class="order-subtitle" v-html="order.subTitle" data-aos="zoom-in" v-if="order.subTitle"></div>
      </div>
      <div class="order" data-aos="zoom-in">
        <div class="form">
          <div class="group">
            <div class="row">
              <label>姓名<span>*</span></label>
              <el-input v-model="form.name" placeholder></el-input>
            </div>
            <div class="row">
              <label>手機<span>*</span></label>
              <el-input v-model="form.phone" placeholder></el-input>
            </div>
            <div class="row" v-if="order.room_type">
              <label>需求房型</label>
              <el-select v-model="form.room_type" placeholder>
                <el-option v-for="city in order.room_type" :key="city" :label="city" :value="city" no-data-text=""></el-option>
              </el-select>
            </div>
            <div class="row">
              <label>居住城市</label>
              <el-select v-model="form.city" placeholder>
                <el-option
                  v-for="city in cityList"
                  :key="city.value"
                  :label="city.label"
                  :value="city.value"
                  no-data-text="無數據"
                ></el-option>
              </el-select>
            </div>
            <div class="row">
              <label>居住地區</label>
              <el-select v-model="form.area" placeholder>
                <el-option
                  v-for="area in areaList"
                  :key="area.value"
                  :label="area.label"
                  :value="area.value"
                  no-data-text="請先選擇居住城市"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="group">
            <div class="row" style="height: 100%">
              <el-input
                type="textarea"
                :rows="7"
                placeholder="請輸入您的留言 (選填)"
                v-model="form.msg"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="control">
          <el-checkbox v-model="checked">
            <h3>
              本人知悉並同意
              <span @click="showPolicyDialog">「個資告知事項聲明」</span>
              內容
            </h3>
          </el-checkbox>
        </div>
        <div style="margin: 0 auto; z-index: 2" v-if="!isMobile">
          <vue-recaptcha
            :sitekey="info.recaptcha_site_key_v2"
            @verify="isVerify = true"
            :loadRecaptchaScript="true"
          ></vue-recaptcha>
        </div>
        <div style="margin: 0 auto; z-index: 2" v-if="isMobile">
          <vue-recaptcha
            :sitekey="info.recaptcha_site_key_v2"
            @verify="isVerify = true"
            :loadRecaptchaScript="true"
          ></vue-recaptcha>
        </div>
        <el-button
          class="form-submit bt_registration btregistration"
          type="primary"
          :disabled="!checked || !isVerify"
          @click="submit"
          :loading="isSubmit"
          >立即諮詢</el-button
        >
        <Loading :loading="isSubmit" :isOpacity="true" />
      </div>
    </div>

    <PolicyDialog
      :policyVisible="policyVisible"
      @hidePolicyDialog="hidePolicyDialog"
    />
  </div>
</template>

<script>
import PolicyDialog from "@/components/PolicyDialog.vue";
import info from "@/info";
import { cityList, renderAreaList } from "@/info/address";
import { isMobile } from "@/utils";
import Loading from "@/components/Loading.vue";
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "order",
  components: {
    PolicyDialog,
    Loading,
    VueRecaptcha,
  },

  data() {
    return {
      cityList,
      info,
      order: info.order,
      isMobile,
      form: {
        name: "",
        phone: "",
        contacttime: "",
        city: "",
        area: "",
        gender: "",
        infosource: "",
        room_type: '',
        parking: "",
        houseStyle: "",
        msg: "",
        time_start: "",
        time_end: "",
      },
      checked: false,
      isSubmit: false,
      isVerify: false, // google 機器人驗證
      policyVisible: false,
      showValidateDialog: false,
    };
  },

  computed: {
    areaList() {
      return renderAreaList(this.form.city);
    },
  },

  mounted() {

    const elem = this.$refs.parallax2;

    var parallaxInstance = new Parallax(elem, {
      relativeInput: true,
      selector: '.parallax-item'
    });
  },
  methods: {
    showPolicyDialog() {
      this.policyVisible = true;
    },
    hidePolicyDialog() {
      this.policyVisible = false;
    },

    alertValidate() {
      const h = this.$createElement;
      this.$notify({
        title: "請填寫必填欄位",
        message: h(
          "i",
          { style: "color: #82191d" },
          "「姓名、手機」是必填欄位"
        ),
      });
    },

    alertPhoneValidate() {
      const h = this.$createElement;
      this.$notify({
        title: "格式錯誤",
        message: h("i", { style: "color: #82191d" }, "「手機」需為 10 碼數字"),
      });
    },

    submit() {
      if (this.isSubmit) return;
      if (!this.isVerify) return;
      if (!this.checked) return;
      this.isSubmit = true;
      if (
        !this.form.name ||
        !this.form.phone
        // ||
        // !this.form.time_start ||
        // !this.form.time_end
        // ||
        // !this.form.email ||
      ) {
        this.alertValidate('「姓名、手機」是必填欄位')
        this.isSubmit = false;
        return;
      }
      if (this.form.phone.length != 10) {
        this.alertValidate('手機號碼請填10碼')
        this.isSubmit = false;
        return;
      }
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");
      const utmMedium = urlParams.get("utm_medium");
      const utmContent = urlParams.get("utm_content");
      const utmCampaign = urlParams.get("utm_campaign");
      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("phone", this.form.phone);
      formData.append("email", this.form.email);
      formData.append("contacttime", this.form.contacttime);
      formData.append("msg", this.form.msg);
      formData.append("room_type", this.form.room_type);
      // formData.append('time_start', this.form.time_start)
      // formData.append('time_end', this.form.time_end)
      formData.append("city", this.form.city);
      formData.append("area", this.form.area);
      formData.append("gender", this.form.area);
      formData.append("infosource", this.form.area);
      formData.append("parking", this.form.area);
      formData.append("houseStyle", this.form.area);
      formData.append("utm_source", utmSource);
      formData.append("utm_medium", utmMedium);
      formData.append("utm_content", utmContent);
      formData.append("utm_campaign", utmCampaign);
      const time = new Date();
      const year = time.getFullYear();
      const month = time.getMonth() + 1;
      const day = time.getDate();
      const hour = time.getHours();
      const min = time.getMinutes();
      const sec = time.getSeconds();
      const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
      fetch(
        `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${this.form.name}&phone=${this.form.phone}&email=${this.form.email}&cityarea=${this.form.city}${this.form.area}&msg=${this.form.msg}&room_type=${this.form.room_type}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_campaign=${utmCampaign}&date=${date}&campaign_name=${info.caseName}
      `,
        {
          method: "GET",
        }
      );
      fetch("contact-form.php", {
        method: "POST",
        body: formData,
      }).then((response) => {
        this.isSubmit = false;
        if (response.status === 200) {
          window.location.href = "formThanks";
          
          

        }
      });
    },
  },
};
</script>

<style lang="scss">
.el-input {
  border-left: 1px solid #eee !important;
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";

.contact1 {
  position: absolute;
  left: size(200);
  width: size(756);
}

.contact2 {
  position: absolute;
  right: -#{size(50)};
  width: size(148);
}
.bg-img {
  width: 110%;
  position: absolute;
  top: 0;
  right: -2%;
  pointer-events: none;
}
.order-bg {z-index: 5;
  background: #fff;
  position: relative;
  pointer-events: unset !important;

  input,
  textarea,
  button {
  // font-family: $family3;
    background: $order_submit_bg;
  //  border-radius: $order_submit_borderradius !important;
  }
  .order-top {
    //background-color: $order_bg_color;
    //background-image: url("~@/assets/img/contact_bg.jpg");
    //background: $order_bg_image no-repeat;
    background-size: cover;
    background-position: bottom right;
    position: relative;
    padding: 0vw 0 0 0;
   // padding-bottom: 500px;
  }
  .order-title {
  position: relative;
   // font-family: $family1;
  // width: size(1500);
  // font-family: 'Noto Serif TC', serif;
    padding-top:2em;
    padding-bottom:0;
    font-weight:700;
  line-height:1.6;
  font-size: size(39);
    letter-spacing: size(10);
    text-indent: size(10);
    text-align: center;
    color: $order_title_color;
    margin: 0 auto;
    margin-bottom: size(50);
    display: inline-block;
    z-index: 3;
   // background:  #2B5161;
  }
  .order-title-img {
    width: 30vw;
    margin: 3vh auto;
    //margin-bottom: 1vw;

    img {
      width: 100%;
      max-width: 500px;
    }
  }

  .contact-brick {
    position: absolute;
    width: 20vw;
    left: 15vw;
    top: 42vw;
  }

  .order-subtitle {
    width: 100vw;
    font-size: 20px;
    text-align: center;
    color: $order_subtitle_color;
    margin-bottom: 40px;
    padding-bottom: 18px;
    line-height: 1.5;
    font-weight: 600;
  }

  .order {
    position: relative;
    width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
   // padding-bottom: 3rem;
    justify-content: space-between;
    z-index: 1;
  }

  .form {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    justify-content: space-between;
    > .group {
      flex: 1;
      align-items: flex-start;
    }
  }

  .group {
    height: 300px;
    margin-bottom: 40px;
    align-content: space-between;
    display: flex;
    flex-wrap: wrap;

    &:nth-child(1) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      margin-right: 40px;
      padding-right: 40px;
      .row {
        width: 100%;
        // justify-content: flex-start;
        .el-input {
          width: auto;
        }
      }
    }
    &:nth-child(2) {
      .row {
        //justify-content: flex-end;
        //align-items: flex-start;
        //height: 100%;
        width: 100%;
      }
    }
  }

  .row {
    display: flex;
    align-items: center;
    align-content: space-between;
    justify-content: space-between;
    //margin-bottom: 15px;
    background: $order_input_bg;

    &.house {
      margin-top: 50px;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      width: 5vw;
      font-size: 16px;
      font-weight: 600;
      opacity: 0.8;
      color: $order_input_label_color;
      text-align: left;
      padding-left: 15px;
      white-space: nowrap;
      line-height: 1.2;
      span {
        color: #ff0000;
      }
    }
  }

  .control {
    margin-top: 40px;
    margin-bottom: 20px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .order-title {
    font-size: 32px;
  }

  .order-title-img {
    width: 90vw;
  }

  .order-subtitle {
    font-size: 16px;
  }

  .order {
  //  width: 920px;
    margin: 0 auto;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .order-bg {
    background-size: contain;
    padding-top: 0;
    margin: 0;
    position: relative;
    z-index: 2;

    > img {
      display: block;
    }
    .order-title {
      width: 100%;
      font-size: calc(100vw * 30 / 375);
    }
    .order-title-img {
      width: 80vw;
    }

    .order-subtitle {
      // display: none;
      font-size: 14px;
    //  max-width: 80vw;
      margin: 0 auto;
      margin-bottom: 0;
      line-height: 1.5;
    }
    .order-top {
      background-size: contain;
      background-repeat: repeat;
      // top: 10vw;
      padding-bottom: 0;
    }
    .order {
      width: 85% !important;
      margin: 0 auto;
      padding: 0;
    }

    .form {
      flex-direction: column;
    }

    .group {
      width: 100%;
      height: auto !important;
      margin-bottom: 0px !important;
      border: none !important;
      padding-right: 0 !important;
      &:nth-child(1) {
        .row {
          .el-input {
            width: 100%;
          }
        }
      }
    }
    .row {
      margin-bottom: 12px !important;

      &.house {
        margin-top: 20px;
      }
      label {
        width: 40% !important;
        text-align: left;
      font-size: 15px;
      }
    }

    .control {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .hint {
      width: calc(100vw * 334 / 375);
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }

    @keyframes leaf {
      100% {
        transform: skew(2deg);
      }
    }
  }
}
</style>
