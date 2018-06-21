<template>
<div class="aticleSideWidth">
  <div class="sideButton"><el-button type="info" circle><i class="iconfont icon-comment"></i></el-button><span class="sideSpan">119</span></div>
  <hr>
  <div class="sideButton"><el-button type="warning" circle><i class="iconfont icon-shoucang"></i></el-button><span class="sideSpan">收藏</span></div>
  <div class="sideButton"><el-button type="success" circle><i class="iconfont icon-dianzan"></i></el-button><span class="sideSpan">点赞</span></div>
  <div class="sideButton"><el-button type="danger" circle><i class="iconfont icon-cai"></i></el-button><span class="sideSpan">点踩</span></div>
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
}

.sideSpan{
  padding-left: 9px;

}

.aticleSideWidth{
  width: 90px;
}
</style>