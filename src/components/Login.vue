<template>
  <div class="login">
    <NavTop fai="登录"  />
    <div class="button">
      <van-button round type="info" color="#50C96C" @click="getWechat()">
        <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect">
        微信用户快速登录
        </a> 
      </van-button>
      <van-button round type="info" color="#F0462F">手机号码注册/登录</van-button>
    </div>
  </div>
</template>

<script>
import NavTop from '@/components/NavTop.vue';
import Nav from '@/components/Nav.vue';
import { Dialog } from 'vant';
export default {
  name: 'deliveryAddress',
  components: {
    Nav,
    NavTop,
  },
  data(){
    return{

    }
  },
  methods:{
    toPay(){
      this.$router.push({name: 'pay', params: {price:this.price,}});
    },
    getWechat(){
      window.location.href="www.baidu.com"
      console.log(window.location.href)
    },

  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.login{
  min-height: 100vh;
  background: #fff;
  .button{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%,-50%);
    button{
      display: block;
      width: 60%;
      a{
        color: #fff;
      }
    }
    button:last-child{
      margin-top: 20px;
    }
  }
}  

</style>
