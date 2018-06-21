<template>
  <div class="app">
    <top></top>
      <router-view :key="key"></router-view>
  </div>
</template>

<script>
import top from './components/top.vue'
export default {
  components: {
    top
  },
  computed: {
    key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
    }
 },
  name: 'App'
}
</script>

<style>
body{
  background: rgb(245,246,247);
  margin: 0;
}
.app{
  width: 100%;
  height: 100%;
}
</style>
