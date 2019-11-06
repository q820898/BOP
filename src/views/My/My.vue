<template>
  <div class="My">
    <NavTop fai="航联" />
    <div class="PersonalInformation" @click="toPersonalInformation()">
      <div class="headIMG"><img src="http://img2.imgtn.bdimg.com/it/u=2387911928,2700617596&fm=26&gp=0.jpg" alt=""></div>
      <ul class="user">
        <li class="username"><span>张三大大大</span></li>
        <li class="">用户名：<span>张三</span></li>
        <li><span>name</span></li>
      </ul>
    </div>
    <ul class="Personallist">
      <li @click="toCollected()">商品收藏</li>
      <li @click="toDeliveryAddress()">收货地址</li>
      <li @click="toBilling()">发票信息</li>
    </ul>
    <ul class="messageList">
      <li><van-cell is-link class="order" to="/goodsOrder">商品订单</van-cell></li>
      <li><van-cell is-link class="order" to="/foodsOrder">餐饮订单</van-cell></li>
      <li><van-cell is-link class="order" to="/discounts">优惠券</van-cell></li>
      <!-- <li><van-cell is-link @click="showPopup">展示弹出层</van-cell></li> -->
    </ul>
    <!-- <van-popup 
    close='close()'
    v-model="show"
    position="bottom"
    :style="{ height: '100%', width:'100%' }">
      <Login  />
    </van-popup>
    <div>
      <van-popup
        v-model="show"
        position="top"
        :style="{ height: '20%' }"
      />
    </div> -->
    <Nav />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import NavTop from '@/components/NavTop.vue';
import Login from '@/components/Login.vue';
import { Dialog } from 'vant';
export default {
  name: 'my',
  props: {
    
  },
  components: {
    Nav,
    NavTop,
    Login
  },
  data(){
    return{
      icon_button:'<van-icon name="ellipsis" />',
      disply: 'false',
    }
  },
  beforeCreate:function () {
    
  },
  methods:{
    toPersonalInformation(){
      this.$router.push({name: 'personalInformation', params: {}});
    },
    toCollected(){
      this.$router.push({name: 'collected', params: {}});

    },
    toDeliveryAddress(){
      this.$router.push({name: 'deliveryAddress', params: {disply:this.disply}});
    },
    toBilling(){
      this.$router.push({name: 'billing', params: {}});

    },
    toDiscounts(){
      this.$router.push({name: 'discounts', params: {}});

    },
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.My{
  min-height: 100vh;
  background: #eee;
  overflow: hidden;
  .PersonalInformation{
    background: #fff;
    height: 2rem;
    //border: 1px solid #ddd;
    //margin: .2rem ;
    border-radius: 10px 10px 0 0;
    .headIMG{
      float: left;
      img{
        margin: .4rem 0 0 .4rem;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100rem;
      }
    }
    ul.user{
      overflow: hidden;
      //position: relative;
      margin-top: .25rem;
      li{
        margin: .2rem 0 0 .4rem;
        //left: 50%;

      }
      li.username{
        margin-top: .25rem;

      }
      
    }
  }
  ul.Personallist{
    margin-top: .25rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: .8rem;
    li{
      line-height: .8rem;
    }
  }
  ul.messageList{
    margin-top: .25rem;
    overflow: hidden;
    li{
      .order{
        height: 40px;
        line-height: 40px;
        text-indent: 1em;
      }
    }
  }
}  

</style>
