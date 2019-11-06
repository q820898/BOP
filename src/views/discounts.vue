<template>
  <div class="discounts">
    
    <NavTop fai="优惠券" more="···" />
    <div>
      <ul class="card">
        <ul @click="toDiscountsDetail()">
          <li>
            <img src="http://img3.imgtn.bdimg.com/it/u=560058634,1542496337&fm=26&gp=0.jpg" alt="" >
          </li>
          <li>
            <h4>vip贵宾体验</h4>
            <p>另享10%额外优惠</p>
            <p>中青旅-比斯特购物村</p>
          </li>
        </ul>
        <van-collapse v-model="activeNames" style="">
          <van-collapse-item title="展开使用规则" name="1" style="margin: 0 0 .2rem .2rem;">
            <p>*中青旅-比斯特购物村（贵宾）</p>
            <p>*凭此券领取VIP贵宾卡</p>
            <p>*购物另享10%额外优惠</p>
            <p>*更多规则请查看优惠券详情</p>
          </van-collapse-item>
        </van-collapse>
      </ul>
    </div>
    <button class="myDiscounts" @click="toMyDiscounts()">
      我的优惠券
    </button>
  </div>
</template>

<script>
import NavTop from '@/components/NavTop.vue';
export default {
  name: 'home',
  components: {
    NavTop,
  },
  data(){
    return{
      activeNames: ['0'],
    }
  },
  methods:{
    toDiscountsDetail(id,price){
      console.log(id,price)
      this.$router.push({name: 'discountsDetail', params: {id: id,price:price,}})
    },
    toMyDiscounts(id,price){
      console.log(id,price)
      this.$router.push({name: 'myDiscounts', params: {id: id,price:price,}})
    },
    abc(){
      console.log('ture')
    }
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.discounts{
  min-height: 100vh;
  background: #eee;
  overflow: hidden;
  div{
    ul.card{
      margin: .2rem;
      border-radius: .1rem;
      background: white;
      overflow: hidden;
      ul{
        display: flex;
        li{
          border-bottom: 1px dashed #ccc;
        }
        li:nth-child(1){
          flex: 1;
          margin: .2rem 0 .2rem .2rem;
          img{
            width: 1.8rem;
          }
        }
        li:nth-child(2){
          flex: 2.5;
            margin: .2rem .2rem .2rem 0rem;
          h4{
            margin-left: .4rem;
            margin-top: .1rem;
          }
          p{
            margin-left: .4rem;
          }
        }
      }
      // .van-cell__title{
      //   width: 100%;
      //   height: .8rem;
      //   line-height: .5rem;
      //   margin: 0rem 0 0rem .2rem;
      //   color: red;
      //   //text-align-last: justify;
      // }
    }
  }
  button.myDiscounts{
    position: fixed;
    bottom: .5rem;
    left: 50%;
    transform: translate(-50%,0);
    background: $bg-color;
    color: #fff;
    height: 1rem;
    width: 3rem;
    text-align: center;
    line-height: 1rem;
    border-radius: 1rem;
    border: none;
    font-size: .28rem;
  }

}

</style>
