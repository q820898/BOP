<template>
  <div class="ClassificationGoods">

    <NavTop fai="全部商品" />
    <div>
      <van-tree-select
        height="100vh"
        :items="items"
        :main-active-index.sync="activeIndex"
      >
        <template slot="content">
          <van-grid :border="false" :column-num="3" v-if="activeIndex === 0">
            <van-grid-item 
            v-for="(value,index) in columns" 
            :key="index"
            >
              <van-image :src="value.src" style="width:80%;"/>
              <p style="text-align: center;margin-top:10px;">{{value.text}}</p>
            </van-grid-item>
          </van-grid>
          <van-grid :column-num="3" v-if="activeIndex === 1">
            <van-grid-item
              v-for="(value,index) in columns" :key="index"
              :icon= "value.icon"
              :text= "value.text"
              class="idi"
            />
            <!-- <img 
            v-for="(value,index) in columns" :key="index"
            :src="value.src"
            
            class="img"
            > -->
          </van-grid>
          <van-grid :column-num="3" v-if="activeIndex === 2">
            <van-grid-item
              v-for="(value,index) in columns" :key="index"
              :icon= "value.icon"
              :text= "value.text"
            />
          </van-grid>
          <van-grid :column-num="3" v-if="activeIndex === 3">
            <van-grid-item
              v-for="(value,index) in columns" :key="index"
              :icon= "value.icon"
              :text= "value.text"
            />
          </van-grid>
          <!-- <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" /> -->
        </template>
      </van-tree-select>
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import NavTop from '@/components/NavTop.vue';
import { Dialog } from 'vant';
export default {
  name: 'ClassificationGoods',
  components: {
    Nav,
    NavTop,
  },
  data(){
    return{
      activeIndex: 0,
      items: [
        {text: '行李箱'},
        {text: '咖啡'},
        {text: '雨伞'},
        {text: '优惠券'},

      ],
      columns:[
        {
          icon:'exchange',
          text:'但是',
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3393066422,1113024882&fm=26&gp=0.jpg',
        },{
          icon:'fire-o',
          text:'额外',
          src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1169193762,3167562640&fm=26&gp=0.jpg'
        },{
          icon:'like-o',
          text:'发的',
          src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1169193762,3167562640&fm=26&gp=0.jpg'
        },{
          icon:'location-o',
          text:'突然',
          src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1169193762,3167562640&fm=26&gp=0.jpg'
        },{
          icon:'description',
          text:'但是',
          src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1169193762,3167562640&fm=26&gp=0.jpg'
        },{
          icon:'description',
          text:'但是',
          src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1169193762,3167562640&fm=26&gp=0.jpg'
        },{
          icon:'location-o',
          text:'但是',
          src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1169193762,3167562640&fm=26&gp=0.jpg'
        },{
          icon:'ellipsis',
          text:'更多',
          src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1169193762,3167562640&fm=26&gp=0.jpg'
        },
      ],
    }
  },
  methods:{
    toPay(){
      this.$router.push({name: 'pay', params: {price:this.price,}});
    },
    onClickLeft(){
      this.$router.go(-1);
    },
    onClickRight(){

    },
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.ClassificationGoods{
  min-height: 100vh;
  background: #eee;
  //background: linear-gradient(#5779f3, #5778f3);
  div{

  }

}  
.idi{
  
}
.img{
  width: 30px;
  height: 1rem;
}


</style>
