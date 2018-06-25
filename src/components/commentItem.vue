<template>
    <el-row class="commentBoder">
        <el-col :span="4">
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
            <div>
                <span class="spanColor">回复·</span>
                <span class="spanColor" @click="reply">{{replyButton}}</span>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data () {
        return {
            isreply:false
        }
    },
    methods : {
        reply () {
            this.isreply = !this.isreply
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
    },
    props :['userComment','userId']
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
</style>
