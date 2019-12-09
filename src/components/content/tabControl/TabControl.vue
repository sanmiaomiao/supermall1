<template>
    <div class="tab-control">
      <div v-for="(item,index) in titles" :key="item"
           @click="itemClick(index)"
           class="tab-control-item"
           :class="{active:index===currentIndex}">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
    },
        data(){
            return{
                currentIndex:0,
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex=index;
                this.$emit('tabClick',index)
            }
        }
    }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  background-color: #ffffff;


}
  .tab-control-item{
    flex: 1;
    line-height: 40px;
    font-size: 15px;
  }
  .active{
    color: var(--color-height-text);
  }
.tab-control-item span{
  padding: 5px;
}
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
