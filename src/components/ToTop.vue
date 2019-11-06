<template>
  <div>
    <div class="totop" id="totop" @click="Top()">
      <p>
        <van-icon name="arrow-up" />
      </p>
    </div>
  </div>
</template>

<script>
import ToTop from '@/components/ToTop.vue';
export default {
  name: 'ToTop',
  components: {
    ToTop,
  },
  data(){
    return{
      
      //totop:'',
    }
  },
  created(){
    
  },
  methods:{
    Top(){
      var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
      document.documentElement.scrollTop = document.body.scrollTop = 0; 
    },
    showIcon() {
      if(document.documentElement.scrollTop && document.documentElement.scrollTop > 100){
        document.getElementById("totop").style.display = 'block';
      }else{
        document.getElementById("totop").style.display = 'none';
      }
    },
    acceptList(){

    },

  },
  mounted(){
     window.addEventListener("scroll", this.showIcon);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
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
}
</style>
