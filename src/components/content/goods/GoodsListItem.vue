<template>
    <div class="goods-item" @click="itemClick">
      <img :src="goodsItem.show.img" alt="" >
      <div class="goods-info" >
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props:{
            goodsItem:{
                type:Object,
                default(){
                    return {}
                }
            }
        },

        methods:{
            itemClick(){
                console.log(this.goodsItem)
                //保存itemId数据到vuex
                let id=this.goodsItem.iid;
                this.$store.commit('saveitemId',id)
                console.log('跳转到详情页')
                this.$router.history.push('/detail')
            }
        }
    }
</script>

<style scoped>
  .goods-item{
    padding-bottom: 40px;
    position: relative;

  }
img{
  width: 100%;
  border-radius: 5px;

}
  .goods-info{
    position: absolute;
    left:0;
    right: 0;
    bottom: 5px;
    overflow: hidden;
    font-size: 12px;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;/*当文本溢出时是否显示省略标记*/
   /* 要实现溢出时产生省略号的效果还须定义：
    强制文本在一行内显示（white-space:nowrap）及溢出内容为隐藏（overflow:hidden），
  只有这样才能实现溢出文本显示省略号的效果。*/
    white-space: nowrap;
    margin-bottom: 2px;
  }
  .price{
    margin-right: 20px;
    color: var(--color-height-text);
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top:-1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/home/star.svg") 0 0/14px 14px;
  }
</style>
