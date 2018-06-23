<template>
<el-row>
    <top></top>
    <el-col :span="4" :offset="2">
        <article-side :articleId="articleId"></article-side>
    </el-col>
</el-row>
</template>

<script>
import articleSide from '../articleSide.vue'
import top from '../top.vue'

export default {
    data () {
        return {
            articleId : this.$route.params.articleId
        }
    },
    components : {
        articleSide,top
    },
    props: ['userId']
}
</script>

<style>

</style>

