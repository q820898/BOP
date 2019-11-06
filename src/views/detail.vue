<template>
  <div class="main">
     <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"/>
    <!-- <h1>This is an detail page</h1>
    <h1>{{id}}</h1> -->
    <div class="detail">
      <NavTop fai="详情" />
      <div class="interior"><!-- 内部白色 -->
        <div class="slideshow">
          <van-swipe 
          @change="onChange" 
          :autoplay="3000" 
          indicator-color="white"
          >
            <van-swipe-item><img src="http://img0.imgtn.bdimg.com/it/u=3915690607,187671983&fm=11&gp=0.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="http://img0.imgtn.bdimg.com/it/u=3915690607,187671983&fm=11&gp=0.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="http://img0.imgtn.bdimg.com/it/u=3915690607,187671983&fm=11&gp=0.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="http://img0.imgtn.bdimg.com/it/u=3915690607,187671983&fm=11&gp=0.jpg" alt=""></van-swipe-item>
          </van-swipe>
        </div>
        <ul class="settlementPrice ">
          <li>
            <span>￥</span>
            <span>{{price}}</span>
          </li>
        </ul>
        <div class="title1">
          <span class="title">百夫长CENTURION胖胖箱-拉链箱</span>
          <ul>
            <li><span>*</span>百夫长CENTURION胖胖箱-拉链箱</li>
            <li><span>*</span>百夫长CENTURION胖胖箱-拉链箱</li>
            <li><span>*</span>百夫长CENTURION胖胖箱-拉链箱</li>
          </ul>
        </div>
        <div class="choose1">
          <div class="choose">
            <span>颜色：</span>
            <span 
              v-for="(item,index) in arrs" 
              :key="index" 
              class="default" 
              @click="chooseThis(item.coiD)"
              :class="{'cur': item.coiD==color}"
            >
              {{item.co}}
            </span>
          </div>
          <div class="choose_size">
            <span>尺寸：</span>
            <br>
            <span
             v-for="(item,index) in sizeArr" 
             :key="index" 
             class="default_size"
             @click="chooseThis2(item.size,item.price)"
             :class="{'cua': item.size==size}"
             v-bind="item.id"
             >
             {{item.size}}
            </span>
          </div>

        </div>
        <div class="goods">
          <van-tabs v-model="active">
            <van-tab title="商品介绍">
              <!-- <img v-for="img in imageList" :v-lazy="img" > -->
            </van-tab>
            <van-tab title="售后服务">售后服务图片</van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <van-goods-action style="z-index:1000;">
      <!-- <van-goods-action-icon icon="chat-o" text="客服" /> -->
      <!-- <van-goods-action-icon icon="shop-o" text="店铺首页" info="" /> -->
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" @click="toShoppingTrolley()"/>
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" @click="toPay()"/>
    </van-goods-action>
    <div class="totop" id="totop" @click="Top" >
      <p>
        <van-icon name="arrow-up" />
      </p>
    </div>
  </div>
</template>
<script>
import API from '@/assets/port/api.js';
import NavTop from '@/components/NavTop.vue';
import { Lazyload } from 'vant';
import { Toast } from 'vant';
export default {
  name: 'home',
  components: {
    NavTop,
  },
  data(){
    return{
      id:"",
      test:"http://pic27.nipic.com/20130321/9678987_225139671149_2.jpg",
      arrs:[{
        co:"蒂凡尼蓝",
        coiD:123,
        prace: 100
        },{
        co:"海牙蜜桃",
        coiD:456,
        prace: 200
        },{
        co:"阿姆斯特丹桃红",
        coiD:789,
        prace: 300
        },{
        co:"爱丁堡黄",
        coiD:321,
        prace: 300
        }
      ],
      sizeArr:[
        {
          size:"26寸",
          price: 1298
        },{
          size:"29寸",
          price:1398
        }
      ],
      color: 123,
      size:"26寸",
      price: '1298',
      active:0,
      // imageList: [
      //   'https://img.yzcdn.cn/vant/apple-1.jpg',
      //   'https://img.yzcdn.cn/vant/apple-2.jpg'
      // ]
    }
  },
  created(){
    this.id = this.$route.params.id;
    this.price = this.$route.params.price;
    API.signUp(function (res) {console.log(res)},{id:123})

  },
  methods:{
    chooseThis(id){
      this.color = id
    },
    chooseThis2(size,price){
      this.size = size
      this.price = price
    },
    onChange(index) {
      //Toast('当前 Swipe 索引：' + (index+1) );
    },
    Top(){
      var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
      document.documentElement.scrollTop = document.body.scrollTop =0; 
      document.getElementById("totop").style.display = 'none';
    },
    toPay(){
      this.$router.push({name: 'pay',});// params: {price:this.price,}});
      //this.$store.state.goodsprice = this.price;
      localStorage.setItem("price",this.price);
    },
    toShoppingTrolley(){
      this.$router.push({name: 'ShoppingTrolley',});
    }
  },
  mounted(){
    window.onscroll = function(){
   		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
   		var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
   		var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
      if(scrollTop+windowHeight==scrollHeight){
      document.getElementById("totop").style.display = 'block';
      }
    }
  }
}
</script>
<style scope lang="scss">
$bg-color: #47b785;
.main{
  // background: rgb(230, 230, 230);
  // height: 100rem;
}
.detail{
  // padding: 10px;
  background: #eee;
  .interior{
    background: rgb(250, 250, 250);
    height: 100%;
    .slideshow{
      width: 100%;
      border: 1px solid #ddd;
      margin-bottom: .2rem;
      img{
        width: 100%;
      }
    }
    .settlementPrice{
      li:first-child{
        margin: 10px 0 0 0.2rem;
        span{
          font-size: 32px;
          color: red;
        }
      }
      li:last-child{
        
      }
    }
    div.title1{
      margin-left: 0.2rem;
      .title{
        font-weight: 900;
        font-size: 20px;
      }
    }
    div.choose1{
      // border-bottom: 1px solid #eee;
      div.choose{
        line-height: 0.3rem;
        span{
          display: inline-block;
          margin: 0.1rem;
          border-radius: 4px;
          font-size: 14px;
        }
        span:nth-child(1){
          color:#aaa;
        }
      }
      .size{
        line-height: 0.3rem;
        span{
          display: inline-block;
          margin: 0.1rem;
          border-radius: 4px;
        }
        span:nth-child(1){
          color:#aaa;
          font-weight: 100;
          font-size: 16px;
        }
        .default_size{
          border: 1px solid #aaa;
          margin-right: 10px;
          padding: 4px;
          font-weight: 100;
        }
      }
      .choose{
        span:nth-child(1){
          display: block;
          margin-top: 20px;
        }
      }
      .choose_size{
        font-size: 14px;
        display: inline-block;
        margin: 0.1rem;
        border-radius: 4px;

        span:nth-child(1){
          border: none;
          display: block;
          margin-left: -4px;
          margin-bottom: -14px;
          color: #aaa;
        }
        span{
          border: 1px solid #aaa;
          margin: 0 10px 0 0;
          padding: 4px;
          font-weight: 100;
          border-radius: 4px;
        line-height: 0.3rem;
        }
      }

    }
    .default{
      border: 1px solid #aaa;
      margin-right: 10px;
      padding: 4px;
    }
    .cur{
      border: 1px solid red;
      color: red;
      padding: 4px;
    }
    .cua{
      border: 1px solid red !important;
      color: red;
      padding: 4px;      
    }
    .goods{
      height: 100%;
      border: 1px solid #ccc;
      margin: 20px 0 100px 0;
      img{
        width: 100%;
      }
    }
  }
}
.prace{
  position:fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  color: white;
  display: flex;
  div{
    flex:1;
    line-height: 1rem;
    text-align:center;
  }
  div:nth-child(1){
    background: $bg-color;
  }
  div:nth-child(2){
    background: $bg-color;
  }
}
.totop{
    position: fixed;
    width: 1rem ;
    height: 1rem;
    border-radius: 1.25rem;
    opacity: 0.8;
    background: rgba(43, 43, 43, 0.9);
    box-shadow: 0 1px 5px 0 #e0e0e0;
    right: .6rem;
    bottom: 2rem;
    z-index: 1100;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
    display: none;
    p{
      height: 1rem;
      line-height: 1rem;
      font-size: .5rem;
      color: #fff;
      text-align: center;
    }
}

</style>