<template>
  <div class="AllGoods">
    <NavTop fai="商品订单" />
    <div id="demo">
      <!-- <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>

      <span>{{count}}</span> -->
      <van-tabs v-model="active" sticky>
        <van-tab title="全部">
          <div v-if="allOrder === 'enrich'">
            <div>
              <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch"
              >
                <div slot="action" @click="onSearch">搜索</div>
              </van-search>
            </div>
            <div class="listShell">
              <ul class="list" >
                <li class="img" style="margin:0;">
                  <img src="http://dingyue.nosdn.127.net/H4lo4nC1gVPUM3IhtmPj8bDpXvO9cMcsWwtid8h77IOHV1546923229822.jpg" alt="">
                </li>
                <li class="contend">
                  <p></p>
                  <p>AppleiPhone11(A2223)64GB黑色移动联通电信4G手机双卡双待</p>
                  <p class="specification">颜色：<span>黄色</span> 尺寸：<span>64GB</span> </p>
                </li>
                <li class="price">
                  <p class="totalPrice">￥<span>1000.00</span></p>
                  <p class="quantity">x<span>1</span></p>
                </li>
              </ul>
              <div class="total">
                <span>共1件商品</span><span>合计：￥ 2000.00</span>
              </div>
              <div class="button">
                <!-- <van-button round type="info">延长收货</van-button>
                <van-button round type="info">查看物流</van-button> -->
                <van-button round type="info" class="confir">去支付</van-button>
              </div>
            </div>
          </div>
          <div v-else-if="allOrder === 'null'">
            B
          </div>
        </van-tab>
        <van-tab title="待付款">内容 2</van-tab>
        <van-tab title="待发货">内容 3</van-tab>
        <van-tab title="待收货">内容 4</van-tab>
      </van-tabs>
    </div>
    <Nav />
  </div>
</template>
<script>
import NavTop from '@/components/NavTop.vue';
import Vuex from 'vuex';
import Nav from '@/components/Nav.vue';
import { Dialog } from 'vant';

export default {
  name: 'AllGoods',
  components: {
    Nav,
    NavTop
  },
  computed:{
    count(){
      return this.$store.state.count = 's';
    }

  },
  beforeCreate(){

  },
  data(){
    return{
      show: true,
      active: 0,
      allOrder:"enrich",
      value:'',

    }
  },
  methods:{
    toPay(){
      this.$router.push({name: 'pay', params: {price:this.price,}});
    },
    onSearch(){
      console.log(123)
    },

  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
*{

    font-size: 12px;
}
div.AllGoods{
  min-height: 100vh;
  background: #eee;
  div.listShell{
    background: #fff;
      margin: 8px;
      overflow: hidden;
      border-radius: 12px;
    ul.list{
      margin: 10px 0 0 0px;
      padding-bottom: 10px;
      display: flex;
      li.img{
        margin-top: 20px;
        float: left;
        flex: 1;
        img{
        margin-top: 20px;
        display: block;
          width: 100px;
          margin: 12px 4px 0 8px;
        }
      }
      li.contend{
        //padding-right: 30px;
        //position: relative;
        flex: 2;
        margin-left: 10px;
        p:first-child{
          margin: 14px 0 5px 0;
          text-align: right;
          color: orange;
        }
        p.specification{
          color: #aaa;
        }
      }
      li.price{
        flex: 1;
        margin-left: 10px;
        .totalPrice{
          margin: 40px 0 10px 0;
          float: right;
          margin-right: 20px;
        }
        .quantity{
          float: right;
          margin-right: 20px;
        }
      }
    }
    .total{
      text-align: right;
      margin: 10px 0 10px 0;
      span:first-child{
        margin-right: 10px;
        color: #888;
      }
      span:last-child{
        margin-right: 10px;
      }
    }
    .button{
      float: right;
      margin: 10px 10px 10px 0;
      button{
        margin-right: 10px;
        border: 1px solid #777;
        background: #fff;
        height: 26px;
        line-height: 24px;
        color: #000;
      }
      .confir{
        color: orange;
        border: 1px solid orange;
        
      }
    }
  }

}  
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
