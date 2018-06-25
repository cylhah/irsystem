<template>
<el-row>
    <el-col :span="2" :offset="2">
        <article-side :articleId="articleId"></article-side>
    </el-col>
    <el-col :span="12" >
        <article-text :articleId="articleId"></article-text>
    </el-col>
</el-row>
</template>

<script>
import articleSide from '../articleSide.vue'
import articleText from '../articleText.vue'
import top from '../top.vue'

export default {
    data () {
        return {
            articleId : this.$route.params.articleId
        }
    },
    components : {
        articleSide,
        articleText,
        top
    },
    props: ['userId']
}
</script>

<style>

</style>

