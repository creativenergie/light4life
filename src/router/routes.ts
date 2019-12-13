import { RouteConfig } from 'vue-router'
import MyLayout from 'layouts/MyLayout.vue'

const routes: RouteConfig[] = [
  {
    path: '/',
    // component: () => import('layouts/MyLayout.vue'),
    component: MyLayout,
    children: [{ path: '', component: () => import('pages/Index.vue') }, { path: 'thankyou', component: () => import('pages/ThankYou.vue') }]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
