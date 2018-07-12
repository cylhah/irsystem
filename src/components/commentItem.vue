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
                
            ]
        }
    },
    methods : {
        reply() {
            this.isreply = !this.isreply
            let formData = new FormData()
            formData.append("commentId",this.userComment.commentId)
            formData.append("page",0)
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
                return this.commentComments.length + '条回复'
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
