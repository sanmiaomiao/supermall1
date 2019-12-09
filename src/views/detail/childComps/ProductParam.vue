<template>
    <div class="product-param">
     <div class="pro-desc">
       <div class="pro-title">商品描述</div>
       <div>{{productInfo2.title}}</div>
     </div>
      <div class="pro-param">
        <div class="pro-title">产品参数</div>
        <div class="pra-table">
          <table>
            <tr v-for="item in tablekeylist" :key="item">
              <td v-for="itemchild in item" :key="itemchild">{{itemchild}}&nbsp;&nbsp;{{tablelist[itemchild]}}</td>
            </tr>
          </table>
        </div>

      </div>
      <div class="pro-pics">
        <div class="pro-title">穿着效果</div>
        <div class="pics" v-for="item in proPics" :key="item">
          <img :src="item" @load="imageLoad">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ProductParam",
        props:{
            productInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        data(){
           return{
               productInfo2:'',
               title:'',
               tablelist:{},
               tablekeylist:[[],[],[],[],[]],
               proPics:[],
           }
        },
        created(){
            console.log('parameter的created执行');
            console.log(this.productInfo2);
            console.log(this.productInfo);
            this.productInfo2=this.productInfo;
            console.log(this.productInfo2);
            //this.tablelist=this.productInfo.itemParamsInfo;
            //console.log(this.tablelist);
            this.getdatas();
        },
        mounted(){
            console.log('parameter的mounted执行');
            console.log(this.productInfo2);
            console.log(this.productInfo);
            this.productInfo2=this.productInfo;
            console.log(this.productInfo2);
            //this.tablelist=this.productInfo.itemParamsInfo;
            //console.log(this.tablelist);
          this.getdatas();
        },
        methods:{
            getdatas(){
                console.log('参数中的getdata()')
                //this.title= this.productInfo2.title;
                this.tablelist=this.productInfo2.itemParamsInfo;
                const table=this.productInfo2.itemParamsInfo;
                this.caltablelist(table);
                this.proPics=this.productInfo2.proPics;

            },
            imageLoad(){
                this.$emit('imageLoad')
            }
            ,
            caltablelist(table){
                console.log('caltablelist');
                Object.keys(table).forEach(((value,index) => {
                    if(index<=2){
                        this.tablekeylist[0].push(value)
                    }else if(index<=5){
                        this.tablekeylist[1].push(value)
                    }else if(index<=8){
                        this.tablekeylist[2].push(value)
                    }else if(index<=11){
                        this.tablekeylist[3].push(value)
                    }else{
                        this.tablekeylist[4].push(value)
                    }

                }))
                console.log(Object.keys(table))
                console.log(Object.keys(table).length)
                const length=Object.keys(table).length;
                if(length<11 && length>9){
                    this.tablekeylist[3].push('');
                    this.tablekeylist[3].push('')
                }else if(length<12 && length>9){
                    this.tablekeylist[3].push('');
                }
                if(length<14 && length>12){
                    this.tablekeylist[4].push('');
                    this.tablekeylist[4].push('')
                }else if(length<15 && length>12){
                    this.tablekeylist[4].push('');
                }

                console.log(this.tablekeylist)
            }

        },
        watch:{

            tablekeylist(val,oldval){
                console.log('watch tablekeylist');
                console.log(val);
                console.log(oldval);
            }
        }
        ,
    }
</script>

<style scoped>
  .pro-title{
    border-bottom:1px solid black;
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
    width: 80px;
  }
  table{
    border-collapse: collapse;
  }
td{

  border-left: 1px solid #e0d9d9;
  border-top: 1px solid #e0d9d9;
  border-right:2px solid #e0d9d9;
  border-bottom:2px solid #e0d9d9;
  padding: 4px 5px;
  font-size: 10px;
}
  .pra-table{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pics img{
    width: 100vw;
  }
</style>
