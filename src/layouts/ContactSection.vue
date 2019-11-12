<template>
  <div class="contact" id="contact">
    <!-- <Order /> -->
    <!-- <HouseInfo /> -->
  </div>
</template>
<style lang="scss" scoped>
.contact {
  &:before {
    content: '';
    width: 100%;
    height: 205px;
    background: #fff;
    -webkit-transform: skewY(5deg);
    transform: skewY(5deg);
    position: absolute;
    top: -75px;
    left: 0;
    z-index: -1;
  }

  background: #fff;
  min-height: 500px;
  padding-top: 80px;
  padding-bottom: 50px;
  z-index: 2;
  position: relative;
}
</style>

<script>
import Order from '@/components/Order.vue'
import HouseInfo from '@/components/HouseInfo.vue'

export default {
  name: 'contactSection',
  components: {
    Order,
    HouseInfo,
  },

  methods: {},
}
</script>
