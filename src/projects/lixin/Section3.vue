<template>
  <div class="section3 mediaPartner">
    <!-- img="./bg.jpg" -->
    <div class="bg">
      <div class="title">媒體購買</div>
      <canvas id="canvas" ref="canvas" :width="window.width" :height="window.width * (625 / 1440)"></canvas>
      <!-- <vue-particles
        color="#999"
        :particleOpacity="0.7"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="2"
        linesColor="#999"
        :linesWidth="0"
        :lineLinked="false"
        :lineOpacity="0"
        :linesDistance="0"
        :moveSpeed="4"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  // background: url('./s1/bg.jpg');
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 625px;
  background-image: radial-gradient(circle at 0 0, #1e3f4d, #121c29);
  z-index: 2;
}

.title {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  font-size: 45.5px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 4.55px;
  text-align: center;
  color: #ffffff;
  z-index: 10;
}

#canvas {
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
}
#particles-js {
  position: relative;
  z-index: 1;
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section3',

  components: {},

  data() {
    return {
      isMobile,
      window: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    }
  },

  mounted() {
    var canvas = this.$refs.canvas
    let c = canvas.getContext('2d')
    let quality =
      c.backingStorePixelRatio ||
      c.webkitBackingStorePixelRatio ||
      c.mozBackingStorePixelRatio ||
      c.msBackingStorePixelRatio ||
      c.oBackingStorePixelRatio ||
      c.backingStorePixelRatio ||
      1
    let ratio = (window.devicePixelRatio || 1) / quality
    console.log(ratio)
    canvas.width = window.innerWidth * ratio
    canvas.height = (isMobile.phone ? window.innerHeight : 625) * ratio
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = isMobile.phone ? window.innerHeight : '625px'
    this.$nextTick(function() {
      function Circle(x, y, dx, dy, radius, isImg, img_src) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius
        this.minRadius = radius
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
        this.isImg = isImg || !1
        this.img_src = img_src || null
        this.draw = function() {
          if (this.isImg) {
            c.drawImage(this.img_src, this.x, this.y, this.radius, this.radius)
          } else {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1)
            c.fillStyle = this.color
            c.fill()
          }
        }
        this.update = function() {
          let x1 = this.isImg
            ? this.x + radius > canvas.width / ratio
            : this.x + this.radius > canvas.width / ratio
          let x2 = this.isImg ? this.x <= 0 : this.x - this.radius <= 0
          if (x1 || x2) this.dx = -this.dx
          let y1 = this.isImg
            ? this.y + radius > canvas.height / ratio
            : this.y + this.radius > canvas.height / ratio
          let y2 = this.isImg ? this.y <= 0 : this.y - this.radius <= 0
          if (y1 || y2) this.dy = -this.dy
          this.y += this.dy
          this.x += this.dx
          var max = this.isImg ? imgMaxRadius : maxRadius
          if (
            mouse.x - this.x - this.radius / 2 < 100 &&
            mouse.x - this.x - this.radius / 2 > -100 &&
            mouse.y - this.y - this.radius / 2 < 100 &&
            mouse.y - this.y - this.radius / 2 > -100
          ) {
            if (this.radius < max) this.radius += 1
          } else if (this.radius > this.minRadius) this.radius -= 1
          this.draw()
        }
      }
      c.setTransform(ratio, 0, 0, ratio, 0, 0)
      let mouse = {
        x: void 0,
        y: void 0,
      }
      let maxRadius = 3
      let imgMaxRadius = 150
      let colorArray = [
        'rgba(99, 84, 75, 0.61)',
        'rgba(196, 126, 33, 0.6)',
        'rgba(194, 138, 48, 0.5)',
        'rgba(79, 69, 63, 0.65)',
      ]
      window.addEventListener('mousemove', function(event) {
        mouse.x = event.pageX
        mouse.y =
          event.pageY - document.querySelector('.mediaPartner').offsetTop
      })
      window.addEventListener('resize', function() {
        canvas.width = window.innerWidth * ratio
        canvas.height = (isMobile.phone ? window.innerHeight : 625) * ratio
        canvas.style.width = window.innerWidth + 'px'
        canvas.style.height = isMobile.phone ? window.innerHeight : '625px'
        c.setTransform(ratio, 0, 0, ratio, 0, 0)
      })
      for (var circleArray = [], i = 0; i < 300; i++) {
        let radius = 4 * Math.random() + 1
        let x = Math.random() * (canvas.width / ratio - radius)
        let dx = Math.random() - 0.3
        let y = Math.random() * (canvas.height / ratio - radius)
        let dy = Math.random() - 0.3
        circleArray.push(new Circle(x, y, dx, dy, radius))
      }

      [
        // '01',
        'apple',
        'cn',
        'ebc',
        'eco',
        'et',
        'fb',
        'free',
        'gg',
        'gon',
        'ig',
        'line',
        'mirror',
        'now',
        'one',
        'ptt',
        'setn',
        'son',
        'tvbs',
        'udn',
        'us',
        'yahoo',
        'yt',
      ].forEach(function(obj) {
        var logoImg = new Image()
        logoImg.src = require('./s3/media-' + obj + '.png')
        let x = Math.random() * (canvas.width / ratio - 60)
        let dx = Math.random() - 0.5
        let y = Math.random() * (canvas.height / ratio - 60)
        let dy = Math.random() - 0.5
        circleArray.push(new Circle(x, y, dx, dy, 60, !0, logoImg))
      })

      function animate() {
        // eslint-disable-next-line no-unused-expressions
        requestAnimationFrame(animate)
        c.clearRect(0, 0, canvas.width, canvas.height)
        for (var i = 0; i < circleArray.length; i++) circleArray[i].update()
      }

      animate()
    })
  },

  methods: {},
}
</script>
