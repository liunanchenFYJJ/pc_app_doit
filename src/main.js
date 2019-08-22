// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import store from './store';
import Layout from './Layout';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import { hasPermission } from '@/utils/index';

Vue.use(router);
Vue.use(store);
Vue.use(iView);

Vue.prototype.hasPermission = hasPermission;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#layout',
  router,
  store,
  components: { Layout },
  template: '<Layout/>',
});
