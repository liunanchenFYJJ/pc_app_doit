// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import Layout from './Layout';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(router);
Vue.use(iView);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#layout',
  router,
  components: { Layout },
  template: '<Layout/>',
});
