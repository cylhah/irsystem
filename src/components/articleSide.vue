<template>
<div class="aticleSideWidth">
    <div class="sideButton">
        <el-button  circle><i class="iconfont icon-pinglun"></i></el-button>
    </div>
    <hr>
    <div class="sideButton">
        <el-button  @click="collect" circle>
            <i 
            class="iconfont" 
            :class="{'icon-xihuan-xianxing':!article.isCollect,'icon-xihuan':article.isCollect}"
            >
            </i>
        </el-button>
    </div>
    <div class="sideButton">
        <el-button  @click="chooseGood" circle>
            <i 
            class="iconfont" 
            :class="{'icon-dianzan':article.chooseGood,'icon-good':!article.chooseGood}"
            >
            </i>
        </el-button>
    </div>
    <div class="sideButton">
        <el-button  @click="chooseBad" circle>
            <i 
            class="iconfont" 
            :class="{'icon-cai':article.chooseBad,'icon-bad':!article.chooseBad}"
            >
            </i>
        </el-button>
    </div>
</div>
</template>

<script>

export default {
    data () {
        return {
      
        }
    },
    methods : {
        collect () {
            this.article.isCollect = !this.article.isCollect
        },
        chooseGood () {
            if (!this.article.chooseGood) {
                this.article.chooseGood = true
                this.article.chooseBad = false
            }
            else {
                this.article.chooseGood = false
            }
        },
        chooseBad () {
            if (!this.article.chooseBad) {
                this.article.chooseGood = false
                this.article.chooseBad = true
            }
            else {
                this.article.chooseBad = false
            }           
        }
    },
    props : ['articleId','article']
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