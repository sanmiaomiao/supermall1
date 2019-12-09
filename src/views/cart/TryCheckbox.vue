<template>
  <div id="app">
    <p>
      全选：
    </p>
    <input type="checkbox" id="checkbox" v-model="checked" @click="changeAllChecked()">
    <p>
      多个复选框：
    </p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <br>
    <span>
选择的值为:{{checkedNames}}
</span>
  </div>
</template>

<script>
    export default {
        name: "TryCheckbox",
        data() {
            return{
                checked: false,
                checkedNames: [],
                checkedArr:["Runoob","Google","Taobao"]
            }

        },
        methods: {
            changeAllChecked: function () {
               // var self=this;
                this.checked=!this.checked;
                if (!this.checked) {
                    this.checkedNames=[]
                } else {
                    this.checkedNames=this.checkedArr;
                }
            }
        },
        watch:{
            "checkedNames":function(){
                if(this.checkedNames.length!==this.checkedArr.length){
                    this.checked=false
                }else{
                    this.checked=true
                }
            }
        }

    }
</script>

<style scoped>
  #table {
    width:600px;
    height:200px;
    margin:100px auto;
  }
  #table label{
    padding:10px;
    font-size:16px;
    border:1px solid #ccc;
  }
  #table label input{
    height:20px;
    width:20px;
  }
  #table .active{
    color:red;
  }
</style>
