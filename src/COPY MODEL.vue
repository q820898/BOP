<template>
  <div class="deliveryAddress">
    <NavTop fai="收货地址" more="···" />
    
  </div>
</template>

<script>
import NavTop from '@/components/NavTop.vue';
import Nav from '@/components/Nav.vue';
import { Dialog } from 'vant';
export default {
  name: 'deliveryAddress',
  components: {
    Nav,
    NavTop
  },
  data(){
    return{

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
div.deliveryAddress{
  min-height: 100vh;
  background: #eee;
  
}  

</style>
