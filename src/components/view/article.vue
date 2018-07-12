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
            article : {
                blogId: 13,
                articleScore : 3.7,
                author: '新华网',
                type:'体育',
                title: 'request中跟路径有关的api的分析',
                time: '2018-06-10 22:14:17',
                content: '<p>主教练塔瓦雷斯，这位现年71岁的老帅自2006年乌拉圭无缘世界杯后接过球队教鞭。</P><p>至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。</p><p>2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。</p>',
                imgUrl: './static/img/people059.png',
                source:'黑龙江交通广播',
                keywordWeights:[{keyword:'世界杯',keywordWeight: 0.6},{keyword:'塔瓦雷斯',keywordWeight:'0.2'}],
                pageView: 1325,
                isCollect: false,
                chooseGood: true,
                chooseBad: false
            },
            blogList: [
        {
          blogId: 13,
          author: '新华网',
          title: 'request中跟路径有关的api的分析',
          time: '2018-06-10 22:14:17',
          content: '主教练塔瓦雷斯，这位现年71岁的老帅自2006年乌拉圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
          imgUrl: './static/img/people059.png',
          pageView: 1325,
          isCollect: false,
          chooseGood: true,
          chooseBad: false
        },
        {
          blogId: 14,
          author: '新华网',
          title: '这是第2篇文章！！！',
          time: '2018-06-10 22:14:17',
          content: '这是第二篇文章！！！！圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
          imgUrl: './static/img/people025.jpg',
          pageView: 4396,
          isCollect: false,
          chooseGood: false,
          chooseBad: false
        },
        {
          blogId: 15,
          author: '新华网',
          title: '这是第三篇文章！！！',
          time: '2018-06-10 22:14:17',
          content: '这是第三篇文章！！！6年乌拉圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
          imgUrl: './static/img/people062.png',
          pageView: 1554,
          isCollect: true,
          chooseGood: false,
          chooseBad: true
        }
      ]
        }
    },
    created(){
        // this.$http.get(`/article/${this.articleId}`).then( (response)=>{
        //     this.article = response.data
        // },(response)=>{
        //     console.log('连接失败！')
        // })
    },
    components : {
        articleSide,
        articleText,
        top,
        todayRec
    },
    props: ['userId']
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

