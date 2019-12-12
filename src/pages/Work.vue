<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <SideNavigation v-if="isSide" />
    <WorkNavigation v-else theme="white" />
    <WorkSection />
    <div class="work-footer">
      <img src="../projects/lixin/work/背景角圖.jpg" alt="" class="corner-img" v-if="!isMobile">
      <div class="work-info">
        <div class="info-row">
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
        <div class="info-row">
          <div class="info-item">
            <icon class="logo" :data="logo" />
          </div>
          <div class="info-item">
            <div class="info-name">
              © 2019 立炘數位行銷有限公司
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="section8">
      <Section8 />
    </div>
    <div id="section9">
      <Section9 />
    </div> -->
    <!-- <ContactSection />
    <Footer /> -->
    <!-- <MobileNav /> -->
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
</style>

<style lang="scss" scoped>
.work-footer {
  width: 1484px;
  margin: auto;
  position: relative;
}

.corner-img {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  width: calc(100vw * (700 / 1440));
  height: calc(100vw * (430 / 1440));
}

.work-info {
  width: 1277px;
  height: 444px;
  background: #ed6d34;
  color: #fff;
  padding: 169px 30px 169px 114px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items:stretch;
  flex-wrap: wrap;
  line-height: 1.6;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction:column;
}

.info-item {
  display: flex;
  align-items: flex-start;
  width: 430px;
}

.info-line {
  width: 44px;
  height: 1px;
  background: #fff;
  margin-right: 15px;
}

.info-title {
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0;
  letter-spacing: 0.8px;
  text-align: left;
  color: #fff;
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
  background:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' fill='%23fff'><path d='M757.47 537.473c32.419-47.473 52.104-105.368 52.104-167.894 0-164.418-133.156-297.576-297.576-297.576s-297.576 133.156-297.576 297.576c0 62.526 19.684 120.418 52.104 167.894l245.47 414.521 245.47-414.521zM512 191.266c98.418 0 178.313 79.895 178.313 178.313s-79.895 178.313-178.313 178.313c-98.418 0-178.313-79.895-178.313-178.313s79.895-178.313 178.313-178.313z'></path></svg>");
}
.mail_icon{
  background:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' fill='%23fff'><path d='M73.143 146.285c-40.521 0-73.143 32.622-73.143 73.143v585.143c0 40.521 32.622 73.143 73.143 73.143h877.714c40.521 0 73.143-32.622 73.143-73.143v-585.143c0-40.521-32.622-73.143-73.143-73.143zM915.419 218.513c20.187 0 36.571 16.384 36.571 36.571 0 11.886-5.669 22.491-14.482 29.147l-402.359 329.216c-6.254 5.157-14.336 8.265-23.15 8.265s-16.896-3.109-23.223-8.302l-402.213-329.106c-8.448-6.766-13.824-17.079-13.824-28.635 0-20.187 16.347-36.535 36.535-36.571 9.033 0 17.262 3.255 23.662 8.667l379.063 310.089 379.136-310.126c7.696-6.597 18.437-8.985 24.283-9.216zM252.928 603.281l57.783 47.214-177.847 145.518c-37.815 31.232-84.443-25.819-46.299-56.649zM771.072 603.281l166.363 136.082c38.144 30.83-8.485 87.881-46.299 56.649l-177.847-145.518z'></path></svg>");
}
.phone_icon{
  background:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' fill='%23fff'><path d='M716.8 599.77c-58.514 58.514-58.514 117.029-117.029 117.029s-117.029-58.514-175.543-117.029-117.029-117.029-117.029-175.543 58.514-58.514 117.029-117.029c58.514-58.514-117.029-234.057-175.543-234.057s-175.543 175.543-175.543 175.543c0 117.029 120.247 354.304 234.057 468.114s351.086 234.057 468.114 234.057c0 0 175.543-117.029 175.543-175.543s-175.543-234.057-234.057-175.543z'></path></svg>");
}
.info-desc {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 1.76px;
  text-align: left;
  color: rgba(255, 255, 255, .85);
  margin-top: 35px;
}

.info-name {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 0.8px;
  text-align: left;
  color: #ffffff;
}

.logo {
  width: 188px;
  height: auto;
  display: block;
  fill: #fff;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .work-info {
    width: 873px;
    height: 280px;
    padding: 50px 30px 50px 50px;
  }

  .info-desc {
    margin-top: 20px;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .work-info {
    width: 100vw;
    height: auto;
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 1px;
  }
  .info-row {
    display: block;
  }
  .info-item {
    width: 100vw;
    margin-bottom: 30px;
  }
}
</style>

<script>
// @ is an alias to /src
import WorkNavigation from '@/layouts/WorkNavigation.vue'
import SideNavigation from '@/layouts/SideNavigation.vue'
// import ContactSection from '@/layouts/ContactSection.vue'
// import MobileNav from '@/layouts/MobileNav.vue'
import gtm from '@/mixins/gtm.js'
import WorkSection from '@/projects/lixin/WorkSection.vue'
import logo from '@/assets/svg/logo-w.svg'
import { isMobile, isTablet } from '@/utils'
// import Section1 from '@/projects/lixin/Section1.vue'
// import Section2 from '@/projects/lixin/Section2.vue'
// import Section3 from '@/projects/lixin/Section3.vue'
// import Section4 from '@/projects/lixin/Section4.vue'
// import Section5 from '@/projects/lixin/Section5.vue'
// import Section6 from '@/projects/lixin/Section6.vue'
// import Section7 from '@/projects/lixin/Section7.vue'
// import Section8 from '@/projects/yt/Section8.vue'
// import Section9 from '@/projects/yt/Section9.vue'
// import Footer from '@/layouts/Footer.vue'

export default {
  name: 'work',
  mixins: [gtm],
  components: {
    WorkNavigation,
    SideNavigation,
    // ContactSection,
    // MobileNav,
    // Section1,
    // Section2,
    // Section3,
    // Section4,
    // Section5,
    // Section6,
    // Section7,
    // Section8,
    // Section9,
    // Footer,
    WorkSection,
  },

  data() {
    return {
      isSide: false,
      isMobile,
      logo,
    }
  },

  methods: {
    onDone() {
      console.log('done')
    },
  },
}
</script>
