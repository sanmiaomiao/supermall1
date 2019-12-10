<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">达人直播间</div>
    </nav-bar>
    <record/>
  </div>

</template>

<script>
  import Record from "../trylive/Record";
  import NavBar from "../../common/navbar/NavBar";
    export default {
        name: "BuzhuRecord",
        components:{
            NavBar,
            Record
        }
    }
</script>

<style scoped>

.home-nav{
  width: 100vw;
  background-color: var(--color-tint);
  color: white;
}
</style>
