import Vue from 'vue'
import App from './App.vue';
import router from "./router";
import store from './store' //引入状态管理store
import VideoPlayer from 'vue-video-player';
import Video from 'video.js'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.use(VideoPlayer)
Vue.prototype.$video = Video
new Vue({
  router,
  store, //祖册store(这里可以把store的实例注册到所有的子组件中)
  render: h => h(App),
}).$mount('#app')


