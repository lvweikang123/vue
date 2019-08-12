<template>
  <div id="student" class="student">
    <!-- 通过：style设置样式 -->
    <table :style="[render_table]">
      <!-- 通过：class设置样式 -->
      <!-- 添加数据的表单 -->
      <div :style="[render_form]" id="input_i" >
        <input type="search" v-model="no" placeholder="学号"><br>
        <input type="search" v-model="name" placeholder="姓名"><br>
        <input type="search" v-model="age" placeholder="年龄"><br>
        <input type="button" value="添加" @click="add" style="font-size: 15px">
      </div>
      <caption :class="['title']">学生信息管理系统</caption>
      <tr>
        <td>学号</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>操作</td>

      </tr>
<!--       遍历数据 -->
      <tr v-for="(stu,i) in list">
        <td><input type="text" v-model="stu.no"></td>
        <td><input type="text" v-model="stu.name"></td>
        <td><input type="text" v-model="stu.age"></td>
        <!-- 绑定点击事件并传参 -->
        <td><input type="button" value="删除" @click="del(i)"></td>
      </tr>
    </table>
  </div>
</template>



<script>
    export default {
        name: "Student",
        data: function () {
            return {
                no:"",
                name:"",
                age:"",
                list:[
                {
                    no:"001",
                    name:"TOM",
                    age:18,
                },{
                    no:"002",
                    name:"Juy",
                    age:19,
                },
                {	no:"003",
                    name:"Mlo",
                    age:20,
                }
            ],
                //设置样式
                render_table:{"width":"700px","text-align":"center"},
                render_form:{"width":"300px","text-align":"center","margin-top":"50px"}
          }
        },

        methods:{
            // 添加方法
            add(){
                this.list.push({no:this.no,name:this.name,age:this.age});
                this.no="";this.name="";this.age="";
            },
            //删除方法
            del(i){

                if(confirm("确定删除吗？")){
                    this.list.splice(i,1);
                }

            }
        }

    }
</script>

<style scoped>
    *{
      margin: 0 auto;
   }
    #input_i{
      text-align: center;
    }
    .student{
      background-image:url('../1.jpg');
      height: ;
    }
</style>