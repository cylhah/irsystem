<template>
    <div>
      <top></top>
      <div class="main">
        <classification :activeIndex="'1'"></classification>
        <div class="mid">
            <div class="blogList">
                <blog v-for="(article,index) in searchList" :key="index" :article="article" :keyword="keyword"></blog>
            </div>
        </div>
        <div class="right">
            <todayRec></todayRec>
        </div>
      </div>
    </div>
</template>

<script>
import blog from '../blog.vue'
import todayRec from '../todayRec.vue'
import classification from '../classification.vue'
import top from '../top.vue'
export default {
  components: {
    blog,todayRec,classification,top
  },
  data(){
    return {
      searchList: [
          {
          articleId: 13,
          author: '新华网',
          articleTitle: 'request中跟路径有关的api的分析',
          articleTime: '2018-06-10 22:14:17',
          articleText: '主教练塔瓦雷斯，这位现年71岁的老帅自2006年乌拉圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
          articlePicUrl: 'people059.png',
          clickNumber: 1325,
        },
        {
          articleId: 14,
          author: '新华网',
          articleTitle: '这是第2篇文章！！！',
          articleTime: '2018-06-10 22:14:17',
          articleText: '这是第二篇文章！！！！圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
          articlePicUrl: 'people025.jpg',
          clickNumber: 4396,
        },
        {
          articleId: 15,
          author: '新华网',
          articleTitle: '这是第三篇文章！！！',
          articleTime: '2018-06-10 22:14:17',
          articleText: '这是第三篇文章！！！6年乌拉圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
          articlePicUrl: 'people062.png',
          clickNumber: 1554,
        }
      ],
      keyword: this.$route.params.keyword
    }
  },
  methods: {
    search(){
        this.$http.get(`postlist/search/${this.keyword}`).then((response)=>{
            this.searchList = response.data
        },(response)=>{
            console.log('请求失败!')
        })
    }
  },
  mounted(){
    //   this.search()
  }
}
</script>

<style scoped>
.main{
  position: relative;
  width: 1460px;
  margin: 0 auto;
  top: 20px;
}
.classification{
  position: absolute;
}
.mid{
  position: absolute;
  width: 1000px;
  left: 120px;
}
.right{
  position: absolute;
  left: 1150px;
}
</style>


