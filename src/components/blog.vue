<template>
    <div class="blog">
        <el-row class="content">
            <el-col :span="8" class="cover">
                <a :href="articleUrl">
                    <img :src="`./static/img/${article.articlePicUrl}`" class="blogImg">
                </a>
            </el-col>
            <el-col :span="15" class="rightPart">
                <p class="blogTitle">
                    <a :href="articleUrl" v-html="highlightTitle"></a>
                </p>
                <p class="partContent" v-html="highlightPartContent">
                </p>
                <p class="info">
                    <label class="good"
                            :class="{chooseGood:up}"
                            @click="good"><i class="iconfont icon-good"></i>{{article.articleUpNumber}}</label>
                    <label class="bad"
                            :class="{chooseBad:down}"
                            @click="bad"><i class="iconfont icon-bad"></i></label>
                    <label class="collect"
                            @click="collect">
                        <i class="iconfont"
                            :class="{'icon-xihuan-xianxing': !collected,'icon-xihuan': collected}"
                            ></i>收藏
                    </label>
                    <label class="collect"><i class="iconfont icon-fenxiang"></i>分享</label>
                    <label class="common">{{getTime}}</label>
                    <label class="common"><i class="iconfont icon-liulan"></i>{{article.clickNumber}}</label>
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            collected: false,
            up: false,
            down: false,
            upOrDown: 0
        }
    },
    methods: {
        collect(){
            if (!this.collected) {
                this.$http.post(`/api/collection/userId/${this.userId}/articleId/${this.article.articleId}`).then( (response)=>{
                    if (response.data==1) {
                        this.collected = true
                    }
                },(response)=>{
                    console.log('连接失败！')
                })
            }
            else {
                this.$http.delete(`/api/collection/userId/${this.userId}/articleId/${this.article.articleId}`).then( (response)=>{
                    if (response.data==1) {
                        this.collected = false
                    }
                },(response)=>{
                    console.log('连接失败！')
                })
            }
        },
        good(){
            if (this.upOrDown==1){
                this.$http.delete(`/api/upAndDown/userId/${this.userId}/articleId/${this.article.articleId}`).then( (response)=>{
                if (response.data==1) {
                    this.article.articleUpNumber -= 1
                    this.up = false
                    this.upOrDown = 0
                }
                },(response)=>{
                    console.log('连接失败！')
                })
            }
            else {
                this.$http.post(`/api/upAndDown/userId/${this.userId}/articleId/${this.article.articleId}/upOrDown/1`).then( (response)=>{
                if (response.data==1) {
                    this.article.articleUpNumber += 1
                    this.up = true
                    this.upOrDown = 1
                    this.down = false
                }
                },(response)=>{
                    console.log('连接失败！')
                })
            }
        },
        bad(){
            if (this.upOrDown==2){
                this.$http.delete(`/api/upAndDown/userId/${this.userId}/articleId/${this.article.articleId}`).then( (response)=>{
                if (response.data==1) {
                    this.down = false
                    this.upOrDown = 0
                }
                },(response)=>{
                    console.log('连接失败！')
                })
            }
            else {
                this.$http.post(`/api/upAndDown/userId/${this.userId}/articleId/${this.article.articleId}/upOrDown/2`).then( (response)=>{
                if (response.data==1) {
                    this.down = true
                    this.upOrDown = 2
                    this.up = false
                }
                },(response)=>{
                    console.log('连接失败！')
                })
            }
        },
        getCollection(){
            this.$http.get(`/api/collection/userId/${this.userId}/articleId/${this.article.articleId}`).then( (response)=>{
                let type = response.data
                if (type==1){
                    this.collected = true
                }
            },(response)=>{
                console.log('连接失败！')
            })
        },
        getUpAndDown(){
            this.$http.get(`/api/upAndDown/userId/${this.userId}/articleId/${this.article.articleId}`).then( (response)=>{
                this.upOrDown = response.data
                let type = response.data
                if (type==1){
                    this.up = true
                }
                else if (type==2){
                    this.down = true
                }
            },(response)=>{
                console.log('连接失败！')
            })
        }
    },
    computed: {
        highlightPartContent(){
            let part = this.article.articleText.substr(0,50)+'...'
            if(this.keyword){
                let regex = new RegExp(this.keyword,'g')
                let replace = `<span style="color:red">${this.keyword}</span>`
                return part.replace(regex,replace)
            }
            else {
                return part
            }
        },
        highlightTitle(){
            if(this.keyword){
                let regex = new RegExp(this.keyword,'g')
                let replace = `<span style="color:red">${this.keyword}</span>`
                return this.article.articleTitle.replace(regex,replace)
            }
            else {
                return this.article.articleTitle
            }
        },
        getTime(){
            let nowTimeStamp = Date.parse(new Date())
            let date = new Date(this.article.articleTime)
            let time = Date.parse(date)
            let usedTime = nowTimeStamp-time
            let days = Math.floor(usedTime/(24*3600*1000))
            let hours = Math.floor(usedTime/(3600*1000))
            let min = Math.floor(usedTime/(60*1000))
            if(days>0) {
                return '- '+days+'天前'
            }
            else if(hours>0){
                return '- '+hours+'小时前'
            }
            else {
                return '- '+min+'分钟前'
            }
        },
        articleUrl(){
            return `#/article/${this.article.articleId}` 
        }
    },
    props: ['article','keyword','userId'],
    created(){
        if(this.userId) {
            this.getCollection()
            this.getUpAndDown()
        }
    }
}
</script>

<style scoped>
.good{
    padding: 10px;
    background: rgb(230, 243, 255);
    border-radius: 5px;
    cursor: pointer;
    color: rgb(21, 134, 247);
}
.chooseGood{
    background: rgb(0, 132, 255);
    color: white;
}
.good:hover{
    background: rgb(217, 234, 255);
}
.chooseGood:hover{
    background: rgb(0, 132, 255);
}
.good i{
    margin-right: 5px;
}
.bad{
    padding: 10px;
    background: rgb(230, 243, 255);
    border-radius: 5px;
    cursor: pointer;
    color: rgb(21, 134, 247);
}
.chooseBad{
    background: rgb(0, 132, 255);
    color: white;
}
.bad:hover{
    background: rgb(217, 234, 255);
}
.chooseBad:hover{
    background: rgb(0, 132, 255);
}
.cover{
    position: relative;
    left: 10px;
    width: 300px;
    height: 150px;
    overflow: hidden;
}
.blogImg{
    width: 300px;
    height: 150px;
    transition-duration: 0.8s;
}
.blogImg:hover{
    transform: scale(1.1,1.1);
}
.blog{
    background: white;
    width: 100%;
    border-radius: 2px;
    height: 200px;
    box-shadow: 0 5px 10px #ccdbdf;
    border: 1px solid rgb(247, 242, 242);
}
.content{
    position: relative;
    top: 20px;
}
.rightPart{
    position: relative;
    left: 25px;
}
.blogTitle{
    position: relative;
    top: -15px;
}
.blogTitle a{
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 20px;
}
.blogTitle a:hover{
    color: rgb(21, 134, 247);
}
.partContent{
    color: rgb(138, 138, 138);
}
.info{
    position: relative;
    top: 10px;
}
.common{
    color: rgb(160, 147, 147);
    margin-right: 5px;
    float: right;
}
.common i{
    margin-right: 5px;
}
.collect{
    color: rgb(160, 147, 147);
    margin-right: 5px;
    cursor: pointer;
}
.collect i{
    margin-right: 5px;
}
.collect:hover{
    color: rgb(119, 131, 156);
}
</style>



