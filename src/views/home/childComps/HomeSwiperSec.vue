
<template>
  <div class="js-swiper">
    <div class="js-swiper-item" :style="`height:${height}px`">
      <img :src="pics[picindex]" :style="`height:${height}px`"  @load="imageLoad"/>
      <ul class="dots">
        <li class="dots-item" v-for="(item,index) in pics" :key="item" @click="dotClick(index)">
          <div class="dots-item-content" :class="{selected:index===picindex}"></div>
        </li>
      </ul>
      <div class="left-right">
        <div class="right" @click="rightClick">
          <img src="../../../assets/img/detail/right.svg">
        </div>
        <div class="left" @click="leftClick">
          <img src="../../../assets/img/detail/back_gray.svg">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeSwiperSec",
        data(){
            return{
                pics:["https://s5.mogucdn.com/mlcdn/c45406/191104_8a6h9ai6dce1d498j4bdf2b59l2h2_800x800.jpg",
                    "https://s5.mogucdn.com/mlcdn/c45406/191104_2512bcg375a5kd858ff2e7g81bd7d_800x800.jpg",
                    "https://s11.mogucdn.com/mlcdn/c45406/191104_7laei7cdj14h281gl82308blh3b8a_800x800.jpg",
                    "https://s11.mogucdn.com/mlcdn/c45406/191104_1le215fgch2ddd7ife10e907l1jkj_800x800.jpg",
                    "https://s11.mogucdn.com/mlcdn/c45406/191104_45683l844e7k32lil9800i2g7j7h1_800x800.jpg"],
                picindex:0,
                dot:[1,2,3,4,5]
            }
        },
        props:{
            picInfo:{
                type:Object,
                default(){
                    return {}
                }
            },
            height:{
                type:Number,
                default() {
                    return 350;
                }
            }
        },
        mounted(){
            console.log('mounted');
            this.getpicdata();
        },
        methods:{
            dotClick(index){
                this.picindex=index;
                console.log(this.picindex)
            },
            switchClick(index){
                this.picindex=index;
            },
            leftClick(){
                console.log('left');
                if(this.picindex===0){
                    return false;
                }else{
                    this.picindex--;
                }

            },
            rightClick(){
                console.log('right');
                if(this.picindex===this.pics.length-1){
                    return false;
                }else{
                    this.picindex++;
                }
            },
            getpicdata(){
                console.log('jswiper的getdata');
                console.log(this.picInfo)
                if(this.picInfo){
                    console.log('this.picInfo不为空');
                    console.log(this.picInfo)
                    console.log('3333')
                    this.pics=this.picInfo;
                }else{
                    console.log('this.picInfo为空');
                    console.log(this.picInfo)
                }


            },
            imageLoad(){
                console.log('----');
                if(!this.isLoad){
                    this.$emit('imageLoad')
                    this.isLoad=true
                }

            }
        }
        ,
        watch:{
            picInfo(val,oldval){
                console.log('watch');
                console.log(val);
                console.log(oldval);
                this.pics=this.picInfo;
            }
        }
    }
</script>

<style scoped>
  .js-swiper{
    background-color: #ff5777;

  }
  .js-swiper-item{
    background-color: red;
    height: 350px;
    position: relative;


  }
  .js-swiper-item img{
    width: 100%;
    /* height: 350px;*/
  }
  .dots{
    display: flex;
    width:60%;
    position: absolute;
    top:80px;
  }
  .dots-item{
    flex: 1;
    text-align: center;
    list-style-type: none;
    width: 100px;
    z-index:9;
  }
  ul{
    margin-left: 100px;
  }
  .dots-item-content{
    background-color: white;
    width: 10px;
    height: 10px;
    margin: 10px;
    border: 1px solid white;
    border-radius: 50%;
  }
  .left-right{
    position: absolute;
    top:50px
  }
  .right{
    background-color: transparent;
    margin-left: 270px;
  }

  .right img{
    width: 40px;
    height: 40px;
  }

  .left{
    background-color: transparent;
  }

  .left img{
    width: 40px;
    height: 40px;
  }
  .selected{
    background-color: grey;
  }

</style>
