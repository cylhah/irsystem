<template>
    <div class="commentDiv">
        <h3>回复我的：</h3>
       <div class="comment">
           <p class="commentYou"><a href="">南柯</a>回复了你：<span>真好看</span></p>
           <p class="myComment">回复我的评论：<span>这篇文章不错</span></p>
       </div>
       <div class="comment">
           <p class="commentYou"><a href="">南柯</a>回复了你：<span>真好看</span></p>
           <p class="myComment">回复我的评论：<span>这篇文章不错</span></p>
       </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.commentDiv{
    padding: 20px;
    background: white;
}
.comment{
    padding: 20px;
    /* box-shadow: 0 0 10px rgb(46, 193, 212); */
    border-bottom: 1px solid rgb(196, 186, 186);
}
.commentYou a{
    color: rgb(45, 100, 179);
    text-decoration: none;
}
.myComment{
    color: grey;
}
.myComment span{
    color: black;
    font-weight: bold;
}
</style>
    
