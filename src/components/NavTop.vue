<template>
  <div>
    <van-nav-bar
      :title= fai
      left-text="返回"
      :right-text= more
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    fai: String,
    more: String
  },
  data(){
    return{
      icon_button:'<van-icon name="ellipsis" />',
      show: false,
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1);
    },
    onClickRight(){
      if (this.more == '添加发票') {
        this.$router.push({name: 'addBilling',});
      }else if (this.more == '保存发票'){
        console.log(123);
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  text-align: center;
}

</style>
