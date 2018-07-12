<template>
    <div>
        <top :userId="userId"></top>
        <div class="main">
            <pc-nav :userId="userId"></pc-nav>
            <router-view :userId="userId"></router-view>
        </div>
    </div>
</template>

<script>
import top from '../top.vue'
import pcNav from '../pcNav.vue'
export default {
    components: {
        top,pcNav
    },
    data(){
        return {
            
        }
    },
    props: ['userId']
}
</script>

<style scoped>
.main{
    width: 1300px;
    position: relative;
    top: 2px;
    margin: 0 auto;
}
</style>


