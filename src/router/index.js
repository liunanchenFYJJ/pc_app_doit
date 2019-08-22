import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Ticket from '@/pages/Ticket';
import Test from '@/pages/Test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ],
});
