<template>
  <div class="add-cart">
    <div class="top">
      <nav-bar class="nav-bar">
        <span slot="center">购物车</span>
      </nav-bar>
    </div>
      <div class="center">
        <div v-for="item in data" :key="item" class="center-item">
          <label :for="item"></label>
          <input type="checkbox" class="checkbox" name="product" :id="item.title" :value="item" v-model="checkedNames">
          <img :src="item.pic" class="item-pic">
          <div class="details">
            <div class="title">{{item.title}}</div>
            <div class="color-size"><span>颜色:{{item.color+1}}号</span><span>尺码:{{item.size}}</span></div>
            <div class="price-num">
              <span class="price">￥{{item.price}}</span>
              <span>x{{item.num}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="quanxuan">
          <input type="checkbox" class="checkbox" id="checkbox" v-model="checked" @click="changeAllChecked()">全选
        </div>
        <div class="heji">
          合计<span>￥{{money}}</span>
        </div>
        <div class="jiesuan">
          <button @click="tijiao">结算({{checkedNames.length}})</button>
        </div>
      </div>

  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "Cart",
        data(){
            return{
              data:[],
                checked: false,
                checkedNames: [],
                checkedArr:[]
            }
        },
        components: { NavBar},
        created(){
            if(localStorage.getItem('cartdata')){
                console.log('local里面有购物车的数据');
                this.data=JSON.parse(localStorage.getItem('cartdata'));
                for(let i=0;i<this.data.length;i++){
                    this.checkedArr.push(this.data[i])
                }

            }else {
                this.getdatas()
            }

          },
        computed:{
            //一般会在组件的计算属性（computed）获取state的数据（因为，计算属性会监控数据变化，一旦发生改变就会响应）
            getCartData:function(){
                return this.$store.getters.getCartData
            },
            money:function () {
                let price=0;
                for(let i=0;i<this.checkedNames.length;i++){
                    price=price+parseInt(this.checkedNames[i].price)
                }
                return price
            },
        },

        methods:{
            getdatas(){
                this.data=this.getCartData
                console.log("this.data")
                console.log(this.data)
                //保存数据
               // localStorage.setItem('cartdata',JSON.stringify(this.data))
            },
            changeAllChecked: function () {
                // var self=this;
                this.checked=!this.checked;
                if (!this.checked) {
                    this.checkedNames=[]
                } else {
                    this.checkedNames=this.checkedArr;
                }
            },
            tijiao(){
                console.log(this.checkedNames);
                console.log(this.money)

            }

        },
        watch:{
            "checkedNames":function(){
                if(this.checkedNames.length!==this.checkedArr.length){
                    this.checked=false
                }else{
                    this.checked=true
                }
            }
        }

    }
</script>

<style scoped>
  .center{

  }
  .gou{
    width: 30px;
  }
.item-pic{
  width: 80px;
}
  .center-item{
    display: flex;
    align-items: center;
  }
  .details{
    align-self: flex-start;
    padding: 10px;
  }
  .price-num{
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
  }
  .price{
   color: #d4237a
  }
  .nav-bar{
    background-color: #d4237a;
    color: white;
  }
  .color-size{
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    font-size: 15px;
    color: #b5aeae;
  }
  .bottom{
    position: fixed;
    bottom: 56px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: lightgray;
    height: 40px;
    font-size: 17px;
    align-items: center;
  }
  button{
    padding: 8px 18px;
    background-color: #d4237a;
  }
  .checkbox{
    width: 40px;
  }
</style>
