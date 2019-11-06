<template>
  <div class="AllGoods">
      <Nav />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import { Dialog } from 'vant';
export default {
  name: 'AllGoods',
  components: {
    Nav,
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
div.AllGoods{
  min-height: 100vh;
  background: #eee;
  
}

</style>
