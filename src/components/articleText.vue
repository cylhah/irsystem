<template>
    <div class="articleText">
        <div class="articleHeader">
            <div>
                <i></i>
                <a href="#/" class="headA">首页</a> /
                <a :href="`#/postlist/${article.type}`" class="headA">{{article.type}}</a>
            </div>
            <h1>{{article.title}}</h1>

            <el-rate
            v-model="article.articleScore"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
            >

            </el-rate>
            <br>
            <div>
                <small class="titleSmall">{{article.author}}</small>
                <small class="titleSmall">{{article.time}}</small>             
            </div>
        </div>
        <div class="articleSection">
            <p v-html="article.content">
            </p>
            <img :src="article.imgUrl" alt="" id="articleImg">
        </div>
        <div class="articleFooter">
            <p>
                来源 :{{article.source}}
            </p>
            <el-row class="footerBiaoQian">
                <el-col :span="6">
                    <i class="iconfont icon-biaoqian"></i>
                    <ul class="listItem">
                        <li class="liTag" v-for="(item,index) in article.keywordWeights" :key="index">
                            / <a class="biaoQianA" :href="`#/postlist/search/${item.keyword}`">{{item.keyword}}</a>
                        </li>
                    </ul>
                </el-col>
                <el-col class="score" :span="6" :offset="18">
                    <span>您的评分</span>
                    <el-rate
                    class="inline"
                    v-model="yourScore"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                    >
                    </el-rate>
                </el-col>
            </el-row>
        </div>
        <comment :article="articleId" :userId="userId"></comment>
        <h3>相关推荐</h3>
        <blog v-for="blog in blogList" :key="blog.blogId" :article="blog" :keyword="keyword"></blog>
    </div>
</template>

<script>
import comment from './comment.vue'
import blog from './blog.vue'

export default {
    data () {
        return {
            yourScore:null,
            keyword:'世界杯',
            page:0,
            blogList: [
        
            ]
        }
    },
    components : {
        comment,
        blog
    },
    methods : {
        
    },
    props : ['articleId','article','userId']
}
</script>

<style scoped>
.articleText{
    background-color: white;
    padding: 15px
}

.headA{
    text-decoration: none;
    color: black
}

.headA:hover{
    color: rgb(0, 67, 190)
}

.titleSamll{
    color: rgba(128, 128, 128, 0.521)
}

#articleImg{
    width: 80%;
    padding-top: 10px;
    padding-left: 10%;
    padding-right: 10%
}

.articleFooter p{
    font-weight: bold
}

.liTag{
    list-style: none;
    display: inline-block;
    width: auto
}

.listItem{
    display: inline-block;
}

.biaoQianA{
    text-decoration: none;
    color: rgb(0, 67, 190)
}
.inline{
    display: inline;
}
.score{
    margin-right: 6px
}
</style>
