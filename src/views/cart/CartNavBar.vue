<template>
  <nav-bar class="nav-bar">
    <span slot="center">购物车</span>
  </nav-bar>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "CartNavBar",
        components:{
            NavBar
        }
    }
</script>

<style scoped>
.nav-bar{
  color: #d4237a
}
  span{
    color: white;
  }
</style>
