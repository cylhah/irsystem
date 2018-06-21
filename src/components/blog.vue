<template>
    <div class="blog">
        <el-row class="content">
            <el-col :span="8">
                <a href="">
                    <img :src="blog.imgUrl" class="blogImg">
                </a>
            </el-col>
            <el-col :span="16">
                <p class="blogTitle">
                    <a href="" v-html="highlightTitle"></a>
                </p>
                <p class="partContent" v-html="highlightPartContent">
                </p>
                <p class="info">
                    <label class="good"
                            :class="{chooseGood:blog.chooseGood}"
                            @click="good"><i class="iconfont icon-good"></i>14k</label>
                    <label class="bad"
                            :class="{chooseBad:blog.chooseBad}"
                            @click="bad"><i class="iconfont icon-bad"></i></label>
                    <label class="collect"
                            @click="collect">
                        <i class="iconfont"
                            :class="{'icon-xihuan-xianxing': !blog.isCollect,'icon-xihuan': blog.isCollect}"
                            ></i>收藏
                    </label>
                    <label class="collect"><i class="iconfont icon-fenxiang"></i>分享</label>
                    <label class="common">·1小时前</label>
                    <label class="common"><i class="iconfont icon-liulan"></i>{{blog.pageView}}</label>
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods: {
        collect(){
            this.blog.isCollect = !this.blog.isCollect
        },
        good(){
            this.blog.chooseGood = !this.blog.chooseGood
            this.blog.chooseBad = false
            console.log(this.keyword)
        },
        bad(){
            this.blog.chooseBad = !this.blog.chooseBad
            this.blog.chooseGood = false
        }
    },
    computed: {
        highlightPartContent(){
            let part = this.blog.content.substr(0,50)+'...'
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
                return this.blog.title.replace(regex,replace)
            }
            else {
                return this.blog.title
            }
        }
    },
    props: ['blog','keyword']
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
.blogImg{
    position: relative;
    width: 300px;
    height: 150px;
    left: 10px;
}
.blog{
    background: white;
    width: 1000px;
    border-radius: 2px;
    height: 200px;
    box-shadow: 0 5px 10px #ccdbdf;
    border: 1px solid rgb(247, 242, 242);
}
.content{
    position: relative;
    top: 20px;
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



