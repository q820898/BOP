<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#29A1F7"
      inactive-color="#777"
      route
    >
      <van-tabbar-item icon="home-o" to="/" active >首页</van-tabbar-item>
      <van-tabbar-item icon="bag-o" to="/product">全部商品</van-tabbar-item>
      <van-tabbar-item icon="qr" to="/ClassificationGoods">商品分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/ShoppingTrolley">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/My" @click="showPopup">我的</van-tabbar-item>

      <!-- <van-cell is-link @click="showPopup">
      </van-cell> -->
      <!-- <van-popup v-model="show"
      position="top"
      :style="{ height: '100%', width:'100%' }">
        <Login />
      </van-popup> -->

    </van-tabbar>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
export default {
  name: 'Nav',
  data(){
    return{
      active: 0,
      show: false,
    }
  },
  components: {
    Login
  },
  methods:{    
    showPopup() {
      this.show = true;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  font-size: 12px;
  text-align: center;
}
// ul{
//   display: flex;
//   li{
//     flex: 1;
//   }
// }
div{
  border-top: 1px solid rgb(252, 252, 252);
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    display: block;
    margin-bottom: 5px;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
