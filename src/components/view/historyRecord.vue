<template>
    <div>
        <div class="blogList">
            <blog v-for="(article,index) in historyList" :key="index" :article="article" :userId="userId"></blog>
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
            historyList: []
        }
    },
    props: ['userId'],
    methods: {
        getHistoryList(){
            this.$http.get(`/api/historyRecord/userId/${this.userId}`).then( (response)=>{
                this.historyList = response.data
            },(response)=>{
                console.log('连接失败！')
            })
        }
    },
    created(){
        this.getHistoryList()
    }
}
</script>

<style scoped>

</style>


