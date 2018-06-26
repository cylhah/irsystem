<template>
    <div class="error">
        <span class="text1">4</span>
        <span class="text2">0</span>
        <span class="text3">4</span>
        <p class="message">文件不存在哦！</p>
        <p class="message2">我们检查了你输入的网址，</p>
        <p class="message2">然而什么也没有发现。</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Catamaran:400,800');
@keyframes myrotateX {
  0% {
    transform: rotateX(0);
  }
  9% {
    transform: rotateX(210deg);
  }
  13% {
    transform: rotateX(150deg);
  }
  16% {
    transform: rotateX(200deg);
  }
  18% {
    transform: rotateX(170deg);
  }
  20% {
    transform: rotateX(180deg);
  }
  60% {
    transform: rotateX(180deg);
  }
  80% {
    transform: rotateX(0);
  }
  100% {
    transform: rotateX(0);
  }
}
@keyframes rotatedrop {
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate(30deg);
  }
  15% {
    transform: rotate(90deg);
  }
  70% {
    transform: rotate(90deg);
  }
  80% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}
  
.error{
    width: 100%;
    text-align: center;
}
.error span{
    font-size: 180px;
    font-family: 'Catamaran', sans-serif;
    font-weight: bold;
}
.text1{
    display: inline-block;
    transform-origin: 80% 80% 0px;
    color: rgb(240, 227, 149);
    animation: myrotateX 8s infinite;
}
.text2{
    color: rgb(255, 180, 133);
}
.text3{
    display: inline-block;
    color: rgb(209, 92, 149);
    transform-origin: 100% 80% 0px;
    animation: rotatedrop 8s infinite;
}
.message{
    color: rgb(57, 218, 230);
    font-weight: bold;
    font-size: 20px;
}
.message2{
    color: rgb(55, 173, 182);
    font-size: 14px;
}
</style>


