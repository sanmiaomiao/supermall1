<template>
    <div class="goods" >
    <goods-list-item v-for="item in goods" :key="item" :goods-item="item" class="goods-item"/>
    </div>
</template>

<script>
    import GoodsListItem from "./GoodsListItem";
    export default {
        name: "GoodsList",
        components: {GoodsListItem},
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },

        methods:{
            goodsClick(){
                console.log('goodsClick');
            },

        },

    }
</script>

<style scoped>
  .goods{
  display: flex;
  flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }

.goods-item{

  width: 48%;


}

</style>
