<template>
    <div class="focus-shop">
      <div v-for="item in data" :key="item">
        <div class="top">
          <div class="top-left">
            <img class="shop-img" :src="item.shopLogo"/>
            <div>{{item.name}}</div>
          </div>
          <div class="focus"><span>已关注</span></div>
        </div>
       <!-- <div class="bottom">
          <raw-sroll-two :list="item.items">
          </raw-sroll-two>
        </div>-->
      </div>

    </div>
</template>

<script>
   // import RawSrollTwo from "./RawSrollTwo";
    export default {
        name: "FocusShop",
       // components: {RawSrollTwo},
        data() {
            return {
                data: '',
                isshow: false
            }
        },
        computed: {
            getData: function () {
                return this.$store.getters.getfocusshop
            },
        },
        mounted() {
            let data1 = JSON.parse(localStorage.getItem('focusshop'))
            this.data=data1;

        },
    }
</script>

<style scoped>
.shop-img{
  width: 50px;
  margin-right: 20px;
}
.focus{
  border: 1px solid #d6d6d6;
  border-radius: 1.5rem;
  padding: 4px 11px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  margin-left: 27px;
}
  .top{
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    margin: 8px;
  }
  .top-left{
    display: flex;
    height: 50px;
    align-items: center;
  }
  .pic-list-item img{
    width: 50px;
  }
</style>
