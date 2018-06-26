<template>
    <div class="top">
        <el-row class="row">
            <el-col :span="4" :offset="2">
                <div class="logo">
                    <a href="">
                        <img src="/static/logo1.png">
                    </a>
                </div>
            </el-col>
            <el-col :span="6" :offset="4">
                <el-input
                placeholder="请搜索你感兴趣的内容..."
                maxlength="40"
                class="searchBox"
                @focus="longer"
                @blur="shorter"
                @keyup.enter.native="search"
                :class="{longerAnimation:isFocus,shorterAnimation:!isFocus&&start}"
                v-model="searchText"
                >
                <i slot="suffix" class="el-input__icon el-icon-search" @click="search"></i>
                </el-input>
            </el-col>
            <el-col :span="2" :offset="1">
                <nav class="mynav">
                    <a href="">下载APP</a>
                    <el-badge is-dot>
                        <a href=""><i class="el-icon-bell"></i></a>
                    </el-badge>
                </nav>
            </el-col>
            <el-col :span="1" :offset="1">
                <a :href="`#/user/${userId}`"><img src="/static/head.jpeg" class="head" @mouseover="showMenu" @mouseout="closeMenu"></a>
            </el-col>
        </el-row>
        <div class="personalInfo"
            :class="{fadeInAnimation:isHover,fadeOutAnimation:!isHover&&flag}"
            @mouseover="showMenu"
            @mouseout="closeMenu">
            <div class="body">
                <div class="headInfo">
                    <a href="">
                        <img src="/static/head.jpeg"> <span>cylhah</span>
                    </a>
                </div>
                <div class="options">
                    <p :class="{greyBg:choice1}"
                        @mouseover="choice1=true"
                        @mouseout="choice1=false"><a :href="`#/user/${userId}`"><i class="el-icon-menu"></i> 我的主页</a></p>
                    <p :class="{greyBg:choice2}"
                        @mouseover="choice2=true"
                        @mouseout="choice2=false"><a :href="`#/user/${userId}/comment`"><i class="el-icon-bell"></i> 我的回复 <el-badge class="mark" :value="12" /></a></p>
                    <p :class="{greyBg:choice3}"
                        @mouseover="choice3=true"
                        @mouseout="choice3=false"><a :href="`#/user/${userId}`"><i class="el-icon-tickets"></i> 我的收藏</a></p>
                    <p :class="{greyBg:choice4}"
                        @mouseover="choice4=true"
                        @mouseout="choice4=false"><a href=""><i class="el-icon-setting"></i> 退出</a></p>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script>
export default {
    data(){
        return{
            choice1: false,
            choice2: false,
            choice3: false,
            choice4: false,
            isFocus: false,
            isHover: false,
            start: false,
            flag: false,
            searchText: ''
        }
    },
    methods: {
        search(){
            if(this.searchText!=''){
                window.location.href = `#/search/${this.searchText}`
            }
        },
        longer(){
            this.isFocus = true
            this.start = true
        },
        shorter(){
            this.isFocus = false
        },
        showMenu(){
            this.isHover = true
            this.flag = true
        },
        closeMenu(){
            this.isHover = false
        }
    },
    props :['userId']
}
</script>

<style scoped>

@keyframes longer{
    0% {
        width: 80%;
    }
    100%{
        width: 100%;
    }
}
@keyframes shorter {
    0% {
        width: 100%;
    }
    100%{
        width: 80%;
    }
}
@keyframes fadeIn {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
        visibility: visible;
    }
}
@keyframes fadeOut {
    0%{
        visibility: visible;
        opacity: 1;
    }
    100%{
        visibility: hidden;
        opacity: 0;
    }
}
.row{
    position: relative;
    top: 13px;
}
.head{
    border-radius: 50%;
    width: 40px;
}
.greyBg{
    background-color: rgb(246, 246, 246);
}
.options p {
    margin: 15px;
}
.options p a{
    text-decoration: none;
    color: grey;
}
.top{
    background: white;
    width: 100%;
    height: 70px;
    box-shadow: 0 2px 5px #ccdbdf;
}
@media screen and (max-width: 1370px){
    .top{
        width: 1370px;
    }
}
.searchBox{
    width: 80%;
}
.longerAnimation{
    animation: longer 0.7s forwards;
}
.shorterAnimation{
    animation: shorter 0.7s forwards;
}
.fadeInAnimation{
    animation: fadeIn 0.7s forwards;
}
.fadeOutAnimation{
    animation: fadeOut 0.7s forwards ease-out;
}
.searchBox i:hover{
    cursor: pointer;
}
.mynav{
    position: relative;
    top: 10px;
}
.mynav a{
    color: grey;
    text-decoration: none;
    margin: 8px;
}
.mynav a:hover{
    color: rgb(76, 161, 216);
}
.personalInfo{
    visibility: hidden;
    position: absolute;
    background: white;
    z-index: 10;
    border-radius: 5px;
    right: 10%;
    width: 300px;
    height: 250px;
    box-shadow: 0 3px 10px #a2d2e0;
}
.body{
    position: relative;
    left: 35px;
    top: 30px;
    width: 80%;
}
.headInfo a span{
    position: relative;
    top: -20px;
    left: 20px;
}
.headInfo a img{
    width: 60px;
    border-radius: 50%;
}
.headInfo a{
    color: black;
    text-decoration: none;
    font-size: 25px;
}
</style>


