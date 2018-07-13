<template>
    <div>
        <div class="pcNav">
            <div class="userInfo">
                <img :src="`${userInfo.userHeadUrl}`" class="head">
                <div class="name">
                    <p>{{userInfo.userName}}</p>
                    <el-tag
                        :key="tag"
                        v-for="tag in userTypeStr"
                        closable
                        :disable-transitions="false"
                        @close="closeTag(tag)">
                        {{tag}}
                    </el-tag>
                    <el-button class="button-new-tag" size="small" @click="dialogVisible = true">+ 添加喜好</el-button>
                </div>
            </div>
        </div>
        <div class="navbar">
            <nav class="nav">
                <a :href="`#/user/${userId}`" :class="{highlight: highlight.collect}">
                    <i class="iconfont icon-shoucangfill"></i><span>收藏夹</span>
                </a>
                <a :href="`#/user/${userId}/history`" class="history" :class="{highlight: highlight.history}">
                    <i class="iconfont icon-lishijilu"></i><span>历史记录</span>
                </a>
                <a :href="`#/user/${userId}/comment`" :class="{highlight: highlight.comment}">
                    <i class="iconfont icon-pinglun"></i><span>我的评论</span>
                </a>
            </nav>
        </div>
        <el-dialog
            title="请选择喜好"
            :visible.sync="dialogVisible"
            width="40%"
            :before-close="handleClose">
            <el-button  v-for="(type,index) in allType" :key="index"  :plain="true" @click="addType(type.typeId,index)">{{type.typeName}}</el-button>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputVisible: false,
            inputValue: '',
            highlight: {
                collect: false,
                history: false,
                comment: false
            },
            dialogVisible: false,
            userInfo: {},
            userType: [],
            userTypeStr: [],
            allType: [],
            routePath: this.$route.path
        }
    },
    methods: {
        closeTag(tag) {
            let index = this.userTypeStr.indexOf(tag)
            let typeId = this.userType[index].typeId
            this.$http.delete(`/api/userAndType/userId/${this.userId}/typeId/${typeId}`).then( (response)=>{
                if(response.data==1){
                    this.userType.splice(index,1)
                    this.userTypeStr.splice(index,1)
                }
            },(response)=>{
                console.log('连接失败！')
            })
        },
        handleClose(done) {
            this.dialogVisible = false;
        },
        getHighlight(){
            let temp = this.routePath.split('/')
            if(temp.length==3){
                this.highlight.collect = true;
            }
            else{
                this.highlight[temp[3]] = true;
            }
        },
        getUserType(){
            this.$http.get(`/api/userAndType/userId/${this.userId}`).then( (response)=>{
                this.userType = response.data
                let len = this.userType.length
                for(let i=0;i<len;i++){
                    this.userTypeStr.push(this.userType[i].typeName)
                }
            },(response)=>{
                console.log('连接失败！')
            })
        },
        getAllType(){
            this.$http.get(`/api/userAndType/type`).then( (response)=>{
                this.allType = response.data
            },(response)=>{
                console.log('连接失败！')
            })
        },
        addType(typeId,index){
            this.$http.get(`/api/userAndType/userId/${this.userId}/typeId/${typeId}`).then( (response)=>{
                if(response.data==1){
                    this.$message({
                        message: '你已经添加过这个喜好了哦！',
                        type: 'warning'
                    })
                }
                else {
                    this.$http.post(`/api/userAndType/userId/${this.userId}/typeId/${typeId}`).then( (response)=>{
                        if(response.data==1){
                            this.userTypeStr.push(this.allType[index].typeName)
                            this.userType.push({typeId:this.allType[index].typeId,typeName:this.allType[index].typeName})
                            this.$message({
                                message: '添加成功！',
                                type: 'success'
                            })
                        }
                    })
                }
            },(response)=>{
                console.log('连接失败！')
            })
        },
        getUserInfo(){
            this.$http.get(`/api/user/${this.userId}`).then( (response)=>{
                this.userInfo = response.data
            },(response)=>{
                console.log('连接失败！')
            })
        }
    },
    props: ['userId'],
    created(){
        this.getHighlight()
        this.getUserType()
        this.getAllType()
        this.getUserInfo()
    }
}
</script>

<style scoped>
.pcNav{
    width: 100%;
    height: 200px;
    background: url('/static/img/pcbg5.jpg');
    background-position: 0 60%;
    background-size: 100%;
}
.input-new-tag{
    width: 100px;
}
.el-tag{
    color: bisque;
}
.head{
    display: inline-block;
    width: 70px;
    border-radius: 50%;
}
.name{
    color: white;
    font-size: 25px;
    font-weight: bold;
    width: 500px;
    display: inline-block;
    position: relative;
    left: 5px;
    top: -15px;
}
.name p {
    margin: 5px;
}
.userInfo{
    position: absolute;
    width: 800px;
    top: 100px;
    left: 30px;
}
.icon-shoucangfill{
    color: rgb(243, 160, 52);
}
.icon-lishijilu{
    color: rgb(0, 192, 145);
}
.navbar{
    width: 100%;
    height: 66px;
    background: white;
}
.nav{
    position: relative;
    width: 80%;
    left: 5%;
    top: 20px;
}
.nav a{
    text-decoration: none;
    margin: 10px;
    padding-bottom: 21px;
}
.highlight{
    border-bottom: 3px solid rgb(0, 161, 214);
}
.nav a:hover{
    border-bottom: 3px solid rgb(0, 161, 214);
}
.nav a i{
    font-size: 23px;
}
.nav a span{
    font-size: 16px;
    color: black;
    position: relative;
    top: -2px;
    left: 2px;
}
.nav a span:hover{
    color: rgb(37, 195, 235);
} 
.border{
    position: absolute;
    width: 100px;
    border: 1px solid black;
}
</style>


