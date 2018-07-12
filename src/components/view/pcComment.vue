<template>
    <div class="commentDiv">
        <h3>我评论的：</h3>
       <div class="comment" v-for="(comment,index) in commentList" :key="index">
           <p>我评论了文章：<a :href="`#/article/${comment.articleId}`">{{comment.commentText}}</a></p>
           <p>
               <span class="common">评论的主题：“</span>
               <a :href="`#/article/${comment.articleId}`" v-text="comment.targetCommentId"></a>
               <span class="common">”</span>
               <span class="commentTime">{{comment.commentTime}}</span>
            </p>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            commentList: [],
        }
    },
    methods: {
        getCommentToArticle(){
            this.$http.get(`/api/comment/userId/${this.userId}`).then( (response)=>{
                this.commentList = response.data
                for(let i=0;i<this.commentList.length;i++){
                    this.$http.get(`/api/article/${this.commentList[i].articleId}`).then( (response)=>{
                        this.commentList[i].targetCommentId = response.data.articleTitle
                    },(response)=>{
                    })
                }
                console.log(this.commentList)
            },(response)=>{
            })
        }
    },
    props: ['userId'],
    created(){
        this.getCommentToArticle()
    }
}
</script>

<style>
.commentDiv{
    padding: 20px;
    background: white;
}
.comment{
    padding: 20px;
    border-bottom: 1px solid rgb(196, 186, 186);
}
.comment a{
    text-decoration: none;
    color: rgb(45, 100, 179);
}
.common{
    color: grey;
}
.commentTime{
    float: right;
}
</style>
    
