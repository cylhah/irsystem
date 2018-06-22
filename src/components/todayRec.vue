<template>
    <div>
        <div class="right">
            <p class="head"><i class="iconfont icon-huo"></i>今日推荐</p>
            <el-row v-for="rec in recList" :key="rec.blogId" class="rec">
                <el-col :span="8" class="left">
                    <div class="cover">
                            <a :href="`#/article/${rec.blogId}`">
                                <img :src="rec.imgUrl">
                            </a>
                    </div>
                </el-col>
                <el-col :span="16" class="title">
                    <a :href="`#/article/${rec.blogId}`">
                        {{rec.title}}
                    </a>
                </el-col>
            </el-row>
            
        </div>
        <div class="links">
            <p class="head">友情链接</p>
            <el-row>
                <el-col :span="7" v-for="(link,index) in links" :key="index" class="linkbox">
                    <a :href="link.url">{{link.webName}}</a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            links: [
                {
                    webName: '光明网',
                    url: ''
                },
                {
                    webName: '央广网',
                    url: ''
                },
                {
                    webName: '国际在线',
                    url: ''
                },
                {
                    webName: '中国西藏网',
                    url: ''
                },
                {
                    webName: '参考消息',
                    url: ''
                },
                {
                    webName: '中青在线',
                    url: ''
                }
            ]
        }
    },
    props: ['recList']
}
</script>

<style scoped>
.right{
    padding: 20px;
    width: 300px;
    background: white;
    margin-bottom: 50px;
}
.links{
    padding: 20px;
    width: 300px;
    background: white;
}
.linkbox{
    margin: 10px 5px;
}
.links a{
    text-decoration: none;
    color: grey;
}
.links a:hover{
    color: rgb(21, 134, 247);
}
.head{
    font-weight: bold;
}
.head i{
    margin-right: 10px;
    color: red;
}
.rec{
    margin-bottom: 20px;
}
.left{
    width: 64px;
    margin-right: 10px;
}
.cover{
    width: 64px;  
    height: 48px;  
    overflow: hidden;  
    position: relative;  
}
.cover img{
    height: 100%;  
    width: auto;  
    /* width: 100%; */
    left:50%;  
    position: relative;  
    transform: translateX(-50%); 
}
.title{
    position: relative;
    top: 5px;
}
.title a{
    text-decoration: none;
    color: black;
    font-weight: bold;
}
.title a:hover{
    color: rgb(21, 134, 247);
}
</style>


