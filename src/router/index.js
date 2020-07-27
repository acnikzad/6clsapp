import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Gallery from '../views/Gallery.vue';
import Concrete from '../views/Concrete.vue';
import Landscape from '../views/Landscape.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/concrete',
    name: 'Concrete',
    component: Concrete
  },
  {
    path: '/landscape',
    name: 'Landscape',
    component: Landscape
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
