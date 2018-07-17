<template>
<div >
    <top :userId="userId"></top>
    <el-row class="maxWidth">
        <el-col :span="2" :offset="1">
            <article-side :articleId="articleId" :article="article"></article-side>
        </el-col>
        <el-col :span="16" >
            <article-text :articleId="articleId" :article="article" :userId="userId"></article-text>
        </el-col>
        <el-col :span="4" :offset="1">
            <today-rec :recList="blogList"></today-rec>
        </el-col>
    </el-row>
</div>
</template>

<script>
import articleSide from '../articleSide.vue'
import articleText from '../articleText.vue'
import todayRec from '../todayRec.vue'
import top from '../top.vue'

export default {
    data () {
        return {
            articleId : this.$route.params.articleId,
            article:{},
            blogList: [
        
      ]
        }
    },
    components : {
        articleSide,
        articleText,
        top,
        todayRec
    },
    props: ['userId'],
    created(){
        this.$http.get(`/api/article/${this.articleId}`).then( (response)=>{
            this.article = response.data
        },(response)=>{
            console.log('连接失败！')
        })
    },
}
</script>

<style scoped>
.maxWidth{
    width: 1360px;
    margin-top: 50px
}
.bg-white{
    background: white
}
</style>

