<template>
<div class="aticleSideWidth">
  <div class="sideButton"><el-button  circle><i class="iconfont icon-pinglun"></i></el-button></div>
  <hr>
  <div class="sideButton"><el-button  circle><i class="iconfont icon-shoucang"></i></el-button></div>
  <div class="sideButton"><el-button  circle><i class="iconfont icon-dianzan"></i></el-button></div>
  <div class="sideButton"><el-button  circle><i class="iconfont icon-cai"></i></el-button></div>
</div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },
  methods : {
    collect () {

    }
  },
  props : ['articleId']
}
</script>

<style scoped>
.sideButton{
  margin-top: 9px;
  text-align: center
}

.aticleSideWidth{
  width: 90px;
  margin-top: 60px
  
}
</style>