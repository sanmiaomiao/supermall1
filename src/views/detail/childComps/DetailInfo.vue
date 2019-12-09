<template>
    <div class="detail-info">
      <div class="title">{{title}}</div>
      <div class="detail-info-top">
        <div class="top-t" >
          <span>价格:</span>
          <span class="oldprice">{{currency+Oldprice}}</span>
        </div>
        <div class="top-b">
          <div class="top-b-l">
            <span>促销价:</span>
            <span class="price">{{currency+price}} </span>
          </div>
          <div class="top-b-c">

          </div>
          <div class="top-b-r">
            <span>评价:</span>
            <span class="comment">{{comments}} </span>
            <span>累计销量:</span>
            <span class="comment">{{sellcount}} </span>
          </div>
        </div>
      </div>
      <div class="detail-info-bottom">
        <div class="kefu">
          <span>客服:</span>
          <div class="kefu-span">
             <img src="../../../assets/img/home/star.svg" class="star">
            <span class="kefu-lianxi">联系客服</span>
          </div>
        </div>
        <div class="color">
            <span>颜色:</span>
            <div v-for="(item,index) in color" :key="item" class="color-item" @click="colorClick(index)" >
              <img :src="item" :class="{colorbord:index===currentColorIndex}"/>
            </div>
        </div>
        <div class="size">
          <span>尺码:</span>
          <div class="size-item" v-for="(item,index) in size" :key="item" @click="sizeClick(index)" ><span :class="{sizebord:index===currentSizeIndex}" >{{item}}</span></div>
        </div>
        <div class="shuliang">
          <span>数量:</span>
          <span class="add" @click="subClick">-</span>
          <span class="addnum">{{number}}</span>
          <span class="add" @click="addClick" >+</span>
          <span class="kucun">库存2210件</span>
        </div>
        <div class="tijiao">
          <div class="likogoumai" @click="buyClick">立刻购买</div>
          <div class="jiarugouwuche" @click="addCart">加入购物车</div>
        </div>
        <div class="fuwu">
          <span class="shuoming">服务说明:</span>
          <div class="fuwu-content">
            <div class="fuwu-item">
              <img src="../../../assets/img/home/star.svg">
              <span>72小时发货</span>
            </div>
            <div class="fuwu-item">
              <img src="../../../assets/img/home/star.svg">
              <span>7天无理由退货</span>
            </div>
            <div class="fuwu-item">
              <img src="../../../assets/img/home/star.svg">
              <span>延误必赔</span>
            </div>
            <div class="fuwu-item">
              <img src="../../../assets/img/home/star.svg">
              <span>退货补运费</span>
            </div>
          </div>

        </div>
       <buy-now v-show="buynow"></buy-now>
      </div>
    </div>
</template>

<script>
  import BuyNow from "../../../components/content/buynow/BuyNow";


    export default {
        name: "DetailInfo",
        components: { BuyNow,},
        data(){
            return{
                title:'',
                currency:'',
                Oldprice:0,
                price:0,
                comments:0,
                sellcount:0,
                color:[1,2,3,4,5],
                size:['S','M','L','XL','XXL'],
                currentSizeIndex:0,
                currentColorIndex:0,
                number:0,
                sizeSelected:'S',
                collection:0,
                collectionClicknum:0,
                buynow:false,
                collectedurl:"../../../assets/img/detail/star_blue.svg",
                uncollectedurl:"../../../assets/img/home/star.svg",
            }
        },
        props:{
            detailInfo:{
                type:Object,
                default (){
                    return {}
                }
            }
        },
        computed:{
            iscollect(){
                let url=this.collectionClicknum%2===1?this.collectedurl:this.uncollectedurl;
                return url
            },

        },
        created() {
            console.log('DetailInfo的created发生');
            this.setdetaildata()
        },
        methods:{
            sizeClick(index){
                console.log('点击size')
              this.currentSizeIndex=index
                this.sizeSelected=this.size[index]
                console.log(this.sizeSelected)
            },
            subClick(){
                console.log('减少');
                if(this.number===0){
                    this.number=0
                }else {
                    this.number=this.number-1;
                }

            },
            addClick(){
                console.log('增加');

                this.number=this.number+1;
            },
            colorClick(index){
                console.log('点击图片');
                this.currentColorIndex=index;
                this.$emit('colorClick',index)
            },
            buyClick(){
                console.log('点击购物');
                this.$emit('buyClick');
            },
            addCart(){
                console.log('加入购物车');
                alert('添加购物车成功！')
                this.$emit('addCart');
            },
           setdetaildata(){
               console.log("setdetaildata");
               this.currency=this.detailInfo.normalPrice.currency
               this.Oldprice=this.detailInfo.normalPrice.oldPrice
               this.price=this.detailInfo.normalPrice.nowPrice
               this.comments=this.detailInfo.cRate
               this.sellcount=this.detailInfo.sales
               this.color=this.detailInfo.topimg2
               this.collection=this.detailInfo.collection
               this.title=this.detailInfo.title

               console.log("this.title")
               console.log(this.detailInfo)
           }
        }
    }
</script>

<style scoped>
  .detail-info{
    font-size: 13px;
  }
  .title{
    font-size: 20px;
    padding: 10px 10px;
    font-family: "Microsoft Sans Serif";
  }
.detail-info-top{
  background-color: #f5f3f3;
  font-size: 13px;
}
.top-t{
  margin-bottom: 10px;
}
  .top-b{
    display: flex;
    width: 100%;


  }
.top-b-l{
  width:50%;
}

.top-b-r{
 width: 50%;
  padding-right: 0;
}
  span{
    margin-right: 10px;
  }
  .price{
    font-size: 20px;
    font-weight: bold;
    color: red;
  }
  .oldprice{
    text-decoration: line-through;
  }
  .kefu{
    width: 40%;
    margin-bottom: 10px;
    display: flex;
  }
  .kefu-span{
    border: 1px solid #d0cbcb;
    height: 26px;
    display: flex;
    align-items: center;
  }
  .kefu-lianxi{
    margin-bottom: 5px;
    line-height: 44px
  }

  .star{
    width: 20px;
    vertical-align: middle

  }
  .color{
    display: flex;
    margin-bottom: 20px;
  }
  .color-item{
    flex: 1;
    width: 40px;
  }
  .color-item img{
    width: 40px;
  }
  .color span{
    margin-right: 20px;
  }
  .size{
    display: flex;
    margin-right: 50px;
    margin-bottom: 20px;
  }
  .size span{
    margin-right: 20px;
  }
  .sizebord{
   background-color: gainsboro;
  }
  .colorbord{
    border: 1px solid #ff5777;

  }
  .size-item{
    flex: 1;
    justify-content: space-between;
    font-weight: bold;

  }
  .size-item span{
    border: 1px solid #d0cbcb;
    padding: 4px;
  }
  .shuliang{
    margin-bottom: 20px;
  }
  .add{
    border: 1px solid #d0cbcb;
    margin: 0;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
  }
  .addnum{
    border: 1px solid #d0cbcb;
    margin: 0;
    font-size: 14px;
    padding: 5px 20px;
  }
  .kucun{
    margin-left: 20px;
  }
  .tijiao{
    display: flex;
    font-size: 18px;
   padding: 0 40px;
    height: 50px;
    margin-bottom: 20px;
  }
  .likogoumai{
    margin-right: 10px;
    color: white;
    background-color: red;
    padding: 0 20px;
    line-height: 50px;
  }
  .jiarugouwuche{
    padding: 0 20px;
    line-height: 50px;
    border: 1px solid #d0cbcb;
  }
  .shoucang-fenxiang{
    display: flex;
    padding-left:40px;
    margin-bottom: 20px;

  }
  .shoucang{
    border-radius: 1.15rem;
    margin-right: 10px;
    border: 1px solid #d0cbcb;
  }
  .collected{
    display: none;
  }
  .fenxiang{
    margin-right: 10px;
    border-radius: 1.15rem;
    padding-bottom: 2px;
    border: 1px solid #d0cbcb;
  }
  .jia{
    padding-left: 10px;
    color: red;
    font-weight: bold;
    font-size: 15px;
  }

  .shoucang img{
    width: 15px;
    margin-right:5px ;
  }
  .fuwu img{
    width: 20px;
  }
  .fuwu{
    display: flex;
    margin-bottom: 20px;
  }
  .fuwu-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

  }
  .shuoming{
    width: 74px;
  }


</style>
