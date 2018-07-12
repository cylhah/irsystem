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
            page:0,
            userComments : [
               
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
            if (this.userComments[index].upEd) {
                this.userComments[index].upEd = false 
                this.userComments[index].commentUpNumber -= 1
                this.$set(this.userComments,index,this.userComments[index])
            }
            else{
                this.userComments[index].upEd = true 
                this.userComments[index].commentUpNumber += 1
                this.$set(this.userComments,index,this.userComments[index])
            }
        }
    },
    props : ['articleId','userId'],
    created(){
        let formData = new FormData()
        formData.append("articleId",1)
        formData.append("page",this.page)
        formData.append("userId",4)
        this.$http.post(
            '/api/comment/articleComment',
            formData
        ).then( (response) =>{
            if(response.data!=null){
                this.userComments = response.data
            }
        }, (response) =>{
            console.log("文章评论加载失败！"+this.articleId)
        })
    }
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
