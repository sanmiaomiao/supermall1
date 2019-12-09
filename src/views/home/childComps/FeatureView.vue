<template>
   <div class="feature" @click="goTo">
       <img src="../../../assets/img/home/feature.jpg" alt="">
     <div class="feature-content">
       <div class="feature-title">
         达人直播
       </div>

     </div>
   </div>
</template>

<script>
    export default {
        name: "FeatureView",
        methods:{
            goTo(){
                this.$router.history.push('/salevideo')
            }
        }
    }
</script>

<style scoped>
  .feature{
    display: flex;
    align-items: center;
  }
.feature img{
  height: 120px;
  width:70%
}
  .feature-content{
    background-color: #dfab79;
    width: 30%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .feature-title{
    font-size: larger;
    font-weight: bold;
  }
</style>
