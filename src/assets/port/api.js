import pako from '@/assets/port/pako.min.js'
import axios from 'axios'
import store from '../../store.js'

var API = {}
export default API

//let host = "127.0.1.1"

let host = "http://47.93.137.111:11113/WebMemberInvoker"


API.ajax = function (type, url, func, data) {
  let encryption = btoa(pako.gzip(JSON.stringify(data), { to: 'string' }));
  let obj = {
    headers: {
  //"Content-Type": "application/json",
  //'Content-Type': 'text/plain; charset=UTF-8',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
  method: type,
  url: host + url,
  data: encryption,
  };
  //obj.data = data || {};
  axios(obj)
    .then(function (result) {
      var response = JSON.parse(pako.inflate(atob(result.data), { to: 'string' }));
        //console.log(response)
        return func && func(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
//注册
API.signUp = function (func, data) {
    API.ajax('post', '/user/signup',  func ,data);
};
//发票
API.billing = function (func, data) {
    API.ajax('post', '?ar=Basics&c=Basics&a=BASICS_ADVERTISEMENT_INFO_GETVIEW',  func ,data);
};
//首页
API.home = function (func, data) {
    API.ajax('post', '?ar=Basics&c=Basics&a=BASICS_AIRPORT_INFO_INSERT',  func ,data);
};
//广告列表
API.advertisingList = function (func, data) {
    API.ajax('post', '?ar=Basics&c=Basics&a=BASICS_ADVERTISEMENT_INFO_GETVIEW',  func ,data);
};
//商品列表
API.goodsList = function (func, data) {
    API.ajax('post', '?ar=Product&c=Product&a=PRODUCT_GOODS_INFO_GETVIEW',  func ,data);
};
//获取商品和主产品信息
API.mainProduct = function (func, data) {
    API.ajax('post', '?ar=Product&c=Product&a=PRODUCT_GOODS_INFO_BYCP',  func ,data);
};





    // let obj = {
    //   id:333
    // }
    // axios({
    //     method: "POST",
    //     headers: {
    //       //"Content-Type": "application/json",
    //       //'Content-Type': 'text/plain; charset=UTF-8',
    //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //     },
    //     url: "http://47.93.137.111:11113/WebMemberInvoker?ar=Basics&c=Basics&a=BASICS_ADVERTISEMENT_INFO_GETVIEW",  
    //     data:btoa(pako.gzip(JSON.stringify(obj), { to: 'string' })), 
    // }).then(function (result) {
    //     var response = JSON.parse(pako.inflate(atob(result.data), { to: 'string' }));
    //     console.log(response);
    // }).catch(function (error) {
    //     console.log(error);
    // });