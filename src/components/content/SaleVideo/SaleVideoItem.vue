<template>
  <div class="mona-live-item">
    <div class="actor-info">
      <div class="actor-img"><img :src="item.avatar"></div>
      <div>{{item.userName}}</div>
    </div>
    <div class="main-cover">
      <div class="main" :style="{'background-image': 'url('+item.bgImg+')','background-repeat':'no-repeat','background-size':'cover' }">
      <div class="live-info-mask">
        <div class="liv-info">
          <div class="dot"></div>
          <div class="status">直播中</div>
          <div class="watch-num"><img src="../../../assets/img/bozhu/fire.png">{{Math.round(item.visitorCount/1000)/10}}W</div>
        </div>
        <div class="live-title">{{item.intro}}</div>
        <div class="good-list">
             <div v-for="data in item.shopCarts.goods" :key="data">
               <a :href="data.link">
           <img :src="data.cover" class="data-img">
            <div class="price-mask"></div>
            <div class="price">{{data.price}}</div>    </a>
          </div>

        </div>
      </div>
        <div class="comment-list">
          <div class="comment-item">
            <img :src="comments[0].avatar" class="avatar">
            <div class="message">{{comments[0].content}}</div>
          </div>
          <div class="comment-item">
            <img :src="comments[1].avatar" class="avatar">
            <div class="message">{{comments[1].content}}</div>
          </div>
          <div class="comment-item">
            <img :src="comments[2].avatar" class="avatar">
            <div class="message">{{comments[2].content}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "SaleVideoItem",
        props:{
            item:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
        ,data(){
            return{
                comments:[
            {"commentId":"16ivcmg_1575508449143","type":1,"content":"140多斤可以穿吗","avatar":"https://s5.mogucdn.com/p2/170106/upload_8e7e91ckf2c4e3lgc2cjif14d6d69_1440x2560.jpg","uid":"16ivcmg"},
            {"commentId":"1du5a48_1575508488062","type":1,"content":"对的","avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190613_10j3d63d8aa5h40c883cb60c1j7g0_132x132.jpg","uid":"1du5a48"},
            {"commentId":"1bja7d2_1575508492768","type":1,"content":"1","avatar":"https://s5.mogucdn.com/mlcdn/5abf39/180730_890a6545cg0fb9heakfik4ck2bk6c_132x132.jpg","uid":"1bja7d2"}],
            }
        }
    }
</script>

<style scoped>
  .mona-live-item{
    position: relative;
    height: 240px;
    margin-top:10px
  }
  .actor-info{
    display: flex;
    justify-content: right;
    align-items: center;
    font-size: 15px;
  }
.actor-img{
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid white;
  margin-left: 20px;
  padding: 0;
  z-index: 9;
}
.actor-img img{
  width: 46px;
  height: 46px;
  border-radius: 100%;

}
.main-cover{
  padding: 2px;
  position: absolute;
  left: 0;
  right: 0;
  top: 33px;
}
  .main{
    width: 100%;
    height: 200px;
    border-radius: 3%;
    position: relative;
  }
  .live-info-mask{
    position: relative;
    position: relative;
    margin-top: auto;
    padding: 100px 26px;
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.4)));
    background-image: -webkit-linear-gradient(top,transparent,rgba(0,0,0,.4));
    background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.4));
    height: 180px;

  }
  .liv-info{
position: absolute;
    left: 20px;
    right: 0px;
    top: 80px;
    display: flex;
    justify-content: right;
    color: #fff;
    background-color: rgba(0,0,0,.26);
    border-radius: 3px;
    line-height: 1;
    width: fit-content;
    font-size: .2rem;
    height: 17px;
    align-items: center;
    padding: 0 10px;
  }
.status{
  border-right: 1px solid;
  margin-right: 3px;
  padding-right: 2px;
}
  .dot{
    margin-right: 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #f5342f;
    /*will-change: opacity;*/
    -webkit-animation: dot-flicker 2s infinite;
    animation: dot-flicker 2s infinite;}
    @keyframes dot-flicker {
      from{background-color: #f5342f}
      to{background-color: transparent}

    }
  @-webkit-keyframes dot-flicker {
    from{background-color: #f5342f}
    to{background-color: white}

  }
  .watch-num img{
    width: 10px;
    height: 12px;
  }
  .live-title
  {
    margin-top: .1rem;
    font-size: 15px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,.35)
  }
  .good-list{
    display: flex;
    position: relative;
  }
  .data-img{
    width: 57px;
    height: 64px;
    margin-right: 6px;
  }

  .price{
    position: absolute;
    top: 47px;
    font-size: .2rem;
    color: #fff;
    height: 17px;
    width: 57px;
    text-align: center;
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.6)));
    background-image: -webkit-linear-gradient(top,transparent,rgba(0,0,0,.6));
    background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.6));
  }
  .avatar{
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .comment-list{
    position: absolute;
    left: 230px;
    right: 0px;
    top:120px;
  }
  .comment-item{
    display: flex;
    font-size: 12px;
    align-items: center;
    color: white;
    margin-bottom: 5px;
  }

</style>
