<template>
  <div :class="`navigation ${isFix ? 'fix' : ''}`">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <!-- div :class="`nav ${isOpen ? 'open' : ''}`">
          <icon class="logo" :data="logo" />
        </div -->
        <div :class="`nav ${isOpen ? 'open' : ''}`">
          <div v-scroll-to="{ element: `#section1`, offset: offset }">
            <icon v-if="theme === 'white'" class="logoC" :data="logoC" />
            <icon v-else class="logo" :data="logo" />
          </div>
          <!-- <img class="logo" src="@/assets/img/nav-logo.png" alt /> -->
          <div class="menu" @click="toggleSidebar">
            <!--<font-awesome-icon icon="bars" />-->
            <span class="menu_icon"></span>
          </div>
          <div :class="`mask ${isOpen ? 'open' : ''}`" @click="toggleSidebar" />
          <ul :class="`navlist ${isOpen ? 'open' : ''}`">
            <li
              :key="`item-${index}`"
              v-scroll-to="{ element: `#${item.section}`, offset: offset }"
              v-for="(item, index) in list"
              class="flex-ac"
              @click="handleClick(item)"
            >
              <span :class="`link ${theme === 'white' ? 'color' : ''}`">
                <img v-if="!isMobile && item.imgSrc" :src="item.imgSrc" alt />
                <img v-if="isMobile  && item.reverseImgSrc" :src="item.reverseImgSrc" alt />
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
              class="flex-ac"
              @click="
                item.outLink
                  ? (window.open(item.outLink))
                  : $router.push(item.link)
              "
            >
              <span class="link">
                <img v-if="!isMobile && item.imgSrc" :src="item.imgSrc" alt />
                <img v-if="isMobile  && item.reverseImgSrc" :src="item.reverseImgSrc" alt />
                <span>
                  <div class="title">{{ item.name }}</div>
                  <span class="subTitle">{{ item.subTitle }}</span>
                </span>
              </span>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from '@/utils'
import navList from '@/info/navList'
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
      list: navList,
      logo,
      logoC,
      isFix: false,
      window,
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
      if (window.scrollY > window.innerHeight - 100) {
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
  fill: #000;
  .st0 {
    fill: #9d9997;
  }
  .st1 {
    // opacity: 0.64;
  }
  .st2 {
    clip-path: url(#SVGID_3_);
  }
  .st3 {
    clip-path: url(#SVGID_4_);
    fill: url(#SVGID_5_);
  }
  .st4 {
    clip-path: url(#SVGID_6_);
  }
  .st5 {
    clip-path: url(#SVGID_7_);
    fill: url(#SVGID_8_);
  }
  .st6 {
    clip-path: url(#SVGID_9_);
  }
  .st7 {
    clip-path: url(#SVGID_10_);
    fill: url(#SVGID_11_);
  }
  .st8 {
    fill: #ec6d34;
  }
  .st9 {
    clip-path: url(#SVGID_12_);
  }
  .st10 {
    clip-path: url(#SVGID_13_);
    fill: url(#SVGID_14_);
  }
}
.logo {
    fill: #fff;
  .st0 {
    fill: #ffffff77;
    transition: all 0.3s;
  }
  .st1 {
    fill: #fff;
    transition: all 0.3s;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .open {
    .logo {
      fill: #999;
      .st0 {
        fill: #999;
      }
      .st1 {
        fill: #ec6d34;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';

.logo {
  width: $logo_pc_width;
  height: auto;
  position: absolute;
  left: 0;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s;
  cursor: pointer;
}

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
  transition: all 0.3s, top 0.5s;
  // box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);

  &.fix {
    border-bottom: none;
    background-color: #ed6d34;
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
  }

  .link {
    font-size: 16px !important;
    color: #fff;
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
    line-height: 1.6;
    // border-right: 1px solid $nav_link_hover_bg;

    &.color {
      color: #585858;
    }

    &:hover {
      color: #fc0;
      img {
        // animation: r5 0.5s infinite alternate;
      }
    }

    .title {
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
    height: $nav_phone_height;
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
    height: $nav_phone_height;
  }

  .menu {
    display: block;
    position: absolute;
    right: 35px;
    width: 25px;

    svg {
      width: 25px;
      height: auto;
      color: $nav_btn_color;
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
    background-color: #fff;
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
  .fix {
    .navlist {
      top: 60px;
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
