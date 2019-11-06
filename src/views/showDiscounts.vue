<template>
  <div class="showDiscounts">

  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  name: 'home',
  data(){
    return{

    }
  },
  methods:{
    toDetail(id,price){
      console.log(id,price)
      this.$router.push({name: 'detail', params: {id: id,price:price,}})
    },
    abc(){
      console.log(123)
    }
  }
}
</script>
<style scoped lang="scss">
$bg-color: #47b785;
div.myDiscounts{
  min-height: 100vh;
  background: #eee;
  
}  

</style>
