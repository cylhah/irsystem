<template>
    <div class="main">
        <classification :activeIndex="activeIndex"></classification>
        
        <div class="mid">
            <hot-spot></hot-spot>
            <div class="blogList">
                <blog v-for="blog in blogList" :key="blog.blogId" :blog="blog"></blog>
            </div>
        </div>
        <div class="right">
            <todayRec :recList="blogList"></todayRec>
        </div>
    </div>
</template>

<script>
import hotSpot from '../hotSpot.vue'
import classification from '../classification.vue'
import blog from '../blog.vue'
import todayRec from '../todayRec.vue'
export default {
  components: {
    hotSpot,classification,blog,todayRec
  },
  data(){
    return {
      type: this.$route.params.type,
      activeIndex: '1',
      screenWidth: null,
      blogList: [
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
      ]
    }
  },
  methods: {
    getActiveIndex(){
        let dict = {
        rec: '1',
        hot: '2',
        technology: '3'
      }
      this.activeIndex = dict[this.type]
      if(!this.type){
        this.activeIndex = '1'
      }
    },
    getPostList(){
      this.$http.get(`postlist/${this.type}`).then((response)=>{
        this.blogList = response.data.blogList
      },(response)=>{
        console.log('请求失败!')
      })
    }
  },
  mounted(){
    this.getActiveIndex()
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


