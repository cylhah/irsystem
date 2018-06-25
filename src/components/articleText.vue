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
    </div>
</template>

<script>
export default {
    data () {
        return {
            article : {
                blogId: 13,
                author: '新华网',
                type:'体育',
                title: 'request中跟路径有关的api的分析',
                time: '2018-06-10 22:14:17',
                content: '<p>主教练塔瓦雷斯，这位现年71岁的老帅自2006年乌拉圭无缘世界杯后接过球队教鞭。</P><p>至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。</p><p>2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。</p>',
                imgUrl: '/static/people059.png',
                source:'黑龙江交通广播',
                keywordWeights:[{keyword:'世界杯',keywordWeight: 0.6},{keyword:'塔瓦雷斯',keywordWeight:'0.2'}],
                pageView: 1325,
                isCollect: false,
                chooseGood: true,
                chooseBad: false
            }
        }
    },
    components : {

    },
    methods : {

    },
    props : ['articleId']
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
