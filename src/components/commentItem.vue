<template>
    <el-row class="commentBoder">
        <el-col :span="3">
            <a href="#/:userId">
                <img src="/static/head.jpeg" alt="" class="commentHead">
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
                <span class="spanColor" @click="reply">{{replyButton}}<i class="iconfont" :class="{'icon-xia-copy':isreply,'icon-xia':!isreply}"></i></span>
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
            
        </el-col>
    </el-row>
</template>

<script>
export default {
    props :['userComment','index','userId'],
    data () {
        return {
            isreply:false,
            isComment:false,
            
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
</style>
