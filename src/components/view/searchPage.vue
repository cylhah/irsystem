<template>
    <div class="main">
        <classification :activeIndex="'1'"></classification>
        <div class="mid">
            <div class="blogList">
                <blog v-for="blog in searchList" :key="blog.blogId" :blog="blog" :keyword="keyword"></blog>
            </div>
        </div>
        <div class="right">
            <todayRec :recList="recList"></todayRec>
        </div>
    </div>
</template>

<script>
import blog from '../blog.vue'
import todayRec from '../todayRec.vue'
import classification from '../classification.vue'
export default {
  components: {
    blog,todayRec,classification
  },
  data(){
    return {
      searchList: [
          {
          blogId: 13,
          author: '新华网',
          title: 'request中跟路径有关的api的分析',
          time: '2018-06-10 22:14:17',
          content: '主教练塔瓦雷斯，这位现年71岁的老帅自2006年乌拉圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
          imgUrl: '/static/people059.png',
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
          imgUrl: '/static/people025.jpg',
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
          imgUrl: '/static/people062.png',
          pageView: 1554,
          isCollect: true,
          chooseGood: false,
          chooseBad: true
        }
      ],
      recList: [
          {
          blogId: 13,
          author: '新华网',
          title: 'request中跟路径有关的api的分析',
          time: '2018-06-10 22:14:17',
          content: '主教练塔瓦雷斯，这位现年71岁的老帅自2006年乌拉圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
          imgUrl: '/static/people059.png',
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
          imgUrl: '/static/people025.jpg',
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
          imgUrl: '/static/people062.png',
          pageView: 1554,
          isCollect: true,
          chooseGood: false,
          chooseBad: true
        }
      ],
      keyword: this.$route.params.keyword
    }
  },
  methods: {
    search(){
        this.$http.get(`postlist/search/${this.keyword}`).then((response)=>{
            this.searchList = response.data.searchList
        },(response)=>{
            console.log('请求失败!')
        })
    },
    getRecList(){

    }
  },
  mounted(){
    //   this.getRecList()
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
  left: 120px;
}
.right{
  position: absolute;
  left: 1150px;
}
</style>


