<template>
  <div class="myDiscounts">
    <div>
      <ul class="card">
          <van-swipe-cell :on-close="onClose">
            <template slot="left">
              <!-- <van-button square type="primary" text="选择" /> -->
            </template>
            <ul>
              <li>
                <img src="http://img3.imgtn.bdimg.com/it/u=560058634,1542496337&fm=26&gp=0.jpg" alt="" >
              </li>
              <li>
                <h3>vip贵宾体验</h3>
                <p>另享10%额外优惠</p>
                <p>中青旅-比斯特购物村</p>
              </li>
              <li>
                <div @click="cli()">使用规则</div>
                <p>到期日期</p>
                <p>2019-10-30</p>
              </li>
            </ul>
            <a href="http://bop.ehanglian.com:11112/libs/img/Bicestern/Bicestern.jpg" class="cli" @click="cli()">点击出示优惠凭证</a>
            <van-cell :border="false" title="" value="" />
            <template slot="right">
              <van-button square type="danger" text="删除" />
            </template>
          </van-swipe-cell>

      </ul>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
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
    onClose(clickPosition, instance) {
      switch (clickPosition){
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
          
      }
    },
    cli(){
      window.location.href = "http://bop.ehanglian.com:11112/libs/img/Bicestern/Bicestern.jpg";
    }
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.myDiscounts{
  min-height: 100vh;
  background: #eee;
  div{
    overflow: hidden;
    ul{
      margin: .2rem;
      border-radius: .1rem;
      background: white;
      overflow: hidden;
      ul{
        display: flex;
        li:nth-child(1){
          flex: 1.5;
        }
        li:nth-child(2){
          flex: 2.5;
          margin-left:.2rem;
        }
        li:nth-child(3){
          flex: 1;
          border-left: 1px dashed #bbb;
          div{
            width: 1.5rem;
            height: .5rem;
            background: #47b785;
            color: #fff;
            text-align: center;
            border-radius: 1rem;
            line-height: .5rem;
            margin: 0 auto;
            margin: .2rem 0 .2rem .2rem;
          }
          p{
            text-align: center;
            margin-top: 1.1rem;
            margin: 0 auto;
            margin-left: 0.2rem;
          }
        }
      }        
      a.cli{
        display: block;
        width: 100%;
        text-align: center;
        margin-top: .2rem;
        color: red;
      }
      li:first-child{
        img{
          width: 1.8rem;
        }
      }
    }
  }  
}  

  .van-button.van-button--danger{
    height: 100%;
  }
</style>
