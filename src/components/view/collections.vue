<template>
    <div>
        <div class="blogList">
            <blog v-for="(article,index) in collectionList" :key="index" :article="article" :userId="userId"></blog>
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
            collectionList: []
        }
    },
    props: ['userId'],
    methods: {
        getCollectionList(){
            this.$http.get(`/api/collection/userId/${this.userId}`).then( (response)=>{
                this.collectionList = response.data
                console.log(this.collectionList)
            },(response)=>{
                console.log('连接失败！')
            })
        }
    },
    created(){
        this.getCollectionList()
    }
}
</script>

<style scoped>

</style>


