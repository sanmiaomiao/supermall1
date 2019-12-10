<template>
  <div class="shop-info">
    <div class="top">
      <span>{{shopdata.name}}</span>
      <img src="../../../assets/img/detail/liaotian.svg"/>
    </div>
    <div class="center">
      <div class="center-span" @click="collectshop">关注店铺</div>
      <div >进入店铺</div>

    </div>
    <div class="bottom">
      <input/>
      <span>店内搜索</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShopInfo",
        props:{
            shopdata:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return{
                /*data:{
                    name: "恋上韩衣橱",
                    shopLogo: "https://s11.mogucdn.com/mlcdn/c45406/191021_7d8gg7i1eg79d8j8g9k9dll9d8gle_200x200.jpg",
                    "items":[
                        {"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_0cg152cc004c8ch7g0le4jh4k3a89_2000x3000.jpg","iid":"1moq16m","firstOnlineTime":1575698731,"showLarge":{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_0cg152cc004c8ch7g0le4jh4k3a89_2000x3000.jpg","w":320,"h":999},"discountPrice":8558,"link":"https://h5.mogu.com/detail-normal/index.html?itemId=1moq16m&acm=3.ms.9_4_1moq16m.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","show":{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_0cg152cc004c8ch7g0le4jh4k3a89_2000x3000.jpg","w":320,"h":999},"acm":"3.ms.9_4_1moq16m.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","type":2,"title":"秋季老爹裤女裤宽松条绒哈伦裤高腰松紧腰萝卜裤灯芯绒新款休闲裤","orgPrice":122.26,"displayStyle":4,"lefttop_taglist":[],"price":85.58,"leftbottom_taglist":[],"tradeItemId":685890595,"image":"/mlcdn/c45406/191207_0cg152cc004c8ch7g0le4jh4k3a89_2000x3000.jpg","priceFormat":85.58,"clientUrl":"https://h5.mogu.com/detail-normal/index.html?itemId=1moq16m&acm=3.ms.9_4_1moq16m.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","created":1575698731,"promotion_taglist":[],"start":0,"itemMarks":"1525","price_taglist":[],"props":["萝卜裤","松紧腰","高腰","灯芯绒","条绒","宽松","秋季"],"sale":0,"cfav":0,"originImage":"https://s5.mogucdn.com/mlcdn/c45406/191207_0cg152cc004c8ch7g0le4jh4k3a89_2000x3000.jpg"},
                        {"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_0c27dbf402d1i4gbj0gh38j9k92kh_2000x3000.jpg","iid":"1moq10m","firstOnlineTime":1575698096,"showLarge":{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_0c27dbf402d1i4gbj0gh38j9k92kh_2000x3000.jpg","w":320,"h":999},"discountPrice":5341,"link":"https://h5.mogu.com/detail-normal/index.html?itemId=1moq10m&acm=3.ms.9_4_1moq10m.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","show":{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_0c27dbf402d1i4gbj0gh38j9k92kh_2000x3000.jpg","w":320,"h":999},"acm":"3.ms.9_4_1moq10m.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","type":2,"title":"加绒/不加绒冬季上衣新款学生宽松半高领毛衣女加厚打底针织衫潮","orgPrice":76.31,"displayStyle":4,"lefttop_taglist":[],"price":53.41,"leftbottom_taglist":[],"tradeItemId":685890487,"image":"/mlcdn/c45406/191207_0c27dbf402d1i4gbj0gh38j9k92kh_2000x3000.jpg","priceFormat":53.41,"clientUrl":"https://h5.mogu.com/detail-normal/index.html?itemId=1moq10m&acm=3.ms.9_4_1moq10m.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","created":1575698096,"promotion_taglist":[],"start":0,"itemMarks":"1525","price_taglist":[],"props":["半高领毛衣","宽松","加厚","加绒","冬季","新款"],"sale":0,"cfav":0,"originImage":"https://s5.mogucdn.com/mlcdn/c45406/191207_0c27dbf402d1i4gbj0gh38j9k92kh_2000x3000.jpg"},{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_6l25glel6iiiak1818a09k59bl0g7_2000x3000.jpg","iid":"1moq12k","firstOnlineTime":1575697849,"showLarge":{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_6l25glel6iiiak1818a09k59bl0g7_2000x3000.jpg","w":320,"h":999},"discountPrice":12604,"link":"https://h5.mogu.com/detail-normal/index.html?itemId=1moq12k&acm=3.ms.9_4_1moq12k.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","show":{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_6l25glel6iiiak1818a09k59bl0g7_2000x3000.jpg","w":320,"h":999},"acm":"3.ms.9_4_1moq12k.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","type":2,"title":"冬季黑色牛仔外套女新品学生亮片宽松韩版短款加绒加厚棉衣女","orgPrice":226.04,"displayStyle":4,"lefttop_taglist":[],"price":126.04,"leftbottom_taglist":[],"tradeItemId":685890522,"image":"/mlcdn/c45406/191207_6l25glel6iiiak1818a09k59bl0g7_2000x3000.jpg","priceFormat":126.04,"clientUrl":"https://h5.mogu.com/detail-normal/index.html?itemId=1moq12k&acm=3.ms.9_4_1moq12k.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","created":1575697849,"promotion_taglist":[],"start":0,"itemMarks":"1525","price_taglist":[],"props":["牛仔外套","短款","宽松","黑色","加绒","冬季","韩版"],"sale":0,"cfav":0,"originImage":"https://s5.mogucdn.com/mlcdn/c45406/191207_6l25glel6iiiak1818a09k59bl0g7_2000x3000.jpg"},{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_584f9a5l2g21368ke9dcc78kaj344_2000x3000.jpg","iid":"1moq11u","firstOnlineTime":1575697734,"showLarge":{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_584f9a5l2g21368ke9dcc78kaj344_2000x3000.jpg","w":320,"h":999},"discountPrice":12760,"link":"https://h5.mogu.com/detail-normal/index.html?itemId=1moq11u&acm=3.ms.9_4_1moq11u.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","show":{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_584f9a5l2g21368ke9dcc78kaj344_2000x3000.jpg","w":320,"h":999},"acm":"3.ms.9_4_1moq11u.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","type":2,"title":"羊羔毛外套女秋冬新款韩版宽松上衣皮毛一体鹿皮绒外套女大衣","orgPrice":227.6,"displayStyle":4,"lefttop_taglist":[],"price":127.6,"leftbottom_taglist":[],"tradeItemId":685890509,"image":"/mlcdn/c45406/191207_584f9a5l2g21368ke9dcc78kaj344_2000x3000.jpg","priceFormat":127.6,"clientUrl":"https://h5.mogu.com/detail-normal/index.html?itemId=1moq11u&acm=3.ms.9_4_1moq11u.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","created":1575697734,"promotion_taglist":[],"start":0,"itemMarks":"1525","price_taglist":[],"props":["鹿皮绒外套","皮毛","一体","秋冬新款","韩版"],"sale":0,"cfav":0,"originImage":"https://s5.mogucdn.com/mlcdn/c45406/191207_584f9a5l2g21368ke9dcc78kaj344_2000x3000.jpg"},{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_510i369l7k163fbj89gl89b5g13db_2000x3000.jpg","iid":"1moq0s0","firstOnlineTime":1575697514,"showLarge":{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_510i369l7k163fbj89gl89b5g13db_2000x3000.jpg","w":320,"h":999},"discountPrice":17380,"link":"https://h5.mogu.com/detail-normal/index.html?itemId=1moq0s0&acm=3.ms.9_4_1moq0s0.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","show":{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_510i369l7k163fbj89gl89b5g13db_2000x3000.jpg","w":320,"h":999},"acm":"3.ms.9_4_1moq0s0.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","type":2,"title":"不掉毛水貂绒外套女冬季外套女韩版宽松学生花边毛呢外套女","orgPrice":273.8,"displayStyle":4,"lefttop_taglist":[],"price":173.8,"leftbottom_taglist":[],"tradeItemId":685890332,"image":"/mlcdn/c45406/191207_510i369l7k163fbj89gl89b5g13db_2000x3000.jpg","priceFormat":173.8,"clientUrl":"https://h5.mogu.com/detail-normal/index.html?itemId=1moq0s0&acm=3.ms.9_4_1moq0s0.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","created":1575697514,"promotion_taglist":[],"start":0,"itemMarks":"1525","price_taglist":[],"props":["毛呢外套","宽松","花边","不掉毛","韩版"],"sale":0,"cfav":0,"originImage":"https://s5.mogucdn.com/mlcdn/c45406/191207_510i369l7k163fbj89gl89b5g13db_2000x3000.jpg"},{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_4b9fekg9cfc50cg09c7l3die085fl_2000x3000.jpg","iid":"1moq03g","firstOnlineTime":1575697114,"showLarge":{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_4b9fekg9cfc50cg09c7l3die085fl_2000x3000.jpg","w":320,"h":999},"discountPrice":15356,"link":"https://h5.mogu.com/detail-normal/index.html?itemId=1moq03g&acm=3.ms.9_4_1moq03g.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","show":{"img":"https://s5.mogucdn.com/mlcdn/c45406/191207_4b9fekg9cfc50cg09c7l3die085fl_2000x3000.jpg","w":320,"h":999},"acm":"3.ms.9_4_1moq03g.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","type":2,"title":"赫本风毛呢外套女中长款加厚2019秋冬新款韩版流行呢子大衣","orgPrice":219.38,"displayStyle":4,"lefttop_taglist":[],"price":153.56,"leftbottom_taglist":[],"tradeItemId":685889890,"image":"/mlcdn/c45406/191207_4b9fekg9cfc50cg09c7l3die085fl_2000x3000.jpg","priceFormat":153.56,"clientUrl":"https://h5.mogu.com/detail-normal/index.html?itemId=1moq03g&acm=3.ms.9_4_1moq03g.152.10392-68998.fJZKwrJXleWSd.sd_117-swt_152-imt_6-pit_1-t_fJZKwrJXleWSd-dit_163","created":1575697114,"promotion_taglist":[],"start":0,"itemMarks":"1525","price_taglist":[],"props":["呢子大衣","中长款加厚","秋冬新款","赫本风","流行","韩版"],"sale":0,"cfav":0,"originImage":"https://s5.mogucdn.com/mlcdn/c45406/191207_4b9fekg9cfc50cg09c7l3die085fl_2000x3000.jpg"}],
                     }*/
            }
        },
        methods:{
            getdatas(){
                console.log(this.shopdata)

            },
            collectshop(){
                let data=this.shopdata
                //把数据存到vuex
                console.log(data)
                this.$store.commit('focusshop',data)
                let localdata=this.$store.getters.getfocusshop
                localStorage.setItem('focusshop',JSON.stringify(localdata))


            }
        }
    }
</script>

<style scoped>
.shop-info{
  background-color:#f8f6f6;
}
  .top{
    border: 1px solid #f4efef;
   justify-content: center;
    height:50px;
    display: flex;
    align-items: center;

  }
  .top span{
    font-weight: bold;
  }
.top img{
  width:15px;
  margin-left: 10px;
}
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #f4efef;
    border-top: none;
    height:50px;
  }
  .center div{
    margin-right: 30px;
    border: 1px solid;
    padding: 5px;
  }
  .center-span{
    margin-right: 30px;
  }
  .bottom{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #f4efef;
    border-top: none;
    height:50px;
  }
  input{
   border-color:  #ffffff;
  }
  .bottom span{
    background-color: black;
    color: white;
    font-size: 10px;
    padding: 4px 7px;
  }



</style>

