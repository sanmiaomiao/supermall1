<template>
    <div class="back-top" >
      <img src="../../../assets/img/home/top.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop",

    }
</script>

<style scoped>
.back-top{
  position: fixed;
  right:10px;
  bottom: 60px;
  background-color: white;
  border-radius: 50%;
  z-index:9;
}
  img{
    width: 40px;
    height: 40px;
  }
</style>
