<template>
    <div>
        <div class="menu">
            <el-menu
            :default-active="'1'"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1" @click="gotoUrl('#/admin')">文章管理</el-menu-item>
            <el-menu-item index="2" @click="gotoUrl('#/admin/userMng')">用户管理</el-menu-item>
            </el-menu>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        gotoUrl(url){
            window.location.href = url
        }
    }
}
</script>

<style scoped>
li.el-menu-item{
    position: relative;
    left: 80%;
}
.menu{
    width: 100%;
}
</style>


