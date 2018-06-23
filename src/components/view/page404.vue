<template>
    <div class="page404">
        <div class="content">
            404
        </div>
        <div class="cover1"></div>
        <div class="cover2"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@keyframes move {
    0%{
        width: 300px;
        height: 300px;
        opacity: 1;
    }
    50%{
        width: 200px;
        height: 200px;
        opacity: 0.5;
    }
    100%{
        motion-offset: 100%;
        width: 300px;
        height: 300px;
        opacity: 1;
    }
}
@keyframes move2 {
    0%{
        opacity: 0.7;
        width: 200px;
        height: 200px;
    }
    50%{
        width: 300px;
        height: 300px;
        opacity: 1;
    }
    100%{
        motion-offset: 100%;
        width: 200px;
        height: 200px;
        opacity: 0.7;
    }
}
.page404{
    width: 100%;
    height: 940px;
    background: rgb(38, 38, 38);
}
.content{
    font-size: 200px;
    color: rgb(38, 38, 38);
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    z-index: 10;
}
.cover1{
    width: 300px;
    height: 300px;
    background: white;
    border-radius: 50%;
    position: absolute;
    z-index: 5;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    motion-path: path("M18.45,58.46s52.87-70.07,101.25-.75,101.75-6.23,101.75-6.23S246.38,5.59,165.33,9.08s-15,71.57-94.51,74.56S18.45,58.46,18.45,58.46Z");
    animation: move 7s linear infinite;
}
.cover2{
    width: 200px;
    height: 200px;
    background: white;
    border-radius: 50%;
    opacity: 0.7;
    z-index: 5;
    position: absolute;
    left: 40%;
    top: 20%;
    transform: translateX(-50%);
    motion-path: path("M18.45,58.46s52.87-70.07,101.25-.75,101.75-6.23,101.75-6.23S246.38,5.59,165.33,9.08s-15,71.57-94.51,74.56S18.45,58.46,18.45,58.46Z");
    animation: move2 10s linear infinite;
}
</style>


