<template>
  <div class="dialog-content">
    <font-awesome-icon icon="map-marker-alt" />
    <div class="dialog-desc">電子信箱</div>
    <div class="info">{{email}}</div>
    <a class="cta" :href="`mailto:${email}`" target="_blank">發送信件</a>
  </div>
</template>

<script>
export default {
  name: 'EmailDialog',
  components: {},
  props: ['email'],

  methods: {
  },
}
</script>
