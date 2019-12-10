<template>
  <div class="mb_searchBox" :style="`display:${display?'block':'none'};height: 640px;position: fixed`">
    <div class="mb_search">
      <img src="../../../assets/img/detail/back_gray.svg" class="back_icon" @click="back">
      <form class="mb_form">
        <input class="mb_input_search" placeholder="睡衣">
        <a href="#" class="mb_a_search">搜索</a>
      </form>
    </div>
    <div class="mb_content">
      <div class="mb_sb_history">
        <div class="mb_sb_his_head">
          <img src="../../../assets/img/home/sousuo.svg" class="suosuo_icon">
          <span class="his_head_span">历史搜索</span>
          <img src="../../../assets/img/home/trabbish.svg" class="trabbish_icon">
        </div>
        <div class="mb_sb_his_items">
          <ul>
            <li class="mb_sb_his_item_con">
            <a class="mb_sb_his_a">遇见初心</a>
            </li>
          </ul>
          <div class="mb_sb_his_none" style="display: none">暂无搜索历史</div>
        </div>
      </div>
      <div class="mb_sb_hotwords">
        <div class="mb_sb_his_head">
          <img src="../../../assets/img/home/star.svg" class="suosuo_icon">
          <span class="his_head_span">热门搜索</span>
        </div>
        <div class="mb_sb_hot_items">
          <ul>
            <li class="mb_sb_hot_item_con">
              <a class="mb_sb_hot_a">围巾</a>
            </li>
            <li class="mb_sb_hot_item_con" >
              <a class="mb_sb_hot_a" style="color: #ff4466">毛衣</a>
            </li>
            <li class="mb_sb_hot_item_con">
              <a class="mb_sb_hot_a">外套</a>
            </li>
            <li class="mb_sb_hot_item_con">
              <a class="mb_sb_hot_a">打底衫</a>
            </li>
            <li class="mb_sb_hot_item_con">
              <a class="mb_sb_hot_a"  style="color: #ff4466">卫衣</a>
            </li>
            <li class="mb_sb_hot_item_con">
              <a class="mb_sb_hot_a">帽子</a>
            </li>
            <li class="mb_sb_hot_item_con">
              <a class="mb_sb_hot_a">睡衣</a>
            </li>
            <li class="mb_sb_hot_item_con">
              <a class="mb_sb_hot_a"  style="color: #ff4466">羽绒服</a>
            </li>
            <li class="mb_sb_hot_item_con">
              <a class="mb_sb_hot_a">棉服</a>
            </li>
            <li class="mb_sb_hot_item_con">
              <a class="mb_sb_hot_a">马丁靴</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "SearchPage",
        props:{
            display:{
                type:Boolean,
                default:false
            }
        },

        watch:{

          display(val,oldval){
              console.log('watch display')
              console.log(val);
              console.log(oldval);
            }
        },
        methods:{
            back(){
                this.$emit('back')
            }
        }
    }
</script>

<style scoped>
  .mb_searchBox{
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    background-color: #fff;

  }
  .back_icon{
    width: 20px;
    margin-right: 10px;
  }
  .mb_search{
    position: relative;
    display: flex;
    align-items: center;
    padding: 11px;
    border-bottom: 1px solid #eee;
  }
  .mb_input_search{
    width: 264px;
    margin-right: 10px;
    border-radius: 0.2rem;
    border: 1px solid #c2bfbf;
    font-size: 13px;
    line-height: 23px;
    padding-left: 7px;
  }
  .mb_a_search{
    font-size: 15px;
  }
  .mb_content{
    position: absolute;
    top: 3.3rem;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .mb_sb_history{
    min-height: .6rem;
    overflow: hidden;
    margin-top: .1rem;
    padding: .4rem;
    color: #999;
    border-bottom: 1px solid #eee;
  }
  .suosuo_icon{
    width: 15px;
    vertical-align: bottom;
  }
  .trabbish_icon{
    width: 20px;
    float: right;
    margin-right: 10px;

  }
  .his_head_span{
    font-size: 13px;
  }
  .mb_sb_his_item_con{
    margin: 15px 0 5px 10px;
    max-width: 100px;
    float: left;
    list-style-type: none;
    border: 1px solid #f5f5f5;
    padding: 0px 10px;
  }
  .mb_sb_his_a{
    font-size: 13px;
  }
  .mb_sb_hotwords{
    padding: 5px;
    color: #999;
  }
  .mb_sb_hot_item_con{
    margin: 15px 0 5px 10px;
    max-width: 100px;
    float: left;
    list-style-type: none;
    border: 1px solid #f5f5f5;
    padding: 0px 10px;
  }
  .mb_sb_hot_a{
    font-size: 13px;
  }
</style>
