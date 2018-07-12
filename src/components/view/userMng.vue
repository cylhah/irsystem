<template>
    <div class="main">
        <div class="mid">
            <div class="today">
                <p class="mycon"><i class="iconfont icon-account"></i></p>
                <p class="number">2</p>
                <div class="item">
                    <span>今日注册用户</span>
                </div>
            </div>
            <div class="today">
                <p class="mycon1"><i class="iconfont icon-iconfontfuwushichang"></i></p>
                <p class="number1">10</p>
                <div class="item1">
                    <span>本周注册用户</span>
                </div>
            </div>
            <div class="today">
                <p class="mycon2"><i class="iconfont icon-wxbzhanghu"></i></p>
                <p class="number2">40</p>
                <div class="item2">
                    <span>本月注册用户</span>
                </div>
            </div>
            <div class="pickDate">
                <span class="demonstration">请选择用户注册时间</span>
                <el-date-picker
                    v-model="value7"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions2">
                </el-date-picker>
                <el-button icon="el-icon-search" circle  @click="search"></el-button>
            </div>
            <div class="articleList">
                <h3>用户列表</h3>
                <el-table
                    :data="userList"
                    style="width: 100%"
                    >
                    <el-table-column
                    prop="userId"
                    label="用户编号"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="userRegisTime"
                    label="注册日期"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="userEmail"
                    label="用户邮箱"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="userAccount"
                    label="用户名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="userName"
                    label="用户昵称">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     data(){
        return {
            pickerOptions2: {
            shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近一个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近三个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
                }
            }]
            },
            value7: '',
            userList: []
        }
    },
    methods: {
        search(){
            let date = new Date(this.value7[0])
            let date1 = new Date(this.value7[1])
            let sDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
            let eDate = date1.getFullYear()+'-'+(date1.getMonth()+1)+'-'+date1.getDate()
            this.$http.post(`/api/user/date`,{
                sDate,eDate
            },{
                emulateJSON: true
            }).then( (response)=>{
                this.userList = response.data
                for(let i=0;i<this.userList.length;i++){
                    this.userList[i].userRegisTime = this.userList[i].userRegisTime.replace('T',' ').substr(0,16)
                }
            },(response)=>{
                console.log('连接失败！')
            })
        }
    }
}
</script>

<style scoped>
.main{
    width: 1300px;
    padding: 20px;
    position: relative;
    margin: 0 auto;
    background: rgb(229, 235, 242);
}
.mid{
    width: 1200px;
    position: relative;
    margin: 0 auto;
}
.today{
    width: 374px;
    padding-top: 5px;
    margin: 10px;
    background: white;
    border-radius: 5px;
    text-align: center;
    display: inline-block;
}
.mycon i{
    font-size: 80px;
    color: rgb(92, 184, 92);
}
.mycon1 i{
    font-size: 80px;
    color: rgb(76, 177, 207);
}
.mycon2 i{
    font-size: 80px;
    color: rgb(240, 173, 78);
}
.number{
    font-size: 25px;
    color: rgb(92, 184, 92);
}
.number1{
    font-size: 25px;
    color: rgb(76, 177, 207);
}
.number2{
    font-size: 25px;
    color: rgb(240, 173, 78);
}
.today p{
    margin: 5px;
}
.item{
    width: 100%;
    background: rgb(92, 184, 92);
    padding: 10px 0;
    color: white;
    text-align: center;
}
.item1{
    width: 100%;
    background: rgb(76, 177, 207);
    padding: 10px 0;
    color: white;
    text-align: center;
}
.item2{
    width: 100%;
    background: rgb(240, 173, 78);
    padding: 10px 0;
    color: white;
    text-align: center;
}
.pickDate{
    position: relative;
    top: 5px;
    left: 10px;
}
.demonstration{
    font-weight: bold;
}
.articleList{
    position: relative;
    top: 5px;
    left: 10px;
}
</style>


