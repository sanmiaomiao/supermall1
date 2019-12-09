import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//创建state
const state={
  //存放组件间共享的数据
  cartdata:[],
  itemId:'',
  shopdata:[],
  bozhudata:[],
};

export default new Vuex.Store({
  state,
  actions:{
    //设置延时
  /*  add:function (context,value) {
      setTimeout(function () {
        //提交事件
        context.commit('changeAsync',value)
        //context：context是与 store 实例具有相同方法和属性的对象。可以通过context.state和context.getters来获取 state 和 getters。
      },3000)
    }*/
    },
    mutations:{
    //存数据
    //显式的更改state的数据
    /*  change:function (state,a) {
        console.log(state.num +=a)//即实现更改数据，同时实现打印
      },
      changeAsync:function (state,a) {
        console.log(state.num +=a);
      },
      */
      //添加购物车
      addCart:function (state,data) {
        //data是组件传入的对象
        console.log(state.cartdata.push(data))
      },
      //保存itemID
      saveitemId:function (state,id) {
        console.log(state.itemId=id)
      },
      //添加关注
      focusshop:function (state,data) {
        console.log(state.shopdata.push(data))
      },
      //添加关注
      focusbozhu:function (state,data) {
        console.log(state.bozhudata.push(data))
      }
    },
    getters:{
      //获取数据的方法
      getCartData:function(state){
        return state.cartdata;
      },
      getitemId:function () {
        return state.itemId;
      },
      getfocusshop:function (state) {
        return state.shopdata;
      },
      getfocusbozhu:function (state) {
        return state.bozhudata;
      }

    }
  }

)
