<template>
    <div class="classification">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            >
            <el-menu-item index="1"
                        @click="gotoUrl('/')">
                <i class="el-icon-info"></i>
                <span slot="title">推荐</span>
            </el-menu-item>
            <el-menu-item index="2"
                        @click="gotoUrl('#/postlist/hot')">
                <i class="el-icon-bell"></i>
                <span slot="title">热门</span>
            </el-menu-item>
            <el-menu-item index="3"
                        @click="gotoUrl('#/postlist/technology')">
                <i class="el-icon-upload"></i>
                <span slot="title">科技</span>
            </el-menu-item>
            <el-menu-item index="4"
                        @click="gotoUrl('#/postlist/entertainment')">
                <i class="el-icon-menu"></i>
                <span slot="title">娱乐</span>
            </el-menu-item>
            <el-menu-item index="5"
                        @click="gotoUrl('#/postlist/sport')">
                <i class="el-icon-service"></i>
                <span slot="title">体育</span>
            </el-menu-item>
            <el-menu-item index="6"
                        @click="gotoUrl('#/postlist/car')">
                <i class="el-icon-document"></i>
                <span slot="title">汽车</span>
            </el-menu-item>
            <el-menu-item index="7"
                        @click="gotoUrl('#/postlist/economy')">
                <i class="el-icon-date"></i>
                <span slot="title">财经</span>
            </el-menu-item>
            <el-menu-item index="8"
                        @click="gotoUrl('#/postlist/fun')">
                <i class="el-icon-mobile-phone"></i>
                <span slot="title">搞笑</span>
            </el-menu-item>
            <el-menu-item index="9"
                        @click="gotoUrl('#/postlist/more')">
                <i class="el-icon-loading"></i>
                <span slot="title">更多</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    methods: {
        gotoUrl(url){
            window.location.href = url
        }
    },
    props: ['activeIndex']
}
</script>

<style scoped>
.el-menu {
    width: 100px;
    border-right: none;
}
.el-menu-item.is-active{
    background-color: rgb(236, 245, 255);
}
.el-menu-item a{
    text-decoration: none;
}
</style>

