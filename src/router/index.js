import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Gym from '@/pages/Gym';
import GymDetails from '@/pages/GymDetails';
import Checkout from '@/pages/Checkout';
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
      path: '/gym',
      name: 'Gym',
      component: Gym,
    },
    {
      path: '/gym/:id',
      name: 'GymDetails',
      component: GymDetails,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ],
});
