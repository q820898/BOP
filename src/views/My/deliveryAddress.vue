<template>
  <div class="deliveryAddress">
    <NavTop fai="收货地址" more="" />
      <van-address-list
        :switchable="dpy"
        v-model="chosenAddressId"
        :list="list"
        @add="onAdd"
        @edit="onAddEdit"
        is-link
      />
      <!-- 
        :disabled-list="disabledList" 
        disabled-text="以下地址超出配送范围" -->
      <!-- 编辑地址内容 -->

      
      <!-- 新增地址内容 -->
      <van-popup 
      v-model="AddEdit" 
      position='bottom'
      :style="{ height: '100%' }"
      closeable
      close-icon="close"
      close-icon-position="top-right"
      >
        <van-field
          style="margin-top:40px;"            
          v-model="username"
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="phone"
          clearable
          label="电话号码"
          placeholder="请输入电话号码"
        />
        <van-cell is-link @click="showPopup" style="padding:0;">
          <van-field
            v-model="distributionArea"
            label="配送区域"
            placeholder="请选择"
            :overlay="overlay"
            disabled
          />
        </van-cell>
        <!-- 新增地址弹出 -->
        <van-popup 
          v-model="showArea"
          position="bottom"
          style="border-top:1px solid #eee"
          :overlay="overlay"
          :style="{ height: '36.3%' }">
          <van-area :area-list="areaList" 
          @confirm="areaConfirm" 
          @cancel="areaCancel" />
        </van-popup>
        <van-cell-group>
          <van-field
            style="border-bottom:1px solid #eee;"
            v-model="addAddress"
            rows="1"
            :autosize = addressMinwidthMinheight
            label="详细地址"
            type="textarea"
            placeholder="请输入详细地址"
          />
        </van-cell-group>
        <van-button type="primary" 
        size="large"
        @click="modificationAddress()"
        style="position:fixed;bottom:0;"
        >
        确认新增
        </van-button>
      </van-popup>

  </div>
</template>

<script>
import { Toast } from 'vant';
import { Dialog } from 'vant';
import NavTop from '@/components/NavTop.vue';
import Nav from '@/components/Nav.vue';
import json_name from '@/assets/port/Provinces.json';
export default {
  name: 'deliveryAddress',
  components: {
    Nav,
    NavTop
  },
  data(){
    return{
      showArea:false,
      disply:'',//显示CheckBox
      dpy:'',
      overlay: true,//遮罩层
      showAdd: false,
      AddEdit: false,
      distributionArea:'',
      chosenAddressId: '1',
      username:'',
      phone: '',
      address:'',
      addAddress:'',
      //areaList:{},
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      //不显示的内容
      disabledList: [
        {
          id: '1',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ],
      addressMinwidthMinheight: { maxHeight: 900, minHeight: 100 },
      id:23,

    }
  },
  computed:{
    getList(){
      this.$store.state.list = this.list;
    }
  },
  beforeCreate(){
    // localStorage.setItem("temp",arr); //存入console.log(localStorage.getItem("temp"));
  },
  created(){
    this.disply = this.$route.params.disply;
    this.areaList = json_name;
    if (this.disply === 'true') {
      this.dpy = true;
    }else if (this.disply === 'false') {
      this.dpy = false;
    }

    //localStorage.setItem("temp",arr); //存入console.log(localStorage.getItem("temp"));
  },
  beforeDestroy(){
    //localStorage.setItem("list",this.list);//this.list);
  },
  methods:{
    toAddressEdit(){
      this.$router.push({name: 'addressEdit', params: {price:this.price,}});
    },
    onAdd() {
      this.AddEdit = true;
      //Toast('新增地址');
    },
    onAddEdit(item, id) {
      this.$router.push({name: 'addressEdit', params: {id:this.id,}});
      //Toast('编辑地址:' + id);
      //this.$router.push({name: 'addressEdit', params: {price:this.price,}});
    },
    modificationAddress(){
      console.log(123);
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
      this.showArea = false;
    },
    showPopup() {
      this.showArea = true;
    }
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.deliveryAddress{
  min-height: 100vh;
  background: #eee;
  .van-cell.van-cell--clickable {
    padding: 16px;
  }

}  
.van-radio__icon {
  display: none;
  font-size: 20px;
  line-height: 1em;
}
</style>
