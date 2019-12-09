<template>
  <div class="category">
    <div class="top">
      <nav-bar class="nav-bar">
        <span slot="center">分类</span>
      </nav-bar>
      <TabControl
        :titles="['综合','销量','新品']"
        @tabClick="tabClick"
        ref="tabControl1"
        class="tab-control2"
        v-show="isTabFixed"
      ></TabControl>
    </div>
    <div class="bottom">
      <div class="left-bar">
        <div class="category-title" v-for="(item,index) in category" :key="item"
             @click="categoryClick(index)"
             :class="{selectedCategory:index===currentCategoryindex}" >{{item}}</div>
      </div>
        <scroll
          ref="scroll"
          @scroll="contentScroll"
          :probe-type="3"
          class="wapper">
          <div class="right-bar">

            <div class="right-top" >
              <div v-for="item in categorylist[currentCategory]" :key="item">
                <a :href="item.link">
                  <img :src="item.image" class="category-image" @load='setOffsetTop'/>
                  <div class="category-item-title">{{item.title}}</div>
                </a>

              </div>
            </div>
            <div>
              <tab-control
                :titles="['综合','销量','新品']"
                @tabClick="tabClick"
                ref="tabControl2"
              />
            </div>
            <div class="product-list">
              <div v-for="item in productlist[this.currentCategory][this.currentType]" :key="item" class="product-item">
                <img :src="item.img" class="product-img"/>
                <div class="product-bottom">
                  <div class="product-title">{{item.title}}</div>
                  <span class="product-price">￥{{item.price}}</span>
                  <span class="product-collect"><span>{{item.cfav}}</span><img src="../../assets/img/home/star.svg" class="star"/></span>
                </div>
              </div>
            </div>
          </div>
        </scroll>
    </div>

  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import Scroll from "../../components/common/sroll/Scroll";
  import {getcategorylist,getbaobaolist,getkuzilist,getnvxielist,getqunzilist,getshangyilist} from "../../network/category";

  export default {
        name: "Category",
        components:{Scroll, TabControl, NavBar,},
        data(){
            return{
              category:['上衣','裤子','裙子','女鞋','包包'],
                currentCategoryindex:0,
                currentCategory:'jacket',
                currentType:'pop',
                showlist:'',
                categorylist:{
                   'jacket':'',
                    'pants':'',
                    'skirt':'',
                    'womenshoes':'',
                    'bags':'',
                },
                productlist:{
                    'jacket':{
                        pop:'',
                        new:'',
                        sale:'',
                    },
                    'pants':{
                        pop:'',
                        new:'',
                        sale:'',
                    },
                    'skirt':{
                        pop:'',
                        new:'',
                        sale:'',
                    },
                    'womenshoes':{
                        pop:'',
                        new:'',
                        sale:'',
                    },
                    'bags':{
                        pop:'',
                        new:'',
                        sale:'',
                    }
                }
                ,tabOffsetTop:0,
                isTabFixed:false,
            }
        },
      created(){
          this.getdatas('jacket')
          this.getdatas('pants')
          this.getdatas('skirt')
          this.getdatas('womenshoes')
          this.getdatas('bags')


      },
      computed:{
          showGoods() {
              return this.productlist[this.currentCategory][this.currentType]
          }
      }
      ,
        methods:{
            tabClick(index){
                console.log(index)
                switch (index) {
                    case 0:
                        this.currentType='pop'
                        break
                    case 1:
                        this.currentType='sale'
                        break
                    case 2:
                        this.currentType='new'
                        break

                }
                this.$refs.tabControl1.currentIndex=index;
                this.$refs.tabControl2.currentIndex=index;
               // this.$refs.goodslist.setdata();
            },
            categoryClick(index){
                //显示该目录下的列表
                this.currentCategoryindex=index;
                switch (index) {
                    case 0:
                        this.currentCategory='jacket'
                        break
                    case 1:
                        this.currentCategory='pants'
                        break
                    case 2:
                        this.currentCategory='skirt'
                        break
                    case 3:
                        this.currentCategory='womenshoes'
                        break
                    case 4:
                        this.currentCategory='bags'
                        break

                }

            },
            awake_Category(){
                console.log('唤醒目录列表');
            },
            awake_productlist(){
                console.log(this.productlist)
                let a=this.currentType;
                console.log(a);
                console.log(this.productlist[this.currentCategory])

            },
            setOffsetTop(){
                console.log('setoffsettop');
                console.log(this.$refs.tabControl2.$el.offsetTop);
                this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
            },
            contentScroll(position){
                /*//1.控制显示返回顶部按钮
                this.isShow=-position.y>1000*/
                //2.吸顶效果
                console.log('contentScroll')
                this.isTabFixed=-(position.y)>this.tabOffsetTop

            },
            /**
             * 发送网络请求的方法
             * */
            getdatas(title){
             //   let title=this.currentCategory;
                getcategorylist(title).then(res=>{
                    console.log(res);
                    this.categorylist[title]=res.data[0].list;
                    console.log(this.categorylist);
                }).catch(err=>{
                    console.log(err);
                })
                //获取综合数据
                if(title==='jacket'){
                    getshangyilist('pop').then(res=>{
                        console.log('数据请求完毕');
                        this.productlist.jacket.pop=res.data[0].docs;
                        console.log(res.data[0].docs)
                        console.log(this.productlist[this.currentCategory][this.currentType])
                        this.showlist=this.productlist[this.currentCategory][this.currentType]
                        console.log(this.showlist)
                    }).catch(err=>{
                        console.log(err);
                    })
                    getshangyilist('new').then(res=>{
                        this.productlist.jacket.new=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                    getshangyilist('sale').then(res=>{
                        this.productlist.jacket.sale=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                }else if(title==='pants'){
                    getkuzilist('pop').then(res=>{
                        console.log(res)
                        this.productlist.pants.pop=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                    getkuzilist('new').then(res=>{
                        this.productlist.pants.new=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                    getkuzilist('sale').then(res=>{
                        this.productlist.pants.sale=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                }else if(title==='skirt'){
                    getqunzilist('pop').then(res=>{
                        console.log(res)
                        this.productlist.skirt.pop=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                    getqunzilist('new').then(res=>{
                        this.productlist.skirt.new=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                    getqunzilist('sale').then(res=>{
                        this.productlist.skirt.sale=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                }else if(title==='womenshoes'){
                    getnvxielist('pop').then(res=>{
                        this.productlist.womenshoes.pop=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                    getnvxielist('new').then(res=>{
                        this.productlist.womenshoes.new=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                    getnvxielist('sale').then(res=>{
                        this.productlist.womenshoes.sale=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                }else{
                    getbaobaolist('pop').then(res=>{
                        this.productlist.bags.pop=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                    getbaobaolist('new').then(res=>{
                        this.productlist.bags.new=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                    getbaobaolist('sale').then(res=>{
                        this.productlist.bags.sale=res.data[0].docs;
                    }).catch(err=>{
                        console.log(err);
                    })
                }
                this.awake_productlist()

            }

        },
      watch:{
          productlist(val,oldval){
                console.log('!!!!watch productlist');
                console.log(val);
                console.log(oldval);
            }
                  }
    }
</script>

<style scoped>
  .nav-bar{
    background-color: #d4237a;
    color: white;
  }
  .bottom{
    display: flex;
  }

  .left-bar{
    width: 20%;
    height: 100vh;
  }
  .right-top{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .category-image{
    width: 90px;
  }
  .category-item-title{
    text-align: center;
    font-size: 14px;
  }
  .tab-control2{
    position: relative;
    z-index: 10;
    width: 81%;
    left: 55px;
  }
  .category-title{
    background-color: lightgray;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .selectedCategory{
    background-color: white;
  }
  .product-img{
    width: 90%;
    border-radius: 5%;
  }
  .star{
    width: 15px;
  }
  .product-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .product-item{
    width: 50%;
    position: relative;
    padding-bottom: 40px;
  }
  .product-title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 2px;
  }
  .product-bottom{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    font-size: 12px;
    text-align: center;

  }
  .product-price{
    margin-right: 10px;
    color: var(--color-height-text);
  }
  .wapper{
    height: 100vh;
    width: 400px;
    overflow: hidden;
  }
</style>
