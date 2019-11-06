<template>
  <div class="main">
    <NavTop fai="个人信息" />
    <main>
      <div class="contents">
        <div class="img">
          <img src="http://img2.imgtn.bdimg.com/it/u=833242781,1231694823&fm=11&gp=0.jpg" alt=""> 
        </div>
        <div class="description">
          <h5>{百夫长CENTURION动物箱-拉链箱}</h5>
          <h5>{北极熊 20寸}</h5>
          <p>￥ {{price}}</p>
          <!-- <p>{{getGoodsPrice}}</p> -->
        </div>
      </div>
      <div class="quantity">
        <p>数量</p>
        <van-stepper v-model="value" />
      </div>
      <div class="form">
        <p>收货人信息</p>
        <ul>
          <li v-if="type === 'A'">
            <van-cell-group>
              <van-field
                v-model="consignee"
                required
                clearable
                label="收货人"
                placeholder="请输入收货人姓名"
              />
              <van-field
                v-model="phoneNumber"
                type="phoneNumber"
                label="电话号码"
                placeholder="请输入收货人手机号"
                required
              />
              <!-- <van-area :area-list="areaList" />
              <van-area :area-list="areaList" /> -->
              <van-cell is-link @click="showPopup" >
                <van-field
                  v-model="distributionArea"
                  label="配送区域"
                  placeholder="请选择"
                  required
                  disabled
                />
              </van-cell>
              
              <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: '50%' }">
                <van-area :area-list="areaList" 
                  @confirm="areaConfirm" 
                  @cancel="areaCancel" />
              </van-popup>
              <van-field
                v-model="detailedAddress"
                type="detailedAddress"
                label="详细地址"
                placeholder="请输入收货人详细地址"
                required
              />
            </van-cell-group>

          </li>
          <li v-else-if="type === 'B'">
            <div>
              <van-cell 
              title="瘪三" 
              value="15088888888" 
              arrow-direction="up" 
              label="舟山东路浙江省电力职工大学" 
              size="large"
              @click="toDeliveryAddress()"
               />
            </div>
          </li>
        </ul>
      </div>
    </main>
    <van-submit-bar
      :price = price*100*value
      button-text="提交订单"
      @submit="toClearing"
    />

    <!-- <ul class="submitOrder">
      <li>总计：￥{{price*value}}</li>
      <li @click="toClearing()">提交订单</li>
    </ul> -->
    
      <!-- <span>{{getList}}</span> -->
  </div>
</template>
<script>
import NavTop from '@/components/NavTop.vue';
import json_name from '@/assets/port/Provinces.json';
export default {
  name: 'home',
  components: {
    NavTop,
  },
  data(){
    return{
      //传参
      disply:true,
      //显示状态
      type:'B',
      //上页参数
      price:'',
      GoodsPrice:'',
      //弹出窗
      show: false,
      //数量
      value: "1",
      //表单
      consignee:"",
      phoneNumber:"",
      distributionArea:'',
      detailedAddress:"",
      //省市区[]

      areaList:{}
    }
  },
  
  created(){
    //axios.get()
    this.price = localStorage.getItem("price");//this.$route.params.price;
    this.areaList = json_name;
    // axios.get('@/assets/port/Provinces.json')
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    //console.log(localStorage.getItem("list"))
  },
  computed:{
    getList(){
      return this.$store.state.list ;
    },
    // getGoodsPrice(){
    //   return this.$store.state.goodsprice ;
    // }
  },
  methods:{
    toClearing(){
      this.$router.push({name: 'clearing'})
    },
    toDeliveryAddress(){
      this.$router.push({name: 'deliveryAddress',params:{disply:this.disply}})
    },
    showPopup() {
      this.show = true;
    },
    areaConfirm(res){
      let strs = ""
      for (let i = 0; i < res.length; i++) {
        let str = res[i].name
        strs = strs + str + ' '
      }
      this.distributionArea = strs
      this.areaCancel()
    },
    areaCancel(){
      this.show = false;
    },
    onSubmit(){

    },
    checked(){

    },
  }
}
</script>
<style scope lang="scss">
$bg-color:rgb(230, 230, 230);
$main-color: #47b785;
div.main{
  background: $bg-color;
  //overflow: hidden;
  // position:fixed;
  z-index: 1;
  min-height:100vh;
  //height: 100%;
  // width: 100%;
  main{
    z-index: 2;
    background: white;
    margin: 0.08rem 0.08rem 0rem 0.08rem;
    overflow: hidden;
    .contents{
      background: white;
      margin: 0.4rem 0.2rem 0.2rem 0.2rem;
      padding: 0.05rem;
      border: 1px #aaa solid;
      display: flex;
      .img{
        flex: 1;
        img{
          width: 2rem;
        }
      }

      .description{
        flex: 9;
        margin-left: 0.2rem;
        p{
          color: red;
          font-size: .6rem;
        }
      }
    }
    .quantity{
      display: inline-block;
      float: right;
      margin: .2rem .5rem 0 0;
      p{
        text-align: center;
        float: left;
        margin-left: -1rem;
        line-height: 30px;
      }
    }
    .form{
      margin-top: 1rem;
      p{
        text-align: center;
        height: 1rem;
        line-height: 1rem;

      }
    }
  }
  .submitOrder{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1rem;
    display: flex;
    color: #fff;
    background: $main-color;
    z-index: 10000;
    li{
      flex: 1;
      text-align: center;
      line-height: 1rem;
    }
  }
}
.van-cell.van-cell--clickable{
  padding: 0;
}
.van-cell__right-icon{
  top: 0.15rem;
  right: 0.15rem;
}
</style>