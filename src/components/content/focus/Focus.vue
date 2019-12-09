<template>
    <div class="my-focus">
    <focus-nav-bar :title="['我的关注']"/>
    <tab-control :titles="['用户','店铺']"
                 @tabClick="tabClick"
                 ref="tabControl2"
    />
      <div class="content">
        <focus-actor v-show="currentIndex===0"/>
        <focus-shop v-show="currentIndex===1"></focus-shop>
      </div>
    </div>
</template>

<script>
 import FocusNavBar from "./FocusNavBar";
 import TabControl from "../tabControl/TabControl";
 import FocusActor from "./FocusActor";
 import FocusShop from "./FocusShop";
    export default {
        name: "Focus",
        components: {TabControl, FocusNavBar,FocusActor,FocusShop},
        data(){
          return{
              currentIndex:0,
          }
        },
        methods:{
            tabClick(index){
                console.log(index)
                this.currentIndex=index
            }
        }
    }
</script>

<style scoped>
    .my-focus{
      height: 100vh;
      background-color: #f9f5f5;
    }

</style>
