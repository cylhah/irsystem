<template>
<div class="aticleSideWidth">
    <div class="sideButton">
        <el-button @click="changeshow" round>
            <i
            class="iconfont"
            :class="{'icon-xia-copy':show,'icon-xia':!show}"
            >

            </i>
        </el-button>
    </div>
    <el-collapse-transition>
        <div v-show="show">
            <div class="sideButton">
                <el-button  circle><i class="iconfont icon-pinglun"></i></el-button>
            </div>
            <div class="sideButton">
                <el-button  @click="collect" circle>
                    <i 
                    class="iconfont" 
                    :class="{'icon-xihuan-xianxing':!collected,'icon-xihuan':collected}"
                    >
                    </i>
                </el-button>
            </div>
            <div class="sideButton">
                <el-button  @click="good" circle>
                    <i 
                    class="iconfont" 
                    :class="{'icon-dianzan':up,'icon-good':!up}"
                    >
                    </i>
                </el-button>
            </div>
            <div class="sideButton">
                <el-button  @click="bad" circle>
                    <i 
                    class="iconfont" 
                    :class="{'icon-cai':down,'icon-bad':!down}"
                    >
                    </i>
                </el-button>
            </div>
        </div>
    </el-collapse-transition>
</div>
</template>

<script>

export default {
    data () {
        return {
            show: true,
            collected: false,
            up: false,
            down: false,
            upOrDown: 0,
            userId:2
        }
    },
    methods : {
        collect(){
            if (!this.collected) {
                this.$http.post(`/api/collection/userId/${this.userId}/articleId/${this.articleId}`).then( (response)=>{
                    if (response.data==1) {
                        this.collected = true
                    }
                },(response)=>{
                    console.log('连接失败！')
                })
            }
            else {
                this.$http.delete(`/api/collection/userId/${this.userId}/articleId/${this.articleId}`).then( (response)=>{
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
                this.$http.delete(`/api/upAndDown/userId/${this.userId}/articleId/${this.articleId}`).then( (response)=>{
                if (response.data==1) {
                    
                    this.up = false
                    this.upOrDown = 0
                }
                },(response)=>{
                    console.log('连接失败！')
                })
            }
            else {
                this.$http.post(`/api/upAndDown/userId/${this.userId}/articleId/${this.articleId}/upOrDown/1`).then( (response)=>{
                if (response.data==1) {
                    
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
                this.$http.delete(`/api/upAndDown/userId/${this.userId}/articleId/${this.articleId}`).then( (response)=>{
                if (response.data==1) {
                    this.down = false
                    this.upOrDown = 0
                }
                },(response)=>{
                    console.log('连接失败！')
                })
            }
            else {
                this.$http.post(`/api/upAndDown/userId/${this.userId}/articleId/${this.articleId}/upOrDown/2`).then( (response)=>{
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
            this.$http.get(`/api/collection/userId/${this.userId}/articleId/${this.articleId}`).then( (response)=>{
                let type = response.data
                if (type==1){
                    this.collected = true
                }
            },(response)=>{
                console.log('连接失败！')
            })
        },
        getUpAndDown(){
            this.$http.get(`/api/upAndDown/userId/${this.userId}/articleId/${this.articleId}`).then( (response)=>{
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
        },
        changeshow () {
            this.show = !this.show
        }
    },
    props : ['articleId','article'],
    created(){
        if(this.userId) {
            this.getCollection()
            this.getUpAndDown()
        }
    }
}
</script>

<style scoped>
.sideButton{
    margin-top: 9px;
    text-align: center
}

.aticleSideWidth{
    width: 90px;
    margin-top: 60px
  
}
</style>