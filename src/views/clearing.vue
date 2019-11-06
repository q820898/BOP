<template>
  <div class="main">
    <NavTop fai="订单详情" />
    <div class="message">
      <ul class="product">
        <li>
          <!-- <img src="..\assets\img\IPHONE.webp" alt=""> -->
        </li>
        <li>
          <ul class="productTitle">
            <li>{百夫长CENTURION  动物保护系列}</li>
            <li>数量：<span>2</span>  规格 ：<span>{北极熊} {20寸}</span></li>
            <li>￥: <span>600</span> 元</li>
          </ul>
        </li>
      </ul>

      <!-- <div class="button">
        <button @click="back()">返回修改信息</button>
      </div>      
      <div class="product">
        <h4>{产品信息}</h4>
        <div><p>商品名称</p><span>：{百夫长}</span></div>
        <div><p>规格</p><span>：{北极熊}</span></div>
        <div><p>数量</p><span>：{1}份</span></div>
        <div><p>合计</p><span>：￥{998}</span></div>
      </div>
      <div class="consignee">
        <h4>{收货人信息}</h4>
        <p>收货人：{}</p>
        <p>手机号：{}</p>
        <p>收货地址：{}</p>
      </div>
      <button class="button_1">去结算</button> -->
    </div>
    <div class="bigButton">
      <van-button type="primary" size="large" @click="pay()">去支付</van-button>
    </div>
  </div>
</template>
<script>
import NavTop from '@/components/NavTop.vue';
export default {
  name: 'home',
  components:{
    NavTop,
  },
  data(){
    return{


    }
  },
  
  created(){


  },
  methods:{
    back(){
        this.$router.go(-1);//返回上一层
    },
    pay(){
      console.log(123);
    }
  }
}
</script>
<style scope lang="scss">
$bg-color:rgb(230, 230, 230);
$main-color: #47b785;
.main{
  background: $bg-color;
  overflow: hidden;
  .message{
    margin: 8px;
    background: #fff;
    overflow: hidden;
    ul.product{
      display: flex;
      li:first-child{
        flex: 1;
        img{
          width: 120px;
        }
      }
      li:last-child{
        flex: 5;
        ul.productTitle{
          li{
            margin-top: 10px;
          }
          li:last-child{
            margin-top: 30px;
            span{
              font-weight: 900;
              font-size: 18px;
            }
          }
        }
      }
    }

    // .button{
    //   position: relative;
    //   height: 1.2rem;
    //   button{
    //     width: 2.4rem;
    //     height: .6rem;
    //     background: rgb(255, 76, 76);
    //     position: absolute;
    //     top: .4rem;
    //     right: .4rem;
    //     border: none;
    //     border-radius: .05rem;
    //     color: #fff;
    //   }
    // }
    // .product{
    //   margin: .3rem; 
    //   padding-bottom: .3rem;
    //   border-bottom: 1px solid #ddd;
    //   div{
    //     p{
    //       float: left;
    //       width: 1.6rem;
    //       text-align-last: justify;
    //     }
    //     span{
    //       display: inline-block;
    //       width: 1.6rem;
    //       text-align-last: justify;
    //     }
    //   }

    // }
    // .consignee{
    //   margin: .3rem; 
    //   // p{
    //   //   text-align-last: justify;
    //   // }
    // }
    // .button_1{
    //   width: 2.4rem;
    //   height: .6rem;
    //   background: rgb(255, 76, 76);
    //   border: none;
    //   border-radius: .05rem;
    //   color: #fff;
    //   margin: 0.6rem auto;
    //   box-sizing: 0 0 .4rem 0;
    //   display: block;
    // }
  }
  .bigButton{
    position: absolute;
    width: 100%;
    bottom: 0;
  }
}

</style>