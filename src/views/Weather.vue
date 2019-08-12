<template>
    <div id="weather" class="weather">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <el-row>
                    <el-col :span="24" class="list">
                        <div>
                            <h5>未来天气列表</h5>
                            <el-table
                                    :data="tableData"
                                    style="width: 100%"
                                    border>
                                <el-table-column
                                        prop="date"
                                        label="日期">
                                </el-table-column>
                                <el-table-column
                                        prop="high"
                                        label="高温"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="low"
                                        label="低温">
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24" class="temperature-chart">
                        <div>
                            <h5>温度趋势图</h5>
                            <ve-line :data="chartData" :settings="chartSettings"></ve-line>
                        </div>
                    </el-col>
                </el-row>

            </el-main>
        </el-container>
    </div>
</template>

<script>
    import VeLine from 'v-charts/lib/line.common'
    export default {
        name: "Weather",
        components: { VeLine },
        data: function(){
            return {
                tableData: [
                    {
                        "date": "24",
                        "sunrise": "05:28",
                        "high": "高温 38.0℃",
                        "low": "低温 28.0℃",
                        "sunset": "19:35",
                        "aqi": 87,
                        "ymd": "2019-07-24",
                        "week": "星期三",
                        "fx": "西北风",
                        "fl": "3-4级",
                        "type": "多云",
                        "notice": "阴晴之间，谨防紫外线侵扰"
                    },{
                        "date": "24",
                        "sunrise": "05:28",
                        "high": "高温 38.0℃",
                        "low": "低温 28.0℃",
                        "sunset": "19:35",
                        "aqi": 87,
                        "ymd": "2019-07-24",
                        "week": "星期三",
                        "fx": "西北风",
                        "fl": "3-4级",
                        "type": "多云",
                        "notice": "阴晴之间，谨防紫外线侵扰"
                    },
                ],
                chartData: {
                    columns: ['日期', '最高温', '最低温'],
                    rows: [
                        { '日期': '8/7', '最高温': 13, '最低温': 10},
                        { '日期': '8/8', '最高温': 35, '最低温': 32},
                        { '日期': '8/9', '最高温': 29, '最低温': 26},
                        { '日期': '8/10', '最高温': 17, '最低温': 14},
                        { '日期': '8/11', '最高温': 37, '最低温': 34},
                        { '日期': '8/12', '最高温': 15, '最低温': 10}
                    ]
                }
            }
        },
        // created: function(){
        //   // 类似methods,只是不用事件触发，vue实例创建时（用户看到页面时）就请求了，相当于jquery里的onready() 。
        //   预先需要的数据可以在created 或mounted 周期发起请求。
        //   this.axios.get('/api/weather', {
        //
        //   }).then(function(resp){
        //     console.log(resp.data)
        //   })
        // },
        mounted(){
            // es6写法
            this.axios.get('/api/weather').then(
                (resp) => {
                    console.log(resp.data);
                    let forecast_days = resp.data.data.forecase
                    forecast_days.forEach((day,index)=>{
                        //循环数组
                        // 不能this.tableData[index]这种方式赋新值，数组长度不够时索引越界
                        // https://blog.csdn.net/shenzhen_zsw/article/details/84314842
                        // 应该this.$set(this.tableData,index,newRow)
                        this.$set(this.tableData, index, {
                            'date': day.date,
                            'high': day.high,
                            'low': day.low
                        })
                    });
                }
            );
            let _this = this;
            this.axios.get('/api/weather_chart').then(
                    function(resp){
                        console.log(resp.data);
                        let chart_columns = resp.data.chart_columns
                        let chart_rows = resp.data.chart_rows
                        _this.chartData.columns = chart_columns
                        _this.chartData.rows = chart_rows
                    }
            );
        },
        methods: {

        }
    }
</script>

<style type="css" scoped>
    /*.header {*/
    /*  background-color: lightblue;*/
    /*}*/
    /*.main {*/
    /*  background-color: lightgoldenrodyellow;*/
    /*}*/
</style>
