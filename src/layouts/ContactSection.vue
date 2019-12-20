<template>
  <div class="contact" id="contact">
    <div class="container">
      <div>
        <div class="title">聯絡我們</div>
        <div class="info-item" @click="showMapDialog">
            <div class="icon"></div>
          <div class="desc">{{info.address}}</div>
        </div>
        <div class="info-item" @click="showEmailDialog">
            <div class="icon"></div>
          <div class="desc">{{info.email}}</div>
        </div>
        <div class="info-item" @click="showCallDialog">
            <div class="icon"></div>
          <div class="desc">{{info.phone}}</div>
        </div>
      </div>
      <div>
        <div class="form">
          <div class="row flex">
            <el-input v-model="form.name" @input="handleName" :class="`${hasName ? 'hasValue' : ''}`">
              <template slot="append">姓名*</template>
            </el-input>
            <el-input v-model="form.company" @input="handleCompany" :class="`${hasCompany ? 'hasValue' : ''}`">
              <template slot="append">公司</template>
            </el-input>
          </div>

          <div class="row flex">
            <el-input v-model="form.email" @input="handleEmail" :class="`${hasEmail ? 'hasValue' : ''}`">
              <template slot="append">信箱</template>
            </el-input>
            <el-input v-model="form.phone" @input="handlePhone" :class="`${hasPhone ? 'hasValue' : ''}`">
              <template slot="append">電話*</template>
            </el-input>
          </div>

          <el-input v-model="form.title" type="textarea" :rows="1" placeholder="我想詢問廣告內容"></el-input>
          <el-input v-model="form.msg" type="textarea" :rows="4" placeholder="詢問內容"></el-input>
        </div>
        <div style="margin: 0 auto 15px;/* transform: scale(0.7); */">
          <vue-recaptcha :sitekey="info.recaptcha_site_key_v2"
          @verify="isVerify = true"
          style="display:flex;justify-content: center;"
          ></vue-recaptcha>
        </div>
        <div :class="`button ${isVerify ? '' : 'disabled'}`" @click="submit">GO!</div>
      </div>
    </div>
    <!-- <Order /> -->
    <!-- <HouseInfo /> -->
    <el-dialog title :visible.sync="isShowMapDialog" :width="isMobile ? '90%' : '480px'" :modal-append-to-body="false">
      <MapDialog :link="info.googleLink" :address="info.address" />
    </el-dialog>
    <el-dialog title :visible.sync="isShowCallDialog" :width="isMobile ? '90%' : '480px'" :modal-append-to-body="false">
        <CallDialog :phone="info.phone" />
      </el-dialog>
      <el-dialog title :visible.sync="isShowEmailDialog" :width="isMobile ? '90%' : '480px'" :modal-append-to-body="false">
      <EmailDialog :email="info.email" />
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  &:before {
    content:"";
    background:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='%23FFF' preserveAspectRatio='none'><polygon points='50,50 0,50 0,0'/></svg>");
    width: 100%;
    height: 90px;
    position: absolute;
    top: -90px;
    left: 0;
    z-index: -1;
    background-size: 100% 100%;
  }

  background: #fff repeat-x 50% 100%;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 24.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='圖層_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1920 600' style='enable-background:new 0 0 1920 600;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bclip-path:url(%23SVGID_2_);%7D .st1%7Bfill:%23FCF4F2;%7D .st2%7Bfill:%23FFFFFF;stroke:%23ED6D34;stroke-miterlimit:10;%7D .st3%7Bfill:%23ED6D34;%7D .st4%7Bfill:none;stroke:%23ED6D34;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;%7D .st5%7Bfill:%23FFD5C2;%7D .st6%7Bfill:none;stroke:%23ED6D34;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;%7D%0A%3C/style%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_1_' x='1.4' width='1918.6' height='600'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st0'%3E%3Crect x='1749.9' y='149.8' class='st1' width='5.1' height='211.7'/%3E%3Crect x='1734.3' y='196.9' class='st1' width='36' height='94.9'/%3E%3Crect x='1725.3' y='215.6' class='st1' width='54.2' height='80.3'/%3E%3Crect x='1697.5' y='235' class='st1' width='92.8' height='92.8'/%3E%3Crect x='1684.6' y='256.6' class='st1' width='122.9' height='346.4'/%3E%3Cpolygon class='st1' points='1926.6,603 1848.5,603 1848.5,193.7 1926.6,241.2 '/%3E%3Crect x='2093.3' y='290' class='st1' width='84.8' height='35.1'/%3E%3Crect x='2079.7' y='306.8' class='st1' width='84' height='296.2'/%3E%3Cpolygon class='st1' points='2021.7,603 1912.6,603 1912.6,337.8 2021.7,266.4 '/%3E%3Crect x='1689.6' y='426.1' class='st1' width='417.6' height='176.9'/%3E%3C/g%3E%3Cg class='st0'%3E%3Cg%3E%3Cpolygon class='st2' points='1764,603 1816.5,603 1816.5,286.1 1764,252.9 '/%3E%3Cg%3E%3Crect x='1772.9' y='300' class='st3' width='34.7' height='8.1'/%3E%3Crect x='1772.9' y='318.3' class='st3' width='34.7' height='8.1'/%3E%3Crect x='1772.9' y='336.6' class='st3' width='34.7' height='8.1'/%3E%3Crect x='1772.9' y='354.9' class='st3' width='34.7' height='8.1'/%3E%3Crect x='1772.9' y='373.1' class='st3' width='34.7' height='8.1'/%3E%3Crect x='1772.9' y='391.4' class='st3' width='34.7' height='8.1'/%3E%3Crect x='1772.9' y='409.7' class='st3' width='34.7' height='8.1'/%3E%3Crect x='1772.9' y='428' class='st3' width='34.7' height='8.1'/%3E%3Crect x='1772.9' y='446.2' class='st3' width='34.7' height='8.1'/%3E%3Crect x='1772.9' y='464.5' class='st3' width='34.7' height='8.1'/%3E%3Crect x='1772.9' y='482.8' class='st3' width='34.7' height='8.1'/%3E%3Crect x='1772.9' y='501.1' class='st3' width='34.7' height='8.1'/%3E%3C/g%3E%3Cpolygon class='st2' points='1801.8,603 1848.5,603 1848.5,313.3 1801.8,341.8 '/%3E%3C/g%3E%3Cg%3E%3Crect x='1915.8' y='257.9' class='st3' width='7.8' height='73.6'/%3E%3Cpolygon class='st2' points='1949.4,328.9 1949.4,300.5 1889.9,276.2 1889.9,308.3 1878.6,304.4 1878.6,603 1960.7,603 1960.7,332.8 '/%3E%3C/g%3E%3Cg%3E%3Crect x='2046.2' y='123.8' class='st3' width='9' height='45.8'/%3E%3Cpolygon class='st2' points='2094.6,232.6 2094.6,212.3 2081.6,212.3 2081.6,193.8 2072.4,193.8 2072.4,178.5 2066.3,178.5 2066.3,161.3 2035.1,161.3 2035.1,178.5 2029,178.5 2029,193.8 2019.8,193.8 2019.8,212.3 2006.8,212.3 2006.8,232.6 1993.4,232.6 1993.4,603 2108,603 2108,232.6 '/%3E%3Cg%3E%3Crect x='2018.1' y='232.6' class='st3' width='7.1' height='228.6'/%3E%3Crect x='2037.5' y='232.6' class='st3' width='7.1' height='228.6'/%3E%3Crect x='2056.8' y='232.6' class='st3' width='7.1' height='228.6'/%3E%3Crect x='2076.2' y='232.6' class='st3' width='7.1' height='228.6'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpolygon class='st2' points='1722.6,279.2 1722.6,256.3 1711.8,256.3 1711.8,235.7 1689.6,171 1667.4,235.7 1667.4,256.3 1656.7,256.3 1656.7,279.2 1637.8,279.2 1637.8,603 1741.4,603 1741.4,279.2 '/%3E%3Cg%3E%3Crect x='1663.1' y='293.1' class='st3' width='5.8' height='238.5'/%3E%3Crect x='1678.8' y='293.1' class='st3' width='5.8' height='238.5'/%3E%3Crect x='1694.6' y='293.1' class='st3' width='5.8' height='238.5'/%3E%3Crect x='1710.3' y='293.1' class='st3' width='5.8' height='238.5'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpolygon class='st2' points='2104.5,380.1 2104.5,358.1 2085.3,358.1 2085.3,344.6 2062.4,344.6 2062.4,358.1 2043.2,358.1 2043.2,380.1 2033.6,380.1 2033.6,603 2114,603 2114,380.1 '/%3E%3Cg%3E%3Cg%3E%3Crect x='2050.1' y='391.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2069.6' y='391.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2089' y='391.1' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='2050.1' y='408.8' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2069.6' y='408.8' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2089' y='408.8' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='2050.1' y='426.5' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2069.6' y='426.5' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2089' y='426.5' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='2050.1' y='444.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2069.6' y='444.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2089' y='444.1' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='2050.1' y='461.8' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2069.6' y='461.8' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2089' y='461.8' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='2050.1' y='479.5' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2069.6' y='479.5' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2089' y='479.5' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='2050.1' y='497.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2069.6' y='497.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2089' y='497.1' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='2050.1' y='514.8' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2069.6' y='514.8' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2089' y='514.8' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='2050.1' y='532.5' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2069.6' y='532.5' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2089' y='532.5' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='2050.1' y='550.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2069.6' y='550.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='2089' y='550.1' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpolygon class='st2' points='1699.7,538.3 1630.3,538.3 1630.3,524.4 1565.2,524.4 1565.2,538.3 1495.8,538.3 1495.8,551.9 1506,551.9 1506,603 1689.4,603 1689.4,551.9 1699.7,551.9 '/%3E%3Cg%3E%3Cg%3E%3Crect x='1530.1' y='570' class='st2' width='12' height='20.9'/%3E%3Crect x='1552.3' y='570' class='st2' width='12' height='20.9'/%3E%3C/g%3E%3Cg%3E%3Crect x='1580.6' y='570' class='st2' width='12' height='20.9'/%3E%3Crect x='1602.9' y='570' class='st2' width='12' height='20.9'/%3E%3C/g%3E%3Cg%3E%3Crect x='1631.1' y='570' class='st2' width='12' height='20.9'/%3E%3Crect x='1653.4' y='570' class='st2' width='12' height='20.9'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpolygon class='st2' points='2163.7,454.7 2083.3,454.7 2083.3,469.9 2088.6,469.9 2088.6,603 2158.7,603 2158.7,469.9 2163.7,469.9 '/%3E%3Cg%3E%3Cg%3E%3Crect x='2103' y='477.7' class='st3' width='7.6' height='7.6'/%3E%3Crect x='2120.3' y='477.7' class='st3' width='7.6' height='7.6'/%3E%3Crect x='2137.7' y='477.7' class='st3' width='7.6' height='7.6'/%3E%3C/g%3E%3Cg%3E%3Crect x='2103' y='493.4' class='st3' width='7.6' height='7.6'/%3E%3Crect x='2120.3' y='493.4' class='st3' width='7.6' height='7.6'/%3E%3Crect x='2137.7' y='493.4' class='st3' width='7.6' height='7.6'/%3E%3C/g%3E%3Cg%3E%3Crect x='2103' y='509.2' class='st3' width='7.6' height='7.6'/%3E%3Crect x='2120.3' y='509.2' class='st3' width='7.6' height='7.6'/%3E%3Crect x='2137.7' y='509.2' class='st3' width='7.6' height='7.6'/%3E%3C/g%3E%3Cg%3E%3Crect x='2103' y='524.9' class='st3' width='7.6' height='7.6'/%3E%3Crect x='2120.3' y='524.9' class='st3' width='7.6' height='7.6'/%3E%3Crect x='2137.7' y='524.9' class='st3' width='7.6' height='7.6'/%3E%3C/g%3E%3Cg%3E%3Crect x='2103' y='540.7' class='st3' width='7.6' height='7.6'/%3E%3Crect x='2120.3' y='540.7' class='st3' width='7.6' height='7.6'/%3E%3Crect x='2137.7' y='540.7' class='st3' width='7.6' height='7.6'/%3E%3C/g%3E%3Cg%3E%3Crect x='2103' y='556.4' class='st3' width='7.6' height='7.6'/%3E%3Crect x='2120.3' y='556.4' class='st3' width='7.6' height='7.6'/%3E%3Crect x='2137.7' y='556.4' class='st3' width='7.6' height='7.6'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpolygon class='st2' points='1973.4,440.4 1973.4,417.1 1920.2,417.1 1920.2,440.4 1888.3,440.4 1888.3,417.1 1835.1,417.1 1835.1,440.4 1799.3,440.4 1799.3,603 2009.3,603 2009.3,440.4 '/%3E%3Cg%3E%3Cg%3E%3Crect x='1838.3' y='455.2' class='st2' width='13' height='8.8'/%3E%3Crect x='1872.1' y='455.2' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='1838.3' y='479.8' class='st2' width='13' height='8.8'/%3E%3Crect x='1872.1' y='479.8' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='1838.3' y='504.4' class='st2' width='13' height='8.8'/%3E%3Crect x='1872.1' y='504.4' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='1838.3' y='528.9' class='st2' width='13' height='8.8'/%3E%3Crect x='1872.1' y='528.9' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='1838.3' y='553.5' class='st2' width='13' height='8.8'/%3E%3Crect x='1872.1' y='553.5' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='1838.3' y='578.1' class='st2' width='13' height='8.8'/%3E%3Crect x='1872.1' y='578.1' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Crect x='1923.4' y='455.2' class='st2' width='13' height='8.8'/%3E%3Crect x='1957.2' y='455.2' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='1923.4' y='479.8' class='st2' width='13' height='8.8'/%3E%3Crect x='1957.2' y='479.8' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='1923.4' y='504.4' class='st2' width='13' height='8.8'/%3E%3Crect x='1957.2' y='504.4' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='1923.4' y='528.9' class='st2' width='13' height='8.8'/%3E%3Crect x='1957.2' y='528.9' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='1923.4' y='553.5' class='st2' width='13' height='8.8'/%3E%3Crect x='1957.2' y='553.5' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='1923.4' y='578.1' class='st2' width='13' height='8.8'/%3E%3Crect x='1957.2' y='578.1' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Crect x='1812.6' y='470.8' class='st3' width='7.8' height='73.6'/%3E%3Cpolygon class='st2' points='1908.4,506.2 1839.5,506.2 1839.5,493.4 1793.4,493.4 1793.4,506.2 1724.5,506.2 1724.5,523.1 1729.8,523.1 1729.8,603 1903.1,603 1903.1,523.1 1908.4,523.1 '/%3E%3Cg%3E%3Cg%3E%3Crect x='1749.6' y='535.4' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1774.1' y='535.4' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1798.7' y='535.4' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1823.3' y='535.4' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1847.9' y='535.4' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1872.5' y='535.4' class='st2' width='10.9' height='10.9'/%3E%3C/g%3E%3Cg%3E%3Crect x='1749.6' y='555' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1774.1' y='555' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1798.7' y='555' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1823.3' y='555' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1847.9' y='555' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1872.5' y='555' class='st2' width='10.9' height='10.9'/%3E%3C/g%3E%3Cg%3E%3Crect x='1749.6' y='574.6' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1774.1' y='574.6' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1798.7' y='574.6' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1823.3' y='574.6' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1847.9' y='574.6' class='st2' width='10.9' height='10.9'/%3E%3Crect x='1872.5' y='574.6' class='st2' width='10.9' height='10.9'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg class='st0'%3E%3Cpath class='st2' d='M1575,281.3c-10.7,0-19.8,7.1-22.8,16.8c-2.5-2.2-5.9-3.6-9.5-3.6c-7.6,0-13.8,5.9-14.3,13.4 c-2.7-2.2-6.3-3.6-10.1-3.6c-7.7,0-14,5.3-15.5,12.4h123c-1-8-7.9-14.2-16.1-14.2c-4.2,0-8.1,1.6-11,4.3c0-0.6,0.1-1.2,0.1-1.8 C1598.8,292,1588.2,281.3,1575,281.3z'/%3E%3Cpath class='st2' d='M1854.7,189.1c0-8,12.3-14.1,21.7-8.3c-1.7-26.2,35.3-24.8,37.9-6.3c6.3-7.7,20.1-1.4,18.2,8.9 c7.7-8.4,21.4-1.7,21.4,5.7C1943.9,189.1,1854.7,189.1,1854.7,189.1z'/%3E%3Cpath class='st2' d='M1847.8,145.5c0-0.3,0-0.6,0-0.8c0-12.4-9.5-22.4-21.2-22.4c-5.5,0-11.7,4-14.3,5.8c0.6-2.9,1-5.6,1-7.6 c0-8.7-6.7-15.7-14.9-15.7c-4,0-7.7,1.7-10.4,4.5c-0.9-16-14-28.7-30-28.7c-16.6,0-30.1,13.6-30.1,30.4c0,4.6,0.5,7.3,1.4,11.3 c-3.5-3.5-12.4-9.5-21.6-9.5c-16.6,0-30.1,13.8-30.1,30.7c0,0.7,0.1,1.3,0.1,1.9H1847.8z'/%3E%3Cpath class='st4' d='M1833.4,195.4c-5.5,2-10.2,5.8-13.4,10.7c-2.7-5.5-7.2-9.9-12.8-12.5'/%3E%3Cpath class='st4' d='M1619.1,102.6c-6.3,1.9-11.7,5.6-15.4,10.4c-3.1-5.5-8.2-10.1-14.6-12.8'/%3E%3Cpath class='st4' d='M1799.8,229.3c-3.5,2.1-6.1,5.2-7.6,8.8c-2.6-3.2-6.2-5.4-10.3-6.4'/%3E%3Cpath class='st4' d='M1572,77.2c-3.5,2.1-6.1,5.2-7.6,8.8c-2.6-3.2-6.2-5.4-10.3-6.4'/%3E%3C/g%3E%3Cg class='st0'%3E%3Crect x='-168.4' y='149.8' class='st1' width='5.1' height='211.7'/%3E%3Crect x='-183.9' y='196.9' class='st1' width='36' height='94.9'/%3E%3Crect x='-193' y='215.6' class='st1' width='54.2' height='80.3'/%3E%3Crect x='-220.8' y='235' class='st1' width='92.8' height='92.8'/%3E%3Crect x='-233.6' y='256.6' class='st1' width='122.9' height='346.4'/%3E%3Cpolygon class='st1' points='8.4,603 -69.8,603 -69.8,193.7 8.4,241.2 '/%3E%3Crect x='175' y='290' class='st1' width='84.8' height='35.1'/%3E%3Crect x='161.5' y='306.8' class='st1' width='84' height='296.2'/%3E%3Cpolygon class='st1' points='103.4,603 -5.7,603 -5.7,337.8 103.4,266.4 '/%3E%3Crect x='-228.7' y='426.1' class='st1' width='417.6' height='176.9'/%3E%3C/g%3E%3Cg class='st0'%3E%3Cg%3E%3Cpolygon class='st2' points='-154.2,603 -101.8,603 -101.8,286.1 -154.2,252.9 '/%3E%3Cg%3E%3Crect x='-145.4' y='300' class='st3' width='34.7' height='8.1'/%3E%3Crect x='-145.4' y='318.3' class='st3' width='34.7' height='8.1'/%3E%3Crect x='-145.4' y='336.6' class='st3' width='34.7' height='8.1'/%3E%3Crect x='-145.4' y='354.9' class='st3' width='34.7' height='8.1'/%3E%3Crect x='-145.4' y='373.1' class='st3' width='34.7' height='8.1'/%3E%3Crect x='-145.4' y='391.4' class='st3' width='34.7' height='8.1'/%3E%3Crect x='-145.4' y='409.7' class='st3' width='34.7' height='8.1'/%3E%3Crect x='-145.4' y='428' class='st3' width='34.7' height='8.1'/%3E%3Crect x='-145.4' y='446.2' class='st3' width='34.7' height='8.1'/%3E%3Crect x='-145.4' y='464.5' class='st3' width='34.7' height='8.1'/%3E%3Crect x='-145.4' y='482.8' class='st3' width='34.7' height='8.1'/%3E%3Crect x='-145.4' y='501.1' class='st3' width='34.7' height='8.1'/%3E%3C/g%3E%3Cpolygon class='st2' points='-116.5,603 -69.8,603 -69.8,313.3 -116.5,341.8 '/%3E%3C/g%3E%3Cg%3E%3Crect x='-2.5' y='257.9' class='st3' width='7.8' height='73.6'/%3E%3Cpolygon class='st2' points='31.1,328.9 31.1,300.5 -28.4,276.2 -28.4,308.3 -39.7,304.4 -39.7,603 42.4,603 42.4,332.8 '/%3E%3C/g%3E%3Cg%3E%3Crect x='127.9' y='123.8' class='st3' width='9' height='45.8'/%3E%3Cpolygon class='st2' points='176.3,232.6 176.3,212.3 163.3,212.3 163.3,193.8 154.1,193.8 154.1,178.5 148,178.5 148,161.3 116.8,161.3 116.8,178.5 110.8,178.5 110.8,193.8 101.5,193.8 101.5,212.3 88.6,212.3 88.6,232.6 75.1,232.6 75.1,603 189.8,603 189.8,232.6 '/%3E%3Cg%3E%3Crect x='99.8' y='232.6' class='st3' width='7.1' height='228.6'/%3E%3Crect x='119.2' y='232.6' class='st3' width='7.1' height='228.6'/%3E%3Crect x='138.5' y='232.6' class='st3' width='7.1' height='228.6'/%3E%3Crect x='157.9' y='232.6' class='st3' width='7.1' height='228.6'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpolygon class='st2' points='-195.7,279.2 -195.7,256.3 -206.5,256.3 -206.5,235.7 -228.7,171 -250.9,235.7 -250.9,256.3 -261.6,256.3 -261.6,279.2 -280.5,279.2 -280.5,603 -176.9,603 -176.9,279.2 '/%3E%3Cg%3E%3Crect x='-255.2' y='293.1' class='st3' width='5.8' height='238.5'/%3E%3Crect x='-239.4' y='293.1' class='st3' width='5.8' height='238.5'/%3E%3Crect x='-223.7' y='293.1' class='st3' width='5.8' height='238.5'/%3E%3Crect x='-207.9' y='293.1' class='st3' width='5.8' height='238.5'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpolygon class='st2' points='186.2,380.1 186.2,358.1 167,358.1 167,344.6 144.1,344.6 144.1,358.1 124.9,358.1 124.9,380.1 115.3,380.1 115.3,603 195.8,603 195.8,380.1 '/%3E%3Cg%3E%3Cg%3E%3Crect x='131.8' y='391.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='151.3' y='391.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='170.8' y='391.1' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='131.8' y='408.8' class='st3' width='8.5' height='8.5'/%3E%3Crect x='151.3' y='408.8' class='st3' width='8.5' height='8.5'/%3E%3Crect x='170.8' y='408.8' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='131.8' y='426.5' class='st3' width='8.5' height='8.5'/%3E%3Crect x='151.3' y='426.5' class='st3' width='8.5' height='8.5'/%3E%3Crect x='170.8' y='426.5' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='131.8' y='444.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='151.3' y='444.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='170.8' y='444.1' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='131.8' y='461.8' class='st3' width='8.5' height='8.5'/%3E%3Crect x='151.3' y='461.8' class='st3' width='8.5' height='8.5'/%3E%3Crect x='170.8' y='461.8' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='131.8' y='479.5' class='st3' width='8.5' height='8.5'/%3E%3Crect x='151.3' y='479.5' class='st3' width='8.5' height='8.5'/%3E%3Crect x='170.8' y='479.5' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='131.8' y='497.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='151.3' y='497.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='170.8' y='497.1' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='131.8' y='514.8' class='st3' width='8.5' height='8.5'/%3E%3Crect x='151.3' y='514.8' class='st3' width='8.5' height='8.5'/%3E%3Crect x='170.8' y='514.8' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='131.8' y='532.5' class='st3' width='8.5' height='8.5'/%3E%3Crect x='151.3' y='532.5' class='st3' width='8.5' height='8.5'/%3E%3Crect x='170.8' y='532.5' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3Cg%3E%3Crect x='131.8' y='550.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='151.3' y='550.1' class='st3' width='8.5' height='8.5'/%3E%3Crect x='170.8' y='550.1' class='st3' width='8.5' height='8.5'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpolygon class='st2' points='-218.6,538.3 -288,538.3 -288,524.4 -353.1,524.4 -353.1,538.3 -422.5,538.3 -422.5,551.9 -412.2,551.9 -412.2,603 -228.8,603 -228.8,551.9 -218.6,551.9 '/%3E%3Cg%3E%3Cg%3E%3Crect x='-388.2' y='570' class='st2' width='12' height='20.9'/%3E%3Crect x='-365.9' y='570' class='st2' width='12' height='20.9'/%3E%3C/g%3E%3Cg%3E%3Crect x='-337.7' y='570' class='st2' width='12' height='20.9'/%3E%3Crect x='-315.4' y='570' class='st2' width='12' height='20.9'/%3E%3C/g%3E%3Cg%3E%3Crect x='-287.2' y='570' class='st2' width='12' height='20.9'/%3E%3Crect x='-264.9' y='570' class='st2' width='12' height='20.9'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpolygon class='st2' points='245.4,454.7 165,454.7 165,469.9 170.3,469.9 170.3,603 240.4,603 240.4,469.9 245.4,469.9 '/%3E%3Cg%3E%3Cg%3E%3Crect x='184.7' y='477.7' class='st3' width='7.6' height='7.6'/%3E%3Crect x='202' y='477.7' class='st3' width='7.6' height='7.6'/%3E%3Crect x='219.4' y='477.7' class='st3' width='7.6' height='7.6'/%3E%3C/g%3E%3Cg%3E%3Crect x='184.7' y='493.4' class='st3' width='7.6' height='7.6'/%3E%3Crect x='202' y='493.4' class='st3' width='7.6' height='7.6'/%3E%3Crect x='219.4' y='493.4' class='st3' width='7.6' height='7.6'/%3E%3C/g%3E%3Cg%3E%3Crect x='184.7' y='509.2' class='st3' width='7.6' height='7.6'/%3E%3Crect x='202' y='509.2' class='st3' width='7.6' height='7.6'/%3E%3Crect x='219.4' y='509.2' class='st3' width='7.6' height='7.6'/%3E%3C/g%3E%3Cg%3E%3Crect x='184.7' y='524.9' class='st3' width='7.6' height='7.6'/%3E%3Crect x='202' y='524.9' class='st3' width='7.6' height='7.6'/%3E%3Crect x='219.4' y='524.9' class='st3' width='7.6' height='7.6'/%3E%3C/g%3E%3Cg%3E%3Crect x='184.7' y='540.7' class='st3' width='7.6' height='7.6'/%3E%3Crect x='202' y='540.7' class='st3' width='7.6' height='7.6'/%3E%3Crect x='219.4' y='540.7' class='st3' width='7.6' height='7.6'/%3E%3C/g%3E%3Cg%3E%3Crect x='184.7' y='556.4' class='st3' width='7.6' height='7.6'/%3E%3Crect x='202' y='556.4' class='st3' width='7.6' height='7.6'/%3E%3Crect x='219.4' y='556.4' class='st3' width='7.6' height='7.6'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpolygon class='st2' points='55.1,440.4 55.1,417.1 1.9,417.1 1.9,440.4 -30,440.4 -30,417.1 -83.2,417.1 -83.2,440.4 -119,440.4 -119,603 91,603 91,440.4 '/%3E%3Cg%3E%3Cg%3E%3Crect x='-80' y='455.2' class='st2' width='13' height='8.8'/%3E%3Crect x='-46.2' y='455.2' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='-80' y='479.8' class='st2' width='13' height='8.8'/%3E%3Crect x='-46.2' y='479.8' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='-80' y='504.4' class='st2' width='13' height='8.8'/%3E%3Crect x='-46.2' y='504.4' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='-80' y='528.9' class='st2' width='13' height='8.8'/%3E%3Crect x='-46.2' y='528.9' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='-80' y='553.5' class='st2' width='13' height='8.8'/%3E%3Crect x='-46.2' y='553.5' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='-80' y='578.1' class='st2' width='13' height='8.8'/%3E%3Crect x='-46.2' y='578.1' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Crect x='5.1' y='455.2' class='st2' width='13' height='8.8'/%3E%3Crect x='38.9' y='455.2' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='5.1' y='479.8' class='st2' width='13' height='8.8'/%3E%3Crect x='38.9' y='479.8' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='5.1' y='504.4' class='st2' width='13' height='8.8'/%3E%3Crect x='38.9' y='504.4' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='5.1' y='528.9' class='st2' width='13' height='8.8'/%3E%3Crect x='38.9' y='528.9' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='5.1' y='553.5' class='st2' width='13' height='8.8'/%3E%3Crect x='38.9' y='553.5' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3Cg%3E%3Crect x='5.1' y='578.1' class='st2' width='13' height='8.8'/%3E%3Crect x='38.9' y='578.1' class='st2' width='13' height='8.8'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Crect x='-105.7' y='470.8' class='st3' width='7.8' height='73.6'/%3E%3Cpolygon class='st2' points='-9.8,506.2 -78.7,506.2 -78.7,493.4 -124.9,493.4 -124.9,506.2 -193.8,506.2 -193.8,523.1 -188.5,523.1 -188.5,603 -15.1,603 -15.1,523.1 -9.8,523.1 '/%3E%3Cg%3E%3Cg%3E%3Crect x='-168.7' y='535.4' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-144.1' y='535.4' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-119.6' y='535.4' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-95' y='535.4' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-70.4' y='535.4' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-45.8' y='535.4' class='st2' width='10.9' height='10.9'/%3E%3C/g%3E%3Cg%3E%3Crect x='-168.7' y='555' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-144.1' y='555' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-119.6' y='555' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-95' y='555' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-70.4' y='555' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-45.8' y='555' class='st2' width='10.9' height='10.9'/%3E%3C/g%3E%3Cg%3E%3Crect x='-168.7' y='574.6' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-144.1' y='574.6' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-119.6' y='574.6' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-95' y='574.6' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-70.4' y='574.6' class='st2' width='10.9' height='10.9'/%3E%3Crect x='-45.8' y='574.6' class='st2' width='10.9' height='10.9'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg class='st0'%3E%3Cpath class='st2' d='M-343.3,281.3c-10.7,0-19.8,7.1-22.8,16.8c-2.5-2.2-5.9-3.6-9.5-3.6c-7.6,0-13.8,5.9-14.3,13.4 c-2.7-2.2-6.3-3.6-10.1-3.6c-7.7,0-14,5.3-15.5,12.4h123c-1-8-7.9-14.2-16.1-14.2c-4.2,0-8.1,1.6-11,4.3c0-0.6,0.1-1.2,0.1-1.8 C-319.5,292-330.1,281.3-343.3,281.3z'/%3E%3Cpath class='st2' d='M147,68.2c-5.4,0-9.9,3.5-11.4,8.4c-1.3-1.1-2.9-1.8-4.7-1.8c-3.8,0-6.9,3-7.2,6.7c-1.4-1.1-3.1-1.8-5.1-1.8 c-3.8,0-7,2.7-7.7,6.2h61.5c-0.5-4-3.9-7.1-8.1-7.1c-2.1,0-4,0.8-5.5,2.1c0-0.3,0-0.6,0-0.9C158.9,73.5,153.6,68.2,147,68.2z'/%3E%3Cpath class='st2' d='M-63.6,189.1c0-8,12.3-14.1,21.7-8.3c-1.7-26.2,35.3-24.8,37.9-6.3c6.3-7.7,20.1-1.4,18.2,8.9 c7.7-8.4,21.4-1.7,21.4,5.7C25.6,189.1-63.6,189.1-63.6,189.1z'/%3E%3Cpath class='st2' d='M-70.4,145.5c0-0.3,0-0.6,0-0.8c0-12.4-9.5-22.4-21.2-22.4c-5.5,0-11.7,4-14.3,5.8c0.6-2.9,1-5.6,1-7.6 c0-8.7-6.7-15.7-14.9-15.7c-4,0-7.7,1.7-10.4,4.5c-0.9-16-14-28.7-30-28.7c-16.6,0-30.1,13.6-30.1,30.4c0,4.6,0.5,7.3,1.4,11.3 c-3.5-3.5-12.4-9.5-21.6-9.5c-16.6,0-30.1,13.8-30.1,30.7c0,0.7,0.1,1.3,0.1,1.9H-70.4z'/%3E%3Cpath class='st4' d='M-84.9,195.4c-5.5,2-10.2,5.8-13.4,10.7c-2.7-5.5-7.2-9.9-12.8-12.5'/%3E%3Cpath class='st4' d='M-299.2,102.6c-6.3,1.9-11.7,5.6-15.4,10.4c-3.1-5.5-8.2-10.1-14.6-12.8'/%3E%3Cpath class='st4' d='M-118.5,229.3c-3.5,2.1-6.1,5.2-7.6,8.8c-2.6-3.2-6.2-5.4-10.3-6.4'/%3E%3Cpath class='st4' d='M-346.2,77.2c-3.5,2.1-6.1,5.2-7.6,8.8c-2.6-3.2-6.2-5.4-10.3-6.4'/%3E%3C/g%3E%3Cg class='st0'%3E%3Cpolygon class='st2' points='304.5,537.3 304.5,518.6 296.2,518.6 296.2,533.2 270.6,520.7 211.7,549.5 211.7,603 329.5,603 329.5,549.5 '/%3E%3Cg%3E%3Crect x='225.1' y='562.8' class='st2' width='26.6' height='26.6'/%3E%3Crect x='288.9' y='562.8' class='st2' width='26.6' height='26.6'/%3E%3Crect x='261.8' y='562.8' class='st2' width='16.9' height='26.6'/%3E%3C/g%3E%3C/g%3E%3Cg class='st0'%3E%3Cg%3E%3Cg%3E%3Cpath class='st5' d='M106.4,558.7c0,11.4-7.4,20.6-16.5,20.6s-16.5-9.2-16.5-20.6s7.4-45.6,16.5-45.6S106.4,547.3,106.4,558.7z' /%3E%3Cline class='st6' x1='89.9' y1='540.4' x2='89.9' y2='602.3'/%3E%3C/g%3E%3Cg%3E%3Cpath class='st5' d='M139.4,567.8c0,9-5.8,16.3-13.1,16.3s-13.1-7.3-13.1-16.3c0-9,5.8-36.1,13.1-36.1S139.4,558.8,139.4,567.8z '/%3E%3Cline class='st6' x1='126.4' y1='553.3' x2='126.4' y2='602.3'/%3E%3C/g%3E%3Cg%3E%3Cpath class='st5' d='M-454.8,547.1c-2.1-8-9.5-13.9-18.4-13.9c-8.9,0-16.3,5.9-18.4,13.9c-5.8,3.7-9.5,9-9.5,15 c0,11,12.5,20,27.9,20s27.9-8.9,27.9-20C-445.4,556.1-449.1,550.8-454.8,547.1z'/%3E%3Cline class='st6' x1='-473.3' y1='554.3' x2='-473.3' y2='599.8'/%3E%3Cline class='st6' x1='-486.4' y1='568.5' x2='-473.3' y2='577.1'/%3E%3Cline class='st6' x1='-461.5' y1='559.8' x2='-473.3' y2='570.1'/%3E%3C/g%3E%3Cpath class='st5' d='M-168.3,603c0.6-0.9,0.9-1.9,0.9-3c0-3-2.4-5.4-5.4-5.4c-0.5,0-1,0.1-1.5,0.2c-1.7-5.1-6.6-8.9-12.3-8.9 c-1.5,0-2.9,0.3-4.2,0.7c-2-1.9-4.6-3.1-7.6-3.1c-5.4,0-9.8,3.9-10.8,8.9c-0.7-0.3-1.5-0.4-2.3-0.4c-3.7,0-6.7,3-6.7,6.7 c0,1.5,0.5,2.9,1.4,4.1H-168.3z'/%3E%3Cpath class='st5' d='M183.9,603c0.5-0.9,0.9-2,0.9-3.2c0-3.2-2.3-5.8-5.1-5.8c-0.5,0-1,0.1-1.4,0.3c-1.6-5.6-6.2-9.7-11.7-9.7 c-1.4,0-2.8,0.3-4,0.8c-1.9-2.1-4.4-3.3-7.2-3.3c-5.1,0-9.3,4.2-10.2,9.7c-0.7-0.3-1.4-0.5-2.2-0.5c-3.5,0-6.4,3.3-6.4,7.3 c0,1.7,0.5,3.2,1.3,4.4H183.9z'/%3E%3Cg%3E%3Cpath class='st5' d='M-403.7,566.1c-1.3-5.3-6-9.2-11.6-9.2c-5.6,0-10.3,3.9-11.6,9.2c-3.6,2.4-5.9,5.9-5.9,9.8 c0,7.3,7.8,13.1,17.5,13.1s17.5-5.9,17.5-13.1C-397.8,572-400.1,568.5-403.7,566.1z'/%3E%3Cline class='st6' x1='-415.3' y1='570.6' x2='-415.3' y2='600.1'/%3E%3Cline class='st6' x1='-423' y1='579.3' x2='-415.6' y2='584.9'/%3E%3Cline class='st6' x1='-407.9' y1='574.2' x2='-415.3' y2='580.9'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath class='st5' d='M2024.7,558.7c0,11.4-7.4,20.6-16.5,20.6c-9.1,0-16.5-9.2-16.5-20.6s7.4-45.6,16.5-45.6 C2017.3,513.2,2024.7,547.3,2024.7,558.7z'/%3E%3Cline class='st6' x1='2008.2' y1='540.4' x2='2008.2' y2='602.3'/%3E%3C/g%3E%3Cg%3E%3Cpath class='st5' d='M2057.7,567.8c0,9-5.9,16.3-13.1,16.3c-7.2,0-13.1-7.3-13.1-16.3c0-9,5.8-36.1,13.1-36.1 C2051.8,531.7,2057.7,558.8,2057.7,567.8z'/%3E%3Cline class='st6' x1='2044.6' y1='553.3' x2='2044.6' y2='602.3'/%3E%3C/g%3E%3Cg%3E%3Cpath class='st5' d='M1463.4,547.1c-2.1-8-9.5-13.9-18.4-13.9c-8.9,0-16.3,5.9-18.4,13.9c-5.8,3.7-9.5,9-9.5,15 c0,11,12.5,20,27.9,20s27.9-8.9,27.9-20C1472.9,556.1,1469.2,550.8,1463.4,547.1z'/%3E%3Cline class='st6' x1='1445' y1='554.3' x2='1445' y2='599.8'/%3E%3Cline class='st6' x1='1431.9' y1='568.5' x2='1445' y2='577.1'/%3E%3Cline class='st6' x1='1456.7' y1='559.8' x2='1445' y2='570.1'/%3E%3C/g%3E%3Cpath class='st5' d='M1750,603c0.6-0.9,0.9-1.9,0.9-3c0-3-2.4-5.4-5.4-5.4c-0.5,0-1,0.1-1.5,0.2c-1.7-5.1-6.6-8.9-12.3-8.9 c-1.5,0-2.9,0.3-4.2,0.7c-2-1.9-4.6-3.1-7.6-3.1c-5.4,0-9.8,3.9-10.8,8.9c-0.7-0.3-1.5-0.4-2.3-0.4c-3.7,0-6.7,3-6.7,6.7 c0,1.5,0.5,2.9,1.4,4.1H1750z'/%3E%3Cpath class='st5' d='M2102.2,603c0.5-0.9,0.9-2,0.9-3.2c0-3.2-2.3-5.8-5.1-5.8c-0.5,0-1,0.1-1.4,0.3c-1.6-5.6-6.2-9.7-11.7-9.7 c-1.4,0-2.8,0.3-4,0.8c-1.9-2.1-4.4-3.3-7.2-3.3c-5.1,0-9.3,4.2-10.2,9.7c-0.7-0.3-1.4-0.5-2.2-0.5c-3.5,0-6.4,3.3-6.4,7.3 c0,1.7,0.5,3.2,1.3,4.4H2102.2z'/%3E%3Cg%3E%3Cpath class='st5' d='M1514.6,566.1c-1.3-5.3-6-9.2-11.6-9.2c-5.6,0-10.3,3.9-11.6,9.2c-3.6,2.4-5.9,5.9-5.9,9.8 c0,7.3,7.8,13.1,17.5,13.1s17.5-5.9,17.5-13.1C1520.5,572,1518.2,568.5,1514.6,566.1z'/%3E%3Cline class='st6' x1='1503' y1='570.6' x2='1503' y2='600.1'/%3E%3Cline class='st6' x1='1495.3' y1='579.3' x2='1502.7' y2='584.9'/%3E%3Cline class='st6' x1='1510.3' y1='574.2' x2='1503' y2='580.9'/%3E%3C/g%3E%3Cg%3E%3Cpath class='st5' d='M344.6,566.1c-1.3-5.3-6-9.2-11.6-9.2c-5.6,0-10.3,3.9-11.6,9.2c-3.6,2.4-5.9,5.9-5.9,9.8 c0,7.3,7.8,13.1,17.5,13.1c9.7,0,17.5-5.9,17.5-13.1C350.5,572,348.2,568.5,344.6,566.1z'/%3E%3Cline class='st6' x1='333' y1='570.6' x2='333' y2='600.1'/%3E%3Cline class='st6' x1='325.3' y1='579.3' x2='332.7' y2='584.9'/%3E%3Cline class='st6' x1='340.4' y1='574.2' x2='333' y2='580.9'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E ");;
  background-size: 100% 100%;
  background-size: 100% auto;
  min-height: 500px;
  z-index: 3;
  position: relative;
  padding: 0 0 90px 0;
  // transform: translateY(-200px);
}

.container {
  width: 960px;
  margin: 0 auto;
  margin-top: 0px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  > div {
    width: 50%;
  }

  > div:nth-child(2) {
    margin-top: 50px;
  }
}

.title {
  font-size: 45.5px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 4.55px;
  text-align: left;
  color: #ed6d34;
  margin-bottom: 50px;
}
.info-item {
  margin-bottom: 30px;
  text-align: left; 
  display: flex;
  align-items: center;
  transition:all 0.3s; 
  color:#666;
  .icon{
    display: block;
    width: 1.2em;
    height: 1px;
    background: currentcolor;
    vertical-align: middle;
    margin: 0 0.5em 0 0;
  transition:all 0.3s; 
  }
  &:hover {
    color: #ed6d34;
  .icon{
    width: 1.5em;
  }
  }
}

.subtitle {
  display: flex;
  align-items: center;
  margin-bottom:0;
  span {
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: 0.7px;
    text-align: left;
    color: #000000;
  }
}
/*
.map_icon,
.mail_icon,
.phone_icon{
  width: 1.2em;
  height: 1.2em;
  margin: 0 0.5em -0.2em 0;
  display: inline-block;
}
.map_icon{
  background:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' fill='%23000'><path d='M757.47 537.473c32.419-47.473 52.104-105.368 52.104-167.894 0-164.418-133.156-297.576-297.576-297.576s-297.576 133.156-297.576 297.576c0 62.526 19.684 120.418 52.104 167.894l245.47 414.521 245.47-414.521zM512 191.266c98.418 0 178.313 79.895 178.313 178.313s-79.895 178.313-178.313 178.313c-98.418 0-178.313-79.895-178.313-178.313s79.895-178.313 178.313-178.313z'></path></svg>");
}
.mail_icon{
  background:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' fill='%23000'><path d='M73.143 146.285c-40.521 0-73.143 32.622-73.143 73.143v585.143c0 40.521 32.622 73.143 73.143 73.143h877.714c40.521 0 73.143-32.622 73.143-73.143v-585.143c0-40.521-32.622-73.143-73.143-73.143zM915.419 218.513c20.187 0 36.571 16.384 36.571 36.571 0 11.886-5.669 22.491-14.482 29.147l-402.359 329.216c-6.254 5.157-14.336 8.265-23.15 8.265s-16.896-3.109-23.223-8.302l-402.213-329.106c-8.448-6.766-13.824-17.079-13.824-28.635 0-20.187 16.347-36.535 36.535-36.571 9.033 0 17.262 3.255 23.662 8.667l379.063 310.089 379.136-310.126c7.696-6.597 18.437-8.985 24.283-9.216zM252.928 603.281l57.783 47.214-177.847 145.518c-37.815 31.232-84.443-25.819-46.299-56.649zM771.072 603.281l166.363 136.082c38.144 30.83-8.485 87.881-46.299 56.649l-177.847-145.518z'></path></svg>");
}
.phone_icon{
  background:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' fill='%23000'><path d='M716.8 599.77c-58.514 58.514-58.514 117.029-117.029 117.029s-117.029-58.514-175.543-117.029-117.029-117.029-117.029-175.543 58.514-58.514 117.029-117.029c58.514-58.514-117.029-234.057-175.543-234.057s-175.543 175.543-175.543 175.543c0 117.029 120.247 354.304 234.057 468.114s351.086 234.057 468.114 234.057c0 0 175.543-117.029 175.543-175.543s-175.543-234.057-234.057-175.543z'></path></svg>");
}
*/
.desc {
  display: inline-block;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 1.76px;
  text-align: left;
  color: rgba(88, 88, 88, 0.83);
  cursor: pointer;

  &:hover {
    color: #ed6d34;
  }
}

.button {
  width: 223px;
  height: 68px;
  position: relative;
  background-color: #ed6d34;
  margin: 0 auto;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 68px;
  letter-spacing: 0.8px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s;
  &::before {
    content: '';
    width: 40%;
    height: 100%;
    display: block;
    background: #fff;
    position: absolute;
    transform: skewX(-20deg);
    left: -10%;
    opacity: 0;
    top: 0;
    z-index: 5;
    transition: all 0.5s cubic-bezier(0.2, 0.95, 0.57, 0.99);
  }

  &.disabled {
    opacity: .7;
    cursor:auto;
  }
  &.disabled::before{display: none;
  }
  &.disabled:hover{
  background-color: #ed6d34;
  }

  &:hover{
  background-color: #e40;
  }
  &:hover::before {
    opacity: 1;
    width: 90%;
    left: 140%;
  }
}

@media screen and (max-width: 767px) {
  .container {
    width: 100vw;
    flex-wrap: wrap;
    > div {
      width: 85%;
      margin: 0 auto;
    }
    .title {
      font-size: 45.5px;
    }
  }
}
</style>

<script>
// import Order from '@/components/Order.vue'
// import HouseInfo from '@/components/HouseInfo.vue'
import CallDialog from '@/components/Dialog/Call'
import MapDialog from '@/components/Dialog/Map'
import EmailDialog from '@/components/Dialog/Email'
import { isMobile, isTablet } from '@/utils'
import VueRecaptcha from 'vue-recaptcha'
import info from '@/info'

export default {
  name: 'contactSection',
  components: {
    // Order,
    // HouseInfo,
    CallDialog,
    MapDialog,
    EmailDialog,
    VueRecaptcha,
  },

  data() {
    return {
      isMobile,
      form: {
        name: '',
        phone: '',
        email: '',
        city: '',
        area: '',
        msg: '',
      },
      isSubmit: false,
      isShowCallDialog: false,
      isShowMapDialog: false,
      isShowEmailDialog: false,
      isVerify: false, // google 機器人驗證
      info,
      hasName: false,
      hasCompany: false,
      hasEmail: false,
      hasPhone: false,
    }
  },

  methods: {
    alertValidate() {
      const h = this.$createElement
      this.$notify({
        title: '請填寫必填欄位',
        message: h(
          'i',
          { style: 'color: #82191d' },
          '「姓名、 信箱」是必填欄位',
        ),
      })
    },

    showCallDialog() {
      this.isShowCallDialog = true
    },

    showMapDialog() {
      this.isShowMapDialog = true
    },

    showEmailDialog() {
      this.isShowEmailDialog = true
    },


    handleName(string) {
      if (string.length > 0) {
        this.hasName = true
      } else {
        this.hasName = false
      }
    },
    handleCompany(string) {
      if (string.length > 0) {
        this.hasCompany = true
      } else {
        this.hasCompany = false
      }
    },
    handleEmail(string) {
      if (string.length > 0) {
        this.hasEmail = true
      } else {
        this.hasEmail = false
      }
    },
    handlePhone(string) {
      if (string.length > 0) {
        this.hasPhone = true
      } else {
        this.hasPhone = false
      }
    },

    submit() {
      if (this.isSubmit) return
      if (!this.isVerify) return
      this.isSubmit = true
      if (!this.form.name || !this.form.email) {
        this.alertValidate()
        this.isSubmit = false
        return
      }
      const urlParams = new URLSearchParams(window.location.search)
      const utmSource = urlParams.get('utm_source')
      const utmMedium = urlParams.get('utm_medium')
      const utmContent = urlParams.get('utm_content')
      const utmCampaign = urlParams.get('utm_campaign')
      const formData = new FormData()
      formData.append('name', this.form.name)
      formData.append('company', this.form.company)
      formData.append('phone', this.form.phone)
      formData.append('email', this.form.email)
      formData.append('title', this.form.title)
      formData.append('msg', this.form.msg)
      formData.append('utm_source', utmSource)
      formData.append('utm_medium', utmMedium)
      formData.append('utm_content', utmContent)
      formData.append('utm_campaign', utmCampaign)
      const time = new Date()
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()
      const hour = time.getHours()
      const min = time.getMinutes()
      const sec = time.getSeconds()
      const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`
      fetch(
        `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${this.form.name}&company=${this.form.company}&phone=${this.form.phone}&email=${this.form.email}&title=${this.form.title}&msg=${this.form.msg}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_campaign=${utmCampaign}&date=${date}&campaign_name=${info.caseName}
      `,
        {
          method: 'GET',
        },
      ).then(() => {
        fetch('contact-form.php', {
          method: 'POST',
          body: formData,
        }).then(response => {
          this.isSubmit = false
          if (response.status === 200) {
            window.location.href = 'formThanks'
          }
        })
      })
    },
  },
}
</script>
