<template>
    <el-row>
        <el-col :span="3">
            <a href="#/:userId">
                <img :src="commentComment.userHeadUrl" alt="" class="commentHead">
            </a>
        </el-col>
        <el-col :span="18">
            <div>
                <a :href="`#/${commentComment.userId}`" class="userNameUrl">
                    {{commentComment.userName}}
                </a>
                <span>
                     回复 {{commentComment.replyTo}}
                </span>
                <small>
                    {{commentComment.commentTime}}
                </small>
            </div>
            <div>
                <p>
                    {{commentComment.commentText}}
                </p>
            </div>
            <div class="hoverSpan">
                <span class="spanColor" @click="commentCommentReply">回复</span>
                <span
                class="commentCommentUpcss"
                @click="commentCommentUp"
                >
                    {{commentComment.commentUpNumber}}
                    <i class="iconfont" 
                    :class="{'icon-dianzan':commentComment.upEd,'icon-good':!commentComment.upEd}"
                    >
                    </i>
                </span>
            </div>
            <div v-if="commentComment.replyShow" >
                <div>
                    <el-input 
                    type="textarea"
                    placeholder="写下您的回复..."
                    rows="2"
                    v-model="commentComment.reply"
                    >

                    </el-input>
                </div>
                <el-row>
                    <span class="commentNotNull" v-show="commentNotNull">评论内容不能为空！</span>
                    <el-button class="refresh" @click="refresh">
                        重置    
                    </el-button>
                    <el-button class="submit" @click="submitTo">
                        提交
                    </el-button>
                </el-row>
            </div>    
        </el-col>
    </el-row> 
</template>

<script>
export default {
    props :['commentComment','userId','index','articleId'],
    data () {
        return{
            commentNotNull:false
        }
    },
    methods : {
        refresh() {
            this.commentComment.reply = ""
        },
        submitTo() {
            if(this.commentComment.reply!=null&&this.commentComment.reply!=""){
                this.$http.post(
                    '/api/comment/replyCommentComment',
                    {
                        articleId:this.articleId,
                        userId:2,
                        targetCommentId:this.commentComment.targetCommentId,
                        replyCommentId:this.commentComment.commentId,
                        commentText:this.commentComment.reply,
                    },
                    {
                        headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                        }
                    }
                ).then( (response) =>{
                    if(response.data==1){
                        console.log("评论成功!")
                        this.commentNotNull = false
                        this.$emit("commentReplySuccess",this.index)
                    }
                    else{
                        console.log("评论失败")
                    }
                },(response) =>{
                    console.log("评论失败")
                })
            }
            else{
                this.commentNotNull = true
            }
            
        },
        commentCommentReply() {
            this.$emit('commentChange',this.index)
        },
        commentCommentUp(){
            if(this.commentComment.upEd==true){
                this.$http.post(
                    '/api/commentUp/down',
                    {
                        "userId":2,
                        "commentId":this.commentComment.commentId
                    },
                    {
                        headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                        }
                    }
                ).then( (response) =>{
                            if(response.data==1){
                                console.log("取消点赞成功!")
                            }
                            else{
                                console.log("取消点赞失败!")
                            }
                        },(response) =>{
                            console.log("取消点赞失败！")
                        }
                    )
            }
            else{
                this.$http.post(
                    '/api/commentUp/up',
                    {
                        "userId":2,
                        "commentId":this.commentComment.commentId
                    },
                    {
                        headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                        }
                    }
                ).then( (response) =>{
                            if(response.data==1){
                                console.log("点赞成功!")
                            }
                            else{
                                console.log("点赞失败!")
                            }
                        },(response) =>{
                            console.log("点赞失败！")
                        }
                    )
            }
           
            this.$emit('commentCommentUp',this.index)
        }
    }
}
</script>

<style>
.commentHead{
    border-radius: 200px;
    margin-top: 5px;
    margin-left: 5px;
    width: 35px;
    height: 35px;
    box-sizing: border-box;

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
.commentNotNull{
    color: red;
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
.commentCommentUpcss{
    float: right;
    color: #777
}
.commentUpEdcss{
    float: right;
    color: rgb(34, 55, 148)
}
</style>
