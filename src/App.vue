<template>
  <div id="app">
    <Loading :loading="load" />
    <AstrictMask />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:700&subset=chinese-traditional');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:500,700&subset=chinese-traditional');
</style>

<script>
import AstrictMask from '@/components/AstrictMask'
import Loading from '@/components/Loading.vue'
import config from '@/lib/aos/src/js/aos-config'

export default {
  name: 'App',
  components: {
    AstrictMask,
    Loading
  },

  data() {
    return {
      load: true,
    }
  },

  created() {
    window.addEventListener(config.startEvent, (event) => {
      this.load = false
    })
  },
}
</script>
