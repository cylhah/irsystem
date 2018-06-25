<template>
    <div>
        <div class="pcNav">
            <div class="userInfo">
                <img src="/static/head.jpeg" class="head">
                <div class="name">
                    <p>cylhah</p>
                    <p>asd</p>
                </div>
            </div>
        </div>
        <div class="navbar">
            <nav class="nav">
                <a :href="`#/${userId}`">
                    <i class="iconfont icon-shoucangfill"></i><span>收藏夹</span>
                </a>
                <a :href="`#/${userId}/history`">
                    <i class="iconfont icon-lishijilu"></i><span>历史记录</span>
                </a>
                <a :href="`#/${userId}/comment`">
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
            userId: this.$route.params.userId
        }
    }
}
</script>

<style scoped>
.pcNav{
    width: 100%;
    height: 200px;
    background: url('/static/pcbg3.jpg');
    background-size: 100%;
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
</style>


