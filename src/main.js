import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import '@/assets/style/global.scss'

/* 全局配置 https://blog.csdn.net/FireBird_one/article/details/80295229 */
import config from './lib/config.js'

import VueScrollTo from 'vue-scrollto' // scroll 錨點

// 提升效能套件
import VueLazyload from 'vue-lazyload' // 圖片 lazy load
import infiniteScroll from 'vue-infinite-scroll' // 如果有外部數據需要抓才用得到

import VueParticles from 'vue-particles'

// Icon
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookMessenger,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSvgIcon from 'vue-svgicon'
import {
  faBars,
  faTimes,
  faPhone,
  faPen,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

import AOS from '@/lib/aos/src/js/aos'
import 'aos/dist/aos.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'

// AOS.init()

library.add(faBars)
library.add(faTimes)
library.add(faPhone)
library.add(faPen)
library.add(faFacebookMessenger)
library.add(faFacebookF)
library.add(faMapMarkerAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueSvgIcon, {
  tagName: 'icon'
})

Vue.use(config)

Vue.use(ElementUI)
Vue.use(VueScrollTo)

// 提升效能套件
Vue.use(VueLazyload, {
  loading: require('./projects/lixin/loadinfo.gif'),
})
// Vue.use(infiniteScroll)

Vue.use(VueParticles)

new Vue({
  router,
  store,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
