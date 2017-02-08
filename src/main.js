// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
// import App from './App'

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
Vue.use(VueResource);
var vm = new Vue({
  el: '#app',
  data: {
    cartList:[]
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getDataList();
    })
  },
  filters:{
    round:function (value) {
      return value.toFixed(2)
    }
  },
  methods: {
    getDataList: function () {
      this.$http.get('static/resource/cart.json').then(function (response) {
        vm.cartList=response.body.result;
      })
    },
    plus:function (item) {
      item.count++;
    },
    minus:function (item) {
      if(item.count>1){
        item.count--;
      }else{
        item.count=1;
      }
    },
    getTotalMount:function () {
      var sum=0;
      this.cartList.forEach(function (value,index) {
        sum+=value.count*value.price;
      });
      return sum;
    }
  }
});
