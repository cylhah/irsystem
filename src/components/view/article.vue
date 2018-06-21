<template>
<el-row>
  <el-col :span="4" :offset="2">
    <article-side :articleId="articleId"></article-side>
  </el-col>
</el-row>
</template>

<script>
import articleSide from '../articleSide.vue'

export default {
    data () {
        return {
            articleId : this.$route.params.articleId
        }
    },
    components : {
        articleSide
    },
    props: ['userId']
}
</script>

<style>

</style>

