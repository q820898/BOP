<template>
  <div class="addBilling">
    <NavTop fai="添加发票" more='保存发票'/>
    <ul class="billingDetail">
      <li>
        <van-cell-group>
          <van-field
            v-model="billingname"
            required
            clearable
            label="名称"
            right-icon="question-o"
            placeholder="请填写准确的抬头名称"
            @click-right-icon="$toast('可咨询公司财务部门获得【税号】或【社会信用代码】信息')"
          />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field
            v-model="taxnumber"
            required
            clearable
            label="税号"
            placeholder="请填写【税号】或【社会信用代码】"
          />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field
            v-model="workaddress"
            clearable
            label="单位地址"
            placeholder="请输入单位地址"
          />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field
            v-model="phonenumber"
            clearable
            label="电话号码"
            placeholder="请输入电话号码"
          />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field
            v-model="bankname"
            clearable
            label="开户银行"
            placeholder="请输入开户银行"
          />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field
            v-model="bankaccount"
            clearable
            label="银行账户"
            placeholder="请输入银行账户"
          />
        </van-cell-group>
      </li>
    </ul>
  </div>
</template>

<script>
import NavTop from '@/components/NavTop.vue';
import Nav from '@/components/Nav.vue';
import { Dialog } from 'vant';
export default {
  name: 'addBilling',
  components: {
    Nav,
    NavTop
  },
  data(){
    return{
      billingname:'',
      taxnumber:'',
      workaddress:'',
      phonenumber:'',
      bankname:'',
      bankaccount:'',

    }
  },
  methods:{
    toPay(){
      this.$router.push({name: 'pay', params: {price:this.price,}});
    }
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.addBilling{
  min-height: 100vh;
  background: #eee;
  
}  

</style>
