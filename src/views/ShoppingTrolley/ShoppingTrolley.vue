<template>
  <div class="ShoppingTrolley">
    <NavTop fai="购物车" />
          <ul class="list" >
            <van-checkbox v-model="checked" @click.stop="ccc()" checked-color="red" style="display:flex;margin-left: 0px;">
              <li class="img">
                <img src="http://dingyue.nosdn.127.net/H4lo4nC1gVPUM3IhtmPj8bDpXvO9cMcsWwtid8h77IOHV1546923229822.jpg" alt="">
              </li>
              <li class="contend">
                <p>AppleiPhone11(A2223)64GB黑色移动联通电信4G手机双卡双待</p>
                <p class="specification"  @click.stop="abc()">
                  <van-cell @click="showPopup">
                    颜色：<span>黄色</span> 尺寸：<span>64GB</span>
                  </van-cell>
                </p>
                <p class="price">价格：<span>5499</span></p>
                <van-popup v-model="show"
                  position="bottom"
                  :style="{ height: '50%' }"
                >
                  这里写选择
                </van-popup>
              </li>
            </van-checkbox>
          </ul>
          <ul class="flex">
            <li>
              <van-checkbox v-model="checked">全选</van-checkbox>
            </li>
            <li>
              <p class="total">总计:￥ <span> 1288.00</span></p>
              <p class="cancel" @click="cancel()">去结算</p>
            </li>
          </ul>
    <!-- <Nav /> -->
  </div>
</template>

<script>
import NavTop from '@/components/NavTop.vue';
import Nav from '@/components/Nav.vue';
import { Dialog } from 'vant';
export default {
  name: 'ShoppingTrolley',
  components: {
    Nav,
    NavTop,
  },
  data(){
    return{
      checked: false,
      show: false,

    }
  },
  created(){    
    document.title = '购物车';
  },
  methods:{
    toPay(){
      this.$router.push({name: 'pay', params: {price:this.price,}});
    },
    cancel(){
      console.log(123)
    },
    abc(){
      console.log(123)
    },
    ccc(){
      console.log(123)
    },
    showPopup() {
      this.show = true;
    }
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.ShoppingTrolley{
  min-height: 100vh;
  //background: #eee;
  overflow-x:hidden;
  ul.list{
    overflow: hidden;
    width: 100%;
    //margin: 10px 0 0 10px;
    margin: 10px;
    //padding: 10px;
    background: #fff;
    border-bottom: 1px solid #ddd;
    li.img{
      float: left;
      //margin: 10px;
      img{
        width: 100px;
      margin-right: 10px;
      }
    }
    li.contend{
      padding-right: 30px;
      position: relative;
      p{

      }
      p:first-child{
        margin-top: 12px;

      }
      p.specification{
        div{
          display: inline;
          background: rgba(250, 250, 250, 1);
          color: #aaa;
          padding: 0;
        }

      }
      p.price{
        color: red;
      }
    }
  }

  ul.flex{
    border-top: 1px solid #eee;
    width: 100%;
    position: fixed;
    height: 45px;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    line-height: 45px;
    li:first-child{
      flex: 1;
      .van-checkbox{
        position: absolute;
        bottom: 12px;
        left: .4rem;
      }
    }
    li:last-child{
      flex: 5;
      display: flex;
      p:first-child{
        flex: 3;
        text-align: right;
        padding-right: 10px;
        span{
          color: red;
          font-weight: 900;
        }
      }
      p:last-child{
        flex: 1;
        text-align: center;
        background: red;
        color: white;
      }
    }
  }   
 
}  

</style>
