<template>
<div>
    <top></top>
    <el-row>
        <el-col :span="2" :offset="2">
            <article-side :articleId="articleId" :article="article"></article-side>
        </el-col>
        <el-col :span="12" >
            <article-text :articleId="articleId" :article="article" :userId="userId"></article-text>
        </el-col>
    </el-row>
</div>
</template>

<script>
import articleSide from '../articleSide.vue'
import articleText from '../articleText.vue'
import top from '../top.vue'

export default {
    data () {
        return {
            articleId : this.$route.params.articleId,
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
        articleSide,
        articleText,
        top
    },
    props: ['userId']
}
</script>

<style>

</style>

