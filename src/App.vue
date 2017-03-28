<template>
  <div id="shoppingCar">
    <header class="title-wrap"><span class="line-v"></span><span class="title">购物车</span><span
      class="line-v"></span></header>
    更改产品次数统计：{{total}}
    <!--message是父组件传递数据给子组件-->
    <hello message="you have a message" v-on:change="changeCount">
      <!--用于替换子组件中的<solt></solt>标签内容-->
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
    },
    methods: {
//      子组件通知事件的触发
      changeCount: function () {
        this.total += 1;
      }
    }
  }
</script>
