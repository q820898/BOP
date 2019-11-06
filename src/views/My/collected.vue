<template>
  <div class="collected">
    <div class="nav">
      <van-nav-bar
        title= "收藏"
        left-text=""
        :right-text= rightText
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="goodsCard">
      <!-- <van-swipe-cell>
        <van-cell :border="false" 
        title=""
        value=""
        />
        <ul class="list">
          <li><img src="..\..\assets\img\IPHONE.webp" alt=""></li>
          <li>
            <p>AppleiPhone11(A2223)64GB黑色移动联通电信4G手机双卡双待</p>
            <p class="specification">颜色：<span>黄色</span> 尺寸：<span>64GB</span> </p>
            <p class="price">价格：<span>5499</span></p>
          </li>
        </ul>
        <template slot="contend">
          <div>123</div>
        </template>
        <template slot="right">
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell> -->
    <ul>
      <li>
        <div v-if="type === 'A'"><!-- 没有多选框 -->
          <ul class="list" >
            <li class="img" style="margin:0;">
              <img src="http://dingyue.nosdn.127.net/H4lo4nC1gVPUM3IhtmPj8bDpXvO9cMcsWwtid8h77IOHV1546923229822.jpg" alt="">
            </li>
            <li class="contend">
              <p>AppleiPhone11(A2223)64GB黑色移动联通电信4G手机双卡双待</p>
              <p class="specification">颜色：<span>黄色</span> 尺寸：<span>64GB</span> </p>
              <p class="price">价格：<span>5499</span></p>
              <p class="icon"><van-icon name="cart-o" size="22" color="#fff"/></p>
            </li>
          </ul> 
        </div>
        <div v-else-if="type === 'B'"><!-- 有多选框 -->
          <ul class="list" >
            <van-checkbox v-model="checked" checked-color="red" style="display:flex;margin-left: 0px;">
              <li class="img"><img src="http://dingyue.nosdn.127.net/H4lo4nC1gVPUM3IhtmPj8bDpXvO9cMcsWwtid8h77IOHV1546923229822.jpg" alt=""></li>
              <li class="contend">
                <p>AppleiPhone11(A2223)64GB黑色移动联通电信4G手机双卡双待</p>
                <p class="specification">颜色：<span>黄色</span> 尺寸：<span>64GB</span> </p>
                <p class="price">价格：<span>5499</span></p>
              </li>
            </van-checkbox>
          </ul>
          <ul class="flex">
            <li>
              <van-checkbox v-model="checked">全选</van-checkbox>
            </li>
            <li>
              <p class="cancel" @click="cancel()">取消关注</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
      <!-- <div class="abc" v-bind:class="{ active: isActive }">3213</div>
      <button @click="abc()">332123</button> -->
      <br>
    </div>
  </div>
</template>
<script>
import NavTop from '@/components/NavTop.vue';
import Nav from '@/components/Nav.vue';
import { Dialog } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
export default {
  name: 'collected',
  components: {
    Nav,
    NavTop,
  },
  data(){
    return{
      type:'A',
      rightText:'编辑',
      checked: false,
      radiobox: true,
      hasError: false,
      result: ['a', 'b'],
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1);//返回上一层
    },
    onClickRight(){
      if (this.rightText=='完成'){
        this.rightText = '编辑';
        this.type = 'A';
      }else if (this.rightText=='编辑') {
        this.rightText = '完成';
        this.type = 'B';
        this.checked = false;
      }
    },
    toPay(){
      this.$router.push({name: 'pay', params: {price:this.price,}});
    },
    onAdd() {
      console.log(123);
    },
    onEdit(item, index) {
      console.log('编辑地址:' + index)
    },
    abc(){
      if (this.radiobox==true) {
        this.radiobox = false;
      }else{
        this.radiobox = true;
      }
    },
    cancel(){
      Dialog.confirm({
        title: '',
        message: '确认要取消关注吗？'
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      });
    },
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
$bg-color: #ff2424;
div.collected{
  overflow-x:hidden;
  .van-cell.van-cell--clickable{
    padding: 16px;
  }
  div.goodsCard{
    ul.list{
      overflow: hidden;
      width: 100%;
      margin: 10px 0 0 10px;
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
        p:first-child{
          margin-top: 12px;

        }
        p.specification{
          color: #aaa;
        }
        p.price{
          color: red;
        }
        p.icon{
          width: 30px;
          height: 30px;
          position:absolute;
          right: 40px;
          bottom: -6px;
          background: #ff2424;
          border-radius: 50px;
          text-align: center;
          line-height: 44px;
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
      li:first-child{
        line-height: 10px;
        .van-checkbox{
          //display: none;
          position: absolute;
          bottom: 12px;
          left: .4rem;
        }
      }
      li:last-child{
        position: relative;
        p.cancel{
          position: absolute;
          bottom: -35px;
          right: 0;
          width: 90px;
          height: 25px;
          line-height: 25px;
          background: #E4393C;
          float: right;
          text-align: center;
          color: white;
          margin-right: .4rem;
        }
      }
    }

  }
  .van-button.van-button--danger{
    height: 100%;
  }





  .abc{
  color: #47b785;
}
.active{
  color: rgb(0, 255, 106);
}
}

</style>
