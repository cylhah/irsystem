<template>
    <el-row>
        <el-col class="hotSpot">
            <el-carousel :interval="4000" indicator-position="outside" height="300px">
                <el-carousel-item v-for="(item,index) in hotList" :key="index">
                    <a :href="`#/article/${item.blogId}`"><img :src="item.imgUrl" class="hotImage"></a>
                    <h1>{{item.title}}</h1>
                </el-carousel-item>
            </el-carousel>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data(){
        return{
            hotList:[
                {
                    blogId: 13,
                    author: '新华网',
                    title: 'CSDN日报180607——《时代变了》',
                    time: '2018-06-10 22:14:17',
                    content: '主教练塔瓦雷斯，这位现年71岁的老帅自2006年乌拉圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
                    imgUrl: './static/img/hot1.jpg'
                },
                {
                    blogId: 14,
                    author: '新华网',
                    title: 'request中跟路径有关的api的分析',
                    time: '2018-06-10 22:14:17',
                    content: '主教练塔瓦雷斯，这位现年71岁的老帅自2006年乌拉圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
                    imgUrl: './static/img/hot2.png'
                },
                {
                    blogId: 15,
                    author: '新华网',
                    title: 'Java程序员月薪达到三万，需要技术水平达到什么程度？（文末送书）',
                    time: '2018-06-10 22:14:17',
                    content: '主教练塔瓦雷斯，这位现年71岁的老帅自2006年乌拉圭无缘世界杯后接过球队教鞭，至今已率队连续3次闯入决赛圈，并在2010年获得第4名佳绩。2011年，他还曾率领“天蓝军团”夺取美洲杯冠军。',
                    imgUrl: './static/img/hot3.jpg'
                }
            ]
        }
    }
}
</script>

<style scoped>
.el-carousel__item h1 {
    position: absolute;
    bottom: 0;
    left: 5%;
    color: white;
    font-size: 25px;
}
.hotImage{
    width: 100%;
}
.hotSpot{
    width: 1000px;
}
</style>


