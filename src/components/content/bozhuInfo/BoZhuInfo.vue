<template>
    <div class="bozhu-info">
      <img class="bozhu-img" src="https://s11.mogucdn.com/mlcdn/c45406/191020_260k1kjf6fd7174gc7ci32db6legc_400x400.jpg_180x999.v1c96.40.webp" alt="酸甜的梅子酱">
    <div class="buzhu-detail">
      <span class="buzhu-name">酸甜的梅子酱</span>
      <div class="buzhu-data"><span class="first-span">161cm 53kg</span><span class="first-span">武汉</span><span>学生</span></div>
      <div class="focus-chat">
        <div class="focus" @click="focusBozhu"><span>+</span><span>关注</span></div>
        <div class="chat"><img src="../../../assets/img/bozhu/xiaoxi.svg"/><span>私聊</span></div>
      </div>
       </div>

    </div>
</template>

<script>
    export default {
        name: "BoZhuInfo",
        methods:{
            focusBozhu(){

            }
        }
    }
</script>

<style scoped>
  .bozhu-img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: 5px;
  }
.bozhu-info{
  display: flex;
  align-items: center;
}
  .buzhu-detail{
    text-align: center;
  }
  .buzhu-name{
    font-weight: bold;
  }
  .buzhu-data{
    display: flex;
    justify-content: space-around;
  }
  .buzhu-data span{
    margin: 10px;
    padding-right: 5px;
  }
  .first-span{
   border-right: 1px solid;
  }
  .focus-chat{
    display: flex;
    justify-content: center;
  }
  .focus{
    border: 1px solid deeppink;
    border-radius: 1.5rem;
    padding: 4px 11px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .chat{
    border: 1px solid deeppink;
    border-radius: 1.5rem;
    padding: 3px 7px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .chat img{
    width: 19px;
    margin-right: 5px;
  }

</style>
