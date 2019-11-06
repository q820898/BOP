<template>
  <div class="home">
    <!-- <div class="backgroundimg"></div> -->
    <div class="nav">
      <header>
        <!-- <img src="..\assets\img\logo_u21.png" alt=""> -->
      </header>
      <div ref="container" style="height: 55px;">
        <van-sticky :container="container">
            <form action="/">

              <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
                @cancel="onCancel"
                
              />
            </form>
        </van-sticky>
      </div>

      <main>
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <!-- <img v-lazy="image" /> -->
            <img class="swichImg" src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
          </van-swipe-item>
        </van-swipe>
        <!-- 标签页 -->
        <van-grid :border="false" :column-num="4">
          <van-grid-item 
          v-for="(value,index) in columns" 
          :key="index"
          
          >
            <van-image class="listIMG" :src="value.src" />
            <p class="columnsTest">{{value.text}}</p>
          </van-grid-item>
        </van-grid>

        <!-- <van-grid :column-num="4">
          <van-grid-item
            v-for="(value,index) in columns" :key="index"
            :icon= "value.icon"
            :text= "value.text"
          />
        </van-grid> -->
        <h3>精品推荐</h3>
        <ul class="list">
          <li 
            @click="toDetail(item.id,item.price)" 
            v-for="(item,index) in list" :key="index"
            >
            <img src="http://img2.imgtn.bdimg.com/it/u=159289714,3969042994&fm=26&gp=0.jpg" alt="">
            
            <!-- <img src="..\assets\img\IPHONE.webp" alt=""> -->
            <!-- <img src="https://img10.360buyimg.com/n7/jfs/t1/67822/22/9911/141808/5d7804a3E1c1796ce/a4ff0dd48086f3e4.jpg!q70.dpg.webp" alt=""> -->
            <p class="productName">{{item.title}}</p>
            <p class="producPrace"><span>￥</span>{{item.price}}</p>
          </li>
          <!-- <li class="productName">

          </li> -->
        </ul>
        <div class="down">
          <van-divider :style="{ color: '#ccc', borderColor: '#ccc', padding: '0 16px' }">
            已经到底啦
          </van-divider>
        </div>
      </main>
      <ToTop />
      
      <Nav />
    </div>
  </div>
</template>
<script>
import API from '@/assets/port/api.js'
import Nav from '@/components/Nav.vue';
import ToTop from '@/components/ToTop.vue';
export default {
  name: 'home',
  components: {
    Nav,
    ToTop,
  },
  created (){
    document.title = '航联首页';
    // API.home(function (response) {
    //   console.log(response)
    // },{
    //     id:444,
    // });
    API.goodsList(function (res) {      
      console.log(JSON.parse(res.ResponseData) )
    },{
      banner:true,
    });
    API.mainProduct(function (res) {      
      console.log(JSON.parse(res.ResponseData) )
      console.log(res)
    },{
      banner:true,
      //id:444,
    });
  },
  data(){
    return{
      active: 0,
      value:'',
      columns:[
        {
          icon:'exchange',
          text:'但是',
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3393066422,1113024882&fm=26&gp=0.jpg',
        },{
          icon:'fire-o',
          text:'额外',
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3393066422,1113024882&fm=26&gp=0.jpg',
        },{
          icon:'like-o',
          text:'发的',
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3393066422,1113024882&fm=26&gp=0.jpg',
        },{
          icon:'location-o',
          text:'突然',
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3393066422,1113024882&fm=26&gp=0.jpg',
        },{
          icon:'description',
          text:'但是',
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3393066422,1113024882&fm=26&gp=0.jpg',
        },{
          icon:'description',
          text:'但是',
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3393066422,1113024882&fm=26&gp=0.jpg',
        },{
          icon:'location-o',
          text:'但是',
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3393066422,1113024882&fm=26&gp=0.jpg',
        },{
          icon:'ellipsis',
          text:'更多',
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3393066422,1113024882&fm=26&gp=0.jpg',
        },
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
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      },
      container: null,

    }
  },
  mounted() {
    this.container = this.$refs.container;
  },
  methods:{
    toHome(){
      this.$router.push({name: 'home'});
      var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
      document.documentElement.scrollTop = document.body.scrollTop = 0; 
      document.getElementById("totop").style.display = 'block';
    },
    toDetail(id,price){
      console.log(id,price)
      this.$router.push({name:'detail',params:{id:id,price:price,}})
    },
    toProduct(){
      this.$router.push({name: 'product', });
    },
    onSearch(){
      
    },
    onCancel(){
      
    }
  },
  mounted(){

  }
}
</script>
<style scoped lang='scss'>
div.home{
  background: #F0F2F5;
  width: 100%;
  height: 100vh;
  .backgroundimg{
    width: 100%;
    min-height: 5rem;
    background: url('../assets/img/backgroundIMG.jpg') no-repeat ;
    background-size: 100% 5rem;
    box-shadow: 0rem -3rem 3rem #fff inset;
    z-index: -1;
    position: fixed;
    top: 0;
  }
  div.nav{
    header{
      width: 100%;
      height: 90px;
      background: #fff;
      img{
        margin: 10px;
        height: 70px;
      }
    }
    main{
      h3{
        margin: 20px 0 20px 0;
        font-weight: 100;
        font-size: 24px;
        text-align: center;
      }
      ul.list{
        overflow: hidden;
        background: #F0F2F5;
        li{
          width: 47%;
          margin: .1rem;
          float: left;
          background: #fff;
          //height: 5.35rem;
          img{
            clear: both;
            display: block;
            margin: .18rem auto;
            width: 3rem;
          }
          p.productName{
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            width: 89%;
            margin: 0 1em 0 1em;
          }
          p.producPrace{
            margin: 15px 0 5px 0;
            color: red;
            font-size: 18px;
            text-indent: .5em;
            span{
              font-size: 12px;
            }
          }
        }
      }
      .listIMG{
        width: .7rem;
      }
      .columnsTest{
        margin-top: 10px;
      }
      .down{
        margin: 15px 0 65px 0;
      }
    }
    ul.top{
      width: 45px;
      height: 45px;
      position: fixed;
      bottom: 2rem;
      right: 1rem;
      text-align: center;
      border-radius: 1rem;
      border: 1px #eee solid;
      background: #fff;
      
      li:first-child{
        text-align: center;
        margin-top: 4px;
      }
      li:last-child{
        //margin-top: -19px;
        transform:rotate(180deg);
      }
    }
  }
}
.swichImg{
  height: 4rem;
  width: 100%;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  display: block;
  margin-bottom: 5px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: 'iconfont';
  src: url('../assets/font_1bne9ofzit6/iconfont.eot');
  src: url('../assets/font_1bne9ofzit6/iconfont.eot?#iefix') format('embedded-opentype'),
      url('../assets/font_1bne9ofzit6/iconfont.woff2') format('woff2'),
      url('../assets/font_1bne9ofzit6/iconfont.woff') format('woff'),
      url('../assets/font_1bne9ofzit6/iconfont.ttf') format('truetype'),
      url('../assets/font_1bne9ofzit6/iconfont.svg#iconfont') format('svg');
}
.totop{
  position: fixed;
  width: 1rem ;
  height: 1rem;
  border-radius: 1.25rem;
  opacity: 0.8;
  background: rgba(43, 43, 43, 0.9);
  box-shadow: 0 1px 5px 0 #e0e0e0;
  right: .6rem;
  bottom: 2rem;
  z-index: 1100;
  -webkit-transition: opacity .5s;
  transition: opacity .5s;
  display: none;
  p{
    height: 1rem;
    line-height: 1rem;
    font-size: .5rem;
    color: #fff;
    text-align: center;
  }
}

</style>
