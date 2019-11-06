<template>
  <div>
    <!-- <van-skeleton title avatar :row="3" /> -->

    <van-skeleton title avatar :row="10"
    style="" />
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data(){
    return{
      active: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  font-size: 12px;
  text-align: center;
}
div{
  margin-top: 20px;
}
.van-skeleton__title {
  margin: 0px;
}
.van-skeleton__row{
  margin-top: 20px;
}
</style>
