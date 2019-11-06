<template>
  <div class="login">
    <NavTop fai="登录"  />
    <div class="button">
      <van-button round type="info" color="#50C96C" @click="getWechatAPI()">微信用户快速登录</van-button>
      <!-- <van-button round type="info" color="#F0462F">手机号码注册/登录</van-button> -->
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
    NavTop
  },
  data(){
    return{

    }
  },
  created(){
    console.log(window.location.href);
  },
  methods:{
    getWechatAPI(){
      let appid = 'wx4e0dabdc14e9ce55';
      let response_type = 'code';
      let scope = 'snsapi_userinfo';
      let wechat_redirect = ''; 
      let url = 
        'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid 
        + '&redirect_uri=' + "47.93.137.111:11115/login" 
        + '&response_type=code'
        + '&scope=snsapi_userinfo'
        + '#wechat_redirect'

      location.href = url
    }
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.login{
  min-height: 100vh;
  background: #fff;
  .button{
    width: 60%;
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-60%,-50%);
    button{
      display: block;
      width: 60%;
    }
    button:last-child{
      margin-top: 20px;
    }
  }
}  

</style>
