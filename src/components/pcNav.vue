<template>
    <div>
        <div class="pcNav">
            <div class="userInfo">
                <img src="/static/head.jpeg" class="head">
                <div class="name">
                    <p>{{userInfo.userName}}</p>
                    <el-tag
                        :key="tag"
                        v-for="tag in userInfo.userHobby"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                    </el-tag>
                    <el-input
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加喜好</el-button>
                </div>
            </div>
        </div>
        <div class="navbar">
            <nav class="nav">
                <a :href="`#/${userInfo.userId}`" :class="{highlight: highlight.collect}">
                    <i class="iconfont icon-shoucangfill"></i><span>收藏夹</span>
                </a>
                <a :href="`#/${userInfo.userId}/history`" class="history" :class="{highlight: highlight.history}">
                    <i class="iconfont icon-lishijilu"></i><span>历史记录</span>
                </a>
                <a :href="`#/${userInfo.userId}/comment`" :class="{highlight: highlight.comment}">
                    <i class="iconfont icon-pinglun"></i><span>我的评论</span>
                </a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputVisible: false,
            inputValue: '',
            highlight: {
                collect: false,
                history: false,
                comment: false
            },
            routePath: this.$route.path
        }
    },
    methods: {
        handleClose(tag) {
        this.userInfo.userHobby.splice(this.userInfo.userHobby.indexOf(tag), 1);
        },
        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
            this.userInfo.userHobby.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        },
        getHighlight(){
            let temp = this.routePath.split('/')
            if(temp.length==2){
                this.highlight.collect = true;
            }
            else{
                this.highlight[temp[2]] = true;
            }
        }
    },
    props: ['userInfo'],
    mounted(){
        this.getHighlight()
    }
}
</script>

<style scoped>
.pcNav{
    width: 100%;
    height: 200px;
    background: url('/static/pcbg5.jpg');
    background-position: 0 60%;
    background-size: 100%;
}
.input-new-tag{
    width: 100px;
}
.el-tag{
    color: bisque;
}
.head{
    width: 70px;
    border-radius: 50%;
}
.name{
    color: white;
    font-size: 25px;
    font-weight: bold;
    position: relative;
    width: 500px;
    left: 80px;
    top: -80px;
}
.name p {
    margin: 5px;
}
.userInfo{
    position: absolute;
    width: 300px;
    top: 100px;
    left: 30px;
}
.icon-shoucangfill{
    color: rgb(243, 160, 52);
}
.icon-lishijilu{
    color: rgb(0, 192, 145);
}
.navbar{
    width: 100%;
    height: 66px;
    background: white;
}
.nav{
    position: relative;
    width: 80%;
    left: 5%;
    top: 20px;
}
.nav a{
    text-decoration: none;
    margin: 10px;
    padding-bottom: 21px;
}
.highlight{
    border-bottom: 3px solid rgb(0, 161, 214);
}
.nav a:hover{
    border-bottom: 3px solid rgb(0, 161, 214);
}
.nav a i{
    font-size: 23px;
}
.nav a span{
    font-size: 16px;
    color: black;
    position: relative;
    top: -2px;
    left: 2px;
}
.nav a span:hover{
    color: rgb(37, 195, 235);
} 
.border{
    position: absolute;
    width: 100px;
    border: 1px solid black;
}
</style>


