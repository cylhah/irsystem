<template>
    <div>
      <top :userId="userId"></top>
      <div class="main">
        <classification :activeIndex="activeIndex"></classification>
        <div class="mid">
            <hot-spot></hot-spot>
            <div class="blogList">
                <blog v-for="(article,index) in articleList" :key="index" :article="article" :userId="userId"></blog>
            </div>
        </div>
        <div class="right">
            <todayRec></todayRec>
        </div>
      </div>
    </div>
</template>

<script>
import hotSpot from '../hotSpot.vue'
import classification from '../classification.vue'
import blog from '../blog.vue'
import todayRec from '../todayRec.vue'
import top from '../top.vue'
export default {
  components: {
    hotSpot,classification,blog,todayRec,top
  },
  data(){
    return {
      type: this.$route.params.type,
      activeIndex: '1',
      articleList: []
    }
  },
  props : ['userId'],
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
      let dict = {
        technology: '1',
        car: '2',
        economy: '3',
        entertainment: '4',
        sport: '5',
        fun: '7',
        hot: '-1'
      }
      let typeId = dict[this.type]
      if(typeId==-1){
        let now = new Date()
        let eDate = new Date()
        eDate.setDate(now.getDate()+1)
        let sDate = new Date()
        sDate.setDate(now.getDate()-10)
        let eDateStr = eDate.getFullYear()+'-'+(eDate.getMonth()+1)+'-'+eDate.getDate()
        let sDateStr = sDate.getFullYear()+'-'+(sDate.getMonth()+1)+'-'+sDate.getDate()
        this.$http.post(`/api/article/date/top`,{
            sDate: sDateStr,
            eDate: eDateStr,
            topNum: 10
        },{
            emulateJSON: true
        }).then( (response)=>{
            this.articleList = response.data
        },(response)=>{
            console.log('连接失败！')
        })
      }
      else if (!this.type){
        let formData = new FormData()
        formData.append("userId",2)
        this.$http.post(
          '/api/recommend/complex',
          formData
        ).then( (response) =>{
          if(response.data!=null){
            this.articleList = response.data
          }
        },(response) =>{
          console.log("推荐失败!")
        })
      }
      else {
        this.$http.get(`/api/article/typeId/${typeId}/topNum/10`).then( (response)=>{
            this.articleList = response.data
        },(response)=>{
            console.log('连接失败！')
        })
      }
    }
  },
  created(){
    this.getActiveIndex()
    this.getPostList()
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
  width: 1000px;
}
.right{
  position: absolute;
  left: 1150px;
}
</style>


