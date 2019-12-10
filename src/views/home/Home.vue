<template>
    <div id="home">
      <!--    <nav-bar class="home-nav">
       <div slot="center">购物街</div>
    </nav-bar>-->
        <home-top-bar @search="search"/>
      <TabControl
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        class="tab-control2"
        v-show="isTabFixed"
      ></TabControl>
      <scroll class="content" ref="scroll"
              :probe-type="3"
              @scroll="contentScroll"
              :pull-up-load="true"
              @pullingUp="loadMore">
       <!-- <HomeSwiper @imageLoad='setOffsetTop'></HomeSwiper>-->
        <home-swiper-sec  @imageLoad='setOffsetTop' :pic-info="homelunimg" :height="lunimgheight"/>
        <RecommendView></RecommendView>
        <FeatureView></FeatureView>
        <TabControl
          :titles="['流行','新款','精选']"
          @tabClick="tabClick"
          ref="tabControl2"

        ></TabControl>
        <goods-list :goods="showGoods" ref="goodslist"/>
      </scroll>
    <back-top @click.native="backClick" v-show='isShow'/>
     <search-page :display="searchShow" @back="searchback"/>
    </div>
</template>

<script>
 import SearchPage from "./childComps/SearchPage";
 import HomeTopBar from "./childComps/HomeTopBar";
 import HomeSwiperSec from "./childComps/HomeSwiperSec";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/sroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";
  import {getgoodsdata,gethomelun} from "../../network/home";




  export default {
      name: "Home",
      components: {
          HomeTopBar,
          HomeSwiperSec,
          Scroll,
          GoodsList,
          RecommendView,
          FeatureView,
          TabControl,
          BackTop,
          SearchPage

      },
      data() {
          return {
              goods: {
                  'pop': {page: 0, list: []},
                  'new': {page: 9, list: []},
                  'sell': {page: 19, list: []},
              },
              currentType:'pop',
              isShow:false,
              tabOffsetTop:0,
              isTabFixed:false,
              saveY:0,
              homelunimg:[],
              lunimgheight:110,
              searchShow:false,
          }
      },
      created() {
          console.log('created()')
          var goodsdata=JSON.parse(localStorage.getItem('getgoodsdatapop'))
          if(!goodsdata){
              //1.请求pop图数据
              this.getgoodsdatawrap('pop')
              this.getgoodsdatawrap('new')
              this.getgoodsdatawrap('sell')

          }else {
              console.log('localstorage有数据');
              this.getdatafromls('pop');
              this.getdatafromls('new');
              this.getdatafromls('sell');
          }
          this.gethomelunwrap()

      },
      computed:{
        showGoods(){
            return this.goods[this.currentType].list
        },

      },
      activated(){
          this.$refs.scroll.scrollTo(0,this.saveY,0)
          this.$refs.scroll.scroll.refresh()
      },
      deactivated(){
          this.saveY=this.$refs.scroll.scroll.y
      },
      mounted(){
          this._getshopdetail()
      },


      methods:{
          /**
           * 事件监听相关的方法           *
           * */
          tabClick(index){
              console.log(index)
            switch (index) {
                case 0:
                    this.currentType='pop'
                    break
                case 1:
                    this.currentType='new'
                    break
                case 2:
                    this.currentType='sell'
                    break

            }
            this.$refs.tabControl1.currentIndex=index;
            this.$refs.tabControl2.currentIndex=index;
            this.$refs.goodslist.setdata();
          },
          backClick(){
              this.$refs.scroll.scrollTo(0,0)
          },
          contentScroll(position){
              //1.控制显示返回顶部按钮
              this.isShow=-position.y>1000
              //2.吸顶效果
              this.isTabFixed=-(position.y)>this.tabOffsetTop

          },
          loadMore(){
              this.getgoodsdatawrap(this.currentType)
          },
          setOffsetTop(){
              console.log(this.$refs.tabControl2.$el.offsetTop);
              this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
          },
          //从localstorage中提取数据
          getdatafromls(type){
              let res=JSON.parse(localStorage.getItem('getgoodsdata'+type))
              const page=this.goods[this.currentType].page+1
              this.goods[type].list.push(...res.data[0].list)
              this.goods[type].page=page;
              console.log(res)
          },
          search(){
            //显示搜索界面
              this.searchShow=true;
          },
          searchback(){
              //关闭搜索界面
              this.searchShow=false;
          },

          /**
           * 网络请求的方法
           * */
          getgoodsdatawrap(type){
              console.log('getgoodsdata');
              const page=this.goods[type].page+1
              getgoodsdata(page,type).then(res => {
                  this.goods[type].list.push(...res.data[0].list)
                  this.goods[type].page=page;
                  console.log(res)
                  //上拉加载更多
                  this.$refs.scroll.finishPullUp()
                  //保存数据
                 // store.save('getgoodsdata',res)
                  localStorage.setItem('getgoodsdata'+type,JSON.stringify(res))


              }).catch(err => {
                  console.log('catch()')
                  console.log(err);
              })
          },
          gethomelunwrap(){
           gethomelun().then(res=>{
              console.log(res)
              res.data[0].list.map(item=>this.homelunimg.push(item.image_800))

               console.log(res.data[0])
           }).catch(err=>{
               console.log(err)
           })
          }


      }
  }
</script>

<style scoped>
  #home{

    height: 100vh;
    position: relative;
  }
.home-nav{
  width: 100vw;
  background-color: var(--color-tint);
  color: white;
}
.tab-control2{
  position: relative;
  z-index: 10;
}
.recommend{
  width: 100vw;
}

  .content{
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
    z-index: 9;
  }

</style>
