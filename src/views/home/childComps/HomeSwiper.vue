<template>
  <swaper class="home-swiper" >
    <a slot="slide1">
      <img src="../../../assets/img/home/lunbotu1.jpg"  alt="" @load="imageLoad">
    </a>
    <a slot="slide2">
      <img src="../../../assets/img/home/lunbotu2.jpg"  alt="">
    </a>
    <a slot="slide3">
      <img src="../../../assets/img/home/lunbotu3.jpg"  alt="">
    </a>
    <a slot="slide4">
      <img src="../../../assets/img/home/lunbotu4.jpg"  alt="">
    </a>

  </swaper>
</template>

<script>
    import Swaper from "../../../components/common/swaper/Swaper";
    export default {
        name: "HomeSwiper",
        components:{
            Swaper,
        },
        data(){
            return{
                isLoad:false
            }
        },
        methods:{
            imageLoad(){
                console.log('----');
                if(!this.isLoad){
                    this.$emit('imageLoad')
                    this.isLoad=true
                }

            }
        }

    }
</script>

<style scoped>
  .home-swiper img{
    height: 150px;
    width: 100%;
  }
</style>
