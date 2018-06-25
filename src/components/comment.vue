<template>
    <div>
        <div>58条评论</div>
        <br>
        <el-row>
            <a href="">
                <img src="/static/head.jpeg" alt="" class="commentHead">
            </a>
            <el-input
            type="textarea"
            placeholder="写下您的评论..."
            class="textarea"
            rows="2"
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
        <comment-item v-for="(userComment,index) in userComments" :key="index" :userComment="userComment"></comment-item>
    </div>
</template>

<script>
import commentItem from './commentItem.vue'

export default {
    data () {
        return{
            comment:"",
            userComments : [
                {
                    userId:1,
                    commentId:1,
                    userHeadUrl:'/static/head.jpeg',
                    userName:'张三哈',
                    commentText:'这篇文章真有意思!',
                    commentUp:223,
                    commentTime:'2018-06-10 22:14:17',
                    replyNum:334
                },
                {
                    userId:1,
                    commentId:2,
                    userHeadUrl:'/static/head.jpeg',
                    userName:'张留哈',
                    commentText:'这篇文章真有意思!',
                    commentUp:224,
                    commentTime:'2018-06-10 22:04:17',
                    replyNum:34
                },
                {
                    userId:1,
                    commentId:3,
                    userHeadUrl:'/static/head.jpeg',
                    userName:'齐三哈',
                    commentText:'这篇文章真有意思!',
                    commentUp:123,
                    commentTime:'2018-06-10 20:14:17',
                    replyNum:33
                },
                {
                    userId:1,
                    commentId:4,
                    userHeadUrl:'/static/head.jpeg',
                    userName:'张三日',
                    commentText:'这篇文章真有意思!',
                    commentUp:23,
                    commentTime:'2018-06-10 22:14:47',
                    replyNum:2
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
        }
    },
    props : ['articleId']
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
