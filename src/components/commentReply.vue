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
                    {{commentComment.userName}}
                </a>
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
                    {{commentComment.commentUp}}
                    <i class="iconfont" 
                    :class="{'icon-dianzan':commentComment.isUpEd,'icon-good':!commentComment.isUpEd}"
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
    props :['commentComment','userId','index'],
    methods : {
        refresh() {
            this.commentComment.reply = ""
        },
        submitTo() {
            alert(this.commentComment.reply+this.userId+this.commentComment.commentUserId)
        },
        commentCommentReply() {
            this.$emit('commentChange',this.index)
        },
        commentCommentUp(){
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
.commentCommentUpcss{
    float: right;
    color: #777
}
.commentUpEdcss{
    float: right;
    color: rgb(34, 55, 148)
}
</style>
