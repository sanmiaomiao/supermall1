<template>
    <div class="detail-swiper">
      <swaper ref="swaper">
        <img slot="slide1" :src="topimages[0]"/>
        <img slot="slide2" :src="topimages[1]"/>
        <img slot="slide3" :src="topimages[2]"/>
        <img slot="slide4" :src="topimages[3]"/>
        <img slot="slide5" :src="topimages[4]"/>
      </swaper>

    </div>
</template>

<script>
  import Swaper from "../../../components/common/swaper/Swaper";
    export default {
        name: "DetailSwiper",
        components: {Swaper},
        props:{
            topimages:{
                type:Array,
                default(){
                    return []
                }

            }
        }
        ,
        methods:{
            switchClick(index){
                this.$refs.swaper.swiper.slideTo(index);
            }
        }
    }
</script>

<style scoped>
.detail-swiper{

}
  img{
    height: 350px;
    width: 100%;

  }
</style>
