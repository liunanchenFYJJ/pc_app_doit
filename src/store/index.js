import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  btnList: ['sys:role:add', 'sys:role:edit'],
  num: 0, // 货物数量
  // totalPrice: 0,
  shoppingCartList: [],
};

const mutations = {
  addGoods(state, { item, num }) {
    state.num++;
    state.totalPrice = num * item.price;
  },
  delGoods(state, { item, num }) {
    state.num--;
    state.totalPrice = num * item.price;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
