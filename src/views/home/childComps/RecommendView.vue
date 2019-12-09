<template>
<div class="recommend">
    <a class="recommend-item">
      <img src='../../../assets/img/home/recommend1.jpg' alt="">
      <div class="title">时尚风向标</div>
    </a>
  <a class="recommend-item" >
    <img src='../../../assets/img/home/recommend2.jpg' alt="">
    <div class="title">最后疯抢</div>
  </a>
  <a class="recommend-item">
    <img src='../../../assets/img/home/recommend3.jpg' alt="">
    <div class="title">精选人气爆款</div>
  </a>
  <a class="recommend-item">
    <img src='../../../assets/img/home/recommend4.jpg' alt="">
    <div class="title">热度TOP1</div>
  </a>
  </div>

</template>

<script>
    export default {
        name: "RecommendView",
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                baseUrl:'../../../assets/img/home/recommend1.jpg',
                endUrl:'.jpg'
            }

        }
    }
</script>

<style scoped>
.recommend{
  display: flex;
  padding: 10px 5px 20px;
  border-bottom: 8px solid #eee;

}
.recommend-item{
  flex:1;
  text-align: center;
}
  .recommend img{

    height: 85px;
    width: 85px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
.title{
  text-align: center;
  font-size: 12px;
}
</style>
