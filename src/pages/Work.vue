<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <SideNavigation v-if="isSide" />
    <WorkNavigation v-else theme="white" />
    <WorkSection />
    <div class="work-footer">
      <div class="work-info">
        <div class="info-row">
          <div class="info-item">
            <div class="info-line"></div>
            <div class="info-title">
              ADDRESS
              <div class="info-desc">台北市中山區建國北路二段65號4樓</div>
            </div>
            
          </div>
          <div class="info-item">
            <icon class="logo" :data="logo" />
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <div class="info-line"></div>
            <div class="info-title">
              CONTACT
              <div class="info-desc">02-2500-0818</div>
            </div>
          </div>
          <div class="info-item">
            <div class="info-name">
              © 2019 立炘數位行銷有限公司.  ALL RIGHTS RESERVED.
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
}

.work-info {
  width: 1277px;
  height: 444px;
  background: #ed6d34;
  color: #fff;
  padding: 169px 30px 169px 114px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
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
