<template>
    <div class="on-live">
      <div class="input_video">
        <video-player  class="video-player vjs-custom-skin"
                       ref="videoPlayer"
                       :playsinline="true"
                       :options="playerOptions"
        ></video-player>
      </div>
      <div class="live-cover">
      <div class="head-section">
        <div class="focus-actor">
          <div class="head-left">
            <div class="actor-avatar">
              <img src="https://s11.mogucdn.com/mlcdn/c45406/190807_832kal5595l4i5l462hdkf067blkc_400x400.jpg_50x50.jpg">
            </div>
            <div class="info" @click="actorInfo">
              <div class="actor-name">朕好萌啊</div>
              <div class="online-num">热度 165191</div>
            </div>
            <div class="focus-btn">
              <focus/>
            </div>
          </div>
          <div class="head-right"></div>

        </div>
      </div>
        <div class="notice">
         <div class="notice-img"><img src="../../../assets/img/bozhu/laba.svg"></div>
          <div class="scroll"><span>身高：158 体重：54kg</span></div>
        </div>
        <div class="recommend-goods">
          <div class="good-list">
            <div v-for="data in goods" :key="data" class="good-list-item">
              <a :href="data.link">
                <img :src="data.cover" class="data-img">
                <div class="price-mask"></div>
                <div class="price">{{data.price}}</div>    </a>
            </div>

          </div>
        </div>
        <div class="footer-mask">
          <div class="comments">
            <div class="comment-wrapper">
              <live-comments-item  class="content-list" v-for="item in comments" :key="item" :item="item" />
            </div>
          </div>
          <div v-show="ischat" class="footer">
            <div class="footer-left">
              <img src="../../../assets/img/bozhu/liaotian.svg" @click="chat">
              <img src="../../../assets/img/bozhu/zhuanfa.svg">
            </div>
            <div class="footer-right">
              <img src="../../../assets/img/bozhu/shopping.svg">
            </div>
          </div>
          <div class="chat" v-show="!ischat">
            <input type="text" v-model="chatcontent">
            <button @click="send">发送</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Focus from "../../common/focus/Focus";
  import LiveCommentsItem from "./LiveCommentsItem";

    export default {
        name: "OnLive",
        components: {LiveCommentsItem, Focus},
        data () {
            return {
                // 视频播放
                playerOptions: {
                    playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
                    autoplay: true, //如果true,浏览器准备好时开始回放。
                    controls: false,
                    techOrder: ['flash', 'html5'],
                    sourceOrder: true,
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '4:7', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    flash: {hls: {withCredentials: false}},
                    html5: {hls: {withCredentials: false}},
                    sources: [{
                        type: 'video/mp4',
                        src : "https://1251964405.vod2.myqcloud.com/vodtransgzp1251964405/5285890796388612244/v.f30.mp4?t=1575456650896"//url地址
                    }] ,
                    poster: "", //你的封面地址
                    width: '100%',
                    height:'600px',
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。


                },
                goods:[
                    {"itemId":"1mojld4","cover":"https://s5.mogucdn.com/mlcdn/c45406/191202_0hce8d20d0hhc80b2jflk1795b8lg_1080x1806.jpg","price":"¥259","link":"mgj://mglive/enterLiveRoom?roomId=11463791&actorId=172a7pe&itemId=1mojld4&acm=3.lb.1_4_1mojld4.0..0iwQfrJGTTXuw.x_172a7pe-sd_132-xid_28-xm_1dnf2u-cxk_100028-dm1_1000","acm":"3.lb.1_4_1mojld4.0..0iwQfrJGTTXuw.x_172a7pe-sd_132-xid_28-xm_1dnf2u-cxk_100028-dm1_1000","title":"00011超大真毛领派克服外套女"},
                    {"itemId":"1mmta5o","cover":"https://s5.mogucdn.com/mlcdn/c45406/191027_0li2h1fjdjclcj874eh2gk1ahja3h_750x750.jpg","price":"¥59.9","link":"mgj://mglive/enterLiveRoom?roomId=11463791&actorId=172a7pe&itemId=1mmta5o&acm=3.ms.0_4_1mmta5o.0.96193-68958.7LBz7rJGTTWQX.x_172a7pe-sd_117-xid_28-t_7LBz7rJGTTWQX-xm_1dnf2u-cxk_100028-dm1_1000","acm":"3.ms.0_4_1mmta5o.0.96193-68958.7LBz7rJGTTWQX.x_172a7pe-sd_117-xid_28-t_7LBz7rJGTTWQX-xm_1dnf2u-cxk_100028-dm1_1000","title":"叶子~牛真皮福利高定款~双拉链帅气马丁短靴","discountPrice":"¥59.9","type":3,"isNewItem":0},
                    {"itemId":"1mom9wk","cover":"https://s5.mogucdn.com/mlcdn/c45406/191204_8b9700i8a4l8eb545ek06kac85efk_800x800.jpg","price":"¥55.9","link":"mgj://mglive/enterLiveRoom?roomId=11463791&actorId=172a7pe&itemId=1mom9wk&acm=3.ms.0_4_1mom9wk.0.96193-68958.7LBz7rJGTTWQX.x_172a7pe-sd_117-xid_28-t_7LBz7rJGTTWQX-xm_1dnf2u-cxk_100028-dm1_1000","acm":"3.ms.0_4_1mom9wk.0.96193-68958.7LBz7rJGTTWQX.x_172a7pe-sd_117-xid_28-t_7LBz7rJGTTWQX-xm_1dnf2u-cxk_100028-dm1_1000","title":"大树灰黑色牛仔裤女高腰冬季外穿加厚显瘦秋冬紧身小脚裤","discountPrice":"¥55.9","type":3,"isNewItem":1}],
                comments:[
                    {"commentId":"16ivcmg_1575508449143","type":1,"content":"140多斤可以穿吗","avatar":"https://s5.mogucdn.com/p2/170106/upload_8e7e91ckf2c4e3lgc2cjif14d6d69_1440x2560.jpg","uid":"16ivcmg","uname":"weshdfexxx"},
                    {"commentId":"1du5a48_1575508488062","type":1,"content":"对的","avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190613_10j3d63d8aa5h40c883cb60c1j7g0_132x132.jpg","uid":"1du5a48","uname":"我玩的的"},
                    {"commentId":"1bja7d2_1575508492768","type":1,"content":"1","avatar":"https://s5.mogucdn.com/mlcdn/5abf39/180730_890a6545cg0fb9heakfik4ck2bk6c_132x132.jpg","uid":"1bja7d2","uname":"安其拉"},
                    {"commentId":"16ivcmg_1575508449143","type":1,"content":"140多斤可以穿吗","avatar":"https://s5.mogucdn.com/p2/170106/upload_8e7e91ckf2c4e3lgc2cjif14d6d69_1440x2560.jpg","uid":"16ivcmg","uname":"weshdfexxx"},
                    {"commentId":"1du5a48_1575508488062","type":1,"content":"对的","avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190613_10j3d63d8aa5h40c883cb60c1j7g0_132x132.jpg","uid":"1du5a48","uname":"我玩的的"},
                    {"commentId":"1bja7d2_1575508492768","type":1,"content":"1","avatar":"https://s5.mogucdn.com/mlcdn/5abf39/180730_890a6545cg0fb9heakfik4ck2bk6c_132x132.jpg","uid":"1bja7d2","uname":"安其拉"},
                    {"commentId":"16ivcmg_1575508449143","type":1,"content":"140多斤可以穿吗","avatar":"https://s5.mogucdn.com/p2/170106/upload_8e7e91ckf2c4e3lgc2cjif14d6d69_1440x2560.jpg","uid":"16ivcmg","uname":"weshdfexxx"},
                    {"commentId":"1du5a48_1575508488062","type":1,"content":"对的","avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190613_10j3d63d8aa5h40c883cb60c1j7g0_132x132.jpg","uid":"1du5a48","uname":"我玩的的"},
                    {"commentId":"1bja7d2_1575508492768","type":1,"content":"1","avatar":"https://s5.mogucdn.com/mlcdn/5abf39/180730_890a6545cg0fb9heakfik4ck2bk6c_132x132.jpg","uid":"1bja7d2","uname":"安其拉"},
                    {"commentId":"16ivcmg_1575508449143","type":1,"content":"140多斤可以穿吗","avatar":"https://s5.mogucdn.com/p2/170106/upload_8e7e91ckf2c4e3lgc2cjif14d6d69_1440x2560.jpg","uid":"16ivcmg","uname":"weshdfexxx"},
                    {"commentId":"1du5a48_1575508488062","type":1,"content":"对的","avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190613_10j3d63d8aa5h40c883cb60c1j7g0_132x132.jpg","uid":"1du5a48","uname":"我玩的的"},
                    {"commentId":"1bja7d2_1575508492768","type":1,"content":"1","avatar":"https://s5.mogucdn.com/mlcdn/5abf39/180730_890a6545cg0fb9heakfik4ck2bk6c_132x132.jpg","uid":"1bja7d2","uname":"安其拉"},
                    {"commentId":"16ivcmg_1575508449143","type":1,"content":"140多斤可以穿吗","avatar":"https://s5.mogucdn.com/p2/170106/upload_8e7e91ckf2c4e3lgc2cjif14d6d69_1440x2560.jpg","uid":"16ivcmg","uname":"weshdfexxx"},
                    {"commentId":"1du5a48_1575508488062","type":1,"content":"对的","avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190613_10j3d63d8aa5h40c883cb60c1j7g0_132x132.jpg","uid":"1du5a48","uname":"我玩的的"},
                    {"commentId":"1bja7d2_1575508492768","type":1,"content":"最后一个哟","avatar":"https://s5.mogucdn.com/mlcdn/5abf39/180730_890a6545cg0fb9heakfik4ck2bk6c_132x132.jpg","uid":"1bja7d2","uname":"傻喵"}],
                ischat:true,
                chatcontent:'',
            }},
        methods:{
            chat(){
                this.ischat=false

            },
            send(){
                console.log(this.chatcontent);
                console.log('发送消息');
               this.comments.push( {"commentId":"1bja7d2_1575508492768","type":1,"content":`${this.chatcontent}`,"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/180730_890a6545cg0fb9heakfik4ck2bk6c_132x132.jpg","uid":"1bja7d2","uname":"三喵喵"}
            )
                this.ischat=true
            },
            actorInfo(){
                this.$router.history.push('/detailvideo')
            }
        }

    }
</script>

<style scoped>
  .on-live{
    position: relative;
  }
  .live-cover{
    position: absolute;
    top:0;
    right:0;
    left: 0;
    height: 100%;
  }
  .actor-avatar img{
    width:30px;
    height: 30px;
    border-radius: 50%;
  }
  .focus-actor{
    margin: 15px 0 0 15px;
  }
  .head-left{
    display: flex;
    align-items: center;
  }
  .info{
    margin-left: 10px;
    color: white;
    font-size: 15px;
  }
  .focus-btn{
    margin-left: 10px;
    width: 70px;
    font-size: 13px;
  }
  .notice{
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 2px;
    margin-left: 5px;
    border-radius: 1.25rem;
    background-color: #b5aeae;
    width: 100px;
  }

  .notice img{
    width: 25px;
    height: 25px;
  }
  .scroll{
    position: relative;
    width: 80px;
    height: 20px;
    overflow: hidden;
    /* 强制文本在一行内显示（white-space:nowrap）及溢出内容为隐藏（overflow:hidden），
   只有这样才能实现溢出文本显示省略号的效果。*/
    white-space: nowrap;
  }
  .notice span{
    color: white;
    position: absolute;
    width: 75px;
    top:5px;
    font-size: 13px;
    animation: span-move 5s infinite;
  }
  @keyframes span-move {/*关键帧(keyframes) - 定义动画在不同阶段的状态。*/
    0% { margin-left: 10px;}
    100% { margin-left: -100px;}
  }

  .good-list{
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
  .data-img{
    width: 57px;
    height: 64px;
    margin-right: 6px;
  }
.good-list-item{
  position: relative;
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
  .content-list{
    display: flex;
  }
  .footer-mask{
    position: relative;
  }
  .comments{
    position: absolute;
    top: 104px;
    left: 10px;
    height: 157px;
    overflow: hidden;
    /* 强制文本在一行内显示（white-space:nowrap）及溢出内容为隐藏（overflow:hidden），
   只有这样才能实现溢出文本显示省略号的效果。*/
    white-space: nowrap;
  }
  .comment-wrapper{
    animation: comment-move 10s infinite;
  }
  @keyframes comment-move {
    0% { margin-top: 10px;}
    100% { margin-top: -560px;}
  }
  .footer-left img{
    width: 40px;
    margin: 0 10px;
  }
  .footer-right img{
    width: 40px;
    margin: 0 10px;
  }
  .footer{
    position: fixed;
    top: 548px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .chat{
    position: fixed;
    top: 541px;
    width: 100%;
    background: black;
    height: 50px;
    display: flex;
    justify-content: space-around;
  }
  .chat input{
    width: 64%;
    background: deeppink;
    margin: 6px;
    border-radius: 0.25rem;
    border: 1px solid deeppink;
  }
  .chat button{
    margin: 6px;
    background-color: deeppink;
    color: white;
    border: 1px solid deeppink;
    border-radius: 0.25rem;
    width: 60px;
  }


</style>
