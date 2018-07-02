<template>
    <el-row class="commentBoder">
        <el-col :span="3">
            <a href="#/:userId">
                <img :src="'./static/img/head.jpeg'" alt="" class="commentHead">
            </a>
        </el-col>
        <el-col :span="18">
            <div>
                <a :href="`#/${userId}`" class="userNameUrl">
                    {{userComment.userName}}
                </a>
                <small>
                    {{userComment.commentTime}}
                </small>
            </div>
            <div>
                <p>
                    {{userComment.commentText}}
                </p>
            </div>
            <div class="hoverSpan">
                <span class="spanColor" @click="comment">回复·</span>
                <span class="spanColor" @click="reply">{{replyButton}}
                    <i class="iconfont" :class="{'icon-xia-copy':isreply,'icon-xia':!isreply}">
                    </i>
                </span>
                <span
                class="commentUpcss"
                @click="commentUp"
                >
                    {{userComment.commentUp}}
                    <i class="iconfont" 
                    :class="{'icon-dianzan':userComment.isUpEd,'icon-good':!userComment.isUpEd}"
                    >
                    </i>
                </span>
            </div>
            <div v-if="userComment.replyShow" >
                <div>
                    <el-input 
                    type="textarea"
                    placeholder="写下您的回复..."
                    rows="2"
                    v-model="userComment.reply"
                    >

                    </el-input>
                </div>
                <el-row>
                    <el-button class="refresh" @click="refresh">
                        重置    
                    </el-button>
                    <el-button class="submit" @click="submitTo">
                        提交
                    </el-button>
                </el-row>
            </div>
            <comment-reply
            v-for="(commentComment,index) in commentComments"
            :key="index"
            :index="index"
            :commentComment="commentComment"
            :userId="userId"
            @commentChange="commentChange"
            @commentCommentUp="commentCommentUp"
            v-show="isreply"
            >

            </comment-reply>
        </el-col>
    </el-row>
</template>

<script>
import commentReply from './commentReply.vue'

export default {
    props :['userComment','index','userId'],
    components:{
        commentReply
    },
    data () {
        return {
            isreply:false,
            isComment:false,
            expandChoosed:0,
            commentComments:[
                {
                    commentUserId:23,
                    commentId:12,
                    userHeadUrl:'./static/img/head.jpeg',
                    userName:'李武',
                    commentText:'这篇文章真有意思!',
                    commentUp:3,
                    commentTime:'2018-06-10 22:14:17',
                    reply:"",
                    isUpEd:false,
                    replyShow:false
                },
                {
                    commentUserId:28,
                    commentId:22,
                    userHeadUrl:'./static/img/head.jpeg',
                    userName:'水电工',
                    commentText:'这篇文章真有意思!',
                    commentUp:7,
                    commentTime:'2018-06-10 22:04:17',
                    reply:"",
                    isUpEd:false,
                    replyShow:false
                },
                {
                    commentUserId:26,
                    commentId:32,
                    userHeadUrl:'./static/img/head.jpeg',
                    userName:'研究生',
                    commentText:'这篇文章真有意思!',
                    commentUp:13,
                    commentTime:'2018-06-10 20:14:17',
                    reply:"",
                    isUpEd:false,
                    replyShow:false
                },
                {
                    commentUserId:25,
                    commentId:24,
                    userHeadUrl:'./static/img/head.jpeg',
                    userName:'张三日',
                    commentText:'这篇文章真有意思!',
                    commentUp:8,
                    commentTime:'2018-06-10 22:14:47',
                    reply:"",
                    isUpEd:false,
                    replyShow:false
                }
            ]
        }
    },
    methods : {
        reply() {
            this.isreply = !this.isreply
        },
        refresh() {
            this.userComment.reply = ""
        },
        submitTo() {
            alert(this.userComment.reply+this.userId+this.userComment.commentUserId)
        },
        comment() {
            this.$emit('change',this.index)
        },
        commentUp(){
            this.$emit('commentUp',this.index)
        },
        commentChange (index) {
            if (this.commentComments[index].replyShow) {
            this.commentComments[index].replyShow = false
            this.$set(this.commentComments,index,this.commentComments[index])                 
            }
            else{
            this.commentComments[this.expandChoosed].replyShow = false
            this.$set(this.commentComments,this.expandChoosed,this.commentComments[this.expandChoosed])
            this.commentComments[index].replyShow = true
            this.$set(this.commentComments,index,this.commentComments[index])       
            this.expandChoosed = index
            }

        },
        commentCommentUp(index) {
            if (this.commentComments[index].isUpEd) {
                this.commentComments[index].isUpEd = false 
                this.commentComments[index].commentUp -= 1
                this.$set(this.commentComments,index,this.commentComments[index])
            }
            else{
                this.commentComments[index].isUpEd = true 
                this.commentComments[index].commentUp += 1
                this.$set(this.commentComments,index,this.commentComments[index])
            }
        }
    },
    computed : {
        replyButton () {
            if (this.isreply) {
                return '收起回复'
            }
            else {
                return this.userComment.replyNum + '条回复'
            }
        }
    }
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
.commentBoder{
    border-top: solid #f2f2f2 1px ;
}
.userNameUrl{
    font-size: 14px;
    text-decoration: none;
    color: #406599;
}
.spanColor{
    color: #406599;
}
.hoverSpan :hover{
    cursor: pointer;
}
.submit{
    float: right;
}
.refresh{
    float: right;
}
.empand{
    animation: expand 0.7 forwards
}
.contract{
    animation: contract 0.7 forwards
}
.replyComment{
    height: 0
}
@keyframes expand {
    0%{
        height: 0
    }
    100%{
        height: 100%
    }
}
/* 弹出 */
@keyframes contract {            
    0%{
        height: 100%
    }
    100%{
        height: 0
    }
}
/* 收缩 */
.commentUpcss{
    float: right;
    color: #777
}
.commentUpEdcss{
    float: right;
    color: rgb(34, 55, 148)
}
</style>
