<template>
<div>
  <div class="content">
    <img class="content-logo" src="../../assets/img/profile/logo.png" alt="logo">
    <h1 class="content-title">登录</h1>
    <div class="content-form">
      <div>
        <div id="change_margin_1">
          <input class="user" type="text" name="user" placeholder="请输入用户名"
                 @blur="oBlur_1()" @focus="oFocus_1()"
                 v-model="username">
        </div>
        <!-- input的value为空时弹出提醒 -->
       <div class="remind_1_div"><p id="remind_1">{{remind_1}}</p></div>
        <div id="change_margin_2">
          <input class="password" type="password" name="password" placeholder="请输入密码"
                 @blur="oBlur_2()" @focus="oFocus_2()" v-model="password">
        </div>
        <!-- input的value为空时弹出提醒 -->
       <div class="remind_1_div"> <p id="remind_2">{{remind_2}}</p></div>
        <div id="change_margin_3">
          <button class="content-form-signup"
                  @click="submitTest">登录</button>
        </div>
      </div>
    </div>
    <div class="content-login-description">没有账户？</div>
    <div><div class="content-login-link" @click="gotoregister">注册</div></div>
  </div>
  <message ref="message"/>
</div>
</template>

<script>
  import {login} from '../../network/login'
  import Message from "../../components/content/message/Message";
    export default {
        name: "Login",
        components: {Message},
        data(){
          return{
              username:'',
              password:'',
              remind_1:'',
              remind_2:'',
          }
        },
        methods:{
            oBlur_1() {
                let a = this.username;
                if (!a) { //用户框value值为空
                    this.remind_1= "请输入用户名！";
                } else { //用户框value值不为空
                    this.remind_1= "";
                }
          },
            oBlur_2() {
                let b = this.password;
                if (!b) { //密码框value值为空
                    this.remind_2= "请输入密码！";
                } else { //密码框value值不为空
                    this.remind_2= "";
                }
            },
            oFocus_1() {
                this.remind_1= "";
            },
            oFocus_2() {
                this.remind_2= "";
            },
            submitTest(){
                // 全局变量a和b，分别获取用户框和密码框的value值
                let a = this.username;
                let b = this.password;
                if (!a && !b) { //用户框value值和密码框value值都为空
                    this.remind_1 = "请输入用户名！";
                    this.remind_2 = "请输入密码！";
                    return false; //只有返回true表单才会提交
                } else if (!a) { //用户框value值为空
                    this.remind_1 = "请输入用户名！";
                    return false;
                } else if (!b) { //密码框value值为空
                    this.remind_2= "请输入密码！";
                    return false;
                }else{
                    //符合标准
                    //发送ajax请求验证登录
                    this.loginrequset()


                }

            }
            ,loginrequset(){
                login(this.username,this.password).then(res=>{
                    console.log(res.data.status);
                    if(res.data.status===0){
                      //  alert('登录成功');
                        this.$refs.message.show()
                        localStorage.setItem('username',JSON.stringify(this.username))
                      setTimeout(()=>{
                          this.$router.history.replace('/profile')
                      },1000)
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }
            ,gotoregister(){
              console.log('跳转到注册页')
                 this.$router.history.push('/register')
            }
        }
    }
</script>

<style scoped>
  /*content*/
  .content {
    width: 100%;
    margin: 71px auto 0;
    text-align: center;
  }
  .content-logo {
    width: 80px;
    height: 80px;
  }
  .content-title {
    margin: 10px 0 25px 0;
    font-size: 2em;
    color: #747474;
    font-weight: normal;
  }
  .content-form {
    width: 100%;
    padding: 36px 0 20px;
    border: 1px solid  #dedede;
    text-align: center;
    background: #fff;
  }
  .content-form form div {
    margin-bottom: 19px;
  }
  .content-form form .user,
  .content-form form .password {
    width: 77%;
    height: 20px;
    padding: 10px;
    font-size: 1em;
    border: 1px solid  #cccbcb;
    border-radius: 7px;
    letter-spacing: 1px;
  }
  .content-form form input:focus {
    outline: none;
    -webkit-box-shadow: 0 0 5px #0dbfdd;
    box-shadow: 0 0 5px #0dbfdd;
  }
  .content-form-signup {
    width: 84%;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid  #cccbcb;
    border-radius: 7px;
    font-size: 1em;
    font-weight: bold;
    color: #fff;
    background: #0dbfdd;
    cursor: pointer;
  }
  .content-form-signup:hover {
    background: #0cb3d0;
  }
  .content-form-signup:focus {
    outline: none;
    border: 1px solid  #0cb3d0;
  }
  .content-login-description {
    margin-top: 25px;
    line-height: 1.63636364;
    color: #747474;
    font-size: .91666667rem;
  }
  .content-login-link {
    font-size: 16px;
    color: #0dbfdd;
    text-decoration: none;
  }
  .user,.password{
    width: 84%;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #cccbcb;
    border-radius: 7px;
    font-size: 1em;
  }

  /*输入框无内容便提示*/
  #remind_1,
  #remind_2 {
    width: 76%;
    margin: 0 40%;
    text-align: left;
    font-size: .2em;
    color: #f00;
  }
  .remind_1_div{
    height: 15px;
  }
</style>
