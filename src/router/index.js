import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Gym from '@/pages/Gym';
import GymDetails from '@/pages/GymDetails';
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
      // children: [
      //   {
      //     path: 'details',
      //     name: 'GymDetails',
      //     component: GymDetails,
      //   }
      // ],
    },
    {
      path: '/gym/:id',
      name: 'GymDetails',
      component: GymDetails,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ],
});
