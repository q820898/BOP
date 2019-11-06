<template>
  <div class="personalInformation">
    <NavTop fai="个人信息" more="···" />
    <div class="head">
      <van-cell is-link >
        <van-field
          v-model="distributionArea"
          label="头像"
          placeholder="请选择"
          disabled
          @confirm="areaConfirm" 
        />
        <van-field
          v-model="birthday"
          label="昵称"
          placeholder="请选择"
          disabled
          @confirm="areaConfirm" 
        />
        <van-field
          readonly
          label="性别"
          :placeholder="value"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>


          <!-- <van-field
            :value="fieldCurrentDate"
            label="生日"
            @click="showPopup"
            disabled
          />
          <van-popup 
            v-model="show" 
            position="bottom"
            >

            <van-datetime-picker
              @confirm="datetimeConfirm()"
              v-model="currentDate"
              type="date"
              :min-date="minDate"
            />
          </van-popup> -->

          
          <van-cell-group>
            <van-field
              v-model="phone"
              label="手机号"
              placeholder="请输入手机号"
            />
            <van-field
              v-model="email"
              label="邮箱"
              placeholder="请输入邮箱"
            />
          </van-cell-group>
    <!--         
        <van-field
          v-model="distributionArea"
          label="头像"
          placeholder="请选择"
          disabled
          @confirm="areaConfirm" 
        /> -->
      </van-cell>
    </div>
    <div class="buttom" @click="saveMessage()">
      <van-button type="primary" size="normal" >保存</van-button>
    </div>
  </div>
</template>

<script>
import NavTop from '@/components/NavTop.vue';
import { Dialog } from 'vant';
export default {
  name: 'personalInformation',
  components: {
    NavTop,
  },
  data(){
    return{
      distributionArea: '',
      birthday:'',
      show: false,
      phone:'',
      email:'',
      birthList:{

      },
      value: '请选择',
      showPicker: false,
      columns: ['未选择', '男', '女'],
      currentDate: new Date(),
      showTime: false,
      minDate: new Date(1900,1,1),
      fieldCurrentDate:'请选择',
    }
  },
  methods:{
    toPay(){
      this.$router.push({name: 'pay', params: {price:this.price,}});
    },
    areaConfirm(){
      let strs = "";
      for (let i = 0; i < res.length; i++) {
        let str = res[i].name;
        strs = strs + str + '';
      }
      this.distributionArea = strs;
      this.areaCancel();
    },
    showPopup() {
      this.show = true;
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    datetimeConfirm(){
      this.fieldCurrentDate = this.Date2Str(this.currentDate);
    },

    saveMessage(){
      console.log('123')
    }
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.personalInformation{
  min-height: 100vh;
  background: #eee;
  div.head{
    margin-top: 6px;


    .van-cell__right-icon {
      margin-left: -16px;
      color: #969799;
    }
  }
  div.buttom{
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-100%,-50%);
    .van-button{
      width: 200%;
      border-radius: 5px;
    }
  }

}  

</style>
