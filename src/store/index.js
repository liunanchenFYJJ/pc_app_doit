import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  btnList: ['sys:role:add', 'sys:role:edit'],
};

export default new Vuex.Store({
  state,
});
