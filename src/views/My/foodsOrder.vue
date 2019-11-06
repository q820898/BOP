<template>
  <div class="AllGoods">
    <Nav />
    123
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
  created(){
    //store.commit('count')
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
