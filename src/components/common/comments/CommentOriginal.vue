<template>
  <div class="comments">
    <div class="comments-content">
      <div class="content-title">全部评价({{commentsdata.length}})</div>
      <comments-item  class="content-list" v-for="item in dataShow" :key="item" :item="item"/>
      <div class="pageshow">
        <div class="page-before" @click="prePage">前一页</div>
        <div class="page">{{currentPage+1}}</div>
        <div class="page-after" @click="nextPage">后一页</div>
      </div>

    </div>
  </div>
</template>

<script>
  import CommentsItem from "./CommentsItem";
    export default {
        name: "CommentOriginal",
        components:{
            CommentsItem
        },
        props:{
            comments:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                // 假设这是后台传来的数据来源
                commentsdata:[],
                // 所有页面的数据
                totalPage: [],
                // 每页显示数量
                pageSize: 3,
                // 共几页
                pageNum: 1,
                // 当前显示的数据
                dataShow: "",
                // 默认当前显示第一页
                currentPage: 0

            }
        },

        created(){
            console.log('comments 中的created发生了');
            this.getdatas();
            this.computePageNum();
            console.log(this.commentsdata)
        },
        methods:{
            getdatas(){
                this.commentsdata=this.comments;
                console.log("this.commentsdata")
                console.log(this.commentsdata)
            },
            computePageNum(){
                console.log('computedPageNum');
                // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
                this.pageNum = Math.ceil(this.commentsdata.length / this.pageSize) || 1;
                for (let i = 0; i < this.pageNum; i++) {
                    // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
                    // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为5， 则第一页是1-5(对slice操作来说是0-5)条，第二页是6-10(对slice操作来说是5-10)条...
                    this.totalPage[i] = this.commentsdata.slice(this.pageSize * i, this.pageSize * (i + 1));
                }
                // 当前显示的内容
                this.dataShow = this.totalPage[this.currentPage];
                console.log(this.dataShow)
            },
            // 上一页和下一页
            // 下一页
            nextPage() {
                if (this.currentPage === this.pageNum - 1) return ;
                this.dataShow = this.totalPage[++this.currentPage];
            },
            // 上一页
            prePage() {
                if (this.currentPage === 0) return;
                this.dataShow = this.totalPage[--this.currentPage];
            }
        },
        watch:{
            comments(val,oldval){
                console.log('comment watch')
                console.log(val);
                console.log(oldval);
                this.commentsdata=this.comments
                console.log(this.commentsdata)
                console.log(this.dataShow);
                this.computePageNum();
            }
        }
    }
</script>

<style scoped>
  .comments{
    padding: 5px;
  }
  .comments-title{
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid;
    width: 73px;
    margin-bottom: 10px;
  }
  .content-title{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .content-list{
    display: flex;
    margin: 10px 0;
  }

  .pageshow{
    display: flex;
    justify-content: center;
  }
  .page{
    text-align: center;
    padding: 5px 8px;
    background-color: black;
    color: white;
    margin: 0 10px;

  }
</style>

