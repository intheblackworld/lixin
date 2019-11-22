<template>
  <div :class="`navigation ${isFix ? 'fix' : ''}`">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div class="nav">
          <icon class="logoC" :data="logoC" />
          <!-- <img class="logo" src="@/assets/img/nav-logo.png" alt /> -->
          <div class="menu" @click="toggleSidebar">
            <font-awesome-icon icon="bars" />
          </div>
          <div :class="`mask ${isOpen ? 'open' : ''}`" @click="toggleSidebar" />
          <ul :class="`navlist ${isOpen ? 'open': ''}`">
            <li
              v-show="item.link"
              :key="`link-${item.name}`"
              v-for="item in list"
              class="flex-ac link-item"
              @click="$router.push(item.link)"
            >
              <span class="link">
                <span>
                  <div class="title">{{item.name}}</div>
                  <span class="subTitle">{{item.subTitle}}</span>
                </span>
              </span>
            </li>
            <li
              v-show="item.section"
              :key="item.name"
              v-scroll-to="{ element: `#${item.section}`, offset: offset }"
              v-for="item in list"
              class="flex-ac"
              @click="toggleSidebar"
            >
              <span :class="`link color`">
                <img v-if="item.imgSrc" :src="item.imgSrc" alt />
                <span>
                  <div class="title">{{item.name}}</div>
                  <span class="subTitle">{{item.subTitle}}</span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from '@/utils'
import logo from '@/assets/svg/logo-w.svg'
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
          name: '作品集',
          imgSrc: '',
          subTitle: '',
          section: '1',
          svgSrc: '',
        },
        {
          name: '聯絡我們',
          imgSrc: '',
          subTitle: '',
          section: '2',
          svgSrc: '',
        },
        {
          name: '加入立炘',
          imgSrc: '',
          subTitle: '',
          link: ' https://www.104.com.tw/company/1a2x6bkhg2',
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
      console.log('window height', window.innerHeight)
      if (window.scrollY > window.innerHeight + 50) {
        this.isFix = true
      } else {
        this.isFix = false
      }
    },
    toggleSidebar() {
      this.isOpen = !this.isOpen
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
  fill: #fff;
  .st0 {
    fill: #9d9997;
  }
  .st1 {
    opacity: 0.64;
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
  fill: #fff;
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
      margin-right: 10px;
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
    right: 15px;
    width: 18px;

    svg {
      color: #333;
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

    li {
      height: 50px;
      margin-bottom: 5px;
    }

    .link {
      height: 50px;
      width: 100%;
      font-size: 17px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;

      img,
      span {
        display: block;
      }
      span {
        line-height: 16px;
      }

      img {
        width: calc(100vw * 200 / 1920);
        height: auto;
        margin-right: 10px;
      }
    }

    &.open {
      width: 100%;
      transform: translateX(0%);

      .link {
        display: flex;
        justify-content: center;
        color: #fff;
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
    width: 100vw;
    top: 60px;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 110;
    height: calc(100vh - #{60px});
    opacity: 0;
    transition: all 0.3s ease-in;
    &.open {
      display: block;
      width: 100vw;
      opacity: 1;
    }
  }
}
</style>
