<template>
    <div>
        <top></top>
        <div class="main">
            <pc-nav :userInfo="userInfo"></pc-nav>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import top from '../top.vue'
import pcNav from '../pcNav.vue'
export default {
    components: {
        top,pcNav
    },
    data(){
        return {
            userInfo: {
                userId: this.$route.params.userId,
                userName: 'cylhah',
                userHobby: ['人工智能', '机器学习', '算法'],
                collections: [
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
                    }
                ],
                history: [
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
                    }
                ],
                comment: [

                ]
            }
        }
    }
}
</script>

<style scoped>
.main{
    width: 1300px;
    position: relative;
    top: 2px;
    margin: 0 auto;
}
</style>


