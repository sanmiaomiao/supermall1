
<template>
  <div class="content-list">
    <div class="user-img"><img :src="item.avatar" class="user-img-pic"/></div>
    <div class="user-comment">
      <div class="name-time"><span class="user-name">{{item.uname}}</span></div>
      <div class="comment-detail">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LiveCommentsItem",
        props:{
            item:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
  .user-img{
    padding-right: 10px;
  }
  .user-img-pic{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .user-name{
    color: deeppink;
  }
  .user-comment{
    font-size: 14px;
  }
  .name-time{
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
  }
  .time{
    color: #c0c0c0;
    font-size: 10px;
  }
  .comment-detail{
    padding-bottom: 5px;
  }
</style>

