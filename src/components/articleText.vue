<template>
    <div class="articleText">
        <div class="articleHeader">
            <div>
                <i></i>
                <a href="#/" class="headA">首页</a> /
                <a :href="`#/postlist/${article.type}`" class="headA">{{article.type}}</a>
            </div>
            <h1>{{article.title}}</h1>
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
            <div class="footerBiaoQian">
                <i class="iconfont icon-biaoqian"></i>
                <ul class="listItem">
                    <li class="liTag" v-for="(item,index) in article.keywordWeights" :key="index">
                        / <a class="biaoQianA" :href="`#/postlist/search/${item.keyword}`">{{item.keyword}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <comment :article="articleId"></comment>
    </div>
</template>

<script>
import comment from './comment.vue'

export default {
    data () {
        return {
            
        }
    },
    components : {
        comment
    },
    methods : {
        
    },
    props : ['articleId','article']
}
</script>

<style scoped>
.articleText{
    background-color: white;
    margin-top: 60px;
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
    width: 60%;
    padding-top: 10px;
    padding-left: 20%
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
</style>
