<template>
  <div class="discountsDetail">
    <ul>
      <li>
        <!-- <img src="..\assets\img\优惠券详情1.jpg" alt=""> -->
      </li>
      <li class="text">
        <div class="cli">
          <p>您的优惠凭证（点击后出示给店员）</p>
          <p @click="toPhone()">点击查看优惠凭证</p>
        </div>
      </li>
      <li>
        <!-- <img src="..\assets\img\优惠券详情2.jpg" alt=""> -->
      </li>
    </ul>
    <div class="fixed">立即领取</div>
    <!-- <div class="fixed_2">
      <ul>
        <li>您已领取优惠券</li>
        <li>到期时间：{2019-12-31}</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{

}
  },
  methods:{
    toDetail(id,price){
      console.log(id,price)
      this.$router.push({name: 'detail', params: {id: id,price:price,}})
    },
    toPhone(){
      window.location.href = "http://bop.ehanglian.com:11112/libs/img/Bicestern/Bicestern.jpg";
    },
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.discountsDetail{
  min-height: 100vh;
  background: #fff;
  ul{
    overflow: hidden;
    li{
      img{
        width: 100%;
        margin: 0;
        padding: 0;
      }
    }
    li.text{
      margin: .2rem;
      height: 2rem;
      border: 2px solid rgb(172, 65, 16);
      border-radius: .15rem;
      position: relative;
      .cli{
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
        margin: 0 auto;
        text-align: center;
        p:nth-child(1){
          width: 5rem;
          color: #999;
          margin-bottom: .1rem;
        }
        p:nth-child(2){
          color: red;
        }
      }
    }
  }
  .fixed{
    position: fixed;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: .3rem;
    background: $bg-color;
    color: #fff;
    left: 0;
    bottom: 0;
    text-align: center;
  }
  .fixed_2{
    position: fixed;
    width: 100%;
    height: 1rem;
    font-size: .3rem;
    left: 0;
    bottom: 0;
    background: #eee;
    display: flex;
    ul{
      margin-left: .2rem;
      align-self: center;
      li:first-child{
        color: red;
      }
      li:last-child{
        color: #777;
      }
    }
  }
}
</style>
