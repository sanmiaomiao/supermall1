<template>
    <div id="detail">
     <detail-nav-bar :title="['商品','参数','评论']" @itemClick="titleClick"/>
      <scroll class="content" ref="scroll"
              :probe-type="3"
              @scroll="contentScroll"
              >
        <js-swiper ref="jsswiper" :pic-info="modifiedtioimg"></js-swiper>
        <DetailInfo :detail-info="detailInfo"  @colorClick="colorClick" ref="detailinfo" @buyClick="buyClick" @addCart="addCart"/>
        <shop-info :shopdata="shopInfo"/>
        <product-param :product-info="productInfo" ref="param" @imageLoad='getOffsetTop'/>
        <Alert v-show="islogin" @closeAlert="closeAlert"/>
        <Comments class="comments" :comments="comments" ref="comment"/>
      </scroll>
      <back-top @click.native="backClick" v-show='isShow'/>
    </div>
</template>

<script>
  import DetailNavBar from "../../components/content/DetailNavBar/DetailNavBar";
  import DetailInfo from "./childComps/DetailInfo";
  import Scroll from "../../components/common/sroll/Scroll";
  import JsSwiper from "../../components/common/swaper/JsSwiper";
  import ShopInfo from "./childComps/ShopInfo";
  import {getdetaildata} from '../../network/detail';
  import ProductParam from "./childComps/ProductParam";
  import Alert from "../../components/common/alert/Alert";
  import Comments from "./childComps/Comments";
  import BackTop from "../../components/content/backTop/BackTop";



  export default {
        name: "Detail",
        components: {Comments, Alert, ProductParam, ShopInfo, Scroll, DetailInfo,   DetailNavBar,JsSwiper,BackTop},
        data(){
            return{
              topimg:[],
              modifiedtioimg:[],
              detailInfo:{
                  normalPrice:{},
                  cRate:'',
                  sales:'',
                  topimg2:'',
                  collection:'',
                  title:'',
              },
                shopInfo:{},
                productInfo:{
                    itemParamsInfo:{},
                    proPics:[],
                    title:'',
                },
                colorClickindex:'',
                islogin:false,
                comments:[],
                isShow:false,
                paramOffsetTop:'',
                commentOffsetTop:'',
            }
        },
      created(){
            console.log('detail的create发生')
          localStorage.removeItem('getdetaildata')
       // var detaildata=store.get('getdetaildata');
          var detaildata=JSON.parse(localStorage.getItem('getdetaildata'))
        if(!detaildata){
            this.getdatas();
        }else
            {
                console.log('localstorage有数据');
                let res=detaildata;
            this.topimg=res.data[0].topImages;
            this.detailInfo.topimg2=res.data[0].topImages;
            this.detailInfo.normalPrice=res.data[0].normalPrice;
            this.detailInfo.cRate=res.data[0].rateInfo.cRate;
            this.detailInfo.sales=res.data[0].itemInfo.extra.sales;
            this.detailInfo.collection=res.data[0].itemInfo.cFav;
            this.detailInfo.title=res.data[0].itemInfo.title;
            this.productInfo.itemParamsInfo=res.data[0].itemParams.info.set;
            this.productInfo.proPics=res.data[0].detailInfo.detailImage[0].list;
            this.productInfo.title=res.data[0].itemInfo.title;
            this.shopInfo=res.data[0].shopInfo;
            this.comments=res.data[0].rateInfo.list;
                //Jsswiper重新获取一遍数据
                console.log("this.topimg")
                console.log(this.topimg)
                this.awakejsswiper()
        }
      },
      computed:{
        //读取vuex的itemId
          getitemId:function(){
              return this.$store.getters.getitemId
          },
      },
        methods:{
            colorClick(index){
               // this.$refs.tabControl1.currentIndex=index;
                this.$refs.jsswiper.switchClick(index);
                console.log(index)
            },
            buyClick(){
                let username=JSON.parse(localStorage.getItem('username'))
                if(!username){
                    this.islogin=true;
                }

            },
            closeAlert(){
              this.islogin=false;
            },
            awake(){
                console.log('数据请求完毕');
               this.$refs.detailinfo.setdetaildata();
            },
            awakejsswiper(){
                console.log('数据请求完毕');
                this.$refs.jsswiper.getpicdata();
            },
            awakeparam(){
                console.log('数据请求完毕');
                this.$refs.param.getdatas();
            },
            contentScroll(position){
                //1.控制显示返回顶部按钮
                this.isShow=-position.y>1000

            },
            backClick(){
                console.log('detail的backClick发生');
                this.$refs.scroll.scrollTo(0,0)
            },
            titleClick(index){
                switch (index) {
                    case 0:
                        this.$refs.scroll.scrollTo(0,0)
                        break
                    case 1:

                        this.$refs.scroll.scrollTo(0,-this.paramOffsetTop)
                        break
                    case 2:
                        this.$refs.scroll.scrollTo(0,-this.commentOffsetTop)
                        break
                }
            },
            //获取偏移量
            getOffsetTop(){
                 this.paramOffsetTop=this.$refs.param.$el.offsetTop;

                this.commentOffsetTop=this.$refs.comment.$el.offsetTop;

            },
            addCart(){
                //添加颜色，尺码数据
                console.log('detail监听到添加购物车事件');
                let num=this.$refs.detailinfo.number;
                let color=this.$refs.detailinfo.currentColorIndex;
                let size=this.$refs.detailinfo.currentSizeIndex;
                if(size===0){
                    size='S';
                }else if(size===1){
                    size='M'
                }else if(size===2){
                    size='L'
                } else if(size===3){
                    size='XL'
                }else{
                    size='XXL'
                }
                let data={
                      title:this.detailInfo.title,
                      pic:this.detailInfo.topimg2[0],
                      num:num,
                      price: this.detailInfo.normalPrice.nowPrice,
                      color:color,
                      size:size,
                }
                    this.$store.commit('addCart',data)
                //读取localstorge当前数据
               // localStorage.removeItem('cartdata')
                let dataArray=JSON.parse(localStorage.getItem('cartdata'))
                let a=0;//用来标志是否重复
                if(dataArray){//原来有数据直接push
                    //循环数组判断是否重复
                    for(let i=0;i<dataArray.length;i++){
                        if(dataArray[i].title===data.title){
                            console.log('购物车中已存入');
                            //直接覆盖数据
                            dataArray[i]=data;
                            a=1;
                        }
                    }
                    if(a===0){//没有重复
                        console.log('购物车中没有');
                        dataArray.push(data);
                    }
                }else {//原来没数据
                    dataArray=[];
                    dataArray.push(data);

                }

                //保存数据
                localStorage.setItem('cartdata',JSON.stringify(dataArray))

            },

            /**
             * 与网络请求相关的方法
             * */
            getdatas(){
                console.log('getdatas()');
                let id=this.getitemId
                getdetaildata(id).then(res=>{
                    console.log('请求数据成功');
                    console.log(res)
                    this.topimg=res.data[0].topImages;
                    this.detailInfo.topimg2=res.data[0].topImages;
                    this.detailInfo.normalPrice=res.data[0].normalPrice;
                    this.detailInfo.cRate=res.data[0].rateInfo.cRate;
                    this.detailInfo.sales=res.data[0].itemInfo.extra.sales;
                    this.detailInfo.collection=res.data[0].itemInfo.cFav;
                    this.detailInfo.title=res.data[0].itemInfo.title;
                    this.productInfo.itemParamsInfo=res.data[0].itemParams.info.set;
                    this.productInfo.proPics=res.data[0].detailInfo.detailImage[0].list;
                    this.productInfo.title=res.data[0].itemInfo.title;
                    this.shopInfo=res.data[0].shopInfo;
                    this.comments=res.data[0].rateInfo.list;
                    this.modifiedtioimg=JSON.parse(JSON.stringify(this.topimg))
                    //Jsswiper重新获取一遍数据
                    console.log(" this.modifiedtioimg=")
                    console.log(typeof(this.modifiedtioimg))
                    console.log(this.modifiedtioimg[0])
                   this.awakejsswiper()
                    console.log('detail')
                    console.log(this.detailInfo);
                    //向detailInfo发生事件
                    this.awake();
                    this.awakeparam()
                    console.log('...');
                    //保存数据
                    localStorage.setItem('getdetaildata',JSON.stringify(res))
                   // store.save('getdetaildata',res)


                }).catch(err=>{
                    console.log(err);
                })
            }
        }

    }
</script>

<style scoped>
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
