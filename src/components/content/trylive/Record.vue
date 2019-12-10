<template>
  <div>
    <video autoplay id="sourcevid" height="640px" style="width:100vw;height:100vh"></video>
    <!--<video> 标签定义视频，比如电影片段或其他视频流。autoplay:如果出现该属性，则视频在就绪后马上播放。-->
    <canvas id="output" style="display:none"></canvas>
    <!--
    canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成：
    -->
  </div>

</template>

<script>
    export default {
        name: "Record",
        mounted(){
            this.record()
        },
        methods:{
            record(){
                //创建一个+实例
                var socket = new WebSocket("ws://"+document.domain+":8082");
                var back = document.getElementById('output');//找到 <canvas> 元素:
                //返回一个用于在画布上绘图的环境。
                var backcontext = back.getContext('2d');//创建 context 对象：将canvas 转化为2d模型
                // getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
                var video = document.getElementsByTagName('video')[0];
                var success = function(stream){
                    //获取视屏流，转换为url
                    video.src = window.URL.createObjectURL(stream);
                    //window.URL.createObjectURL可以用于在浏览器上预览本地图片或者视频,
                    // window.URL.createObjectURL生成的URL赋给video标签
                }
                //打开socket
                socket.onopen = function(){
                    draw();
                    console.log("open success")
                }
                // 将视频帧绘制到Canvas对象上,Canvas每100ms切换帧，形成肉眼视频效果
                var draw = function() {
                    try {
                        backcontext.drawImage(video, 0, 0, back.width, back.height);
                        //把一幅图像放置到画布上, 使用以下方法:drawImage(image,x,y)
                        //在画布上定位图像，并规定图像的宽度和高度：context.drawImage(img,x,y,width,height);
                    } catch (e) {
                        if (e.name == "NS_ERROR_NOT_AVAILABLE") {
                            return setTimeout(draw, 100);
                        } else {
                            throw e;
                        }
                    }
                    if (video.src) {
                        // Canvas的内容转化成PNG data URI并发送到服务器，0.5为和压缩系数
                        socket.send(back.toDataURL("image/jpeg", 0.5));
                        //toDataURL()是canvas对象的一种方法，用于将canvas对象转换为base64位编码；
                        //通过将图片绘制到canvas中，然后将canvas对象转换为base64编码，从而实现图片转为base64编码；
                        //toDataURL(type, encoderOptions)
                       // type指定转换为base64编码后图片的格式，如：image/png、image/jpeg、image/webp等等，默认为image/png格式；
                       // encoderOptions用于设置转换为base64编码后图片的质量，取值范围为0-1，超出取值范围用默认值0.92代替；
                    }
                    setTimeout(draw, 100);
                }
                // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
                if (navigator.mediaDevices === undefined) {
                    navigator.mediaDevices = {};
                }
              // 一些浏览器部分支持 mediaDevices。我们不能直接给对象设置 getUserMedia
              // 因为这样可能会覆盖已有的属性。这里我们只会在没有getUserMedia属性的时候添加它。
                if (navigator.mediaDevices.getUserMedia === undefined) {
                    navigator.mediaDevices.getUserMedia = function(constraints) {

                        // 首先，如果有getUserMedia的话，就获得它
                        var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

                        // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
                        if (!getUserMedia) {
                            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                        }

                        // 否则，为老的navigator.getUserMedia方法包裹一个Promise
                        return new Promise(function(resolve, reject) {
                            getUserMedia.call(navigator, constraints, resolve, reject);
                        });
                    }
                }

                navigator.mediaDevices.getUserMedia({ audio: true, video: true })
                    .then(stream=>success(stream)/*function(stream) {
                        var video = document.querySelector('video');//querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
                        // 旧的浏览器可能没有srcObject
                        if ("srcObject" in video) {
                            video.srcObject = stream;
                        } else {
                            // 防止在新的浏览器里使用它，应为它已经不再支持了
                            video.src = window.URL.createObjectURL(stream);
                        }
                        video.onloadedmetadata = function(e) {
                            video.play();
                        };
                    }*/)
                    .catch(err=>console.log(err) /*function(err) {
                        console.log(err.name + ": " + err.message);
                    }*/);
                navigator.MediaDevices.getUserMedia({video:{
                        width: { min: 1024, ideal: 1280, max: 1920 },
                        height: { min: 776, ideal: 720, max: 1080 }
                    }, audio:false})//以下请求不带任何参数的视频：
                    .then(stream=>success(stream))
                    .catch(err=>console.log(err))

              /*  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                    navigator.mozGetUserMedia || navigator.msGetUserMedia;
                navigator.getUserMedia({video:true, audio:false}, success, console.log);*/
                //方法提醒用户需要使用音频（0或者1）和（0或者1）视频输入设备，比如相机，屏幕共享，或者麦克风。如果用户给予许可，
                // successCallback回调就会被调用，<<---MediaStream对象作为回调函数的参数--->>。如果用户拒绝许可或者没有媒体可用，
                // errorCallback就会被调用，


            }
        }
    }
</script>

<style scoped>

</style>
