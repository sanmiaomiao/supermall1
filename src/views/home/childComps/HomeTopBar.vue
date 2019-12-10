<template>
   <nav-bar>
     <div slot="left">
       <img src="../../../assets/img/home/mulu.svg">
     </div>
     <div slot="center">
       <form class="search-form" action="/home" @click="search">
         <img src="../../../assets/img/home/sousuo.svg">
         <div class="input" style="border:0px;outline:none;cursor: pointer">马丁靴</div>
       </form>
     </div>
     <div slot="right"></div>
   </nav-bar>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
    export default {
        name: "HomeTopBar",
        components: {NavBar},
        methods:{
            search(){
                console.log('点击了搜索')
                this.$emit('search');
            }
        }
    }
</script>

<style scoped>
.left img{
  width: 33px;
  vertical-align: middle;
  margin-left: 15px;
}
.search-form{
  height: 30px;
  background-color: #eee;
  margin: 8px;
  border-radius: 5%;
  display: flex;
  justify-content: left;
  align-items: center;
}
.search-form img{
    width: 15px;
  margin-left: 10px;
  }
  .input{
    font-size: 12px;
    color: #999;
    margin-left: 5px;
  }
</style>
