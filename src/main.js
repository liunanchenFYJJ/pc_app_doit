// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import store from './store';
import Layout from './Layout';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './theme/index.less';
import './theme/global_style.scss';
import { hasPermission } from '@/utils/index';
import axios from 'axios';

Vue.use(router);
Vue.use(store);
Vue.use(iView);

Vue.prototype.hasPermission = hasPermission;
Vue.prototype.$axios = axios;
// Vue.prototype.HOST = '/api';
axios.defaults.baseURL = 'https://dtwx3.doit10019.com/diantuo/';
// axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#layout',
  router,
  store,
  components: { Layout },
  template: '<Layout/>',
});
