<template>
  <div :class="`navigation ${isFix ? 'fix' : ''}`">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div :class="`nav ${isOpen ? 'open' : ''}`">
          <icon class="logoC" :data="logo" @click="$router.push('/')" />
          <!-- <img class="logo" src="@/assets/img/nav-logo.png" alt /> -->
          <div class="menu" @click="toggleSidebar">
            <span class="menu_icon"></span>
          </div>
          <div :class="`mask ${isOpen ? 'open' : ''}`" @click="toggleSidebar" />
          <ul :class="`navlist ${isOpen ? 'open' : ''}`">
            <li
              :key="`item-${index}`"
              v-scroll-to="{ element: `#${item.section}`, offset: offset }"
              v-for="(item, index) in list"
              :class="`flex-ac`"
              @click="handleClick(item)"
            >
              <span :class="`link color`">
                <img v-if="item.reverseImgSrc" :src="item.reverseImgSrc" alt />
                <span>
                  <div class="title">{{ item.name }}</div>
                  <span class="subTitle">{{ item.subTitle }}</span>
                </span>
              </span>
            </li>
            <!-- <li
              v-show="item.link"
              :key="`link-${item.name}`"
              v-for="item in list"
              class="flex-ac link-item"
              @click="
                item.outLink
                  ? (window.open(item.outLink))
                  : $router.push(item.link)
              "
            >
              <span class="link">
                <img v-if="item.reverseImgSrc" :src="item.reverseImgSrc" alt />
                <span>
                  <div class="title">{{ item.name }}</div>
                  <span class="subTitle">{{ item.subTitle }}</span>
                </span>
              </span>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from '@/utils'
import logo from '@/assets/svg/logo-top.svg'
import logoC from '@/assets/svg/logo.svg'

export default {
  name: 'navigation',
  components: {},
  data() {
    return {
      isOpen: false,
      isMobile,
      isTablet,
      logo,
      logoC,
      isFix: false,
      window,
      list: [
        {
          name: '回首頁',
          imgSrc: '',
          subTitle: '',
          section: '',
          svgSrc: '',
          link: '/',
        },
        {
          name: '聯絡我們',
          imgSrc: '',
          subTitle: '',
          section: 'contact',
          svgSrc: '',
        },
        {
          name: '加入立炘',
          imgSrc: '',
          subTitle: '',
          link: ' https://www.104.com.tw/company/1a2x6bkhg2',
          outLink: ' https://www.104.com.tw/company/1a2x6bkhg2',
          svgSrc: '',
        },
        {
          name: '',
          imgSrc: require('../assets/img/nav/fb_w.png'),
          reverseImgSrc: require('../assets/img/nav/fb_b.png'),
          subTitle: '',
          link: 'https://www.facebook.com/lixin.com.tw/',
          outLink: 'https://www.facebook.com/lixin.com.tw/',
          svgSrc: '',
        },
        {
          name: '',
          imgSrc: require('../assets/img/nav/youtube_w.png'),
          reverseImgSrc: require('../assets/img/nav/youtube_b.png'),
          subTitle: '',
          link: 'https://www.youtube.com/channel/UChwYvwlnfXs_PTJMUdyR2Eg',
          outLink: 'https://www.youtube.com/channel/UChwYvwlnfXs_PTJMUdyR2Eg',
          svgSrc: '',
        },
      ],
    }
  },

  props: ['theme'],

  computed: {
    offset() {
      if (this.isMobile) {
        return -39
      }

      if (this.isTablet) {
        return -45
      }

      return -56
    },
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.handleScroll()
    })
  },

  methods: {
    handleScroll() {
      if (window.scrollY > window.innerHeight + 50) {
        this.isFix = true
      } else {
        this.isFix = false
      }
    },
    toggleSidebar() {
      this.isOpen = !this.isOpen
    },

    handleClick(item) {
      if (item.section) {
        this.toggleSidebar()
      } else if (item.link && !item.outLink) {
        this.$router.push(item.link)
      } else if (item.link && item.outLink) {
        window.open(item.outLink)
      }
    },
  },
}
</script>

<style lang="scss">
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';
.logoC {
  width: $logo_pc_width;
  height: auto;
  position: absolute;
  left: 0;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s;
  fill: #999;
  cursor: pointer;
  .st0 {
    fill: #999;
  }
  .st1 {
    fill: #ec6d34;
    transition: all 0.3s;
  }
  // .st2 {
  //   clip-path: url(#SVGID_3_);
  // }
  // .st3 {
  //   clip-path: url(#SVGID_4_);
  //   fill: url(#SVGID_5_);
  // }
  // .st4 {
  //   clip-path: url(#SVGID_6_);
  // }
  // .st5 {
  //   clip-path: url(#SVGID_7_);
  //   fill: url(#SVGID_8_);
  // }
  // .st6 {
  //   clip-path: url(#SVGID_9_);
  // }
  // .st7 {
  //   clip-path: url(#SVGID_10_);
  //   fill: url(#SVGID_11_);
  // }
  // .st8 {
  //   fill: #ec6d34;
  // }
  // .st9 {
  //   clip-path: url(#SVGID_12_);
  // }
  // .st10 {
  //   clip-path: url(#SVGID_13_);
  //   fill: url(#SVGID_14_);
  // }
}

// .logo {
//     fill: #999;
//   .st0 {
//     fill: #999;
//     transition: all 0.3s;
//   }
//   .st1 {
//     fill: #ec6d34;
//     transition: all 0.3s;
//   }
// }
@media only screen and (max-width: 767px) {
  .logoC {
    width: 150px;
  }
}
</style>

<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';
.navigation {
  background-color: $nav_bg;
  background-image: $nav_bg;
  background-size: cover;
  height: $nav_pc_height;
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex !important;
  border-bottom: 1px solid #fff;
  align-items: center;
  transition: all 0.3s;
  background: #fff;
  // box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);

  &.fix {
    border-bottom: none;
    background-color: #fff;
    border-bottom: 1px solid #333;
    height: 60px;
  }
}

.nav-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  a {
    display: block;
    cursor: pointer;
  }
}

.fix {
  .logo {
    width: 150px;
  }
}

.logo {
  width: $logo_pc_width;
  height: auto;
  position: absolute;
  left: 0;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s;
}

.mask {
  display: none;
}

.navlist {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  li {
    height: 100%;
    transition: all 0.8s;
    &:hover {
      color: #ec6d34;
      list-style-type: disc;
    }
  }

  .link {
    color: #585858;
    height: 100%;
    text-align: center;
    display: block;
    cursor: pointer;
    padding: 0 20px;
    transition: all 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    // border-right: 1px solid $nav_link_hover_bg;

    &.color {
      color: #585858;
    }

    &:hover {
      color: #ec6d34;
      list-style-type: circle;
      img {
        animation: r5 0.5s infinite alternate;
      }
    }

    @keyframes r5 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(5deg);
      }
    }

    // &::before {
    //   content: '';
    //   width: 0%;
    //   height: 100%;
    //   display: block;
    //   background: $nav_link_hover_bg; // second bg
    //   position: absolute;
    //   transform: skewX(-20deg);
    //   left: -10%;
    //   opacity: 1;
    //   top: 0;
    //   z-index: 2;
    //   transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
    //   // box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
    // }

    // &::after {
    //   content: '';
    //   width: 0%;
    //   height: 100%;
    //   display: block;
    //   background: #fff; // first bg
    //   position: absolute;
    //   transform: skewX(-20deg);
    //   left: -10%;
    //   opacity: 0;
    //   top: 0;
    //   z-index: 1;
    //   transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    //   // box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
    // }
    // &:hover::before,
    // &:hover::before {
    //   opacity: 1;
    //   width: 116%;
    // }
    // &:hover::after,
    // &:hover::after {
    //   opacity: 1;
    //   width: 120%;
    // }

    .title {
      font-size: 16px !important;
      position: relative;
      z-index: 3;
    }

    .subTitle {
      color: $nav_link_subtitle_color;
      font-size: 12px;
    }

    img {
      width: calc(100vw * 50 / 1920);
      height: auto;
      margin-right: -10px;
    }
  }
}

.menu {
  display: none;
}

.link {
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .navigation {
    height: $nav_tablet_height;
    justify-content: center;
  }

  .logo {
    width: $logo_tablet_width;
    // left: -240px;
  }

  .navlist {
    width: 85%;
    justify-content: flex-end;
  }

  .navlist .link {
    font-size: 12px;
    width: 120px;
    white-space: nowrap;

    img {
      // height: 35px;
      margin-bottom: 5px;
    }

    .divided {
      margin-left: 6px;
    }
  }

  :global {
    .ui.fluid.container {
      width: 100% !important;
    }
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .navigation {
    height: 60px;
    z-index: 110;
  }

  .nav-container {
    display: block;
    height: auto;
  }

  .logo {
    width: $logo_phone_width;
    left: 15px;
  }

  .nav {
    position: static;
    height: 60px;
  }

  .menu {
    display: block;
    position: absolute;
    right: 35px;
    width: 25px;

    svg {
      color: #333;
    }
  }

  .menu_icon,
  .menu_icon::before,
  .menu_icon::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    left: 0;
    background-color: #999;
    content: '';
    transition-duration: 0.3s, 0.3s;
    transition-delay: 0.3s, 0s;
    transition-property: top, transform;
    top: 0;
  }
  .menu_icon {
    transition: all 0s 0.3s;
    text-indent: -9999px;
    line-height: 0;
    top: 50%;
    left: 20%;
    margin-top: -2px;
  }
  .menu_icon::before {
    transform: translate(0, 200%);
  }

  .menu_icon::after {
    transform: translate(0, -200%);
  }
  .open {
    .logo {
    }
    .menu_icon {
      background: none;
    }
    .menu_icon::before {
      background-color: #999;
      transform: translate(0, 0) rotate(45deg);
    }

    .menu_icon::after {
      background-color: #999;
      transform: translate(0, 0) rotate(-45deg);
    }
  }

  .navlist {
    position: absolute;
    z-index: 111;
    background: transparent;
    width: 0%;
    right: 0;
    top: $nav_phone_height;
    height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all 0.3s ease-in;
    display: block;
    transform: translateX(40%);
    border-top: 1px solid #ddd;

    li {
      height: 70px;
    }

    .link {
      color: #666;
      width: 100%;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #ddd;

      img,
      span {
        display: block;
      }

      img {
        width: calc(100vw * 200 / 1920);
        height: auto;
        margin-right: 0px;
      }
      &:hover {
        color: #000;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    &.open {
      width: 100%;
      transform: translateX(0%);

      .link {
        display: flex;
        justify-content: center;
        span {
          white-space: nowrap;
        }
        .divided {
          display: none;
        }
      }
    }
  }

  .mask {
    display: block;
    width: 0;
    top: 0;
    right: 0;
    background: #f2f2f2;
    position: fixed;
    z-index: 110;
    height: 100vh;
    opacity: 0;
    transition: all 0.3s ease-in;
    z-index: -1;
    &.open {
      width: 100vw;
      opacity: 1;
    }
  }
}
</style>
