<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <slot name="slide1"></slot>
      </div>
      <div class="swiper-slide">
        <slot name="slide2"></slot>
      </div>
      <div class="swiper-slide">
        <slot name="slide3"></slot>
      </div>
      <div class="swiper-slide">
        <slot name="slide4"></slot>
      </div>
    </div>
  </div>
</template>

<script>
    import Swiper from 'swiper';

    export default {
        name: "Swaper",
        mounted() {
          new Swiper('.swiper-container', {
                autoplay: true,//可选选项，自动滑动
            })
        }
    }

</script>

<style scoped>
  @import "../../../../node_modules/swiper/css/swiper.min.css";
</style>
