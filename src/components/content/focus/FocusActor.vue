<template>
  <div class="bozhu-info">
    <img class="bozhu-img" src="https://s11.mogucdn.com/mlcdn/c45406/191020_260k1kjf6fd7174gc7ci32db6legc_400x400.jpg_180x999.v1c96.40.webp" alt="酸甜的梅子酱">
    <div class="buzhu-detail">
      <span class="buzhu-name">酸甜的梅子酱</span>
      <div class="buzhu-data"><span>161cm 53kg/&nbsp;下午三点开播哦宝宝们</span></div>
    </div>
    <div class="focus"><span>已关注</span></div>

  </div>
</template>

<script>
    export default {
        name: "FocusActor",

    }
</script>

<style scoped>
  .bozhu-img{
    width: 70px;
    height: 70px;
    border-radius: 100%;
    margin: 5px;
  }
  .bozhu-info{
    display: flex;
    align-items: center;
  }
  .buzhu-detail{
    text-align: left;
    margin-left: 10px;
  }
  .buzhu-name{
    font-weight: bold;
  }
  .buzhu-data{
    display: flex;
    justify-content: space-around;
    font-size: 13px;
  }
  .buzhu-data span{
    margin: 10px 0 0;
    padding-right: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 160px;
  }
  .first-span{
    border-right: 1px solid;
  }
  .focus-chat{
    display: flex;
    justify-content: center;
  }
  .focus{
    border: 1px solid #d6d6d6;
    border-radius: 1.5rem;
    padding: 4px 11px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    margin-left: 27px;
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

