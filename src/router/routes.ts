import { RouterOptions } from 'vue-router';

const routes: RouterOptions['routes'] = [
  {
    path: '/auth/login',
    component: () => import('@@/auth/Login.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/auth/login',
  },
];

export default routes;
