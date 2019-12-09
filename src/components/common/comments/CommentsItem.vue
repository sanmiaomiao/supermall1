<template>
  <div class="content-list">
    <div class="user-img"><img :src="item.user.avatar" class="user-img-pic"/></div>
    <div class="user-comment">
      <div class="name-time"><span class="user-name">{{item.user.uname}}</span><span class="time">2019年11月29日</span></div>
      <div class="comment-detail">{{item.content}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CommentsItem",
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
    width: 60px;
    border-radius: 50%;
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
