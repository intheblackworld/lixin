<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <SideNavigation v-if="isSide" />
    <Navigation v-else />
    <div id="section1">
      <Section1 />
    </div>
    <div id="section2">
      <Section2 />
    </div>
    <div id="section3">
      <Section3 />
    </div>
    <div id="section4">
      <Section4 />
    </div>
    <div id="section5">
      <Section5 />
    </div>
     <div id="section6">
      <Section6 />
    </div>
    <div id="section7">
      <Section7 />
    </div>
    <ContactSection />
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
</style>

<style lang="scss" scoped>
// #section1 {
//   position: relative;
//   z-index: 3;
// }
</style>

<script>
// @ is an alias to /src
import Navigation from '@/layouts/Navigation.vue'
import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/lixin/Section1.vue'
import Section2 from '@/projects/lixin/Section2.vue'
import Section3 from '@/projects/lixin/Section3.vue'
import Section4 from '@/projects/lixin/Section4.vue'
import Section5 from '@/projects/lixin/Section5.vue'
import Section6 from '@/projects/lixin/Section6.vue'
import Section7 from '@/projects/lixin/Section7.vue'
import Footer from '@/layouts/Footer.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
    Navigation,
    SideNavigation,
    ContactSection,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Footer,
  },

  data() {
    return {
      isSide: false,
    }
  },
  methods: {
  },
}
</script>
