<template>
  <div class="home">
  <van-sticky>    
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-dropdown-menu close=choose()>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

  </van-sticky>

  <div class="item" v-for="(item,index) in list" :key="index">
    <van-card
      :price="item.price"
      :desc="item.desc"  
      :title="item.title"
      :thumb="item.thumb"
      @click="toDetail(item.id,item.price)"
      >
      <div slot="tags">
        <van-tag plain type="danger"
          v-for="(item1,index1) in item.tags"
          :key="index1"
          style="margin: 4px 8px 4px 0;">
          {{item1}}
        </van-tag>
      </div>
    </van-card>
  </div>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
    <ToTop />
    <Nav />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import ToTop from '@/components/ToTop.vue';
export default {
  name: 'home',
  components: {
    Nav,
    ToTop,
  },
  data(){
    return{
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      list:[
        {
          price:1298,
          title:"百夫长CENTURION胖胖箱-拉链箱",
          tags:["拉杆箱","旅行箱","行李箱","28寸"],
          desc:"PC+ABS防爆防摔，万向轮拉链密码锁",
          thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg",
          id: "0001"
        },{
          price:998,
          title:"百夫长CENTURION动物箱-拉链箱",
          tags:["拉杆箱","旅行箱","行李箱","28寸"],
          desc:"万向轮拉链密码锁，PC+ABS防爆防摔",
          thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg",
          id:"0002"
        }
      ],
      value:"",

    }
  },
  methods:{
    toDetail(id,price){
      console.log(id,price)
      this.$router.push({name: 'detail', params: {id: id,price:price,}})
    },
    onSearch(){
      console.log(444);
    },
    onCancel(){
      console.log(412);

    },
    choose(){
      console.log(123)
    }
  },
}
</script>
<style scoped lang='scss'>
.item{
  margin-bottom: 10px;
}

</style>
