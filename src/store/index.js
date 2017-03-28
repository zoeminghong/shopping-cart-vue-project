/**
 * Created by gjason on 2017/3/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counts: 0
  },
  mutations: {
    increment: function (state) {
      state.counts++;
    },
    decrement: function (state) {
      state.counts--;
    }
  },
  // 触发mutation中的方法
  actions: {
    increment (context) {
      context.commit('increment')
    },
    decrement (context) {
      context.commit('decrement')
    }
  }
})
