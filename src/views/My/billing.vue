<template>
  <div class="billing">
    <NavTop fai='发票列表' more='添加发票' />
    <ul>
      <li>
        <van-panel title="" desc="发票信息" status=" ">
          <div class="billingContent" style="margin: 20px 0 10px 15px;">
            <ul>
              <li class="billingContentName">名称 : <span>123</span> </li>
              <li class="billingContentNumber" style="margin-top: 5px;">税号 : <span>123</span> </li>
            </ul>
          </div>
          <div slot="footer" class="billingFooter" style="margin-top:10px;">
            <van-button 
            icon="edit" 
            size="small" 
            type="danger" 
            @click="deleteTax()" 
            style="margin-left:0px;">
            删除
            </van-button>
            <van-button icon="delete" size="small" is-link 
            @click="showPopup" 
            style="margin-left:15px;"
            >
            编辑
            </van-button>


            <van-popup 
            v-model="show"
            position="right"
            :style="{width:'100%',height:'100%', }"            
            closeable
            close-icon="close"
            >
            <ul class="modification">
              <div>
                <van-nav-bar
                  title= '编辑发票'
                  right-text= ''
                  @click-left="onClickLeft"
                  @click-right="onClickRight"
                />
              </div>

              <van-cell-group style="margin-top:0px;">
                <van-field
                  v-model="username"
                  required
                  clearable
                  label="名称"
                  right-icon="question-o"
                  placeholder="请输入发票名称"
                  @click-right-icon="$toast('请输入您的发票名称')"
                />
                <van-field
                  v-model="taxnumber"
                  type="tel"
                  label="税号"
                  placeholder="请输入税号"
                  required
                />
                <van-cell-group>
                  <van-field
                    v-model="workaddress"
                    clearable
                    label="单位地址"
                    placeholder="请输入单位地址"
                  />
                </van-cell-group>
                <van-cell-group>
                  <van-field
                    v-model="phonenumber"
                    clearable
                    label="电话号码"
                    placeholder="请输入电话号码"
                  />
                </van-cell-group>
                <van-cell-group>
                  <van-field
                    v-model="bankname"
                    clearable
                    label="开户银行"
                    placeholder="请输入开户银行"
                  />
                </van-cell-group>
                <van-cell-group>
                  <van-field
                    v-model="bankaccount"
                    clearable
                    label="银行账户"
                    placeholder="请输入银行账户"
                  />
                </van-cell-group>
        
                <van-button type="primary" size="large" class="finishBottom">完成</van-button>
              </van-cell-group>
            </ul>
            </van-popup>
          </div>
        </van-panel>
      </li>
    </ul>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue';
import NavTop from '@/components/NavTop.vue';
import { Dialog } from 'vant';
import { Notify } from 'vant';
import axios from 'axios';
import pako from '@/assets/port/pako.min.js'
import API from '@/assets/port/api.js'

export default {
  name: 'billing',
  components: {
    Nav,
    NavTop
  },
  data(){
    return{
      show: false,
      username:'',
      taxnumber:'',
      length:'',
      workaddress:'',
      phonenumber:'',
      bankname:'',
      bankaccount:'',
      


    }
  },
  created(){


    API.billing(function (response) {
      console.log(response)
    },{
        id:444,
    });
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },
  methods:{
    showPopup() {
      this.show = true;
    },
    toPay(){
      this.$router.push({name: 'pay', params: {price:this.price,}});
    },
    deleteTax(){
      Notify({ type: 'success', message: '删除成功' });
      Notify({ type: 'danger', message: '删除失败' });
    },
    onClickLeft(){},
    onClickRight(){},

  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.billing{
  min-height: 100vh;
  background: #eee;
  ul{


    li{
      div.billingContent{
        margin-left: 10px;
        ul{
          li.billingContentName{
            
          }
          li.billingContentNumber{

          }
        }
      }
      div.billingFooter{

      }
      
    }
  }
  .modification{
    color: red;
    position: relative;
    .finishBottom{
      position:fixed;
      bottom:0%;
      width:100%;
    }
  }

}  

</style>
