<template>
  <div class="wrapper">
    <ul class="pic-list" ref="cont">
      <li v-for="item in list" :key="item" class="pic-list-item">
        <img :src="item.image" slot="li">
      </li>
    </ul>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "RawSrollTwo",
        props:{
          list:{
              type:Array,
              default(){
                  return []
              }
          }
        },
        data(){
            return{
                scroll:''
            }

        },
        mounted(){
          let width = this.list.length * 60// 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
            this.$refs.cont.style.width = width + 'px'  // 修改滚动区域的宽度
            this.scroll=new BScroll('.wrapper', {
                scrollX: true
            })
            console.log(this.scroll)
        }
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    width:360px;
    overflow: hidden;
    margin: 0 auto;
  }
  ul {
    width: 750px;
    /*由子元素自动撑开宽度*/
    display: inline-block;
    /*子元素不换行, 直到遇到<br/>*/
    white-space: nowrap;
    /*overflow-x: scroll;*/
    /*overflow-y: hidden;*/
  }
  /*隐藏滚动条*/
 /* ul::-webkit-scrollbar {display:none}*/

  .pic-list{
    display: flex;
    overflow:hidden ;
  }
  .pic-list-item{
    margin-left: 10px;
  }
  .pic-list-item img{
    width: 50px;
  }
</style>
