<template>
<div class="recommend">
    <div class="recommend-item" v-for="(item,index) in list" :key="item"
         :style="` background-image: url(${item.backgroundImage});background-size:cover`"
    >
      <img :src='item.image' alt="">
      <div class="title">{{item.title}}</div>
      <div class="timeshow" v-show="index===0">
        <span class="time-1">00</span>
        <span class="time-1">24</span>
        <span>31</span>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "RecommendView",
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                baseUrl:'../../../assets/img/home/recommend1.jpg',
                endUrl:'.jpg',
                list:[{"image":"https://s11.mogucdn.com/mlcdn/1689c6/180827_77k6i8827a323ke765lc3f2k197af_210x280.png",
                    "backgroundImage":"https://s10.mogucdn.com/mlcdn/c45406/190801_6bj1k7hil0hki43ijfhfb23jbkga4_248x248.png",
                    "_material_start_time":1573574400,"tagTitle":"￥34",
                    "link":"//act.mogu.com/fastbuy/indexh5?topType=2&newBizTag=18&topId=1p8r1s&eventTime=1575954000&acm=3.mce.1_4_1lxkaae.122995.0-68826-68974.fDpXLrKeuMrTy.sd_119_122_117-nbt_18-t_fDpXLrKeuMrTy-oc_9-pos_0-mc_122996-kq_21199324-sci_441-kqRId_129","countdown":2125,"h":280,"_material_end_time":2147483647,"acm":"3.mce.1_4_1lxkaae.122995.0-68826-68974.fDpXLrKeuMrTy.sd_119_122_117-nbt_18-t_fDpXLrKeuMrTy-oc_9-pos_0-mc_122996-kq_21199324-sci_441-kqRId_129",
                    "title":"限时快抢","w":210,"categoryId":"","_system_record_entry_id":"531689","timestamp":1575964800},
                    {"image":"","backgroundImage":"https://s10.mogucdn.com/mlcdn/c45406/191113_6bd38897gk07kf9hh4eg75ef06217_248x248.jpg","_material_start_time":1573574400,"cornerMark":"","link":"//act.mogu.com/paihangbang?acm=3.mce.1_10_1muj0.122995.0.zudQbrKeuMs1v.sd_119-pos_1-m_532970-mc_122993","_material_end_time":2147483647,"acm":"3.mce.1_10_1muj0.122995.0.zudQbrKeuMs1v.sd_119-pos_1-m_532970-mc_122993","sort":1,"title":"热销榜单","fcid":"","categoryId":704,"_system_record_entry_id":"532970"},
                    {"image":"","backgroundImage":"https://s10.mogucdn.com/mlcdn/c45406/190822_1848je8ael2lh4g3k0k9h6f9b14l7_248x248.gif","_material_start_time":1573574400,"cornerMark":"","link":"//act.mogu.com/supergoodgoods?acm=3.mce.1_10_1mrzk.122995.0.zudQbrKeuMs1w.sd_119-pos_2-m_531324-mc_122997","_material_end_time":2147483647,"acm":"3.mce.1_10_1mrzk.122995.0.zudQbrKeuMs1w.sd_119-pos_2-m_531324-mc_122997","sort":1,"title":"好货精选","fcid":"","categoryId":"","_system_record_entry_id":"531324"},{"image":"","backgroundImage":"https://s10.mogucdn.com/mlcdn/c45406/190910_51cb0gjblhcc16g5dea1h89996i4e_248x248.png","fcid":"","cornerMark":"","link":"//act.mogu.com/fashionnew?acm=3.mce.1_10_1mtau.122995.0-78699.2pqTRrKeuMrpZ.sd_119_115-mid_122998-pos_3-m_532175-mc_122998-lc_201","acm":"3.mce.1_10_1mtau.122995.0-78699.2pqTRrKeuMrpZ.sd_119_115-mid_122998-pos_3-m_532175-mc_122998-lc_201","sort":1,"title":"新品快抢","categoryId":""}]
            }

        }
    }
</script>

<style scoped>
.recommend{
  display: flex;
  padding: 10px 5px 20px;
  border-bottom: 8px solid #eee;

}
.recommend-item{
  flex:1;
  text-align: center;
  position: relative;
  margin: 0px 2px;
  border-radius: 0.25rem;
}
.title{
  position: absolute;
  bottom: .04rem;
  left: 0;
  width: 100%;
  font-size: .28rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
}
  .recommend img{

    height: 85px;
    width: 85px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
.title{
  text-align: center;
  font-size: 12px;
}
  .timeshow{
    position: absolute;
    bottom: 10px;
    color: #fff;
    margin: 10px;
  }
  .timeshow span{
    background: #333;
    border-radius: .03rem;
    width: .32rem;
    height: .32rem;
    text-align: center;
    line-height: .32rem;
    font-size: .2rem;
    font-weight: 700;
  }
  .time-1{
    margin-right: 10px;
  }
</style>
