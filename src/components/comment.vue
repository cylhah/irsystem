<template>
    <div>
        <div>58条评论</div>
        <br>
        <el-row>
            <a :href="`#/${userId}`">
                <img :src="'./static/img/head.jpeg'" alt="" class="commentHead">
            </a>
            <el-input
            type="textarea"
            placeholder="写下您的评论..."
            class="textarea"
            :autosize="{minRows:2,maxRows:6}"
            v-model="comment"
            >
            </el-input>
        </el-row>
        <el-row>
            <el-button class="refresh" @click="refresh">
                重置    
            </el-button>
            <el-button class="submit">
                提交
            </el-button>
        </el-row>
        <comment-item 
        v-for="(userComment, index) in userComments" 
        :key="index" 
        :index="index"
        :userComment="userComment" 
        :userId="userId"
        @change="change"
        @commentUp="commentUp"
        >
        </comment-item>
    </div>
</template>

<script>
import commentItem from './commentItem.vue'

export default {
    data () {
        return{
            comment:"",
            expandChoosed:0,
            userComments : [
                {
                    commentUserId:10,
                    commentId:1,
                    userHeadUrl:'./static/img/head.jpeg',
                    userName:'张三哈',
                    commentText:'这篇文章真有意思!',
                    commentUp:223,
                    commentTime:'2018-06-10 22:14:17',
                    replyNum:334,
                    reply:"",
                    isUpEd:false,
                    replyShow:false
                },
                {
                    commentUserId:8,
                    commentId:2,
                    userHeadUrl:'./static/img/head.jpeg',
                    userName:'张留哈',
                    commentText:'这篇文章真有意思!',
                    commentUp:224,
                    commentTime:'2018-06-10 22:04:17',
                    replyNum:34,
                    reply:"",
                    isUpEd:false,
                    replyShow:false
                },
                {
                    commentUserId:6,
                    commentId:3,
                    userHeadUrl:'./static/img/head.jpeg',
                    userName:'齐三哈',
                    commentText:'这篇文章真有意思!',
                    commentUp:123,
                    commentTime:'2018-06-10 20:14:17',
                    replyNum:33,
                    reply:"",
                    isUpEd:false,
                    replyShow:false
                },
                {
                    commentUserId:5,
                    commentId:4,
                    userHeadUrl:'./static/img/head.jpeg',
                    userName:'张三日',
                    commentText:'这篇文章真有意思!',
                    commentUp:23,
                    commentTime:'2018-06-10 22:14:47',
                    replyNum:2,
                    reply:"",
                    isUpEd:false,
                    replyShow:false
                },
            ]
        }
    },
    components : {
        commentItem
    },
    methods : {
        refresh () {
            this.comment = ""
        },
        change (index) {
            if (this.userComments[index].replyShow) {
            this.userComments[index].replyShow = false
            this.$set(this.userComments,index,this.userComments[index])                 
            }
            else{
            this.userComments[this.expandChoosed].replyShow = false
            this.$set(this.userComments,this.expandChoosed,this.userComments[this.expandChoosed])
            this.userComments[index].replyShow = true
            this.$set(this.userComments,index,this.userComments[index])       
            this.expandChoosed = index
            }

        },
        commentUp(index) {
            if (this.userComments[index].isUpEd) {
                this.userComments[index].isUpEd = false 
                this.userComments[index].commentUp -= 1
                this.$set(this.userComments,index,this.userComments[index])
            }
            else{
                this.userComments[index].isUpEd = true 
                this.userComments[index].commentUp += 1
                this.$set(this.userComments,index,this.userComments[index])
            }
        }
    },
    props : ['articleId','userId'],
    // wathch :{
    //     expandChoosed (newExpandChoosed,oldExpandChoosed) {
                
    //     }
    // }
}
</script>

<style scoped>
.commentHead{
    border-radius: 200px;
    margin-top: 5px;
    margin-left: 5px;
    width: 35px;
    height: 35px;
    box-sizing: border-box;

}
.textarea{
    width:90%;
    float: right;
}
.submit{
    float: right;
}
.refresh{
    float: right;
}
</style>
