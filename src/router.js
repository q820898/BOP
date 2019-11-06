import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import detail from './views/detail.vue'
import pay from './views/pay.vue'
import clearing from './views/clearing.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    //首页
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        keepAlive: true,
        needToken: false
      }
    },


    //商品分类
    {
      path: '/ClassificationGoods',
      name: 'ClassificationGoods',
      component: function () { 
        return import( './views/ClassificationGoods/ClassificationGoods.vue')
      },          
      meta: {
        keepAlive: true,
        needToken: false
      }
    },




    //购物车
    {
      path: '/ShoppingTrolley',
      name: 'ShoppingTrolley',
      component: function () { 
        return import( './views/ShoppingTrolley/ShoppingTrolley.vue')
      },          
      meta: {
        keepAlive: true,
        needToken: true
      }
    },






    
    //我的
    {
      path: '/My',
      name: 'My',
      component: function () { 
        return import( './views/My/My.vue')
      },          
      meta: {
        keepAlive: true,
        needToken: true
      }
    },
    {
      path: '/personalInformation',
      name: 'personalInformation',
      component: function () { 
        return import( './views/My/personalInformation.vue')
      },          
      meta: {
        keepAlive: true,
        needToken: true
      }
    },
    {
      path: '/collected',
      name: 'collected',
      component: function () { 
        return import( './views/My/collected.vue')
      },          
      meta: {
        keepAlive: true,
        needToken: true
      }
    },
    {
      path: '/billing',
      name: 'billing',
      component: function () { 
        return import( './views/My/billing.vue')
      },          
      meta: {
        keepAlive: true,
        needToken: true
      }
    },
    {
      path: '/deliveryAddress/:disply',
      name: 'deliveryAddress',
      component: function () { 
        return import( './views/My/deliveryAddress.vue')
      },          
      meta: {
        keepAlive: true,
        needToken: true
      }
    },
    {
      path: '/addressEdit/:id',
      name: 'addressEdit',
      component: function () { 
        return import( './views/My/addressEdit.vue')
      },          
      meta: {
        keepAlive: true,
        needToken: true
      }
    },
    {
      path: '/goodsOrder',
      name: 'goodsOrder',
      component: function () { 
        return import( './views/My/goodsOrder.vue')
      },          
      meta: {
        keepAlive: true,
        needToken: true
      }
    },
    {
      path: '/foodsOrder',
      name: 'foodsOrder',
      component: function () { 
        return import( './views/My/foodsOrder.vue')
      },          
      meta: {
        keepAlive: true,
        needToken: true
      }
    },    
    {
      path: '/addBilling',
      name: 'addBilling',
      component: function () { 
        return import( './views/My/addBilling.vue')
      },          
      meta: {
        keepAlive: true,
        needToken: true
      }
    },














    //Universal
    {
      path: '/login',
      name: 'login',
      component: function () { 
        return import( './views/login.vue')
      },          
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/product',
      name: 'product',
      component: function () { 
        return import( './views/product.vue')
      },          
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/detail/:id/:price',
      name: 'detail',
      component: function () { 
        return import( './views/detail.vue')
      },          
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/pay/:price',
      name: 'pay',
      component: function () { 
        return import( './views/pay.vue')
      },          
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/clearing',
      name: 'clearing',
      component: function () { 
        return import( './views/clearing.vue')
      },          
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/discounts',
      name: 'discounts',
      component: function () { 
        return import( './views/discounts.vue')
      },          
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/discountsDetail',
      name: 'discountsDetail',
      component: function () { 
        return import( './views/discountsDetail.vue')
      },          
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/myDiscounts',
      name: 'myDiscounts',
      component: function () { 
        return import( './views/myDiscounts.vue')
      },          
      meta: {
        keepAlive: true,
      }
    },
    // {
    //   path: '/Skeleton',
    //   name: 'Skeleton',
    //   component: function () { 
    //     return import( './components/Skeleton.vue')
    //   },          
    //   meta: {
    //     keepAlive: true,
    //   }
    // }
    
  ]
})
