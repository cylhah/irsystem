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
        <blog v-for="blog in blogList" :key="blog.blogId" :blog="blog" :keyword="keyword"></blog>
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
             blogList: [
        {
          blogId: 13,
          author: '新华网',
          title: 'request中跟路径有关的api的分析',
          time: '2018-06-10 22:14:17',
          content: '主教练塔瓦雷斯，这位现年71岁的老帅自2006年乌拉圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
          imgUrl: '/static/people059.png',
          pageView: 1325,
          isCollect: true,
          chooseGood: true,
          chooseBad: false
        },
        {
          blogId: 14,
          author: '新华网',
          title: '这是第2篇文章！！！',
          time: '2018-06-10 22:14:17',
          content: '这是第二篇文章！！！！圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
          imgUrl: '/static/people025.jpg',
          pageView: 4396,
          isCollect: true,
          chooseGood: false,
          chooseBad: false
        },
        {
          blogId: 15,
          author: '新华网',
          title: '这是第三篇文章！！！',
          time: '2018-06-10 22:14:17',
          content: '这是第三篇文章！！！6年乌拉圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
          imgUrl: '/static/people062.png',
          pageView: 1554,
          isCollect: true,
          chooseGood: false,
          chooseBad: true
        }
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
