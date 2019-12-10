<template>
  <img id="receiver" style="width:600px;height:630px"/>
</template>

<script>
    export default {
        name: "TryLive",
        mounted(){
            this.onlive()
        },
        methods: {
            onlive(){
            //创建一个socket实例
            var receiver_socket = new WebSocket("ws://" + document.domain + ":8082");

           // alert("ws://" + document.domain + ":8008")

            var image = document.getElementById('receiver');

            // 监听消息

            receiver_socket.onmessage = function (data) {

        image.src = data.data;

    }
    }
        }
    }
</script>

<style scoped>

</style>
