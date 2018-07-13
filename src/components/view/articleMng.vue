<template>
    <div class="main">
        <div class="mid">
            <div class="today">
                <p class="mycon"><i class="iconfont icon-text"></i></p>
                <p class="number">2</p>
                <div class="item">
                    <span>今日录入文章</span>
                </div>
            </div>
            <div class="today">
                <p class="mycon1"><i class="iconfont icon-juzhuanchang"></i></p>
                <p class="number1">12</p>
                <div class="item1">
                    <span>近一周录入文章</span>
                </div>
            </div>
            <div class="today">
                <p class="mycon2"><i class="iconfont icon-wxbbaobiao"></i></p>
                <p class="number2">14</p>
                <div class="item2">
                    <span>近一月录入文章</span>
                </div>
            </div>
            <div class="pickDate">
                <span class="demonstration">请选择文章录入日期</span>
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
                <h3>文章列表</h3>
                <el-table
                    :data="articleList"
                    style="width: 100%"
                    :row-class-name="tableRowClassName">
                    <el-table-column
                    prop="articleId"
                    label="文章编号"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="articleTime"
                    label="录入日期"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="articleTitle"
                    label="标题"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="typeName"
                    label="类型"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="source.sourceName"
                    label="来源">
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
            articleList: []
        }
    },
    methods: {
        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
            return 'warning-row';
            } else if (rowIndex === 3) {
            return 'success-row';
            }
            return '';
        },
        search(){
            let date = new Date(this.value7[0])
            let date1 = new Date(this.value7[1])
            let sDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
            let eDate = date1.getFullYear()+'-'+(date1.getMonth()+1)+'-'+date1.getDate()
            this.$http.post(`/api/article/date`,{
                sDate,eDate
            },{
                emulateJSON: true
            }).then( (response)=>{
                this.articleList = response.data
                for(let i=0;i<this.articleList.length;i++){
                    // let tempDate = new Date(this.articleList[i].articleTime)
                    // let temp = tempDate.getFullYear()+'-'+(tempDate.getMonth()+1)+'-'+tempDate.getDate()
                    this.articleList[i].articleTime = this.articleList[i].articleTime.replace('T',' ').substr(0,16)
                }
            },(response)=>{
                console.log('连接失败！')
            })
        }
    }
}
</script>

<style scoped>
.el-table .warning-row {
background: oldlace;
}

.el-table .success-row {
background: #f0f9eb;
}
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
    color: rgb(240, 67, 61);
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
    color: rgb(240, 67, 61);
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
    background: rgb(240, 67, 61);
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


