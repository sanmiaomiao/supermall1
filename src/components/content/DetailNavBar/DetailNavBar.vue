<template>
  <div class="detail-navbar">
    <nav-bar>
      <div slot="left" class="detail-left" @click="backClick">
        <img src="../../../assets/img/detail/back.svg">
      </div>
      <div slot="center" class="detail-center">
        <span class="detail-center-item" v-for="(item,index) in title" :key="item" :class="{active:index===currentIndex}" @click="itemClick(index)">{{item}}</span>
      </div>

    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../common/navbar/NavBar";
    export default {
        name: "DetailNavBar",
        props:{
          title:{
              type:Array,
              default(){
                  return []
              }
          }
        },
        data(){
          return{
              currentIndex:0,

          }
        },

        components:{
            NavBar
        },
        methods:{
            itemClick(index){
                this.currentIndex=index;
                this.$emit('itemClick',index)
            },
            backClick(){
                console.log('返回');
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
  .detail-center{
    display: flex;
  }
  .detail-center-item{
    flex: 1;
  }
  .detail-left img{
    width: 40%;
    margin-top: 10px;


  }
  .active{
    color:var(--color-height-text)
  }
</style>
