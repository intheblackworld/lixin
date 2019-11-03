<template>
  <div class="section3">
    <!-- img="./bg.jpg" -->
    <div class="bg">
      <div class="title">媒體購買</div>
      <canvas id="canvas" ref="canvas" :width="window.width" :height="window.width * (625 / 1440)"></canvas>
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
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
  height: calc(100vw * 625 / 1440);
  background-image: radial-gradient(circle at 0 0, #1e3f4d, #121c29);
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
      }
    }
  },

  mounted() {
    var canvas = this.$refs.canvas
    var c = canvas.getContext('2d')
    var FRAME = 1000 / 120
    var borderX = window.innerWidth
    var borderY = window.innerWidth * (625 / 1440)
    var circle = 2 * Math.PI
    var quarterCircle = Math.PI / 2
    var gravity = 0
    var balls = []
    var ballSpawnQueue = []
    var gameSpeed = 1

    // --HTML Event Triggers--

    // --HTML Event Triggers end--

    function Ball(
      size,
      density,
      spawnX,
      spawnY,
      spawnXVelocity,
      spawnYVelocity,
    ) {
      // new ball constructor
      this.radius = size
      this.density = density
      this.mass = size * density
      // var fillShade = 255 - Math.round(255 * (density / 100))
      let color = c.createLinearGradient(0, 0, 0, 1500)
      color.addColorStop(0, '#ff7334')
      color.addColorStop(1, '#b55d0d')
      this.fillShade = color
      // 'rgb(' + fillShade + ',' + fillShade + ',' + fillShade + ')'
      this.xPos = spawnX
      this.yPos = spawnY
      this.xVel = spawnXVelocity
      this.yVel = spawnYVelocity
      this.lastXVel = spawnXVelocity
      this.lastYVel = spawnYVelocity
      this.lastCollided = -1
      this.onScreen = function() {
        return !(
          (this.xPos < -this.radius) |
          (this.xPos > borderX + this.radius) |
          (this.yPos > borderY + this.radius) |
          (this.yPos < -this.radius)
        )
      }
    }

    function findDistance(x1, y1, x2, y2) {
      return Math.sqrt(
        Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2),
      )
    }

    function separateBalls(b1, b2) {
      // used by collision()
      var distToSeparate = balls[b1].radius + balls[b2].radius + 0.05 // add a tiny bit more, to compensate for any slightly inaccurate float values
      var distSeparated = findDistance(
        balls[b1].xPos,
        balls[b1].yPos,
        balls[b2].xPos,
        balls[b2].yPos,
      )
      if (distToSeparate < distSeparated) {
        return
      }
      var distRemaining = (distToSeparate - distSeparated) / 2
      var flippedAngle = balls[b1].temporaryContactAngle + Math.PI // contact angle calculated during collision
      balls[b1].xPos += distRemaining * Math.cos(flippedAngle)
      balls[b1].yPos += distRemaining * Math.sin(flippedAngle)
      balls[b2].xPos +=
        distRemaining * Math.cos(balls[b1].temporaryContactAngle)
      balls[b2].yPos +=
        distRemaining * Math.sin(balls[b1].temporaryContactAngle)
    }

    function checkFlatplaning(angle, contactAngle, ball) {
      // used by collision()
      var flatPlane = false
      var acc = 0.03
      function horizontalContact() {
        if (
          (contactAngle > -acc && contactAngle < acc) |
          ((contactAngle > Math.PI - acc) | (contactAngle < -Math.PI + acc))
        ) {
          return true
        }
        return false
      }

      function verticalContact() {
        var verticalDecrement =
          contactAngle > 0
            ? contactAngle - quarterCircle
            : contactAngle + quarterCircle
        if (verticalDecrement > -acc && verticalDecrement < acc) {
          return true
        }
        return false
      }

      if (
        angle == 0 &&
        balls[ball].xVel == 0 &&
        balls[ball].lastXVel == 0 &&
        balls[ball].lastYVel != 0 &&
        verticalContact()
      ) {
        return [-quarterCircle, 'y']
      }

      if (
        (angle > -acc && angle < acc) |
          ((angle > Math.PI - acc) | (angle < -Math.PI + acc)) &&
        horizontalContact()
      ) {
        flatPlane = 'x'
        if ((angle > Math.PI - acc) | (angle < -Math.PI + acc)) {
          angle = Math.PI
        } else {
          angle = 0
        }
      }
      var angleVerticalDecrement =
        angle > 0 ? angle - quarterCircle : angle + quarterCircle
      if (
        angleVerticalDecrement > -acc &&
        angleVerticalDecrement < acc &&
        verticalContact()
      ) {
        flatPlane = 'y'
        angle = angle > 0 ? quarterCircle : -quarterCircle
      }
      return [angle, flatPlane]
    }

    function collision(b1, b2) {
      // used by perPixelUpdate()
      var contactAngle = Math.atan2(
        balls[b2].yPos - balls[b1].yPos,
        balls[b2].xPos - balls[b1].xPos,
      )
      var iTravelAngle = Math.atan2(balls[b1].yVel, balls[b1].xVel)
      var jTravelAngle = Math.atan2(balls[b2].yVel, balls[b2].xVel)
      var iFlatplane = checkFlatplaning(iTravelAngle, contactAngle, b1)
      if (iFlatplane[1] != false) {
        // not required, but allows balls to act more realisticly if we were to drop a ball directly ontop of another ball - they won't ever drift from their X positions.
        var jFlatplane = checkFlatplaning(jTravelAngle, contactAngle, b2)
        if (jFlatplane[1] == iFlatplane[1]) {
          iTravelAngle = iFlatplane[0]
          jTravelAngle = jFlatplane[0]
          if (jFlatplane[1] == 'x') {
            // both balls (of the same size) are rolling along the ground with little or no Y velocity, rebounding horizontally
            var difference = (balls[b1].yPos - balls[b2].yPos) / 2
            balls[b1].yPos -= difference
            balls[b2].yPos += difference
            balls[b1].yVel = 0
            balls[b2].yVel = 0
          } else {
            // both balls have little or no X velocity, and are rebounding vertically
            var difference = (balls[b1].xPos - balls[b2].xPos) / 2
            balls[b1].xPos -= difference
            balls[b2].xPos += difference
            balls[b1].xVel = 0
            balls[b2].xVel = 0
          }
          contactAngle = Math.atan2(
            balls[b2].yPos - balls[b1].yPos,
            balls[b2].xPos - balls[b1].xPos,
          )
        }
      } // end flatplane check
      var iVel = findDistance(0, 0, balls[b1].xVel, balls[b1].yVel)
      var jVel = findDistance(0, 0, balls[b2].xVel, balls[b2].yVel)
      var mass = balls[b1].mass + balls[b2].mass
      var iOffsetMass = balls[b1].mass - balls[b2].mass
      var iOffsetAngle = iTravelAngle - contactAngle
      var jOffsetAngle = jTravelAngle - contactAngle
      var iVelCosOff = iVel * Math.cos(iOffsetAngle)
      var jVelCosOff = jVel * Math.cos(jOffsetAngle)
      var iMagnitude1 =
        (iVelCosOff * iOffsetMass + 2 * balls[b2].mass * jVelCosOff) / mass
      var jMagnitude1 =
        (jVelCosOff * -iOffsetMass + 2 * balls[b1].mass * iVelCosOff) / mass // -iOffsetMass is equal to calculating jOffsetMass
      var cosContact = Math.cos(contactAngle)
      var sinContact = Math.sin(contactAngle)
      var iMagnitude2 = iVel * Math.sin(iOffsetAngle)
      var jMagnitude2 = jVel * Math.sin(jOffsetAngle)
      var endX = Math.cos(contactAngle + quarterCircle)
      var endY = Math.sin(contactAngle + quarterCircle)

      balls[b1].xVel = iMagnitude1 * cosContact + iMagnitude2 * endX
      balls[b1].yVel = iMagnitude1 * sinContact + iMagnitude2 * endY
      balls[b2].xVel = jMagnitude1 * cosContact + jMagnitude2 * endX
      balls[b2].yVel = jMagnitude1 * sinContact + jMagnitude2 * endY
      balls[b1].temporaryContactAngle = contactAngle // used in separateBalls(), so we don't have to calculate the angle again
      // balls[b2].temporaryContactAngle can be omitted and substituted with balls[b1].temporaryContactAngle + Math.PI
      // Formula stolen from https://en.wikipedia.org/wiki/Elastic_collision#Two-dimensional_collision_with_two_moving_objects
    }

    function perPixelUpdate() {
      // main movement function
      var highVal = 0
      for (var vI = 0; vI < balls.length; ) {
        if (!balls[vI].onScreen()) {
          balls.splice(vI, 1)
          continue
        }
        var highest = Math.max(
          Math.abs(balls[vI].xVel),
          Math.abs(balls[vI].yVel),
        )
        highVal = highVal < highest ? highest : highVal
        vI++
      }

      function highValCap(val) {
        // used for when calculating highVal and newHighVal
        val = val < 1 ? 1 : val
        if (balls.length) {
          var cap = 100000 / balls.length
          return val > cap ? cap : val
        }
        // else no balls in play: so return nothing, stating to do nothing this frame by following if statement
      }
      highVal = highValCap(highVal)
      if (!highVal) {
        return
      }

      for (var movement = 0; movement <= highVal * gameSpeed; movement++) {
        // rather than just moving the balls once per frame, they all move multiple times based on the highest absolute (made un-negative) velocity value of the fastest ball
        // this makes balls unable to pass through each other given a fast enough speed and also makes collisions much more accurate
        // highVal is capped to allow for (100,000 divided by amount of balls in play) "sub-frames" or calculations per frame, because more balls + faster balls = compounded computing time required
        // it is also capped to a minimum of 1, because setting it between 0 and 1 will cause a scaling increase on all ball's travel speed

        var remainder = highVal * gameSpeed - movement
        var moveScale = remainder < 1 ? remainder : 1
        var newHighVal = 0

        for (var ballies = 0; ballies < balls.length; ballies++) {
          var highest = Math.max(
            Math.abs(balls[ballies].xVel),
            Math.abs(balls[ballies].yVel),
          )
          newHighVal = newHighVal < highest ? highest : newHighVal
        }
        newHighVal = highValCap(newHighVal)
        if (!newHighVal) {
          return
        }
        if (newHighVal > highVal) {
          movement *= newHighVal / highVal
          highVal = newHighVal
        }
        for (var i = 0; i < balls.length; i++) {
          var oldXPos = balls[i].xPos
          var oldYPos = balls[i].yPos
          var oldYVel = balls[i].yVel
          balls[i].yVel +=
            (((gravity * moveScale) / highVal) * balls[i].density) / 10
          balls[i].xPos += (balls[i].xVel * moveScale) / highVal
          balls[i].yPos += (balls[i].yVel * moveScale) / highVal
          if (balls[i].xPos <= balls[i].radius) {
            balls[i].xVel = -balls[i].xVel
            balls[i].xPos = balls[i].radius
          }
          if (balls[i].xPos >= borderX - balls[i].radius) {
            balls[i].xVel = -balls[i].xVel
            balls[i].xPos = borderX - balls[i].radius
          }
          if (balls[i].yPos <= balls[i].radius) {
            balls[i].yVel = -balls[i].yVel
            balls[i].yPos = balls[i].radius
            oldYVel = -oldYVel
          }
          var bottomBoundary = borderY - balls[i].radius
          if (balls[i].yPos >= bottomBoundary) {
            balls[i].yPos = bottomBoundary
            balls[i].yVel = -balls[i].yVel
            oldYVel = -oldYVel
          }
          var collided = false
          for (var j = 0; j < balls.length; j++) {
            if (i === j) {
              continue
            }
            if (
              balls[i].radius + balls[j].radius >=
                findDistance(
                  balls[i].xPos,
                  balls[i].yPos,
                  balls[j].xPos,
                  balls[j].yPos,
                ) &&
              balls[i].lastCollided != j &&
              balls[j].lastCollided != i
            ) {
              balls[i].xPos = oldXPos
              balls[i].yPos = oldYPos
              balls[i].yVel = oldYVel
              collision(i, j)
              balls[i].lastCollided = j
              balls[j].lastCollided = i
              collided = true
              separateBalls(i, j)
            }
          }
          if (!collided) {
            balls[i].lastCollided = -1
          }
          balls[i].lastXVel = balls[i].xVel
          balls[i].lastYVel = balls[i].yVel
        }
        movement++ // bug: if this is removed (relevance: there is already a movement++ up in the for statement) then the balls will no longer roll along the ground when y velocity is diminished
        // but instead they will bounce irregularly along the ground. Point is it works "better" with even increments and I have no idea why.
      }
    }

    function renderGame() {
      // x0, y0, r0, x1, y1, r1
      let radius = c.createRadialGradient(840, 312, 0, 840, 312, 500)
      radius.addColorStop(0, '#1e3f4d')
      radius.addColorStop(1, '#121c29')
      c.fillStyle = radius
      c.fillRect(0, 0, borderX, borderY)
      for (var i = 0; i < balls.length; i++) {
        c.beginPath()
        c.arc(balls[i].xPos, balls[i].yPos, balls[i].radius, 0, circle)
        c.fillStyle = balls[i].fillShade
        c.fill()
        c.stroke()
      }
      for (var iV = 0; iV < ballSpawnQueue.length;) {
        var touching = false
        for (var iVV = 0; iVV < balls.length; iVV++) {
          if (
            balls[iVV].radius + ballSpawnQueue[iV].radius >=
            findDistance(
              ballSpawnQueue[iV].xPos,
              ballSpawnQueue[iV].yPos,
              balls[iVV].xPos,
              balls[iVV].yPos,
            )
          ) {
            touching = true
          }
        }
        if (!touching) {
          balls.push(ballSpawnQueue.splice(iV, 1)[0])
        } else {
          c.beginPath()
          c.arc(
            ballSpawnQueue[iV].xPos,
            ballSpawnQueue[iV].yPos,
            ballSpawnQueue[iV].radius,
            0,
            circle,
          )
          c.fillStyle = ballSpawnQueue[iV].fillShade
          c.fill()
          c.stroke()
          c.fillText('line', ballSpawnQueue[iV].xPos, ballSpawnQueue[iV].yPos)
          iV++
        }
      }
      // if (mouse.target == 'gameScreen') {
      //   c.beginPath()
      //   c.arc(mouse.dragStartX, mouse.dragStartY, sizeSlider, 0, circle)
      //   var f = 255 - Math.round(255 * (densitySlider / 100))
      //   var newVel = findDistance(
      //     mouse.dragStartX / 30,
      //     mouse.dragStartY / 30,
      //     mouse.x / 30,
      //     mouse.y / 30,
      //   ).toFixed(3)
      //   c.fillStyle = 'rgb(' + f + ',' + f + ',' + f + ')'
      //   c.fill()
      //   c.stroke()
      //   c.moveTo(mouse.dragStartX, mouse.dragStartY)
      //   c.lineTo(mouse.x, mouse.y)
      //   c.stroke()
      //   c.fillStyle = 'rgb(200,50,50)'
      //   c.fillText(
      //     'Velocity: ' + (newVel * 60).toFixed(2) + ' px/s',
      //     mouse.x - 88,
      //     mouse.y - 5,
      //   )
      // }
      // c.fillStyle = 'rgb(0,0,0)'
      c.font = '20px Arial'
      // if (ballSpawnQueue.length) {
      //   c.fillText('Balls in spawn queue: ' + ballSpawnQueue.length, 5, 20)
      // }
    }

    function randBetween(val1, val2) {
      let v = Math.round(Math.random() * (val2 - val1)) + val1
      if (v === 0) {
        return 1
      } else {
        return v
      }
    }

    for (var v = 0; v < 10; v++) {
      ballSpawnQueue.push(
        new Ball(
          randBetween(40, 45), // radius
          randBetween(50, 85), // density
          randBetween(40, 1220), // xPosition
          randBetween(40, 500), // yPosition
          randBetween(-1, 1), // xVelocity
          randBetween(-1, 1), // yVelocity
        ),
      )
    }

    setInterval(function() {
      // controls()
      perPixelUpdate()
      renderGame()
      // renderMenu()
    }, FRAME)
  },

  methods: {},
}
</script>
