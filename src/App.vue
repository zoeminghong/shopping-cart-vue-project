<template>
  <!--<div id="app">-->
  <!--<img src="./assets/logo.png">-->
  <!--<hello></hello>-->
  <!--</div>-->
  <div id="shoppingCar">
    <header class="title-wrap"><span class="line-v"></span><span class="title">购物车</span><span
      class="line-v"></span></header>
    更改产品次数统计：{{total}}
    <hello message="you have a message" v-on:change="changeCount">
      <h4>测试slot功能</h4>
    </hello>
  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    name: 'app',
    data(){
      return {total: 0}
    },
    components: {
        Hello
//      hello: {
//        template: "<Hello/>",
//        components:{Hello}
//      }
    },
    methods: {
      changeCount: function () {
        this.total += 1;
      }
    }
  }
</script>

<!--<style>-->
<!--#app {-->
<!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!-- -webkit-font-smoothing: antialiased;-->
<!-- -moz-osx-font-smoothing: grayscale;-->
<!--text-align: center;-->
<!--color: #2c3e50;-->
<!--margin-top: 60px;-->
<!--}-->
<!--</style>-->
