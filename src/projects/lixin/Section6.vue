<template>
  <div :class="`section6 ${isShowDetail ? 'showDetail' : ''}`">
    <div class="dialog" v-show="isShowDialog">
      <div class="close" @click="closeDialog(slideIndex)">
        <img src="./s5/close.png" alt />
      </div>
      <div class="dialog-content">
        <video playsinline loop controls :muted="true" :ref="`dialogVideo${slideIndex}`">
          <source :src="slideList[slideIndex].video" />
        </video>
      </div>
    </div>
    <div class="bg fullscreen" v-if="!isMobile">
      <div class="left-bg">
        <!-- <img
          :src="slideList[slideIndex === 0 ? slideList.length - 1 : slideIndex - 1].img"
          alt
          class="img-bg"
        />-->
        <div
          v-for="(slide, index) in slideList"
          :key="`img-${index}`"
          :class="`item-img ${slideIndex === index ? 'active' : ''}`"
        >
          <img v-if="slide.img" :src="slide.img" alt />
          <video v-else-if="slide.video" :src="slide.video"></video>
          <div v-if="slide.video" class="play-group">
            <icon class="play" :data="play" @click="playVideo(index)" />
          </div>
          <iframe v-else-if="slide.iframe" :src="slide.iframe" frameborder="0"></iframe>
        </div>
      </div>
      <div :class="`right ${isShowDetail ? 'showDetail' : ''}`">
        <div class="content">
          <div class="text">
            <div :style="`transform: translateY(${-100 * slideIndex}%)`">
              <div
                :class="`text-item ${slideIndex === index ? 'active' : ''}`"
                v-for="(slide, index) in slideList"
                :key="`slide-${index}`"
              >
                <div class="title">{{slide.title}}</div>
                <div class="subtitle">{{slide.subtitle}}</div>
                <div class="desc">{{slide.desc}}</div>
              </div>
            </div>
          </div>
          <div
            :class="`button ${isShowDetail ? 'hide' : ''}`"
            @click="checkDetail(slideIndex)"
          >DETAIL</div>
        </div>
        <div :class="`detail ${isShowDetail ? 'open' : ''}`">
          <div class="close" @click="closeDetail">
            <img src="./s5/close.png" alt />
          </div>
          <!-- 區塊一 -->
          <div :class="`detail-content ${detailIndex === 0 ? 'active' : ''}`">
            <img src="./s6/detail1-item-1.jpg" alt class="detail-img" />
            <div class="detail-title">任務</div>
            <div class="detail-desc">趕搭選舉熱潮，建案化身為候選人「林板新」登場，在網路上創造話題，引起民眾好奇心，創造大量點擊率及良好曝光成效。</div>
            <div class="detail-title">策略</div>
            <div class="detail-subtitle">搭上選舉順風車，包裝「良好新候選人」創造議題。</div>
            <div
              class="detail-desc"
            >其實這位神祕候選人不是人名，而是位在新北市樹林、板橋、新莊交會的地區，簡稱「林板新特區」，充滿創意的行銷議題手法成功吸引大眾關注</div>
            <img src="./s6/detail1-item-2.jpg" alt class="detail-img" />
            <div
              class="detail-desc"
            >將建案「新板巨星」包裝成「林板新」，搭配政見「落實居住正義」，成功在媒體及民眾都聚焦於政治時，引起民眾好奇心，創造大量點擊率及良好曝光成效，搭配精準的廣告投放，促成亮眼 的銷售成績。</div>
            <img src="./s6/detail1-item-3.png" alt class="detail-img" />
          </div>
          <!-- 區塊二 -->
          <div :class="`detail-content ${detailIndex === 1 ? 'active' : ''}`">
            <img src="./s6/detail2-item-1.jpg" alt class="detail-img" />
            <div class="detail-title">任務</div>
            <div class="detail-desc">吸引網友目光並將線上流量導入線下活動。透過網紅的參與，結合活動與網友們互動，找出實際有效名單，成功促成轉換。</div>
            <div class="detail-title">策略</div>
            <div class="detail-subtitle">與網紅合作並舉辦線上抽獎，替活動創造高度關注。</div>
            <img src="./s6/detail2-item-2.jpg" alt class="detail-img" />
            <div
              class="detail-desc"
            >與《木曜4超玩》合作，透過網紅的參與，獲得更多的網路聲量。不僅能為專案增添正面形象，也增加了民眾信任感。將線上流量成功導入線下，找網紅結合活動與網友們互動，找出實際有效名單，成功促成轉換。</div>
            <img src="./s6/detail2-item-3.jpg" alt class="detail-img" />
            <div
              class="detail-desc"
            >一個熱鬧的活動，當然不能少了活動網站的架設，利用鮮艷明亮的色彩，搭配當紅的流行用語，不僅增添活潑感，也營造了輕鬆喜悅的氛圍，讓參與活動更加速擴散及分享！</div>
          </div>
          <!-- 區塊三 -->
          <div :class="`detail-content ${detailIndex === 2 ? 'active' : ''}`">
            <img src="./s6/detail3-item-1.jpg" alt class="detail-img" />
            <div class="detail-title">任務</div>
            <div class="detail-desc">
              量身打造網站，吸睛也吸金。
              掌握所有數據，以便優化行銷策略，明確
              資訊能夠讓你找到對的客群，更增加他們
              的賞屋意願。
            </div>
            <div class="detail-title">策略</div>
            <div class="detail-subtitle">藉由動態影片塑造品牌形象，呈現產品風格，打造吸睛的網站。</div>
            <div
              class="detail-desc"
            >與《木曜4超玩》合作，透過網紅的參與，獲得更多的網路聲量。不僅能為專案增添正面形象，也增加了民眾信任感。將線上流量成功導入線下，找網紅結合活動與網友們互動，找出實際有效名單，成功促成轉換。</div>
            <img src="./s6/detail3-item-2.jpg" alt class="detail-img" />
            <div
              class="detail-desc"
            >一個熱鬧的活動，當然不能少了活動網站的架設，利用鮮艷明亮的色彩，搭配當紅的流行用語，不僅增添活潑感，也營造了輕鬆喜悅的氛圍，讓參與活動更加速擴散及分享！</div>
          </div>
          <!-- 區塊四 -->
          <div :class="`detail-content ${detailIndex === 3 ? 'active' : ''}`">
            <img src="./s6/detail4-item-1.jpg" alt class="detail-img" />
            <div class="detail-title">任務</div>
            <div class="detail-desc">
              用影音達到深度溝通，打造全面式的行銷體驗。
              即使是廣告影片，也要讓民眾看得舒服且有趣，發揮影音的高互動特性。
            </div>
            <div class="detail-title">策略</div>
            <!-- <div class="detail-subtitle">與網紅合作並舉辦線上抽獎，替活動創造高度關注。</div> -->
            <div class="detail-desc">
              利用趣味、吸睛的主題，將產品資訊正確傳遞給消費者
              避開以往傳統的廣告影片形式，提升觀看度與知名度，我們將影片內容主軸與案名「金城舞」作結合，三個閨蜜在大聊每位型男的優點，同時也暗喻了建案產品的優勢。
            </div>
            <img src="./s6/detail4-item-2.jpg" alt class="detail-img" />
            <img src="./s6/detail2-item-3.jpg" alt class="detail-img" />
            <div
              class="detail-desc"
            >影片決勝的關鍵在前五秒和掌握四項要點：創意的主題、吸睛的開場、準確的長度、適合的背景音樂，即使是廣告影片，也要讓民眾看得舒服且有趣，發揮影音的高互動特性，成功與民眾進行深度溝通。</div>
          </div>
          <!-- 區塊五 -->
          <div :class="`detail-content ${detailIndex === 4 ? 'active' : ''}`">
            <img src="./s6/detail5-item-1.png" alt class="detail-img" />
            <div class="detail-title">任務</div>
            <div class="detail-desc">有效發揮數位行銷，實際提升轉換率。我們透過策略擬定、素材呈現、數據分析，找到精準受眾，創造亮眼的銷售成績。</div>
            <div class="detail-title">策略</div>
            <div class="detail-subtitle">網路素材交叉測試、精準廣告投放、追蹤數據並即時優化、調整行銷方向。</div>
            <div
              class="detail-desc"
            >瞭解建案資訊，研討擬定一份專屬此案的數位行銷策略，在不同管道（Yahoo、Google、Facebook及數位媒體）的表現訴求、廣告預算比重分配，找出最適合該案的策略方向。</div>
            <img src="./s6/detail5-item-2.png" alt class="detail-img" />
            <img src="./s6/detail5-item-3.png" alt class="detail-img" />
            <div
              class="detail-desc"
            >每週即時提供數據分析，觀察素材的表現，進而不斷優化、調整策略方向，不斷測試和分析，找到精準受眾，我們透過策略擬定、素材呈現、數據分析，創造亮眼的銷售成績。</div>
            <div class="detail-title">成果</div>
            <div class="detail-subtitle">4個月全棟100%完銷</div>
            <img src="./s6/detail5-item-4.png" alt class="detail-img" />
          </div>
        </div>
      </div>
      <div :class="`slide-next ${isShowDetail ? 'hide' : ''}`" @click="slideNext">
        <img src="./s6/next_w.png" alt />
      </div>
      <div :class="`slide-prev ${isShowDetail ? 'hide' : ''}`" @click="slidePrev">
        <img src="./s6/next_w.png" alt />
      </div>
    </div>
    <div class="bg fullscreen" v-if="isMobile">
      <div class="left-bg">
        <!-- <img
          :src="slideList[slideIndex === 0 ? slideList.length - 1 : slideIndex - 1].img"
          alt
          class="img-bg"
        />-->
        <div
          v-for="(slide, index) in slideList"
          :key="`img-${index}`"
          :class="`item-img ${slideIndex === index ? 'active' : ''}`"
        >
          <img v-if="slide.img" :src="slide.img" alt />
          <video v-else-if="slide.video" :src="slide.video"></video>
          <div v-if="slide.video" class="play-group">
            <icon class="play" :data="play" @click="playVideo(index)" />
          </div>
          <iframe v-else-if="slide.iframe" :src="slide.iframe" frameborder="0"></iframe>
        </div>
      </div>
      <div :class="`right`">
        <div class="content">
          <div class="text">
            <div>
              <div class="text-item">
                <div class="title">{{slideList[slideIndex].title}}</div>
                <div class="subtitle">{{slideList[slideIndex].subtitle}}</div>
                <div class="desc">{{slideList[slideIndex].desc}}</div>
              </div>
            </div>
          </div>
          <div :class="`button`" @click="checkDetail(slideIndex)">DETAIL</div>
        </div>
        <div :class="`detail ${isShowDetail ? 'open' : ''}`">
          <div class="close" @click="closeDetail">
            <img src="./s5/close.png" alt />
          </div>
          <!-- 區塊一 -->
          <div :class="`detail-content ${detailIndex === 0 ? 'active' : ''}`">
            <img src="./s6/detail1-item-1.jpg" alt class="detail-img" />
            <div class="detail-title">任務</div>
            <div class="detail-desc">趕搭選舉熱潮，建案化身為候選人「林板新」登場，在網路上創造話題，引起民眾好奇心，創造大量點擊率及良好曝光成效。</div>
            <div class="detail-title">策略</div>
            <div class="detail-subtitle">搭上選舉順風車，包裝「良好新候選人」創造議題。</div>
            <div
              class="detail-desc"
            >其實這位神祕候選人不是人名，而是位在新北市樹林、板橋、新莊交會的地區，簡稱「林板新特區」，充滿創意的行銷議題手法成功吸引大眾關注</div>
            <img src="./s6/detail1-item-2.jpg" alt class="detail-img" />
            <div
              class="detail-desc"
            >將建案「新板巨星」包裝成「林板新」，搭配政見「落實居住正義」，成功在媒體及民眾都聚焦於政治時，引起民眾好奇心，創造大量點擊率及良好曝光成效，搭配精準的廣告投放，促成亮眼 的銷售成績。</div>
            <img src="./s6/detail1-item-3.png" alt class="detail-img" />
          </div>
          <!-- 區塊二 -->
          <div :class="`detail-content ${detailIndex === 1 ? 'active' : ''}`">
            <img src="./s6/detail2-item-1.jpg" alt class="detail-img" />
            <div class="detail-title">任務</div>
            <div class="detail-desc">吸引網友目光並將線上流量導入線下活動。透過網紅的參與，結合活動與網友們互動，找出實際有效名單，成功促成轉換。</div>
            <div class="detail-title">策略</div>
            <div class="detail-subtitle">與網紅合作並舉辦線上抽獎，替活動創造高度關注。</div>
            <img src="./s6/detail2-item-2.jpg" alt class="detail-img" />
            <div
              class="detail-desc"
            >與《木曜4超玩》合作，透過網紅的參與，獲得更多的網路聲量。不僅能為專案增添正面形象，也增加了民眾信任感。將線上流量成功導入線下，找網紅結合活動與網友們互動，找出實際有效名單，成功促成轉換。</div>
            <img src="./s6/detail2-item-3.jpg" alt class="detail-img" />
            <div
              class="detail-desc"
            >一個熱鬧的活動，當然不能少了活動網站的架設，利用鮮艷明亮的色彩，搭配當紅的流行用語，不僅增添活潑感，也營造了輕鬆喜悅的氛圍，讓參與活動更加速擴散及分享！</div>
          </div>
          <!-- 區塊三 -->
          <div :class="`detail-content ${detailIndex === 2 ? 'active' : ''}`">
            <img src="./s6/detail3-item-1.jpg" alt class="detail-img" />
            <div class="detail-title">任務</div>
            <div class="detail-desc">
              量身打造網站，吸睛也吸金。
              掌握所有數據，以便優化行銷策略，明確
              資訊能夠讓你找到對的客群，更增加他們
              的賞屋意願。
            </div>
            <div class="detail-title">策略</div>
            <div class="detail-subtitle">藉由動態影片塑造品牌形象，呈現產品風格，打造吸睛的網站。</div>
            <div
              class="detail-desc"
            >與《木曜4超玩》合作，透過網紅的參與，獲得更多的網路聲量。不僅能為專案增添正面形象，也增加了民眾信任感。將線上流量成功導入線下，找網紅結合活動與網友們互動，找出實際有效名單，成功促成轉換。</div>
            <img src="./s6/detail3-item-2.jpg" alt class="detail-img" />
            <div
              class="detail-desc"
            >一個熱鬧的活動，當然不能少了活動網站的架設，利用鮮艷明亮的色彩，搭配當紅的流行用語，不僅增添活潑感，也營造了輕鬆喜悅的氛圍，讓參與活動更加速擴散及分享！</div>
          </div>
          <!-- 區塊四 -->
          <div :class="`detail-content ${detailIndex === 3 ? 'active' : ''}`">
            <img src="./s6/detail4-item-1.jpg" alt class="detail-img" />
            <div class="detail-title">任務</div>
            <div class="detail-desc">
              用影音達到深度溝通，打造全面式的行銷體驗。
              即使是廣告影片，也要讓民眾看得舒服且有趣，發揮影音的高互動特性。
            </div>
            <div class="detail-title">策略</div>
            <!-- <div class="detail-subtitle">與網紅合作並舉辦線上抽獎，替活動創造高度關注。</div> -->
            <div class="detail-desc">
              利用趣味、吸睛的主題，將產品資訊正確傳遞給消費者
              避開以往傳統的廣告影片形式，提升觀看度與知名度，我們將影片內容主軸與案名「金城舞」作結合，三個閨蜜在大聊每位型男的優點，同時也暗喻了建案產品的優勢。
            </div>
            <img src="./s6/detail4-item-2.jpg" alt class="detail-img" />
            <img src="./s6/detail2-item-3.jpg" alt class="detail-img" />
            <div
              class="detail-desc"
            >影片決勝的關鍵在前五秒和掌握四項要點：創意的主題、吸睛的開場、準確的長度、適合的背景音樂，即使是廣告影片，也要讓民眾看得舒服且有趣，發揮影音的高互動特性，成功與民眾進行深度溝通。</div>
          </div>
          <!-- 區塊五 -->
          <div :class="`detail-content ${detailIndex === 4 ? 'active' : ''}`">
            <img src="./s6/detail5-item-1.png" alt class="detail-img" />
            <div class="detail-title">任務</div>
            <div class="detail-desc">有效發揮數位行銷，實際提升轉換率。我們透過策略擬定、素材呈現、數據分析，找到精準受眾，創造亮眼的銷售成績。</div>
            <div class="detail-title">策略</div>
            <div class="detail-subtitle">網路素材交叉測試、精準廣告投放、追蹤數據並即時優化、調整行銷方向。</div>
            <div
              class="detail-desc"
            >瞭解建案資訊，研討擬定一份專屬此案的數位行銷策略，在不同管道（Yahoo、Google、Facebook及數位媒體）的表現訴求、廣告預算比重分配，找出最適合該案的策略方向。</div>
            <img src="./s6/detail5-item-2.png" alt class="detail-img" />
            <img src="./s6/detail5-item-3.png" alt class="detail-img" />
            <div
              class="detail-desc"
            >每週即時提供數據分析，觀察素材的表現，進而不斷優化、調整策略方向，不斷測試和分析，找到精準受眾，我們透過策略擬定、素材呈現、數據分析，創造亮眼的銷售成績。</div>
            <div class="detail-title">成果</div>
            <div class="detail-subtitle">4個月全棟100%完銷</div>
            <img src="./s6/detail5-item-4.png" alt class="detail-img" />
          </div>
        </div>
      </div>
      <div :class="`slide-next ${isShowDetail ? 'hide' : ''}`" @click="slideNext">
        <img src="./s6/next_w.png" alt />
      </div>
      <div :class="`slide-prev ${isShowDetail ? 'hide' : ''}`" @click="slidePrev">
        <img src="./s6/next_w.png" alt />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.left-bg .play-group {
  cursor: pointer;
  .st0 {
    fill: #fff;
    transition: all 0.3s;
  }

  .st1 {
    fill: #ed6d34;
  }

  .st2 {
    display: none;
  }

  .st3 {
    display: inline;
  }

  &:hover {
    .st0 {
      fill: #000;
    }
  }
}
</style>
<style lang="scss" scoped>
.section6 {
  &.showDetail {
    position: relative;
    z-index: 100;
  }
}
.bg {
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 2;
  background: #fff;
}

.left-bg,
.content {
  width: 50%;
  height: 100%;
}

.left-bg {
  background:#444;
  /* background: url('./s6/work_bg.jpg'); */
  background-size: 100% 100%;
  position: relative;
  > * {
    transform: scale(1);
    transition: transform 1.5s;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.img-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}

.item-img {
  // transform: translateY(0%);
  width: 100%;
  height: 100%;
  transition: all 1.5s ease-in-out;
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  > img,
  > video {
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: cover;
  }

  > iframe {
    display: block;
    width: 300px;
    height: 600px;
  }

  .play-group {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    width: 90px;
    height: 90px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &:nth-child(1) {
    z-index: 1;
  }

  &:nth-child(2) {
    z-index: 2;
  }

  &:nth-child(3) {
    z-index: 3;
  }

  &:nth-child(4) {
    z-index: 4;
  }

  &:nth-child(5) {
    z-index: 5;
  }

  &.active {
    animation: up 1.2s ease-in-out 0s forwards;
    z-index: 9;
  }
}

@keyframes up {
  0% {
    top: 100%;
  }

  100% {
    top: 0;
  }
}
.content {
  position: relative;
  transition: all 1s;
  transition-delay: 1s;
}

.right {
  width: 100vw;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 50vw;
  z-index: 11;
  background: #fff;
  transition: all 1s ease-out;

  .content {
    transition: all 0.5s ease-out;
  }
  &.showDetail {
    left: 0;
    position: fixed;
    z-index: 10;

    .content {
      width: 35%;
    }

    .text {
      height: 40%;
    }
  }
}

.detail {
  width: 50%;
  line-height: 1.6;
  font-size: 16px;
  letter-spacing: 1.2px;
  overflow-y: scroll;
  padding-right: 65px;
  padding-top: 166px;
  padding-left: 30px;
  padding-bottom: 50px;
  opacity: 0;
  transition: width 1s ease-in-out, opacity 1s ease-in;
  transition-delay: width 0.5s, opacity 1s;

  &.open {
    width: 65%;
    opacity: 1;
  }

  .detail-content {
    display: none;

    &.active {
      display: block;
    }
  }

  .detail-img {
    width: 100%;
    margin: 0 auto;
    margin:1em 0 1.2em 0;
  }
  .detail-title {
    font-size: 30px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 2.4px;
    text-align: left;
    color: #000000;
  }

  .detail-subtitle {
    font-weight: bold;
    text-align: left;
    color: #000000;
    margin-bottom: 0.5em;
  }

  .detail-desc {
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    text-align: left;
    color: #444444;
    margin-bottom: 1.2em;
  }

  .close {
    width: 80px;
    height: 80px;
    background: #ed6d34;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 30px;
    }

    position: absolute;
    top: 0px;
    right: 0px;
  }
}

.text {
  width: 80%;
  height: 40%;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 166px;
  text-align: left;
  position: relative;
  transition: all 1s;
  transition-delay: 1s;

  > div {
    height: 100%;
    transition: all 0.8s ease-in-out;
  }

  .text-item {
    height: 100%;
    line-height: 1.6;position: relative;
    &.active {
      .title{
        opacity: 1;
        transform: translateY(0);
      }
      .subtitle,
      .desc {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
}

.title {
  // font-family: 'noto_regular';
  /* font-size: calc(100vw * (44 / 1920)); */ 
  font-size:45.5px;
  line-height: 1.5em;
  letter-spacing: 3px;
  font-weight:bold;
  margin-bottom:0;
  color: #ed6d34;
  transition: all 0.3s ease-in;
  opacity: 0;
  transform: translateY(10px);
}

.subtitle {
  // font-family: 'noto_regular';
  font-size: 20px;
  font-weight:bold;
  margin:1em 0 0.4em;
  color: #000;
  transition: all 0.7s ease-in;
  opacity: 0;
  transform: translateY(15px);
}

.desc {
  font-size: 1em;
  line-height: 2em;
  letter-spacing: 3px;
  color: #585858;
  transition: all 0.9s ease-in;
  opacity: 0;
  transform: translateY(20px);
}

.button {
  position: relative;
  margin-left: 10%;
  width: 12em;
  height: 4em;
  border: 1px solid;
  border-color: #3f3f3f;
  color: #000;
  border-radius: 3px;
  text-align: center;
  box-sizing: border-box;
  padding-top: 1.5em;
  /* font-family: 'AvantGarde_Thin'; */
  /* font-weight: bold; */
  letter-spacing: 2px;
  transition: box-shadow 0.5s, color 0.5s, opacity 1s, border-color 0s;
  transition-timing-function: ease-in-out;
  box-shadow: inset 0 0 0 0 #3f3f3f;
  cursor: pointer;
  opacity: 1;

  &:hover {
    box-shadow: inset -200px 0 0 0 #3f3f3f;
    color: #fff;
  }

  &.hide {
    opacity: 0;
    border-color: transparent;
  }
}

.slide-next,
.slide-prev {
  width: 60px;
  height: 60px;
  background-color: #ed6d34;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  cursor: pointer;
  z-index: 12;
  transition: all 1s ease-in-out;

  img {
    width: 30%;
  }

  &.hide {
    opacity: 0;
  }
}

.slide-next {
  right: 0;
}

.slide-prev {
  left: 0;

  img {
    transform: rotate(180deg);
  }
}

.dialog {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 90;

  .dialog-content {
    width: 90vw;
    height: 90vh;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%) !important;
    background: transparent;

    video {
      outline: none;
      width: 100%;
      height: 100%;
    }
  }

  .close {
    width: 30px;
    height: 30px;
    cursor: pointer;
    img {
      width: 100%;
    }

    position: fixed;
    top: 30px;
    right: 30px;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .title {
    font-size: calc(100vw * (28 / 1024));
  }

  .desc {
    font-size: 0.9em;
  }
}

@media screen and (max-width: 767px) {
  .bg.fullscreen {
    flex-wrap: wrap;
    height: auto !important;
  }
  .left-bg {
    width: 100%;
    height: calc(100vw * (268 / 375));
  }

  .item-img {
  }

  .slide-next,
  .slide-prev {
    width: 40px;
    height: 40px;
    top: calc(100vw * (138 / 375));
  }
  .right {
    position: static;
    height: auto;
    left: 0;
    display: block;
  }

  .content {
    width: 100%;
    height: auto;
    padding-bottom: 30px;
  }

  .text {
    margin-top: 20px;
    height: auto;
    padding-bottom: 30px;

    .title {
      font-size: 31px;
      opacity: 1;
    }

    .subtitle {
      font-size: 15px;
      margin-bottom: 1em;
      opacity: 1;
    }

    .desc {
      font-size: 16px;
      opacity: 1;
    }
  }

  .button {
    width: 220px;
    height: 54px;
    font-size: 12px;
    margin: 0 auto;
    margin-top: 30px;
  }

  .detail {
    width: 100vw;
    opacity: 1;
    background: #fff;
    position: absolute;
    top: 0;
    animation: none;
    left: 100vw;
    transition: all 0.5s;
    padding: 60px 20px;
    overflow: scroll;
    height: 100%;
    .close {
      width: 60px;
      height: 60px;
    }

    &.open {
      width: 100vw;
      left: 0;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'
import play from '@/assets/svg/icon-play.svg'
import { setTimeout } from 'timers'
export default {
  name: 'section6',
  mixins: [slider],

  components: {},

  data() {
    return {
      play,
      isMobile,
      isChange: false,
      isShowDetail: false,
      isShowDialog: false,
      detailIndex: 0,
      slideList: [
        {
          title: '用議題打破行銷思維 — 林板新',
          subtitle: '海沃創意行銷-新板巨星',
          desc: '搭上選舉順風車，包裝「良好新候選人」創造議題。',
          img: require('./s6/item-img-1.jpg'),
        },
        {
          title: '善用網紅行銷，帶動網路聲量 — 一個屋簷下 - 木曜四超玩',
          subtitle: '海沃創意行銷-一個屋簷下',
          desc: '與網紅合作並舉辦線上抽獎，替活動創造高度關注。',
          img: require('./s6/item-img-2.jpg'),
        },
        {
          title: '打造超吸晴的網站 — 博悅',
          subtitle: '興富發建設-博悅',
          desc: '藉由動態影片塑造品牌形象，呈現產品風格，打造吸睛的網站。',
          video: require('./s6/item-img-3.mp4'),
        },
        {
          title: '用影音傳遞對的訊息 — 金城舞2',
          subtitle: '甲山林機構-金城舞2',
          desc:
            '用影音達到深度溝通，打造全面式的行銷體驗。即使是廣告影片，也要讓民眾看得舒服且有趣，發揮影音的高互動特性。',
          img: require('./s6/item-img-4.jpg'),
        },
        {
          title: '四個月完銷的秘密 — 欣璞綻',
          subtitle: '海沃創意行銷-欣璞綻',
          desc:
            '網路素材交叉測試、精準廣告投放、追蹤數據並即時優化、調整行銷方向。',
          iframe: `${window.location.href}300x600.html`,
        },
      ],
    }
  },

  methods: {
    slideNext() {
      if (this.isShowDetail) {
        return
      }
      this.addIndex()
    },

    slidePrev() {
      if (this.isShowDetail) {
        return
      }
      this.decIndex()
    },

    checkDetail(index) {
      if (this.isShowDetail) {
        return
      }
      this.detailIndex = index
      this.isShowDetail = true
    },

    closeDetail() {
      this.isShowDetail = false
    },

    playVideo(index) {
      this.$refs[`dialogVideo${index}`].src = this.slideList[
        this.slideIndex
      ].video
      this.$refs[`dialogVideo${index}`].play()
      this.isShowDialog = true
    },

    closeDialog(index) {
      this.isShowDialog = false
      this.$refs[`dialogVideo${index}`].pause()
    },
  },

  watch: {
    slideIndex() {
      this.isChange = true
      setTimeout(() => {
        this.isChange = false
      }, 500)
    },

    isShowDetail() {
      // document.querySelector('body')
    },
  },

  mounted() {},
}
</script>
