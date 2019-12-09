<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
    <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from'better-scroll'
    export default {
        name: "Scroll",
        props:{
            probeType:{
                type:Number,
                default:0
            },
            pullUpLoad:{
                type:Boolean,
                default: false
            }
        },
        data(){
            return{
                scroll:null
            }

        },
        mounted() {
            console.log('创建Bscroll对象');
            //创建Bscroll对象
            this.scroll=new BScroll(this.$refs.wrapper,{
                click:true,
                probeType:this.probeType,
                pullUpLoad: this.pullUpLoad,
            })
            //监听滚动位置
            this.scroll.on('scroll',(position)=>{
               /* console.log('监听滚动位置');
                console.log(position);*/
                this.$emit('scroll',position)
            })
            //监听滚动到底部
            if(this.pullUpLoad){

                this.scroll.on('pullingUp',()=>{
                    console.log('滚到底部');
                    this.$emit('pullingUp')
                })
            }


        },
        methods:{
            scrollTo(x,y,time=500){
                console.log('srollTo发生了');
                console.log(x,y)
                console.log(this.scroll)
                this.scroll.scrollTo(x,y,time)
            },
            finishPullUp(){
                this.scroll && this.scroll.finishPullUp()
            }
        }
    }
</script>

<style scoped>

</style>
