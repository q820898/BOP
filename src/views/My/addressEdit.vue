<template>
  <div class="addressEdit">
    <div>
      <van-nav-bar
        title= '编辑收货地址'
        left-text="返回"
        right-text= '保存'
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <van-cell-group>
      <van-field
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
          disabled
        />
      </van-cell>

      <!-- 编辑地址弹出 -->
      <van-popup
        v-model="showArea"
        position="bottom"
        :overlay="overlay"
        :style="{ height: '36.3%' }">
        <van-area :area-list="areaList" 
        @confirm="areaConfirm" 
        @cancel="areaCancel" />
      </van-popup>
      <van-field
        v-model="address"
        clearable
        label="地址"
        placeholder="请输入收货地址"
      />
      <van-button 
      style="position:fixed;bottom:0;"
      type="primary" 
      size="large"
      color="red"
      @click="modificationAddress()"
      >
      删除收货地址
      </van-button>
    </van-cell-group>
  </div>
</template>

<script>
import NavTop from '@/components/NavTop.vue';
import Nav from '@/components/Nav.vue';
import { Dialog } from 'vant';
import json_name from '@/assets/port/Provinces.json';
export default {
  name: 'addressEdit',
  components: {
    Nav,
    NavTop
  },
  data(){
    return{
      areaList:[],
      searchResult: [],
      areaColumnsPlaceholder:"['请选择', '请选择', '请选择']",      
      address:'',
      showArea:false,
      overlay: true,//遮罩层
      distributionArea:'',
      username:'',
      phone: '',
      showAdd: false,
      AddEdit: false,
      areaList:{},
      id:'',
    }
  },
  created(){

    this.id = this.$route.params.id;
    this.areaList = json_name;
    if (this.disply === 'true') {
      this.dpy = true;
    }else if (this.disply === 'false') {
      this.dpy = false;
    }
  },
  methods:{
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
    },
    onClickLeft(){
      this.$router.go(-1);
    },
    onClickRight(){
      console.log(456);
    },
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.addressEdit{
  min-height: 100vh;
  background: #eee;
  .van-nav-bar__text{

  }
}  

</style>
