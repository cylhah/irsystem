<template>
    <div>
        <div class="blogList">
            <blog v-for="blog in blogList" :key="blog.blogId" :blog="blog"></blog>
        </div>
    </div>
</template>

<script>
import blog from '../blog.vue'

export default {
    components : {
        blog
    },
    data () {
        return {
            blogList: [
        {
          blogId: 13,
          author: '新华网',
          title: 'request中跟路径有关的api的分析',
          time: '2018-06-10 22:14:17',
          content: '主教练塔瓦雷斯，这位现年71岁的老帅自2006年乌拉圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
          imgUrl: './static/img/people059.png',
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
          imgUrl: './static/img/people025.jpg',
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
          imgUrl: './static/img/people062.png',
          pageView: 1554,
          isCollect: true,
          chooseGood: false,
          chooseBad: true
        }
      ]
        }
    }
}
</script>

<style scoped>

</style>


