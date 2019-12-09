<template>
    <div>
      <div class="profile">
        <div class="profile-head">
          <div class="head-top">
            <div class="top-left">
              <img src="https://s11.mogucdn.com/mlcdn/c45406/190807_832kal5595l4i5l462hdkf067blkc_400x400.jpg_50x50.jpg">
              <span>三喵喵</span>
            </div>
            <div class="top-right">
              <button @click="logout">退出登录</button>
            </div>
          </div>
          <div class="head-bottom">
            <div class="bottom-item">
              <div>52</div>
              <div>收藏夹</div>
            </div>
            <div class="bottom-item" @click="tofocus">
              <div>13</div>
              <div>我的关注</div>
            </div>
            <div class="bottom-item">
              <div>29</div>
              <div>足迹</div>
            </div>
            <div class="bottom-item">
              <div>0</div>
              <div>红包卡券</div>
            </div>
          </div>
        </div>
        <div class="profile-body">
          <div class="body-top">
            <div class="body-top-left">我的订单</div>
            <div class="body-top-right">
              <span>查看全部订单</span>
              <img src="../../assets/img/detail/right.svg">
            </div>
          </div>
          <div class="body-center">
            <div class="body-center-item">
              <div class="number" v-show="fukuan_number">12</div>
              <img class="body-center-item-img" src="../../assets/img/profile/qianbao.svg">
              <span>待付款</span>
            </div>
            <div class="body-center-item">
              <div class="number" v-show="fahuo_number">12</div>
              <img src="../../assets/img/profile/fahuo.svg">
              <span>待发货</span>
            </div>
            <div class="body-center-item">
              <div class="number" v-show="shuohuo_number">12</div>
              <img src="../../assets/img/profile/shoufuo.svg">
              <span>待收货</span>
            </div>
            <div class="body-center-item">
              <div class="number" v-show="pinjia_number">12</div>
              <img src="../../assets/img/profile/pinjia.svg">
              <span>待评价</span>
            </div>
            <div class="body-center-item">
              <div class="number" v-show="shouhou_number">12</div>
              <img src="../../assets/img/profile/shouhou.svg">
              <span>售后</span>
            </div>
          </div>
          <div class="body-bottom">
            <div class="body-bottom-top">
              <div class="body-bottom-top-left">最新物流</div>
              <div class="body-bottom-top-right">12-05</div>
            </div>
            <div class="body-bottom-content">
              <img class="huowu-img" src="https://s5.mogucdn.com/mlcdn/c45406/190907_2hje3a7jce6ldk20g973k9c43901d_2000x2000.jpg">
              <div class="bottom-right">
                <div class="bottom-right-top">
                  <img class="shouhuo-logo" src="../../assets/img/profile/shouhuo_logo.svg">
                  <span>运输中</span>
                </div>
                <div class="bottom-right-bottom">
                  <span class="bottom-right-bottom-span">[揭阳市]快件离开潮汕中心已发往京南转运中心</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>








    </div>
</template>

<script>
    export default {
        name: "Profile",
        data(){
          return{
              shuohuo_number:true,
          }
        },
        created(){
          this.checklogin();
        },
        methods:{
            checklogin(){
                let username=JSON.parse(localStorage.getItem('username'))
                if(!username){
                    alert('未登录');
                    this.$router.history.push('/login')
                }
            },
            logout(){
                console.log('退出登录成功');
                localStorage.removeItem('username')
                this.$router.history.push('/login')
            },
            tofocus(){
                this.$router.history.push('/focus')
            },
        }

    }
</script>

<style scoped>
.profile{
  background-color: #b5aeae;
}
  .profile-head{
    background-color: #f1ebe1;
  }
  .profile-body{
    background-color: whitesmoke;
  }
  .head-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top-left{
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top-left span{
    border-radius: 50%;
    margin-right: 10px;
  }
  .top-right{
    margin: 10px;
  }
  .top-right button{
    background-color: deeppink;
    border: 1px solid deeppink;
    border-radius: 0.25rem;
    padding: 10px;
    color: white;
  }
  .head-bottom{
    display: flex;
    justify-content: space-around;
  }
  .bottom-item{
    text-align: center;

  }
  .bottom-item div{
    margin-bottom: 10px;
  }
  .body-top-right{
    display: flex;
    align-items: center;
  }
  .body-top-right img{
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }
.body-top-left {
  font-weight: bold;
}
.body-top{
    display: flex;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;

  }
.body-center{
  display: flex;
  justify-content: space-around;
}
.body-center-item{
  display: flex;
  flex-direction: column;
  padding: 5px;
  position: relative;
}
  .body-center-item img{
    width: 30px;
    height: 30px;

  }
  .body-center-item span{
    font-size: 13px;
  }
  .number{
    position: absolute;
    top: -2px;
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    color: black;
    text-align: center;
    border: 1px solid deeppink;
    font-size: 13px;
    padding-top: 2px;
  }
  .body-bottom-top{
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    font-size: 13px;
    color: #bab4b4;
  }
  .body-bottom-content{
    display: flex;
    align-items: center;
  }
  .huowu-img{
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
.shouhuo-logo{
  width: 20px;
  margin-right: 10px;
}
  .bottom-right-top{
    padding: 5px;
    color: deepskyblue;
    display: flex;
    align-items: center;
  }
  .bottom-right-bottom{
   color: #bab4b4;
    font-size: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 90%;
  }
  .bottom-right-bottom-span{


  }


</style>
