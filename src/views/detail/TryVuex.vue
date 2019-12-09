<template>
    <div>tryVuex
    <div @click="changeNum">姓名{{name}},年龄{{age}},次数{{num}}</div>
      <button @click="changeNumAnsyc">change</button>
    </div>
</template>

<script>
    export default {
        name: "TryVuex",
        computed:{
            //一般会在组件的计算属性（computed）获取state的数据（因为，计算属性会监控数据变化，一旦发生改变就会响应）
           name:function () {
               return this.$store.state.name;
           },
            age:function () {
                return this.$store.getters.getAge
            },
            num:function () {
                return this.$store.state.num
            }
        },
        methods:{
            changeNum:function () {
                this.$store.commit('change',10)
            },
            changeNumAnsyc:function () {
                this.$store.dispatch('add',5)
                //dispatch就会通知actions（跟commit一样一样的）参数跟commit也是一样的。
            }
        }
    }
</script>


<style scoped>

</style>
