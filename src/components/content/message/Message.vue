<template>
  <div class="msg-fade">
    <div class="message" v-show="visible">
      <span class="icon"><img src="../../../assets/img/profile/gou.svg"></span>
      <p class="content">{{content}}</p>
    </div>
  </div>
</template>
<script>
    export default {
        name: "Message",
        data(){
            return {
                visible:false,
                type:'',
                content:'登录成功'
            }
        },
        watch:{
            visible(v){
                if(v){
                    setTimeout(()=>{
                        this.onClose()
                    },1000)
                }
            }
        },
        methods: {
            onClose() {
                this.visible = false
              //  this.$el.parentNode.removeChild(this.$el)
              //  这句语法可以直接在别的组件中删除本组件
            },
            show() {
                this.visible = true
            },
        }

    }
</script>

<style scoped>
  .message {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
    background: white;
    z-index: 1000;
    min-width: 90px;
    height: 32px;
    box-sizing: border-box;
    border: 1px solid #A7E1C4;
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 15px;
  }

 .icon{
    display: inline-block;
    width: 12px;
   height: 23px;
   margin-right: 10px;
    }
 .icon img{
   width: 20px;
 }
  .content{
    display: inline-block;
    font-size: 12px;
    color: rgba(0,0,0,0.65);
    letter-spacing: 0;
    line-height: 30px;
    margin-left: 8px;
    font-weight: bold;
  }
  .msg-fade {
   animation: alert-fade-in .3s;
    }

@keyframes alert-fade-in {
  0% {opacity: 0;}
  50% {opacity: 1;}
  100% {opacity: 0;}
  }
</style>
