<template>
    <el-row class="commentBoder">
        <el-col :span="3">
            <a href="#/:userId">
                <img :src="userComment.userHeadUrl" alt="" class="commentHead">
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
                <span class="spanColor" @click="comment">回复</span>
                <span class="spanColor" @click="reply" v-show="isHaveReply">·{{replyButton}}
                    <i class="iconfont" :class="{'icon-xia-copy':isreply,'icon-xia':!isreply}">
                    </i>
                </span>
                <span
                class="commentUpcss"
                @click="commentUp"
                >
                    {{userComment.commentUpNumber}}
                    <i class="iconfont" 
                    :class="{'icon-dianzan':userComment.upEd,'icon-good':!userComment.upEd}"
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
                    <span class="commentNotNull" v-show="commentNotNull">评论内容不能为空！</span>
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
            :articleId="articleId"
            @commentChange="commentChange"
            @commentCommentUp="commentCommentUp"
            @commentReplySuccess="refreshReply"
            v-show="isreply"
            >

            </comment-reply>
        </el-col>
    </el-row>
</template>

<script>
import commentReply from './commentReply.vue'

export default {
    props :['userComment','index','userId','articleId'],
    components:{
        commentReply
    },
    data () {
        return {
            isreply:false,
            isComment:false,
            isHaveReply:false,
            expandChoosed:0,
            commentNotNull:false,
            commentComments:[
                
            ]
        }
    },
    methods : {
        refreshReply(){
            let formData = new FormData()
            formData.append("commentId",this.userComment.commentId)
            formData.append("page",0)
            formData.append("userId",2)
            this.$http.post(
                '/api/comment/getCommentChild',
                formData
                ).then( (response) => {
                    if(response.data!=null){
                        this.commentComments = response.data
                    }
                }, (response) => {
                    console.log("评论读取失败!")
                })
        },
        reply() {
            this.isreply = !this.isreply
            this.$emit("replySuccess",this.index)
            let formData = new FormData()
            formData.append("commentId",this.userComment.commentId)
            formData.append("page",0)
            formData.append("userId",2)
            this.$http.post(
                '/api/comment/getCommentChild',
                formData
                ).then( (response) => {
                    if(response.data!=null){
                        this.commentComments = response.data
                    }
                }, (response) => {
                    console.log("评论读取失败!")
                })
        },
        refresh() {
            this.userComment.reply = ""
        },
        submitTo() {
            if(this.userComment.reply!=null&&this.userComment.reply!=""){
                this.$http.post(
                    '/api/comment/replyArticleComment',
                    {
                        articleId:this.articleId,
                        userId:2,
                        targetCommentId:this.userComment.commentId,
                        replyCommentId:this.userComment.commentId,
                        commentText:this.userComment.reply,
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
                        this.userComment.reply = ""
                        this.$emit("replySuccess",this.index)
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
        comment() {
            this.$emit('change',this.index)
        },
        commentUp(){
            if(this.userComment.upEd==true){
                this.$http.post(
                    '/api/commentUp/down',
                    {
                        userId: 2,
                        commentId: this.userComment.commentId
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
                        userId:2,
                        commentId:this.userComment.commentId
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
            if (this.commentComments[index].upEd) {
                this.commentComments[index].upEd = false 
                this.commentComments[index].commentUpNumber -= 1
                this.$set(this.commentComments,index,this.commentComments[index])
            }
            else{
                this.commentComments[index].upEd = true 
                this.commentComments[index].commentUpNumber += 1
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
                if(this.userComment.replyNum==0){
                    this.isHaveReply = false
                }
                else{
                    this.isHaveReply = true
                }
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
.commentUpcss{
    float: right;
    color: #777
}
.commentUpEdcss{
    float: right;
    color: rgb(34, 55, 148)
}
</style>
