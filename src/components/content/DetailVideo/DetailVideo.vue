<template>
  <div>
    <detail-nav-bar />
    <bo-zhu-info/>
    <div class="input_video">
      <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
      ></video-player>
    </div>
    <a href="">
    <div class="product-link">
      <img src="https://s11.mogucdn.com/mlcdn/c45406/190826_16hfkj2adh71e1agik25j45609ab8_640x960.jpg_160x999.v1c96.70.webp">
      <div class="product-desc"><div class="product-title">韩版时尚秋冬新款宽松显瘦长袖毛衣</div><div class="product-price">￥55.7</div></div>

    </div> </a>
    <comment-original :comments="comments"/>
    <div class="dibai">

    </div>

  </div>

</template>

<script>
  import CommentOriginal from "../../common/comments/CommentOriginal";
  import BoZhuInfo from "../bozhuInfo/BoZhuInfo";
  import DetailNavBar from "../DetailNavBar/DetailNavBar";
    export default {
        name: "DetailVideo",
        components: {DetailNavBar, CommentOriginal,BoZhuInfo},
        data () {
            return {
                // 视频播放
                playerOptions : {
                    playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], //可选择的播放速度
                    autoplay : false, //如果true,浏览器准备好时开始回放。
                    muted : false, // 默认情况下将会消除任何音频。
                    loop : false, // 视频一结束就重新开始。
                    preload : 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language : 'zh-CN',
                    aspectRatio : '6:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid : true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    flash:{hls:{withCredentials:false}},
                    html5:{hls:{withCredentials:false}},
                    sources : [ {
                        type : "video/mp4",
                        src : "https://1251964405.vod2.myqcloud.com/vodtransgzp1251964405/5285890796388612244/v.f30.mp4?t=1575456650896"//url地址
                    } ],
                    poster : "", //你的封面地址
                    width: '100px',
                    notSupportedMessage : '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar : {
                        timeDivider : true,//当前时间和持续时间的分隔符
                        durationDisplay : true,//显示持续时间
                        remainingTimeDisplay : false,//是否显示剩余时间功能
                        fullscreenToggle : true  //全屏按钮
                    }

                },
                comments:[{content:"第一次在蘑菇街买东西，价钱不高，质量也不错哦！",user:{
                        avatar:"https://s11.mogucdn.com/mlcdn/5abf39/191121_71abbdhd38b3ajfj268057jeg87al_132x132.jpg",
                        profileUrl:"",
                        uname:"A00姣2002",
                    }
                   },
                    {content:"第一次在蘑菇街买东西，价钱不高，质量也不错哦！",user:{
                            avatar:"https://s11.mogucdn.com/mlcdn/5abf39/191121_71abbdhd38b3ajfj268057jeg87al_132x132.jpg",
                            profileUrl:"",
                            uname:"A00姣2002",
                        }
                    },
                    {content:"第一次在蘑菇街买东西，价钱不高，质量也不错哦！",user:{
                            avatar:"https://s11.mogucdn.com/mlcdn/5abf39/191121_71abbdhd38b3ajfj268057jeg87al_132x132.jpg",
                            profileUrl:"",
                            uname:"A00姣2002",
                        }
                    }
                    ,
                    {content:"第一次在蘑菇街买东西，价钱不高，质量也不错哦！",user:{
                            avatar:"https://s11.mogucdn.com/mlcdn/5abf39/191121_71abbdhd38b3ajfj268057jeg87al_132x132.jpg",
                            profileUrl:"",
                            uname:"A00姣2002",
                        }
                    }
                    ,
                    {content:"第一次在蘑菇街买东西，价钱不高，质量也不错哦！",user:{
                            avatar:"https://s11.mogucdn.com/mlcdn/5abf39/191121_71abbdhd38b3ajfj268057jeg87al_132x132.jpg",
                            profileUrl:"",
                            uname:"A00姣2002",
                        }
                    },
                    {content:"第一次在蘑菇街买东西，价钱不高，质量也不错哦！",user:{
                            avatar:"https://s11.mogucdn.com/mlcdn/5abf39/191121_71abbdhd38b3ajfj268057jeg87al_132x132.jpg",
                            profileUrl:"",
                            uname:"A00姣2002",
                        }
                    },
                    {content:"第一次在蘑菇街买东西，价钱不高，质量也不错哦！",user:{
                            avatar:"https://s11.mogucdn.com/mlcdn/5abf39/191121_71abbdhd38b3ajfj268057jeg87al_132x132.jpg",
                            profileUrl:"",
                            uname:"A00姣2002",
                        }
                    }]

            }
        },
        mounted() {
        },
        methods: {

        }
    }
</script>

<style scoped>
  .product-link{
    display: flex;
    background-color: lightgray;
    margin: 3px;
    padding: 2px 10px;
  }
  .product-link img{
    width: 70px;
    height: 100px;
  }
  .product-desc{
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .product-title{
    margin-bottom: 20px;
  }
  .product-price{
    margin: auto;
  }
  .dibai{
    height: 10px;
  }
</style>
