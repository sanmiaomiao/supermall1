
import Vue from 'vue';
import VueRouter from 'vue-router';

const Home=()=>import('../views/home/Home')
const Category=()=>import('../views/category/Category')
const Cart=()=>import('../views/cart/Cart')
const Profile=()=>import('../views/profile/Profile')
const Detail=()=>import('../views/detail/Detail')
const Login=()=>import('../views/profile/Login')
const Register=()=>import('../views/profile/Register')
const DetailVideo=()=>import('../components/content/DetailVideo/DetailVideo')
const SaleVideo=()=>import('../components/content/SaleVideo/SaleVideo')
const OnLive=()=>import('../components/content/live/OnLive')
const Focus=()=>import('../components/content/focus/Focus')
const Chat=()=>import('../components/content/chat/Chat')
const TryLive=()=>import('../components/content/trylive/TryLive')
const Record=()=>import('../components/content/trylive/Record')
const BuzhuRecord=()=>import('../components/content/live/BuzhuRecord')
//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },

  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/detailvideo',
    component:DetailVideo
  },
  {
    path:'/salevideo',
    component:SaleVideo
  },
  {
    path:'/onlive',
    component:OnLive
  },
  {
    path:'/focus',
    component:Focus
  },
  {
    path:'/chat',
    component:Chat
  }
  ,
  {
    path:'/trylive',
    component:TryLive
  }
  ,
  {
    path:'/record',
    component:Record
  },{
    path:'/buzhurecord',
    component:BuzhuRecord
  }
]
const router=new VueRouter({
  routes,
  mode:'history'
})
//3.导出
export default router
